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
                var metavariableName = this.name, metavariablePresent = localContext.isMetavariablePresentByMetavariableName(metavariableName);
                verified = metavariablePresent; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCBhcmd1bWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnRcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYXJndW1lbnROb2RlID0gYXJndW1lbnROb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBhcmd1bWVudCA9IEFyZ3VtZW50LmZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChhcmd1bWVudCA9PT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXJndW1lbnRWZXJpZmllZCA9IGFyZ3VtZW50LnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYXQgdG9wIGxldmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdm5lIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIC8vIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gZmFsc2U7XG4gICAgLy9cbiAgICAvLyBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAvLyAgIHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgIC8vICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZENvbXBsZXhTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgIC8vXG4gICAgLy8gaWYgKGNvbXBsZXhTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgIC8vICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbXBsZXhTdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuICAgIC8vXG4gICAgLy8gICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgIC8vICAgICBtZXRhdmFyaWFibGVBID0gbG9jYWxDb250ZXh0QS5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWVBKSxcbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudCwgbG9jYWxDb250ZXh0Qik7XG4gICAgLy9cbiAgICAvLyAgIGlmIChtZXRhdmFyaWFibGVBID09PSBtZXRhdmFyaWFibGVCKSB7XG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSBmYWxzZTsgIC8vL1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiksXG4gICAgLy8gICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgLy9cbiAgICAvLyAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgICAvL1xuICAgIC8vICAgICBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZEdpdmVuU3Vic3RpdHV0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2bmUgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEdpdmVuU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9ICh0aGlzLm1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBtZXRhVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGUiLCJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsIm1ldGFUeXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hOYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZlcmlmeSIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlYnVnIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50IiwiQXJndW1lbnQiLCJmcm9tQXJndW1lbnROb2RlIiwiYXJndW1lbnRWZXJpZmllZCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjsrREFDSTs0REFDSTsrRUFDd0I7cUJBRXZCO29CQUMyQjtvQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsMkJBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsMENBQ2xDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUM7QUFFbEMsSUFBQSxBQUFNRiw2QkFBTjthQUFNQSxhQUNQTSxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGxDVjtRQUVqQixJQUFJLENBQUNNLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFOQ1Y7O1lBU25CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7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