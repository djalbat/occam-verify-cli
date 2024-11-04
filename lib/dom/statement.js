"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/verify"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../verifier/combinator"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/statement"));
var _unification = require("../utilities/unification");
var _query = require("../utilities/query");
var _metaTypeNames = require("../metaTypeNames");
var _verification = require("../utilities/verification");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Statement;
var reverse = _necessary.arrayUtilities.reverse;
var statementNodeQuery = (0, _query.nodeQuery)("/*/statement"), statementTermNodesQuery = (0, _query.nodesQuery)("/statement//term"), statementFrameNodesQuery = (0, _query.nodesQuery)("/statement//frame");
var _default = (0, _dom.domAssigned)((_Statement = /*#__PURE__*/ function() {
    function Statement(string, node, tokens) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
    }
    _create_class(Statement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(statement) {
                var equalTo = false;
                if (statement !== null) {
                    var statementString = statement.getString();
                    equalTo = statementString === this.string;
                }
                return equalTo;
            }
        },
        {
            key: "isTermContained",
            value: function isTermContained(term, context) {
                var termContained;
                var termString = term.getString(), statementString = this.string; ///
                context.trace("Is the '".concat(termString, "' term contained in the '").concat(statementString, "' statement..."));
                var termNode = term.getNode(), statementNode = this.node, statementTermNodes = statementTermNodesQuery(statementNode);
                termContained = statementTermNodes.some(function(statementTermNode) {
                    var termNodeMatchesStatementVariableNode = termNode.match(statementTermNode);
                    if (termNodeMatchesStatementVariableNode) {
                        return true;
                    }
                });
                if (termContained) {
                    context.debug("...the '".concat(termString, "' term is contained in the '").concat(statementString, "' statement."));
                }
                return termContained;
            }
        },
        {
            key: "isFrameContained",
            value: function isFrameContained(frame, context) {
                var frameContained;
                var frameString = frame.getString(), statementString = this.string; ///
                context.trace("Is the '".concat(frameString, "' frame contained in the '").concat(statementString, "' statement..."));
                var frameNode = frame.getNode(), statementNode = this.node, statementFrameNodes = statementFrameNodesQuery(statementNode);
                frameContained = statementFrameNodes.some(function(statementFrameNode) {
                    var frameNodeMatchesStatementMetavariableNode = frameNode.match(statementFrameNode);
                    if (frameNodeMatchesStatementMetavariableNode) {
                        return true;
                    }
                });
                if (frameContained) {
                    context.debug("...the '".concat(frameString, "' frame is contained in the '").concat(statementString, "' statement."));
                }
                return frameContained;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeMatches = this.node.match(statementNode);
                return statementNodeMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                specificContext.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                statementUnified = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently = false;
                var context = specificContext, statement = this; ///
                var definedAssertion = (0, _verification.definedAssertionFromStatement)(statement, context), containedAssertion = (0, _verification.containedAssertionFromStatement)(statement, context);
                if (definedAssertion !== null || containedAssertion !== null) {
                    var statementString = this.string;
                    specificContext.trace("Unifying the '".concat(statementString, "' statement independently..."));
                    if (definedAssertion !== null) {
                        var definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);
                        unifiedIndependently = definedAssertionUnifiedIndependently; ///
                    }
                    if (containedAssertion !== null) {
                        var containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);
                        unifiedIndependently = containedAssertionUnifiedIndependently; ///
                    }
                    if (unifiedIndependently) {
                        specificContext.debug("...unified the '".concat(statementString, "' statement independently."));
                    }
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyWithProofSteps",
            value: function unifyWithProofSteps(proofSteps, context) {
                var _this = this;
                var unifiedWithProofSteps;
                proofSteps = reverse(proofSteps); ///
                unifiedWithProofSteps = proofSteps.some(function(proofStep) {
                    var statement = _this, statementUnified = proofStep.unifyStatement(statement, context);
                    if (statementUnified) {
                        return true;
                    }
                });
                return unifiedWithProofSteps;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var _this = this;
                var verified;
                verified = _verify.default.some(function(verifyMixin) {
                    var statement = _this, verified = verifyMixin(statement, assignments, stated, context);
                    if (verified) {
                        return true;
                    }
                });
                return verified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared;
                var statementNode = this.node, statementString = this.string; ///
                fileContext.trace("Verifying the '".concat(statementString, "' statement when declared..."));
                verifiedWhenDeclared = _combinator.default.verifyStatement(statementNode, fileContext);
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(statementString, "' statement when declared."));
                }
                return verifiedWhenDeclared;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiedGivenMetaType = false;
                var metaTypeString = metaType.getString(), statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated, context);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    context.debug("...verified the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiedGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = this.string, json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, context = fileContext, statementNodeAndTokens = _statement.default.fromString(string, context), node = statementNodeAndTokens.getNode(), tokens = statementNodeAndTokens.getTokens(), statement = new Statement(string, node, tokens);
                return statement;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var node = premiseNode, statement = statementFromNode(node, fileContext);
                return statement;
            }
        },
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var node = proofStepNode, statement = statementFromNode(node, fileContext);
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var statement = null;
                if (statementNode !== null) {
                    var node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens);
                    statement = new Statement(string, node, tokens);
                }
                return statement;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, fileContext) {
                var node = conclusionNode, statement = statementFromNode(node, fileContext);
                return statement;
            }
        },
        {
            key: "fromConsequentNode",
            value: function fromConsequentNode(consequentNode, fileContext) {
                var node = consequentNode, statement = statementFromNode(node, fileContext);
                return statement;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var node = suppositionNode, statement = statementFromNode(node, fileContext);
                return statement;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var statementNode = statementNodeQuery(containedAssertionNode), node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
                return statement;
            }
        }
    ]);
    return Statement;
}(), _define_property(_Statement, "name", "Statement"), _Statement));
function statementFromNode(node, fileContext) {
    var statement = null;
    var statementNode = statementNodeQuery(node);
    if (statementNode !== null) {
        var Statement = _dom.default.Statement, _$node = statementNode, tokens = fileContext.nodeAsTokens(_$node), string = fileContext.tokensAsString(tokens);
        statement = new Statement(string, _$node, tokens);
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IGNvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuaW1wb3J0IFN0YXRlbWVudE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uL25vZGVBbmRUb2tlbnMvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuXG5jb25zdCB7IHJldmVyc2UgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zdGF0ZW1lbnRcIiksXG4gICAgICBzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly90ZXJtXCIpLFxuICAgICAgc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL2ZyYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXRlbWVudFN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRUZXJtTm9kZXMgPSBzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnRUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50VGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gdGVybU5vZGUubWF0Y2goc3RhdGVtZW50VGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50RnJhbWVOb2RlcyA9IHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50RnJhbWVOb2Rlcy5zb21lKChzdGF0ZW1lbnRGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUubWF0Y2goc3RhdGVtZW50RnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKChkZWZpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB8fCAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseTsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5V2l0aFByb29mU3RlcHMocHJvb2ZTdGVwcywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID1wcm9vZlN0ZXAudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhQcm9vZlN0ZXBzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gY29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50Tm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9vZlN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbmNsdXNpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gY29uc2VxdWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBmaWxlQ29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn0iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsImVxdWFsVG8iLCJzdGF0ZW1lbnRTdHJpbmciLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50VGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJtYXRjaCIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsImZyYW1lTm9kZSIsInN0YXRlbWVudEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnRGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5IiwiY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeVdpdGhQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJjb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnROb2RlQW5kVG9rZW5zIiwiU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInN0YXRlbWVudEZyb21Ob2RlIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSIsImRvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBQTs7O3lCQW5CK0I7MkRBRWY7NkRBQ1M7aUVBQ007Z0VBQ0k7MkJBR0o7cUJBQ087NkJBQ0c7NEJBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNLEFBQUVBLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVSLElBQU1FLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQkFDL0JDLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDckNDLDJCQUEyQkQsSUFBQUEsaUJBQVUsRUFBQztJQUU1QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRERIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNB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