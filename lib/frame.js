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
            value: function unifySubstitution(substitution, localContext) {
                var substitutionUnified = false;
                var substitutionString = substitution.getString();
                localContext.trace("Unifying the '".concat(substitutionString, "' substitution..."));
                if (!substitutionUnified) {
                    substitutionUnified = this.declarations.some(function(declaration) {
                        var substitutionUnified = declaration.unifySubstitution(substitution, localContext);
                        if (substitutionUnified) {
                            return true;
                        }
                    });
                }
                if (!substitutionUnified) {
                    substitutionUnified = this.metavariables.some(function(metavariable) {
                        var substitutionUnified = metavariable.unifySubstitution(substitution, localContext);
                        if (substitutionUnified) {
                            return true;
                        }
                    });
                }
                if (substitutionUnified) {
                    localContext.debug("...unified the '".concat(substitutionString, "' substitution..."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, localContext) {
                var _this = this;
                var metaLemmaMetatheoremUnified;
                var metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                localContext.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem..."));
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution, localContext);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                metaLemmaMetatheoremUnified = substitutionsUnified; ///
                if (metaLemmaMetatheoremUnified) {
                    localContext.debug("...unified the '".concat(metaLemmaMetatheoremString, "' meta-lemma or metatheorem."));
                }
                return metaLemmaMetatheoremUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremOrConjecture",
            value: function unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, localContext) {
                var _this = this;
                var axiomLemmaTheoremOrConjectureUnified;
                var axiomLemmaTheoremStringOrConjecture = axiomLemmaTheoremOrConjecture.getString();
                localContext.trace("Unifying the '".concat(axiomLemmaTheoremStringOrConjecture, "' axiom, lemma, theorem or conjecture..."));
                var substitutions = axiomLemmaTheoremOrConjecture.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution, localContext);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                axiomLemmaTheoremOrConjectureUnified = substitutionsUnified; ///
                if (axiomLemmaTheoremOrConjectureUnified) {
                    localContext.debug("...unified the '".concat(axiomLemmaTheoremStringOrConjecture, "' axiom, lemma, theorem or conjecture."));
                }
                return axiomLemmaTheoremOrConjectureUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerified = this.declarations.every(function(declaration) {
                    var declarationVerified = declaration.verify(assignments, stated, localContext);
                    return declarationVerified;
                });
                if (declarationsVerified) {
                    var metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(localContext);
                        return metavariableVerified;
                    });
                    if (metavariablesVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(assignments, localContext);
                        }
                        if (verifiedWhenStated || verifiedWhenDerived) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var verifiedWhenStated = false;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame when stated..."));
                var declarationsLength = this.declarations.length;
                if (declarationsLength > 0) {
                    localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."));
                } else {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength > 1) {
                        localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."));
                    } else {
                        verifiedWhenStated = true;
                    }
                }
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(frameString, "' frame when stated."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, localContext) {
                var verifiedWhenDerived;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame when derived..."));
                verifiedWhenDerived = true;
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(frameString, "' frame when derived."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, localContext) {
                var verifiedGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                localContext.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verified = this.verify(assignments, stated, localContext);
                    verifiedGivenMetaType = verified; ///
                }
                if (verifiedGivenMetaType) {
                    localContext.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiedGivenMetaType;
            }
        }
    ], [
        {
            key: "fromFrameNode",
            value: function fromFrameNode(frameNode, localContext) {
                var frame = null;
                if (frameNode !== null) {
                    var Declaration = _shim.default.Declaration, Metavariable = _shim.default.Metavariable, declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                        var declaration = Declaration.fromDeclarationNode(declarationNode, localContext);
                        return declaration;
                    }), metavariables = metavariableNodes.map(function(metavariableNode) {
                        var metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext);
                        return metavariable;
                    }), node = frameNode, string = localContext.nodeAsString(node);
                    frame = new Frame(string, node, declarations, metavariables);
                }
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var frame = null;
                var frameNode = frameNodeQuery(definedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var Metavariable = _shim.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = localContext.nodeAsString(node);
                        frame = new Frame(string, node, declarations, metavariables);
                    }
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var frame = null;
                var frameNode = frameNodeQuery(containedAssertionNode);
                if (frameNode !== null) {
                    var metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        var Metavariable = _shim.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
                            metavariable
                        ], node = frameNode, string = localContext.nodeAsString(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYClcblxuICAgIGlmICghc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nfScgbWV0YS1sZW1tYSBvciBtZXRhdGhlb3JlbS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAvLy9cblxuICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkO1xuXG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25WZXJpZmllZCA9IGRlY2xhcmF0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gc3RhdGVkLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aGVuIGRlcml2ZWQuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2hlbiBkZXJpdmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlY2xhcmF0aW9uLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRnJhbWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiJdLCJuYW1lcyI6WyJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsImRlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImRlY2xhcmF0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1ldGF2YXJpYWJsZXNMZW5ndGgiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImRlY2xhcmF0aW9uIiwiZGVidWciLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lIiwiRGVjbGFyYXRpb24iLCJzaGltIiwiTWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJXQTs7O2VBQUE7Ozt5QkF6VytCOzJEQUVkOzZCQUVvQjtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsYUFDM0JDLHdCQUF3QkMsSUFBQUEsaUJBQVUs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