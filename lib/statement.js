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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuL3VuaWZpZXIvbWV0YUxldmVsXCI7XG5pbXBvcnQgc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvc3RhdGVtZW50QXNDb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcbmltcG9ydCB7IHN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovL3N0YXRlbWVudFwiKSxcbiAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3RhdGVtZW50Ly92YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vbWV0YXZhcmlhYmxlXCIpO1xuXG5jbGFzcyBTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2Vucykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBub2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFyaWFibGVDb250YWluZWQodmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgSXMgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudFZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICB2YXJpYWJsZUNvbnRhaW5lZCA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50VmFyaWFibGVOb2RlKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGUubWF0Y2goc3RhdGVtZW50VmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQ29udGFpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVDb250YWluZWQobWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQ29udGFpbmVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYElzIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgY29udGFpbmVkIGluIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlQ29udGFpbmVkID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXMuc29tZSgoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVDb250YWluZWQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRBID0gdGhpcywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEFTdHJpbmcgPSBzdGF0ZW1lbnRBLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudEJTdHJpbmcgPSBzdGF0ZW1lbnRCLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0Qi50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudEJTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50QVN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QU5vZGUgPSBzdGF0ZW1lbnRBLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTm9kZSA9IHN0YXRlbWVudEIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVBID0gc3RhdGVtZW50QU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Qk5vZGU7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0QSA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0QW5kVG9rZW5zKGxvY2FsQ29udGV4dEEsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkQXRNZXRhTGV2ZWw7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudEJTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3RhdGVtZW50QVN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbnMuc29tZSgodmVyaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWQgPSB2ZXJpZnlNaXhpbihzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXQgdG9wIGxldmVsLmAsIHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdGF0ZW1lbnRUb2tlbnMgPSBzdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gc3RhdGVtZW50VG9rZW5zLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gICAgICBzdGF0ZW1lbnQgPSBuZXcgU3RhdGVtZW50KHN0cmluZywgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxvY2FsQ29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxvY2FsQ29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3RhdGVtZW50LnByb3RvdHlwZSwgdW5pZnlNaXhpbnMpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgU3RhdGVtZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50O1xuXG4iXSwibmFtZXMiOlsic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJTdGF0ZW1lbnQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImlzRXF1YWxUbyIsInN0YXRlbWVudCIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1ZhcmlhYmxlQ29udGFpbmVkIiwidmFyaWFibGUiLCJsb2NhbENvbnRleHQiLCJ2YXJpYWJsZUNvbnRhaW5lZCIsInZhcmlhYmxlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmFyaWFibGVOb2RlcyIsInNvbWUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlIiwiZGVidWciLCJpc01ldGF2YXJpYWJsZUNvbnRhaW5lZCIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUNvbnRhaW5lZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlcyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QVN0cmluZyIsInN0YXRlbWVudEJTdHJpbmciLCJzdGF0ZW1lbnRBTm9kZSIsInN0YXRlbWVudEJOb2RlIiwibm9kZUEiLCJub2RlQiIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHRBbmRUb2tlbnMiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidW5pZmllZCIsInVuaWZ5TWl4aW5zIiwidW5pZnlNaXhpbiIsInZlcmlmeU1peGlucyIsInZlcmlmeU1peGluIiwidmVyaWZ5QXRUb3BMZXZlbCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwic3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1UkE7OztlQUFBOzs7MkRBclJpQjs0REFDTzs2REFDQzs0REFDQTtnRUFDSTs0RUFDYTtxQkFFSjs2QkFDRztzQkFDK0U7b0JBR2pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZFLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQkFDL0JDLDhCQUE4QkMsSUFBQUEsaUJBQVUsRUFBQyx5QkFDekNDLGtDQUFrQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuRCxJQUFBLEFBQU1FLDBCQUFOO2FBQU1BLFVBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQUQ1Qkg7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUpaSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lB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