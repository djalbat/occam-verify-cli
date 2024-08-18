"use strict";

function trace(node, message) { this.context.trace(node, message); }

function debug(node, message) { this.context.debug(node, message); }

function info(node, message) { this.context.info(node, message); }

function warning(node, message) { this.context.warning(node, message); }

function error(node, message) { this.context.error(node, message); }

function fatal(node, message) { this.context.fatal(node, message); }

function getAxioms() { return this.context.getAxioms(); }

function getLemmas() { return this.context.getLemmas(); }

function getTheorems() { return this.context.getTheorems(); }

function getConjectures() { return this.context.getConjectures(); }

function getCombinators() { return this.context.getCombinators(); }

function getConstructors() { return this.context.getConstructors(); }

function findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

function findTypeByTypeNode(labelNode) { return this.context.findTypeByTypeNode(labelNode); }

function findLabelByLabelNode(labelNode) { return this.context.findLabelByLabelNode(labelNode); }

function findRuleByReferenceNode(referenceNode) { return this.context.findRuleByReferenceNode(referenceNode); }

function findAxiomByReferenceNode(referenceNode) { return this.context.findAxiomByReferenceNode(referenceNode); }

function findLemmaByReferenceNode(referenceNode) { return this.context.findLemmaByReferenceNode(referenceNode); }

function findTheoremByReferenceNode(referenceNode) { return this.context.findTheoremByReferenceNode(referenceNode); }

function findConjectureByReferenceNode(referenceNode) { return this.context.findConjectureByReferenceNode(referenceNode); }

function isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

function isTypePresentByTypeNode(typeNode) { return this.context.isTypePresentByTypeNode(typeNode); }

function isLabelPresentByLabelNode(labelNode) { return this.context.isLabelPresentByLabelNode(labelNode); }

function nodeAsString(node) { return this.context.nodeAsString(node); }

function nodesAsString(node) { return this.context.nodesAsString(node); }

const contextMixins = {
  trace,
  debug,
  info,
  warning,
  error,
  fatal,
  getAxioms,
  getLemmas,
  getTheorems,
  getConjectures,
  getCombinators,
  getConstructors,
  findTypeByTypeName,
  findTypeByTypeNode,
  findLabelByLabelNode,
  findRuleByReferenceNode,
  findAxiomByReferenceNode,
  findLemmaByReferenceNode,
  findTheoremByReferenceNode,
  findConjectureByReferenceNode,
  isTypePresentByTypeName,
  isTypePresentByTypeNode,
  isLabelPresentByLabelNode,
  nodeAsString,
  nodesAsString
};

export default contextMixins;
