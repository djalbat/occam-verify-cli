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

function findTypeByTypeNode(typeNode) { return this.context.findTypeByTypeNode(typeNode); }

function findMetavariableByName(name) { return this.context.findMetavariableByName(name); }

function isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

function isTypePresentByTypeNode(typeNode) { return this.context.isTypePresentByTypeNode(typeNode); }

function isMetavariablePresentByName(name) { return this.context.isMetavariablePresentByName(name); }

function isLabelPresentByMetavariableNode(metavariableNode) { return this.context.isLabelPresentByMetavariableNode(metavariableNode); }

function findLabelByMetavariableNode(metavariableNode) { return this.context.findLabelByMetavariableNode(metavariableNode); }

function findRuleByMetavariableNode(metavariableNode) { return this.context.findRuleByMetavariableNode(metavariableNode); }

function findAxiomByMetavariableNode(metavariableNode) { return this.context.findAxiomByMetavariableNode(metavariableNode); }

function findLemmaByMetavariableNode(metavariableNode) { return this.context.findLemmaByMetavariableNode(metavariableNode); }

function findTheoremByMetavariableNode(metavariableNode) { return this.context.findTheoremByMetavariableNode(metavariableNode); }

function findMetaLemmaByMetavariableNode(metavariableNode) { return this.context.findMetaLemmaByMetavariableNode(metavariableNode); }

function findConjectureByMetavariableNode(metavariableNode) { return this.context.findConjectureByMetavariableNode(metavariableNode); }

function findMetatheoremByMetavariableNode(metavariableNode) { return this.context.findMetatheoremByMetavariableNode(metavariableNode); }

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
  findMetavariableByName,
  isTypePresentByTypeName,
  isTypePresentByTypeNode,
  isMetavariablePresentByName,
  isLabelPresentByMetavariableNode,
  findLabelByMetavariableNode,
  findRuleByMetavariableNode,
  findAxiomByMetavariableNode,
  findLemmaByMetavariableNode,
  findTheoremByMetavariableNode,
  findMetaLemmaByMetavariableNode,
  findConjectureByMetavariableNode,
  findMetatheoremByMetavariableNode,
  nodeAsString,
  nodesAsString
};

export default contextMixins;
