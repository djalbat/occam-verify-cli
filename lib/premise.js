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
var _premise = require("./matcher/premise");
var _premise1 = require("./metaMatcher/premise");
var _query = require("./utilities/query");
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
                            var statementNode = statementNodes[index], nonTerminalNodeB = statementNode, nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeMatches = _premise.premiseMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _premise.premiseMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
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
                            var metastatementNode = metastatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetaMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetaMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions), metastatementNodeMatches = nonTerminalNodeMatches; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBwcmVtaXNlTWF0Y2hlciB9IGZyb20gXCIuL21hdGNoZXIvcHJlbWlzZVwiO1xuaW1wb3J0IHsgcHJlbWlzZU1ldGFNYXRjaGVyIH0gZnJvbSBcIi4vbWV0YU1hdGNoZXIvcHJlbWlzZVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mQXNzZXJ0aW9uL21ldGFzdGF0ZW1lbnRcIiksXG4gICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9ydWxlU3VicHJvb2ZBc3NlcnRpb24hXCIpLFxuICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcHJlbWlzZS91bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhL21ldGFzdGF0ZW1lbnQhXCIpLFxuICAgICAgc3ViRGVyaXZhdGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJwcm9vZi9zdWJEZXJpdmF0aW9uL3F1YWxpZmllZFN0YXRlbWVudHx1bnF1YWxpZmllZFN0YXRlbWVudFstMV0vc3RhdGVtZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQhL3N0YXRlbWVudCFcIiksXG4gICAgICBydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Wy0xXS9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViRGVyaXZhdGlvblN0YXRlbWVudE5vZGUgPSBzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0YXRlbWVudE5vZGVzID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShzdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHN1YkRlcml2YXRpb25TdGF0ZW1lbnROb2RlXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBzdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZXNMZW5ndGggPT09IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCkge1xuICAgICAgICBzdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWF0Y2hlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YkRlcml2YXRpb25NZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXMgPSBbXG4gICAgICAgICAgICAgIC4uLnByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXMsXG4gICAgICAgICAgICAgIHJ1bGVTdWJEZXJpdmF0aW9uTWV0YXN0YXRlbWVudE5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBtZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHByZW1pc2VNZXRhTWF0Y2hlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nKG1ldGFzdGF0ZW1lbnRTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlByZW1pc2UiLCJtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YkRlcml2YXRpb25NZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJEZXJpdmF0aW9uU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJzdGF0ZW1lbnROb2RlcyIsInN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwic3RhdGVtZW50Tm9kZSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsInByZW1pc2VNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoUnVsZVN1YnByb29mTm9kZSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3Vic3RpdHV0aW9ucyIsInJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZXMiLCJydWxlU3ViRGVyaXZhdGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVzIiwibWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwicHJlbWlzZU1ldGFNYXRjaGVyIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwicHJlbWlzZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7c0JBYlE7dUJBQ0U7d0JBQ0k7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0QyxJQUFNQywwQkFBMEJDLElBQUFBLGlCQUFVLEVBQUMseUNBQ3JDQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsMENBQzNDQyxpQ0FBaUNILElBQUFBLGlCQUFVLEVBQUMsbUVBQzVDSSxrQ0FBa0NGLElBQUFBLGdCQUFTLEVBQUMsbUZBQzVDRywwQ0FBMENMLElBQUFBLGlCQUFVLEVBQUMsMkRBQ3JETSwwQ0FBMENKLElBQUFBLGdCQUFTLEVBQUM7QUFFM0MsSUFBQSxBQUFNSix3QkFBTjthQUFNQSxRQUNQUyxpQkFBaUI7OEJBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztpQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFQyxhQUFhLEVBQUU7Z0JBQzdDLElBQUlDLHNCQUFzQixLQUFLO2dCQUUvQixJQUFNQyx3QkFBd0JaLCtCQUErQixJQUFJLENBQUNNLGlCQUFpQjtnQkFFbkYsSUFBSU0sMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUMsNkJBQTZCVixnQ0FBZ0NNLGVBQzdESyxxQ0FBcUNWLHdDQUF3Q0ssZUFDN0VNLDBDQUEwQ2pCLHdCQUF3QmMsd0JBQ2xFSSxpQkFBaUIsQUFDZixtQkFBR0YsMkNBRFk7d0JBRWZEO3FCQUNELEdBQ0RJLHVCQUF1QkQsZUFBZUUsTUFBTSxFQUM1Q0MsZ0RBQWdESix3Q0FBd0NHLE1BQU07b0JBRXBHLElBQUlELHlCQUF5QkUsK0NBQStDO3dCQUMxRVIsc0JBQXNCSSx3Q0FBd0NLLEtBQUssQ0FBQyxTQUFDQyx3Q0FBd0NDLE9BQVU7NEJBQ3JILElBQU1DLGdCQUFnQlAsY0FBYyxDQUFDTSxNQUFNLEVBQ3JDRSxtQkFBbUJELGVBQ25CRSxtQkFBbUJKLHdDQUNuQksseUJBQXlCQyx1QkFBYyxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCRCxrQkFBa0JkOzRCQUV2RyxJQUFJZ0Isd0JBQXdCO2dDQUMxQixPQUFPLElBQUk7NEJBQ2IsQ0FBQzt3QkFDSDtvQkFDRixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT2Y7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CTixhQUFhLEVBQUViLGFBQWEsRUFBRTtnQkFDL0MsSUFBTWUsbUJBQW1CLElBQUksQ0FBQ25CLGlCQUFpQixFQUN6Q2tCLG1CQUFtQkQsZUFDbkJHLHlCQUF5QkMsdUJBQWMsQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkQsa0JBQWtCZCxnQkFDakdvQix1QkFBdUJKLHdCQUF3QixHQUFHO2dCQUV4RCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUN6RCxJQUFJQywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTUMsNEJBQTRCbkMsK0JBQStCLElBQUksQ0FBQ00saUJBQWlCO2dCQUV2RixJQUFJNkIsOEJBQThCLElBQUksRUFBRTtvQkFDdEMsSUFBTUMsNEJBQTRCbEMsK0JBQStCOEIsbUJBQzNESyxxQ0FBcUNoQyx3Q0FBd0MyQixtQkFDN0VqQiwwQ0FBMENqQix3QkFBd0JxQyw0QkFDbEVHLHFCQUFxQixBQUNuQixtQkFBR0Ysa0NBRGdCO3dCQUVuQkM7cUJBQ0QsR0FDREUsMkJBQTJCRCxtQkFBbUJwQixNQUFNLEVBQ3BEQyxnREFBZ0RKLHdDQUF3Q0csTUFBTTtvQkFFcEcsSUFBSXFCLDZCQUE2QnBCLCtDQUErQzt3QkFDOUVlLDBCQUEwQm5CLHdDQUF3Q0ssS0FBSyxDQUFDLFNBQUNDLHdDQUF3Q0MsT0FBVTs0QkFDL0YsSUFBTWhCLG9CQUFvQmdDLGtCQUFrQixDQUFDaEIsTUFBTSxFQUM3Q0csbUJBQW1CSix3Q0FDbkJHLG1CQUFtQmxCLG1CQUNuQm9CLHlCQUF5QmMsNEJBQWtCLENBQUNaLG9CQUFvQixDQUFDSCxrQkFBa0JELGtCQUFrQlM7NEJBRTNHLElBQUlQLHdCQUF3QjtnQ0FDMUIsT0FBTyxJQUFJOzRCQUNiLENBQUM7d0JBQ0g7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPUTtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1Qm5DLGlCQUFpQixFQUFFMkIsaUJBQWlCLEVBQUU7Z0JBQzNELElBQU1SLG1CQUFtQixJQUFJLENBQUNuQixpQkFBaUIsRUFDekNrQixtQkFBbUJsQixtQkFDbkJvQix5QkFBeUJjLDRCQUFrQixDQUFDWixvQkFBb0IsQ0FBQ0gsa0JBQWtCRCxrQkFBa0JTLG9CQUNyR1MsMkJBQTJCaEIsd0JBQXdCLEdBQUc7Z0JBRTVELE9BQU9nQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ3ZDLGlCQUFpQixHQUN6RHdDLGdCQUFnQkYscUJBQ2hCRyxPQUFPO29CQUNMRCxlQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVILGdCQUFrQkMsS0FBbEJELGVBQ0ZGLHNCQUFzQkUsZUFDdEJ4QyxvQkFBb0I0QyxJQUFBQSxnREFBd0MsRUFBQ04scUJBQXFCSyxpQkFDbEZFLFVBQVUsSUEzR0N0RCxRQTJHV1M7Z0JBRTVCLE9BQU82QztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCOUMsaUJBQWlCLEVBQUU7Z0JBQzlDLElBQU02QyxVQUFVLElBakhDdEQsUUFpSFdTO2dCQUU1QixPQUFPNkM7WUFDVDs7O1dBcEhtQnREIn0=