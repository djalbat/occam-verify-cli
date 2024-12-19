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
var _query = require("../utilities/query");
var _unification = require("../utilities/unification");
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
var premiseStatementNodeQuery = (0, _query.nodeQuery)("/premise/statement"), proofStepStatementNodeQuery = (0, _query.nodeQuery)("/proofStep/statement"), conclusionStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/statement"), consequentStatementNodeQuery = (0, _query.nodeQuery)("/consequent/statement"), suppositionStatementNodeQuery = (0, _query.nodeQuery)("/supposition/statement");
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeMatches = this.node.match(statementNode);
                return statementNodeMatches;
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
                var statement = this, statementString = this.string;
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
        }
    ]);
    return Statement;
}(), _define_property(_Statement, "name", "Statement"), _Statement));
function statementFromStatementNode(statementNode, context) {
    var Statement = _dom.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IGNvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2Uvc3RhdGVtZW50XCIpLFxuICAgICAgcHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcC9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmNsdXNpb24vc3RhdGVtZW50XCIpLFxuICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zZXF1ZW50L3N0YXRlbWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFN0cmluZyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmcgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IGNvbnRhaW5lZEFzc2VydGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gY29udGFpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHk7IC8vL1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzKHByb29mU3RlcFN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG5cbiAgICB1bmlmaWVkV2l0aFByb29mU3RlcHMgPSBiYWNrd2FyZHNTb21lKHByb29mU3RlcFN1YnByb29mcywgKHByb29mU3RlcFN1YnByb29mKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPXByb29mU3RlcFN1YnByb29mLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IGNvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50UGFydGlhbENvbnRleHQgPSBTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50UGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RhdGVtZW50Tm9kZSA9IHByZW1pc2VTdGF0ZW1lbnROb2RlUXVlcnkocHJlbWlzZU5vZGUpO1xuXG4gICAgaWYgKHByZW1pc2VTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcFN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAocHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeShjb25jbHVzaW9uTm9kZSk7XG5cbiAgICBpZiAoY29uY2x1c2lvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnNlcXVlbnROb2RlKTtcblxuICAgIGlmIChjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KHN1cHBvc2l0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59Il0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwicHJlbWlzZVN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeSIsImNvbmNsdXNpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJjb25zZXF1ZW50U3RhdGVtZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mVW5pZmllZCIsImNvbnRleHQiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInN1YnByb29mU3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMiLCJzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN1YnByb29mU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwiZGVidWciLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJjb250YWluZWRBc3NlcnRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5V2l0aFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsInVuaWZpZWRXaXRoUHJvb2ZTdGVwcyIsInByb29mU3RlcFN1YnByb29mIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInZlcmlmeU1peGlucyIsInNvbWUiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJjb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50UGFydGlhbENvbnRleHQiLCJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsIm5hbWUiLCJkb20iLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0JBOzs7ZUFBQTs7O3lCQXRCK0I7MkRBRWY7NERBQ1M7NkRBQ0E7aUVBQ007Z0VBQ0s7cUJBRVY7MkJBRUs7NkJBQ1U7NEJBQ3NFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0FBRWYsSUFBTUMsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDLHVCQUN0Q0MsOEJBQThCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN4Q0UsK0JBQStCRixJQUFBQSxnQkFBUyxFQUFDLDBCQUN6Q0csK0JBQStCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUN6Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDO0lBRWhELFdBQWVLLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FEREg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hC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