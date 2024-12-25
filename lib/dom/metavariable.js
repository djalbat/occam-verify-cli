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
var _type = require("../dom/type");
var _constants = require("../constants");
var _json = require("../utilities/json");
var _name = require("../utilities/name");
var _verification = require("../utilities/verification");
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
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metavariable"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), labelMetavariableNodeQuery = (0, _query.nodeQuery)("/label/metavariable"), referenceMetavariableNodeQuery = (0, _query.nodeQuery)("/reference/metavariable"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable");
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
                context.trace("Matching the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable..."));
                var metavariable = this, judgement = context.findJudgementByMetavariable(metavariable);
                if (judgement !== null) {
                    var declaration = judgement.getDeclaration();
                    substitutionMatched = declaration.matchSubstitution(substitution, context);
                } else {
                    context.debug("The '".concat(metavariableString, "' metavariable does not have a judgement."));
                }
                if (substitutionMatched) {
                    context.debug("...matched the '".concat(substitutionString, "' substitution with the '").concat(metavariableString, "' metavariable."));
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
                        fileContext.debug("The '".concat(metavariableName, "' metavariable has already been declared."));
                    } else {
                        var variableName = this.name, variablePresent = fileContext.isVariablePresentByVariableName(variableName);
                        if (variablePresent) {
                            fileContext.debug("A '".concat(metavariableName, "' variable has already been declared."));
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
                        substitutions.addSubstitution(substitution1, context);
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
                        var context = specificContext, metavariable = (0, _verification.metavariableFromFrame)(frame, context);
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
                        var context = specificContext, metavariable = (0, _verification.metavariableFromStatement)(statement, context);
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
                var string = json.string, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metavariablePartialContext = _metavariable.default.fromStringLexerAndParser(string, lexer, parser), metavariableTokens = metavariablePartialContext.getMetavariableTokens(), metavariableNode = metavariablePartialContext.getMetavariableNode(), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, tokens = metavariableTokens, type = (0, _json.typeFromJSON)(json, fileContext), metaType = (0, _json.metaTypeFromJSON)(json, fileContext), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
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
                var Type = _dom.default.Type, MetaType = _dom.default.MetaType, localContext = _local.default.fromFileContext(fileContext), context = localContext, metavariableNode = metavariableNodeQuery(metavariableDeclarationNode), node = metavariableNode, string = fileContext.nodeAsString(node), tokens = fileContext.nodeAsTokens(node), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, type = Type.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metaType = MetaType.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = new Metavariable(string, node, tokens, name, type, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}(), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));
function metavariableFromMetavariableNode(metavariableNode, context) {
    var Metavariable = _dom.default.Metavariable, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), name = metavariableName, node = metavariableNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), type = null, metaType = null, metavariable = new Metavariable(string, node, tokens, name, type, metaType);
    return metavariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5pbXBvcnQgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vcmVmZXJlbmNlXCI7XG5pbXBvcnQgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vc3RhdGVtZW50XCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcGFydGlhbC9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1ldGFUeXBlRnJvbUpTT04sIG1ldGFUeXBlVG9NZXRhVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZSwgbWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBsYWJlbE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sYWJlbC9tZXRhdmFyaWFibGVcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBNZXRhdmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGlzRXF1YWxUbyhtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChtZXRhdmFyaWFibGVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IGp1ZGdlbWVudC5nZXREZWNsYXJhdGlvbigpO1xuXG4gICAgICBzdWJzdGl0dXRpb25NYXRjaGVkID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBkb2VzIG5vdCBoYXZlIGEganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBnZW5lcmFsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkID0gbWV0YXZhcmlhYmxlUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVjbGFyZWQoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYEEgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdHlwZVZlcmlmaWVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZWNsYXJlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKTtcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBmcmFtZVVuaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5pc0ZyYW1lRXF1YWxUbyhmcmFtZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgcmVmZXJlbmNlVW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uaXNSZWZlcmVuY2VFcXVhbFRvKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IFJlZmVyZW5jZVN1YnN0aXR1dGlvbi5mcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uaXNTdGF0ZW1lbnRFcXVhbFRvKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcyxcbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgaWYgKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZykge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWUoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nID0gZnJhbWVNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBmcmFtZSdzICcke2ZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBmcmFtZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllZCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VTdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZyA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSByZWZlcmVuY2UncyAke3JlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICBjb25zdCBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQgPSBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHJlZmVyZW5jZSdzICcke3JlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRTdHJpbmcgPT09IHRoaXMuc3RyaW5nKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIHN0YXRlbWVudCdzICR7c3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZWQpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgc3RhdGVtZW50J3MgJyR7c3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0ID0gTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVG9rZW5zID0gbWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQuZ2V0TWV0YXZhcmlhYmxlVG9rZW5zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0LmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBtZXRhdmFyaWFibGVUb2tlbnMsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUsIE1ldGFUeXBlIH0gPSBkb20sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRva2VucyA9IGZpbGVDb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG5ldyBNZXRhdmFyaWFibGUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG1ldGFUeXBlID0gbnVsbCxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShzdHJpbmcsIG5vZGUsIHRva2VucywgbmFtZSwgdHlwZSwgbWV0YVR5cGUpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwibGFiZWxNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk1ldGF2YXJpYWJsZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJuYW1lIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZXF1YWxUbyIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZWQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uIiwiZ2V0RGVjbGFyYXRpb24iLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVkIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidmVyaWZ5VHlwZSIsImZpbGVDb250ZXh0IiwidHlwZVZlcmlmaWVkIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwidmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlIiwidW5pZnlGcmFtZSIsImZyYW1lIiwic3Vic3RpdHV0aW9ucyIsImZyYW1lVW5pZmllZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVkIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNGcmFtZUVxdWFsVG8iLCJmcmFtZVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllZCIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUbyIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25TdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNTdGF0ZW1lbnRFcXVhbFRvIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGF2YXJpYWJsZVBhcnRpYWxDb250ZXh0IiwiTWV0YXZhcmlhYmxlUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiLCJtZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVUb2tlbnMiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwidHlwZUZyb21KU09OIiwibWV0YVR5cGVGcm9tSlNPTiIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJsYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJNZXRhVHlwZSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyJdLCJtYXBwaW5ncyI6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