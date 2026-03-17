"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { last } = arrayUtilities;

export default class SyntheticContext extends Context {
  constructor(context, contexts) {
    super(context);

    this.contexts = contexts;
  }

  getContexts() {
    return this.contexts;
  }

  addSubstitutions(substitutions) {
    const context = this.getContext();

    context.addSubstitutions(substitutions);
  }

  findTermByTermNode(termNode) {
    let term = null;

    this.contexts.some((context) => {
      term = context.findTermByTermNode(termNode);

      if (term !== null) {
        return true;
      }
    });

    return term;
  }

  findFrameByFrameNode(frameNode) {
    let frame = null;

    this.contexts.some((context) => {
      frame = context.findFrameByFrameNode(frameNode);

      if (frame !== null) {
        return true;
      }
    });

    return frame;
  }

  findStatementByStatementNode(statementNode) {
    let statement = null;

    this.contexts.some((context) => {
      statement = context.findStatementByStatementNode(statementNode);

      if (statement !== null) {
        return true;
      }
    });

    return statement;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    let substitution = null;

    this.contexts.some((context) => {
      substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);

      if (substitution !== null) {
        return true;
      }
    });

    return substitution;
  }

  findReferenceByMetavariableNode(metavariableNode) {
    let reference = null;

    this.contexts.some((context) => {
      reference = context.findReferenceByMetavariableNode(metavariableNode);

      if (reference !== null) {
        return true;
      }
    });

    return reference;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    let variable = null;

    this.contexts.some((context) => {
      variable = context.findVariableByVariableIdentifier(variableIdentifier);

      if (variable !== null) {
        return true;
      }
    });

    return variable;
  }

  findMetavariableByMetavariableName(metavariableName) {
    let metavariable = null;

    this.contexts.some((context) => {
      metavariable = context.findMetavariableByMetavariableName(metavariableName);

      if (metavariable !== null) {
        return true;
      }
    });

    return metavariable;
  }

  isTermPresentByTermNode(termNode) {
    const term = this.findTermByTermNode(termNode),
          termPresent = (term !== null);

    return termPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const frame = this.findFrameByFrameNode(frameNode),
          framePresent = (frame !== null);

    return framePresent;
  }

  isStatementPresentByStatementNode(statementNode) {
    const statement = this.findStatementByStatementNode(statementNode),
          statementPresent = (statement !== null);

    return statementPresent;
  }

  isSubstitutionPresentBySubstitutionNode(substitutionNode) {
    const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode),
      substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  isReferencePresentByMetavariableNode(metavariableNode) {
    const reference = this.findReferenceByMetavariableNode(metavariableNode),
          referencePresent = (reference !== null);

    return referencePresent;
  }

  isVariablePresentByVariableIdentifier(variableIdentifier) {
    const variable = this.findVariableByVariableIdentifier(variableIdentifier),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  static fromContexts(...contexts) {
    const lastContext = last(contexts),
          context = lastContext,  ///
          syntheticContext = new SyntheticContext(context, contexts);

    return syntheticContext;
  }
}
