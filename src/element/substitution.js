"use strict";

import { Element } from "occam-languages";
import { serialise } from "../utilities/context";
import { primitiveUtilities } from "occam-furtle";

const { primitiveFromNode } =primitiveUtilities;

export default class Substitution extends Element {
  constructor(context, string, node, lineIndex, generalContext) {
    super(context, string, node, lineIndex);

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

  getName() {
    const { name } = this.constructor;

    return name;
  }

  getContexts() {
    const generalContext = this.getGeneralContext(),
          specificContext = this.getSpecificContext(),
          contexts = [
            generalContext,
            specificContext
          ];

    return contexts;
  }

  setGeneralContext(generalContext) {
    this.generalContext = generalContext;
  }

  setSpecificContext(specifiContext) {
    const context = specifiContext; ///

    this.setContext(context);
  }

  setContexts(...contexts) {
    const [ generalContext, specificContext ] = contexts;

    this.setGeneralContext(generalContext);
    this.setSpecificContext(specificContext);
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

  matchVariableNode(variableNode) {
    const variableNodeMatches = false;

    return variableNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = false;

    return metavariableNodeMatches;
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
    const contexts = this.getContexts();

    return serialise((...contexts) => {
      const name = this.getName(),
            string = this.getString(),
            lineIndex = this.getLineIndex(),
            json = {
              name,
              contexts,
              string,
              lineIndex
            };

      return json;
    }, ...contexts);
  }
}
