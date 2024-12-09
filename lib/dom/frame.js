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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _metaTypeNames = require("../metaTypeNames");
var _query = require("../utilities/query");
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
var _Frame;
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable"), definedAssertionFrameNodeQuery = (0, _query.nodeQuery)("/definedAssertion/frame"), containedAssertionFrameNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame");
var first = _necessary.arrayUtilities.first;
var _default = (0, _dom.domAssigned)((_Frame = /*#__PURE__*/ function() {
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
                var frameString = frame.getString(), equalTo = frameString === this.string;
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
                var declarationsVerified = declarations.every(function(declaration) {
                    var frame = null, declarationVerified = declaration.verify(frame, assignments, stated, context);
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
                    var node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarations = declarationsFromFrameNode(frameNode, context), metavariables = metavariablesFromFrameNode(frameNode, context);
                    frame = new Frame(string, node, tokens, declarations, metavariables);
                }
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var definedAssertionFrameNode = definedAssertionFrameNodeQuery(definedAssertionNode);
                if (definedAssertionFrameNode !== null) {
                    var frameNode = definedAssertionFrameNode, metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context);
                    }
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var containedAssertionFrameNode = containedAssertionFrameNodeQuery(containedAssertionNode);
                if (containedAssertionFrameNode !== null) {
                    var frameNode = containedAssertionFrameNode, metavariableNode = metavariableNodeQuery(frameNode);
                    if (metavariableNode !== null) {
                        frame = frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context);
                    }
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context) {
    var Frame = _dom.default.Frame, Metavariable = _dom.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), declarations = [], metavariables = [
        metavariable
    ], node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), frame = new Frame(string, node, tokens, declarations, metavariables);
    return frame;
}
function declarationsFromFrameNode(frameNode, context) {
    var Declaration = _dom.default.Declaration, declarationNodes = declarationNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
        return declaration;
    });
    return declarations;
}
function metavariablesFromFrameNode(frameNode, context) {
    var Metavariable = _dom.default.Metavariable, metavariableNodes = metavariableNodesQuery(frameNode), metavariables = metavariableNodes.map(function(metavariableNode) {
        var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
        return metavariable;
    });
    return metavariables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApXG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZX0nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKHRoaXMuZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZnJhbWUgPSBudWxsLCAvLy9cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgIF0sXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZU5vZGVzLm1hcCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJkZWNsYXJhdGlvbiIsImRlYnVnIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsImV2ZXJ5IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlIiwibmFtZSIsImRvbSIsIk1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7eUJBaEIrQjsyREFFZjs2QkFHcUI7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQ2xDQyx5QkFBeUJILElBQUFBLGlCQUFVLEVBQUMsd0JBQ3BDSSxpQ0FBaUNGLElBQUFBLGdCQUFTLEVBQUMsNEJBQzNDRyxtQ0FBbUNILElBQUFBLGdCQUFTLEVBQUM7QUFFbkQs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