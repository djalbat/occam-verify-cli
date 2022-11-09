"use strict";

import ReleaseContext from "../../context/release";

import { push } from "../../utilities/array";
import {combinedCustomGrammarFromReleaseContexts, customGrammarFromNameAndEntries} from "../../utilities/customGrammar";

export default class FileReleaseContext extends ReleaseContext {
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, rules, types, axioms, labels, combinators, constructors) {
    super(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts);

    this.rules = rules;
    this.types = types;
    this.axioms = axioms;
    this.labels = labels;
    this.combinators = combinators;
    this.constructors = constructors;
    this.contextJSON = contextJSON;
  }

  getContextJSON() {
    return this.contextJSON;
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
    const labels = [
            ...this.labels
          ],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextLabels = releaseContext.getLabels(releaseNames);

        push(labels, releaseContextLabels);
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

    debugger
  }

  static fromLogNameEntriesCallbacksAndContextJSON(log, name, entries, callbacks, contextJSON) {
    const verified = false, ///
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = null,
          rules = null,
          types = null,
          axioms = null,
          labels = null,
          combinators = null,
          constructors = null,
          releaseContext = new FileReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, releaseContexts, contextJSON, rules, types, axioms, labels, combinators, constructors);

    return releaseContext;
  }
}
