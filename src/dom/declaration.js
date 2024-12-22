"use strict";

import dom from "../dom";
import Substitutions from "../substitutions";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { unifyStatementIntrinsically } from "../utilities/unification";
import { stripBracketsFromStatementNode } from "../utilities/brackets";

const statementNodeQuery = nodeQuery("/declaration/statement");

export default domAssigned(class Declaration {
  constructor(string, reference, statement) {
    this.string = string;
    this.reference = reference;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getStatement() {
    return this.statement;
  }

  matchSubstitution(substitution, context) {
    let substitutionMatches;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Matching the '${substitutionString}' substitution with the '${declarationString}' declaration...`);

    const statement = substitution.getStatement(),
          metavariable = substitution.getMetavariable(),
          statementMatches = this.statement.match(statement),
          metavariableMatchesReference = this.reference.matchMetavariable(metavariable);

    substitutionMatches = (metavariableMatchesReference && statementMatches);

    if (substitutionMatches) {
      context.debug(`...matched the '${declarationString}' substitution with the '${substitutionString}' declaration.`);
    }

    return substitutionMatches;
  }

  verify(frame, assignments, stated, context) {
    let verified = false;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration...`);

    const referenceVerified = this.verifyReference(assignments, stated, context);

    if (referenceVerified) {
      const statementVerified = this.verifyStatement(assignments, stated, context);

      if (statementVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(frame, assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(frame, context);
        }

        if (verifiedWhenStated || verifiedWhenDerived) {
          verified = true;
        }
      }
    }

    if (verified) {
      context.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerified;

    const referenceString = this.reference.getString(),
          declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration's '${referenceString}' reference...`);

    referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      context.debug(`...verified the '${declarationString}' declaration's '${referenceString}' reference.`);
    }

    return referenceVerified;
  }

  verifyStatement(assignments, stated, context) {
    let statementVerified;

    const statementString = this.statement.getString(),
          declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration's '${statementString}' statement...`);

    stated = true;  ///

    assignments = null; ///

    statementVerified = this.statement.verify(assignments, stated, context);

    if (statementVerified) {
      context.debug(`...verified the '${declarationString}' declaration's '${statementString}' statement.`);
    }

    return statementVerified;
  }

  verifyWhenStated(frame, assignments, context) {
    let verifiedWhenStated;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' stated declaration...`);

    const metavariablePresent = context.isMetavariablePresentByReference(this.reference);

    if (metavariablePresent) {
      verifiedWhenStated = true;
    } else {
      const metaLemmaMetatheorems = context.findMetaLemmaMetatheoremsByReference(this.reference),
            metaLemmaMetatheoremsUnified = metaLemmaMetatheorems.every((metaLemmaMetatheorem) => {
              const metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);

              if (metaLemmaMetatheoremUnified) {
                return true;
              }
            });

      verifiedWhenStated = metaLemmaMetatheoremsUnified; ///
    }

    if (verifiedWhenStated) {
      context.trace(`...verified the '${declarationString}' stated declaration.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(frame, context) {
    let verifiedWhenDerived;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' derived declaration...`);

    const metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(this.reference);

    if (metaLemmaMetatheorem !== null) {
      const substitutions = metaLemmaMetatheorem.getSubstitutions(),
            substitutionsMatches = frame.matchSubstitutions(substitutions, context);

      verifiedWhenDerived = substitutionsMatches; ///
    }

    if (verifiedWhenDerived) {
      context.trace(`...verified the '${declarationString}' derived declaration.`);
    }

    return verifiedWhenDerived;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const context = generalContext,  ///
          statementString = statement.getString(),
          declarationString = this.string,  ///
          declarationStatementString = this.statement.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${declarationString}' declaration's '${declarationStatementString}' statement...`);

    const generalStatement = this.statement,
          specificStatement = statement,  ///
          statementUUnifiedIntrinsically = unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext);

    statementUnified = statementUUnifiedIntrinsically;  ///

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${declarationString}' declaration's '${declarationStatementString}' statement.`);
    }

    return statementUnified;
  }

  unifyLabelWithReference(label, substitutions, generalContext, specificContext) {
    let labelUnifiedWithReference;

    const context = generalContext, ///
          labelString = label.getString(),
          referenceString = this.reference.getString(),
          declarationString = this.string;  ///

    context.trace(`Unifying the '${labelString}' label with the '${declarationString}' declaration's '${referenceString}' reference...`);

    const labelUnified = this.reference.unifyLabel(label, substitutions, context);

    labelUnifiedWithReference = labelUnified; ///

    if (labelUnifiedWithReference) {
      context.debug(`...unified the '${labelString}' label with the '${declarationString}' declaration's '${referenceString}' reference.`);
    }

    return labelUnifiedWithReference;
  }

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnified;

    const declarationString = this.string,  ///
          metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);

    const fileContext = metaLemmaMetatheorem.getFileContext(),
          generalContext = context, ///
          specificContext = fileContext,
          labelSubstitutions = Substitutions.fromNothing(),
          label = metaLemmaMetatheorem.getLabel(),
          substitutions = labelSubstitutions, ///
          labelUnifiedWithReference = this.unifyLabelWithReference(label, substitutions, generalContext, specificContext);

    if (labelUnifiedWithReference) {
      const statementSubstitutions = Substitutions.fromNothing(),
            statement = metaLemmaMetatheorem.getStatement(),
            substitutions = statementSubstitutions, ///
            statementUUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUUnified) {
        const labelSubstitutionsMatchStatementSubstitutions = labelSubstitutions.matchSubstitutions(statementSubstitutions);

        metaLemmaMetatheoremUnified = labelSubstitutionsMatchStatementSubstitutions;  ///
      }
    }

    if (metaLemmaMetatheoremUnified) {
      context.trace(`...unified the '${metaLemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);
    }

    return metaLemmaMetatheoremUnified;
  }

  static name = "Declaration";

  static fromDeclarationNode(declarationNode, context) {
    const { Reference, Statement } = dom,
          node = declarationNode,  ///
          string = context.nodeAsString(node);

    let statementNode;

    statementNode = statementNodeQuery(declarationNode);

    statementNode = stripBracketsFromStatementNode(statementNode);  ///

    const reference = Reference.fromDeclarationNode(declarationNode, context),
          statement = Statement.fromStatementNode(statementNode, context),
          declaration = new Declaration(string, reference, statement);

    return declaration;
  }
});
