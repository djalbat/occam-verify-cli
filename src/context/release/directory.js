"use strict";

import ReleaseContext from "../../context/release";

import { push } from "../../utilities/array";
import { customGrammarFromNameAndEntries } from "../../utilities/customGrammar";

export default class DirectoryReleaseContext extends ReleaseContext {
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, fileContexts) {
    super(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts);

    this.fileContexts = fileContexts;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getTypes(releaseNames = []) {
    const types = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextTypes = fileContext.getTypes(bubble);

        push(types, fileContextTypes);
      });

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

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextRules = fileContext.getRules(bubble);

        push(rules, fileContextRules);
      });

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

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextAxioms = fileContext.getAxioms(bubble);

        push(axioms, fileContextAxioms);
      });

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

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextLabels = fileContext.getLabels(bubble);

        push(labels, fileContextLabels);
      });

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextLabels = releaseContext.getLabels(releaseNames);

        push(labels, releaseContextLabels);
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

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextCombinators = fileContext.getCombinators(bubble);

        push(combinators, fileContextCombinators);
      });

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

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextConstructors = fileContext.getConstructors(bubble);

        push(constructors, fileContextConstructors);
      });

      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const releaseContextConstructors = releaseContext.getConstructors(releaseNames);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  toJSON() {
    const json = [];

    this.fileContexts.forEach((fileContext) => {
      const fileContextJSON = fileContext.toJSON();

      push(json, fileContextJSON);
    });

    return json;
  }

  static fromLogNameEntriesAndCallbacks(log, name, entries, callbacks) {
    const verified = false,
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          florenceLexer = null,
          florenceParser = null,
          dependencyReleaseContexts = null,
          fileContexts = [],
          directoryReleaseContext = new DirectoryReleaseContext(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts, fileContexts);

    return directoryReleaseContext;
  }
}
