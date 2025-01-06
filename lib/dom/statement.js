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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly90ZXJtXCIpLFxuICAgICAgc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL2ZyYW1lXCIpLFxuICAgICAgcHJlbWlzZVN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcmVtaXNlL3N0YXRlbWVudFwiKSxcbiAgICAgIHByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXAvc3RhdGVtZW50XCIpLFxuICAgICAgY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25jbHVzaW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc2VxdWVudC9zdGF0ZW1lbnRcIiksXG4gICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdXBwb3NpdGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50VGVybU5vZGVzID0gc3RhdGVtZW50VGVybU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50VGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudFRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudFRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXMgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudEZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50RnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLm1hdGNoKHN0YXRlbWVudEZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBjb250YWluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyhwcm9vZlN0ZXBTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhQcm9vZlN0ZXBzO1xuXG4gICAgdW5pZmllZFdpdGhQcm9vZlN0ZXBzID0gYmFja3dhcmRzU29tZShwcm9vZlN0ZXBTdWJwcm9vZnMsIChwcm9vZlN0ZXBTdWJwcm9vZikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID1wcm9vZlN0ZXBTdWJwcm9vZi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50UGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0YXRlbWVudE5vZGUgPSBwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5KHByZW1pc2VOb2RlKTtcblxuICAgIGlmIChwcmVtaXNlU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpO1xuXG4gICAgaWYgKHByb29mU3RlcFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlUXVlcnkoY29uY2x1c2lvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGVRdWVyeShjb25zZXF1ZW50Tm9kZSk7XG5cbiAgICBpZiAoY29uc2VxdWVudFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn0iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJlcXVhbFRvIiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsImNvbnRleHQiLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidGVybU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50RnJhbWVOb2RlcyIsInN0YXRlbWVudEZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsIm5hbWUiLCJkb20iLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O3lCQXhCK0I7MkRBRWY7NERBQ1M7NkRBQ0E7Z0VBQ1c7MkJBR0w7cUJBQ087NkJBQ0c7NEJBQ3NFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0FBRWYsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxF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