"use strict";

import { arrayUtilities } from "necessary";

const { extract } = arrayUtilities;

export default class TemporaryContext {
  constructor(context, tokens, terms) {
    this.context = context;
    this.tokens = tokens;
    this.terms = terms;
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return tokens;
  }

  getTerms() {
    return this.terms;
  }

  addTerm(term) {
    const termNode = term.getNode();

    extract(this.terms, (term) => {
      const termMatchesTermNode = term.matchTermNode(termNode);

      if (termMatchesTermNode) {
        return true;
      }
    });

    this.terms.push(term);
  }

  findTermByTermNode(termNode) {
    const term = this.terms.find((term) => {
      const termMatchesTermNode = term.matchTermNode(termNode);

      if (termMatchesTermNode) {
        return true;
      }
    }) || null;

    return term;
  }

  getVariables(nested = true) { return this.context.getVariables(nested); }

  getJudgements() { return this.context.getJudgements(); }

  getEquivalences() { return this.context.getEquivalences(); }

  getSteps() { return this.context.getSteps(); }

  getLastStep() { return this.context.getLastStep(); }

  getStepsOrSubproofs() { return this.context.getStepsOrSubproofs(); }

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

  addEquality(equality, context) { return this.context.addEquality(equality, context); }

  addVariable(variable, nested = true) { return this.context.addVariable(variable, nested); }

  addJudgement(judgement) { return this.context.addJudgement(judgement); }

  addStepOrSubproof(stepOrSubproof) { this.context.addStepOrSubproof(stepOrSubproof); }

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

  findVariableByVariableIdentifier(variableIdentifier, nested = true) { return this.context.findVariableByVariableIdentifier(variableIdentifier, nested); }

  findJudgementByMetavariable(metavariable) { return this.context.findJudgementByMetavariable(metavariable); }

  findEquivalenceByTerm(term) { return this.context.findEquivalenceByTerm(term); }

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

  isVariablePresentByVariableIdentifier(variableIdentifier, nested = true) { return this.context.findVariableByVariableIdentifier(variableIdentifier, nested); }

  isLabelPresentByMetavariableName(metavariableName) { return this.context.isLabelPresentByMetavariableName(metavariableName); }

  isLabelPresentByMetavariable(metavariable) { return this.context.isLabelPresentByMetavariable(metavariable); }

  isMetavariablePresentByMetavariableName(metavariableNode) { return this.context.isMetavariablePresentByMetavariableName(metavariableNode); }

  isJudgementPresentByMetavariable(metavariable) { return this.context.isJudgementPresentByMetavariable(metavariable); }

  isTermGrounded(term) { return this.context.isTermGrounded(term); }

  isVariableDefined(variable) { return this.context.isVariableDefined(variable); }

  isMetavariableDefined(metavariable) { return this.context.isMetavariableDefined(metavariable); }

  matchTermAndPropertyRelation(term, propertyRelation) { return this.context.matchTermAndPropertyRelation(term, propertyRelation); }

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

  trace(message, node = null) { this.context.trace(message, node); }

  debug(message, node = null) { this.context.debug(message, node); }

  info(message, node = null) { this.context.info(message, node); }

  warning(message, node = null) { this.context.warning(message, node); }

  error(message, node = null) { this.context.error(message, node); }

  static fromTerms(terms, context) {
    const tokens = null,
          temporaryContext = new TemporaryContext(terms, tokens, context);

    return temporaryContext;
  }

  static fromContext(context) {
    const terms = [],
          tokens = null,
          temporaryContext = new TemporaryContext(context, tokens, terms);

    return temporaryContext;
  }

  static fromContextAndTokens(context, tokens) {
    const terms = [],
          temporaryContext = new TemporaryContext(context, tokens, terms);

    return temporaryContext;
  }
}
