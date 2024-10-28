"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

class MetaLemma extends TopLevelAssertion {
  unifyReference(reference, substitutions, context) {
    let referenceUnified;

    const metaLemma = this, ///
          referenceString = reference.getString(),
          metaLemmaString = metaLemma.getString();

    context.trace(`Unifying the '${referenceString}' reference with the '${metaLemmaString}' meta-lemma...`);

    const fileContext = this.getFileContext(),
          localContext = LocalContext.fromFileContext(fileContext),
          generalContext = localContext,  ///
          specificContext = context, ///
          labelUnified = this.labels.some((label) => {
            substitutions.clear();

            const referenceUnified = reference.unifyLabel(label, substitutions, generalContext, specificContext);

            if (referenceUnified) {
              return true;
            }
          });

    referenceUnified = labelUnified;  ///

    if (referenceUnified) {
      context.debug(`...unified the '${referenceString}' reference with the '${metaLemmaString}' meta-lemma.`);
    }

    return referenceUnified;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnified;

    const metaLemma = this, ///
          statementString = statement.getString(),
          metaLemmaString = metaLemma.getString();

    context.trace(`Unifying the '${statementString}' reference with the '${metaLemmaString}' meta-lemma...`);

    const consequent = this.getConsequent();

    statementUnified = consequent.unifyStatement(statement, substitutions, context);

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' reference with the '${metaLemmaString}' meta-lemma.`);
    }

    return statementUnified;
  }

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

  static fromMetaLemmaNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(MetaLemma, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  MetaLemma
});

export default MetaLemma;