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
                var metavariableNode = this.node, localContext = _local.default.fromContextAndTokens(context, this.tokens), generalContext = localContext, specificContext = localContext, metavariablePresent = generalContext.isMetavariablePresentByMetavariableNode(metavariableNode, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbWV0YVR5cGVGcm9tSlNPTiwgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSwgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3R5cGVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhdmFyaWFibGVcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoTWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICBjb25zdCBtZXRhVHlwZU1hdGNoZXMgPSAodGhpcy5tZXRhVHlwZSA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgID0gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gZnJhbWVNZXRhdmFyaWFibGUpKSB7XG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXROb2RlKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKXtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodGhpcy5ub2RlKTtcblxuICAgICAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFUeXBlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YVR5cGVNYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVRva2VucyA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlVG9rZW5zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyA9IE1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBtZXRhdmFyaWFibGVUb2tlbnMsIC8vL1xuICAgICAgICAgICAgbWV0YVR5cGUgPSBudWxsO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgIGNvbnN0IHsgTWV0YVR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG1ldGF2YXJpYWJsZVRva2VucywgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTWV0YXZhcmlhYmxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXZhcmlhYmxlO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZShmcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUoZnJhbWVNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXZhcmlhYmxlIiwic3RyaW5nIiwibmFtZSIsIm5vZGUiLCJ0b2tlbnMiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE1ldGFUeXBlIiwibWV0YVR5cGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZWQiLCJmcmFtZU5vZGUiLCJmcmFtZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJjb250ZXh0IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lTWV0YXZhcmlhYmxlIiwiZnJhbWVNZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJtZXRhVHlwZUpTT04iLCJtZXRhVHlwZVRvTWV0YVR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsIk1ldGF2YXJpYWJsZU5vZGVBbmRUb2tlbnMiLCJmcm9tU3RyaW5nIiwibWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFUeXBlRnJvbUpTT04iLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmcm9tTWV0YVR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlhBOzs7ZUFBQTs7OzJEQTNYaUI7NERBQ1E7NERBQ0s7Z0VBQ0k7bUVBQ0k7cUJBRVo7eUJBQ0c7b0JBQzRCO29CQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRSxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsc0NBQzlCRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsMENBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTSw2QkFBTjthQUFNQSxhQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRDVDTDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTmRMOztZQVNKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElB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