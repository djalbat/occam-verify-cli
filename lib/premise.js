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
var _premise = require("./matcher/substitution/premise");
var _premise1 = require("./matcher/metaSubstitution/premise");
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
var metastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion!"), premiseMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"), subDerivationStatementNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"), suppositionStatementStatementNodesQuery = (0, _query.nodesQuery)("/subproof/supposition/unqualifiedStatement!/statement!"), ruleSubDerivationMetastatementNodeQuery = (0, _query.nodeQuery)("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");
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
                    var subDerivationStatementNode = subDerivationStatementNodeQuery(subproofNode), suppositionStatementStatementNodes = suppositionStatementStatementNodesQuery(subproofNode), ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(subproofAssertionNode), statementNodes = _toConsumableArray(suppositionStatementStatementNodes).concat([
                        subDerivationStatementNode
                    ]), statementNodesLength = statementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (statementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var statementNode = statementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _premise.premiseSubstitutionMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _premise.premiseSubstitutionMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchRuleSubproofNode",
            value: function matchRuleSubproofNode(ruleSubproofNode, metaSubstitutions) {
                var ruleSubproofNodeMatches = false;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var premiseMetastatementNodes = premiseMetastatementNodesQuery(ruleSubproofNode), ruleSubDerivationMetastatementNode = ruleSubDerivationMetastatementNodeQuery(ruleSubproofNode), ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), metastatementNodes = _toConsumableArray(premiseMetastatementNodes).concat([
                        ruleSubDerivationMetastatementNode
                    ]), metastatementNodesLength = metastatementNodes.length, ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;
                    if (metastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
                        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every(function(ruleSubproofAssertionMetastatementNode, index) {
                            var metastatementNode = metastatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetaSubstitutionMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
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
            value: function matchMetastatementNode(metastatementNode, metaSubstitutions) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetaSubstitutionMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions), metastatementNodeMatches = nonTerminalNodeMatches; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, metastatementNode = (0, _string.metastatementNodeFromMetastatementString)(metastatementString, releaseContext), premise = new Premise(metastatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHByZW1pc2VTdWJzdGl0dXRpb25NYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9zdWJzdGl0dXRpb24vcHJlbWlzZVwiO1xuaW1wb3J0IHsgcHJlbWlzZU1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9tZXRhU3Vic3RpdHV0aW9uL3ByZW1pc2VcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3J1bGVTdWJwcm9vZkFzc2VydGlvbiFcIiksXG4gICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9wcmVtaXNlL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudCEvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb24vcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50Wy0xXS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZi9zdXBwb3NpdGlvbi91bnF1YWxpZmllZFN0YXRlbWVudCEvc3RhdGVtZW50IVwiKSxcbiAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlU3VicHJvb2YvcnVsZVN1YkRlcml2YXRpb24vcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRbLTFdL21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBzdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZSA9IHN1YkRlcml2YXRpb25TdGF0ZW1lbnROb2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMgPSBzdXBwb3NpdGlvblN0YXRlbWVudFN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgc3ViRGVyaXZhdGlvblN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlU3Vic3RpdHV0aW9uTWF0Y2hlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VTdWJzdGl0dXRpb25NYXRjaGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4ucHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyxcbiAgICAgICAgICAgICAgcnVsZVN1YkRlcml2YXRpb25NZXRhc3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9IG1ldGFzdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID09PSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgpIHtcbiAgICAgICAgcnVsZVN1YnByb29mTm9kZU1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlU3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFTdWJzdGl0dXRpb25NYXRjaGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUHJlbWlzZSIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YkRlcml2YXRpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0YXRlbWVudE5vZGVzUXVlcnkiLCJydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGUiLCJzdWJzdGl0dXRpb25zIiwic3VicHJvb2ZOb2RlTWF0Y2hlcyIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInN1YkRlcml2YXRpb25TdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudE5vZGVzIiwic3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJldmVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiaW5kZXgiLCJzdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwicHJlbWlzZVN1YnN0aXR1dGlvbk1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwicnVsZVN1YnByb29mTm9kZU1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlcyIsInJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZXMiLCJtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJwcmVtaXNlTWV0YVN1YnN0aXR1dGlvbk1hdGNoZXIiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OztzQkFiUTtxQkFDUzt1QkFDSzt3QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9DLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyx5Q0FDckNDLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDM0NDLGlDQUFpQ0gsSUFBQUEsaUJBQVUsRUFBQyxtRUFDNUNJLGtDQUFrQ0YsSUFBQUEsZ0JBQVMsRUFBQyxtRkFDNUNHLDBDQUEwQ0wsSUFBQUEsaUJBQVUsRUFBQywyREFDckRNLDBDQUEwQ0osSUFBQUEsZ0JBQVMsRUFBQztBQUUzQyxJQUFBLEFBQU1KLHdCQUFOO2FBQU1BLFFBQ1BTLGlCQUFpQjs4QkFEVlQ7UUFFakIsSUFBSSxDQUFDUyxpQkFBaUIsR0FBR0E7O2lCQUZSVDs7WUFLbkJVLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUI7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZ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