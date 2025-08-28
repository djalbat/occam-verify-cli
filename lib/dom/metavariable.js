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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Metavariable = /*#__PURE__*/ function() {
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
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = name === this.name;
                return nameMatches;
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
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatched = false;
                var metavariableString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(metavariableString, "' metavariable..."));
                var metavariable = this, judgement = context.findJudgementByMetavariable(metavariable);
                if (judgement !== null) {
                    var declaration = judgement.getDeclaration();
                    substitutionMatched = declaration.matchSubstitution(substitution, context);
                } else {
                    context.debug("The '".concat(metavariableString, "' metavariable does not have a judgement."));
                }
                if (substitutionMatched) {
                    context.debug("...matched the '".concat(substitutionString, "' substitution against the '").concat(metavariableString, "' metavariable."));
                }
                return substitutionMatched;
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
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualTo(frame);
                        if (substitutionFrameEqualToFrame) {
                            frameUnifies = true;
                        }
                    } else {
                        var FrameSubstitution = _dom.default.FrameSubstitution, context = specificContext, metavariable1 = this, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
                        substitutions.addSubstitution(substitution1, specificContext);
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
                var referenceString = reference.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable..."));
                var referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);
                if (referenceMetavariableUnifies) {
                    referenceUnifies = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualTo(reference);
                        if (substitutionReferenceEqualToReference) {
                            referenceUnifies = true;
                        }
                    } else {
                        var ReferenceSubstitution = _dom.default.ReferenceSubstitution, context = specificContext, metavariable1 = this, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context), substitution1 = referenceSubstitution; ///
                        substitutions.addSubstitution(substitution1, specificContext);
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
                        var substitutionStatementEqualToStatement = substitution.isStatementEqualTo(statement, context);
                        if (substitutionStatementEqualToStatement) {
                            statementUnifies = true;
                        }
                    } else {
                        var StatementSubstitution = _dom.default.StatementSubstitution, metavariable1 = this, statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, specificContext);
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
                        var metavariableString = this.string, referenceMetavariable = reference.getMetavariable(), referenceMetavariableString = referenceMetavariable.getString();
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
                var MetaType = _dom.default.MetaType, metavariableNode = metavariableDeclarationNode.getMetavariableNode(), type = typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                metavariable.setType(type);
                metavariable.setMetaType(metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}(), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _dom.default.Metavariable, metavariableName = metavariableNode.getMetavariableName(), type = null, name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), metaType = null, metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    return metavariable;
}
function typeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var type = null;
    var typeNode = metavariableDeclarationNode.getTypeNode();
    if (typeNode !== null) {
        var typeName = typeNode.getTypeName();
        type = context.findTypeByTypeName(typeName);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9wYXJ0aWFsL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZSwgbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTWV0YXZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChtZXRhdmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICBzdWJzdGl0dXRpb25NYXRjaGVkID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBkb2VzIG5vdCBoYXZlIGEganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBnZW5lcmFsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVzID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpO1xuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmlzRnJhbWVFcXVhbFRvKGZyYW1lKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUpIHtcbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5pc1N0YXRlbWVudEVxdWFsVG8oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyA9IGZyYW1lTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmcgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgcmVmZXJlbmNlJ3MgJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSByZWZlcmVuY2UncyAnJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmcgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBzdGF0ZW1lbnQncyAke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHN0YXRlbWVudCdzICcke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQgPSBNZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVUb2tlbnMgPSBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5nZXRNZXRhdmFyaWFibGVUb2tlbnMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbWV0YXZhcmlhYmxlVG9rZW5zLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBuZXcgTWV0YXZhcmlhYmxlKHN0cmluZywgbm9kZSwgdG9rZW5zLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgIG1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZShtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZU5vZGUoKTtcblxuICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJNZXRhdmFyaWFibGUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwibmFtZSIsInR5cGUiLCJtZXRhVHlwZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldE1ldGFUeXBlIiwic2V0Tm9kZSIsInNldFRva2VucyIsInNldE5hbWUiLCJzZXRUeXBlIiwic2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZWQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlIiwidW5pZnlGcmFtZSIsImZyYW1lIiwic3Vic3RpdHV0aW9ucyIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNGcmFtZUVxdWFsVG8iLCJGcmFtZVN1YnN0aXR1dGlvbiIsImRvbSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUbyIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNTdGF0ZW1lbnRFcXVhbFRvIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJ0eXBlRnJvbUpTT04iLCJtZXRhVHlwZUZyb21KU09OIiwiZnJvbUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGFUeXBlIiwidHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJ0eXBlTm9kZSIsImdldFR5cGVOb2RlIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO21FQUN1Qjt5QkFHVjtvQkFDZ0I7dUJBRW9COzJCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRSxXQUFlQSxJQUFBQSxnQkFBVyxpQ0FBQzthQUFNQyxhQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRHZCTjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFB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