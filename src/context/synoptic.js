"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { compressTerms,
         compressFrames,
         compressProperties,
         compressEqualities,
         compressJudgements,
         compressAssertions,
         compressStatements,
         compressSignatures,
         compressReferences,
         compressAssumptions,
         compressMetavariables,
         compressSubstitutions,
         compressPropertyRelations,} from "../utilities/synoptic";

const { first, last } = arrayUtilities;

export default class SynopticContext extends Context {
  constructor(context, contexts) {
    super(context);

    this.contexts = contexts;
  }

  getContexts() {
    return this.contexts;
  }

  isStated() {
    const firstContext = first(this.contexts),
          context = firstContext, ///
          stated = context.isStated();

    return stated;
  }

  getTerms(terms = []) {
    this.contexts.forEach((context) => {
      context.getTerms(terms);
    });

    compressTerms(terms);

    return terms;
  }

  getFrames(frames = []) {
    this.contexts.forEach((context) => {
      context.getFrames(frames);
    });

    compressFrames(frames);

    return frames;
  }

  getProperties(properties = []) {
    this.contexts.forEach((context) => {
      context.getProperties(properties);
    });

    compressProperties(properties);

    return properties;
  }

  getEqualities(equalities = []) {
    this.contexts.forEach((context) => {
      context.getEqualities(equalities);
    });

    compressEqualities(equalities);

    return equalities;
  }

  getJudgements(judgements = []) {
    this.contexts.forEach((context) => {
      context.getJudgements(judgements);
    });

    compressJudgements(judgements);

    return judgements;
  }

  getAssertions(assertions = []) {
    this.contexts.forEach((context) => {
      context.getAssertions(assertions);
    });

    compressAssertions(assertions);

    return assertions;
  }

  getStatements(statements = []) {
    this.contexts.forEach((context) => {
      context.getStatements(statements);
    });

    compressStatements(statements);

    return statements;
  }

  getSignatures(signatures = []) {
    this.contexts.forEach((context) => {
      context.getSignatures(signatures);
    });

    compressSignatures(signatures);

    return signatures;
  }

  getReferences(references = []) {
    this.contexts.forEach((context) => {
      context.getReferences(references);
    });

    compressReferences(references);

    return references;
  }

  getAssumptions(assumptions = []) {
    this.contexts.forEach((context) => {
      context.getAssumptions(assumptions);
    });

    compressAssumptions(assumptions);

    return assumptions;
  }

  getMetavariables(metavariables = []) {
    this.contexts.forEach((context) => {
      context.getMetavariables(metavariables);
    });

    compressMetavariables(metavariables);

    return metavariables;
  }

  getSubstitutions(substitutions = []) {
    this.contexts.forEach((context) => {
      context.getSubstitutions(substitutions);
    });

    compressSubstitutions(substitutions);

    return substitutions;
  }

  getPropertyRelations(propertyRelations = []) {
    this.contexts.forEach((context) => {
      context.getPropertyRelations(propertyRelations);
    });

    compressPropertyRelations(propertyRelations);

    return propertyRelations;
  }

  findTermByTermNode(termNode) {
    const terms = this.getTerms(),
          term = terms.find((term) => {
            const termNodeMatches = term.matchTermNode(termNode);

            if (termNodeMatches) {
              return true;
            }
          }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frames = this.getFrames(),
          frame = frames.find((frame) => {
            const frameNodeMatches = frame.matchFrameNode(frameNode);

            if (frameNodeMatches) {
              return true;
            }
          }) || null;

    return frame;
  }

  findPropertyByPropetyNode(propertyNode) {
    const propertys = this.getProperties(),
          property = propertys.find((property) => {
            const propertyNodeMatches = property.matchFrameNode(propertyNode);

            if (propertyNodeMatches) {
              return true;
            }
          }) || null;

    return property;
  }

  findEqualityByEqualityNode(equalityNode) {
    const equalities = this.getEqualities(),
          equality = equalities.find((equality) => {
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);

            if (equalityNodeMatches) {
              return true;
            }
          }) || null;

    return equality;
  }

  findJudgementByJudgementNode(judgementNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);

            if (judgementNodeMatches) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertions = this.getAssertions(),
          assertion = assertions.find((assertion) => {
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);

            if (assertionNodeMatches) {
              return true;
            }
          }) || null;

    return assertion;
  }

  findStatementByStatementNode(statementNode) {
    const statements = this.getStatements(),
          statement = statements.find((statement) => {
            const statementNodeMatches = statement.matchStatementNode(statementNode);

            if (statementNodeMatches) {
              return true;
            }
          }) || null;

    return statement;
  }

  findSignatureBySignatureNode(signatureNode) {
    const signatures = this.getSignatures(),
          signature = signatures.find((signature) => {
            const signatureNodeMatches = signature.matchSignatureNode(signatureNode);

            if (signatureNodeMatches) {
              return true;
            }
          }) || null;

    return signature;
  }

  findReferenceByReferenceNode(referenceNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);

            if (referenceMatcheReferenceNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findAssumptionByAssumptionNode(assumptionNode) {
    const assumptions = this.getAssumptions(),
          assumption = assumptions.find((assumption) => {
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);

            if (assumptionNodeMatches) {
              return true;
            }
          }) || null;

    return assumption;
  }

  findReferenceByMetavariableNode(metavariableNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);

            if (referenceMatcheMetavariableNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findMetavariableByMetavariableNode(metavariableNode) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const substitutions = this.getSubstitutions(),
          substitution = substitutions.find((substitution) => {
            const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);

            if (substitutionNodeMatches) {
              return true;
            }
          }) || null;

    return substitution;
  }

  findPropertyRelationByPropertyRelationNode(propertyRelationNode) {
    const propertyRelations = this.getPropertyRelations(),
          propertyRelation = propertyRelations.find((propertyRelation) => {
            const propertyRelationNodeMatches = propertyRelation.matchPropertyRelationNode(propertyRelationNode);

            if (propertyRelationNodeMatches) {
              return true;
            }
          }) || null;

    return propertyRelation;
  }

  static fromContexts(contexts) {
    const lastContext = last(contexts),
          context = lastContext,  ///
          synopticContext = new SynopticContext(context, contexts);

    return synopticContext;
  }
}
