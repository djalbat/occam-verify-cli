"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metavariable;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _argument = /*#__PURE__*/ _interop_require_default(require("./argument"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/statementForMetavariable"));
var _query = require("./utilities/query");
var _name = require("./utilities/name");
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
var argumentNodeQuery = (0, _query.nodeQuery)("/metavariable/argument"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable");
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(fileContext, string, node, name, metaType) {
        _class_call_check(this, Metavariable);
        this.fileContext = fileContext;
        this.string = string;
        this.node = node;
        this.name = name;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "getMetaTypeName",
            value: function getMetaTypeName() {
                var metaTypeName = this.metaType.getName();
                return metaTypeName;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.node.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var metavariableString = this.string; ///
                localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
                debugger;
                if (verified) {
                    localContext.debug("...verified the '".concat(metavariableString, "' metavariable."));
                }
                return verified;
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel = false;
                var metavariableString = this.string; ///
                fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable at top level..."));
                var metavariableNode = this.node, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                if (metavariablePresent) {
                    fileContext.debug("The metavariable '".concat(metavariableString, "' is already present."));
                } else {
                    var argumentNode = argumentNodeQuery(metavariableNode), argument = _argument.default.fromArgumentNode(argumentNode, fileContext);
                    if (argument === null) {
                        verifiedAtTopLevel = true;
                    } else {
                        var argumentVerified = argument.verify(fileContext);
                        if (argumentVerified) {
                            verifiedAtTopLevel = true;
                        }
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(metavariableString, "' metavariable at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified = false;
                var statementString = statement.getString(), metavariableString = this.string; ///
                localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable..."));
                var statementNode = statement.getNode(), metavariableNode = this.node, simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode), substitution = simpleSubstitution; ///
                if (substitution !== null) {
                    var statementNodeMatches = substitution.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
                        statementUnified = true;
                    }
                } else {
                    var metavariable = this, statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);
                    if (metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        var statementForMetavariableSubstitution = _statementForMetavariable.default.fromStatementAndMetavariable(statement, metavariable, localContext), substitution1 = statementForMetavariableSubstitution; ///
                        substitutions.addSubstitution(substitution1, localContext);
                        statementUnified = true;
                    }
                }
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyStatementGivenSubstitution",
            value: function unifyStatementGivenSubstitution(statement, substitution, substitutions, localContext) {
                var statementUnifiedGivenSubstitution = false;
                var statementString = statement.getString(), substitutionString = substitution.getString(), metavariableString = this.string; ///
                localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable givne the '").concat(substitutionString, "' substitution..."));
                // let metavariableUnifiedWithStatementGivenSubstitution = false;
                //
                // const metavariableNode = metavariable.getNode(),
                //   substitutionNode = substitution.getNode(),
                //   complexSubstitution = substitutions.findComplexSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                //
                // if (complexSubstitution !== null) {
                //   const statementNode = statement.getNode(),
                //     statementNodeMatches = complexSubstitution.matchStatementNode(statementNode);
                //
                //   if (statementNodeMatches) {
                //     metavariableUnifiedWithStatementGivenSubstitution = true;
                //   }
                // } else {
                //   const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNode),
                //     metavariableA = localContextA.findMetavariableByMetavariableName(metavariableNameA),
                //     metavariableB = metavariableFromStatementNode(statement, localContextB);
                //
                //   if (metavariableA === metavariableB) {
                //     metavariableUnifiedWithStatementGivenSubstitution = false;  ///
                //   } else {
                //     const statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContextA, localContextB),
                //       substitution = statementForMetavariableSubstitution;  ///
                //
                //     substitutions.addSubstitution(substitution, localContextA, localContextB);
                //
                //     metavariableUnifiedWithStatementGivenSubstitution = true;
                //   }
                // }
                if (statementUnifiedGivenSubstitution) {
                    localContext.trace("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable givne the '").concat(substitutionString, "' substitution."));
                }
                return statementUnifiedGivenSubstitution;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metaTypeJSON = this.metaType !== null ? this.metaType.toJSON() : null, string = this.string, metaType = metaTypeJSON, json = {
                    string: string,
                    metaType: metaType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariableString = string, metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, metaType = metaTypeFromJSON(json, fileContext), metavariable = new Metavariable(fileContext, string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, fileContext) {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, string = fileContext.nodeAsString(node), metaType = null, metavariable = new Metavariable(fileContext, string, node, name, metaType);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metavariableNode = metavariableNodeQuery(metavariableDeclarationNode), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), localContext = _local.default.fromFileContext(fileContext), metavariableString = fileContext.nodeAsString(metavariableNode), string = metavariableString, node = metavariableNode, name = metavariableName, metaType = MetaType.fromMetaTypeNode(metaTypeNode, localContext), metavariable = new Metavariable(fileContext, string, node, name, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}();
function metaTypeFromJSON(json, fileContext) {
    var metaType = json.metaType;
    if (metaType !== null) {
        var name = metaType.name, metaTypeName = name; ///
        metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName);
    }
    return metaType;
}
function statementMetavariableFromStatementNode(statementNode, localContext) {
    var statementMetavariable = null;
    var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
    if (statementMetavariableNode !== null) {
        var statementMetavariableName = (0, _name.metavariableNameFromMetavariableNode)(statementMetavariableNode);
        statementMetavariable = localContext.findMetavariableByMetavariableName(statementMetavariableName);
    }
    return statementMetavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnRcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWQgPSBhcmd1bWVudC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZuZSB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAvLyBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IGZhbHNlO1xuICAgIC8vXG4gICAgLy8gY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgLy8gICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAvLyAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAvL1xuICAgIC8vIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAvLyAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb21wbGV4U3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlQSA9IGxvY2FsQ29udGV4dEEuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lQSksXG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dEIpO1xuICAgIC8vXG4gICAgLy8gICBpZiAobWV0YXZhcmlhYmxlQSA9PT0gbWV0YXZhcmlhYmxlQikge1xuICAgIC8vICAgICBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gZmFsc2U7ICAvLy9cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnN0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpLFxuICAgIC8vICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIC8vXG4gICAgLy8gICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgLy9cbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdm5lIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSAodGhpcy5tZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKG1ldGF2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsiTWV0YXZhcmlhYmxlIiwiYXJndW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJtZXRhVHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ2ZXJpZnkiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2ZXJpZnlBdFRvcExldmVsIiwidmVyaWZpZWRBdFRvcExldmVsIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudCIsIkFyZ3VtZW50IiwiZnJvbUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YVR5cGUiLCJzaGltIiwibWV0YVR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7MkRBZEo7K0RBQ0k7NERBQ0k7K0VBQ3dCO3FCQUV2QjtvQkFDMkI7b0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHNDQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLDBDQUNsQ0csaUNBQWlDSCxJQUFBQSxnQkFBUyxFQUFDO0FBRWxDLElBQUEsQUFBTUYsNkJBQU47YUFBTUEsYUFDUE0sV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQURsQ1Y7UUFFakIsSUFBSSxDQUFDTSxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTkNWOztZQVNuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxRQUFRO1lBQ3RC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