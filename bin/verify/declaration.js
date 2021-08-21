"use strict";

const verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyTypesDeclaration = require("../verify/declaration/types"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyVariablesDeclaration = require("../verify/declaration/variables"),
      verifyOperatorDeclaration = require("../verify/declaration/operator"),
      verifyOperatorsDeclaration = require("../verify/declaration/operators"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor"),
      verifyConstructorsDeclaration = require("../verify/declaration/constructors");

const { TYPE_DECLARATION_RULE_NAME,
        TYPES_DECLARATION_RULE_NAME,
        VARIABLE_DECLARATION_RULE_NAME,
        VARIABLES_DECLARATION_RULE_NAME,
        OPERATOR_DECLARATION_RULE_NAME,
        OPERATORS_DECLARATION_RULE_NAME,
        CONSTRUCTOR_DECLARATION_RULE_NAME,
        CONSTRUCTORS_DECLARATION_RULE_NAME } = require("../ruleNames");

const map = {};

map[TYPE_DECLARATION_RULE_NAME] = verifyTypeDeclaration;
map[TYPES_DECLARATION_RULE_NAME] = verifyTypesDeclaration;
map[VARIABLE_DECLARATION_RULE_NAME] = verifyVariableDeclaration;
map[VARIABLES_DECLARATION_RULE_NAME] = verifyVariablesDeclaration;
map[OPERATOR_DECLARATION_RULE_NAME] = verifyOperatorDeclaration;
map[OPERATORS_DECLARATION_RULE_NAME] = verifyOperatorsDeclaration;
map[CONSTRUCTOR_DECLARATION_RULE_NAME] = verifyConstructorDeclaration;
map[CONSTRUCTORS_DECLARATION_RULE_NAME] = verifyConstructorsDeclaration;

function verifyDeclaration(declarationNode, fileContext) {
  const ruleName = declarationNode.getRuleName(),
        verifyDeclaration = map[ruleName],
        declarationVerified = verifyDeclaration(declarationNode, fileContext);

  return declarationVerified;
}

module.exports = verifyDeclaration;
