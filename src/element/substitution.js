"use strict";

import { arrayUtilities } from "necessary";

import { serialises } from "../utilities/context";
import { primitiveUtilities } from "occam-furtle";

const { first, second } = arrayUtilities,
      { primitiveFromNode } =primitiveUtilities;

class Element {
  constructor(contexts, string, node, lineIndex) {
    this.contexts = contexts;
    this.string = string;
    this.node = node;
    this.lineIndex = lineIndex;
  }

  getContexts() {
    return this.contexts;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getLineIndex() {
    return this.lineIndex;
  }

  setContexts(contexts) {
    this.contexts = contexts;
  }

  setString(string) {
    this.string = string;
  }

  setNode(node) {
    this.node = node;
  }

  setLineIndex(lineIndex) {
    this.lineIndex = lineIndex;
  }

  async break(context) {
    this.lineIndex = await context.break(this.node, this.lineIndex);
  }

  matchNode(node) { return this.node.match(node); }
}

export default class Substitution extends Element {
  getName() {
    const { name } = this.constructor;

    return name;
  }

  getContext() {
    const specificContext = this.getSpecificContext(),
          context = specificContext;  ///

    return context;
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

  getGeneralContext() {
    const contexts = this.getContexts(),
      firstContext = first(contexts),
      generalContext = firstContext;  ///

    return generalContext;
  }

  getSpecificContext() {
    const contexts = this.getContexts(),
      secondContext = second(contexts),
      specificContext = secondContext;  ///

    return specificContext;
  }

  setContext(context) {
    const specificContext = context;  ///

    this.setSpecificContext(specificContext);
  }

  setGeneralContext(generalContext) {
    const specificContext = this.getSpecificContext(),
          contexts = [
            generalContext,
            specificContext
          ];

    this.setContexts(contexts);
  }

  setSpecificContext(specificContext) {
    const generalContext = this.getGeneralContext(),
          contexts = [
            generalContext,
            specificContext
          ];

    this.setContexts(contexts);
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

    return serialises((contexts) => {
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
    }, contexts);
  }
}
