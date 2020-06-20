"use strict";

function findRuleByName(name, rules) {
  const rule = rules.find((rule) => {
    const ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }); ///
  
  return rule;
}

module.exports = {
  findRuleByName
};
