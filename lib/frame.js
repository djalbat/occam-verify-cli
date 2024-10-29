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
    function Frame(string, node, declarations, metavariables) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
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
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = null;
                var metavariable = this.getMetavariable();
                if (metavariable !== null) {
                    metavariableNode = metavariable.getNode();
                }
                return metavariableNode;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                var frameNodeMatches = this.node.match(frameNode);
                return frameNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = false;
                var metavariable = this.getMetavariable();
                if (metavariable !== null) {
                    metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
                }
                return metavariableNodeMatches;
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
                    var Declaration = _shim.default.Declaration, Metavariable = _shim.default.Metavariable, declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
                        return declaration;
                    }), metavariables = metavariableNodes.map(function(metavariableNode) {
                        var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                        return metavariable;
                    }), node = frameNode, string = context.nodeAsString(node);
                    frame = new Frame(string, node, declarations, metavariables);
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
                        ], node = frameNode, string = context.nodeAsString(node);
                        frame = new Frame(string, node, declarations, metavariables);
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
                        ], node = frameNode, string = context.nodeAsString(node);
                        frame = new Frame(string, node, declarations, metavariables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGRlY2xhcmF0aW9uLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYClcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0ICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBmcmFtZSA9IG51bGw7IC8vL1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSBkZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlY2xhcmF0aW9uLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlTm9kZXMubWFwKChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdLCJuYW1lcyI6WyJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsImRlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZXNMZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJmcmFtZVN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImRlY2xhcmF0aW9uIiwiZGVidWciLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJldmVyeVN1YnN0aXR1dGlvbiIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsImRlY2xhcmF0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5RGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlc1ZlcmlmaWVkIiwiZXZlcnkiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJmcmFtZSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsInNoaW0iLCJNZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbk5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMFhBOzs7ZUFBQTs7O3lCQXhYK0I7MkRBRWQ7NkJBRW9CO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMzQkMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0Msd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUNsQ0kseUJBQXlCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFDLElBQU0sQUFBRUcsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBQSxBQUFNRSxzQkFBTjthQUFNQSxNQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQURqREo7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFMbkJKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMscUJBQXFCLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxNQUFNO2dCQUVuRCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ1QsYUFBYSxDQUFDUSxNQUFNO29CQUVyRCxJQUFJQyx3QkFBd0IsR0FBRzt3QkFDN0IsSUFBTUMsb0JBQW9CaEIsTUFBTSxJQUFJLENBQUNNLGFBQWE7d0JBRWxETSxlQUFlSSxtQkFBbUIsR0FBRztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1OLGVBQWUsSUFBSSxDQUFDRCxlQUFlO2dCQUV6QyxJQUFJQyxpQkFBaUIsTUFBTTtvQkFDekJNLG1CQUFtQk4sYUFBYUosT0FBTztnQkFDekM7Z0JBRUEsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTO2dCQUN0QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDRjtnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JMLGdCQUFnQjtnQkFDcEMsSUFBSU0sMEJBQTBCO2dCQUU5QixJQUFNWixlQUFlLElBQUksQ0FBQ0QsZUFBZTtnQkFFekMsSUFBSUMsaUJBQWlCLE1BQU07b0JBQ3pCWSwwQkFBMEJaLGFBQWFXLHFCQUFxQixDQUFDTDtnQkFDL0Q7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsT0FBTztnQkFDckMsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyxjQUFjLElBQUksQ0FBQzFCLE1BQU0sRUFDekIyQixxQkFBcUJKLGFBQWFuQixTQUFTO2dCQUVqRG9CLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUE4REYsT0FBOUNDLG9CQUFtQiw2QkFBdUMsT0FBWkQsYUFBWTtnQkFFekYsSUFBSSxDQUFDRCxxQkFBcUI7b0JBQ3hCQSxzQkFBc0IsSUFBSSxDQUFDdkIsWUFBWSxDQUFDMkIsSUFBSSxDQUFDLFNBQUNDO3dCQUM1QyxJQUFNTCxzQkFBc0JLLFlBQVlSLGlCQUFpQixDQUFDQyxjQUFjQzt3QkFFeEUsSUFBSUMscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0EscUJBQXFCO29CQUN4QkEsc0JBQXNCLElBQUksQ0FBQ3RCLGFBQWEsQ0FBQzBCLElBQUksQ0FBQyxTQUFDcEI7d0JBQzdDLElBQU1nQixzQkFBc0JoQixhQUFhYSxpQkFBaUIsQ0FBQ0MsY0FBY0M7d0JBRXpFLElBQUlDLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxxQkFBcUI7b0JBQ3ZCRCxRQUFRTyxLQUFLLENBQUMsQUFBQyxtQkFBZ0VMLE9BQTlDQyxvQkFBbUIsNkJBQXVDLE9BQVpELGFBQVk7Z0JBQzdGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxvQkFBb0IsRUFBRVQsT0FBTzs7Z0JBQ3JELElBQUlVO2dCQUVKLElBQU1SLGNBQWMsSUFBSSxDQUFDMUIsTUFBTSxFQUN6Qm1DLDZCQUE2QkYscUJBQXFCN0IsU0FBUztnQkFFakVvQixRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBbUZGLE9BQW5FUyw0QkFBMkIsMENBQW9ELE9BQVpULGFBQVk7Z0JBRTlHLElBQU1VLGdCQUFnQkgscUJBQXFCSSxnQkFBZ0IsSUFDckRDLHVCQUF1QkYsY0FBY0csaUJBQWlCLENBQUMsU0FBQ2hCO29CQUN0RCxJQUFNRSxzQkFBc0IsTUFBS0gsaUJBQWlCLENBQUNDLGNBQWNDO29CQUVqRSxJQUFJQyxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU5TLDhCQUE4Qkksc0JBQXNCLEdBQUc7Z0JBRXZELElBQUlKLDZCQUE2QjtvQkFDL0JWLFFBQVFPLEtBQUssQ0FBQyxBQUFDLG1CQUFxRkwsT0FBbkVTLDRCQUEyQiwwQ0FBb0QsT0FBWlQsYUFBWTtnQkFDbEg7Z0JBRUEsT0FBT1E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNDLDZCQUE2QixFQUFFakIsT0FBTzs7Z0JBQ3ZFLElBQUlrQjtnQkFFSixJQUFNaEIsY0FBYyxJQUFJLENBQUMxQixNQUFNLEVBQ3pCMkMsc0NBQXNDRiw4QkFBOEJyQyxTQUFTO2dCQUVuRm9CLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFzR0YsT0FBdEZpQixxQ0FBb0Msb0RBQThELE9BQVpqQixhQUFZO2dCQUVqSSxJQUFNVSxnQkFBZ0JLLDhCQUE4QkosZ0JBQWdCLElBQzlEQyx1QkFBdUJGLGNBQWNHLGlCQUFpQixDQUFDLFNBQUNoQjtvQkFDdEQsSUFBTUUsc0JBQXNCLE1BQUtILGlCQUFpQixDQUFDQyxjQUFjQztvQkFFakUsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOaUIsdUNBQXVDSixzQkFBc0IsR0FBRztnQkFFaEUsSUFBSUksc0NBQXNDO29CQUN4Q2xCLFFBQVFPLEtBQUssQ0FBQyxBQUFDLG1CQUF3R0wsT0FBdEZpQixxQ0FBb0Msb0RBQThELE9BQVpqQixhQUFZO2dCQUNySTtnQkFFQSxPQUFPZ0I7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRXRCLE9BQU87Z0JBQ2pDLElBQUl1QixXQUFXO2dCQUVmLElBQU1yQixjQUFjLElBQUksQ0FBQzFCLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ3dCLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZO2dCQUU1QyxJQUFNc0IsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDL0MsWUFBWSxFQUFFMkMsYUFBYUMsUUFBUXRCO2dCQUU3RixJQUFJd0Isc0JBQXNCO29CQUN4QixJQUFPRSx3QkFBd0IsSUFBSSxDQUFDL0MsYUFBYSxDQUFDZ0QsS0FBSyxDQUFDLFNBQUMxQzt3QkFDdkQsSUFBTTJDLHVCQUF1QjNDLGFBQWFtQyxNQUFNLENBQUNwQjt3QkFFakQsT0FBTzRCO29CQUNUO29CQUVBLElBQUlGLHVCQUF1Qjt3QkFDekIsSUFBSUcscUJBQXFCLE9BQ3JCQyxzQkFBc0I7d0JBRTFCLElBQUlSLFFBQVE7NEJBQ1ZPLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDVixhQUFhckI7d0JBQzFELE9BQU87NEJBQ0w4QixzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ1gsYUFBYXJCO3dCQUM1RDt3QkFFQSxJQUFJNkIsc0JBQXNCQyxxQkFBcUI7NEJBQzdDUCxXQUFXO3dCQUNiO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1p2QixRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CL0MsWUFBWSxFQUFFMkMsV0FBVyxFQUFFQyxNQUFNLEVBQUV0QixPQUFPO2dCQUMzRHNCLFNBQVMsTUFBTyxHQUFHO2dCQUVuQkQsY0FBYyxNQUFNLEdBQUc7Z0JBRXZCLElBQU1ZLFFBQVEsTUFBTSxHQUFHO2dCQUV2QixJQUFNVCx1QkFBdUI5QyxhQUFhaUQsS0FBSyxDQUFDLFNBQUNyQjtvQkFDL0MsSUFBTTRCLHNCQUFzQjVCLFlBQVljLE1BQU0sQ0FBQ2EsT0FBT1osYUFBYUMsUUFBUXRCO29CQUUzRSxPQUFPa0M7Z0JBQ1Q7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJWLFdBQVcsRUFBRXJCLE9BQU87Z0JBQ25DLElBQUk2QixxQkFBcUI7Z0JBRXpCLElBQU0zQixjQUFjLElBQUksQ0FBQzFCLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ3dCLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZO2dCQUU1QyxJQUFNaEIscUJBQXFCLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxNQUFNO2dCQUVuRCxJQUFJRCxxQkFBcUIsR0FBRztvQkFDMUJjLFFBQVFJLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVk7Z0JBQ3BDLE9BQU87b0JBQ0wsSUFBTWQsc0JBQXNCLElBQUksQ0FBQ1QsYUFBYSxDQUFDUSxNQUFNO29CQUVyRCxJQUFJQyxzQkFBc0IsR0FBRzt3QkFDM0JZLFFBQVFJLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpGLGFBQVk7b0JBQ3BDLE9BQU87d0JBQ0wyQixxQkFBcUI7b0JBQ3ZCO2dCQUNGO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEI3QixRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBTzJCO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCWCxXQUFXLEVBQUVyQixPQUFPO2dCQUNwQyxJQUFJOEI7Z0JBRUosSUFBTTVCLGNBQWMsSUFBSSxDQUFDMUIsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDd0IsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVk7Z0JBRTVDNEIsc0JBQXNCO2dCQUV0QixJQUFJQSxxQkFBcUI7b0JBQ3ZCOUIsUUFBUU8sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpMLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU80QjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsUUFBUSxFQUFFZixXQUFXLEVBQUVDLE1BQU0sRUFBRXRCLE9BQU87Z0JBQ3hELElBQUlxQyx3QkFBd0I7Z0JBRTVCLElBQU1uQyxjQUFjLElBQUksQ0FBQzFCLE1BQU0sRUFDekI4RCxpQkFBaUJGLFNBQVN4RCxTQUFTO2dCQUV6Q29CLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUFrRGtDLE9BQWpDcEMsYUFBWSx1QkFBb0MsT0FBZm9DLGdCQUFlO2dCQUVoRixJQUFNQyxlQUFlSCxTQUFTSSxPQUFPO2dCQUVyQyxJQUFJRCxpQkFBaUJFLG1DQUFvQixFQUFFO29CQUN6QyxJQUFNbEIsV0FBVyxJQUFJLENBQUNILE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUXRCO29CQUVsRHFDLHdCQUF3QmQsVUFBVSxHQUFHO2dCQUN2QztnQkFFQSxJQUFJYyx1QkFBdUI7b0JBQ3pCckMsUUFBUU8sS0FBSyxDQUFDLEFBQUMsb0JBQW9EK0IsT0FBakNwQyxhQUFZLHVCQUFvQyxPQUFmb0MsZ0JBQWU7Z0JBQ3BGO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2pELFNBQVMsRUFBRU8sT0FBTztnQkFDckMsSUFBSWlDLFFBQVE7Z0JBRVosSUFBSXhDLGNBQWMsTUFBTTtvQkFDdEIsSUFBUWtELGNBQThCQyxhQUFJLENBQWxDRCxhQUFhRSxlQUFpQkQsYUFBSSxDQUFyQkMsY0FDZkMsbUJBQW1CN0Usc0JBQXNCd0IsWUFDekNzRCxvQkFBb0IzRSx1QkFBdUJxQixZQUMzQ2YsZUFBZW9FLGlCQUFpQkUsR0FBRyxDQUFDLFNBQUNDO3dCQUNuQyxJQUFNM0MsY0FBY3FDLFlBQVlPLG1CQUFtQixDQUFDRCxpQkFBaUJqRDt3QkFFckUsT0FBT007b0JBQ1QsSUFDQTNCLGdCQUFnQm9FLGtCQUFrQkMsR0FBRyxDQUFDLFNBQUN6RDt3QkFDckMsSUFBTU4sZUFBZTRELGFBQWFNLG9CQUFvQixDQUFDNUQsa0JBQWtCUzt3QkFFekUsT0FBT2Y7b0JBQ1QsSUFDQVIsT0FBT2dCLFdBQ1BqQixTQUFTd0IsUUFBUW9ELFlBQVksQ0FBQzNFO29CQUVwQ3dELFFBQVEsSUE3U1IxRCxNQTZTa0JDLFFBQVFDLE1BQU1DLGNBQWNDO2dCQUNoRDtnQkFFQSxPQUFPc0Q7WUFDVDs7O1lBRU9vQixLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFdEQsT0FBTztnQkFDM0QsSUFBSWlDLFFBQVE7Z0JBRVosSUFBTXhDLFlBQVkxQixlQUFldUY7Z0JBRWpDLElBQUk3RCxjQUFjLE1BQU07b0JBQ3RCLElBQU1GLG1CQUFtQnBCLHNCQUFzQnNCO29CQUUvQyxJQUFJRixxQkFBcUIsTUFBTTt3QkFDN0IsSUFBTSxBQUFFc0QsZUFBaUJELGFBQUksQ0FBckJDLGNBQ0Y1RCxlQUFlNEQsYUFBYU0sb0JBQW9CLENBQUM1RCxrQkFBa0JTLFVBQ25FdEIsZUFBZSxFQUFFLEVBQ2pCQyxnQkFBZ0I7NEJBQ2RNO3lCQUNELEVBQ0RSLE9BQU9nQixXQUNQakIsU0FBU3dCLFFBQVFvRCxZQUFZLENBQUMzRTt3QkFFcEN3RCxRQUFRLElBclVWMUQsTUFxVW9CQyxRQUFRQyxNQUFNQyxjQUFjQztvQkFDaEQ7Z0JBQ0Y7Z0JBRUEsT0FBT3NEO1lBQ1Q7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxzQkFBc0IsRUFBRXhELE9BQU87Z0JBQy9ELElBQUlpQyxRQUFRO2dCQUVaLElBQU14QyxZQUFZMUIsZUFBZXlGO2dCQUVqQyxJQUFJL0QsY0FBYyxNQUFNO29CQUN0QixJQUFNRixtQkFBbUJwQixzQkFBc0JzQjtvQkFFL0MsSUFBSUYscUJBQXFCLE1BQU07d0JBQzdCLElBQU0sQUFBRXNELGVBQWlCRCxhQUFJLENBQXJCQyxjQUNGNUQsZUFBZTRELGFBQWFNLG9CQUFvQixDQUFDNUQsa0JBQWtCUyxVQUNuRXRCLGVBQWUsRUFBRSxFQUNqQkMsZ0JBQWdCOzRCQUNkTTt5QkFDRCxFQUNEUixPQUFPZ0IsV0FDUGpCLFNBQVN3QixRQUFRb0QsWUFBWSxDQUFDM0U7d0JBRXBDd0QsUUFBUSxJQTlWVjFELE1BOFZvQkMsUUFBUUMsTUFBTUMsY0FBY0M7b0JBQ2hEO2dCQUNGO2dCQUVBLE9BQU9zRDtZQUNUOzs7V0FuV0kxRDs7QUFzV05rRixPQUFPQyxNQUFNLENBQUNkLGFBQUksRUFBRTtJQUNsQnJFLE9BQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9