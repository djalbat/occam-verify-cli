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
                        frame = frameFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApXG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZX0nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKHRoaXMuZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgZnJhbWUgPSBudWxsLCAvLy9cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25WZXJpZmllZDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICBdLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImZpcnN0TWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZVN0cmluZyIsImVxdWFsVG8iLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJkZWJ1ZyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJldmVyeSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsIm5hbWUiLCJkb20iLCJNZXRhdmFyaWFibGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIkRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O3lCQWhCK0I7MkRBRWY7NkJBR3FCO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0Msd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHlCQUNsQ0MseUJBQXlCSCxJQUFBQSxpQkFBVSxFQUFDLHdCQUNwQ0ksaUNBQWlDRixJQUFBQSxnQkFBUyxFQUFDLDRCQUMzQ0csbUNBQW1DSCxJQUFBQSxnQkFBUyxFQUFD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