"use strict";

import { arrayUtilities } from "necessary";

import Equivalence from "../equivalence";
import Equivalences from "../equivalences";

const { last } = arrayUtilities;

class LocalContext {
  constructor(context, variables, judgements, equivalences, stepsOrSubproofs) {
    this.context = context;
    this.variables = variables;
    this.judgements = judgements;
    this.equivalences = equivalences;
    this.stepsOrSubproofs = stepsOrSubproofs;
  }

  getContext() {
    return this.context;
  }

  getVariables(nested = true) {
    let variables;

    if (nested) {
      variables = this.context.getVariables();

      variables = [
        ...this.variables,
        ...variables
      ];
    } else {
      variables = this.variables;
    }

    return variables;
  }

  getJudgements() {
    let judgements = this.context.getJudgements();

    judgements = [ ///
      ...this.judgements,
      ...judgements
    ]

    return judgements;
  }

  getEquivalences() {
    let equivalences = this.context.getEquivalences();

    equivalences = this.equivalences.mergedWith(equivalences);  ///

    return equivalences;
  }

  getSteps() {
    const stepsOrSubproofs = this.getStepsOrSubproofs(),
          steps = stepsOrSubproofs.filter((stepOrSubproof) => {
            const stepOrSubproofStep = stepOrSubproof.isStep();

            if (stepOrSubproofStep) {
              return true;
            }
          });

    return steps;
  }

  getLastStep() {
    let lastStep = null;

    const steps = this.getSteps(),
          stepsLength = steps.length;

    if (stepsLength > 0) {
      lastStep = last(steps);
    }

    return lastStep;
  }

  getStepsOrSubproofs() {
    let stepsOrSubproofs = this.context.getStepsOrSubproofs();

    stepsOrSubproofs = [  ///
      ...stepsOrSubproofs,
      ...this.stepsOrSubproofs
    ];

    return stepsOrSubproofs;
  }

  getFilePath() { return this.context.getFilePath(); }

  getLexer() { return this.context.getLexer(); }

  getParser() { return this.context.getParser(); }

  getAxioms() { return this.context.getAxioms(); }

  getLemmas() { return this.context.getLemmas(); }

  getTheorems() { return this.context.getTheorems(); }

  getConjectures() { return this.context.getConjectures(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  getTypePrefix() { return this.context.getTypePrefix(); }

  addAxiom(axiom) { this.context.addAxiom(axiom); }

  addLemma(lemma) { this.context.addLemma(lemma); }

  addTheorem(theorem) { this.context.addTheorem(theorem); }

  addEquality(equality, context) {
    let equalityAdded;

    const equalityReflexive = equality.isReflexive();

    if (!equalityReflexive) {
      const equivalence = Equivalence.fromEquality(equality);

      this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
    }

    equalityAdded = true;

    return equalityAdded;
  }

  addVariable(variable, nested = true) {
    let variableAdded = false;

    const variableIdentifier = variable.getIdentifier(),
          variablePresent = this.isVariablePresentByVariableIdentifier(variableIdentifier, nested);

    if (!variablePresent) {
      this.variables.push(variable);

      variableAdded = true;
    }

    return variableAdded;
  }

  addJudgement(judgement) {
    let judgementAdded = false;

    const metavariable = judgement.getMetavariable(),
          judgementPresent = this.isJudgementPresentByMetavariable(metavariable);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    return judgementAdded;
  }

  addStepOrSubproof(stepOrSubproof) {
    this.stepsOrSubproofs.push(stepOrSubproof);
  }

  findProcedureByName(name) { return this.context.findProcedureByName(name); }

  findLabelByReference(reference, context) { return this.context.findLabelByReference(reference, context); }

  findRuleByReference(reference) { return this.context.findRuleByReference(reference); }

  findAxiomByReference(reference) { return this.context.findAxiomByReference(reference); }

  findLemmaByReference(reference) { return this.context.findLemmaByReference(reference); }

  findTheoremByReference(reference) { return this.context.findTheoremByReference(reference); }

  findConjectureByReference(reference) { return this.context.findConjectureByReference(reference); }

  findMetaLemmasByReference(reference) { return this.context.findMetaLemmasByReference(reference); }

  findMetatheoremsByReference(reference) { return this.context.findMetatheoremsByReference(reference); }

  findMetaLemmaMetatheoremByReference(reference) { return this.context.findMetaLemmaMetatheoremByReference(reference); }

  findMetaLemmaMetatheoremsByReference(reference) { return this.context.findMetaLemmaMetatheoremsByReference(reference); }

  findVariableByVariableIdentifier(variableIdentifier, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);

            if (variableIdentifierMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementSimple = judgement.isSimple();

            if (judgementSimple) {
              const judgementMetavariable = judgement.getMetavariable(),
                    judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

              if (judgementMetavariableEqualToMetavariable) {
                return true;
              }
            }
          }) || null;

    return judgement;
  }

  findEquivalenceByTerm(term) { return this.equivalences.findEquivalenceByTerm(term); }

  findMetavariable(metavariable, generalContext, specificContext) { return this.context.findMetavariable(metavariable, generalContext, specificContext); }

  findLabelByMetavariable(metavariable) { return this.context.findLabelByMetavariable(metavariable); }

  findTypeByNominalTypeName(nominalTypeName) { return this.context.findTypeByNominalTypeName(nominalTypeName); }

  findMetaTypeByMetaTypeName(metaTypeName) { return this.context.findMetaTypeByMetaTypeName(metaTypeName); }

  findMetavariableByMetavariableName(metavariableName) { return this.context.findMetavariableByMetavariableName(metavariableName); }

  isProcedurePresentByName(name) { return this.context.isProcedurePresentByName(name); }

  isLabelPresentByReference(reference) { return this.context.isLabelPresentByReference(reference); }

  isMetavariablePresentByReference(reference) { return this.context.isMetavariablePresentByReference(reference); }

  isMetaLemmaMetatheoremPresentByReference(reference) { return this.context.isMetaLemmaMetatheoremPresentByReference(reference); }

  findAxiomLemmaTheoremOrConjectureByReference(reference) { return this.context.findAxiomLemmaTheoremOrConjectureByReference(reference); }

  isMetavariablePresent(metavariable, generalContext, specificContext) { return this.context.isMetavariablePresent(metavariable, generalContext, specificContext); }

  isTypePresentByTypeName(typeName, includeRelease = true, includeDependencies = true) { return this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies); }

  isTypePresentByNominalTypeName(nominalTypeName) { return this.context.isTypePresentByNominalTypeName(nominalTypeName); }

  isTypePresentByPrefixedTypeName(prefixedTypeName) { return this.context.isTypePresentByPrefixedTypeName(prefixedTypeName); }

  isTypePrefixPresentByTypePrefixName(typePrefixName) { return this.context.isTypePrefixPresentByTypePrefixName(typePrefixName); }

  isVariablePresentByVariableIdentifier(variableIdentifier, nested = true) {
    const variable = this.findVariableByVariableIdentifier(variableIdentifier, nested),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isLabelPresentByMetavariableName(metavariableName) { return this.context.isLabelPresentByMetavariableName(metavariableName); }

  isLabelPresentByMetavariable(metavariable) { return this.context.isLabelPresentByMetavariable(metavariable); }

  isMetavariablePresentByMetavariableName(metavariableNode) { return this.context.isMetavariablePresentByMetavariableName(metavariableNode); }

  isJudgementPresentByMetavariable(metavariable) {
    const judgement = this.findJudgementByMetavariable(metavariable),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isTermGrounded(term) {
    const context = this, ///
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

    const termMatchesGroundedTerm = groundedTerms.some((groundedTerm) => {
        const groundedTermNode = groundedTerm.getNode(),
              groundedTermNodeMatches = term.matchTermNode(groundedTermNode);

            if (groundedTermNodeMatches) {
              return true;
            }
          }),
          termGrounded = termMatchesGroundedTerm; ///

    return termGrounded;
  }

  isVariableDefined(variable) {
    const context = this, ///
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);

    const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
            const definedVariableEqualToVariable = definedVariable.isEqualTo(variable);

            if (definedVariableEqualToVariable === variable) {
              return true;
            }
          }),
          variableDefined = variableMatchesDefinedVariable; ///

    return variableDefined;
  }

  isMetavariableDefined(metavariable) {
    const judgementPresent = this.isJudgementPresentByMetavariable(metavariable),
          metavariableDefined = judgementPresent; ///

    return metavariableDefined
  }

  matchTermAndPropertyRelation(term, propertyRelation) {
    const context = this, ///
          steps = this.getSteps(),
          termAndPropertyRelationMatches = steps.some((step) => {
            const termAndPropertyRelationMatches = step.matchTermAndPropertyRelation(term, propertyRelation, context);

            if (termAndPropertyRelationMatches) {
              return true;
            }
          });

    return termAndPropertyRelationMatches;
  }

  nodeAsString(node, tokens) { return this.context.nodeAsString(node, tokens); }

  nodesAsString(node, tokens) { return this.context.nodesAsString(node, tokens); }

  nodeAsTokens(node, tokens) { return this.context.nodeAsTokens(node, tokens); }

  nodesAsTokens(node, tokens) { return this.context.nodesAsTokens(node, tokens); }

  tokensAsString(tokens) { return this.context.tokensAsString(tokens); }

  trace(message, node = null) { this.context.trace(message, node); }

  debug(message, node = null) { this.context.debug(message, node); }

  info(message, node = null) { this.context.info(message, node); }

  warning(message, node = null) { this.context.warning(message, node); }

  error(message, node = null) { this.context.error(message, node); }

  static fromContext(context) {
    const variables = [],
          judgements = [],
          equivalences = Equivalences.fromNothing(),
          stepsOrSubproofs = [],
          localContext = new LocalContext(context, variables, judgements, equivalences, stepsOrSubproofs);

    return localContext;
  }
}

export default LocalContext;