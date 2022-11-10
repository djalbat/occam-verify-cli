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

  getTypes(releaseNames = []) {
    const types = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      push(types, this.types);

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextTypes = releaseContext.getTypes(releaseNames);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(releaseNames = []) {
    const rules = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      push(rules, this.rules);

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextRules = releaseContext.getRules(releaseNames);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(releaseNames = []) {
    const axioms = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      push(axioms, this.axioms);

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextAxioms = releaseContext.getAxioms(releaseNames);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getLabels(releaseNames = []) {
    const labels = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.rules.forEach((rule) => {
        const ruleLabels = rule.getLabels();

        push(labels, ruleLabels);
      });

      this.axioms.forEach((axiom) => {
        const axiomLabels = axiom.getLabels();

        push(labels, axiomLabels);
      });

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextAxioms = releaseContext.getAxioms(releaseNames);

        push(labels, releaseContextAxioms);
      });
    }

    return labels;
  }

  getCombinators(releaseNames = []) {
    const combinators = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      push(combinators, this.combinators);

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextCombinators = releaseContext.getCombinators(releaseNames);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(releaseNames = []) {
    const constructors = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      push(constructors, this.constructors);

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextConstructors = releaseContext.getConstructors(releaseNames);

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
