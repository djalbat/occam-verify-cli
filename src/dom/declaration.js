"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { stripBracketsFromStatementNode } from "../utilities/brackets";
import metaLemma from "./metaLemma";

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

          verified = verifiedWhenStated;  ///
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(context);

          verified = verifiedWhenDerived; ///
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
      const metaLemmas = context.findMetaLemmasByReference(this.reference),
            metatheorems = context.findMetatheoremsByReference(this.reference),
            metaLemmaMetatheorems = [
              ...metaLemmas,
              ...metatheorems
            ],
            metaLemmaMetatheoremsVerifiedWhenStated = metaLemmaMetatheorems.every((metaLemmaMetatheorem) => {
              const metaLemmaMetatheoremVerifiedWhenStated = metaLemmaMetatheorem.verifyWhenStated(this.statement, this.reference, context);

              if (metaLemmaMetatheoremVerifiedWhenStated) {
                return true;
              }
            });

      verifiedWhenStated = metaLemmaMetatheoremsVerifiedWhenStated; ///
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

    debugger

    // const metaLemmas = context.findMetaLemmasByReference(this.reference),
    //       metatheorems = context.findMetatheoremsByReference(this.reference),
    //       metaLemmaMetatheorems = [
    //         ...metaLemmas,
    //         ...metatheorems
    //       ],
    //       metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some((metaLemmaMetatheorem) => {
    //         let metaLemmaMetatheoremUnified = true;
    //
    //         if (metaLemmaMetatheoremUnified) {
    //           metaLemmaMetatheoremUnified = frame.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
    //         }
    //
    //         if (metaLemmaMetatheoremUnified) {
    //           metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
    //         }
    //
    //         if (metaLemmaMetatheoremUnified) {
    //           return true;
    //         }
    //       });
    //
    // if (metaLemmaMetatheoremUnified) {
    //   verifiedWhenDerived = true;
    // } else {
    //   const axiom = context.findAxiomByReference(this.reference),
    //         lemma = context.findLemmaByReference(this.reference),
    //         theorem = context.findTheoremByReference(this.reference),
    //         conjecture = context.findConjectureByReference(this.reference),
    //         axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);
    //
    //   if (axiomLemmaTheoremConjecture !== null) {
    //     const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
    //
    //     if (axiomLemmaTheoremConjectureUnified) {
    //       verifiedWhenDerived = true;
    //     }
    //   }
    // }

    if (verifiedWhenDerived) {
      context.trace(`...verified the '${declarationString}' derived declaration.`);
    }

    return verifiedWhenDerived;
  }

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = statement.getString(),
          declarationStatementString = this.statement.getString(); ///

    context.trace(`Unifying the '${statementString}' statement with the '${declarationStatementString}' statement...`);

    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatementNode(statementNode); ///

    const statementNodeMatches = this.statement.matchStatementNode(statementNode);

    statementUnified = statementNodeMatches;  ///

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${declarationStatementString}' statement.`);
    }

    return statementUnified;
  }

  unifyMetavariable(metavariable, context) {
    let metavariableUnified;

    const referenceString = this.reference.getString(),
          metavariableString = metavariable.getString();

    context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);

    const metavariableNode = metavariable.getNode(),
          metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);

    metavariableUnified = metavariableNodeMatches;  ///

    if (metavariableUnified) {
      context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
    }

    return metavariableUnified;
  }

  unifySubstitution(substitution, context) {
    let substitutionUnified;

    const declarationString = this.string,  ///
          substitutionString = substitution.getString();

    context.trace(`Unifying the '${substitutionString}' substitution with the '${declarationString}' declaration...`);

    const statement = substitution.getStatement(),
          metavariable = substitution.getMetavariable(),
          statementUnified = this.unifyStatement(statement, context),
          metavariableUnified = this.unifyMetavariable(metavariable, context);

    substitutionUnified = (metavariableUnified && statementUnified);

    if (substitutionUnified) {
      context.debug(`...unified the '${declarationString}' substitution with the '${substitutionString}' declaration.`);
    }

    return substitutionUnified;
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
