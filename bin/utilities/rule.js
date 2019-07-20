'use strict';

function findRuleByName(name, rules) {
  const rule = rules.find(function(rule) {
    const ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }); ///
  
  return rule;
}

function findSingularDefinitionByRuleName(ruleName, rule) {
  let singularDefinition = undefined;

  const definitions = rule.getDefinitions();

  definitions.some((definition) => {
    const parts = definition.getParts().slice(),  ///
          part = parts.shift(),
          partNonTerminalPart = part.isNonTerminalPart();

    if (partNonTerminalPart) {
      const partRuleNamePart = part.isRuleNamePart();

      if (partRuleNamePart) {
        const ruleNamePart = part,  ///
              ruleNamePartRuleName = ruleNamePart.getRuleName();

        if (ruleNamePartRuleName === ruleName) {
          const part = parts.shift();

          if (part === undefined) {
            singularDefinition = definition;  ///

            return true;
          }
        }
      }
    }
  });

  return singularDefinition;
}

module.exports = {
  findRuleByName,
  findSingularDefinitionByRuleName
};
