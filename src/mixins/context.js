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

function findLabelByTypeName(labelName) { return this.context.findLabelByTypeName(labelName); }

function findRuleByReferenceName(referenceName) { return this.context.findRuleByReferenceName(referenceName); }

function findAxiomByReferenceName(referenceName) { return this.context.findAxiomByReferenceName(referenceName); }

function findLemmaByReferenceName(referenceName) { return this.context.findLemmaByReferenceName(referenceName); }

function findTheoremByReferenceName(referenceName) { return this.context.findTheoremByReferenceName(referenceName); }

function findConjectureByReferenceName(referenceName) { return this.context.findConjectureByReferenceName(referenceName); }

function isLabelPresentByLabelName(labelName) { return this.context.isLabelPresentByLabelName(labelName); }

function isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

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
  findLabelByTypeName,
  findRuleByReferenceName,
  findAxiomByReferenceName,
  findLemmaByReferenceName,
  findTheoremByReferenceName,
  findConjectureByReferenceName,
  isLabelPresentByLabelName,
  isTypePresentByTypeName,
  nodeAsString,
  nodesAsString
};

export default contextMixins;
