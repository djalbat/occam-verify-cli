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
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _metaTypeNames = require("./metaTypeNames");
var _query = require("./utilities/query");
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
var frameNodeQuery = (0, _query.nodeQuery)("/*/frame"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
var first = _necessary.arrayUtilities.first;
var Frame = /*#__PURE__*/ function() {
    function Frame(string, node, tokens, declarations, metavariables) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.declarations = declarations;
        this.metavariables = metavariables;
    }
    _create_class(Frame, [
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
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                return this.metavariables;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var declarationsLength = this.declarations.length;
                if (declarationsLength === 0) {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength === 1) {
                        var firstMetavariable = first(this.metavariables);
                        metavariable = firstMetavariable; ///
                    }
                }
                return metavariable;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var equalTo = false;
                if (frame !== null) {
                    var frameString = frame.getString();
                    equalTo = frameString === this.string;
                }
                return equalTo;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, context) {
                var substitutionUnified = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(frameString, "' frame..."));
                if (!substitutionUnified) {
                    substitutionUnified = this.declarations.some(function(declaration) {
                        var substitutionUnified = declaration.unifySubstitution(substitution, context);
                        if (substitutionUnified) {
                            return true;
                        }
                    });
                }
                if (!substitutionUnified) {
                    substitutionUnified = this.metavariables.some(function(metavariable) {
                        var substitutionUnified = metavariable.unifySubstitution(substitution, context);
                        if (substitutionUnified) {
                            return true;
                        }
                    });
                }
                if (substitutionUnified) {
                    context.debug("...unified the '".concat(substitutionString, "' substitution with the '").concat(frameString, "' frame..."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var _this = this;
                var metaLemmaMetatheoremUnified;
                var frameString = this.string, metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(frameString, "' frame..."));
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution, context);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                metaLemmaMetatheoremUnified = substitutionsUnified; ///
                if (metaLemmaMetatheoremUnified) {
                    context.debug("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(frameString, "' frame."));
                }
                return metaLemmaMetatheoremUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremOrConjecture",
            value: function unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, context) {
                var _this = this;
                var axiomLemmaTheoremOrConjectureUnified;
                var frameString = this.string, axiomLemmaTheoremStringOrConjecture = axiomLemmaTheoremOrConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremStringOrConjecture, "' axiom, lemma, theorem or conjecture with the '").concat(frameString, "' frame..."));
                var substitutions = axiomLemmaTheoremOrConjecture.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution, context);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                axiomLemmaTheoremOrConjectureUnified = substitutionsUnified; ///
                if (axiomLemmaTheoremOrConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremStringOrConjecture, "' axiom, lemma, theorem or conjecture with the '").concat(frameString, "' frame."));
                }
                return axiomLemmaTheoremOrConjectureUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerified = this.verifyDeclarations(this.declarations, assignments, stated, context);
                if (declarationsVerified) {
                    var metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(context);
                        return metavariableVerified;
                    });
                    if (metavariablesVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(assignments, context);
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verified;
            }
        },
        {
            key: "verifyDeclarations",
            value: function verifyDeclarations(declarations, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var frame = null; ///
                var declarationsVerified = declarations.every(function(declaration) {
                    var declarationVerified = declaration.verify(frame, assignments, stated, context);
                    return declarationVerified;
                });
                return declarationsVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var declarationsLength = this.declarations.length;
                if (declarationsLength > 0) {
                    context.trace("The '".concat(frameString, "' stated frame cannot have declarations."));
                } else {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength > 1) {
                        context.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."));
                    } else {
                        verifiedWhenStated = true;
                    }
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, context) {
                var verifiedWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiedWhenDerived = true;
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiedGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated, context);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiedGivenMetaType;
            }
        }
    ], [
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, context) {
                var frame = null;
                if (frameNode !== null) {
                    var Declaration = _shim.default.Declaration, Metavariable = _shim.default.Metavariable, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
                        return declaration;
                    }), metavariables = metavariableNodes.map(function(metavariableNode) {
                        var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                        return metavariable;
                    });
                    frame = new Frame(string, node, tokens, declarations, metavariables);
                }
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = frameNodeQuery(definedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var Metavariable = _shim.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node);
                        frame = new Frame(string, node, tokens, declarations, metavariables);
                    }
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = frameNodeQuery(containedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var Metavariable = _shim.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node);
                        frame = new Frame(string, node, tokens, declarations, metavariables);
                    }
                }
                return frame;
            }
        }
    ]);
    return Frame;
}();
Object.assign(_shim.default, {
    Frame: Frame
});
var _default = Frame;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApXG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZX0nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKHRoaXMuZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9ucy5ldmVyeSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgRGVjbGFyYXRpb24sIE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKTtcblxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdLCJuYW1lcyI6WyJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZXNMZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZXF1YWxUbyIsImZyYW1lU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImRlY2xhcmF0aW9uIiwiZGVidWciLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJldmVyeVN1YnN0aXR1dGlvbiIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5RGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwiZXZlcnkiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWNsYXJhdGlvblZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiRGVjbGFyYXRpb24iLCJzaGltIiwiTWV0YXZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoi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