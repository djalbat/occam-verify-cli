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

  getLabels(includeDependencyReleaseContexts = true) {
    const labels = [];

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextLabels = fileContext.getLabels(includeReleaseContext);

      push(labels, fileContextLabels);
    });

    if (includeDependencyReleaseContexts) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencyReleaseContexts = false,
              releaseContextLabels = releaseContext.getLabels(includeDependencyReleaseContexts);

        push(labels, releaseContextLabels);
      });
    }

    return labels;
  }

  getTypes(includeDependencyReleaseContexts = true) {
    const types = [];

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextTypes = fileContext.getTypes(includeReleaseContext);

      push(types, fileContextTypes);
    });

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

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextRules = fileContext.getRules(includeReleaseContext);

      push(rules, fileContextRules);
    });

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

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextAxioms = fileContext.getAxioms(includeReleaseContext);

      push(axioms, fileContextAxioms);
    });

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

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextCombinators = fileContext.getCombinators(includeReleaseContext);

      push(combinators, fileContextCombinators);
    });

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

    this.fileContexts.forEach((fileContext) => {
      const includeReleaseContext = false,
            fileContextConstructors = fileContext.getConstructors(includeReleaseContext);

      push(constructors, fileContextConstructors);
    });

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
