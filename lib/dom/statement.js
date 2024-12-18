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
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently = false;
                var context = specificContext, statement = this; ///
                var definedAssertion = (0, _verification.definedAssertionFromStatement)(statement, context);
                if (definedAssertion !== null) {
                    var statementString = this.string;
                    specificContext.trace("Unifying the '".concat(statementString, "' statement independently..."));
                    var definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);
                    unifiedIndependently = definedAssertionUnifiedIndependently; ///
                    if (unifiedIndependently) {
                        specificContext.debug("...unified the '".concat(statementString, "' statement independently."));
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3ZlcmlmeVwiO1xuaW1wb3J0IGNvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuaW1wb3J0IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnQsIHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ByZW1pc2Uvc3RhdGVtZW50XCIpLFxuICAgICAgcHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcC9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmNsdXNpb24vc3RhdGVtZW50XCIpLFxuICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zZXF1ZW50L3N0YXRlbWVudFwiKSxcbiAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1cHBvc2l0aW9uL3N0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mU3RhdGVtZW50cyA9IHN1YnByb29mLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudHMoKTtcblxuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3VicHJvb2ZTdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFN0cmluZyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmcgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBkZWZpbmVkQXNzZXJ0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBkZWZpbmVkQXNzZXJ0aW9uVW5pZmllZEluZGVwZW5kZW50bHk7IC8vL1xuXG4gICAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVdpdGhQcm9vZlN0ZXBTdWJwcm9vZnMocHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcblxuICAgIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcyA9IGJhY2t3YXJkc1NvbWUocHJvb2ZTdGVwU3VicHJvb2ZzLCAocHJvb2ZTdGVwU3VicHJvb2YpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9cHJvb2ZTdGVwU3VicHJvb2YudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhQcm9vZlN0ZXBzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gY29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCA9IFN0YXRlbWVudFBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50UGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZW1pc2VTdGF0ZW1lbnROb2RlID0gcHJlbWlzZVN0YXRlbWVudE5vZGVRdWVyeShwcmVtaXNlTm9kZSk7XG5cbiAgICBpZiAocHJlbWlzZVN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKTtcblxuICAgIGlmIChwcm9vZlN0ZXBTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgY29uY2x1c2lvblN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uU3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbmNsdXNpb25Ob2RlKTtcblxuICAgIGlmIChjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25TdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlUXVlcnkoY29uc2VxdWVudE5vZGUpO1xuXG4gICAgaWYgKGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlUXVlcnkoc3VwcG9zaXRpb25Ob2RlKTtcblxuICAgIGlmIChzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn0iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvb2ZTdGVwU3RhdGVtZW50Tm9kZVF1ZXJ5IiwiY29uY2x1c2lvblN0YXRlbWVudE5vZGVRdWVyeSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZVbmlmaWVkIiwiY29udGV4dCIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJkZWJ1ZyIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZWRJbmRlcGVuZGVudGx5IiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiZGVmaW5lZEFzc2VydGlvblVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlXaXRoUHJvb2ZTdGVwU3VicHJvb2ZzIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwidW5pZmllZFdpdGhQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwU3VicHJvb2YiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZFdoZW5EZWNsYXJlZCIsImNvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsIlN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJwcmVtaXNlU3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiY29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uU3RhdGVtZW50Tm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwibmFtZSIsImRvbSIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFB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