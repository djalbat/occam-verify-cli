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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../context/partial/metavariable"));
var _constants = require("../constants");
var _json = require("../utilities/json");
var _context = require("../utilities/context");
var _unification = require("../utilities/unification");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Metavariable;
var _default = (0, _ontology.define)((_Metavariable = /*#__PURE__*/ function() {
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
            key: "setNode",
            value: function setNode(node) {
                this.node = node;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "setMetaType",
            value: function setMetaType(metaType) {
                this.metaType = metaType;
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                var name = parameter.getName(), nameMatches = name === this.name, parameterMatches = nameMatches; ///
                return parameterMatches;
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
            key: "isMetaTypeEqualTo",
            value: function isMetaTypeEqualTo(metaType) {
                return this.metaType.isEqualTo(metaType);
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(metavariable) {
                var metavariableString = metavariable.getString(), equalTo = metavariableString === this.string;
                return equalTo;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies;
                var metavariableString = this.string; ///
                context.trace("Verifying the '".concat(metavariableString, "' metavariable..."));
                var metavariable = this, generalContext = context, specificContext = context, metavariablePresent = generalContext.isMetavariablePresent(metavariable, generalContext, specificContext);
                verifies = metavariablePresent; ///
                if (verifies) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable."));
                }
                return verifies;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, context) {
                var verifiesGivenMetaType = false;
                var metavariableString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type..."));
                var metavariable = this; ///
                var specificContext = context, generalContext = context; ///
                metavariable = generalContext.findMetavariable(metavariable, generalContext, specificContext);
                if (metavariable !== null) {
                    var metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);
                    verifiesGivenMetaType = metavariableMetaTypeEqualToMetaType; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnifies = false;
                var frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var frameMetavariableUnifies = this.unifyFrameMetavariable(frame, substitutions, generalContext, specificContext);
                if (frameMetavariableUnifies) {
                    frameUnifies = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);
                        if (substitutionFrameEqualToFrame) {
                            frameUnifies = true;
                        }
                    } else {
                        var FrameSubstitution = _ontology.default.FrameSubstitution, context = specificContext, metavariable1 = this, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        frameUnifies = true;
                    }
                }
                if (frameUnifies) {
                    specificContext.debug("...unified the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable."));
                }
                return frameUnifies;
            }
        },
        {
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, generalContext, specificContext) {
                var referenceUnifies = false;
                var referenceString = reference.getString(), metavariableString = this.string;
                specificContext.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable..."));
                var referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);
                if (referenceMetavariableUnifies) {
                    referenceUnifies = true;
                } else {
                    var context = specificContext, metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference, context);
                        if (substitutionReferenceEqualToReference) {
                            referenceUnifies = true;
                        }
                    } else {
                        var ReferenceSubstitution = _ontology.default.ReferenceSubstitution, metavariable1 = this, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context), substitution1 = referenceSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        referenceUnifies = true;
                    }
                }
                if (referenceUnifies) {
                    specificContext.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable."));
                }
                return referenceUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
                var statementUnifies = false;
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);
                if (statementMetavariableUnifies) {
                    statementUnifies = true;
                } else {
                    var context = specificContext, metavariable = this, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);
                    if (substitutionPresent) {
                        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                        var substitutionStatementEqualToStatement = substitution.isStatementEqualToStatement(statement, context);
                        if (substitutionStatementEqualToStatement) {
                            statementUnifies = true;
                        }
                    } else {
                        var StatementSubstitution = _ontology.default.StatementSubstitution, metavariable1 = this, statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, context);
                        statementUnifies = true;
                    }
                }
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, generalContext, specificContext) {
                var metavariableUnifies;
                var generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
                specificContext.trace("Unifying the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable..."));
                metavariableUnifies = (0, _unification.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                if (metavariableUnifies) {
                    specificContext.debug("...unified the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable."));
                }
                return metavariableUnifies;
            }
        },
        {
            key: "unifyFrameMetavariable",
            value: function unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
                var frameMetavariableUnifies = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var frameString = frame.getString();
                    if (frameString === this.string) {
                        frameMetavariableUnifies = true;
                    } else {
                        var context = specificContext, metavariable = (0, _context.metavariableFromFrame)(frame, context);
                        if (metavariable !== null) {
                            var frameMetavariable = metavariable, metavariableString = this.string, frameMetavariableString = frameMetavariable.getString();
                            specificContext.trace("Unifying the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var specificMetavariable = frameMetavariable, generalMetavariable = this, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            frameMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                            if (frameMetavariableUnifies) {
                                specificContext.debug("...unified the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return frameMetavariableUnifies;
            }
        },
        {
            key: "unifyReferenceMetavariable",
            value: function unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext) {
                var referenceMetavariableUnifies = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var referenceString = reference.getString();
                    if (referenceString === this.string) {
                        referenceMetavariableUnifies = true;
                    } else {
                        var metavariable = reference.getMetavariable();
                        var referenceMetavariable = metavariable, metavariableString = this.string, referenceMetavariableString = referenceMetavariable.getString();
                        specificContext.trace("Unifying the reference's ".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                        var specificMetavariable = referenceMetavariable, generalMetavariable = this, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                        referenceMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                        if (referenceMetavariableUnifies) {
                            specificContext.debug("...unified the reference's '".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                        }
                    }
                }
                return referenceMetavariableUnifies;
            }
        },
        {
            key: "unifyStatementMetavariable",
            value: function unifyStatementMetavariable(statement, substitutions, generalContext, specificContext) {
                var statementMetavariableUnifies = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var statementString = statement.getString();
                    if (statementString === this.string) {
                        statementMetavariableUnifies = true;
                    } else {
                        var context = specificContext, metavariable = (0, _context.metavariableFromStatement)(statement, context);
                        if (metavariable !== null) {
                            var statementMetavariable = metavariable, metavariableString = this.string, statementMetavariableString = statementMetavariable.getString();
                            specificContext.trace("Unifying the statement's ".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var specificMetavariable = statementMetavariable, generalMetavariable = this, metavariableUnifiesIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            statementMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                            if (statementMetavariableUnifies) {
                                specificContext.debug("...unified the statement's '".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return statementMetavariableUnifies;
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
            value: function fromJSON(json, context) {
                var string = json.string, lexer = context.getLexer(), parser = context.getParser(), metavariablePartialContext = _metavariable.default.fromStringLexerAndParser(string, lexer, parser), metavariableTokens = metavariablePartialContext.getMetavariableTokens(), metavariableNode = metavariablePartialContext.getMetavariableNode(), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, node = metavariableNode, tokens = metavariableTokens, type = (0, _json.typeFromJSON)(json, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                return metavariable;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, context) {
                var metavariableNode = labelNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                return metavariable;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var metavariable = null;
                var singularMetavariableNode = frameNode.getSingularMetavariableNode();
                if (singularMetavariableNode !== null) {
                    var metavariableNode = singularMetavariableNode; ///
                    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                }
                return metavariable;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, context) {
                var metavariableNode = referenceNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                return metavariable;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var metavariable = null;
                var metavariableNode = statementNode.getMetavariableNode();
                if (metavariableNode !== null) {
                    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                }
                return metavariable;
            }
        },
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var metavariableNode = declarationNode.getMetavariableNode(), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                return metavariable;
            }
        },
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode, context) {
                var metavariable = null;
                if (metavariableNode !== null) {
                    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                }
                return metavariable;
            }
        },
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var MetaType = _ontology.default.MetaType, metavariableNode = metavariableDeclarationNode.getMetavariableNode(), type = typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                metavariable.setType(type);
                metavariable.setMetaType(metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}(), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _ontology.default.Metavariable, metavariableName = metavariableNode.getMetavariableName(), type = null, name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), metaType = null, metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    return metavariable;
}
function typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var type = null;
    var typeNode = metavariableDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        var nominalTypeName = typeNode.getNominalTypeName();
        type = context.findTypeByNominalTypeName(nominalTypeName);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZSwgbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHRoaXMubmFtZSksXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IG5hbWVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwYXJhbWV0ZXJNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChtZXRhdmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBnZW5lcmFsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVzID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpO1xuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5pc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBpZiAoZnJhbWVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZShmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVTdHJpbmcgPSBmcmFtZU1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgICBjb25zdCBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGZyYW1lTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSBmcmFtZSdzICcke2ZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmcgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgcmVmZXJlbmNlJ3MgJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSByZWZlcmVuY2UncyAnJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmcgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBzdGF0ZW1lbnQncyAke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHN0YXRlbWVudCdzICcke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQgPSBNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVUb2tlbnMgPSBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbm9kZSwgdG9rZW5zLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZSA9IE1ldGFUeXBlLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIG1ldGF2YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgbWV0YXZhcmlhYmxlLnNldE1ldGFUeXBlKG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBtZXRhVHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGVOb2RlKCk7XG5cbiAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwibmFtZSIsInR5cGUiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0Tm9kZSIsInNldFRva2VucyIsInNldE5hbWUiLCJzZXRUeXBlIiwic2V0TWV0YVR5cGUiLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsIm5hbWVNYXRjaGVzIiwicGFyYW1ldGVyTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZXF1YWxUbyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInRyYWNlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiZGVidWciLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUiLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJvbnRvbG9neSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJ0eXBlRnJvbUpTT04iLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dFQVZxQjttRUFDa0I7eUJBR1Y7b0JBQ2dCO3VCQUVvQjsyQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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