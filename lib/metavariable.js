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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVNYXRjaGVzID0gKHRoaXMubWV0YVR5cGUgPT09IG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhVHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlICA9IGZyYW1lTWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoZnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKChtZXRhdmFyaWFibGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGUgPT09IGZyYW1lTWV0YXZhcmlhYmxlKSkge1xuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRoaXMudG9rZW5zKTtcblxuICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKChtZXRhdmFyaWFibGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGUgPT09IHN0YXRlbWVudE1ldGF2YXJpYWJsZSkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhZ2FpbnN0IHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYWdhaW5zdCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKXtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YVR5cGVNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVRva2VucyA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlVG9rZW5zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBtZXRhdmFyaWFibGVUb2tlbnMsIC8vL1xuICAgICAgICAgICAgbWV0YVR5cGUgPSBudWxsO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YXZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXZhcmlhYmxlO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUoZnJhbWVNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXZhcmlhYmxlIiwic3RyaW5nIiwibmFtZSIsIm5vZGUiLCJ0b2tlbnMiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE1ldGFUeXBlIiwibWV0YVR5cGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZWQiLCJmcmFtZU5vZGUiLCJmcmFtZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJjb250ZXh0IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lTWV0YXZhcmlhYmxlIiwiZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsIk1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwibWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ1pBOzs7ZUFBQTs7OzJEQTlZaUI7NERBQ1E7NERBQ0s7Z0VBQ0k7bUVBQ0k7cUJBRVo7eUJBQ0c7MkJBQ0s7b0JBQ3VCO29CQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRSxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsMENBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTSw2QkFBTjthQUFNQSxhQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRDVDTDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTmRMOztZQVNKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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