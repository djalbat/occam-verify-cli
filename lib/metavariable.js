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
var argumentNodeQuery = (0, _query.nodeQuery)("/metavariable/argument"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YXZhcmlhYmxlVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgYXJndW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50XCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IHRoaXMubWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU1hdGNoZXMgPSAodGhpcy5tZXRhVHlwZSA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgID0gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IGZyYW1lTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIChzdWJzdGl0dXRpb25TdHJpbmcgIT09IG51bGwpID9cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN1YnN0aXR1dGlvbk5vZGUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIChzdWJzdGl0dXRpb25TdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApIDpcbiAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUEgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IHRoaXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZUEuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlQi5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWQgPSBhcmd1bWVudC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YVR5cGUobWV0YVR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBtZXRhVHlwZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gKHRoaXMubWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBudWxsO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBtZXRhVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBmcmFtZU1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZU1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZnJhbWVNZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJhcmd1bWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhdmFyaWFibGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE1ldGFUeXBlIiwibWV0YVR5cGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwiZnJhbWVVbmlmaWVkIiwiZnJhbWVOb2RlIiwiZnJhbWVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwibWV0YXZhcmlhYmxlVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudCIsIkFyZ3VtZW50IiwiZnJvbUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YVR5cGUiLCJzaGltIiwibWV0YVR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNVQTs7O2VBQUE7OzsyREFwVWlCOytEQUNJOzREQUNJO21FQUNPOzJFQUNhOytFQUNJO3FCQUV2QjtvQkFDMkI7b0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHNDQUM5QkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLDBDQUNsQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ksaUNBQWlDSixJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTUssNkJBQU47YUFBTUEsYUFDUUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQURqREw7UUFFRixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFOZEw7O1lBU0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsV0FBVztZQUN6Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsUUFBUTtZQUN0Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ1AsUUFBUSxDQUFDSSxPQUFPO2dCQUUxQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNSLFFBQVE7Z0JBQ3BCLElBQU1TLGtCQUFtQixJQUFJLENBQUNULFFBQVEsS0FBS0E7Z0JBRTNDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEyQixJQUFJLENBQUNiLElBQUksS0FBS1k7Z0JBRS9DLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEwQixJQUFJLENBQUNqQixJQUFJLENBQUNrQixLQUFLLENBQUNGO2dCQUVoRCxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxZQUFZO2dCQUMzQyxJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxZQUFZSixNQUFNZixPQUFPLElBQ3pCb0IsY0FBY0wsTUFBTWhCLFNBQVMsSUFDN0JzQixxQkFBcUIsSUFBSSxDQUFDM0IsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDdUIsYUFBYUssS0FBSyxDQUFDLEFBQUMsaUJBQWdERCxPQUFoQ0QsYUFBWSxzQkFBdUMsT0FBbkJDLG9CQUFtQjtnQkFFdkYsSUFBTWIsbUJBQW1CLElBQUksQ0FBQ1osSUFBSSxFQUM1QjJCLDRCQUE0QlAsY0FBY1EsNkNBQTZDLENBQUNoQjtnQkFFOUYsSUFBSWUsMkJBQTJCO29CQUM3QixJQUFNRSxxQkFBcUJULGNBQWNVLHdDQUF3QyxDQUFDbEIsbUJBQzVFbUIsZUFBZUYsb0JBQ2ZHLG1CQUFtQkQsYUFBYUUsY0FBYyxDQUFDVjtvQkFFckQsSUFBSVMsa0JBQWtCO3dCQUNwQlYsZUFBZTtvQkFDakI7Z0JBQ0YsT0FBTztvQkFDTCxJQUFNUCxtQkFBbUIsSUFBSSxDQUFDaEIsSUFBSSxFQUM1Qm1DLGVBQWVDLGlDQUFpQ3BCLGtCQUFrQk0sZUFDbEVlLG9CQUFxQkMsbUNBQW1DZCxXQUFXRjtvQkFFekUsSUFBSWEsaUJBQWlCRSxtQkFBbUI7d0JBQ3RDZCxlQUFlO29CQUNqQixPQUFPO3dCQUNMLElBQU1ZLGdCQUFlLElBQUksRUFDbkJJLG1DQUFtQ0MsNkJBQWdDLENBQUNDLHdCQUF3QixDQUFDckIsT0FBT2UsZUFBY2IsZUFDbEhVLGdCQUFlTyxrQ0FBbUMsR0FBRzt3QkFFM0RsQixjQUFjcUIsZUFBZSxDQUFDVixlQUFjVjt3QkFFNUNDLGVBQWU7b0JBQ2pCO2dCQUNGO2dCQUVBLElBQUlBLGNBQWM7b0JBQ2hCRCxhQUFhcUIsS0FBSyxDQUFDLEFBQUMsbUJBQWtEakIsT0FBaENELGFBQVksc0JBQXVDLE9BQW5CQyxvQkFBbUI7Z0JBQzNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRWIsWUFBWSxFQUFFWCxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2pFLElBQUl3QixtQkFBbUI7Z0JBRXZCLElBQU1DLGtCQUFrQkYsVUFBVXpDLFNBQVMsSUFDckNzQixxQkFBcUIsSUFBSSxDQUFDM0IsTUFBTSxFQUNoQ2lELHFCQUFxQixBQUFDaEIsaUJBQWlCLE9BQ2ZBLGFBQWE1QixTQUFTLEtBQ3BCO2dCQUUvQjRDLHVCQUF1QixPQUN0QjFCLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGlCQUF3REQsT0FBeENxQixpQkFBZ0IsMEJBQXNFQyxPQUE5Q3RCLG9CQUFtQiw2QkFBOEMsT0FBbkJzQixvQkFBbUIsdUJBQzNJMUIsYUFBYUssS0FBSyxDQUFDLEFBQUMsaUJBQXdERCxPQUF4Q3FCLGlCQUFnQiwwQkFBMkMsT0FBbkJyQixvQkFBbUI7Z0JBRW5HLElBQU11QixnQkFBZ0JKLFVBQVV4QyxPQUFPLElBQ2pDVyxtQkFBbUIsSUFBSSxDQUFDaEIsSUFBSSxFQUM1QmEsbUJBQW1CcUMsSUFBQUEsMENBQW9DLEVBQUNsQyxtQkFDeERtQyxtQkFBbUIsQUFBQ25CLGlCQUFpQixPQUNmQSxhQUFhb0IsbUJBQW1CLEtBQzlCLE1BQ3hCQyxzQkFBc0JoQyxjQUFjaUMsMERBQTBELENBQUN6QyxrQkFBa0JzQztnQkFFdkgsSUFBSUUscUJBQXFCO29CQUN2QixJQUFNckIsaUJBQWVYLGNBQWNrQyxxREFBcUQsQ0FBQzFDLGtCQUFrQnNDLG1CQUNyR0ssdUJBQXVCeEIsZUFBYXlCLGtCQUFrQixDQUFDUjtvQkFFN0QsSUFBSU8sc0JBQXNCO3dCQUN4QlYsbUJBQW1CO29CQUNyQjtnQkFDRixPQUFPO29CQUNMLElBQU05QixvQkFBbUIsSUFBSSxDQUFDaEIsSUFBSSxFQUM1Qm1DLGVBQWVDLGlDQUFpQ3BCLG1CQUFrQk0sZUFDbEVvQyx3QkFBd0JDLHVDQUF1Q1YsZUFBZTNCO29CQUVwRixJQUFJYSxpQkFBaUJ1Qix1QkFBdUI7d0JBQzFDWixtQkFBbUI7b0JBQ3JCLE9BQU87d0JBQ0wsSUFBTVgsZ0JBQWUsSUFBSSxFQUNuQnlCLHVDQUF1Q0MsaUNBQW9DLENBQUNDLHdDQUF3QyxDQUFDakIsV0FBV1YsZUFBY0gsY0FBY1Y7d0JBRWxLVSxlQUFlNEIsc0NBQXVDLEdBQUc7d0JBRXpEdkMsY0FBY3FCLGVBQWUsQ0FBQ1YsY0FBY1Y7d0JBRTVDd0IsbUJBQW1CO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ25CRSx1QkFBdUIsT0FDdEIxQixhQUFhcUIsS0FBSyxDQUFDLEFBQUMsbUJBQTBEakIsT0FBeENxQixpQkFBZ0IsMEJBQXNFQyxPQUE5Q3RCLG9CQUFtQiw2QkFBOEMsT0FBbkJzQixvQkFBbUIscUJBQzdJMUIsYUFBYXFCLEtBQUssQ0FBQyxBQUFDLG1CQUEwRGpCLE9BQXhDcUIsaUJBQWdCLDBCQUEyQyxPQUFuQnJCLG9CQUFtQjtnQkFDdkc7Z0JBRUEsT0FBT29CO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU96QyxZQUFZO2dCQUNqQixJQUFJMEM7Z0JBRUosSUFBTXRDLHFCQUFxQixJQUFJLENBQUMzQixNQUFNLEVBQUUsR0FBRztnQkFFM0N1QixhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJELG9CQUFtQjtnQkFFeEQsSUFBTWIsbUJBQW1CLElBQUksQ0FBQ1osSUFBSSxFQUM1QmtDLGVBQWViLGFBQWEyQyxrQ0FBa0MsQ0FBQ3BEO2dCQUVyRSxJQUFJc0IsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU0rQixnQkFBZ0IvQixjQUNoQmdDLGdCQUFnQixJQUFJLEVBQ3BCQyxvQkFBb0JGLGNBQWM3RCxPQUFPLElBQ3pDZ0Usb0JBQW9CRixjQUFjOUQsT0FBTyxJQUN6Q2lFLHNCQUFzQkMscUJBQW1CLENBQUNDLEtBQUssQ0FBQ0osbUJBQW1CQyxtQkFBbUIvQztvQkFFNUYwQyxXQUFXTSxxQkFBcUIsR0FBRztnQkFDckM7Z0JBRUEsSUFBSU4sVUFBVTtvQkFDWjFDLGFBQWFxQixLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJqQixvQkFBbUI7Z0JBQzVEO2dCQUVBLE9BQU9zQztZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjNFLFdBQVc7Z0JBQzFCLElBQUk0RSxxQkFBcUI7Z0JBRXpCLElBQU1oRCxxQkFBcUIsSUFBSSxDQUFDM0IsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDRCxZQUFZNkIsS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CRCxvQkFBbUI7Z0JBRXZELElBQU1WLG1CQUFtQixJQUFJLENBQUNoQixJQUFJLEVBQzVCYSxtQkFBbUJxQyxJQUFBQSwwQ0FBb0MsRUFBQ2xDLG1CQUN4RDJELHNCQUFzQjdFLFlBQVk4RSx1Q0FBdUMsQ0FBQy9EO2dCQUVoRixJQUFJOEQscUJBQXFCO29CQUN2QjdFLFlBQVk2QyxLQUFLLENBQUMsQUFBQyxxQkFBdUMsT0FBbkJqQixvQkFBbUI7Z0JBQzVELE9BQU87b0JBQ0wsSUFBTW1ELGVBQWV0RixrQkFBa0J5QixtQkFDakM4RCxXQUFXQyxpQkFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsY0FBYy9FO29CQUV6RCxJQUFJZ0YsYUFBYSxNQUFNO3dCQUNyQkoscUJBQXFCO29CQUN2QixPQUFPO3dCQUNMLElBQU1PLG1CQUFtQkgsU0FBU2YsTUFBTSxDQUFDakU7d0JBRXpDLElBQUltRixrQkFBa0I7NEJBQ3BCUCxxQkFBcUI7d0JBQ3ZCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEI1RSxZQUFZNkMsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CakIsb0JBQW1CO2dCQUMzRDtnQkFFQSxPQUFPZ0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JoRixRQUFRLEVBQUVvQixZQUFZO2dCQUN4QyxJQUFJNkQsd0JBQXdCO2dCQUU1QixJQUFNekQscUJBQXFCLElBQUksQ0FBQzNCLE1BQU0sRUFDaENxRixpQkFBaUJsRixTQUFTRSxTQUFTO2dCQUV6Q2tCLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFnRXlELE9BQS9DMUQsb0JBQW1CLDhCQUEyQyxPQUFmMEQsZ0JBQWU7Z0JBRW5HLElBQU1uRixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQk8sbUJBQW1CWixNQUNuQmtDLGVBQWViLGFBQWEyQyxrQ0FBa0MsQ0FBQ3BEO2dCQUVyRSxJQUFJc0IsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU14QixrQkFBa0J3QixhQUFhekIsYUFBYSxDQUFDUjtvQkFFbkRpRix3QkFBd0J4RSxpQkFBa0IsR0FBRztnQkFDL0M7Z0JBRUEsSUFBSXdFLHVCQUF1QjtvQkFDekI3RCxhQUFhcUIsS0FBSyxDQUFDLEFBQUMsb0JBQWtFeUMsT0FBL0MxRCxvQkFBbUIsOEJBQTJDLE9BQWYwRCxnQkFBZTtnQkFDdkc7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLEFBQUMsSUFBSSxDQUFDcEYsUUFBUSxLQUFLLE9BQ2hCLElBQUksQ0FBQ0EsUUFBUSxDQUFDbUYsTUFBTSxLQUNsQixNQUNwQnRGLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCRyxXQUFXb0YsY0FDWEMsT0FBTztvQkFDTHhGLFFBQUFBO29CQUNBRyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPcUY7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUV6RixXQUFXO2dCQUMvQixJQUFNLEFBQUVDLFNBQVd3RixLQUFYeEYsUUFDRjBGLFFBQVMzRixZQUFZNEYsUUFBUSxJQUM3QkMsU0FBUzdGLFlBQVk4RixTQUFTLElBQzlCbEUscUJBQXFCM0IsUUFDckJpQixtQkFBbUI2RSxJQUFBQSw0Q0FBc0MsRUFBQ25FLG9CQUFvQitELE9BQU9FLFNBQ3JGOUUsbUJBQW1CcUMsSUFBQUEsMENBQW9DLEVBQUNsQyxtQkFDeERoQixPQUFPZ0Isa0JBQ1BmLE9BQU9ZLGtCQUNQWCxXQUFXNEYsaUJBQWlCUCxNQUFNekYsY0FDbENxQyxlQUFlLElBelFuQnRDLGFBeVFvQ0MsYUFBYUMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRXZFLE9BQU9pQztZQUNUOzs7WUFFTzRELEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQi9FLGdCQUFnQixFQUFFbEIsV0FBVztnQkFDdkQsSUFBSXFDLGVBQWU7Z0JBRW5CLElBQUluQixxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTUgsbUJBQW1CcUMsSUFBQUEsMENBQW9DLEVBQUNsQyxtQkFDeERoQixPQUFPZ0Isa0JBQ1BmLE9BQU9ZLGtCQUNQZCxTQUFTRCxZQUFZa0csWUFBWSxDQUFDaEcsT0FDbENFLFdBQVc7b0JBRWpCaUMsZUFBZSxJQXhSZnRDLGFBd1JnQ0MsYUFBYUMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBQ25FO2dCQUVBLE9BQU9pQztZQUNUOzs7WUFFTzhELEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsMkJBQTJCLEVBQUVwRyxXQUFXO2dCQUM3RSxJQUFNLEFBQUVxRyxXQUFhQyxhQUFJLENBQWpCRCxVQUNGRSxlQUFlNUcsa0JBQWtCeUcsOEJBQ2pDbEYsbUJBQW1CdEIsc0JBQXNCd0csOEJBQ3pDckYsbUJBQW1CcUMsSUFBQUEsMENBQW9DLEVBQUNsQyxtQkFDeERNLGVBQWVnRixjQUFZLENBQUNDLGVBQWUsQ0FBQ3pHLGNBQzVDNEIscUJBQXFCNUIsWUFBWWtHLFlBQVksQ0FBQ2hGLG1CQUM5Q2pCLFNBQVMyQixvQkFDVDFCLE9BQU9nQixrQkFDUGYsT0FBT1ksa0JBQ1BYLFdBQVdpRyxTQUFTSyxnQkFBZ0IsQ0FBQ0gsY0FBYy9FLGVBQ25EYSxlQUFlLElBelNuQnRDLGFBeVNvQ0MsYUFBYUMsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRXZFLE9BQU9pQztZQUNUOzs7V0E1U0l0Qzs7QUErU040RyxPQUFPQyxNQUFNLENBQUNOLGFBQUksRUFBRTtJQUNsQnZHLGNBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNpRyxpQkFBaUJQLElBQUksRUFBRXpGLFdBQVc7SUFDekMsSUFBSSxBQUFFSSxXQUFhcUYsS0FBYnJGO0lBRU4sSUFBSUEsYUFBYSxNQUFNO1FBQ3JCLElBQU0sQUFBRUQsT0FBU0MsU0FBVEQsTUFDRlEsZUFBZVIsTUFBTyxHQUFHO1FBRS9CQyxXQUFXSixZQUFZNkcsMEJBQTBCLENBQUNsRztJQUNwRDtJQUVBLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTa0MsaUNBQWlDcEIsZ0JBQWdCLEVBQUVNLFlBQVk7SUFDdEUsSUFBTVQsbUJBQW1CcUMsSUFBQUEsMENBQW9DLEVBQUNsQyxtQkFDeERtQixlQUFlYixhQUFhMkMsa0NBQWtDLENBQUNwRDtJQUVyRSxPQUFPc0I7QUFDVDtBQUVBLFNBQVNHLG1DQUFtQ2QsU0FBUyxFQUFFRixZQUFZO0lBQ2pFLElBQUllLG9CQUFvQjtJQUV4QixJQUFNdUUsd0JBQXdCakgsMkJBQTJCNkI7SUFFekQsSUFBSW9GLDBCQUEwQixNQUFNO1FBQ2xDLElBQU1DLHdCQUF3QjNELElBQUFBLDBDQUFvQyxFQUFDMEQ7UUFFbkV2RSxvQkFBb0JmLGFBQWEyQyxrQ0FBa0MsQ0FBQzRDO0lBQ3RFO0lBRUEsT0FBT3hFO0FBQ1Q7QUFFQSxTQUFTc0IsdUNBQXVDVixhQUFhLEVBQUUzQixZQUFZO0lBQ3pFLElBQUlvQyx3QkFBd0I7SUFFNUIsSUFBTW9ELDRCQUE0QmxILCtCQUErQnFEO0lBRWpFLElBQUk2RCw4QkFBOEIsTUFBTTtRQUN0QyxJQUFNQyw0QkFBNEI3RCxJQUFBQSwwQ0FBb0MsRUFBQzREO1FBRXZFcEQsd0JBQXdCcEMsYUFBYTJDLGtDQUFrQyxDQUFDOEM7SUFDMUU7SUFFQSxPQUFPckQ7QUFDVCJ9