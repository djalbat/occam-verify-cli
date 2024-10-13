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
var _statement = /*#__PURE__*/ _interop_require_default(require("./substitution/statement"));
var _statementAsCombinator = /*#__PURE__*/ _interop_require_default(require("./verifier/statementAsCombinator"));
var _query = require("./utilities/query");
var _metaTypeNames = require("./metaTypeNames");
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
var statementVariableNodesQuery = (0, _query.nodesQuery)("/statement//variable"), statementMetavariableNodesQuery = (0, _query.nodesQuery)("/statement//metavariable");
var Statement = /*#__PURE__*/ function() {
    function Statement(string, node, substitution) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
        this.substitution = substitution;
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
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
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
                localContext.trace("The '".concat(variableString, "' variable is contained in hte '").concat(statementString, "' statement..."));
                var variableNode = variable.getNode(), statementNode = this.node, statementVariableNodes = statementVariableNodesQuery(statementNode);
                variableContained = statementVariableNodes.some(function(statementVariableNode) {
                    var variableNodeMatchesStatementVariableNode = variableNode.match(statementVariableNode);
                    if (variableNodeMatchesStatementVariableNode) {
                        return true;
                    }
                });
                if (variableContained) {
                    localContext.debug("...the '".concat(variableString, "' variable is contained in hte '").concat(statementString, "' statement."));
                }
                return variableContained;
            }
        },
        {
            key: "isMetavariableContained",
            value: function isMetavariableContained(metavariable, localContext) {
                var metavariableContained;
                var metavariableString = metavariable.getString(), statementString = this.string; ///
                localContext.trace("The '".concat(metavariableString, "' metavariable is contained in hte '").concat(statementString, "' statement..."));
                var metavariableNode = metavariable.getNode(), statementNode = this.node, statementMetavariableNodes = statementMetavariableNodesQuery(statementNode);
                metavariableContained = statementMetavariableNodes.some(function(statementMetavariableNode) {
                    var metavariableNodeMatchesStatementMetavariableNode = metavariableNode.match(statementMetavariableNode);
                    if (metavariableNodeMatchesStatementMetavariableNode) {
                        return true;
                    }
                });
                if (metavariableContained) {
                    localContext.debug("...the '".concat(metavariableString, "' metavariable is contained in hte '").concat(statementString, "' statement."));
                }
                return metavariableContained;
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
                var substitutionJSON = this.substitution !== null ? this.substitution.toJSON() : null, substitution = substitutionJSON, string = this.string, json = {
                    substitution: substitution,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, statementString = string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), node = statementNode; ///
                var substitution = json.substitution;
                json = substitution; ///
                var statementSubstitution = _statement.default.fromJSON(json, fileContext);
                substitution = statementSubstitution; ///
                var statement = new Statement(string, node, substitution);
                return statement;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var statement = null;
                if (statementNode !== null) {
                    var node = statementNode, string = localContext.nodeAsString(node), statementSubstitution = _statement.default.fromStatementNode(statementNode, localContext), substitution = statementSubstitution; ///
                    statement = new Statement(string, node, substitution);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdGF0ZW1lbnQvL21ldGF2YXJpYWJsZVwiKTtcblxuY2xhc3MgU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBpc0VxdWFsVG8oc3RhdGVtZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1ZhcmlhYmxlQ29udGFpbmVkKHZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmFyaWFibGVDb250YWluZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiBodGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgdmFyaWFibGVDb250YWluZWQgPSBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSkgPT4geyAgLy8vXG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlLm1hdGNoKHN0YXRlbWVudFZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50VmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiBodGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUNvbnRhaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlQ29udGFpbmVkKG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUNvbnRhaW5lZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIGNvbnRhaW5lZCBpbiBodGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZUNvbnRhaW5lZCA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzLnNvbWUoKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBjb250YWluZWQgaW4gaHRlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQ29udGFpbmVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIXZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHZlcmlmeU1peGlucy5zb21lKCh2ZXJpZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHZlcmlmeU1peGluKHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhdCB0b3AgbGV2ZWwuYCwgc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzdGl0dXRpb24udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgIGxldCB7IHN1YnN0aXR1dGlvbiB9ID0ganNvbjtcblxuICAgIGpzb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdGF0ZW1lbnQucHJvdG90eXBlLCB1bmlmeU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJzdWJzdGl0dXRpb24iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFyaWFibGVDb250YWluZWQiLCJ2YXJpYWJsZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlQ29udGFpbmVkIiwidmFyaWFibGVTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzIiwic29tZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXNTdGF0ZW1lbnRWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsImlzTWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQ29udGFpbmVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVzIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJ1bmlmaWVkIiwidW5pZnlNaXhpbnMiLCJ1bmlmeU1peGluIiwidmVyaWZ5TWl4aW5zIiwidmVyaWZ5TWl4aW4iLCJ2ZXJpZnlBdFRvcExldmVsIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInRvSlNPTiIsInN1YnN0aXR1dGlvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNPQTs7O2VBQUE7OzsyREFwT2lCOzREQUNPOzZEQUNDO2dFQUNTOzRFQUNRO3FCQUVmOzZCQUNjO29CQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1BLDhCQUE4QkMsSUFBQUEsaUJBQVUsRUFBQyx5QkFDekNDLGtDQUFrQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuRCxJQUFBLEFBQU1FLDBCQUFOO2FBQU1BLFVBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZO2dDQURsQ0g7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUpsQkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTO2dCQUNqQixJQUFNTixPQUFPTSxVQUFVSCxPQUFPLElBQ3hCSSxVQUFVLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxLQUFLLENBQUNSLE9BQzFCUyxVQUFVRixTQUFVLEdBQUc7Z0JBRTdCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxRQUFRLEVBQUVDLFlBQVk7Z0JBQ3hDLElBQUlD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