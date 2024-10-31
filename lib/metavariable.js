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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = this.name === metavariableName;
                return metavariableNameMatches;
            }
        },
        {
            key: "isCoincidentWithFrame",
            value: function isCoincidentWithFrame(frame, generalContext, specificContext) {
                var coincidentWithFrame = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var frameString = frame.getString();
                    if (frameString === this.string) {
                        coincidentWithFrame = true;
                    }
                }
                return coincidentWithFrame;
            }
        },
        {
            key: "isCoincidentWithStatement",
            value: function isCoincidentWithStatement(statement, generalContext, specificContext) {
                var coincidentWithStatement = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var statementString = statement.getString();
                    if (statementString === this.string) {
                        coincidentWithStatement = true;
                    }
                }
                return coincidentWithStatement;
            }
        },
        {
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnified = false;
                var frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var coincidentWithFrame = this.isCoincidentWithFrame(frame, generalContext, specificContext);
                if (coincidentWithFrame) {
                    frameUnified = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualTo(frame);
                        if (substitutionFrameEqualToFrame) {
                            frameUnified = true;
                        }
                    } else {
                        var metavariable1 = this, frameMetavariable = frameMetavariableFromFrame(frame, generalContext, specificContext);
                        if (metavariable1 !== null && metavariable1 === frameMetavariable) {
                            frameUnified = true;
                        } else {
                            var context = specificContext, frameSubstitution = _frame.default.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
                            substitutions.addSubstitution(substitution1, context);
                            frameUnified = true;
                        }
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
                var coincidentWithStatement = this.isCoincidentWithStatement(statement, generalContext, specificContext);
                if (coincidentWithStatement) {
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
                        var metavariable1 = this, statementMetavariable = statementMetavariableFromStatement(statement, generalContext, specificContext);
                        if (metavariable1 !== null && metavariable1 === statementMetavariable) {
                            statementUnified = true;
                        } else {
                            var context = specificContext, statementSubstitution = _statement.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
                            substitution = statementSubstitution; ///
                            substitutions.addSubstitution(substitution, context);
                            statementUnified = true;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uIGZyb20gXCIuL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuaW1wb3J0IFN0YXRlbWVudFN1YnN0aXR1dGlvbiBmcm9tIFwiLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyBmcm9tIFwiLi9ub2RlQW5kVG9rZW5zL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lLCBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUsIG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YVR5cGVcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8obWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9IChtZXRhdmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKSB7IHJldHVybiB0aGlzLm1ldGFUeXBlLmlzRXF1YWxUbyhtZXRhVHlwZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBpc0NvaW5jaWRlbnRXaXRoRnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgY29pbmNpZGVudFdpdGhGcmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBjb2luY2lkZW50V2l0aEZyYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29pbmNpZGVudFdpdGhGcmFtZTtcbiAgfVxuXG4gIGlzQ29pbmNpZGVudFdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvaW5jaWRlbnRXaXRoU3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRTdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIGNvaW5jaWRlbnRXaXRoU3RhdGVtZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29pbmNpZGVudFdpdGhTdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgY29pbmNpZGVudFdpdGhGcmFtZSA9IHRoaXMuaXNDb2luY2lkZW50V2l0aEZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChjb2luY2lkZW50V2l0aEZyYW1lKSB7XG4gICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5pc0ZyYW1lRXF1YWxUbyhmcmFtZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGZyYW1lTWV0YXZhcmlhYmxlRnJvbUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gZnJhbWVNZXRhdmFyaWFibGUpKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGNvaW5jaWRlbnRXaXRoU3RhdGVtZW50ID0gdGhpcy5pc0NvaW5jaWRlbnRXaXRoU3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoY29pbmNpZGVudFdpdGhTdGF0ZW1lbnQpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmlzU3RhdGVtZW50RXF1YWxUbyhzdGF0ZW1lbnQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsXG4gICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZSA9PT0gc3RhdGVtZW50TWV0YXZhcmlhYmxlKSkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGFnYWluc3QgdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBhZ2FpbnN0IHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKXtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcyxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVQcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgbWV0YXZhcmlhYmxlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRoaXMubm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgQSB0ZXJtIHdhcyBmb3VuZCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zID0gTWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZUFuZFRva2Vucy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIG1ldGFUeXBlID0gbnVsbDtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5hbWUsIG5vZGUsIHRva2VucywgbWV0YVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBtZXRhVHlwZSA9IG51bGw7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBuYW1lLCBub2RlLCB0b2tlbnMsIG1ldGFUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgY29uc3QgeyBNZXRhVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhVHlwZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gZmlsZUNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbmFtZSwgbm9kZSwgdG9rZW5zLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdmFyaWFibGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhdmFyaWFibGU7XG5cbmZ1bmN0aW9uIGZyYW1lTWV0YXZhcmlhYmxlRnJvbUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBmcmFtZU1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50TWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAvLy9cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YXZhcmlhYmxlIiwic3RyaW5nIiwibmFtZSIsIm5vZGUiLCJ0b2tlbnMiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0TWV0YVR5cGUiLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJlcXVhbFRvIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJpc0NvaW5jaWRlbnRXaXRoRnJhbWUiLCJmcmFtZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiY29pbmNpZGVudFdpdGhGcmFtZSIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVTdHJpbmciLCJpc0NvaW5jaWRlbnRXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29pbmNpZGVudFdpdGhTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUZyYW1lIiwic3Vic3RpdHV0aW9ucyIsImZyYW1lVW5pZmllZCIsInRyYWNlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0ZyYW1lRXF1YWxUbyIsImZyYW1lTWV0YXZhcmlhYmxlIiwiZnJhbWVNZXRhdmFyaWFibGVGcm9tRnJhbWUiLCJjb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzU3RhdGVtZW50RXF1YWxUbyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImZpbGVDb250ZXh0IiwidmVyaWZpZWRBdFRvcExldmVsIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVOb2RlQW5kVG9rZW5zIiwiTWV0YXZhcmlhYmxlTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YVR5cGUiLCJzaGltIiwibWV0YVR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZnJvbU1ldGFUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcWNBOzs7ZUFBQTs7OzJEQW5jaUI7NERBQ1E7NERBQ0s7Z0VBQ0k7bUVBQ0k7cUJBRVo7eUJBQ0c7MkJBQ0s7b0JBQ3VCOzRCQUNRO29CQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxzQ0FDOUJHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQywwQ0FDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1NLDZCQUFOO2FBQU1BLGFBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtnQ0FENUNMO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFOZEw7O1lBU0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsUUFBUTtZQUN0Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxZQUFZO2dCQUNwQixJQUFJQyxVQUFVO2dCQUVkLElBQUlELGlCQUFpQixNQUFNO29CQUN6QixJQUFNRSxxQkFBcUJGLGFBQWFOLFNBQVM7b0JBRWpETyxVQUFXQyx1QkFBdUIsSUFBSSxDQUFDYixNQUFNO2dCQUMvQztnQkFFQSxPQUFPWTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlYsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDTSxTQUFTLENBQUNOO1lBQVc7OztZQUV4RVcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFNQywwQkFBMkIsSUFBSSxDQUFDaEIsSUFBSSxLQUFLZTtnQkFFL0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLEtBQUssRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUMxRCxJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLHlCQUF5QkgsZUFBZUksV0FBVyxJQUNuREMsMEJBQTBCSixnQkFBZ0JHLFdBQVc7Z0JBRTNELElBQUlELDJCQUEyQkUseUJBQXlCO29CQUN0RCxJQUFNQyxjQUFjUCxNQUFNZCxTQUFTO29CQUVuQyxJQUFJcUIsZ0JBQWdCLElBQUksQ0FBQzFCLE1BQU0sRUFBRTt3QkFDL0JzQixzQkFBc0I7b0JBQ3hCO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxTQUFTLEVBQUVSLGNBQWMsRUFBRUMsZUFBZTtnQkFDbEUsSUFBSVEsMEJBQTBCO2dCQUU5QixJQUFNTix5QkFBeUJILGVBQWVJLFdBQVcsSUFDbkRDLDBCQUEwQkosZ0JBQWdCRyxXQUFXO2dCQUUzRCxJQUFJRCwyQkFBMkJFLHlCQUF5QjtvQkFDdEQsSUFBTUssa0JBQWtCRixVQUFVdkIsU0FBUztvQkFFM0MsSUFBSXlCLG9CQUFvQixJQUFJLENBQUM5QixNQUFNLEVBQUU7d0JBQ25DNkIsMEJBQTBCO29CQUM1QjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdaLEtBQUssRUFBRWEsYUFBYSxFQUFFWixjQUFjLEVBQUVDLGVBQWU7Z0JBQzlELElBQUlZLGVBQWU7Z0JBRW5CLElBQU1QLGNBQWNQLE1BQU1kLFNBQVMsSUFDN0JRLHFCQUFxQixJQUFJLENBQUNiLE1BQU0sRUFBRSxHQUFHO2dCQUUzQ3FCLGdCQUFnQmEsS0FBSyxDQUFDLEFBQUMsaUJBQWdEckIsT0FBaENhLGFBQVksc0JBQXVDLE9BQW5CYixvQkFBbUI7Z0JBRTFGLElBQU1TLHNCQUFzQixJQUFJLENBQUNKLHFCQUFxQixDQUFDQyxPQUFPQyxnQkFBZ0JDO2dCQUU5RSxJQUFJQyxxQkFBcUI7b0JBQ3ZCVyxlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU10QixlQUFlLElBQUksRUFDbkJ3Qiw0QkFBNEJILGNBQWNJLHlDQUF5QyxDQUFDekI7b0JBRTFGLElBQUl3QiwyQkFBMkI7d0JBQzdCLElBQU1FLHFCQUFxQkwsY0FBY00sb0NBQW9DLENBQUMzQixlQUN4RTRCLGVBQWVGLG9CQUNmRyxnQ0FBZ0NELGFBQWFFLGNBQWMsQ0FBQ3RCO3dCQUVsRSxJQUFJcUIsK0JBQStCOzRCQUNqQ1AsZUFBZTt3QkFDakI7b0JBQ0YsT0FBTzt3QkFDTCxJQUFNdEIsZ0JBQWUsSUFBSSxFQUNuQitCLG9CQUFvQkMsMkJBQTJCeEIsT0FBT0MsZ0JBQWdCQzt3QkFFNUUsSUFBSSxBQUFDVixrQkFBaUIsUUFBVUEsa0JBQWlCK0IsbUJBQW9COzRCQUNuRVQsZUFBZTt3QkFDakIsT0FBTzs0QkFDTCxJQUFNVyxVQUFVdkIsaUJBQ1Z3QixvQkFBb0JDLGNBQWlCLENBQUNDLHdCQUF3QixDQUFDNUIsT0FBT1IsZUFBY2lDLFVBQ3BGTCxnQkFBZU0sbUJBQW9CLEdBQUc7NEJBRTVDYixjQUFjZ0IsZUFBZSxDQUFDVCxlQUFjSzs0QkFFNUNYLGVBQWU7d0JBQ2pCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLGNBQWM7b0JBQ2hCWixnQkFBZ0I0QixLQUFLLENBQUMsQUFBQyxtQkFBa0RwQyxPQUFoQ2EsYUFBWSxzQkFBdUMsT0FBbkJiLG9CQUFtQjtnQkFDOUY7Z0JBRUEsT0FBT29CO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWV0QixTQUFTLEVBQUVXLFlBQVksRUFBRVAsYUFBYSxFQUFFWixjQUFjLEVBQUVDLGVBQWU7Z0JBQ3BGLElBQUk4QixtQkFBbUI7Z0JBRXZCLElBQU1yQixrQkFBa0JGLFVBQVV2QixTQUFTLElBQ3JDUSxxQkFBcUIsSUFBSSxDQUFDYixNQUFNLEVBQ2hDb0QscUJBQXFCLEFBQUNiLGlCQUFpQixPQUNmQSxhQUFhbEMsU0FBUyxLQUNwQmdELHVCQUFZO2dCQUU1Q2hDLGdCQUFnQmEsS0FBSyxDQUFDLEFBQUMsaUJBQXdEckIsT0FBeENpQixpQkFBZ0IsMEJBQTZDc0IsT0FBckJ2QyxvQkFBd0MsT0FBbkJ1QyxvQkFBbUI7Z0JBRXZILElBQU12QiwwQkFBMEIsSUFBSSxDQUFDRix5QkFBeUIsQ0FBQ0MsV0FBV1IsZ0JBQWdCQztnQkFFMUYsSUFBSVEseUJBQXlCO29CQUMzQnNCLG1CQUFtQjtnQkFDckIsT0FBTztvQkFDTCxJQUFNeEMsZUFBZSxJQUFJLEVBQ25CMkMsc0JBQXNCdEIsY0FBY3VCLGtEQUFrRCxDQUFDNUMsY0FBYzRCO29CQUUzRyxJQUFJZSxxQkFBcUI7d0JBQ3ZCZixlQUFlUCxjQUFjd0IsNkNBQTZDLENBQUM3QyxjQUFjNEIsZUFBZSxHQUFHO3dCQUUzRyxJQUFNa0Isd0NBQXdDbEIsYUFBYW1CLGtCQUFrQixDQUFDOUI7d0JBRTlFLElBQUk2Qix1Q0FBdUM7NEJBQ3pDTixtQkFBbUI7d0JBQ3JCO29CQUNGLE9BQU87d0JBQ0wsSUFBTXhDLGdCQUFlLElBQUksRUFDbkJnRCx3QkFBd0JDLG1DQUFtQ2hDLFdBQVdSLGdCQUFnQkM7d0JBRTVGLElBQUksQUFBQ1Ysa0JBQWlCLFFBQVVBLGtCQUFpQmdELHVCQUF3Qjs0QkFDdkVSLG1CQUFtQjt3QkFDckIsT0FBTzs0QkFDTCxJQUFNUCxVQUFVdkIsaUJBQ1Z3Qyx3QkFBd0JDLGtCQUFxQixDQUFDQyx3Q0FBd0MsQ0FBQ25DLFdBQVdqQixlQUFjNEIsY0FBY0s7NEJBRXBJTCxlQUFlc0IsdUJBQXdCLEdBQUc7NEJBRTFDN0IsY0FBY2dCLGVBQWUsQ0FBQ1QsY0FBY0s7NEJBRTVDTyxtQkFBbUI7d0JBQ3JCO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLGtCQUFrQjtvQkFDcEI5QixnQkFBZ0I0QixLQUFLLENBQUMsQUFBQyxtQkFBMERwQyxPQUF4Q2lCLGlCQUFnQiwwQkFBNkNzQixPQUFyQnZDLG9CQUF3QyxPQUFuQnVDLG9CQUFtQjtnQkFDM0g7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JyRCxZQUFZLEVBQUVTLGNBQWMsRUFBRUMsZUFBZTtnQkFDN0QsSUFBSTRDO2dCQUVKLElBQU1DLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUJ4RCxjQUN2QnlELDRCQUE0QkYsb0JBQW9CN0QsU0FBUyxJQUN6RGdFLDZCQUE2QkYscUJBQXFCOUQsU0FBUztnQkFFakVnQixnQkFBZ0JhLEtBQUssQ0FBQyxBQUFDLGlCQUF5RWtDLE9BQXpEQyw0QkFBMkIsZ0NBQXdELE9BQTFCRCwyQkFBMEI7Z0JBRTFISCxzQkFBc0JELElBQUFBLDhCQUFpQixFQUFDRSxxQkFBcUJDLHNCQUFzQi9DLGdCQUFnQkM7Z0JBRW5HLElBQUk0QyxxQkFBcUI7b0JBQ3ZCNUMsZ0JBQWdCNEIsS0FBSyxDQUFDLEFBQUMsbUJBQTJFbUIsT0FBekRDLDRCQUEyQixnQ0FBd0QsT0FBMUJELDJCQUEwQjtnQkFDOUg7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0IvQixZQUFZLEVBQUVLLE9BQU87Z0JBQ3JDLElBQUkyQixzQkFBc0I7Z0JBRTFCLElBQU0xRCxxQkFBcUIsSUFBSSxDQUFDYixNQUFNLEVBQ2hDb0QscUJBQXFCYixhQUFhbEMsU0FBUztnQkFFakR1QyxRQUFRVixLQUFLLENBQUMsQUFBQyxpQkFBOERyQixPQUE5Q3VDLG9CQUFtQiw2QkFBOEMsT0FBbkJ2QyxvQkFBbUI7Z0JBRWhHLElBQU1GLGVBQWUsSUFBSSxFQUNuQjZELFlBQVk1QixRQUFRNkIsMkJBQTJCLENBQUM5RDtnQkFFdEQsSUFBSTZELGNBQWMsTUFBSztvQkFDckIsSUFBTUUsY0FBY0YsVUFBVUcsY0FBYztvQkFFNUNKLHNCQUFzQkcsWUFBWUosaUJBQWlCLENBQUMvQixjQUFjSztnQkFDcEU7Z0JBRUEsSUFBSTJCLHFCQUFxQjtvQkFDdkIzQixRQUFRSyxLQUFLLENBQUMsQUFBQyxtQkFBZ0VwQyxPQUE5Q3VDLG9CQUFtQiw2QkFBOEMsT0FBbkJ2QyxvQkFBbUI7Z0JBQ3BHO2dCQUVBLE9BQU8wRDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9oQyxPQUFPO2dCQUNaLElBQUlpQztnQkFFSixJQUFNaEUscUJBQXFCLElBQUksQ0FBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRTNDNEMsUUFBUVYsS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CckIsb0JBQW1CO2dCQUVuRCxJQUFNRixlQUFlLElBQUksRUFDbkJTLGlCQUFpQndCLFNBQ2pCdkIsa0JBQWtCdUIsU0FDbEJrQyxzQkFBc0IxRCxlQUFlMkQscUJBQXFCLENBQUNwRSxjQUFjUyxnQkFBZ0JDO2dCQUUvRndELFdBQVdDLHFCQUFxQixHQUFHO2dCQUVuQyxJQUFJRCxVQUFVO29CQUNaakMsUUFBUUssS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CcEMsb0JBQW1CO2dCQUN2RDtnQkFFQSxPQUFPZ0U7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFdBQVc7Z0JBQzVCLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTXJFLHFCQUFxQixJQUFJLENBQUNiLE1BQU0sRUFBRSxHQUFHO2dCQUUzQ2lGLFlBQVkvQyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJyQixvQkFBbUI7Z0JBRXZELElBQU1zRSxtQkFBbUIsSUFBSSxDQUFDakYsSUFBSSxFQUM1QmMsbUJBQW1Cb0UsSUFBQUEsMENBQW9DLEVBQUNELG1CQUN4REwsc0JBQXNCRyxZQUFZSSx1Q0FBdUMsQ0FBQ3JFO2dCQUVoRixJQUFJOEQscUJBQXFCO29CQUN2QkcsWUFBWWhDLEtBQUssQ0FBQyxBQUFDLHFCQUF1QyxPQUFuQnBDLG9CQUFtQjtnQkFDNUQsT0FBTztvQkFDTCxJQUFNeUUsV0FBVzlGLGNBQWMsSUFBSSxDQUFDVSxJQUFJO29CQUV4QyxJQUFJb0YsYUFBYSxNQUFNO3dCQUNyQkwsWUFBWWhDLEtBQUssQ0FBQyxBQUFDLDRCQUE4QyxPQUFuQnBDLG9CQUFtQjtvQkFDbkUsT0FBTzt3QkFDTCxJQUFNMEUsV0FBVzdGLGNBQWMsSUFBSSxDQUFDUSxJQUFJO3dCQUV4QyxJQUFJcUYsYUFBYSxNQUFNOzRCQUNyQixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0YsV0FDaENHLGNBQWNULFlBQVlVLHVCQUF1QixDQUFDSDs0QkFFeEQsSUFBSUUsYUFBYTtnQ0FDZlIscUJBQXFCOzRCQUN2QixPQUFPO2dDQUNMRCxZQUFZaEMsS0FBSyxDQUFDLEFBQUMsUUFBZ0IsT0FBVHVDLFVBQVM7NEJBQ3JDO3dCQUNGLE9BQU87NEJBQ0xOLHFCQUFxQjt3QkFDdkI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsb0JBQW9CO29CQUN0QkQsWUFBWWhDLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQnBDLG9CQUFtQjtnQkFDM0Q7Z0JBRUEsT0FBT3FFO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CeEYsUUFBUSxFQUFFd0MsT0FBTztnQkFDbkMsSUFBSWlELHdCQUF3QjtnQkFFNUIsSUFBTWhGLHFCQUFxQixJQUFJLENBQUNiLE1BQU0sRUFDaEM4RixpQkFBaUIxRixTQUFTQyxTQUFTO2dCQUV6Q3VDLFFBQVFWLEtBQUssQ0FBQyxBQUFDLGtCQUFnRTRELE9BQS9DakYsb0JBQW1CLDhCQUEyQyxPQUFmaUYsZ0JBQWU7Z0JBRTlGLElBQUluRixlQUFlLElBQUksRUFBRyxHQUFHO2dCQUU3QixJQUFNVSxrQkFBa0J1QixTQUNsQnhCLGlCQUFpQndCLFNBQVMsR0FBRztnQkFFbkNqQyxlQUFlUyxlQUFlMkUsZ0JBQWdCLENBQUNwRixjQUFjUyxnQkFBZ0JDO2dCQUU3RSxJQUFJVixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTXFGLHNDQUFzQ3JGLGFBQWFHLGlCQUFpQixDQUFDVjtvQkFFM0V5Rix3QkFBd0JHLHFDQUFzQyxHQUFHO2dCQUNuRTtnQkFFQSxJQUFJSCx1QkFBdUI7b0JBQ3pCakQsUUFBUUssS0FBSyxDQUFDLEFBQUMsb0JBQWtFNkMsT0FBL0NqRixvQkFBbUIsOEJBQTJDLE9BQWZpRixnQkFBZTtnQkFDbEc7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlQyxJQUFBQSw0QkFBc0IsRUFBQyxJQUFJLENBQUMvRixRQUFRLEdBQ25EQSxXQUFXOEYsY0FDWGxHLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCb0csT0FBTztvQkFDTHBHLFFBQUFBO29CQUNBSSxVQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVuQixXQUFXO2dCQUMvQixJQUFNLEFBQUVqRixTQUFXb0csS0FBWHBHLFFBQ0Y0QyxVQUFVcUMsYUFDVnFCLDRCQUE0QkMscUJBQXlCLENBQUNDLFVBQVUsQ0FBQ3hHLFFBQVE0QyxVQUN6RTZELHFCQUFxQkgsMEJBQTBCSSxxQkFBcUIsSUFDcEV2QixtQkFBbUJtQiwwQkFBMEJLLG1CQUFtQixJQUNoRTNGLG1CQUFtQm9FLElBQUFBLDBDQUFvQyxFQUFDRCxtQkFDeERsRixPQUFPZSxrQkFDUGQsT0FBT2lGLGtCQUNQaEYsU0FBU3NHLG9CQUNUckcsV0FBV3dHLElBQUFBLHNCQUFnQixFQUFDUixNQUFNbkIsY0FDbEN0RSxlQUFlLElBdlZuQlosYUF1Vm9DQyxRQUFRQyxNQUFNQyxNQUFNQyxRQUFRQztnQkFFbEUsT0FBT087WUFDVDs7O1lBRU9rRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVsRSxPQUFPO2dCQUNyQyxJQUFJakMsZUFBZTtnQkFFbkIsSUFBTW9HLHdCQUF3QmxILDJCQUEyQmlIO2dCQUV6RCxJQUFJQywwQkFBMEIsTUFBTTtvQkFDbEMsSUFBTTVCLG1CQUFtQjRCLHVCQUNuQi9GLG1CQUFtQm9FLElBQUFBLDBDQUFvQyxFQUFDRCxtQkFDeERsRixPQUFPZSxrQkFDUGQsT0FBT2lGLGtCQUNQbkYsU0FBUzRDLFFBQVFvRSxZQUFZLENBQUM5RyxPQUM5QkMsU0FBU3lDLFFBQVFxRSxZQUFZLENBQUMvRyxPQUM5QkUsV0FBVztvQkFFakJPLGVBQWUsSUExV2ZaLGFBMFdnQ0MsUUFBUUMsTUFBTUMsTUFBTUMsUUFBUUM7Z0JBQzlEO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVPdUcsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUV2RSxPQUFPO2dCQUM3QyxJQUFJakMsZUFBZTtnQkFFbkIsSUFBTXlHLDRCQUE0QnRILCtCQUErQnFIO2dCQUVqRSxJQUFJQyw4QkFBOEIsTUFBTTtvQkFDdEMsSUFBTWpDLG1CQUFtQmlDLDJCQUNuQnBHLG1CQUFtQm9FLElBQUFBLDBDQUFvQyxFQUFDRCxtQkFDeERsRixPQUFPZSxrQkFDUGQsT0FBT2lGLGtCQUNQbkYsU0FBUzRDLFFBQVFvRSxZQUFZLENBQUM5RyxPQUM5QkMsU0FBU3lDLFFBQVFxRSxZQUFZLENBQUMvRyxPQUM5QkUsV0FBVztvQkFFakJPLGVBQWUsSUE5WGZaLGFBOFhnQ0MsUUFBUUMsTUFBTUMsTUFBTUMsUUFBUUM7Z0JBQzlEO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVPMEcsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCbEMsZ0JBQWdCLEVBQUV2QyxPQUFPO2dCQUNuRCxJQUFJakMsZUFBZTtnQkFFbkIsSUFBSXdFLHFCQUFxQixNQUFNO29CQUM3QixJQUFNbkUsbUJBQW1Cb0UsSUFBQUEsMENBQW9DLEVBQUNELG1CQUN4RGxGLE9BQU9lLGtCQUNQZCxPQUFPaUYsa0JBQ1BuRixTQUFTNEMsUUFBUW9FLFlBQVksQ0FBQzlHLE9BQzlCQyxTQUFTeUMsUUFBUXFFLFlBQVksQ0FBQy9HLE9BQzlCRSxXQUFXO29CQUVqQk8sZUFBZSxJQS9ZZlosYUErWWdDQyxRQUFRQyxNQUFNQyxNQUFNQyxRQUFRQztnQkFDOUQ7Z0JBRUEsT0FBT087WUFDVDs7O1lBRU8yRyxLQUFBQTttQkFBUCxTQUFPQSxnQ0FBZ0NDLDJCQUEyQixFQUFFdEMsV0FBVztnQkFDN0UsSUFBSUU7Z0JBRUosSUFBTSxBQUFFcUMsV0FBYUMsYUFBSSxDQUFqQkQsVUFDRkUsZUFBZS9ILGtCQUFrQjRIO2dCQUV2Q3BDLG1CQUFtQnZGLHNCQUFzQjJIO2dCQUV6QyxJQUFNSSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQzVDLGNBQzVDckMsVUFBVStFLGNBQ1Z6SCxPQUFPaUYsa0JBQ1BuRixTQUFTaUYsWUFBWStCLFlBQVksQ0FBQzlHLE9BQ2xDQyxTQUFTOEUsWUFBWWdDLFlBQVksQ0FBQy9HLE9BQ2xDYyxtQkFBbUJvRSxJQUFBQSwwQ0FBb0MsRUFBQ0QsbUJBQ3hEbEYsT0FBT2Usa0JBQ1BaLFdBQVdvSCxTQUFTTSxnQkFBZ0IsQ0FBQ0osY0FBYzlFLFVBQ25EakMsZUFBZSxJQXJhbkJaLGFBcWFvQ0MsUUFBUUMsTUFBTUMsTUFBTUMsUUFBUUM7Z0JBRWxFLE9BQU9PO1lBQ1Q7OztXQXhhSVo7O0FBMmFOZ0ksT0FBT0MsTUFBTSxDQUFDUCxhQUFJLEVBQUU7SUFDbEIxSCxjQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixTQUFTNEMsMkJBQTJCeEIsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7SUFDeEUsSUFBSXFCLG9CQUFvQjtJQUV4QixJQUFNb0UsWUFBWTNGLE1BQU1aLE9BQU8sSUFDekJ3Ryx3QkFBd0JsSCwyQkFBMkJpSDtJQUV6RCxJQUFJQywwQkFBMEIsTUFBTTtRQUNsQyxJQUFNLEFBQUVoSCxlQUFpQjBILGFBQUksQ0FBckIxSCxjQUNGNkMsVUFBVXZCLGlCQUNWVixlQUFlWixhQUFhOEcsYUFBYSxDQUFDQyxXQUFXbEU7UUFFM0RGLG9CQUFvQi9CLGNBQWMsR0FBRztJQUN2QztJQUVBLE9BQU8rQjtBQUNUO0FBRUEsU0FBU2tCLG1DQUFtQ2hDLFNBQVMsRUFBRVIsY0FBYyxFQUFFQyxlQUFlO0lBQ3BGLElBQUlzQyx3QkFBd0I7SUFFNUIsSUFBTXdELGdCQUFnQnZGLFVBQVVyQixPQUFPLElBQ2pDNkcsNEJBQTRCdEgsK0JBQStCcUg7SUFFakUsSUFBSUMsOEJBQThCLE1BQU07UUFDdEMsSUFBTSxBQUFFckgsZUFBaUIwSCxhQUFJLENBQXJCMUgsY0FDRjZDLFVBQVV2QixpQkFDVlYsZUFBZVosYUFBYW1ILGlCQUFpQixDQUFDQyxlQUFldkU7UUFFbkVlLHdCQUF3QmhELGNBQWMsR0FBRztJQUMzQztJQUVBLE9BQU9nRDtBQUNUIn0=