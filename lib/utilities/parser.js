"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setNonTerminalNodes", {
    enumerable: true,
    get: function() {
        return setNonTerminalNodes;
    }
});
var _occamparsers = require("occam-parsers");
var _node = /*#__PURE__*/ _interop_require_default(require("../node"));
var _nodeMap = /*#__PURE__*/ _interop_require_default(require("../nodeMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rulesFromStartRuleAndRuleMap = _occamparsers.rulesUtilities.rulesFromStartRuleAndRuleMap;
function setNonTerminalNodes(nominalParser) {
    var startRule = nominalParser.getStartRule(), ruleMap = nominalParser.getRuleMap(), rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
    rules.forEach(function(rule) {
        var ruleName = rule.getName(), NonTerminalNode = _nodeMap.default[ruleName] || _node.default; ///
        rule.setNonTerminalNode(NonTerminalNode);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlXCI7XG5pbXBvcnQgbm9kZU1hcCBmcm9tIFwiLi4vbm9kZU1hcFwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Tm9uVGVybWluYWxOb2Rlcyhub21pbmFsUGFyc2VyKSB7XG4gIGNvbnN0IHN0YXJ0UnVsZSA9IG5vbWluYWxQYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHJ1bGVNYXAgPSBub21pbmFsUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gbm9kZU1hcFtydWxlTmFtZV0gfHwgTm9kZTsgLy8vXG5cbiAgICBydWxlLnNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzZXROb25UZXJtaW5hbE5vZGVzIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsInJ1bGVzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlciIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwicnVsZXMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vZGVNYXAiLCJOb2RlIiwic2V0Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTZ0JBOzs7ZUFBQUE7Ozs0QkFQZTsyREFFZDs4REFDRzs7Ozs7O0FBRXBCLElBQU0sQUFBRUMsK0JBQWlDQyw0QkFBYyxDQUEvQ0Q7QUFFRCxTQUFTRCxvQkFBb0JHLGFBQWE7SUFDL0MsSUFBTUMsWUFBWUQsY0FBY0UsWUFBWSxJQUN0Q0MsVUFBVUgsY0FBY0ksVUFBVSxJQUNsQ0MsUUFBUVAsNkJBQTZCRyxXQUFXRTtJQUV0REUsTUFBTUMsT0FBTyxDQUFDLFNBQUNDO1FBQ2IsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsa0JBQWtCQyxnQkFBTyxDQUFDSCxTQUFTLElBQUlJLGFBQUksRUFBRSxHQUFHO1FBRXRETCxLQUFLTSxrQkFBa0IsQ0FBQ0g7SUFDMUI7QUFDRiJ9