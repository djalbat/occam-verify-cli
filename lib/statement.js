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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/verify"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _resolve = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/resolve"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _statementAsCombinator = /*#__PURE__*/ _interop_require_default(require("./verifier/statementAsCombinator"));
var _query = require("./utilities/query");
var _metaTypeNames = require("./metaTypeNames");
var _tokens = require("./utilities/tokens");
var _node = require("./utilities/node");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/*//statement"), statementTermNodesQuery = (0, _query.nodesQuery)("/statement//term"), statementFrameNodesQuery = (0, _query.nodesQuery)("/statement//frame");
var Statement = /*#__PURE__*/ function() {
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
                var node = statement.getNode(), matches = this.node.match(node), equalTo = matches; ///
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
            key: "resolveIndependently",
            value: function resolveIndependently(substitutions, generalContext, specificContext) {
                var resolvedIndependently;
                var statement = this, statementString = this.string; ///
                specificContext.trace("Resolving the '".concat(statementString, "' statement independently..."));
                var resolved = _resolve.default.some(function(resolveMixin) {
                    var resolved = resolveMixin(statement, substitutions, generalContext, specificContext);
                    if (resolved) {
                        return true;
                    }
                });
                resolvedIndependently = resolved; ///
                if (resolvedIndependently) {
                    specificContext.debug("...resolved the '".concat(statementString, "' statement independently."));
                }
                return resolvedIndependently;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var generalStatement = this, specificStatement = statement, generalStatementString = generalStatement.getString(), specificStatementString = specificStatement.getString();
                specificContext.trace("Unifying the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement..."));
                var context = generalContext, localContext = _local.default.fromContextAndTokens(context, this.tokens);
                generalContext = localContext; ///
                var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
                statementUnified = unifiedAtMetaLevel; ///
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(specificStatementString, "' statement with the '").concat(generalStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var statement = this, statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement..."));
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var verified = verifyMixin(statement, assignments, stated, context);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (!verified) {
                    var unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(statement, assignments, stated, context);
                        if (unified) {
                            return true;
                        }
                    });
                    verified = unified; ///
                }
                if (verified) {
                    context.debug("...verified the '".concat(statementString, "' statement."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedAtTopLevel;
                var statementNode = this.node, statementString = this.string; ///
                fileContext.trace("Verifying the '".concat(statementString, "' statement when declared..."));
                verifiedAtTopLevel = _statementAsCombinator.default.verifyStatement(statementNode, fileContext);
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(statementString, "' statement when declared."));
                }
                return verifiedAtTopLevel;
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromStatementString)(statementString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), statementTokens = (0, _tokens.statementTokensFromUnqualifiedStatementTokens)(unqualifiedStatementTokens), statementNode = (0, _node.statementNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), node = statementNode, tokens = statementTokens, statement = new Statement(string, node, tokens);
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
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var statementNode = statementNodeQuery(definedAssertionNode), node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
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
}();
Object.assign(Statement.prototype, _unify.default);
Object.assign(_shim.default, {
    Statement: Statement
});
var _default = Statement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCByZXNvbHZlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvcmVzb2x2ZVwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8vc3RhdGVtZW50XCIpLFxuICAgICAgc3RhdGVtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdGVybVwiKSxcbiAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly9mcmFtZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFRlcm1Ob2RlcyA9IHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudFRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnRUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChzdGF0ZW1lbnRUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzID0gc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudEZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnRGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZU1peGlucy5zb21lKChyZXNvbHZlTWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZU1peGluKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHJlc29sdmVkOyAvLy9cblxuICAgIGlmIChyZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWRBdE1ldGFMZXZlbDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdGF0ZW1lbnRUb2tlbnMgPSBzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3RhdGVtZW50LnByb3RvdHlwZSwgdW5pZnlNaXhpbnMpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG4iXSwibmFtZXMiOlsic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50VGVybU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5IiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwiaXNUZXJtQ29udGFpbmVkIiwidGVybSIsImNvbnRleHQiLCJ0ZXJtQ29udGFpbmVkIiwidGVybVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidGVybU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VGVybU5vZGVzIiwic29tZSIsInN0YXRlbWVudFRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwiZGVidWciLCJpc0ZyYW1lQ29udGFpbmVkIiwiZnJhbWUiLCJmcmFtZUNvbnRhaW5lZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVOb2RlIiwic3RhdGVtZW50RnJhbWVOb2RlcyIsInN0YXRlbWVudEZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJyZXNvbHZlSW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInJlc29sdmVkSW5kZXBlbmRlbnRseSIsInJlc29sdmVkIiwicmVzb2x2ZU1peGlucyIsInJlc29sdmVNaXhpbiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbVRBOzs7ZUFBQTs7OzJEQWpUaUI7NERBQ087NkRBQ0M7NERBQ0E7OERBQ0M7Z0VBQ0c7NEVBQ2E7cUJBRUo7NkJBQ0c7c0JBQytFO29CQUdqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQy9CQywwQkFBMEJDLElBQUFBLGlCQUFVLEVBQUMscUJBQ3JDQywyQkFBMkJELElBQUFBLGlCQUFVLEVBQUM7QUFFNUMsSUFBQSxBQUFNRSwwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FENUJIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKWkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTO2dCQUNqQixJQUFNTixPQUFPTSxVQUFVSCxPQUFPLElBQ3hCSSxVQUFVLElBQUksQ0FBQ1AsSUFBSSxD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