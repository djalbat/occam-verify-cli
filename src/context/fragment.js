"use strict";

import { nodeAsString } from "../utilities/node";
import { chainContext } from "../utilities/context";

export default class FragmentContext {
  constructor(context, tokens, variables, metavariables) {
    this.context = context;
    this.tokens = tokens;
    this.variables = variables;
    this.metavariables = metavariables;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return this.tokens;
  }

  getVariables() {
    let variables;

    variables = this.context.getVariables();

    variables = [
      ...this.variables,
      ...variables
    ];

    return variables;
  }

  getMetavariables() {
    let metavariables;

    metavariables = this.context.getMetavariables();

    metavariables = [
      ...this.metavariables,
      ...metavariables
    ];

    return metavariables;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addMetavariable(metavariable) {
    this.metavariables.push(metavariable);
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  static fromNothing(context) {
    const tokens = null,
          variables = [],
          metavariables = [],
          fragmentContext = new FragmentContext(context, tokens, variables, metavariables);

    return fragmentContext;
  }
}
