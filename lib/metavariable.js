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
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./unifier/metavariable"));
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/frameForMetavariable"));
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
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/type"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
            key: "matchMetaType",
            value: function matchMetaType(metaType) {
                var metaTypeMatches = this.metaType === metaType;
                return metaTypeMatches;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = this.name === metavariableName;
                return metavariableNameMatches;
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
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, localContext) {
                var frameUnified = false;
                var frameNode = frame.getNode(), frameString = frame.getString(), metavariableString = this.string; ///
                localContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var metavariableName = this.name, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariableName(metavariableName);
                if (simpleSubstitutionPresent) {
                    var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableName(metavariableName), substitution = simpleSubstitution, frameNodeMatches = substitution.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        frameUnified = true;
                    }
                } else {
                    var metavariableNode = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode, localContext), frameMetavariable = frameMetavariableFromStatementNode(frameNode, localContext);
                    if (metavariable === frameMetavariable) {
                        frameUnified = true;
                    } else {
                        var metavariable1 = this, frameForMetavariableSubstitution = _frameForMetavariable.default.fromFrameAndMetavariable(frame, metavariable1, localContext), substitution1 = frameForMetavariableSubstitution; ///
                        substitutions.addSubstitution(substitution1, localContext);
                        frameUnified = true;
                    }
                }
                if (frameUnified) {
                    localContext.debug("...unified the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable."));
                }
                return frameUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, localContext) {
                var statementUnified = false;
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : null;
                substitutionString !== null ? localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable given the ").concat(substitutionString, " substitution...")) : localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable..."));
                var statementNode = statement.getNode(), metavariableNode = this.node, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), substitutionNode = substitution !== null ? substitution.getSubstitutionNode() : null, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode);
                if (substitutionPresent) {
                    var _$substitution = substitutions.findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode), statementNodeMatches = _$substitution.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
                        statementUnified = true;
                    }
                } else {
                    var metavariableNode1 = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode1, localContext), statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);
                    if (metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        var metavariable1 = this, statementForMetavariableSubstitution = _statementForMetavariable.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, localContext);
                        substitution = statementForMetavariableSubstitution; ///
                        substitutions.addSubstitution(substitution, localContext);
                        statementUnified = true;
                    }
                }
                if (statementUnified) {
                    substitutionString !== null ? localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable given the ").concat(substitutionString, " substitution.")) : localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString, "' metavariable."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, localContext) {
                var substitutionUnified = false;
                var metavariableString = this.string, substitutionString = substitution.getString();
                localContext.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable..."));
                var metavariableName = this.name, judgement = localContext.findJudgementByMetavariableName(metavariableName);
                if (judgement !== null) {
                    var declaration = judgement.getDeclaration();
                    substitutionUnified = declaration.unifySubstitution(substitution, localContext);
                }
                if (substitutionUnified) {
                    localContext.debug("...unified the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable."));
                }
                return substitutionUnified;
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
                    var termNode = termNodeQuery(this.node);
                    if (termNode !== null) {
                        var termString = this.fileContext.nodeAsString(termNode);
                        this.fileContext.debug("The '".concat(termString, "' term was found when a type should have been present."));
                    } else {
                        var typeNode = typeNodeQuery(this.node);
                        if (typeNode !== null) {
                            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                            if (typePresent) {
                                verifiedAtTopLevel = true;
                            } else {
                                this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                            }
                        } else {
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
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, localContext) {
                var verifiedGivenMetaType = false;
                var metavariableString = this.string, metaTypeString = metaType.getString();
                localContext.trace("Verifying the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type..."));
                var name = this.getName(), metavariableName = name, metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
                if (metavariable !== null) {
                    var metaTypeMatches = metavariable.matchMetaType(metaType);
                    verifiedGivenMetaType = metaTypeMatches; ///
                }
                if (verifiedGivenMetaType) {
                    localContext.debug("...verified the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiedGivenMetaType;
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
            value: function fromMetavariableNode(metavariableNode, localContext) {
                var metavariable = null;
                if (metavariableNode !== null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, string = localContext.nodeAsString(node), metaType = null;
                    metavariable = new Metavariable(localContext, string, node, name, metaType);
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
function metavariableFromMetavariableNode(metavariableNode, localContext) {
    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
    return metavariable;
}
function frameMetavariableFromStatementNode(frameNode, localContext) {
    var frameMetavariable = null;
    var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
    if (frameMetavariableNode !== null) {
        var frameMetavariableName = (0, _name.metavariableNameFromMetavariableNode)(frameMetavariableNode);
        frameMetavariable = localContext.findMetavariableByMetavariableName(frameMetavariableName);
    }
    return frameMetavariable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IG1ldGF2YXJpYWJsZVVuaWZpZXIgZnJvbSBcIi4vdW5pZmllci9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGVcIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7bWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlLCB0eXBlTmFtZUZyb21UeXBlTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCBsb2NhbCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU1hdGNoZXMgPSAodGhpcy5tZXRhVHlwZSA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgID0gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IGZyYW1lTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIChzdWJzdGl0dXRpb25TdHJpbmcgIT09IG51bGwpID9cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbk5vZGUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIChzdWJzdGl0dXRpb25TdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApIDpcbiAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IGxvY2FsQ29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCl7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUEgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IHRoaXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZUEuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlQi5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2FzIGZvdW5kIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YVR5cGVNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9ICh0aGlzLm1ldGFUeXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmcobWV0YXZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBudWxsO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGxvY2FsQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YXZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXZhcmlhYmxlO1xuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gIGxldCB7IG1ldGFUeXBlIH0gPSBqc29uO1xuXG4gIGlmIChtZXRhVHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gbWV0YVR5cGUsXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgbWV0YVR5cGUgPSBmaWxlQ29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZnJhbWVNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShmcmFtZU1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgZnJhbWVNZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXZhcmlhYmxlIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsIm1ldGFUeXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWF0Y2hNZXRhVHlwZSIsIm1ldGFUeXBlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwidW5pZnlGcmFtZSIsImZyYW1lIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsImZyYW1lVW5pZmllZCIsImZyYW1lTm9kZSIsImZyYW1lU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwibWV0YXZhcmlhYmxlVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZSIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGFUeXBlIiwic2hpbSIsIm1ldGFUeXBlTm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhVHlwZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5V0E7OztlQUFBOzs7MkRBdldpQjs0REFDUTttRUFDTzsyRUFDYTsrRUFDSTtxQkFFdkI7b0JBQytDO29CQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd2RCxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsMENBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTSw2QkFBTjthQUFNQSxhQUNRQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGpETDtRQUVGLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQU5kTDs7WUFTSk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFF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