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
                    var context;
                    context = generalContext; ///
                    var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                    generalContext = localContext; ///
                    var metavariableNode1 = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode1, generalContext, specificContext), frameMetavariable = frameMetavariableFromStatementNode(frameNode, generalContext, specificContext);
                    if (metavariable !== null && metavariable === frameMetavariable) {
                        frameUnified = true;
                    } else {
                        context = specificContext; ///
                        var metavariable1 = this, frameSubstitution = _frame.default.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
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
                    var context;
                    context = generalContext; ///
                    var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                    generalContext = localContext; ///
                    var metavariableNode1 = this.node, metavariable = metavariableFromMetavariableNode(metavariableNode1, generalContext, specificContext), statementMetavariable = statementMetavariableFromStatementNode(statementNode, generalContext, specificContext);
                    if (metavariable !== null && metavariable === statementMetavariable) {
                        statementUnified = true;
                    } else {
                        context = specificContext; ///
                        var metavariable1 = this, statementSubstitution = _statement.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
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
                var metavariableNode = this.node, specificContext = context, generalContext = context, metavariablePresent = generalContext.isMetavariablePresentByMetavariableNode(metavariableNode, generalContext, specificContext);
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
                var metavariableNode = this.node, specificContext = context, generalContext = context, metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext);
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var metavariable = null;
                var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var metavariableNode = statementMetavariableNode; ///
                    var metavariableString = context.nodeAsString(metavariableNode), string = metavariableString, metavariableNodeAndTokens = _metavariable.default.fromString(string, context), metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode);
                    metavariableNode = metavariableNodeAndTokens.getMetavariableNode();
                    var name = metavariableName, node = metavariableNode, tokens = metavariableTokens, metaType = null;
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
                    var metavariableString = context.nodeAsString(metavariableNode), string = metavariableString, metavariableNodeAndTokens = _metavariable.default.fromString(string, context), metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode);
                    metavariableNode = metavariableNodeAndTokens.getMetavariableNode();
                    var name = metavariableName, node = metavariableNode, tokens = metavariableTokens, metaType = null;
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
                var localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariableString = fileContext.nodeAsString(metavariableNode), string = metavariableString, metavariableNodeAndTokens = _metavariable.default.fromString(string, context), metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode);
                metavariableNode = metavariableNodeAndTokens.getMetavariableNode();
                var name = metavariableName, node = metavariableNode, tokens = metavariableTokens, metaType = MetaType.fromMetaTypeNode(metaTypeNode, context), metavariable = new Metavariable(string, name, node, tokens, metaType);
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
function metavariableFromMetavariableNode(metavariableNode, generalContext, specificContext) {
    var metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext);
    return metavariable;
}
function frameMetavariableFromStatementNode(frameNode, generalContext, specificContext) {
    var frameMetavariable = null;
    var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
    if (frameMetavariableNode !== null) {
        frameMetavariable = generalContext.findMetavariableByMetavariableNode(frameMetavariableNode, generalContext, specificContext);
    }
    return frameMetavariable;
}
function statementMetavariableFromStatementNode(statementNode, generalContext, specificContext) {
    var statementMetavariable = null;
    var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
    if (statementMetavariableNode !== null) {
        statementMetavariable = generalContext.findMetavariableByMetavariableNode(statementMetavariableNode, generalContext, specificContext);
    }
    return statementMetavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gKHRoaXMubWV0YVR5cGUgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlICA9IGZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoZnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKChtZXRhdmFyaWFibGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGUgPT09IGZyYW1lTWV0YXZhcmlhYmxlKSkge1xuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRoaXMudG9rZW5zKTtcblxuICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKChtZXRhdmFyaWFibGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhZ2FpbnN0IHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYWdhaW5zdCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKXtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YVR5cGVNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVRva2VucyA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlVG9rZW5zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMgPSBNZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVRva2VucyA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlVG9rZW5zKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICAgIG1ldGFUeXBlID0gbnVsbDtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVUb2tlbnMgPSBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmdldE1ldGF2YXJpYWJsZVRva2VucygpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMgPSBNZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVUb2tlbnMgPSBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmdldE1ldGF2YXJpYWJsZVRva2VucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBmcmFtZU1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgZnJhbWVNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShmcmFtZU1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhdmFyaWFibGUiLCJzdHJpbmciLCJuYW1lIiwibm9kZSIsInRva2VucyIsIm1ldGFUeXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRNZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGUiLCJtZXRhVHlwZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllZCIsImZyYW1lTm9kZSIsImZyYW1lU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zIiwiTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGFUeXBlIiwic2hpbSIsIm1ldGFUeXBlTm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZyb21NZXRhVHlwZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJhQTs7O2VBQUE7OzsyREF6YWlCOzREQUNROzREQUNLO2dFQUNJO21FQUNJO3FCQUVaO3lCQUNHOzJCQUNLO29CQUN1QjtvQkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLHNDQUM5Qkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLDBDQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0sNkJBQU47YUFBTUEsYUFDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQUQ1Q0w7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FB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