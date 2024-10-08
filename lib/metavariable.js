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
                var statementString = statement.getString(), metavariableString = this.string;
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
                var statementString = statement.getString(), substitutionString = substitution.getString(), metavariableString = this.string;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnRcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWQgPSBhcmd1bWVudC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2bmUgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgLy8gbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSBmYWxzZTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgIC8vICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgLy8gICBjb21wbGV4U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kQ29tcGxleFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgLy9cbiAgICAvLyBpZiAoY29tcGxleFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgIC8vICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgLy8gICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gY29tcGxleFN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG4gICAgLy9cbiAgICAvLyAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgIC8vICAgICBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZUEgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZUEpLFxuICAgIC8vICAgICBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50LCBsb2NhbENvbnRleHRCKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKG1ldGF2YXJpYWJsZUEgPT09IG1ldGF2YXJpYWJsZUIpIHtcbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IGZhbHNlOyAgLy8vXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zdCBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSxcbiAgICAvLyAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICAvL1xuICAgIC8vICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgIC8vXG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZuZSB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gKHRoaXMubWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbIk1ldGF2YXJpYWJsZSIsImFyZ3VtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiYXJndW1lbnROb2RlIiwiYXJndW1lbnQiLCJBcmd1bWVudCIsImZyb21Bcmd1bWVudE5vZGUiLCJhcmd1bWVudFZlcmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50VW5pZmllZEdpdmVuU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGFUeXBlIiwic2hpbSIsIm1ldGFUeXBlTm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhVHlwZU5vZGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRKOytEQUNJOzREQUNJOytFQUN3QjtxQkFFdkI7b0JBQzJCO29CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQywyQkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDbENHLGlDQUFpQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQyxJQUFBLEFBQU1GLDZCQUFOO2FBQU1BLGFBQ1BNLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEbENWO1FBRWpCLElBQUksQ0FBQ00sV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQU5DVjs7WUFTbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsUUFBUTtZQUN0Qjs7O1lBRUFN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