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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/verify"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../verifier/combinator"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../context/partial/statement"));
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
var match = _necessary.arrayUtilities.match, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var statementTermNodesQuery = (0, _query.nodesQuery)("/statement//term"), statementFrameNodesQuery = (0, _query.nodesQuery)("/statement//frame"), premiseStatementNodeQuery = (0, _query.nodeQuery)("/premise/statement"), proofStepStatementNodeQuery = (0, _query.nodeQuery)("/proofStep/statement"), conclusionStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/statement"), consequentStatementNodeQuery = (0, _query.nodeQuery)("/consequent/statement"), suppositionStatementNodeQuery = (0, _query.nodeQuery)("/supposition/statement"), containedAssertionStatementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement");
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
                var statementString = statement.getString(), equalTo = statementString === this.string;
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var _this = this;
                var verified;
                var statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement..."));
                verified = _verify.default.some(function(verifyMixin) {
                    var statement = _this, verified = verifyMixin(statement, assignments, stated, context);
                    if (verified) {
                        return true;
                    }
                });
                if (verified) {
                    context.debug("...verified the '".concat(statementString, "' statement."));
                }
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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var context = specificContext, statement = this, subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    var subproofString = subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                    var subproofStatements = subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnified = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                        if (statementUnified) {
                            return true;
                        }
                    });
                    if (subproofUnified) {
                        specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofUnified;
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
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently = false;
                var statement = this, statementString = this.string; ///
                context.trace("Unifying the '".concat(statementString, "' statement independently..."));
                var definedAssertion = (0, _verification.definedAssertionFromStatement)(statement, context), containedAssertion = (0, _verification.containedAssertionFromStatement)(statement, context);
                if (definedAssertion !== null) {
                    var definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);
                    unifiedIndependently = definedAssertionUnifiedIndependently; ///
                }
                if (containedAssertion !== null) {
                    var containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);
                    unifiedIndependently = containedAssertionUnifiedIndependently; ///
                }
                if (unifiedIndependently) {
                    context.debug("...unified the '".concat(statementString, "' statement independently."));
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyWithProofStepSubproofs",
            value: function unifyWithProofStepSubproofs(proofStepSubproofs, context) {
                var _this = this;
                var unifiedWithProofSteps;
                unifiedWithProofSteps = backwardsSome(proofStepSubproofs, function(proofStepSubproof) {
                    var statement = _this, statementUnified = proofStepSubproof.unifyStatement(statement, context);
                    if (statementUnified) {
                        return true;
                    }
                });
                return unifiedWithProofSteps;
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementPartialContext = _statement.default.fromStringLexerAndParser(string, lexer, parser), node = statementPartialContext.getNode(), tokens = statementPartialContext.getTokens(), statement = new Statement(string, node, tokens);
                return statement;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var statement = null;
                var premiseStatementNode = premiseStatementNodeQuery(premiseNode);
                if (premiseStatementNode !== null) {
                    var statementNode = premiseStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var statement = null;
                var proofStepStatementNode = proofStepStatementNodeQuery(proofStepNode);
                if (proofStepStatementNode !== null) {
                    var statementNode = proofStepStatementNode; ///
                    statement = statementFromStatementNode(statementNode, fileContext);
                }
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var statement = statementFromStatementNode(statementNode, context);
                return statement;
            }
        },
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, fileContext) {
                var statement = null;
                var conclusionStatementNode = conclusionStatementNodeQuery(conclusionNode);
                if (conclusionStatementNode !== null) {
                    var statementNode = conclusionStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromConsequentNode",
            value: function fromConsequentNode(consequentNode, fileContext) {
                var statement = null;
                var consequentStatementNode = consequentStatementNodeQuery(consequentNode);
                if (consequentStatementNode !== null) {
                    var statementNode = consequentStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var statement = null;
                var suppositionStatementNode = suppositionStatementNodeQuery(suppositionNode);
                if (suppositionStatementNode !== null) {
                    var statementNode = suppositionStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(suppositionNode, fileContext) {
                var statement = null;
                var containedAssertionStatementNode = containedAssertionStatementNodeQuery(suppositionNode);
                if (containedAssertionStatementNode !== null) {
                    var statementNode = containedAssertionStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        }
    ]);
    return Statement;
}(), _define_property(_Statement, "name", "Statement"), _Statement));
function statementFromStatementNode(statementNode, context) {
    var Statement = _dom.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IGNvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly90ZXJtXCIpLFxuICAgICAgc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL2ZyYW1lXCIpLFxuICAgICAgcHJlbWlzZVN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3N0YXRlbWVudFwiKSxcbiAgICAgIHByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvc3RhdGVtZW50XCIpLFxuICAgICAgY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25jbHVzaW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc2VxdWVudC9zdGF0ZW1lbnRcIiksXG4gICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50VGVybU5vZGVzID0gc3RhdGVtZW50VGVybU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50VGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudFRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudFRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXMgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudEZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50RnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLm1hdGNoKHN0YXRlbWVudEZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gY29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllZCA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHk7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzKHByb29mU3RlcFN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBiYWNrd2FyZHNTb21lKHByb29mU3RlcFN1YnByb29mcywgKHByb29mU3RlcFN1YnByb29mKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPXByb29mU3RlcFN1YnByb29mLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50UGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50UGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlUXVlcnkocHJlbWlzZU5vZGUpO1xuXG4gICAgaWYgKHByZW1pc2VTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcFN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAocHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeShjb25jbHVzaW9uTm9kZSk7XG5cbiAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnNlcXVlbnROb2RlKTtcblxuICAgIGlmIChjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsInN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSIsInByZW1pc2VTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJjb25jbHVzaW9uU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImVxdWFsVG8iLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50VGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJmcmFtZU5vZGUiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzIiwic3RhdGVtZW50RnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwiY29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VTdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGUiLCJuYW1lIiwiZG9tIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJCQTs7O2VBQUE7Ozt5QkF6QitCOzJEQUVmOzREQUNTOzZEQUNBO2lFQUNNO2dFQUNLOzJCQUdMO3FCQUNPOzZCQUNHOzRCQUNzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBUUEsUUFBeUJDLHlCQUFjLENBQXZDRCxPQUFPRSxnQkFBa0JELHlCQUFjLENBQWhDQztBQUVmLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDckNDLDJCQUEyQkQsSUFBQUEsaUJBQVUsRUFBQyxzQkFDdENFLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDdENDLDhCQUE4QkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENFLCtCQUErQkYsSUFBQUEsZ0JBQVMsRUFBQywwQkFDekNHLCtCQUErQkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDekNJLGdDQUFnQ0osSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNLLHVDQUF1Q0wsSUFBQUEsZ0JBQVMs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