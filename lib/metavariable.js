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
var _unify = require("./utilities/unify");
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/frameForMetavariable"));
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
                    var metavariable = this, frameMetavariable = frameMetavariableFromStatementNode(frameNode, localContext);
                    if (metavariable === frameMetavariable) {
                        frameUnified = true;
                    } else {
                        var frameForMetavariableSubstitution = _frameForMetavariable.default.fromFrameAndMetavariable(frame, metavariable, localContext), substitution1 = frameForMetavariableSubstitution; ///
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
                    var metavariable = this, statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);
                    if (metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        var statementForMetavariableSubstitution = _statementForMetavariable.default.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBBcmd1bWVudCBmcm9tIFwiLi9hcmd1bWVudFwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgbWV0YXZhcmlhYmxlVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5vZGVGcm9tTWV0YXZhcmlhYmxlU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7bWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZX0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZ5XCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL2ZyYW1lRm9yTWV0YXZhcmlhYmxlXCI7XG5cbmNvbnN0IGFyZ3VtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudFwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGFUeXBlXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gKHRoaXMubWV0YVR5cGUgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgID0gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgPT09IGZyYW1lTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAoc3Vic3RpdHV0aW9uU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCkgOlxuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb25Ob2RlKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIChzdWJzdGl0dXRpb25TdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLmApIDpcbiAgICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUEgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IHRoaXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZUEuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVCID0gbWV0YXZhcmlhYmxlQi5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXZhcmlhYmxlTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QXRUb3BMZXZlbChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZSA9IGFyZ3VtZW50Tm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnQgPSBBcmd1bWVudC5mcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoYXJndW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50VmVyaWZpZWQgPSBhcmd1bWVudC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhcmd1bWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YVR5cGUobWV0YVR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBtZXRhVHlwZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gKHRoaXMubWV0YVR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbWV0YVR5cGUgPSBudWxsO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgbWV0YVR5cGUgfSA9IGpzb247XG5cbiAgaWYgKG1ldGFUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBtZXRhVHlwZSxcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lOyAgLy8vXG5cbiAgICBtZXRhVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUoZnJhbWVNZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoZnJhbWVNZXRhdmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlO1xufVxuIl0sIm5hbWVzIjpbImFyZ3VtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGF2YXJpYWJsZSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJtZXRhVHlwZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1hdGNoTWV0YVR5cGUiLCJtZXRhVHlwZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHQiLCJmcmFtZVVuaWZpZWQiLCJmcmFtZU5vZGUiLCJmcmFtZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlTm9kZUIiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwibWV0YXZhcmlhYmxlVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJhcmd1bWVudE5vZGUiLCJhcmd1bWVudCIsIkFyZ3VtZW50IiwiZnJvbUFyZ3VtZW50Tm9kZSIsImFyZ3VtZW50VmVyaWZpZWQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXZhcmlhYmxlTm9kZUZyb21NZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YVR5cGUiLCJzaGltIiwibWV0YVR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZh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