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
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/verify"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../verifier/combinator"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/statement"));
var _unification = require("../utilities/unification");
var _query = require("../utilities/query");
var _metaTypeNames = require("../metaTypeNames");
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
                var _this = this;
                var unifiedIndependently;
                var statementString = this.string; ///
                specificContext.trace("Unifying the '".concat(statementString, "' statement independently..."));
                unifiedIndependently = unifyIndependentlyMixins.some(function(resolveMixin) {
                    var statement = _this, unifiedIndependently = resolveMixin(statement, substitutions, generalContext, specificContext);
                    if (unifiedIndependently) {
                        return true;
                    }
                });
                if (unifiedIndependently) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement independently."));
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
                    var unifiedWithProofStep = _this.unifyWithProofStep(proofStep, context);
                    if (unifiedWithProofStep) {
                        return true;
                    }
                });
                return unifiedWithProofSteps;
            }
        },
        {
            key: "unifyWithProofStep",
            value: function unifyWithProofStep(proofStep, context) {
                var unifiedWithProofStep = false;
                var proofStepStatement = proofStep.getStatement();
                debugger;
                return unifiedWithProofStep;
            }
        },
        {
            key: "unify",
            value: function unify(assignments, stated, context) {
                var _this = this;
                var unified;
                unified = _unify.default.some(function(unifyMixin) {
                    var statement = _this, unified = unifyMixin(statement, assignments, stated, context);
                    if (unified) {
                        return true;
                    }
                });
                return unified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvdW5pZnlcIjtcbmltcG9ydCB2ZXJpZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5pbXBvcnQgU3RhdGVtZW50Tm9kZUFuZFRva2VucyBmcm9tIFwiLi4vbm9kZUFuZFRva2Vucy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3N0YXRlbWVudFwiKSxcbiAgICAgIHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL3Rlcm1cIiksXG4gICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vZnJhbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFRlcm1Ob2RlcyA9IHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudFRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnRUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChzdGF0ZW1lbnRUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzID0gc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudEZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnRGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHVuaWZ5SW5kZXBlbmRlbnRseU1peGlucy5zb21lKChyZXNvbHZlTWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHJlc29sdmVNaXhpbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlXaXRoUHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoUHJvb2ZTdGVwcztcblxuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIHVuaWZpZWRXaXRoUHJvb2ZTdGVwcyA9IHByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkV2l0aFByb29mU3RlcCA9IHRoaXMudW5pZnlXaXRoUHJvb2ZTdGVwKHByb29mU3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkV2l0aFByb29mU3RlcCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1bmlmaWVkV2l0aFByb29mU3RlcHM7XG4gIH1cblxuICB1bmlmeVdpdGhQcm9vZlN0ZXAocHJvb2ZTdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRXaXRoUHJvb2ZTdGVwID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBkZWJ1Z2dlclxuXG5cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aFByb29mU3RlcDtcbiAgfVxuXG4gIHVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSB1bmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlY2xhcmVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBjb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUFuZFRva2VucyA9IFN0YXRlbWVudE5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb29mU3RlcE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gY29uY2x1c2lvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBjb25zZXF1ZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShub2RlKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IGZpbGVDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50O1xufSJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50IiwiZXF1YWxUbyIsInN0YXRlbWVudFN0cmluZyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJjb250ZXh0IiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnRUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsIm1hdGNoIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50RnJhbWVOb2RlcyIsInN0YXRlbWVudEZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseU1peGlucyIsInJlc29sdmVNaXhpbiIsInVuaWZ5V2l0aFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwidW5pZmllZFdpdGhQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwIiwidW5pZmllZFdpdGhQcm9vZlN0ZXAiLCJ1bmlmeVdpdGhQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsInZlcmlmeSIsInZlcmlmaWVkIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwiY29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50Tm9kZUFuZFRva2VucyIsIlN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZnJvbVByZW1pc2VOb2RlIiwicHJlbWlzZU5vZGUiLCJzdGF0ZW1lbnRGcm9tTm9kZSIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJjb25jbHVzaW9uTm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnROb2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJkb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7Ozt5QkFuQitCOzJEQUVmOzREQUNROzZEQUNDO2lFQUNNO2dFQUNJOzJCQUdKO3FCQUNPOzZCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVBLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVSLElBQU1FLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQkFDL0JDLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDckNDLDJCQUEyQkQsSUFBQUEsaUJBQVUsRUFBQztJQUU1QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRERIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFNBQVM7Z0JBQ2pCLElBQUlDLFVBQVU7Z0JBRWQsSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNRSxrQkFBa0JGLFVBQVVKLFNBQVM7b0JBRTNDSyxVQUFXQyxvQkFBb0IsSUFBSSxD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