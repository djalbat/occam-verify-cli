"use strict";

import { Element } from "occam-languages";
import { primitiveUtilities } from "occam-furtle";

const { primitiveFromNode } =primitiveUtilities;

export default class Substitution extends Element {
  constructor(context, string, node, generalContext) {
    super(context, string, node);

    this.generalContext = generalContext;
  }

  getGeneralContext() {
    return this.generalContext;
  }

  getPrimitive(context) {
    const replacementNode = this.getReplacementNode(),
          node = replacementNode, ///
          primitive = primitiveFromNode(node, context);

    return primitive;
  }

  getSubstitutionNode() {
    const node = this.getNode(),
          substitutionNode = node; ///

    return substitutionNode;
  }

  getSpecificContext() {
    const context = this.getContext(),
          specificContext = context;  ///

    return specificContext;
  }

  setGeneralContext(generalContext) {
    this.generalContext = generalContext;
  }

  isEqualTo(substitution) {
    const substitutionNode = substitution.getNode(),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          equalTo = substitutionNodeMatches;  ///

    return equalTo;
  }

  isComplex() {
    const simple = this.isSimple(),
          complex = !simple;

    return complex;
  }

  isNonTrivial() {
    const trivial = this.isTrivial(),
          nonTrivlal = !trivial;

    return nonTrivlal;
  }

  getVariable() {
    const variable = null;

    return variable;
  }

  getMetavariable() {
    const metavariable = null;

    return metavariable;
  }

  getSubstitution() {
    const substitution = null;

    return substitution;
  }

  getVariableNode() {
    const variableNode = null;

    return variableNode;
  }

  getMetavariableNode() {
    const metavariableNode = null;

    return metavariableNode;
  }

  isSimple() {
    const simple = true;

    return simple;
  }

  matchSubstitutionNode(substitutionNode) {
    const node = substitutionNode, ///
          nodeMatches = this.matchNode(node),
          substitutionNodeMatches = nodeMatches; ///

    return substitutionNodeMatches;
  }

  findValidSubstitution(context) {
    const substitutionNode = this.getSubstitutionNode(),
          substitution = context.findSubstitutionBySubstitutionNode(substitutionNode),
          validSubstitution = substitution;  ///

    return validSubstitution;
  }

  resolve(substitutions, generalContext, specificContext) {
    const resolved = true;

    return resolved;
  }

  toJSON() {
    const { name } = this.constructor,
          string = this.getString(),
          json = {
            name,
            string
          };

    return json;
  }
}
