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
var _frame = /*#__PURE__*/ _interop_require_default(require("./substitution/frame"));
var _statement = /*#__PURE__*/ _interop_require_default(require("./substitution/statement"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./nodeAndTokens/metavariable"));
var _query = require("./utilities/query");
var _constants = require("./constants");
var _unification = require("./utilities/unification");
var _json = require("./utilities/json");
var _verification = require("./utilities/verification");
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
    function Metavariable(string, name, node, tokens, metaType) {
        _class_call_check(this, Metavariable);
        this.string = string;
        this.name = name;
        this.node = node;
        this.tokens = tokens;
        this.metaType = metaType;
    }
    _create_class(Metavariable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
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
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnified = false;
                var frameNode = frame.getNode(), frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var metavariableNode = this.node, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariableNode(metavariableNode);
                if (simpleSubstitutionPresent) {
                    var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode), substitution = simpleSubstitution, frameNodeMatches = substitution.matchFrameNode(frameNode);
                    if (frameNodeMatches) {
                        frameUnified = true;
                    }
                } else {
                    var metavariable = this, frameMetavariable = frameMetavariableFromFrame(frame, generalContext, specificContext);
                    if (metavariable !== null && metavariable === frameMetavariable) {
                        frameUnified = true;
                    } else {
                        var context = specificContext, frameSubstitution = _frame.default.fromFrameAndMetavariable(frame, metavariable, context), substitution1 = frameSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        frameUnified = true;
                    }
                }
                if (frameUnified) {
                    specificContext.debug("...unified the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable."));
                }
                return frameUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
                var statementUnified = false;
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementNode = statement.getNode(), metavariableNode = this.node, substitutionNode = substitution !== null ? substitution.getNode() : null, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);
                if (substitutionPresent) {
                    var _$substitution = substitutions.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode), statementNodeMatches = _$substitution.matchStatementNode(statementNode);
                    if (statementNodeMatches) {
                        statementUnified = true;
                    }
                } else {
                    var metavariable = this, statementMetavariable = statementMetavariableFromStatement(statement, generalContext, specificContext);
                    if (metavariable !== null && metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        var context = specificContext, statementSubstitution = _statement.default.fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, context);
                        statementUnified = true;
                    }
                }
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, generalContext, specificContext) {
                var metavariableUnified;
                var generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
                specificContext.trace("Unifying the '".concat(specificMetavariableString, "' metavariable against the '").concat(generalMetavariableString, "' metavariable..."));
                metavariableUnified = (0, _unification.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                if (metavariableUnified) {
                    specificContext.debug("...unified the '".concat(specificMetavariableString, "' metavariable against the '").concat(generalMetavariableString, "' metavariable."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, context) {
                var substitutionUnified = false;
                var metavariableString = this.string, substitutionString = substitution.getString();
                context.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable..."));
                var metavariableNode = this.node, judgement = context.findJudgementByMetavariableNode(metavariableNode);
                if (judgement !== null) {
                    var declaration = judgement.getDeclaration();
                    substitutionUnified = declaration.unifySubstitution(substitution, context);
                }
                if (substitutionUnified) {
                    context.debug("...unified the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified;
                var metavariableString = this.string; ///
                context.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
                var metavariable = this, generalContext = context, specificContext = context, metavariablePresent = generalContext.isMetavariablePresent(metavariable, generalContext, specificContext);
                verified = metavariablePresent; ///
                if (verified) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable."));
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
                        fileContext.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                    } else {
                        var typeNode = typeNodeQuery(this.node);
                        if (typeNode !== null) {
                            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
                            if (typePresent) {
                                verifiedAtTopLevel = true;
                            } else {
                                fileContext.debug("The '".concat(typeName, "' type is not present."));
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
            value: function verifyGivenMetaType(metaType, context) {
                var verifiedGivenMetaType = false;
                var metavariableString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type..."));
                var metavariable = this; ///
                var specificContext = context, generalContext = context; ///
                metavariable = generalContext.findMetavariable(metavariable, generalContext, specificContext);
                if (metavariable !== null) {
                    var metaTypeMatches = metavariable.matchMetaType(metaType);
                    verifiedGivenMetaType = metaTypeMatches; ///
                }
                if (verifiedGivenMetaType) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type."));
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
                var string = json.string, context = fileContext, metavariableNodeAndTokens = _metavariable.default.fromString(string, context), metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(), metavariableNode = metavariableNodeAndTokens.getMetavariableNode(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, tokens = metavariableTokens, metaType = (0, _json.metaTypeFromJSON)(json, fileContext), metavariable = new Metavariable(string, name, node, tokens, metaType);
                return metavariable;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var metavariable = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
                if (frameMetavariableNode !== null) {
                    var metavariableNode = frameMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), metaType = null;
                    metavariable = new Metavariable(string, name, node, tokens, metaType);
                }
                return metavariable;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var metavariable = null;
                var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var metavariableNode = statementMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), metaType = null;
                    metavariable = new Metavariable(string, name, node, tokens, metaType);
                }
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, context) {
                var metavariable = null;
                if (metavariableNode !== null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), metaType = null;
                    metavariable = new Metavariable(string, name, node, tokens, metaType);
                }
                return metavariable;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var metavariableNode;
                var MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode);
                metavariableNode = metavariableNodeQuery(metavariableDeclarationNode);
                var localContext = _local.default.fromFileContext(fileContext), context = localContext, node = metavariableNode, string = fileContext.nodeAsString(node), tokens = fileContext.nodeAsTokens(node), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, metaType = MetaType.fromMetaTypeNode(metaTypeNode, context), metavariable = new Metavariable(string, name, node, tokens, metaType);
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
function frameMetavariableFromFrame(frame, generalContext, specificContext) {
    var frameMetavariable = null;
    var frameNode = frame.getNode(), frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
    if (frameMetavariableNode !== null) {
        var Metavariable = _shim.default.Metavariable, context = specificContext, metavariable = Metavariable.fromFrameNode(frameNode, context);
        frameMetavariable = metavariable; ///
    }
    return frameMetavariable;
}
function statementMetavariableFromStatement(statement, generalContext, specificContext) {
    var statementMetavariable = null;
    var statementNode = statement.getNode(), statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
    if (statementMetavariableNode !== null) {
        var Metavariable = _shim.default.Metavariable, context = specificContext, metavariable = Metavariable.fromStatementNode(statementNode, context);
        statementMetavariable = metavariable; ///
    }
    return statementMetavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lLCBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gKHRoaXMubWV0YVR5cGUgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGVGcm9tRnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gZnJhbWVNZXRhdmFyaWFibGUpKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldE5vZGUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcyxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKChtZXRhdmFyaWFibGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGFnYWluc3QgdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhZ2FpbnN0IHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpe1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBqdWRnZW1lbnQuZ2V0RGVjbGFyYXRpb24oKTtcblxuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGRlY2xhcmF0aW9uLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZWNsYXJlZChmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBtZXRhdmFyaWFibGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICAgICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YVR5cGUobWV0YVR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBtZXRhVHlwZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbnVsbDtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gZmlsZUNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIGZyYW1lTWV0YXZhcmlhYmxlRnJvbUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBmcmFtZU1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXZhcmlhYmxlIiwic3RyaW5nIiwibmFtZSIsIm5vZGUiLCJ0b2tlbnMiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE1ldGFUeXBlIiwibWV0YVR5cGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZWQiLCJmcmFtZU5vZGUiLCJmcmFtZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlRnJvbUZyYW1lIiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zIiwiTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5WkE7OztlQUFBOzs7MkRBdlppQjs0REFDUTs0REFDSztnRUFDSTttRUFDSTtxQkFFWjt5QkFDRzsyQkFDSztvQkFDdUI7NEJBQ1E7b0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLHNDQUM5Qkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLDBDQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0sNkJBQU47YUFBTUEsYUFDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQUQ1Q0w7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQU5kTDs7WUFTSk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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