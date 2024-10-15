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
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, fileContext, localContext) {
                var statementUnified;
                var statementA = this, statementB = statement, statementAString = statementA.getString(), statementBString = statementB.getString();
                localContext.trace("Unifying the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement..."));
                var statementANode = statementA.getNode(), statementBNode = statementB.getNode(), nodeA = statementANode, nodeB = statementBNode, fileContextA = fileContext, localContextA = _local.default.fromFileContextAndTokens(fileContextA, this.tokens), localContextB = localContext, unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unifiedAtMetaLevel; ///
                localContext.debug("...unified the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement."));
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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel;
                var statementNode = this.node, statementString = this.string; ///
                fileContext.trace("Verifying the '".concat(statementString, "' statement at top level..."));
                verifiedAtTopLevel = _statementAsCombinator.default.verifyStatement(statementNode, fileContext);
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(statementString, "' statement at top level."), statementNode);
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
                var string = json.string, statementString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromStatementString)(statementString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), statementTokens = (0, _tokens.statementTokensFromUnqualifiedStatementTokens)(unqualifiedStatementTokens), statementNode = (0, _node.statementNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), node = statementNode, tokens = statementTokens, statement = new Statement(string, node, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvc3RhdGVtZW50QXNDb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovL3N0YXRlbWVudFwiKSxcbiAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFyaWFibGVDb250YWluZWQodmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgSXMgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB2YXJpYWJsZUNvbnRhaW5lZCA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVDb250YWluZWQobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQ29udGFpbmVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYElzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlQ29udGFpbmVkID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVDb250YWluZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudEEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QVN0cmluZyA9IHN0YXRlbWVudEEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50QlN0cmluZyA9IHN0YXRlbWVudEIuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRCU3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N0YXRlbWVudEFTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudEFOb2RlID0gc3RhdGVtZW50QS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5vZGUgPSBzdGF0ZW1lbnRCLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlQSA9IHN0YXRlbWVudEFOb2RlLCAvLy9cbiAgICAgICAgICBub2RlQiA9IHN0YXRlbWVudEJOb2RlLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHRBbmRUb2tlbnMoZmlsZUNvbnRleHRBLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWRBdE1ldGFMZXZlbDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudEJTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50QVN0cmluZ30nIHN0YXRlbWVudC5gKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhdCB0b3AgbGV2ZWwuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcgPSB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nKHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLCBsZXhlciksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBwYXJzZXIpLFxuICAgICAgICAgIHN0YXRlbWVudFRva2VucyA9IHN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBzdGF0ZW1lbnRUb2tlbnMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7XG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdGF0ZW1lbnQucHJvdG90eXBlLCB1bmlmeU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFyaWFibGVDb250YWluZWQiLCJ2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlQ29udGFpbmVkIiwidmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwic29tZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsImlzTWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QVN0cmluZyIsInN0YXRlbWVudEJTdHJpbmciLCJzdGF0ZW1lbnRBTm9kZSIsInN0YXRlbWVudEJOb2RlIiwibm9kZUEiLCJub2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEEiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHRBbmRUb2tlbnMiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStRQTs7O2VBQUE7OzsyREE3UWlCOzREQUNPOzZEQUNDOzREQUNBO2dFQUNJOzRFQUNhO3FCQUVKOzZCQUNHO3NCQUMrRTtvQkFHakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUMvQkMsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDLHlCQUN6Q0Msa0NBQWtDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5ELElBQUEsQUFBTUUsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRDVCSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSlpIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxL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