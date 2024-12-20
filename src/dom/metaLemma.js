"use strict";

import LocalContext from "../context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class MetaLemma extends TopLevelAssertion {
  verify() {
    let verified;

    const metaLemma = this, ///
          fileContext = this.getFileContext(),
          metaLemmaString = metaLemma.getString();

    fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

    verified = super.verify();

    if (verified) {
      const metaTheorem = this; ///

      fileContext.addMetatheorem(metaTheorem);

      fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verified;
  }

  verifyLabels() {
    const labelsVerified = this.labels.every((label) => {
      const nameOnly = false,
            labelVerified = label.verify(nameOnly);

      if (labelVerified) {
        return true;
      }
    });

    return labelsVerified;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnified;

    const metaLemma = this, ///
          statementString = statement.getString(),
          metaLemmaString = metaLemma.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${metaLemmaString}' meta-lemma...`);

    const suppositions = this.getSuppositions(),
          suppositionsLength = suppositions.length;

    if (suppositionsLength === 0) {
      const fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            generalContext = localContext,  ///
            specificContext = context,  ///
            statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);

      statementUnified = statementUnifiedWithConsequent;  ///
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${metaLemmaString}' meta-lemma.`);
    }

    return statementUnified;
  }

  static name = "MetaLemma";

  static fromMetaLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(MetaLemma, metaLemmaNode, fileContext); }
});
