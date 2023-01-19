"use strict";

import ReleaseContext from "../../context/release";

import { rewriteNodes } from "occam-grammar-utilities";

import Rule from "../../rule";
import Type from "../../type";
import Axiom from "../../axiom";
import Lemma from "../../lemma";
import Theorem from "../../theorem";
import Combinator from "../../combinator";
import Constructor from "../../constructor";

import { push } from "../../utilities/array";
import { customGrammarFromNameAndEntries } from "../../utilities/customGrammar";
import { RULE_KIND, TYPE_KIND, AXIOM_KIND, LEMMA_KIND, THEOREM_KIND, COMBINATOR_KIND, CONSTRUCTOR_KIND } from "../../kinds";

export default class FileReleaseContext extends ReleaseContext {
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, combinators, constructors) {
    super(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);

    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
    this.combinators = combinators;
    this.constructors = constructors;
    this.contextJSON = contextJSON;
  }

  getContextJSON() {
    return this.contextJSON;
  }

  getLabels(includeDependencies = true) {
    const labels = [];

    this.rules.forEach((rule) => {
      const ruleLabels = rule.getLabels();

      push(labels, ruleLabels);
    });

    this.axioms.forEach((axiom) => {
      const axiomLabels = axiom.getLabels();

      push(labels, axiomLabels);
    });

    this.theorems.forEach((theorem) => {
      const theoremLabels = theorem.getLabels();

      push(labels, theoremLabels);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencies);

        push(labels, releaseContextAxioms);
      });
    }

    return labels;
  }

  getTypes(includeDependencies = true) {
    const types = [];

    push(types, this.types);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTypes = releaseContext.getTypes(includeDependencies);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(includeDependencies = true) {
    const rules = [];

    push(rules, this.rules);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextRules = releaseContext.getRules(includeDependencies);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(includeDependencies = true) {
    const axioms = [];

    push(axioms, this.axioms);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencies);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getLemmas() {
    const theorems = [];

    push(theorems, this.theorems);

    return theorems;
  }

  getTheorems(includeDependencies = true) {
    const theorems = [];

    push(theorems, this.theorems);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTheorems = releaseContext.getTheorems(includeDependencies);

        push(theorems, releaseContextTheorems);
      });
    }

    return theorems;
  }

  getCombinators(includeDependencies = true) {
    const combinators = [];

    push(combinators, this.combinators);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextCombinators = releaseContext.getCombinators(includeDependencies);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(includeDependencies = true) {
    const constructors = [];

    push(constructors, this.constructors);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConstructors = releaseContext.getConstructors(includeDependencies);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  nodeFromContentAndRuleName(content, ruleName) {
    const ruleMap = this.florenceParser.getRuleMap(),
          rule = ruleMap[ruleName],
          tokens = this.florenceLexer.tokenise(content),
          node = this.florenceParser.parse(tokens, rule);

    if (node !== null) {
      rewriteNodes(node);
    }

    return node;
  }

  fromJSON() {
    const jsonArray = this.contextJSON,
          releaseContext = this;  ///

    jsonArray.forEach((json) => {
      const { kind } = json;

      switch (kind) {
        case TYPE_KIND: {
          const type = Type.fromJSON(json, releaseContext);

          this.types.push(type);

          break;
        }

        case RULE_KIND: {
          const rule = Rule.fromJSON(json, releaseContext);

          this.rules.push(rule);

          break;
        }

        case AXIOM_KIND: {
          const axiom = Axiom.fromJSON(json, releaseContext);

          this.axioms.push(axiom);

          break;
        }

        case LEMMA_KIND: {
          const lemma = Lemma.fromJSON(json, releaseContext);

          this.lemmas.push(lemma);

          break;
        }

        case THEOREM_KIND: {
          const theorem = Theorem.fromJSON(json, releaseContext);

          this.theorems.push(theorem);

          break;
        }

        case COMBINATOR_KIND: {
          const combinator = Combinator.fromJSON(json, releaseContext);

          this.combinators.push(combinator);

          break;
        }

        case CONSTRUCTOR_KIND: {
          const constructor = Constructor.fromJSON(json, releaseContext);

          this.constructors.push(constructor);

          break;
        }
      }
    });
  }

  initialise(dependencyReleaseContexts) {
    super.initialise(dependencyReleaseContexts);

    this.fromJSON();
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
          lemmas = [],
          theorems = [],
          combinators = [],
          constructors = [],
          releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, contextJSON, types, rules, axioms, lemmas, theorems, combinators, constructors);

    return releaseContext;
  }
}
