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
var statementVariableNodesQuery = (0, _query.nodesQuery)("/statement//variable");
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
                localContext.trace("Verifying the '".concat(statementString, "' given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated, localContext);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    localContext.debug("...verified the '".concat(statementString, "' given the '").concat(metaTypeString, "' meta-type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVtZW50L3VuaWZ5XCI7XG5pbXBvcnQgdmVyaWZ5TWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZW1lbnQvdmVyaWZ5XCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBzdGF0ZW1lbnRBc0NvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9zdGF0ZW1lbnRBc0NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3N0YXRlbWVudC8vdmFyaWFibGVcIik7XG5cbmNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN0YXRlbWVudCkge1xuICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IG1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNWYXJpYWJsZUNvbnRhaW5lZCh2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlQ29udGFpbmVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBjb250YWluZWQgaW4gaHRlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgc3RhdGVtZW50VmFyaWFibGVOb2RlcyA9IHN0YXRlbWVudFZhcmlhYmxlTm9kZXNRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHZhcmlhYmxlQ29udGFpbmVkID0gc3RhdGVtZW50VmFyaWFibGVOb2Rlcy5zb21lKChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpID0+IHsgIC8vL1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZS5tYXRjaChzdGF0ZW1lbnRWYXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBjb250YWluZWQgaW4gaHRlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVDb250YWluZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKCF2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgICAgY29uc3QgdW5pZmllZCA9IHVuaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghdmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdmVyaWZ5TWl4aW4oc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgdmVyaWZpZWRBdFRvcExldmVsID0gc3RhdGVtZW50QXNDb21iaW5hdG9yVmVyaWZpZXIudmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGF0IHRvcCBsZXZlbC5gLCBzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSAodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzdGl0dXRpb24udG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IHN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgIGxldCB7IHN1YnN0aXR1dGlvbiB9ID0ganNvbjtcblxuICAgIGpzb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCBzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTdGF0ZW1lbnQucHJvdG90eXBlLCB1bmlmeU1peGlucyk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdGF0ZW1lbnRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnQ7XG5cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRWYXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiU3RhdGVtZW50Iiwic3RyaW5nIiwibm9kZSIsInN1YnN0aXR1dGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdGF0ZW1lbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwiaXNWYXJpYWJsZUNvbnRhaW5lZCIsInZhcmlhYmxlIiwibG9jYWxDb250ZXh0IiwidmFyaWFibGVDb250YWluZWQiLCJ2YXJpYWJsZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZhcmlhYmxlTm9kZXMiLCJzb21lIiwic3RhdGVtZW50VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlc1N0YXRlbWVudFZhcmlhYmxlTm9kZSIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInVuaWZpZWQiLCJ1bmlmeU1peGlucyIsInVuaWZ5TWl4aW4iLCJ2ZXJpZnlNaXhpbnMiLCJ2ZXJpZnlNaXhpbiIsInZlcmlmeUF0VG9wTGV2ZWwiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInN0YXRlbWVudEFzQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwic3Vic3RpdHV0aW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBME1BOzs7ZUFBQTs7OzJEQXhNaUI7NERBQ087NkRBQ0M7Z0VBQ1M7NEVBQ1E7cUJBRWY7NkJBQ2M7b0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTUEsOEJBQThCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRS9DLElBQUEsQUFBTUMsMEJBQU47YUFBTUEsVUFDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVk7Z0NBRGxDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSmxCSDs7WUFPSkksS0FBQUE7bUJB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