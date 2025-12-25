"use strict";

import { arrayUtilities } from "necessary";

const { extract, compress } = arrayUtilities;

export default class TemporaryContext {
  constructor(context, tokens, terms, frames, statements, assertions, substitutions, reference) {
    this.context = context;
    this.tokens = tokens;
    this.terms = terms;
    this.frames = frames;
    this.statements = statements;
    this.assertions = assertions;
    this.substitutions = substitutions;
    this.reference = reference;
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

  getFrames() {
    return this.frames;
  }

  getStatements() {
    return this.statements;
  }

  getAssertions() {
    return this.assertions;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  getReference() {
    return this.reference;
  }

  addTerm(term) {
    const context = this, ///
          termNode = term.getNode(),
          termString = term.getString();

    extract(this.terms, (term) => {
      const termMatchesTermNode = term.matchTermNode(termNode);

      if (termMatchesTermNode) {
        return true;
      }
    });

    context.trace(`ADded the '${termString}' term to the context.`);

    this.terms.push(term);
  }

  addFrame(frame) {
    const context = this, ///
          frameNode = frame.getNode(),
          frameString = frame.getString();

    extract(this.frames, (frame) => {
      const frameMatchesFrameNode = frame.matchFrameNode(frameNode);

      if (frameMatchesFrameNode) {
        return true;
      }
    });

    context.trace(`Added the '${frameString}' frame to the context.`);

    this.frames.push(frame);
  }

  addStatement(statement) {
    const context = this, ///
          statementNode = statement.getNode(),
          statementString = statement.getString();

    extract(this.statements, (statement) => {
      const statementMatchesFrameNode = statement.matchStatementNode(statementNode);

      if (statementMatchesFrameNode) {
        return true;
      }
    });

    context.trace(`Added the '${statementString}' statement to the context.`);

    this.statements.push(statement);
  }

  addAssertion(assertion) {
    const context = this, ///
          assertionNode = assertion.getNode(),
          assertionString = assertion.getString();

    extract(this.assertions, (assertion) => {
      const assertionMatchesFrameNode = assertion.matchAssertionNode(assertionNode);

      if (assertionMatchesFrameNode) {
        return true;
      }
    });

    context.trace(`Added the '${assertionString}' assertion to the context.`);

    this.assertions.push(assertion);
  }

  addSubstitution(substitution) {
    const context = this, ///
          substitutionNode = substitution.getNode(),
          substitutionString = substitution.getString();

    extract(this.substitutions, (substitution) => {
      const substitutionMatchesFrameNode = substitution.matchSubstitutionNode(substitutionNode);

      if (substitutionMatchesFrameNode) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionString}' substitution to the context.`);

    this.substitutions.push(substitution);
  }

  addReference(reference) {
    const context = this, ///
          referenceString = reference.getString();

    this.reference = reference;

    context.trace(`Added the '${referenceString}' reference to the context.`);
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

  findFrameByFrameNode(frameNode) {
    const frame = this.frames.find((frame) => {
      const frameMatchesFrameNode = frame.matchFrameNode(frameNode);

      if (frameMatchesFrameNode) {
        return true;
      }
    }) || null;

    return frame;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertion = this.assertions.find((assertion) => {
      const assertionMatchesAssertionNode = assertion.matchAssertionNode(assertionNode);

      if (assertionMatchesAssertionNode) {
        return true;
      }
    }) || null;

    return assertion;
  }

  findStatementByStatementNode(statementNode) {
    const statement = this.statements.find((statement) => {
      const statementMatchesStatementNode = statement.matchStatementNode(statementNode);

      if (statementMatchesStatementNode) {
        return true;
      }
    }) || null;

    return statement;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const substitution = this.substitutions.find((substitution) => {
      const substitutionMatchesSubtitutionNode = substitution.matchSubstitutionNode(substitutionNode);

      if (substitutionMatchesSubtitutionNode) {
        return true;
      }
    }) || null;

    return substitution;
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

  addEquality(equality) { return this.context.addEquality(equality); }

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

  findMetavariable(metavariable) { return this.context.findMetavariable(metavariable); }

  findLabelByMetavariable(metavariable) { return this.context.findLabelByMetavariable(metavariable); }

  findTypeByNominalTypeName(nominalTypeName) { return this.context.findTypeByNominalTypeName(nominalTypeName); }

  findMetaTypeByMetaTypeName(metaTypeName) { return this.context.findMetaTypeByMetaTypeName(metaTypeName); }

  findMetavariableByMetavariableName(metavariableName) { return this.context.findMetavariableByMetavariableName(metavariableName); }

  isProcedurePresentByName(name) { return this.context.isProcedurePresentByName(name); }

  isLabelPresentByReference(reference) { return this.context.isLabelPresentByReference(reference); }

  isMetavariablePresentByReference(reference) { return this.context.isMetavariablePresentByReference(reference); }

  isMetaLemmaMetatheoremPresentByReference(reference) { return this.context.isMetaLemmaMetatheoremPresentByReference(reference); }

  findAxiomLemmaTheoremOrConjectureByReference(reference) { return this.context.findAxiomLemmaTheoremOrConjectureByReference(reference); }

  isMetavariablePresent(metavariable) { return this.context.isMetavariablePresent(metavariable); }

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

  merge(context) {
    const terms = context.getTerms(),
          frames = context.getFrames(),
          statements = context.getStatements(),
          assertions = context.getAssertions(),
          substitutions = context.getSubstitutions();

    this.terms = [
      ...this.terms,
      ...terms
    ];

    this.frames = [
      ...this.frames,
      ...frames
    ];

    this.statements = [
      ...this.statements,
      ...statements
    ];

    this.assertions = [
      ...this.assertions,
      ...assertions
    ];

    this.substitutions = [
      ...this.substitutions,
      ...substitutions
    ];

    compress(this.terms, (termA, termB) => {
      const termANode = termA.getNode(),
            termBNode = termB.getNode(),
            termANodeMatchesTermBNode = termANode.match(termBNode);

      if (!termANodeMatchesTermBNode) {
        return true;
      }
    });

    compress(this.frames, (frameA, frameB) => {
      const frameANode = frameA.getNode(),
            frameBNode = frameB.getNode(),
            frameANodeMatchesFrameBNode = frameANode.match(frameBNode);

      if (!frameANodeMatchesFrameBNode) {
        return true;
      }
    });

    compress(this.statements, (statementA, statementB) => {
      const statementANode = statementA.getNode(),
            statementBNode = statementB.getNode(),
            statementANodeMatchesStatementBNode = statementANode.match(statementBNode);

      if (!statementANodeMatchesStatementBNode) {
        return true;
      }
    });

    compress(this.assertions, (assertionA, assertionB) => {
      const assertionANode = assertionA.getNode(),
            assertionBNode = assertionB.getNode(),
            assertionANodeMatchesAssertionBNode = assertionANode.match(assertionBNode);

      if (!assertionANodeMatchesAssertionBNode) {
        return true;
      }
    });

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionANode = substitutionA.getNode(),
            substitutionBNode = substitutionB.getNode(),
            substitutionANodeMatchesSubstitutionBNode = substitutionANode.match(substitutionBNode);

      if (!substitutionANodeMatchesSubstitutionBNode) {
        return true;
      }
    });
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          tokens = null,
          statements = [],
          assertions = [],
          substitutions = [],
          reference = null,
          temporaryContext = new TemporaryContext(context, tokens, terms, frames, statements, assertions, substitutions, reference);

    return temporaryContext;
  }

  static fromTermsAndFrames(terms, frames, context) {
    const tokens = null,
          statements = [],
          assertions = [],
          substitutions = [],
          reference = null,
          temporaryContext = new TemporaryContext(context, tokens, terms, frames, statements, assertions, substitutions, reference);

    return temporaryContext;
  }

  static fromContextAndTokens(context, tokens) {
    const terms = [],
          frames = [],
          statements = [],
          assertions = [],
          substitutions = [],
          reference = null,
          temporaryContext = new TemporaryContext(context, tokens, terms, frames, statements, assertions, substitutions, reference);

    return temporaryContext;
  }
}
