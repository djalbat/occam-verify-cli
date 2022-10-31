"use strict";

function findRuleByReferenceName(referenceName) { return this.context.findRuleByReferenceName(referenceName); }

function findAxiomByReferenceName(referenceName) { return this.context.findAxiomByReferenceName(referenceName); }

const fileMixins = {
  findRuleByReferenceName,
  findAxiomByReferenceName
};

export default fileMixins;
