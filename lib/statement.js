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
var _statement = /*#__PURE__*/ _interop_require_default(require("./nodeAndTokens/statement"));
var _statementAsCombinator = /*#__PURE__*/ _interop_require_default(require("./verifier/statementAsCombinator"));
var _query = require("./utilities/query");
var _metaTypeNames = require("./metaTypeNames");
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
                var context = generalContext, localContext = _local.default.fromContextAndTokens(context, this.tokens);
                generalContext = localContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCByZXNvbHZlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvcmVzb2x2ZVwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBTdGF0ZW1lbnROb2RlQW5kVG9rZW5zIGZyb20gXCIuL25vZGVBbmRUb2tlbnMvc3RhdGVtZW50XCI7XG5pbXBvcnQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvc3RhdGVtZW50QXNDb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8vc3RhdGVtZW50XCIpLFxuICAgICAgc3RhdGVtZW50VGVybU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdGVybVwiKSxcbiAgICAgIHN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly9mcmFtZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFRlcm1Ob2RlcyA9IHN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudFRlcm1Ob2Rlcy5zb21lKChzdGF0ZW1lbnRUZXJtTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5tYXRjaChzdGF0ZW1lbnRUZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybUNvbnRhaW5lZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtQ29udGFpbmVkO1xuICB9XG5cbiAgaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYElzIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRGcmFtZU5vZGVzID0gc3RhdGVtZW50RnJhbWVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnRGcmFtZU5vZGVzLnNvbWUoKHN0YXRlbWVudEZyYW1lTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5tYXRjaChzdGF0ZW1lbnRGcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZnJhbWVDb250YWluZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRoaXMudG9rZW5zKTtcblxuICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNaXhpbnMuc29tZSgocmVzb2x2ZU1peGluKSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNaXhpbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXNvbHZlZEluZGVwZW5kZW50bHkgPSByZXNvbHZlZDsgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50U3RyaW5nID0gZ2VuZXJhbFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudFN0cmluZyA9IHNwZWNpZmljU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksICAvLy9cbiAgICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsXG4gICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlQW5kVG9rZW5zID0gU3RhdGVtZW50Tm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGVBbmRUb2tlbnMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudE5vZGVBbmRUb2tlbnMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFN0YXRlbWVudC5wcm90b3R5cGUsIHVuaWZ5TWl4aW5zKTtcblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudDtcblxuIl0sIm5hbWVzIjpbInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudFRlcm1Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudEZyYW1lTm9kZXNRdWVyeSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVGVybUNvbnRhaW5lZCIsInRlcm0iLCJjb250ZXh0IiwidGVybUNvbnRhaW5lZCIsInRlcm1TdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInRlcm1Ob2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFRlcm1Ob2RlcyIsInNvbWUiLCJzdGF0ZW1lbnRUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsImRlYnVnIiwiaXNGcmFtZUNvbnRhaW5lZCIsImZyYW1lIiwiZnJhbWVDb250YWluZWQiLCJmcmFtZVN0cmluZyIsImZyYW1lTm9kZSIsInN0YXRlbWVudEZyYW1lTm9kZXMiLCJzdGF0ZW1lbnRGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZXNvbHZlZEluZGVwZW5kZW50bHkiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsInJlc29sdmVkIiwicmVzb2x2ZU1peGlucyIsInJlc29sdmVNaXhpbiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY1N0YXRlbWVudFN0cmluZyIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJ1bmlmaWVkIiwidW5pZnlNaXhpbnMiLCJ1bmlmeU1peGluIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJTdGF0ZW1lbnROb2RlQW5kVG9rZW5zIiwiZnJvbVN0cmluZyIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStTQTs7O2VBQUE7OzsyREE3U2lCOzREQUNPOzZEQUNDOzREQUNBOzhEQUNDO2dFQUNHO2dFQUNNOzRFQUNPO3FCQUVKOzZCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQkFDL0JDLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyxxQkFDckNDLDJCQUEyQkQsSUFBQUEsaUJBQVUsRUFBQztBQUU1QyxJQUFBLEFBQU1FLDBCQUFOO2FBQU1BLFVBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQUQ1Qkg7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpaSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFNBQVM7Z0JBQ2pCLElBQU1OLE9BQU9NLFVBQVVILE9BQU8sSUFDeEJJLFVBQVUsSUFBSSxDQUFDUCxJQUFJLENBQUNRLEtBQUssQ0FBQ1IsT0FDMUJTLFVBQVVGLFNBQVUsR0FBRztnQkFFN0IsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLElBQUks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