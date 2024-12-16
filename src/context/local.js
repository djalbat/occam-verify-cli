"use strict";

import { arrayUtilities } from "necessary";

import Equivalence from "../equivalence";
import Equivalences from "../equivalences";

const { last } = arrayUtilities;

class LocalContext {
  constructor(context, tokens, variables, judgements, equivalences, proofStepSubproofs) {
    this.context = context;
    this.tokens = tokens;
    this.variables = variables;
    this.judgements = judgements;
    this.equivalences = equivalences;
    this.proofStepSubproofs = proofStepSubproofs;
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return this.tokens;
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

  getLastProofStep() {
    let lastProofStep = null;

    const proofStepSubproofsLength = this.proofStepSubproofs.length;

    if (proofStepSubproofsLength > 0) {
      const lastProofStepSubproof = last(this.proofStepSubproofs);

      lastProofStep = lastProofStepSubproof;  ///
    }

    return lastProofStep;
  }

  getProofStepSubproofs() {
    let proofStepSubproofs = this.context.getProofStepSubproofs();

    proofStepSubproofs = [  ///
      ...proofStepSubproofs,
      ...this.proofStepSubproofs
    ];

    return proofStepSubproofs;
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

  getFileContext() { return this.context.getFileContext(); }

  addEquality(equality, context) {
    let equalityAdded;

    const equalityReflexive = equality.isReflexive();

    if (equalityReflexive) {
      equalityAdded = true; ///
    } else {
      const leftTerm = equality.getLeftTerm(),
            rightTerm = equality.getRightTerm(),
            leftEquivalence = this.equivalences.findEquivalenceByTerm(leftTerm),
            rightEquivalence = this.equivalences.findEquivalenceByTerm(rightTerm);

      if (false) {
        ///
      } else if ((leftEquivalence === null) && (rightEquivalence === null)) {
        const equivalence = Equivalence.fromLeftTermAndRightTerm(leftTerm, rightTerm);

        this.addEquivalence(equivalence, context);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence === null)) {
        leftEquivalence.addTerm(rightTerm, context);

        equalityAdded = true;
      } else if ((leftEquivalence === null) && (rightEquivalence !== null)) {
        rightEquivalence.addTerm(leftTerm, context);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence !== null)) {
        let equivalence;

        if (leftEquivalence === rightEquivalence) {
          equivalence = leftEquivalence;  ///
        } else {
          equivalence = Equivalence.merge(leftEquivalence, rightEquivalence);

          this.removeEquivalence(leftEquivalence, context);

          this.removeEquivalence(rightEquivalence, context);

          this.addEquivalence(equivalence);
        }

        equivalence.addTerm(leftTerm, context);

        equivalence.addTerm(rightTerm, context);

        equalityAdded = true;
      }
    }

    return equalityAdded;
  }

  addVariable(variable, nested = true) {
    let variableAdded = false;

    const variableName = variable.getNode(),
          variableDeclared = this.isVariableDeclaredByVariableName(variableName, nested);

    if (!variableDeclared) {
      this.variables.push(variable);

      variableAdded = true;
    }

    return variableAdded;
  }

  addEquivalence(equivalence, context) { return this.equivalences.addEquivalence(equivalence, context); }

  removeEquivalence(equivalence, context) { return this.equivalences.removeEquivalence(equivalence, context); }

  addProofStepSubproof(proofStepSubproof) {
    this.proofStepSubproofs.push(proofStepSubproof);
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

  getTermType(term) {
    let termType;

    const equivalences = this.getEquivalences(),
          equivalence = equivalences.findEquivalenceByTerm(term);

    if (equivalence !== null) {
      const LocalContext = this,  ///
            equivalenceType = equivalence.getType(LocalContext);

      termType = equivalenceType;  ///
    } else {
      termType = term.getType();
    }

    return termType;
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

  isMetavariableDeclared(metavariable, generalContext, specificContext) { return this.context.isMetavariableDeclared(metavariable, generalContext, specificContext); }

  isTypeDeclaredByTypeName(typeName) { return this.context.isTypeDeclaredByTypeName(typeName); }

  isLabelPresentByMetavariableName(metavariableName) { return this.context.isLabelPresentByMetavariableName(metavariableName); }

  isLabelPresentByMetavariableNode(metavariableNode) { return this.context.isLabelPresentByMetavariableNode(metavariableNode); }

  isVariableDeclaredByVariableName(variableName, nested = true) {
    const variable = this.findVariableByVariableName(variableName, nested),
          variableDeclared = (variable !== null);

    return variableDeclared;
  }

  isJudgementPresentByMetavariable(metavariable) {
    const judgement = this.findJudgementByMetavariable(metavariable),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  findVariableByVariableName(variableName, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMetavariable = judgement.getMetavariable();

            if (judgementMetavariable !== null) {
              const judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

              if (judgementMetavariableEqualToMetavariable) {
                return true;
              }
            }
          }) || null;

    return judgement;
  }

  findMetavariable(metavariable, generalContext, specificContext) { return this.context.findMetavariable(metavariable, generalContext, specificContext); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findMetaTypeByMetaTypeName(metaTypeName) { return this.context.findMetaTypeByMetaTypeName(metaTypeName); }

  findMetavariableByMetavariableName(metavariableName) { return this.context.findMetavariableByMetavariableName(metavariableName); }

  findLabelByMetavariable(metavariable) { return this.context.findLabelByMetavariable(metavariable); }

  findRuleByReference(reference) { return this.context.findRuleByReference(reference); }

  findAxiomByReference(reference) { return this.context.findAxiomByReference(reference); }

  findLemmaByReference(reference) { return this.context.findLemmaByReference(reference); }

  findTheoremByReference(reference) { return this.context.findTheoremByReference(reference); }

  findProcedureByReference(reference) { return this.context.findProcedureByReference(reference); }

  findConjectureByReference(reference) { return this.context.findConjectureByReference(reference); }

  findMetaLemmasByReference(reference) { return this.context.findMetaLemmasByReference(reference); }

  findMetatheoremsByReference(reference) { return this.context.findMetatheoremsByReference(reference); }

  findAxiomLemmaTheoremConjectureByReference(reference) { return this.context.findAxiomLemmaTheoremConjectureByReference(reference); }

  isRulePresentByReference(reference) { return this.context.isRulePresentByReference(reference); }

  isAxiomPresentByReference(reference) { return this.context.isAxiomPresentByReference(reference); }

  isLemmaPresentByReference(reference) { return this.context.isLemmaPresentByReference(reference); }

  isTheoremPresentByReference(reference) { return this.context.isTheoremPresentByReference(reference); }

  isProcedurePresentByReference(reference) { return this.context.isProcedurePresentByReference(reference); }

  isConjecturePresentByReference(reference) { return this.context.isConjecturePresentByReference(reference); }

  areMetaLemmasPresentByReference(reference) { return this.context.areMetaLemmasPresentByReference(reference); }

  areMetatheoremsPresentByReference(reference) { return this.context.areMetatheoremsPresentByReference(reference); }

  areMetaLemmasMetaTheoremsPresentByReference(reference) { return this.context.areMetaLemmasMetaTheoremsPresentByReference(reference); }

  isAxiomLemmaTheoremConjecturePresentByReference(reference) { return this.context.isAxiomLemmaTheoremConjecturePresentByReference(reference) }

  nodeAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = this.context.nodeAsString(node, tokens);

    return string;
  }

  nodesAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = this.context.nodesAsString(node, tokens);

    return string;
  }

  nodeAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = this.context.nodeAsTokens(node, tokens); ///

    return tokens;
  }

  nodesAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = this.context.nodesAsTokens(node, tokens);  ///

    return tokens;
  }

  tokensAsString(tokens) { return this.context.tokensAsString(tokens); }

  trace(message, node) { this.context.trace(message, node); }

  debug(message, node) { this.context.debug(message, node); }

  info(message, node) { this.context.info(message, node); }

  warning(message, node) { this.context.warning(message, node); }

  error(message, node) { this.context.error(message, node); }

  static fromContext(context) {
    const tokens = null,
          variables = [],
          judgements = [],
          equivalences = Equivalences.fromNothing(),
          proofStepSubproofs = [],
          localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);

    return localContext;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          tokens = null,
          variables = [],
          judgements = [],
          equivalences = Equivalences.fromNothing(),
          proofStepSubproofs = [],
          localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);

    return localContext;
  }

  static fromContextAndTokens(context, tokens) {
    const variables = [],
          judgements = [],
          equivalences = Equivalences.fromNothing(),
          proofStepSubproofs = [],
          localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);

    return localContext;
  }
}

export default LocalContext;