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
var _premise = require("./verifier/statementForMetavariable/premise");
var _node = require("./utilities/node");
var _premise1 = require("./verifier/metastatementForMetavariable/premise");
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
                            var subproofStatementNode = subproofStatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = subproofStatementNode, nonTerminalNodeMatches = _premise.premiseStatementForMetavariableVerifier.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _premise.premiseStatementForMetavariableVerifier.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
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
                            var ruleSubproofMetastatementNode = ruleSubproofMetastatementNodes[index], nonTerminalNodeA = ruleSubproofAssertionMetastatementNode, nonTerminalNodeB = ruleSubproofMetastatementNode, nonTerminalNodeMatches = _premise1.premiseMetastatementForMetavariableVerifier.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
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
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _premise1.premiseMetastatementForMetavariableVerifier.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), metastatementNodeMatches = nonTerminalNodeMatches; ///
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
            value: function fromJSON(json, context) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = context.getLexer(), parser = context.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), premise = new Premise(metastatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVtaXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHByZW1pc2VTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciB9IGZyb20gXCIuL3ZlcmlmaWVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9wcmVtaXNlXCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHByZW1pc2VNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgfSBmcm9tIFwiLi92ZXJpZmllci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL3ByZW1pc2VcIjtcblxuY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvcnVsZVN1YnByb29mQXNzZXJ0aW9uIVwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50UXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9wcmVtaXNlL3VucXVhbGlmaWVkTWV0YXN0YXRlbWVudCEvbWV0YXN0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb24vdW5xdWFsaWZpZWRTdGF0ZW1lbnQhL3N0YXRlbWVudCFcIiksXG4gICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb24vcXVhbGlmaWVkU3RhdGVtZW50fHVucXVhbGlmaWVkU3RhdGVtZW50Wy0xXS9zdGF0ZW1lbnQhXCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50UXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVN1YnByb29mL3J1bGVTdWJEZXJpdmF0aW9uL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Wy0xXS9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdFN0YXRlbWVudE5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4uc3VicHJvb2ZTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLFxuICAgICAgICAgICAgICBzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoID0gc3VicHJvb2ZTdGF0ZW1lbnROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGggPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc3VicHJvb2ZTdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHN1YnByb29mTm9kZU1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMuZXZlcnkoKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mU3RhdGVtZW50Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KHRoaXMubWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZlByZW1pc2VNZXRhc3RhdGVtZW50ID0gcnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeShydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudCA9IHJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5KHJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5ydWxlU3VicHJvb2ZQcmVtaXNlTWV0YXN0YXRlbWVudCxcbiAgICAgICAgICAgICAgcnVsZVN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RNZXRhc3RhdGVtZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2Rlc0xlbmd0aCA9PT0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoKSB7XG4gICAgICAgIHJ1bGVTdWJwcm9vZk5vZGVNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzLmV2ZXJ5KChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlID0gcnVsZVN1YnByb29mTWV0YXN0YXRlbWVudE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJ1bGVTdWJwcm9vZk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBwcmVtaXNlTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQcmVtaXNlIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnRRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNRdWVyeSIsInN1YnByb29mU3ViRGVyaXZhdGlvbkxhc3RTdGF0ZW1lbnROb2RlUXVlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0TWV0YXN0YXRlbWVudFF1ZXJ5IiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwic3Vic3RpdHV0aW9ucyIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZlN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZlN1YkRlcml2YXRpb25MYXN0U3RhdGVtZW50Tm9kZSIsInN1YnByb29mU3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImluZGV4Iiwic3VicHJvb2ZTdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwicHJlbWlzZVN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJydWxlU3VicHJvb2ZOb2RlIiwicnVsZVN1YnByb29mTm9kZU1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicnVsZVN1YnByb29mUHJlbWlzZU1ldGFzdGF0ZW1lbnQiLCJydWxlU3VicHJvb2ZTdWJEZXJpdmF0aW9uTGFzdE1ldGFzdGF0ZW1lbnQiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXMiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZXNMZW5ndGgiLCJydWxlU3VicHJvb2ZNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJwcmVtaXNlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OztzQkFiUTtxQkFDUzt1QkFDa0I7b0JBQ0M7d0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsMENBQzNDQyx3Q0FBd0NDLElBQUFBLGlCQUFVLEVBQUMsbUVBQ25EQyx5Q0FBeUNELElBQUFBLGlCQUFVLEVBQUMsMkRBQ3BERSw4Q0FBOENKLElBQUFBLGdCQUFTLEVBQUMsbUZBQ3hESywrQ0FBK0NILElBQUFBLGlCQUFVLEVBQUMseUNBQzFESSxrREFBa0ROLElBQUFBLGdCQUFTLEVBQUM7QUFFbkQsSUFBQSxBQUFNRix3QkFBTjthQUFNQSxRQUNQUyxpQkFBaUI7OEJBRFZUO1FBRWpCLElBQUksQ0FBQ1MsaUJBQWlCLEdBQUdBOztpQkFGUlQ7O1lBS25CVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFQyxhQUFhLEVBQUU7Z0JBQzdDLElBQUlDLHNCQUFzQixLQUFLO2dCQUUvQixJQUFNQyx3QkFBd0JkLCtCQUErQixJQUFJLENBQUNRLGlCQUFpQjtnQkFFbkYsSUFBSU0sMEJBQTBCLElBQUksRUFBRTtvQkFDbEMsSUFBTUMsb0NBQW9DWCx1Q0FBdUNPLGVBQzNFSyx5Q0FBeUNY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