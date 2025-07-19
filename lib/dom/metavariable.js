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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../substitution/frame"));
var _reference = /*#__PURE__*/ _interop_require_default(require("../substitution/reference"));
var _statement = /*#__PURE__*/ _interop_require_default(require("../substitution/statement"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../context/partial/metavariable"));
var _query = require("../utilities/query");
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
var frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), labelMetavariableNodeQuery = (0, _query.nodeQuery)("/label/metavariable"), referenceMetavariableNodeQuery = (0, _query.nodeQuery)("/reference/metavariable"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable"), metavariableDeclarationMetavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), metavariableDeclarationMetavariableTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable/type");
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
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnified = false;
                var frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var frameMetavariableUnified = this.unifyFrameMetavariable(frame, substitutions, generalContext, specificContext);
                if (frameMetavariableUnified) {
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
                        substitutions.addSubstitution(substitution1, specificContext);
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
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, generalContext, specificContext) {
                var referenceUnified = false;
                var referenceString = reference.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable..."));
                var referenceMetavariableUnified = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);
                if (referenceMetavariableUnified) {
                    referenceUnified = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualTo(reference);
                        if (substitutionReferenceEqualToReference) {
                            referenceUnified = true;
                        }
                    } else {
                        var context = specificContext, metavariable1 = this, referenceSubstitution = _reference.default.fromReferenceAndMetavariable(reference, metavariable1, context), substitution1 = referenceSubstitution; ///
                        substitutions.addSubstitution(substitution1, specificContext);
                        referenceUnified = true;
                    }
                }
                if (referenceUnified) {
                    specificContext.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable."));
                }
                return referenceUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
                var statementUnified = false;
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementMetavariableUnified = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);
                if (statementMetavariableUnified) {
                    statementUnified = true;
                } else {
                    var context = specificContext, metavariable = this, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);
                    if (substitutionPresent) {
                        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                        var substitutionStatementEqualToStatement = substitution.isStatementEqualTo(statement, context);
                        if (substitutionStatementEqualToStatement) {
                            statementUnified = true;
                        }
                    } else {
                        var metavariable1 = this, statementSubstitution = _statement.default.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, specificContext);
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
                specificContext.trace("Unifying the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable..."));
                metavariableUnified = (0, _unification.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                if (metavariableUnified) {
                    specificContext.debug("...unified the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifyFrameMetavariable",
            value: function unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
                var frameMetavariableUnified = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var frameString = frame.getString();
                    if (frameString === this.string) {
                        frameMetavariableUnified = true;
                    } else {
                        var context = specificContext, metavariable = (0, _context.metavariableFromFrame)(frame, context);
                        if (metavariable !== null) {
                            var frameMetavariable = metavariable, metavariableString = this.string, frameMetavariableString = frameMetavariable.getString();
                            specificContext.trace("Unifying the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var specificMetavariable = frameMetavariable, generalMetavariable = this, metavariableUnifiedIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            frameMetavariableUnified = metavariableUnifiedIntrinsically; ///
                            if (frameMetavariableUnified) {
                                specificContext.debug("...unified the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return frameMetavariableUnified;
            }
        },
        {
            key: "unifyReferenceMetavariable",
            value: function unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext) {
                var referenceMetavariableUnified = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var referenceString = reference.getString();
                    if (referenceString === this.string) {
                        referenceMetavariableUnified = true;
                    } else {
                        var metavariableString = this.string, referenceMetavariable = reference.getMetavariable(), referenceMetavariableString = referenceMetavariable.getString();
                        specificContext.trace("Unifying the reference's ".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                        var specificMetavariable = referenceMetavariable, generalMetavariable = this, metavariableUnifiedIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                        referenceMetavariableUnified = metavariableUnifiedIntrinsically; ///
                        if (referenceMetavariableUnified) {
                            specificContext.debug("...unified the reference's '".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                        }
                    }
                }
                return referenceMetavariableUnified;
            }
        },
        {
            key: "unifyStatementMetavariable",
            value: function unifyStatementMetavariable(statement, substitutions, generalContext, specificContext) {
                var statementMetavariableUnified = false;
                var generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var statementString = statement.getString();
                    if (statementString === this.string) {
                        statementMetavariableUnified = true;
                    } else {
                        var context = specificContext, metavariable = (0, _context.metavariableFromStatement)(statement, context);
                        if (metavariable !== null) {
                            var statementMetavariable = metavariable, metavariableString = this.string, statementMetavariableString = statementMetavariable.getString();
                            specificContext.trace("Unifying the statement's ".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var specificMetavariable = statementMetavariable, generalMetavariable = this, metavariableUnifiedIntrinsically = (0, _unification.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            statementMetavariableUnified = metavariableUnifiedIntrinsically; ///
                            if (statementMetavariableUnified) {
                                specificContext.debug("...unified the statement's '".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return statementMetavariableUnified;
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariablePartialContext = _metavariable.default.fromStringLexerAndParser(string, lexer, parser), metavariableTokens = metavariablePartialContext.getMetavariableTokens(), metavariableNode = metavariablePartialContext.getMetavariableNode(), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, node = metavariableNode, tokens = metavariableTokens, type = (0, _json.typeFromJSON)(json, fileContext), metaType = (0, _json.metaTypeFromJSON)(json, fileContext), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                return metavariable;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, context) {
                var labelMetavariableNode = labelMetavariableNodeQuery(labelNode), metavariableNode = labelMetavariableNode, metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                return metavariable;
            }
        },
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var metavariable = null;
                var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
                if (frameMetavariableNode !== null) {
                    var metavariableNode = frameMetavariableNode; ///
                    metavariable = metavariableFromMetavariableNode(metavariableNode, context);
                }
                return metavariable;
            }
        },
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, context) {
                var referenceMetavariableNode = referenceMetavariableNodeQuery(referenceNode), metavariableNode = referenceMetavariableNode, metavariable = metavariableFromMetavariableNode(metavariableNode, context);
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
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var MetaType = _dom.default.MetaType, metavariableDeclarationMetavariableNode = metavariableDeclarationMetavariableNodeQuery(metavariableDeclarationNode), metavariableNode = metavariableDeclarationMetavariableNode, localContext = _local.default.fromFileContext(fileContext), context = localContext, type = typeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = metavariableFromMetavariableNode(metavariableNode, context);
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
function typeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    var type = null;
    var metavariableDeclarationMetavariableTypeNode = metavariableDeclarationMetavariableTypeNodeQuery(metavariableDeclarationNode);
    if (metavariableDeclarationMetavariableTypeNode !== null) {
        var typeNode = metavariableDeclarationMetavariableTypeNode, typeName = typeNode.getTypeName();
        type = fileContext.findTypeByTypeName(typeName);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tRnJhbWUsIG1ldGF2YXJpYWJsZUZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHVuaWZ5TWV0YXZhcmlhYmxlLCB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBsYWJlbE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sYWJlbC9tZXRhdmFyaWFibGVcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKG5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKG1ldGF2YXJpYWJsZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0ganVkZ2VtZW50LmdldERlY2xhcmF0aW9uKCk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZWQgPSBkZWNsYXJhdGlvbi5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRvZXMgbm90IGhhdmUgYSBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBhZ2FpbnN0IHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBtZXRhdmFyaWFibGVQcmVzZW50OyAvLy9cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUgPSBzdWJzdGl0dXRpb24uaXNGcmFtZUVxdWFsVG8oZnJhbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSkge1xuICAgICAgICAgIGZyYW1lVW5pZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgcmVmZXJlbmNlVW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5pc1N0YXRlbWVudEVxdWFsVG8oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyA9IGZyYW1lTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmcgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgcmVmZXJlbmNlJ3MgJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSByZWZlcmVuY2UncyAnJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50U3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmcgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBzdGF0ZW1lbnQncyAke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHN0YXRlbWVudCdzICcke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG1ldGFUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCA9IE1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVRva2VucyA9IG1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0LmdldE1ldGF2YXJpYWJsZVRva2VucygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dC5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBtZXRhdmFyaWFibGVUb2tlbnMsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICBtZXRhdmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgIG1ldGF2YXJpYWJsZS5zZXRNZXRhVHlwZShtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGUgPSBudWxsO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICBpZiAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVUeXBlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZVR5cGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk1ldGF2YXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJuYW1lIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXROb2RlIiwic2V0VG9rZW5zIiwic2V0TmFtZSIsInNldFR5cGUiLCJzZXRNZXRhVHlwZSIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJpc0VxdWFsVG8iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlZCIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb24iLCJnZXREZWNsYXJhdGlvbiIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUiLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZnJhbWVVbmlmaWVkIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0ZyYW1lRXF1YWxUbyIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVkIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNSZWZlcmVuY2VFcXVhbFRvIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc1N0YXRlbWVudEVxdWFsVG8iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyIsInNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2VuZXJhbENvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwic3BlY2lmaWNDb250ZXh0RmlsZVBhdGgiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhdmFyaWFibGVQYXJ0aWFsQ29udGV4dCIsIk1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwibWV0YXZhcmlhYmxlVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlVG9rZW5zIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwidHlwZUZyb21KU09OIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJsYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIk1ldGFUeXBlIiwiZG9tIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZVR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7MkRBdEJnQjs0REFDUzs0REFDSztnRUFDSTtnRUFDQTttRUFDSztxQkFFYjt5QkFFRztvQkFDZ0I7dUJBRW9COzJCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxJQUFNQSw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMsd0JBQ3ZDRSxpQ0FBaUNGLElBQUFBLGdCQUFTLEVBQUMsNEJBQzNDRyxpQ0FBaUNILElBQUFBLGdCQUFTLEVBQUMsNEJBQzNDSSwrQ0FBK0NKLElBQUFBLGdCQUFTLEVBQUMsMENBQ3pESyxtREFBbURMLElBQUFBLGdCQUFTLEVBQUM7SUFFbkUsV0FBZU0sSUFBQUEsZ0JBQVcsaUNBQUM7YUFBTUMsYUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQUR2Qk47UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdB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