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
var _context = require("../utilities/context");
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
var statementTermNodesQuery = (0, _query.nodesQuery)("/statement//term"), statementFrameNodesQuery = (0, _query.nodesQuery)("/statement//frame"), premiseStatementNodeQuery = (0, _query.nodeQuery)("/premise/statement"), proofStepStatementNodeQuery = (0, _query.nodeQuery)("/proofStep/statement"), deductionStatementNodeQuery = (0, _query.nodeQuery)("/deduction/statement"), conclusionStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/statement"), suppositionStatementNodeQuery = (0, _query.nodeQuery)("/supposition/statement"), containedAssertionStatementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement");
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
                var context = specificContext, statement = this, subproofAssertion = (0, _context.subproofAssertionFromStatement)(statement, context);
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
                var definedAssertion = (0, _context.definedAssertionFromStatement)(statement, context), containedAssertion = (0, _context.containedAssertionFromStatement)(statement, context);
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
            key: "fromDeductionNode",
            value: function fromDeductionNode(deductionNode, fileContext) {
                var statement = null;
                var deductionStatementNode = deductionStatementNodeQuery(deductionNode);
                if (deductionStatementNode !== null) {
                    var statementNode = deductionStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RhdGVtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdGVybVwiKSxcbiAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly9mcmFtZVwiKSxcbiAgICAgIHByZW1pc2VTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJlbWlzZS9zdGF0ZW1lbnRcIiksXG4gICAgICBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwL3N0YXRlbWVudFwiKSxcbiAgICAgIGRlZHVjdGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWR1Y3Rpb24vc3RhdGVtZW50XCIpLFxuICAgICAgY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25jbHVzaW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3N0YXRlbWVudFwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vc3RhdGVtZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChzdGF0ZW1lbnRTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRUZXJtTm9kZXMgPSBzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnRUZXJtTm9kZXMuc29tZSgoc3RhdGVtZW50VGVybU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gdGVybU5vZGUubWF0Y2goc3RhdGVtZW50VGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1Db250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVDb250YWluZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50RnJhbWVOb2RlcyA9IHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50RnJhbWVOb2Rlcy5zb21lKChzdGF0ZW1lbnRGcmFtZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUubWF0Y2goc3RhdGVtZW50RnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVDb250YWluZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mVW5pZmllZCA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHk7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzKHByb29mU3RlcFN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBiYWNrd2FyZHNTb21lKHByb29mU3RlcFN1YnByb29mcywgKHByb29mU3RlcFN1YnByb29mKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPXByb29mU3RlcFN1YnByb29mLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50UGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50UGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlUXVlcnkocHJlbWlzZU5vZGUpO1xuXG4gICAgaWYgKHByZW1pc2VTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcFN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAocHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdGF0ZW1lbnROb2RlID0gZGVkdWN0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KGRlZHVjdGlvbk5vZGUpO1xuXG4gICAgaWYgKGRlZHVjdGlvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlUXVlcnkoY29uY2x1c2lvbk5vZGUpO1xuXG4gICAgaWYgKGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKTtcblxuICAgIGlmIChzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59Il0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwic3RhdGVtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5IiwicHJlbWlzZVN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSIsImRlZHVjdGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJlcXVhbFRvIiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsImNvbnRleHQiLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsInRyYWNlIiwidGVybU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50RnJhbWVOb2RlcyIsInN0YXRlbWVudEZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiZGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvblN0YXRlbWVudE5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsIm5hbWUiLCJkb20iLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O3lCQXhCK0I7MkRBRWY7NERBQ1M7NkRBQ0E7Z0VBQ1c7MkJBR0w7cUJBQ087NkJBQ0c7dUJBQ3NFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0FBRWYsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHFCQUNyQ0MsMkJBQTJC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