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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var statementNodeMatches = this.node.match(statementNode);
                return statementNodeMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContextA, localContextB) {
                var statementUnified;
                var statementA = this, statementB = statement, statementAString = statementA.getString(), statementBString = statementB.getString();
                localContextB.trace("Unifying the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement..."));
                var statementANode = statementA.getNode(), statementBNode = statementB.getNode(), nodeA = statementANode, nodeB = statementBNode; ///
                localContextA = _local.default.fromLocalContextAndTokens(localContextA, this.tokens);
                var unifiedAtMetaLevel = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                statementUnified = unifiedAtMetaLevel; ///
                localContextB.debug("...unified the '".concat(statementBString, "' statement with the '").concat(statementAString, "' statement."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvc3RhdGVtZW50QXNDb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovL3N0YXRlbWVudFwiKSxcbiAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFyaWFibGVDb250YWluZWQodmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgSXMgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB2YXJpYWJsZUNvbnRhaW5lZCA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVDb250YWluZWQobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQ29udGFpbmVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYElzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlQ29udGFpbmVkID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVDb250YWluZWQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEFTdHJpbmcgPSBzdGF0ZW1lbnRBLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudEJTdHJpbmcgPSBzdGF0ZW1lbnRCLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudEJTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50QVN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50QU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Qk5vZGU7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0QW5kVG9rZW5zKGxvY2FsQ29udGV4dEEsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0Qi5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50QlN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdGF0ZW1lbnRBU3RyaW5nfScgc3RhdGVtZW50LmApO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGF0IHRvcCBsZXZlbC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlciksXG4gICAgICAgICAgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHN0YXRlbWVudFRva2VucywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGxvY2FsQ29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTtcblxuICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFN0YXRlbWVudC5wcm90b3R5cGUsIHVuaWZ5TWl4aW5zKTtcblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFN0YXRlbWVudFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudDtcblxuIl0sIm5hbWVzIjpbInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwiaXNWYXJpYWJsZUNvbnRhaW5lZCIsInZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGVDb250YWluZWQiLCJ2YXJpYWJsZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXMiLCJzb21lIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsImRlYnVnIiwiaXNNZXRhdmFyaWFibGVDb250YWluZWQiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVDb250YWluZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFTdHJpbmciLCJzdGF0ZW1lbnRCU3RyaW5nIiwic3RhdGVtZW50QU5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJMb2NhbENvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0QW5kVG9rZW5zIiwidW5pZmllZEF0TWV0YUxldmVsIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeUF0VG9wTGV2ZWwiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcVJBOzs7ZUFBQTs7OzJEQW5SaUI7NERBQ087NkRBQ0M7NERBQ0E7Z0VBQ0k7NEVBQ2E7cUJBRUo7NkJBQ0c7c0JBQytFO29CQUdqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQy9CQyw4QkFBOEJDLElBQUFBLGlCQUFVLEVBQUMseUJBQ3pDQyxrQ0FBa0NELElBQUFBLGlCQUFVLEVBQUM7QUFFbkQsSUFBQSxBQUFNRSwwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FENUJIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFKWkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxP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