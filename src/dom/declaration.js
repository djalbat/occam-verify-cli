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

    const statementVerified = this.verifyStatement(this.statement, assignments, stated, context);

    if (statementVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(context);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(frame, context);
      }

      verified = (verifiedWhenStated || verifiedWhenDerived);
    }

    if (verified) {
      context.debug(`...verified the '${declarationString}' declaration.`);
    }

    return verified;
  }

  verifyStatement(statement, assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const statementVerified = statement.verify(assignments, stated, context);

    return statementVerified;
  }

  verifyWhenStated(context) {
    let verifiedWhenStated;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' stated declaration...`);

    const referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      verifiedWhenStated = true;
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
        verifiedWhenStated = true;
      } else {
        const axiom = context.findAxiomByReference(this.reference),
              lemma = context.findLemmaByReference(this.reference),
              theorem = context.findTheoremByReference(this.reference),
              conjecture = context.findConjectureByReference(this.reference),
              axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

        if (axiomLemmaTheoremConjecture !== null) {
          const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);

          if (axiomLemmaTheoremConjectureUnified) {
            verifiedWhenStated = true;
          }
        }
      }
    }

    if (verifiedWhenStated) {
      context.debug(`...verified the '${declarationString}' stated declaration.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(frame, context) {
    let verifiedWhenDerived;

    const declarationString = this.string;  ///

    context.trace(`Verifying the '${declarationString}' derived declaration...`);

    const referenceVerified = this.reference.verify(context);

    if (referenceVerified) {
      verifiedWhenDerived = true;
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
        verifiedWhenDerived = true;
      } else {
        const axiom = context.findAxiomByReference(this.reference),
              lemma = context.findLemmaByReference(this.reference),
              theorem = context.findTheoremByReference(this.reference),
              conjecture = context.findConjectureByReference(this.reference),
              axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

        if (axiomLemmaTheoremConjecture !== null) {
          const axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);

          if (axiomLemmaTheoremConjectureUnified) {
            verifiedWhenDerived = true;
          }
        }
      }
    }

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${declarationString}' derived declaration.`);
    }

    return verifiedWhenDerived;
  }

  static name = "Declaration";

  static fromDeclarationNode(declarationNode, context) {
    let declaration = null;

    if (declarationNode !== null) {
      const { Statement } = dom;

      let statementNode = statementNodeQuery(declarationNode);

      statementNode = stripBracketsFromStatementNode(statementNode);  ///

      const { Reference } = dom,
            reference = Reference.fromDeclarationNode(declarationNode, context),
            statement = Statement.fromStatementNode(statementNode, context),
            node = declarationNode,  ///
            string = context.nodeAsString(node);

      declaration = new Declaration(string, reference, statement);
    }

    return declaration;
  }
});
