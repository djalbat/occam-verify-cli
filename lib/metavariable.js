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
var _type = require("./type");
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
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
var Metavariable = /*#__PURE__*/ function() {
    function Metavariable(string, node, tokens, name, type, metaType) {
        _class_call_check(this, Metavariable);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.name = name;
        this.type = type;
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = metavariableName === this.name;
                return metavariableNameMatches;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(metavariable) {
                var equalTo = false;
                if (metavariable !== null) {
                    var metavariableString = metavariable.getString();
                    equalTo = metavariableString === this.string;
                }
                return equalTo;
            }
        },
        {
            key: "isMetaTypeEqualTo",
            value: function isMetaTypeEqualTo(metaType) {
                return this.metaType.isEqualTo(metaType);
            }
        },
        {
            key: "isEssentiallyEqualToFrame",
            value: function isEssentiallyEqualToFrame(frame, generalContext, specificContext) {
                var essentiallyEqualToFrame = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var frameString = frame.getString();
                    if (frameString === this.string) {
                        essentiallyEqualToFrame = true;
                    }
                }
                return essentiallyEqualToFrame;
            }
        },
        {
            key: "isEssentiallyEqualToStatement",
            value: function isEssentiallyEqualToStatement(statement, generalContext, specificContext) {
                var essentiallyEqualToStatement = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var statementString = statement.getString();
                    if (statementString === this.string) {
                        essentiallyEqualToStatement = true;
                    }
                }
                return essentiallyEqualToStatement;
            }
        },
        {
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnified = false;
                var frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var essentiallyEqualToFrame = this.isEssentiallyEqualToFrame(frame, generalContext, specificContext);
                if (essentiallyEqualToFrame) {
                    frameUnified = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualTo(frame);
                        if (substitutionFrameEqualToFrame) {
                            frameUnified = true;
                        }
                    } else {
                        var context = specificContext, metavariable1 = this, frameSubstitution = _frame.default.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
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
                var essentiallyEqualToStatement = this.isEssentiallyEqualToStatement(statement, generalContext, specificContext);
                if (essentiallyEqualToStatement) {
                    statementUnified = true;
                } else {
                    var metavariable = this, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);
                    if (substitutionPresent) {
                        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                        var substitutionStatementEqualToStatement = substitution.isStatementEqualTo(statement);
                        if (substitutionStatementEqualToStatement) {
                            statementUnified = true;
                        }
                    } else {
                        var context = specificContext, metavariable1 = this, statementSubstitution = _statement.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
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
                var metavariable = this, judgement = context.findJudgementByMetavariable(metavariable);
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
            key: "verifyType",
            value: function verifyType(fileContext) {
                var typeVerified;
                if (this.type === null) {
                    typeVerified = true;
                } else {
                    if (this.type === _type.objectType) {
                        typeVerified = true;
                    } else {
                        var typeName = this.type.getName();
                        fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                        var type = fileContext.findTypeByTypeName(typeName);
                        if (type === null) {
                            fileContext.debug("The '".concat(typeName, "' type is missing."));
                        } else {
                            this.type = type; ///
                            typeVerified = true;
                        }
                        if (typeVerified) {
                            fileContext.debug("...verified the '".concat(typeName, "' type."));
                        }
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedWhenDeclared = false;
                var metavariableString = this.string; ///
                fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
                var metavariableNode = this.node, termNode = termNodeQuery(metavariableNode);
                if (termNode !== null) {
                    fileContext.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                } else {
                    var metavariableName = this.name, metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        fileContext.debug("The '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var variableName = this.name, variablePresent = fileContext.isVariablePresentByVariableName(variableName);
                        if (variablePresent) {
                            fileContext.debug("A '".concat(metavariableName, "' variable is already present."));
                        } else {
                            var typeVerified = this.verifyType(fileContext);
                            verifiedWhenDeclared = typeVerified;
                        }
                    }
                }
                if (verifiedWhenDeclared) {
                    fileContext.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
                }
                return verifiedWhenDeclared;
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
                    var metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);
                    verifiedGivenMetaType = metavariableMetaTypeEqualToMetaType; ///
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
                var metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, metaType = metaTypeJSON, string = this.string, json = {
                    string: string,
                    type: type,
                    metaType: metaType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string, context = fileContext, metavariableNodeAndTokens = _metavariable.default.fromString(string, context), metavariableTokens = metavariableNodeAndTokens.getMetavariableTokens(), metavariableNode = metavariableNodeAndTokens.getMetavariableNode(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, tokens = metavariableTokens, type = (0, _json.typeFromJSON)(json, fileContext), metaType = (0, _json.metaTypeFromJSON)(json, fileContext), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                return metavariable;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var metavariable = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
                if (frameMetavariableNode !== null) {
                    var metavariableNode = frameMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), type = null, metaType = null;
                    metavariable = new Metavariable(string, node, tokens, name, type, metaType);
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
                    var metavariableNode = statementMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), type = null, metaType = null;
                    metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                }
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, context) {
                var metavariable = null;
                if (metavariableNode !== null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), type = null, metaType = null;
                    metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                }
                return metavariable;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, MetaType = _shim.default.MetaType, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariableNode = metavariableNodeQuery(metavariableDeclarationNode), node = metavariableNode, string = fileContext.nodeAsString(node), tokens = fileContext.nodeAsTokens(node), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, type = Type.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVuaWZ5TWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAobWV0YXZhcmlhYmxlU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgaXNFc3NlbnRpYWxseUVxdWFsVG9GcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBlc3NlbnRpYWxseUVxdWFsVG9GcmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlc3NlbnRpYWxseUVxdWFsVG9GcmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzc2VudGlhbGx5RXF1YWxUb0ZyYW1lO1xuICB9XG5cbiAgaXNFc3NlbnRpYWxseUVxdWFsVG9TdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGVzc2VudGlhbGx5RXF1YWxUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBlc3NlbnRpYWxseUVxdWFsVG9TdGF0ZW1lbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlc3NlbnRpYWxseUVxdWFsVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZXNzZW50aWFsbHlFcXVhbFRvRnJhbWUgPSB0aGlzLmlzRXNzZW50aWFsbHlFcXVhbFRvRnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGVzc2VudGlhbGx5RXF1YWxUb0ZyYW1lKSB7XG4gICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5pc0ZyYW1lRXF1YWxUbyhmcmFtZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZXNzZW50aWFsbHlFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5pc0Vzc2VudGlhbGx5RXF1YWxUb1N0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGVzc2VudGlhbGx5RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uaXNTdGF0ZW1lbnRFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllZDtcblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhZ2FpbnN0IHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgYWdhaW5zdCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCl7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZCA9IG1ldGF2YXJpYWJsZVByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgQSB0ZXJtIHdhcyBmb3VuZCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgQSAnJHttZXRhdmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZWNsYXJlZCA9IHR5cGVWZXJpZmllZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVjbGFyZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbnVsbDtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSwgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRva2VucyA9IGZpbGVDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIE1ldGF2YXJpYWJsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGF2YXJpYWJsZTtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhdmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwibmFtZSIsInR5cGUiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwiZXF1YWxUbyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFc3NlbnRpYWxseUVxdWFsVG9GcmFtZSIsImZyYW1lIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJlc3NlbnRpYWxseUVxdWFsVG9GcmFtZSIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVTdHJpbmciLCJpc0Vzc2VudGlhbGx5RXF1YWxUb1N0YXRlbWVudCIsInN0YXRlbWVudCIsImVzc2VudGlhbGx5RXF1YWxUb1N0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5RnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZnJhbWVVbmlmaWVkIiwidHJhY2UiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSIsImlzRnJhbWVFcXVhbFRvIiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc1N0YXRlbWVudEVxdWFsVG8iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInZlcmlmeVR5cGUiLCJmaWxlQ29udGV4dCIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInZlcmlmaWVkV2hlbkRlY2xhcmVkIiwibWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsIk1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwibWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInR5cGVGcm9tSlNPTiIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJzaGltIiwiTWV0YVR5cGUiLCJsb2NhbENvbnRleHQiLCJMb2Nh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