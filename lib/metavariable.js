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
var _argument = /*#__PURE__*/ _interop_require_default(require("./argument"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./unifier/metavariable"));
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
                var verified;
                var metavariableString = this.string; ///
                localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
                var metavariableName = this.name, metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
                if (metavariable !== null) {
                    var metavariableA = metavariable, metavariableB = this, metavariableNodeA = metavariableA.getNode(), metavariableNodeB = metavariableB.getNode(), metavariableUnified = _metavariable.default.unify(metavariableNodeA, metavariableNodeB, localContext);
                    verified = metavariableUnified; ///
                }
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
                var metavariable = null;
                if (metavariableNode !== null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, string = fileContext.nodeAsString(node), metaType = null;
                    metavariable = new Metavariable(fileContext, string, node, name, metaType);
                }
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
Object.assign(_shim.default, {
    Metavariable: Metavariable
});
var _default = Metavariable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YXZhcmlhYmxlVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgYXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50XCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGVcIik7XG5cbmNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVBID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZUIgPSB0aGlzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVBLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQiA9IG1ldGF2YXJpYWJsZUIuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZXIudW5pZnkobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGF2YXJpYWJsZU5vZGVCLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZWQ7IC8vL1xuXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWQgPSBhcmd1bWVudC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZuZSB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAvLyBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IGZhbHNlO1xuICAgIC8vXG4gICAgLy8gY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgLy8gICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAvLyAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAvL1xuICAgIC8vIGlmIChjb21wbGV4U3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAvLyAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb21wbGV4U3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlQSA9IGxvY2FsQ29udGV4dEEuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lQSksXG4gICAgLy8gICAgIG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dEIpO1xuICAgIC8vXG4gICAgLy8gICBpZiAobWV0YXZhcmlhYmxlQSA9PT0gbWV0YXZhcmlhYmxlQikge1xuICAgIC8vICAgICBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gZmFsc2U7ICAvLy9cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnN0IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpLFxuICAgIC8vICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIC8vXG4gICAgLy8gICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgLy9cbiAgICAvLyAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdm5lIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSAodGhpcy5tZXRhVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YVR5cGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nKG1ldGF2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGF2YXJpYWJsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGF2YXJpYWJsZTtcblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICBsZXQgeyBtZXRhVHlwZSB9ID0ganNvbjtcblxuICBpZiAobWV0YVR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IG1ldGFUeXBlLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICAgIG1ldGFUeXBlID0gZmlsZUNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbImFyZ3VtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhdmFyaWFibGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZU5vZGVCIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsIm1ldGF2YXJpYWJsZVVuaWZpZXIiLCJ1bmlmeSIsImRlYnVnIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudCIsIkFyZ3VtZW50IiwiZnJvbUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YVR5cGUiLCJzaGltIiwibWV0YVR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlSQTs7O2VBQUE7OzsyREF2UmlCOytEQUNJOzREQUNJO21FQUNPOytFQUNpQjtxQkFFdkI7b0JBQzJCO29CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQywyQkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDbENHLGlDQUFpQ0gsSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1JLDZCQUFOO2FBQU1BLGFBQ1FDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEakRMO1FBRUYsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTmRMOztZQVNKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEs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