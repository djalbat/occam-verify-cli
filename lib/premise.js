"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Premise;
    }
});
var _string = require("./utilities/string");
var _query = require("./utilities/query");
var _premise = require("./matcher/statementForMetavariable/premise");
var _node = require("./utilities/node");
var _premise1 = require("./matcher/metastatementForMetavariable/premise");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion!"), ruleSubproofPremiseMetastatementQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), subproofSuppositionStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement!/statement!"), subproofSubDerivationLastStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), ruleSubproofAssertionMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofSubDerivationLastMetastatementQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
var Premise = /*#__PURE__*/ function() {
    function Premise(metastatementNode) {
        _classCallCheck(this, Premise);
        this.metastatementNode = metastatementNode;
    }
    _createClass(Premise, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchSubproofNode",
            value: function matchSubproofNode(subproofNode, substitutions) {
                var subproofNodeMatches = false;
                var subproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (subproofAssertionNode !== null) {
                    var subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode), subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode), subproofStatementNodes = _toConsumableArray(subproofSuppositionStatementNodes).concat([
                        subproofSubDerivationLastStatementNode
                    ]), ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(subproofAssertionNode), subproofStatementNodesLength = subproofStatementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (subproofStatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var subproofStatementNode = subproofStatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, nonTerminalNodeMatches = _premise.premiseStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                            if (nonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return subproofNodeMatches;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _premise.premiseStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, substitutions) {
                var ruleSubproofNodeMatches = false;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode), ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode), ruleSubproofMetastatementNodes = _toConsumableArray(ruleSubproofPremiseMetastatement).concat([
                        ruleSubproofSubDerivationLastMetastatement
                    ]), ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length, ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(ruleSubproofAssertionNode), ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (ruleSubproofMetastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var ruleSubproofMetastatementNode = ruleSubproofMetastatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, nonTerminalNodeMatches = _premise1.premiseMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
                            if (nonTerminalNodeMatches) {
                                return true;
                            }
                        });
                    }
                }
                return ruleSubproofNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), metastatementNodeMatches = nonTerminalNodeMatches; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, lexer, parser) {
                var metastatement = json.metastatement, metastatementString = metastatement, metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), premise = new Premise(metastatementNode);
                return premise;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var premise = new Premise(metastatementNode);
                return premise;
            }
        }
    ]);
    return Premise;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHByZW1pc2VTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvcHJlbWlzZVwiO1xuaW1wb3J0IHsgbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgfSBmcm9tIFwiLi9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvcHJlbWlzZVwiO1xuXG5jb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9ydWxlU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3ByZW1pc2UvdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IS9tZXRhc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudCEvc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VicHJvb2Yvc3ViRGVyaXZhdGlvbi9xdWFsaWZpZWRTdGF0ZW1lbnR8dW5xdWFsaWZpZWRTdGF0ZW1lbnRbLTFdL3N0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnRRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb24vcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRbLTFdL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBzdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGUgPSBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5zdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdWJwcm9vZlN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5ldmVyeSgocnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN1YnByb29mU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50ID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudCA9IHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5ydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCxcbiAgICAgICAgICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcikge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByZW1pc2UiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudFF1ZXJ5Iiwibm9kZXNRdWVyeSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwic3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YnByb29mU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsInN1YnByb29mU3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiaW5kZXgiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJwcmVtaXNlU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZSIsInJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50IiwicnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50IiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzIiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwicnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsInBhcnNlciIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OztzQkFiUTtxQkFDUzt1QkFDaUI7b0JBQ0U7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFNQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsMENBQzNDQyx3Q0FBd0NDLElBQUFBLGlCQUFVLEVBQUMsbUVBQ25EQyx5Q0FBeUNELElBQUFBLGlCQUFVLEVBQUMsMkRBQ3BERSw4Q0FBOENKLElBQUFBLGdCQUFTLEVBQUMsbUZBQ3hESywrQ0FBK0NILElBQUFBLGlCQUFVLEVBQUMseUNBQzFESSxrREFBa0ROLElBQUFBLGdCQUFTLEVBQUM7QUFFbkQsSUFBQSxBQUFNRix3QkFBTjthQUFNQSxRQUNQUyxpQkFBaUI7OEJBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztpQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFQyxhQUFhLEVBQUU7Z0JBQzdDLElBQUlDLHNCQUFzQixLQUFLO2dCQUUvQixJQUFNQyx3QkFBd0JkLCtCQUErQixJQUFJLENBQUNRLGlCQUFpQjtnQkFFbkYsSUFBSU0sMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUMsb0NBQW9DWCx1Q0FBdUNPLGVBQzNFSyx5Q0FBeUNYLDRDQUE0Q00sZUFDckZNLHlCQUF5QixBQUN2QixtQkFBR0YsMENBRG9CO3dCQUV2QkM7cUJBQ0QsR0FDREUsMENBQTBDWiw2Q0FBNkNRLHdCQUN2RkssK0JBQStCRix1QkFBdUJHLE1BQU0sRUFDNURDLGdE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