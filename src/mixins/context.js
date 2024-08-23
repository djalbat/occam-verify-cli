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

function findTypeByTypeNode(labelMetavariableNode) { return this.context.findTypeByTypeNode(labelMetavariableNode); }

function isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

function isTypePresentByTypeNode(typeNode) { return this.context.isTypePresentByTypeNode(typeNode); }

function findLabelByLabelMetavariableNode(labelMetavariableNode) { return this.context.findLabelByLabelMetavariableNode(labelMetavariableNode); }

function findRuleByLabelMetavariableNode(labelMetavariableNode) { return this.context.findRuleByLabelMetavariableNode(labelMetavariableNode); }

function findAxiomByLabelMetavariableNode(labelMetavariableNode) { return this.context.findAxiomByLabelMetavariableNode(labelMetavariableNode); }

function findLemmaByLabelMetavariableNode(labelMetavariableNode) { return this.context.findLemmaByLabelMetavariableNode(labelMetavariableNode); }

function findTheoremByLabelMetavariableNode(labelMetavariableNode) { return this.context.findTheoremByLabelMetavariableNode(labelMetavariableNode); }

function findConjectureByLabelMetavariableNode(labelMetavariableNode) { return this.context.findConjectureByLabelMetavariableNode(labelMetavariableNode); }

function isLabelPresentByLabelMetavariableNode(labelMetavariableNode) { return this.context.isLabelPresentByLabelMetavariableNode(labelMetavariableNode); }

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
  isTypePresentByTypeName,
  isTypePresentByTypeNode,
  findLabelByLabelMetavariableNode,
  findRuleByLabelMetavariableNode,
  findAxiomByLabelMetavariableNode,
  findLemmaByLabelMetavariableNode,
  findTheoremByLabelMetavariableNode,
  findConjectureByLabelMetavariableNode,
  isLabelPresentByLabelMetavariableNode,
  nodeAsString,
  nodesAsString
};

export default contextMixins;
