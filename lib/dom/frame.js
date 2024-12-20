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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerified = this.verifyDeclarations(assignments, stated, context);
                if (declarationsVerified) {
                    var metavariablesVerified = this.verifyMetavariables(assignments, stated, context);
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
            value: function verifyDeclarations(assignments, stated, context) {
                var declarationsVerified;
                var frameString = this.string, declarationsString = declarationsStringFromDeclarations(this.declarations);
                context.trace("Verifying the '".concat(frameString, "' frame's '").concat(declarationsString, "' declarations..."));
                stated = true; ///
                assignments = null; ///
                declarationsVerified = this.declarations.every(function(declaration) {
                    var frame = null, declarationVerified = declaration.verify(frame, assignments, stated, context);
                    return declarationVerified;
                });
                if (declarationsVerified) {
                    context.debug("...verified the '".concat(frameString, "' frame's '").concat(declarationsString, "' declarations."));
                }
                return declarationsVerified;
            }
        },
        {
            key: "verifyMetavariables",
            value: function verifyMetavariables(assignments, stated, context) {
                var metavariablesVerified;
                var frameString = this.string, metavariablesString = metavariablesStringFromDeclarations(this.metavariables);
                context.trace("Verifying the '".concat(frameString, "' frame's '").concat(metavariablesString, "' metavariables..."));
                metavariablesVerified = this.metavariables.every(function(metavariable) {
                    var metavariableVerified = metavariable.verify(context);
                    return metavariableVerified;
                });
                if (metavariablesVerified) {
                    context.debug("...verified the '".concat(frameString, "' frame's '").concat(metavariablesString, "' metavariables."));
                }
                return metavariablesVerified;
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
function declarationsStringFromDeclarations(declarations) {
    var declarationsString = declarations.reduce(function(declarationsString, declaration) {
        var declarationString = declaration.getString();
        declarationsString = declarationsString === null ? declarationString : "".concat(declarationsString, ", ").concat(declarationString);
        return declarationsString;
    }, null);
    return declarationsString;
}
function metavariablesStringFromDeclarations(metavariable) {
    var metavariablesString = metavariable.reduce(function(metavariablesString, metavariable) {
        var metavariableString = metavariable.getString();
        metavariablesString = metavariablesString === null ? metavariableString : "".concat(metavariablesString, ", ").concat(metavariableString);
        return metavariablesString;
    }, null);
    return metavariablesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpLFxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29udGFpbmVkQXNzZXJ0aW9uL2ZyYW1lXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWV0YXZhcmlhYmxlID0gZmlyc3QodGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb25zLi4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5ldmVyeSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lID0gbnVsbCwgLy8vXG4gICAgICAgICAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc1N0cmluZyA9IG1ldGF2YXJpYWJsZXNTdHJpbmdGcm9tRGVjbGFyYXRpb25zKHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlcy4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgIH0pO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApXG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLmRlY2xhcmF0aW9ucy5zb21lKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gZGVjbGFyYXRpb24udW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IG1ldGFMZW1tYU1ldGF0aGVvcmVtLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgLy8vXG5cbiAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZX0nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgIF0sXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZU5vZGVzLm1hcCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICBjb25zdCBkZWNsYXJhdGlvbnNTdHJpbmcgPSBkZWNsYXJhdGlvbnMucmVkdWNlKChkZWNsYXJhdGlvbnNTdHJpbmcsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSBkZWNsYXJhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IChkZWNsYXJhdGlvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNTdHJpbmd9LCAke2RlY2xhcmF0aW9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc1N0cmluZyA9IG1ldGF2YXJpYWJsZS5yZWR1Y2UoKG1ldGF2YXJpYWJsZXNTdHJpbmcsIG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSAobWV0YXZhcmlhYmxlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21ldGF2YXJpYWJsZXNTdHJpbmd9LCAke21ldGF2YXJpYWJsZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwidHJhY2UiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJkZWNsYXJhdGlvbnNTdHJpbmciLCJkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zIiwiZXZlcnkiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVzU3RyaW5nIiwibWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic29tZSIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUiLCJuYW1lIiwiZG9tIiwiTWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJyZWR1Y2UiLCJkZWNsYXJhdGlv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