"use strict";

import ReleaseContext from "../../context/release";

import Rule from "../../rule";
import Type from "../../type";
import Axiom from "../../axiom";
import Lemma from "../../lemma";
import Theorem from "../../theorem";
import Conjecture from "../../conjecture";
import Combinator from "../../combinator";
import Constructor from "../../constructor";

import { push } from "../../utilities/array";
import { customGrammarFromNameAndEntries } from "../../utilities/customGrammar";
import { RULE_KIND, TYPE_KIND, AXIOM_KIND, LEMMA_KIND, THEOREM_KIND, CONJECTURE_KIND, COMBINATOR_KIND, CONSTRUCTOR_KIND } from "../../kinds";

export default class FileReleaseContext extends ReleaseContext {
  constructor(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON) {
    super(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts);

    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
    this.conjectures = conjectures;
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

  getConjectures(includeDependencies = true) {
    const conjectures = [];

    push(conjectures, this.conjectures);

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConjectures = releaseContext.getConjectures(includeDependencies);

        push(conjectures, releaseContextConjectures);
      });
    }

    return conjectures;
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

  fromJSON() {
    const jsonArray = this.contextJSON,
          lexer = this.getLexer(),
          parser = this.getParser();

    jsonArray.forEach((json) => {
      const { kind } = json;

      switch (kind) {
        case TYPE_KIND: {
          const type = Type.fromJSON(json, lexer, parser);

          this.types.push(type);

          break;
        }

        case RULE_KIND: {
          const rule = Rule.fromJSON(json, lexer, parser);

          this.rules.push(rule);

          break;
        }

        case AXIOM_KIND: {
          const axiom = Axiom.fromJSON(json, lexer, parser);

          this.axioms.push(axiom);

          break;
        }

        case LEMMA_KIND: {
          const lemma = Lemma.fromJSON(json, lexer, parser);

          this.lemmas.push(lemma);

          break;
        }

        case THEOREM_KIND: {
          const theorem = Theorem.fromJSON(json, lexer, parser);

          this.theorems.push(theorem);

          break;
        }

        case CONJECTURE_KIND: {
          const conjecture = Conjecture.fromJSON(json, lexer, parser);

          this.conjectures.push(conjecture);

          break;
        }

        case COMBINATOR_KIND: {
          const combinator = Combinator.fromJSON(json, lexer, parser);

          this.combinators.push(combinator);

          break;
        }

        case CONSTRUCTOR_KIND: {
          const constructor = Constructor.fromJSON(json, lexer, parser);

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

  static fromLogNameEntriesAndContextJSON(log, name, entries, contextJSON) {
    const lexer = null,
          parser = null,
          verified = true,
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          dependencyReleaseContexts = null,
          types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          conjectures = [],
          combinators = [],
          constructors = [],
          releaseContext = new FileReleaseContext(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, contextJSON);

    return releaseContext;
  }
}
