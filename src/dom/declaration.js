"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
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

  unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
    let metaLemmaMetatheoremUnified = false;

    const declarationString = this.string,  ///
          metalemmaMetatheoremString = metaLemmaMetatheorem.getString();

    context.trace(`Unifying the '${metalemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration...`);

    const substitutions = Substitutions.fromNothing(),
          referenceUnified = metaLemmaMetatheorem.unifyReference(this.reference, substitutions, context);

    if (referenceUnified) {
      const statementUnified = metaLemmaMetatheorem.unifyStatement(this.statement, substitutions, context);

      if (statementUnified) {
        metaLemmaMetatheoremUnified = true;
      }
    }

    if (metaLemmaMetatheoremUnified) {
      context.debug(`...unified the '${metalemmaMetatheoremString}' meta-lemma or metatheorem with the '${declarationString}' declaration.`);
    }

    return metaLemmaMetatheoremUnified;
  }

  unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
    let axiomLemmaTheoremConjectureUnified = false;

    const declarationString = this.string,  ///
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${declarationString}' declaration...`);

    const referenceUnified = axiomLemmaTheoremConjecture.unifyReference(this.reference, context);

    if (referenceUnified) {
      const statementUnified = axiomLemmaTheoremConjecture.unifyStatement(this.statement, context);

      if (statementUnified) {
        axiomLemmaTheoremConjectureUnified = true;
      }
    }

    if (axiomLemmaTheoremConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${declarationString}' declaration.`);
    }

    return axiomLemmaTheoremConjectureUnified;
  }

  verify(frame, assignments, stated, context) {
    let verified = false;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration...`);

    const referenceVerified = this.verifyReference(frame, assignments, stated, context);

    if (referenceVerified) {
      const statementVerified = this.verifyStatement(assignments, stated, context);

      verified = statementVerified; ///
    }

    if (verified) {
      context.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
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

  verifyReference(frame, assignments, stated, context) {
    let referenceVerified;

    const referenceString = this.reference.getString(),
          declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' declaration's '${referenceString}' reference...`);

    let referenceVerifiedWhenStated = false,
        referenceVerifiedWhenDerived = false;

    if (stated) {
      referenceVerifiedWhenStated = this.verifyReferenceWhenStated(context);

      referenceVerified = referenceVerifiedWhenStated;  ///
    } else {
      referenceVerifiedWhenDerived = this.verifyReferenceWhenDerived(frame, context);

      referenceVerified = referenceVerifiedWhenDerived; ///
    }

    if (referenceVerified) {
      context.debug(`...verified the '${declarationString}' declaration's '${referenceString}' reference.`);
    }

    return referenceVerified;
  }

  verifyReferenceWhenStated(context) {
    let referenceVerifiedWhenStated;

    const referenceString = this.reference.getString(),
          declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' stated declaration's '${referenceString}' reference...`);

    const referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      referenceVerifiedWhenStated = true;
    } else {
      const metaLemmas = context.findMetaLemmasByReference(this.reference),
            metatheorems = context.findMetatheoremsByReference(this.reference),
            metaLemmaMetatheorems = [
              ...metaLemmas,
              ...metatheorems
            ],
            metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some((metaLemmaMetatheorem) => {
              const metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);

              if (metaLemmaMetatheoremUnified) {
                return true;
              }
            });

      if (metaLemmaMetatheoremUnified) {
        referenceVerifiedWhenStated = true;
      } else {
        const axiom = context.findAxiomByReference(this.reference),
              lemma = context.findLemmaByReference(this.reference),
              theorem = context.findTheoremByReference(this.reference),
              conjecture = context.findConjectureByReference(this.reference),
              axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

        if (axiomLemmaTheoremConjecture !== null) {
          const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);

          if (axiomLemmaTheoremConjectureUnified) {
            referenceVerifiedWhenStated = true;
          }
        }
      }
    }

    if (referenceVerifiedWhenStated) {
      context.trace(`...verified the '${declarationString}' stated declaration's '${referenceString}' reference.`);
    }

    return referenceVerifiedWhenStated;
  }

  verifyReferenceWhenDerived(frame, context) {
    let referenceVerifiedWhenDerived;

    const referenceString = this.reference.getString(),
          declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' derived declaration's '${referenceString}' reference...`);

    const referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      referenceVerifiedWhenDerived = true;
    } else {
      const metaLemmas = context.findMetaLemmasByReference(this.reference),
            metatheorems = context.findMetatheoremsByReference(this.reference),
            metaLemmaMetatheorems = [
              ...metaLemmas,
              ...metatheorems
            ],
            metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some((metaLemmaMetatheorem) => {
              let metaLemmaMetatheoremUnified = true;

              if (metaLemmaMetatheoremUnified) {
                metaLemmaMetatheoremUnified = frame.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
              }

              if (metaLemmaMetatheoremUnified) {
                metaLemmaMetatheoremUnified = this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
              }

              if (metaLemmaMetatheoremUnified) {
                return true;
              }
            });

      if (metaLemmaMetatheoremUnified) {
        referenceVerifiedWhenDerived = true;
      } else {
        const axiom = context.findAxiomByReference(this.reference),
              lemma = context.findLemmaByReference(this.reference),
              theorem = context.findTheoremByReference(this.reference),
              conjecture = context.findConjectureByReference(this.reference),
              axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

        if (axiomLemmaTheoremConjecture !== null) {
          const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);

          if (axiomLemmaTheoremConjectureUnified) {
            referenceVerifiedWhenDerived = true;
          }
        }
      }
    }

    if (referenceVerifiedWhenDerived) {
      context.trace(`...verified the '${declarationString}' derived declaration's '${referenceString}' reference.`);
    }

    return referenceVerifiedWhenDerived;
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
