"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    stripBracketsFromStatement: function() {
        return stripBracketsFromStatement;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _unify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/unify"));
var _verify = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/verify"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _resolve = /*#__PURE__*/ _interop_require_default(require("./mixins/statement/resolve"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("./verifier/combinator"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./nodeAndTokens/statement"));
var _query = require("./utilities/query");
var _metaTypeNames = require("./metaTypeNames");
var _brackets = require("./utilities/brackets");
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
                var _this = this;
                var resolvedIndependently;
                var statementString = this.string; ///
                specificContext.trace("Resolving the '".concat(statementString, "' statement independently..."));
                var context = generalContext, localContext = _local.default.fromContextAndTokens(context, this.tokens);
                generalContext = localContext; ///
                var resolved = _resolve.default.some(function(resolveMixin) {
                    var statement = _this, resolved = resolveMixin(statement, substitutions, generalContext, specificContext);
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
                var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalStatementTokens = generalStatement.getTokens(), specificStatementTokens = specificStatement.getTokens();
                var tokens, context, localContext;
                tokens = generalStatementTokens; ///
                context = generalContext; ///
                localContext = _local.default.fromContextAndTokens(context, tokens);
                generalContext = localContext; ///
                tokens = specificStatementTokens; ///
                context = specificContext; ///
                localContext = _local.default.fromContextAndTokens(context, tokens);
                specificContext = localContext; ///
                var generalNode = generalStatementNode, specificNode = specificStatementNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
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
                var _this = this;
                var verified = false;
                var statementString = this.string; ///
                context.trace("Verifying the '".concat(statementString, "' statement..."));
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var statement = _this, verified = verifyMixin(statement, assignments, stated, context);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (!verified) {
                    var unified = _unify.default.some(function(unifyMixin) {
                        var statement = _this, unified = unifyMixin(statement, assignments, stated, context);
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
                verifiedAtTopLevel = _combinator.default.verifyStatement(statementNode, fileContext);
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
                var string = json.string, context = fileContext, statementNodeAndTokens = _statement.default.fromString(string, context), node = statementNodeAndTokens.getNode(), tokens = statementNodeAndTokens.getTokens(), statement = new Statement(string, node, tokens);
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
function stripBracketsFromStatement(statement, context) {
    var statementNode = statement.getNode(), bracketedStatementChildNode = (0, _brackets.bracketedStatementChildNodeFromStatementNode)(statementNode);
    if (bracketedStatementChildNode !== null) {
        var statementTokens = statement.getTokens(), tokens = statementTokens, localContext = _local.default.fromContextAndTokens(context, tokens);
        context = localContext; ///
        var Statement = _shim.default.Statement, statementNode1 = bracketedStatementChildNode; ///
        statement = Statement.fromStatementNode(statementNode1, context);
    }
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCByZXNvbHZlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvcmVzb2x2ZVwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBjb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuaW1wb3J0IFN0YXRlbWVudE5vZGVBbmRUb2tlbnMgZnJvbSBcIi4vbm9kZUFuZFRva2Vucy9zdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8vc3RhdGVtZW50XCIpLFxuICAgICAgc3RhdGVtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdGVybVwiKSxcbiAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly9mcmFtZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFRlcm1Ob2RlcyA9IHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudFRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnRUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChzdGF0ZW1lbnRUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzID0gc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudEZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnRGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRoaXMudG9rZW5zKTtcblxuICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNaXhpbnMuc29tZSgocmVzb2x2ZU1peGluKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZU1peGluKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHJlc29sdmVkOyAvLy9cblxuICAgIGlmIChyZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdGF0ZW1lbnRTdHJpbmcgPSBnZW5lcmFsU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50U3RyaW5nID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFRva2VucyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnRUb2tlbnMgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXRUb2tlbnMoKTtcblxuICAgIGxldCB0b2tlbnMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGxvY2FsQ29udGV4dDtcblxuICAgIHRva2VucyA9IGdlbmVyYWxTdGF0ZW1lbnRUb2tlbnM7ICAvLy9cblxuICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKTtcblxuICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICB0b2tlbnMgPSBzcGVjaWZpY1N0YXRlbWVudFRva2VuczsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWRBdE1ldGFMZXZlbDsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtnZW5lcmFsU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHVuaWZpZWQgPSB1bmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBjb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudE5vZGVBbmRUb2tlbnMgPSBTdGF0ZW1lbnROb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50Tm9kZUFuZFRva2Vucy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3RhdGVtZW50LnByb3RvdHlwZSwgdW5pZnlNaXhpbnMpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50LmdldFRva2VucygpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFRva2VucywgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGU7ICAvLy9cblxuICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnRUZXJtTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzUXVlcnkiLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1Rlcm1Db250YWluZWQiLCJ0ZXJtIiwiY29udGV4dCIsInRlcm1Db250YWluZWQiLCJ0ZXJtU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJ0ZXJtTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRUZXJtTm9kZXMiLCJzb21lIiwic3RhdGVtZW50VGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsImlzRnJhbWVDb250YWluZWQiLCJmcmFtZSIsImZyYW1lQ29udGFpbmVkIiwiZnJhbWVTdHJpbmciLCJmcmFtZU5vZGUiLCJzdGF0ZW1lbnRGcmFtZU5vZGVzIiwic3RhdGVtZW50RnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInJlc29sdmVJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJyZXNvbHZlZCIsInJlc29sdmVNaXhpbnMiLCJyZXNvbHZlTWl4aW4iLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsImdlbmVyYWxTdGF0ZW1lbnRUb2tlbnMiLCJzcGVjaWZpY1N0YXRlbWVudFRva2VucyIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwiY29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50Tm9kZUFuZFRva2VucyIsIlN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic2hpbSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFtVUEsT0FBeUI7ZUFBekI7O0lBRWdCQSwwQkFBMEI7ZUFBMUJBOzs7MkRBblVDOzREQUNPOzZEQUNDOzREQUNBOzhEQUNDO2dFQUNHO2lFQUNFO2dFQUNJO3FCQUVHOzZCQUNHO3dCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQy9CQywwQkFBMEJDLElBQUFBLGlCQUFVLEVBQUMscUJBQ3JDQywyQkFBMkJELElBQUFBLGlCQUFVLEVBQUM7QUFFNUMsSUFBQSxBQUFNRSwwQkFBTjthQUFNQSxVQUNRQyxNQUFN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