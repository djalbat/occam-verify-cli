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
var statementNodeQuery = (0, _query.nodeQuery)("/*//statement"), statementVariableNodesQuery = (0, _query.nodesQuery)("/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/statement//metavariable");
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
            key: "isVariableContained",
            value: function isVariableContained(variable, localContext) {
                var variableContained;
                var variableString = variable.getString(), statementString = this.string; ///
                localContext.trace("Is the '".concat(variableString, "' variable contained in the '").concat(statementString, "' statement..."));
                var variableNode = variable.getNode(), statementNode = this.node, statementVariableNodes = statementVariableNodesQuery(statementNode);
                variableContained = statementVariableNodes.some(function(statementVariableNode) {
                    var variableNodeMatchesStatementVariableNode = variableNode.match(statementVariableNode);
                    if (variableNodeMatchesStatementVariableNode) {
                        return true;
                    }
                });
                if (variableContained) {
                    localContext.debug("...the '".concat(variableString, "' variable is contained in the '").concat(statementString, "' statement."));
                }
                return variableContained;
            }
        },
        {
            key: "isMetavariableContained",
            value: function isMetavariableContained(metavariable, localContext) {
                var metavariableContained;
                var metavariableString = metavariable.getString(), statementString = this.string; ///
                localContext.trace("Is the '".concat(metavariableString, "' metavariable contained in the '").concat(statementString, "' statement..."));
                var metavariableNode = metavariable.getNode(), statementNode = this.node, statementMetavariableNodes = statementMetavariableNodesQuery(statementNode);
                metavariableContained = statementMetavariableNodes.some(function(statementMetavariableNode) {
                    var metavariableNodeMatchesStatementMetavariableNode = metavariableNode.match(statementMetavariableNode);
                    if (metavariableNodeMatchesStatementMetavariableNode) {
                        return true;
                    }
                });
                if (metavariableContained) {
                    localContext.debug("...the '".concat(metavariableString, "' metavariable is contained in the '").concat(statementString, "' statement."));
                }
                return metavariableContained;
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
            value: function resolveIndependently(substitutions, localContextA, localContextB) {
                var resolvedIndependently;
                var statement = this, statementString = this.string; ///
                localContextB.trace("Resolving the '".concat(statementString, "' statement independently..."));
                var context = localContextA; ///
                localContextA = _local.default.fromContextAndTokens(context, this.tokens);
                var resolved = _resolve.default.some(function(resolveMixin) {
                    var resolved = resolveMixin(statement, substitutions, localContextA, localContextB);
                    if (resolved) {
                        return true;
                    }
                });
                resolvedIndependently = resolved; ///
                if (resolvedIndependently) {
                    localContextB.debug("...resolved the '".concat(statementString, "' statement independently."));
                }
                return resolvedIndependently;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContextA, localContextB) {
                var statementUnified;
                var statementA = this, statementB = statement, statementAString = statementA.getString(), statementBString = statementB.getString();
                localContextB.trace("Unifying the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement..."));
                var statementANode = statementA.getNode(), statementBNode = statementB.getNode(), context = localContextA, nodeA = statementANode, nodeB = statementBNode; ///
                localContextA = _local.default.fromContextAndTokens(context, this.tokens);
                var unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unifiedAtMetaLevel; ///
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var statement = this, statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement..."));
                if (!verified) {
                    var unified = _unify.default.some(function(unifyMixin) {
                        var unified = unifyMixin(statement, assignments, stated, localContext);
                        if (unified) {
                            return true;
                        }
                    });
                    verified = unified; ///
                }
                if (!verified) {
                    verified = _verify.default.some(function(verifyMixin) {
                        var verified = verifyMixin(statement, assignments, stated, localContext);
                        if (verified) {
                            return true;
                        }
                    });
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(statementString, "' statement."));
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
            value: function verifyGivenMetaType(metaType, assignments, stated, localContext) {
                var verifiedGivenMetaType = false;
                var metaTypeString = metaType.getString(), statementString = this.string; ///
                localContext.trace("Verifying the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated, localContext);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    localContext.debug("...verified the '".concat(statementString, "' statement given the '").concat(metaTypeString, "' meta-type."));
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
            value: function fromStatementNode(statementNode, localContext) {
                var statement = null;
                if (statementNode !== null) {
                    var node = statementNode, tokens = localContext.nodeAsTokens(node), string = localContext.tokensAsString(tokens);
                    statement = new Statement(string, node, tokens);
                }
                return statement;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var statementNode = statementNodeQuery(definedAssertionNode), node = statementNode, tokens = localContext.nodeAsTokens(node), string = localContext.tokensAsString(tokens), statement = new Statement(string, node, tokens);
                return statement;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var statementNode = statementNodeQuery(containedAssertionNode), node = statementNode, tokens = localContext.nodeAsTokens(node), string = localContext.tokensAsString(tokens), statement = new Statement(string, node, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCByZXNvbHZlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvcmVzb2x2ZVwiO1xuaW1wb3J0IG1ldGFMZXZlbFVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhTGV2ZWxcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi8vc3RhdGVtZW50XCIpLFxuICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL3ZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly9tZXRhdmFyaWFibGVcIik7XG5cbmNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNWYXJpYWJsZUNvbnRhaW5lZCh2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHZhcmlhYmxlQ29udGFpbmVkID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVDb250YWluZWQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZUNvbnRhaW5lZChtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVDb250YWluZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgSXMgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBjb250YWluZWQgaW4gdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBtZXRhdmFyaWFibGVDb250YWluZWQgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUNvbnRhaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICByZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHJlc29sdmVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0QTsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNaXhpbnMuc29tZSgocmVzb2x2ZU1peGluKSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVNaXhpbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXNvbHZlZEluZGVwZW5kZW50bHkgPSByZXNvbHZlZDsgLy8vXG5cbiAgICBpZiAocmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBU3RyaW5nID0gc3RhdGVtZW50QS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCU3RyaW5nID0gc3RhdGVtZW50Qi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dEIudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRCU3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudEFTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEFOb2RlID0gc3RhdGVtZW50QS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5vZGUgPSBzdGF0ZW1lbnRCLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0QSwgIC8vL1xuICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50QU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Qk5vZGU7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZmllZEF0TWV0YUxldmVsOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHRCLmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRCU3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudEFTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0cmluZywgLy8vXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCBsZXhlciksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBwYXJzZXIpLFxuICAgICAgICAgIHN0YXRlbWVudFRva2VucyA9IHN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRUb2tlbnMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7XG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdGF0ZW1lbnQucHJvdG90eXBlLCB1bmlmeU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFyaWFibGVDb250YWluZWQiLCJ2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlQ29udGFpbmVkIiwidmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwic29tZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsImlzTWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJyZXNvbHZlZEluZGVwZW5kZW50bHkiLCJjb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJyZXNvbHZlZCIsInJlc29sdmVNaXhpbnMiLCJyZXNvbHZlTWl4aW4iLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFTdHJpbmciLCJzdGF0ZW1lbnRCU3RyaW5nIiwic3RhdGVtZW50QU5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNUQTs7O2VBQUE7OzsyREFwVGlCOzREQUNPOzZEQUNDOzREQUNBOzhEQUNDO2dFQUNHOzRFQUNhO3FCQUVKOzZCQUNHO3NCQUMrRTtvQkFHakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUMvQkMsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDLHlCQUN6Q0Msa0NBQWtDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5ELElBQUEsQUFBTUUsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRDVCSDtRQUVGLElBQUksQ0FBQ0Ms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