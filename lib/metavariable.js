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
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/frameForMetavariable"));
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/statementForMetavariable"));
var _query = require("./utilities/query");
var _constants = require("./constants");
var _node = require("./utilities/node");
var _json = require("./utilities/json");
var _name = require("./utilities/name");
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
                var metavariableNode = this.node, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariableNode(metavariableNode);
                if (simpleSubstitutionPresent) {
                    var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode), substitution = simpleSubstitution, frameNodeMatches = substitution.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        frameUnified = true;
                    }
                } else {
                    var metavariableNode1 = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode1, localContext), frameMetavariable = frameMetavariableFromStatementNode(frameNode, localContext);
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
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                localContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementNode = statement.getNode(), metavariableNode = this.node, substitutionNode = substitution !== null ? substitution.getSubstitutionNode() : null, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                if (substitutionPresent) {
                    var _$substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode), statementNodeMatches = _$substitution.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
                        statementUnified = true;
                    }
                } else {
                    var metavariableNode1 = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode1, localContext), statementMetavariable = statementMetavariableFromStatementNode(statementNode, localContext);
                    if (metavariable !== null && metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        var metavariable1 = this, statementForMetavariableSubstitution = _statementForMetavariable.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, localContext);
                        substitution = statementForMetavariableSubstitution; ///
                        substitutions.addSubstitution(substitution, localContext);
                        statementUnified = true;
                    }
                }
                if (statementUnified) {
                    localContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable."));
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
                var metavariableNode = this.node, judgement = localContext.findJudgementByMetavariableNode(metavariableNode);
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
                var metavariableNode = this.node, metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode);
                verified = metavariablePresent; ///
                if (verified) {
                    localContext.debug("...verified the '".concat(metavariableString, "' metavariable."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedAtTopLevel = false;
                var metavariableString = this.string; ///
                fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
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
                    fileContext.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
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
                var metavariableNode = this.node, metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
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
                var metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), metaType = metaTypeJSON, string = this.string, json = {
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariableString = string, metavariableNode = (0, _node.metavariableNodeFromMetavariableString)(metavariableString, lexer, parser), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), node = metavariableNode, name = metavariableName, metaType = (0, _json.metaTypeFromJSON)(json, fileContext), metavariable = new Metavariable(fileContext, string, node, name, metaType);
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
function metavariableFromMetavariableNode(metavariableNode, localContext) {
    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
    return metavariable;
}
function frameMetavariableFromStatementNode(frameNode, localContext) {
    var frameMetavariable = null;
    var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
    if (frameMetavariableNode !== null) {
        frameMetavariable = localContext.findMetavariableByMetavariableNode(frameMetavariableNode);
    }
    return frameMetavariable;
}
function statementMetavariableFromStatementNode(statementNode, localContext) {
    var statementMetavariable = null;
    var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
    if (statementMetavariableNode !== null) {
        statementMetavariable = localContext.findMetavariableByMetavariableNode(statementMetavariableNode);
    }
    return statementMetavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdHlwZVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGFUeXBlXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSB0aGlzLm1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gKHRoaXMubWV0YVR5cGUgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlICA9IGZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlID09PSBmcmFtZU1ldGF2YXJpYWJsZSkge1xuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdWJzdGl0dXRpb25Ob2RlKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gbG9jYWxDb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKXtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVQcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBtZXRhdmFyaWFibGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLmZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdhcyBmb3VuZCB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YVR5cGVNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyhtZXRhdmFyaWFibGVTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUobG9jYWxDb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBmcmFtZU1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBmcmFtZU1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgZnJhbWVNZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShmcmFtZU1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhdmFyaWFibGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibWV0YVR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtYXRjaE1ldGFUeXBlIiwibWV0YVR5cGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwiZnJhbWVVbmlmaWVkIiwiZnJhbWVOb2RlIiwiZnJhbWVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVOb2RlIiwidHlwZU5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhdmFyaWFibGVOb2RlRnJvbU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeVZBOzs7ZUFBQTs7OzJEQXZWaUI7NERBQ1E7MkVBQ29COytFQUNJO3FCQUV2Qjt5QkFDRztvQkFDMEI7b0JBQ0U7b0JBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDOUJHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1NLDZCQUFOO2FBQU1BLGFBQ1FDLFdB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