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
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, types, rules, axioms, combinators, constructors) {
    super(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts);

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
    const types = [
          ...this.types
        ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextTypes = releaseContext.getTypes(releaseNames);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(releaseNames = []) {
    const rules = [
            ...this.rules
          ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextRules = releaseContext.getRules(releaseNames);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(releaseNames = []) {
    const axioms = [
            ...this.axioms
          ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
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

    this.rules.forEach((rule) => {
      const ruleLabels = rule.getLabels();

      push(labels, ruleLabels);
    });

    this.axioms.forEach((axiom) => {
      const axiomLabels = axiom.getLabels();

      push(labels, axiomLabels);
    });

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextAxioms = releaseContext.getAxioms(releaseNames);

        push(labels, releaseContextAxioms);
      });
    }

    return labels;
  }

  getCombinators(releaseNames = []) {
    const combinators = [
            ...this.combinators
          ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextCombinators = releaseContext.getCombinators(releaseNames);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(releaseNames = []) {
    const constructors = [
            ...this.constructors
          ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextConstructors = releaseContext.getConstructors(releaseNames);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  initialise(dependencyReleaseContexts) {
    super.initialise(dependencyReleaseContexts);

    const topLevelDeclarationsJSON = this.contextJSON,  ///
          ruleMap = this.florenceParser.getRuleMap(),
          callback = (content, ruleName) => {
            const tokens = this.florenceLexer.tokenise(content),
                  rule = ruleMap[ruleName],
                  node = this.florenceParser.parse(tokens, rule);

            return node;
          };

    topLevelDeclarationsJSON.forEach((topLevelDeclarationJSON) => {
      const json = topLevelDeclarationJSON, ///
            { kind } = json;

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
    const verified = false, ///
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = null,
          types = null,
          rules = null,
          axioms = null,
          combinators = null,
          constructors = null,
          releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, types, rules, axioms, combinators, constructors);

    return releaseContext;
  }
}
