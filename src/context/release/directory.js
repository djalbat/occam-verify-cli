"use strict";

import ReleaseContext from "../../context/release";

import { push } from "../../utilities/array";
import { customGrammarFromEntries } from "../../utilities/customGrammar";

export default class DirectoryReleaseContext extends ReleaseContext {
  constructor(log, verified, callbacks, customGrammar, florenceLexer, florenceParser, releaseContexts, fileContexts, release) {
    super(log, verified, callbacks, customGrammar, florenceLexer, florenceParser, releaseContexts);

    this.fileContexts = fileContexts;
    this.release = release;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getRelease() {
    return this.release;
  }

  getReleaseName() {
    const releaseName = this.release.getName();

    return releaseName;
  }

  getFile(filePath) { return this.release.getFile(filePath); }

  getVersion() { return this.release.getVersion(); }

  getFilePaths() { return this.release.getFilePaths(); }

  getDependencies() { return this.release.getDependencies(); }

  matchShortenedVersion(shortenedVersion) { return this.release.matchShortenedVersion(shortenedVersion); }

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

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextRules = releaseContext.getRules(releaseNames);

        push(rules, releaseContextRules);
      });
    }

    return rules;
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

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextTypes = releaseContext.getTypes(releaseNames);

        push(types, releaseContextTypes);
      });
    }

    return types;
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

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextLabels = fileContext.getLabels(bubble);

        push(labels, fileContextLabels);
      });

      this.releaseContexts.forEach((releaseContext) => {
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

      this.releaseContexts.forEach((releaseContext) => {
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

      this.releaseContexts.forEach((releaseContext) => {
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

  static fromLogReleaseAndCallbacks(log, release, callbacks) {
    const entries = release.getEntries(),
          verified = false,
          customGrammar = customGrammarFromEntries(entries),
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = null,
          fileContexts = [],
          releaseContext = new DirectoryReleaseContext(log, verified, callbacks, customGrammar, florenceLexer, florenceParser, releaseContexts, fileContexts, release);

    return releaseContext;
  }
}
