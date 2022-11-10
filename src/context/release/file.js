"use strict";

import ReleaseContext from "../../context/release";

import Rule from "../../rule";
import Type from "../../type";
import Axiom from "../../axiom";
import Combinator from "../../combinator";
import Constructor from "../../constructor";

import { push } from "../../utilities/array";
import { customGrammarFromNameAndEntries } from "../../utilities/customGrammar";
import { RULE_KIND, TYPE_KIND, AXIOM_KIND, COMBINATOR_KIND, CONSTRUCTOR_KIND } from "../../kinds";

export default class FileReleaseContext extends ReleaseContext {
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, combinators, constructors) {
    super(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);

    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.combinators = combinators;
    this.constructors = constructors;
    this.contextJSON = contextJSON;
  }

  getContextJSON() {
    return this.contextJSON;
  }

  getLabels(includeDependencyReleaseContexts = true) {
    const labels = [];

    this.rules.forEach((rule) => {
      const ruleLabels = rule.getLabels();

      push(labels, ruleLabels);
    });

    this.axioms.forEach((axiom) => {
      const axiomLabels = axiom.getLabels();

      push(labels, axiomLabels);
    });

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencyReleaseContexts);

        push(labels, releaseContextAxioms);
      });
    }

    return labels;
  }

  getTypes(includeDependencyReleaseContexts = true) {
    const types = [];

    push(types, this.types);

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextTypes = releaseContext.getTypes(includeDependencyReleaseContexts);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(includeDependencyReleaseContexts = true) {
    const rules = [];

    push(rules, this.rules);

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextRules = releaseContext.getRules(includeDependencyReleaseContexts);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(includeDependencyReleaseContexts = true) {
    const axioms = [];

    push(axioms, this.axioms);

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencyReleaseContexts);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getCombinators(includeDependencyReleaseContexts = true) {
    const combinators = [];

    push(combinators, this.combinators);

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextCombinators = releaseContext.getCombinators(includeDependencyReleaseContexts);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(includeDependencyReleaseContexts = true) {
    const constructors = [];

    push(constructors, this.constructors);

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextConstructors = releaseContext.getConstructors(includeDependencyReleaseContexts);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  initialise(dependencyReleaseContexts) {
    super.initialise(dependencyReleaseContexts);

    const jsonArray = this.contextJSON,  ///
          callback = (content, ruleName) => {
            const ruleMap = this.florenceParser.getRuleMap(),
                  tokens = this.florenceLexer.tokenise(content),
                  rule = ruleMap[ruleName],
                  node = this.florenceParser.parse(tokens, rule);

            return node;
          };

    jsonArray.forEach((json) => {
      const { kind } = json;

      switch (kind) {
        case TYPE_KIND: {
          const type = Type.fromJSON(json);

          this.types.push(type);

          break;
        }

        case RULE_KIND: {
          const rule = Rule.fromJSON(json, callback);

          this.rules.push(rule);

          break;
        }

        case AXIOM_KIND: {
          const axiom = Axiom.fromJSON(json, callback);

          this.axioms.push(axiom);

          break;
        }

        case COMBINATOR_KIND: {
          const combinator = Combinator.fromJSON(json, callback);

          this.combinators.push(combinator);

          break;
        }

        case CONSTRUCTOR_KIND: {
          const constructor = Constructor.fromJSON(json, callback);

          this.constructors.push(constructor);

          break;
        }
      }
    });
  }

  static fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
    const verified = true,
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          florenceLexer = null,
          florenceParser = null,
          dependencyReleaseContexts = null,
          types = [],
          rules = [],
          axioms = [],
          combinators = [],
          constructors = [],
          releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, combinators, constructors);

    return releaseContext;
  }
}
