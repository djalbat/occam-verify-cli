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
var _brackets = require("../utilities/brackets");
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
var stepStatementNodeQuery = (0, _query.nodeQuery)("/step/statement"), statementTermNodesQuery = (0, _query.nodesQuery)("/statement//term"), statementFrameNodesQuery = (0, _query.nodesQuery)("/statement//frame"), premiseStatementNodeQuery = (0, _query.nodeQuery)("/premise/statement"), deductionStatementNodeQuery = (0, _query.nodeQuery)("/deduction/statement"), conclusionStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/statement"), suppositionStatementNodeQuery = (0, _query.nodeQuery)("/supposition/statement"), declarationStatementNodeQuery = (0, _query.nodeQuery)("/declaration/statement"), containedAssertionStatementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement"), combinatorDeclarationStatementNodeQuery = (0, _query.nodeQuery)("/combinatorDeclaration/statement");
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
            key: "unifyWithStepsOrSubproofs",
            value: function unifyWithStepsOrSubproofs(stepsOrSubproofs, context) {
                var _this = this;
                var unifiedWithSteps;
                unifiedWithSteps = backwardsSome(stepsOrSubproofs, function(stepOrSubproof) {
                    var statement = _this, statementUnified = stepOrSubproof.unifyStatement(statement, context);
                    if (statementUnified) {
                        return true;
                    }
                });
                return unifiedWithSteps;
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
            key: "fromStepNode",
            value: function fromStepNode(stepNode, fileContext) {
                var statement = null;
                var stepStatementNode = stepStatementNodeQuery(stepNode);
                if (stepStatementNode !== null) {
                    var statementNode = stepStatementNode; ///
                    statement = statementFromStatementNode(statementNode, fileContext);
                }
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
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, fileContext) {
                var statementNode;
                var declarationStatementNode = declarationStatementNodeQuery(declarationNode);
                statementNode = declarationStatementNode; ///
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var localContext = _local.default.fromFileContext(fileContext), context = localContext, statement = statementFromStatementNode(statementNode, context);
                return statement;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, fileContext) {
                var statement = null;
                var containedAssertionStatementNode = containedAssertionStatementNodeQuery(containedAssertionNode);
                if (containedAssertionStatementNode !== null) {
                    var statementNode = containedAssertionStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    statement = statementFromStatementNode(statementNode, context);
                }
                return statement;
            }
        },
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var statement = null;
                var combinatorDeclarationStatementNode = combinatorDeclarationStatementNodeQuery(combinatorDeclarationNode);
                if (combinatorDeclarationStatementNode !== null) {
                    var statementNode = combinatorDeclarationStatementNode, localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgc3RlcFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL3N0YXRlbWVudFwiKSxcbiAgICAgIHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL3Rlcm1cIiksXG4gICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vZnJhbWVcIiksXG4gICAgICBwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2Uvc3RhdGVtZW50XCIpLFxuICAgICAgZGVkdWN0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZHVjdGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmNsdXNpb24vc3RhdGVtZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3VwcG9zaXRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vc3RhdGVtZW50XCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1Db250YWluZWQ7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50VGVybU5vZGVzID0gc3RhdGVtZW50VGVybU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50VGVybU5vZGVzLnNvbWUoKHN0YXRlbWVudFRlcm1Ob2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLm1hdGNoKHN0YXRlbWVudFRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtQ29udGFpbmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1Db250YWluZWQ7XG4gIH1cblxuICBpc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lQ29udGFpbmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXMgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudEZyYW1lTm9kZXMuc29tZSgoc3RhdGVtZW50RnJhbWVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLm1hdGNoKHN0YXRlbWVudEZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQ29udGFpbmVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gc3VicHJvb2YuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGRlZmluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBjb250YWluZWRBc3NlcnRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5V2l0aFN0ZXBzT3JTdWJwcm9vZnMoc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aFN0ZXBzO1xuXG4gICAgdW5pZmllZFdpdGhTdGVwcyA9IGJhY2t3YXJkc1NvbWUoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPXN0ZXBPclN1YnByb29mLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoU3RlcHM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFBhcnRpYWxDb250ZXh0ID0gU3RhdGVtZW50UGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcFN0YXRlbWVudE5vZGUgPSBzdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChzdGVwU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0ZXBTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0YXRlbWVudE5vZGUgPSBwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5KHByZW1pc2VOb2RlKTtcblxuICAgIGlmIChwcmVtaXNlU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0YXRlbWVudE5vZGUgPSBkZWR1Y3Rpb25TdGF0ZW1lbnROb2RlUXVlcnkoZGVkdWN0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVkdWN0aW9uU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGRlZHVjdGlvblN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeShjb25jbHVzaW9uTm9kZSk7XG5cbiAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeShzdXBwb3NpdGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50Tm9kZTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RhdGVtZW50Tm9kZSA9IGRlY2xhcmF0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KGRlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gZGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHN0YXRlbWVudE5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7ICAvLy9cblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvblN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0YXRlbWVudE5vZGVRdWVyeShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChjb21iaW5hdG9yRGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsInN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZGVkdWN0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJjb250YWluZWRBc3NlcnRpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZXF1YWxUbyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJjb250ZXh0IiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnRUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsImZyYW1lTm9kZSIsInN0YXRlbWVudEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnRGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudFN0cmluZyIsInNwZWNpZmljU3RhdGVtZW50U3RyaW5nIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5IiwiY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeVdpdGhTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInVuaWZpZWRXaXRoU3RlcHMiLCJzdGVwT3JTdWJwcm9vZiIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiU3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInN0ZXBTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsInByZW1pc2VTdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tRGVkdWN0aW9uTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25TdGF0ZW1lbnROb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25Ob2RlIiwiZGVjbGFyYXRpb25TdGF0ZW1lbnROb2RlIiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblN0YXRlbWVudE5vZGUiLCJuYW1lIiwiZG9tIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZCQTs7O2VBQUE7Ozt5QkEzQitCOzJEQUVmOzREQUNTOzZEQUNBO2dFQUNXOzJCQUdMO3FCQUNPOzZCQUNHO3dCQUNNO3VCQUNnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBUUEsUUFBeUJDLHlCQUFjLENBQXZDRCxPQUFPRSxnQkFBa0JELHlCQUFjLENBQWhDQztBQUVmLElBQU1DLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbkNDLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDckNDLDJCQUEyQkQsSUFBQUEsaUJBQVUsRUFBQyxzQkFDdENFLDRCQUE0QkosSUFBQUEsZ0JBQVMsRUFBQyx1QkFDdENLLDhCQUE4QkwsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENNLCtCQUErQk4sSUFBQUEsZ0JBQVMsRUFBQywwQkFDekNPLGdDQUFnQ1AsSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNRLGdDQUFnQ1IsSUFBQUEsZ0JBQVMsRUFBQywyQkFDMUNTLHVDQUF1Q1QsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDakRVLDBDQUEwQ1YsSUFBQUEsZ0JBQVMsRUFBQztJQUUxRCxXQUFlVyxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRERIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFNBQVM7Z0JBQ2pCLElBQU1DLGtCQUFrQkQsVUFBVUosU0FBUyxJQUNyQ00sVUFBV0Qsb0JBQW9CLElBQUksQ0FBQ1IsTUFBTTtnQkFFaEQsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLElBQUksRUFBRUMsT0FBTztnQkFDM0IsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYUgsS0FBS1IsU0FBUyxJQUMzQkssa0JBQWtCLElBQUksQ0FBQ1IsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDWSxRQUFRRyxLQUFLLENBQUMsQUFBQyxXQUFnRFAsT0FBdENNLFlBQVcsNkJBQTJDLE9BQWhCTixpQkFBZ0I7Z0JBRS9FLElBQU1RLFdBQVdMLEtBQUtQLE9BQU8sSUFDdkJhLGdCQUFnQixJQUFJLENBQUNoQixJQUFJLEVBQ3pCaUIscUJBQXFCOUIsd0JBQXdCNkI7Z0JBRW5ESixnQkFBZ0JLLG1CQUFtQkMsSUFBSSxDQUFDLFNBQUNDO29CQUN2QyxJQUFNQyx1Q0FBdUNMLFNBQVNqQyxLQUFLLENBQUNxQztvQkFFNUQsSUFBSUMsc0NBQXNDO3dCQUN4QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlSLGVBQWU7b0JBQ2pCRCxRQUFRVSxLQUFLLENBQUMsQUFBQyxXQUFtRGQsT0FBekNNLFlBQVcsZ0NBQThDLE9BQWhCTixpQkFBZ0I7Z0JBQ3BGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxLQUFLLEVBQUVaLE9BQU87Z0JBQzdCLElBQUlhO2dCQUVKLElBQU1DLGNBQWNGLE1BQU1yQixTQUFTLElBQzdCSyxrQkFBa0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFekNZLFFBQVFHLEtBQUssQ0FBQyxBQUFDLFdBQWtEUCxPQUF4Q2tCLGFBQVksOEJBQTRDLE9BQWhCbEIsaUJBQWdCO2dCQUVqRixJQUFNbUIsWUFBWUgsTUFBTXBCLE9BQU8sSUFDekJhLGdCQUFnQixJQUFJLENBQUNoQixJQUFJLEVBQ3pCMkIsc0JBQXNCdEMseUJBQXlCMkI7Z0JBRXJEUSxpQkFBaUJHLG9CQUFvQlQsSUFBSSxDQUFDLFNBQUNVO29CQUN6QyxJQUFNQyw0Q0FBNENILFVBQVU1QyxLQUFLLENBQUM4QztvQkFFbEUsSUFBSUMsMkNBQTJDO3dCQUM3QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlMLGdCQUFnQjtvQkFDbEJiLFFBQVFVLEtBQUssQ0FBQyxBQUFDLFdBQXFEZCxPQUEzQ2tCLGFBQVksaUNBQStDLE9BQWhCbEIsaUJBQWdCO2dCQUN0RjtnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRXJCLE9BQU87O2dCQUNqQyxJQUFJc0I7Z0JBRUosSUFBTTFCLGtCQUFrQixJQUFJLENBQUNSLE1BQU0sRUFBRyxHQUFHO2dCQUV6Q1ksUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCUCxpQkFBZ0I7Z0JBRWhEMEIsV0FBV0MsZUFBWSxDQUFDaEIsSUFBSSxDQUFDLFNBQUNpQjtvQkFDNUIsSUFBTTdCLG1CQUNBMkIsV0FBV0UsWUFBWTdCLFdBQVd5QixhQUFhQyxRQUFRckI7b0JBRTdELElBQUlzQixVQUFVO3dCQUNaLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWnRCLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQmQsaUJBQWdCO2dCQUNwRDtnQkFFQSxPQUFPMEI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFFBQVEsRUFBRU4sV0FBVyxFQUFFQyxNQUFNLEVBQUVyQixPQUFPO2dCQUN4RCxJQUFJMkIsd0JBQXdCO2dCQUU1QixJQUFNQyxpQkFBaUJGLFNBQVNuQyxTQUFTLElBQ25DSyxrQkFBa0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFekNZLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUEwRHlCLE9BQXpDaEMsaUJBQWdCLDJCQUF3QyxPQUFmZ0MsZ0JBQWU7Z0JBRXhGLElBQU1DLGVBQWVILFNBQVNJLE9BQU87Z0JBRXJDLElBQUlELGlCQUFpQkUsdUNBQXdCLEVBQUU7b0JBQzdDLElBQU1ULFdBQVcsSUFBSSxDQUFDSCxNQUFNLENBQUNDLGFBQWFDLFFBQVFyQjtvQkFFbEQyQix3QkFBd0JMLFVBQVUsR0FBRztnQkFDdkM7Z0JBRUEsSUFBSUssdUJBQXVCO29CQUN6QjNCLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUE0RGtCLE9BQXpDaEMsaUJBQWdCLDJCQUF3QyxPQUFmZ0MsZ0JBQWU7Z0JBQzVGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDcEUsSUFBSUMsa0JBQWtCO2dCQUV0QixJQUFNckMsVUFBVW9DLGlCQUNWekMsWUFBWSxJQUFJLEVBQ2hCMkMsb0JBQW9CQyxJQUFBQSx1Q0FBOEIsRUFBQzVDLFdBQVdLO2dCQUVwRSxJQUFJc0Msc0JBQXNCLE1BQU07b0JBQzlCLElBQU1FLGlCQUFpQlAsU0FBUzFDLFNBQVMsSUFDbkNrRCwwQkFBMEJILGtCQUFrQi9DLFNBQVM7b0JBRTNENkMsZ0JBQWdCakMsS0FBSyxDQUFDLEFBQUMsaUJBQXNEc0MsT0FBdENELGdCQUFlLHlCQUErQyxPQUF4QkMseUJBQXdCO29CQUVyRyxJQUFNQyxxQkFBcUJULFNBQVNVLGFBQWEsSUFDM0NDLDhCQUE4Qk4sa0JBQWtCSyxhQUFhO29CQUVuRU4sa0JBQWtCbEUsTUFBTXlFLDZCQUE2QkYsb0JBQW9CLFNBQUNHLDRCQUE0QkM7d0JBQ3BHLElBQU1DLG1CQUFtQkYsNEJBQ25CRyxvQkFBb0JGLG1CQUNwQkcsbUJBQW1CQyxJQUFBQSwyQkFBYyxFQUFDSCxrQkFBa0JDLG1CQUFtQmQsZUFBZUMsZ0JBQWdCQzt3QkFFNUcsSUFBSWEsa0JBQWtCOzRCQUNwQixPQUFPO3dCQUNUO29CQUNGO29CQUVBLElBQUlaLGlCQUFpQjt3QkFDbkJELGdCQUFnQjFCLEtBQUssQ0FBQyxBQUFDLG1CQUF3RCtCLE9BQXRDRCxnQkFBZSx5QkFBK0MsT0FBeEJDLHlCQUF3QjtvQkFDekc7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFldkQsU0FBUyxFQUFFdUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3RFLElBQUlhO2dCQUVKLElBQU1GLG1CQUFtQixJQUFJLEVBQ3ZCQyxvQkFBb0JyRCxXQUNwQndELHlCQUF5QkosaUJBQWlCeEQsU0FBUyxJQUNuRDZELDBCQUEwQkosa0JBQWtCekQsU0FBUztnQkFFM0Q2QyxnQkFBZ0JqQyxLQUFLLENBQUMsQUFBQyxpQkFBZ0VnRCxPQUFoREMseUJBQXdCLDBCQUErQyxPQUF2QkQsd0JBQXVCO2dCQUU5R0YsbUJBQW1CQyxJQUFBQSwyQkFBYyxFQUFDSCxrQkFBa0JDLG1CQUFtQmQsZUFBZUMsZ0JBQWdCQztnQkFFdEcsSUFBSWEsa0JBQWtCO29CQUNwQmIsZ0JBQWdCMUIsS0FBSyxDQUFDLEFBQUMsbUJBQWtFeUMsT0FBaERDLHlCQUF3QiwwQkFBK0MsT0FBdkJELHdCQUF1QjtnQkFDbEg7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJuQixhQUFhLEVBQUVsQyxPQUFPO2dCQUN2QyxJQUFJc0QsdUJBQXVCO2dCQUUzQixJQUFNM0QsWUFBWSxJQUFJLEVBQ2hCQyxrQkFBa0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFekNZLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQlAsaUJBQWdCO2dCQUUvQyxJQUFNMkQsbUJBQW1CQyxJQUFBQSxzQ0FBNkIsRUFBQzdELFdBQVdLLFVBQzVEeUQscUJBQXFCQyxJQUFBQSx3Q0FBK0IsRUFBQy9ELFdBQVdLO2dCQUV0RSxJQUFJdUQscUJBQXFCLE1BQU07b0JBQzdCLElBQU1JLHVDQUF1Q0osaUJBQWlCRixrQkFBa0IsQ0FBQ25CLGVBQWVsQztvQkFFaEdzRCx1QkFBdUJLLHNDQUFzQyxHQUFHO2dCQUNsRTtnQkFFQSxJQUFJRix1QkFBdUIsTUFBTTtvQkFDL0IsSUFBTUcseUNBQXlDSCxtQkFBbUJKLGtCQUFrQixDQUFDbkIsZUFBZWxDO29CQUVwR3NELHVCQUF1Qk0sd0NBQXdDLEdBQUc7Z0JBQ3BFO2dCQUVBLElBQUlOLHNCQUFzQjtvQkFDeEJ0RCxRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJkLGlCQUFnQjtnQkFDbkQ7Z0JBRUEsT0FBTzBEO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxnQkFBZ0IsRUFBRTlELE9BQU87O2dCQUNqRCxJQUFJK0Q7Z0JBRUpBLG1CQUFtQjFGLGNBQWN5RixrQkFBa0IsU0FBQ0U7b0JBQ2xELElBQU1yRSxtQkFDQXNELG1CQUFrQmUsZUFBZWQsY0FBYyxDQUFDdkQsV0FBV0s7b0JBRWpFLElBQUlpRCxrQkFBa0I7d0JBQ3BCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNN0UsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEI4RSxPQUFPO29CQUNMOUUsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzhFO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVoRixTQUFXOEUsS0FBWDlFLFFBQ0ZpRixRQUFRRCxZQUFZRSxRQUFRLElBQzVCQyxTQUFTSCxZQUFZSSxTQUFTLElBQzlCQywwQkFBMEJDLGtCQUF1QixDQUFDQyx3QkFBd0IsQ0FBQ3ZGLFFBQVFpRixPQUFPRSxTQUMxRmxGLE9BQU9vRix3QkFBd0JqRixPQUFPLElBQ3RDRixTQUFTbUYsd0JBQXdCaEYsU0FBUyxJQUMxQ0UsWUFBWSxJQUFJUixVQUFVQyxRQUFRQyxNQUFNQztnQkFFOUMsT0FBT0s7WUFDVDs7O1lBRU9pRixLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVULFdBQVc7Z0JBQ3ZDLElBQUl6RSxZQUFZO2dCQUVoQixJQUFNbUYsb0JBQW9CeEcsdUJBQXVCdUc7Z0JBRWpELElBQUlDLHNCQUFzQixNQUFNO29CQUM5QixJQUFNekUsZ0JBQWdCeUUsbUJBQW1CLEdBQUc7b0JBRTVDbkYsWUFBWW9GLDJCQUEyQjFFLGVBQWUrRDtnQkFDeEQ7Z0JBRUEsT0FBT3pFO1lBQ1Q7OztZQUVPcUYsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUViLFdBQVc7Z0JBQzdDLElBQUl6RSxZQUFZO2dCQUVoQixJQUFNdUYsdUJBQXVCdkcsMEJBQTBCc0c7Z0JBRXZELElBQUlDLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNN0UsZ0JBQWdCNkUsc0JBQ2hCQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2pCLGNBQzVDcEUsVUFBVW1GLGNBQWUsR0FBRztvQkFFbEN4RixZQUFZb0YsMkJBQTJCMUUsZUFBZUw7Z0JBQ3hEO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVPMkYsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCakYsYUFBYSxFQUFFTCxPQUFPO2dCQUM3QyxJQUFNTCxZQUFZb0YsMkJBQTJCMUUsZUFBZUw7Z0JBRTVELE9BQU9MO1lBQ1Q7OztZQUVPNEYsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVwQixXQUFXO2dCQUNqRCxJQUFJekUsWUFBWTtnQkFFaEIsSUFBTThGLHlCQUF5QjdHLDRCQUE0QjRHO2dCQUUzRCxJQUFJQywyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTXBGLGdCQUFnQm9GLHdCQUNoQk4sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNqQixjQUM1Q3BFLFVBQVVtRixjQUFlLEdBQUc7b0JBRWxDeEYsWUFBWW9GLDJCQUEyQjFFLGVBQWVMO2dCQUN4RDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFTytGLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFdkIsV0FBVztnQkFDbkQsSUFBSXpFLFlBQVk7Z0JBRWhCLElBQU1pRywwQkFBMEIvRyw2QkFBNkI4RztnQkFFN0QsSUFBSUMsNEJBQTRCLE1BQU07b0JBQ3BDLElBQU12RixnQkFBZ0J1Rix5QkFDaEJULGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDakIsY0FDNUNwRSxVQUFVbUYsY0FBZSxHQUFHO29CQUVsQ3hGLFlBQVlvRiwyQkFBMkIxRSxlQUFlTDtnQkFDeEQ7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRU9rRyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRTFCLFdBQVc7Z0JBQ3JELElBQUl6RSxZQUFZO2dCQUVoQixJQUFNb0csMkJBQTJCakgsOEJBQThCZ0g7Z0JBRS9ELElBQUlDLDZCQUE2QixNQUFNO29CQUNyQyxJQUFNMUYsZ0JBQWdCMEYsMEJBQ2hCWixlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2pCLGNBQzVDcEUsVUFBVW1GLGNBQWUsR0FBRztvQkFFbEN4RixZQUFZb0YsMkJBQTJCMUUsZUFBZUw7Z0JBQ3hEO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVPcUcsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUU3QixXQUFXO2dCQUNyRCxJQUFJL0Q7Z0JBRUosSUFBTTZGLDJCQUEyQm5ILDhCQUE4QmtIO2dCQUUvRDVGLGdCQUFnQjZGLDBCQUEwQixHQUFHO2dCQUU3QzdGLGdCQUFnQjhGLElBQUFBLHdDQUE4QixFQUFDOUYsZ0JBQWlCLEdBQUc7Z0JBRW5FLElBQU04RSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2pCLGNBQzVDcEUsVUFBVW1GLGNBQ1Z4RixZQUFZb0YsMkJBQTJCMUUsZUFBZUw7Z0JBRTVELE9BQU9MO1lBQ1Q7OztZQUVPeUcsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxzQkFBc0IsRUFBRWpDLFdBQVc7Z0JBQ25FLElBQUl6RSxZQUFZO2dCQUVoQixJQUFNMkcsa0NBQWtDdEgscUNBQXFDcUg7Z0JBRTdFLElBQUlDLG9DQUFvQyxNQUFNO29CQUM1QyxJQUFNakcsZ0JBQWdCaUcsaUNBQ2hCbkIsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNqQixjQUM1Q3BFLFVBQVVtRixjQUFlLEdBQUc7b0JBRWxDeEYsWUFBWW9GLDJCQUEyQjFFLGVBQWVMO2dCQUN4RDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFTzRHLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVwQyxXQUFXO2dCQUN6RSxJQUFJekUsWUFBWTtnQkFFaEIsSUFBTThHLHFDQUFxQ3hILHdDQUF3Q3VIO2dCQUVuRixJQUFJQyx1Q0FBdUMsTUFBTTtvQkFDL0MsSUFBTXBHLGdCQUFnQm9HLG9DQUNoQnRCLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDakIsY0FDNUNwRSxVQUFVbUYsY0FBZSxHQUFHO29CQUVsQ3hGLFlBQVlvRiwyQkFBMkIxRSxlQUFlTDtnQkFDeEQ7Z0JBRUEsT0FBT0w7WUFDVDs7OztLQWhKQSw2QkFBTytHLFFBQU87QUFtSmhCLFNBQVMzQiwyQkFBMkIxRSxhQUFhLEVBQUVMLE9BQU87SUFDeEQsSUFBTSxBQUFFYixZQUFjd0gsWUFBRyxDQUFqQnhILFdBQ0ZFLE9BQU9nQixlQUNQZixTQUFTVSxRQUFRNEcsWUFBWSxDQUFDdkgsT0FDOUJELFNBQVNZLFFBQVE2RyxjQUFjLENBQUN2SCxTQUNoQ0ssWUFBWSxJQUFJUixVQUFVQyxRQUFRQyxNQUFNQztJQUU5QyxPQUFPSztBQUNUIn0=