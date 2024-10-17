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
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = false;
                var metavariable = this.getMetavariable();
                if (metavariable !== null) {
                    metavariableNameMatches = metavariable.matchMetavariableName(metavariableName);
                }
                return metavariableNameMatches;
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
                var metaLemmaOrMetaTheoremUnified;
                var metaLemmaMetatheoremString = metaLemmaMetatheorem.getString();
                localContext.trace("Unifying the '".concat(metaLemmaMetatheoremString, "' metatheorem or meta-lemma..."));
                var substitutions = metaLemmaMetatheorem.getSubstitutions(), substitutionsUnified = substitutions.everySubstitution(function(substitution) {
                    var substitutionUnified = _this.unifySubstitution(substitution, localContext);
                    if (substitutionUnified) {
                        return true;
                    }
                });
                metaLemmaOrMetaTheoremUnified = substitutionsUnified; ///
                if (metaLemmaOrMetaTheoremUnified) {
                    localContext.debug("...unified the '".concat(metaLemmaMetatheoremString, "' metatheorem or meta-lemma."));
                }
                return metaLemmaOrMetaTheoremUnified;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified;
                var frameString = this.string; ///
                localContext.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerified = this.declarations.every(function(declaration) {
                    var declarationVerified = declaration.verify(assignments, stated, localContext);
                    return declarationVerified;
                }), metavariablesVerified = this.metavariables.every(function(metavariable) {
                    var metavariableVerified = metavariable.verify(localContext);
                    return metavariableVerified;
                });
                if (declarationsVerified && metavariablesVerified) {
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
                if (declarationsLength === 0) {
                    var metavariablesLength = this.metavariables.length;
                    if (metavariablesLength === 1) {
                        verifiedWhenStated = true;
                    } else {
                        localContext.trace("The '".concat(frameString, "' stated frame cannot have more than one metavariable."));
                    }
                } else {
                    localContext.trace("The '".concat(frameString, "' stated frame cannot have declarations."));
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
                    var declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
                        var declaration = _declaration.default.fromDeclarationNode(declarationNode, localContext);
                        return declaration;
                    }), metavariables = metavariableNodes.map(function(metavariableNode) {
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext);
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
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
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
                        var metavariable = _metavariable.default.fromMetavariableNode(metavariableNode, localContext), declarations = [], metavariables = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9mcmFtZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2goZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYClcblxuICAgIGlmICghc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBkZWNsYXJhdGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbSBvciBtZXRhLWxlbW1hLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hT3JNZXRhVGhlb3JlbVVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbSBvciBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5ldmVyeSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQgJiYgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aGVuIHN0YXRlZC4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH1cblxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aGVuIHN0YXRlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2hlbiBkZXJpdmVkLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdoZW4gZGVyaXZlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlTm9kZXMubWFwKChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBGcmFtZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lO1xuIl0sIm5hbWVzIjpbImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImZpcnN0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9uVW5pZmllZCIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImRlY2xhcmF0aW9uIiwiZGVidWciLCJ1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZnJhbWVTdHJpbmciLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsImV2ZXJ5IiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStVQTs7O2VBQUE7Ozt5QkE3VStCOzJEQUVkO2tFQUNPO21FQUNDOzZCQUVZO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMzQkMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0Msd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLHlCQUNsQ0kseUJBQXlCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFDLElBQU0sQUFBRUcsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBQSxBQUFNRSxzQkFBTjthQUFNQSxNQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQURqREo7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFMbkJKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMscUJBQXFCLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxNQUFNO2dCQUVuRCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ1QsYUFBYSxDQUFDUSxNQUFNO29CQUVyRCxJQUFJQyx3QkFBd0IsR0FBRzt3QkFDN0IsSUFBTUMsb0JBQW9CaEIsTUFBTSxJQUFJLENBQUNNLGFBQWE7d0JBRWxETSxlQUFlSSxtQkFBbUIsR0FBRztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1OLGVBQWUsSUFBSSxDQUFDRCxlQUFlO2dCQUV6QyxJQUFJQyxpQkFBaUIsTUFBTTtvQkFDekJNLG1CQUFtQk4sYUFBYUosT0FBTztnQkFDekM7Z0JBRUEsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTO2dCQUN0QixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDakIsSUFBSSxDQUFDa0IsS0FBSyxDQUFDRjtnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNYixlQUFlLElBQUksQ0FBQ0QsZUFBZTtnQkFFekMsSUFBSUMsaUJBQWlCLE1BQU07b0JBQ3pCYSwwQkFBMEJiLGFBQWFXLHFCQUFxQixDQUFDQztnQkFDL0Q7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLFlBQVksRUFBRUMsWUFBWTtnQkFDMUMsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyxxQkFBcUJILGFBQWFwQixTQUFTO2dCQUVqRHFCLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGlCQUFtQyxPQUFuQkQsb0JBQW1CO2dCQUV2RCxJQUFJLENBQUNELHFCQUFxQjtvQkFDeEJBLHNCQUFzQixJQUFJLENBQUN4QixZQUFZLENBQUMyQixJQUFJLENBQUMsU0FBQ0M7d0JBQzVDLElBQU1KLHNCQUFzQkksWUFBWVAsaUJBQWlCLENBQUNDLGNBQWNDO3dCQUV4RSxJQUFJQyxxQkFBcUI7NEJBQ3ZCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQSxxQkFBcUI7b0JBQ3hCQSxzQkFBc0IsSUFBSSxDQUFDdkIsYUFBYSxDQUFDMEIsSUFBSSxDQUFDLFNBQUNwQjt3QkFDN0MsSUFBTWlCLHNCQUFzQmpCLGFBQWFjLGlCQUFpQixDQUFDQyxjQUFjQzt3QkFFekUsSUFBSUMscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLHFCQUFxQjtvQkFDdkJELGFBQWFNLEtBQUssQ0FBQyxBQUFDLG1CQUFxQyxPQUFuQkosb0JBQW1CO2dCQUMzRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsb0JBQW9CLEVBQUVSLFlBQVk7O2dCQUM1RCxJQUFJUztnQkFFSixJQUFNQyw2QkFBNkJGLHFCQUFxQjdCLFNBQVM7Z0JBRWpFcUIsYUFBYUcsS0FBSyxDQUFDLEFBQUMsaUJBQTJDLE9BQTNCTyw0QkFBMkI7Z0JBRS9ELElBQU1DLGdCQUFnQkgscUJBQXFCSSxnQkFBZ0IsSUFDckRDLHVCQUF1QkYsY0FBY0csaUJBQWlCLENBQUMsU0FBQ2Y7b0JBQ3RELElBQU1FLHNCQUFzQixNQUFLSCxpQkFBaUIsQ0FBQ0MsY0FBY0M7b0JBRWpFLElBQUlDLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTlEsZ0NBQWdDSSxzQkFBc0IsR0FBRztnQkFFekQsSUFBSUosK0JBQStCO29CQUNqQ1QsYUFBYU0sS0FBSyxDQUFDLEFBQUMsbUJBQTZDLE9BQTNCSSw0QkFBMkI7Z0JBQ25FO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVqQixZQUFZO2dCQUN0QyxJQUFJa0I7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLENBQUM1QyxNQUFNLEVBQUcsR0FBRztnQkFFckN5QixhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWmdCLGFBQVk7Z0JBRWpELElBQU1DLHVCQUF1QixJQUFJLENBQUMzQyxZQUFZLENBQUM0QyxLQUFLLENBQUMsU0FBQ2hCO29CQUM5QyxJQUFNaUIsc0JBQXNCakIsWUFBWVUsTUFBTSxDQUFDQyxhQUFhQyxRQUFRakI7b0JBRXBFLE9BQU9zQjtnQkFDVCxJQUNBQyx3QkFBd0IsSUFBSSxDQUFDN0MsYUFBYSxDQUFDMkMsS0FBSyxDQUFDLFNBQUNyQztvQkFDaEQsSUFBTXdDLHVCQUF1QnhDLGFBQWErQixNQUFNLENBQUNmO29CQUVqRCxPQUFPd0I7Z0JBQ1Q7Z0JBRU4sSUFBSUosd0JBQXdCRyx1QkFBdUI7b0JBQ2pELElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO29CQUUxQixJQUFJVCxRQUFRO3dCQUNWUSxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1gsYUFBYWhCO29CQUMxRCxPQUFPO3dCQUNMMEIsc0JBQXNCLElBQUksQ0FBQ0UsaUJBQWlCLENBQUNaLGFBQWFoQjtvQkFDNUQ7b0JBRUEsSUFBSXlCLHNCQUFzQkMscUJBQXFCO3dCQUM3Q1IsV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNabEIsYUFBYU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVphLGFBQVk7Z0JBQ3JEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCWCxXQUFXLEVBQUVoQixZQUFZO2dCQUN4QyxJQUFJeUIscUJBQXFCO2dCQUV6QixJQUFNTixjQUFjLElBQUksQ0FBQzVDLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ3lCLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaZ0IsYUFBWTtnQkFFakQsSUFBTWxDLHFCQUFxQixJQUFJLENBQUNSLFlBQVksQ0FBQ1MsTUFBTTtnQkFFbkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCLElBQU1FLHNCQUFzQixJQUFJLENBQUNULGFBQWEsQ0FBQ1EsTUFBTTtvQkFFckQsSUFBSUMsd0JBQXdCLEdBQUc7d0JBQzdCc0MscUJBQXFCO29CQUN2QixPQUFPO3dCQUNMekIsYUFBYUcsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWmdCLGFBQVk7b0JBQ3pDO2dCQUNGLE9BQU87b0JBQ0xuQixhQUFhRyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaZ0IsYUFBWTtnQkFDekM7Z0JBR0EsSUFBSU0sb0JBQW9CO29CQUN0QnpCLGFBQWFNLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaYSxhQUFZO2dCQUNyRDtnQkFFQSxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlosV0FBVyxFQUFFaEIsWUFBWTtnQkFDekMsSUFBSTBCO2dCQUVKLElBQU1QLGNBQWMsSUFBSSxDQUFDNUMsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDeUIsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpnQixhQUFZO2dCQUVqRE8sc0JBQXNCO2dCQUV0QixJQUFJQSxxQkFBcUI7b0JBQ3ZCMUIsYUFBYU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVphLGFBQVk7Z0JBQ3JEO2dCQUVBLE9BQU9PO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxRQUFRLEVBQUVkLFdBQVcsRUFBRUMsTUFBTSxFQUFFakIsWUFBWTtnQkFDN0QsSUFBSStCLHdCQUF3QjtnQkFFNUIsSUFBTVosY0FBYyxJQUFJLENBQUM1QyxNQUFNLEVBQ3pCeUQsaUJBQWlCRixTQUFTbkQsU0FBUztnQkFFekNxQixhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBa0Q2QixPQUFqQ2IsYUFBWSx1QkFBb0MsT0FBZmEsZ0JBQWU7Z0JBRXJGLElBQU1DLGVBQWVILFNBQVNJLE9BQU87Z0JBRXJDLElBQUlELGlCQUFpQkUsbUNBQW9CLEVBQUU7b0JBQ3pDLElBQU1qQixXQUFXLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxhQUFhQyxRQUFRakI7b0JBRWxEK0Isd0JBQXdCYixVQUFVLEdBQUc7Z0JBQ3ZDO2dCQUVBLElBQUlhLHVCQUF1QjtvQkFDekIvQixhQUFhTSxLQUFLLENBQUMsQUFBQyxvQkFBb0QwQixPQUFqQ2IsYUFBWSx1QkFBb0MsT0FBZmEsZ0JBQWU7Z0JBQ3pGO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsY0FBYzVDLFNBQVMsRUFBRVEsWUFBWTtnQkFDMUMsSUFBSXFDLFFBQVE7Z0JBRVosSUFBSTdDLGNBQWMsTUFBTTtvQkFDdEIsSUFBTThDLG1CQUFtQnRFLHNCQUFzQndCLFlBQ3pDK0Msb0JBQW9CcEUsdUJBQXVCcUIsWUFDM0NmLGVBQWU2RCxpQkFBaUJFLEdBQUcsQ0FBQyxTQUFDQzt3QkFDbkMsSUFBTXBDLGNBQWNxQyxvQkFBVyxDQUFDQyxtQkFBbUIsQ0FBQ0YsaUJBQWlCekM7d0JBRXJFLE9BQU9LO29CQUNULElBQ0EzQixnQkFBZ0I2RCxrQkFBa0JDLEdBQUcsQ0FBQyxTQUFDbEQ7d0JBQ3JDLElBQU1OLGVBQWU0RCxxQkFBWSxDQUFDQyxvQkFBb0IsQ0FBQ3ZELGtCQUFrQlU7d0JBRXpFLE9BQU9oQjtvQkFDVCxJQUNBUixPQUFPZ0IsV0FDUGpCLFNBQVN5QixhQUFhOEMsWUFBWSxDQUFDdEU7b0JBRXpDNkQsUUFBUSxJQWxRUi9ELE1Ba1FrQkMsUUFBUUMsTUFBTUMsY0FBY0M7Z0JBQ2hEO2dCQUVBLE9BQU8yRDtZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRWhELFlBQVk7Z0JBQ2hFLElBQUlxQyxRQUFRO2dCQUVaLElBQU03QyxZQUFZMUIsZUFBZWtGO2dCQUVqQyxJQUFJeEQsY0FBYyxNQUFNO29CQUN0QixJQUFNRixtQkFBbUJwQixzQkFBc0JzQjtvQkFFL0MsSUFBSUYscUJBQXFCLE1BQU07d0JBQzdCLElBQU1OLGVBQWU0RCxxQkFBWSxDQUFDQyxvQkFBb0IsQ0FBQ3ZELGtCQUFrQlUsZUFDbkV2QixlQUFlLEVBQUUsRUFDakJDLGdCQUFnQjs0QkFDZE07eUJBQ0QsRUFDRFIsT0FBT2dCLFdBQ1BqQixTQUFTeUIsYUFBYThDLFlBQVksQ0FBQ3RFO3dCQUV6QzZELFFBQVEsSUF6UlYvRCxNQXlSb0JDLFFBQVFDLE1BQU1DLGNBQWNDO29CQUNoRDtnQkFDRjtnQkFFQSxPQUFPMkQ7WUFDVDs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUVsRCxZQUFZO2dCQUNwRSxJQUFJcUMsUUFBUTtnQkFFWixJQUFNN0MsWUFBWTFCLGVBQWVvRjtnQkFFakMsSUFBSTFELGNBQWMsTUFBTTtvQkFDdEIsSUFBTUYsbUJBQW1CcEIsc0JBQXNCc0I7b0JBRS9DLElBQUlGLHFCQUFxQixNQUFNO3dCQUM3QixJQUFNTixlQUFlNEQscUJBQVksQ0FBQ0Msb0JBQW9CLENBQUN2RCxrQkFBa0JVLGVBQ25FdkIsZUFBZSxFQUFFLEVBQ2pCQyxnQkFBZ0I7NEJBQ2RNO3lCQUNELEVBQ0RSLE9BQU9nQixXQUNQakIsU0FBU3lCLGFBQWE4QyxZQUFZLENBQUN0RTt3QkFFekM2RCxRQUFRLElBalRWL0QsTUFpVG9CQyxRQUFRQyxNQUFNQyxjQUFjQztvQkFDaEQ7Z0JBQ0Y7Z0JBRUEsT0FBTzJEO1lBQ1Q7OztXQXRUSS9EOztBQXlUTjZFLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCL0UsT0FBQUE7QUFDRjtJQUVBLFdBQWVBIn0=