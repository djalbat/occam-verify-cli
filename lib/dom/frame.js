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
var frameNodeQuery = (0, _query.nodeQuery)("/*/frame"), declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable");
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
                    var Declaration = _dom.default.Declaration, Metavariable = _dom.default.Metavariable, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarationNodes = declarationNodesQuery(frameNode), metavariableNodes = metavariableNodesQuery(frameNode), declarations = declarationNodes.map(function(declarationNode) {
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
                        var Metavariable = _dom.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), declarations = [], metavariables = [
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
                        var Metavariable = _dom.default.Metavariable, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), declarations = [], metavariables = [
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
}(), _define_property(_Frame, "name", "Frame"), _Frame));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovZnJhbWVcIiksXG4gICAgICBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIik7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllZCA9IGRlY2xhcmF0aW9uLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYClcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7IC8vL1xuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1TdHJpbmdPckNvbmplY3R1cmV9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNVbmlmaWVkID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNVbmlmaWVkOyAvLy9cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtU3RyaW5nT3JDb25qZWN0dXJlfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0ICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IGRlY2xhcmF0aW9ucy5ldmVyeSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lID0gbnVsbCwgLy8vXG4gICAgICAgICAgICBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGZyYW1lLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IERlY2xhcmF0aW9uLCBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gbWV0YXZhcmlhYmxlTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpO1xuXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKTtcblxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImVxdWFsVG8iLCJmcmFtZVN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJkZWNsYXJhdGlvbiIsImRlYnVnIiwidW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1TdHJpbmciLCJzdWJzdGl0dXRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNVbmlmaWVkIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbVN0cmluZ09yQ29uamVjdHVyZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsImV2ZXJ5IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVjbGFyYXRpb25WZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIkRlY2xhcmF0aW9uIiwiZG9tIiwiTWV0YXZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsIm1ldGF2YXJpYWJsZU5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7O3lCQWYrQjsyREFFZjs2QkFHcUI7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsYUFDM0JDLHdCQUF3QkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDbkNDLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDbENJLHlCQUF5QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQyxJQUFNLEFBQUVHLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGFBQWE7WUFDM0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMscUJBQXFCLElBQUksQ0FBQ1QsWUFBWSxDQUFDVSxNQUFNO2dCQUVuRCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ1YsYUFBYSxDQUFDUyxNQUFNO29CQUVyRCxJQUFJQyx3QkFBd0IsR0FBRzt3QkFDN0IsSUFBTUMsb0JBQW9CbkIsTUFBTSxJQUFJLENBQUNRLGFBQWE7d0JBRWxETyxlQUFlSSxtQkFBbUIsR0FBRztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLO2dCQUNiLElBQUlDLFVBQVU7Z0JBRWQsSUFBSUQsVUFBVSxNQUFNO29CQUNsQixJQUFNRSxjQUFjRixNQUFNWixTQUFTO29CQUVuQ2EsVUFBV0MsZ0JBQWdCLElBQUksQ0FBQ25CLE1BQU07Z0JBQ3hDO2dCQUVBLE9BQU9rQjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFQyxPQUFPO2dCQUNyQyxJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1KLGNBQWMsSUFBSSxDQUFDbkIsTUFBTSxFQUN6QndCLHFCQUFxQkgsYUFBYWhCLFNBQVM7Z0JBRWpEaUIsUUFBUUcsS0FBSyxDQUFDLEFBQUMsaUJBQThETixPQUE5Q0ssb0JBQW1CLDZCQUF1QyxPQUFaTCxhQUFZO2dCQUV6RixJQUFJLENBQUNJLHFCQUFxQjtvQkFDeEJBLHNCQUFzQixJQUFJLENBQUNwQixZQUFZLENBQUN1QixJQUFJLENBQUMsU0FBQ0M7d0JBQzVDLElBQU1KLHNCQUFzQkksWUFBWVAsaUJBQWlCLENBQUNDLGNBQWNDO3dCQUV4RSxJQUFJQyxxQkFBcUI7NEJBQ3ZCLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQSxxQkFBcUI7b0JBQ3hCQSxzQkFBc0IsSUFBSSxDQUFDbkIsYUFBYSxDQUFDc0IsSUFBSSxDQUFDLFNBQUNmO3dCQUM3QyxJQUFNWSxzQkFBc0JaLGFBQWFTLGlCQUFpQixDQUFDQyxjQUFjQzt3QkFFekUsSUFBSUMscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLHFCQUFxQjtvQkFDdkJELFFBQVFNLEtBQUssQ0FBQyxBQUFDLG1CQUFnRVQsT0FBOUNLLG9CQUFtQiw2QkFBdUMsT0FBWkwsYUFBWTtnQkFDN0Y7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLG9CQUFvQixFQUFFUixPQUFPOztnQkFDckQsSUFBSVM7Z0JBRUosSUFBTVosY0FBYyxJQUFJLENBQUNuQixNQUFNLEVBQ3pCZ0MsNkJBQTZCRixxQkFBcUJ6QixTQUFTO2dCQUVqRWlCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFtRk4sT0FBbkVhLDRCQUEyQiwwQ0FBb0QsT0FBWmIsYUFBWTtnQkFFOUcsSUFBTWMsZ0JBQWdCSCxxQkFBcUJJLGdCQUFnQixJQUNyREMsdUJBQXVCRixjQUFjRyxpQkFBaUIsQ0FBQyxTQUFDZjtvQkFDdEQsSUFBTUUsc0JBQXNCLE1BQUtILGlCQUFpQixDQUFDQyxjQUFjQztvQkFFakUsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOUSw4QkFBOEJJLHNCQUFzQixHQUFHO2dCQUV2RCxJQUFJSiw2QkFBNkI7b0JBQy9CVCxRQUFRTSxLQUFLLENBQUMsQUFBQyxtQkFBcUZULE9BQW5FYSw0QkFBMkIsMENBQW9ELE9BQVpiLGFBQVk7Z0JBQ2xIO2dCQUVBLE9BQU9ZO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsbUNBQW1DQyw2QkFBNkIsRUFBRWhCLE9BQU87O2dCQUN2RSxJQUFJaUI7Z0JBRUosSUFBTXBCLGNBQWMsSUFBSSxDQUFDbkIsTUFBTSxFQUN6QndDLHNDQUFzQ0YsOEJBQThCakMsU0FBUztnQkFFbkZpQixRQUFRRyxLQUFLLENBQUMsQUFBQyxpQkFBc0dOLE9BQXRGcUIscUNBQW9DLG9EQUE4RCxPQUFackIsYUFBWTtnQkFFakksSUFBTWMsZ0JBQWdCSyw4QkFBOEJKLGdCQUFnQixJQUM5REMsdUJBQXVCRixjQUFjRyxpQkFBaUIsQ0FBQyxTQUFDZjtvQkFDdEQsSUFBTUUsc0JBQXNCLE1BQUtILGlCQUFpQixDQUFDQyxjQUFjQztvQkFFakUsSUFBSUMscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOZ0IsdUNBQXVDSixzQkFBc0IsR0FBRztnQkFFaEUsSUFBSUksc0NBQXNDO29CQUN4Q2pCLFFBQVFNLEtBQUssQ0FBQyxBQUFDLG1CQUF3R1QsT0FBdEZxQixxQ0FBb0Msb0RBQThELE9BQVpyQixhQUFZO2dCQUNySTtnQkFFQSxPQUFPb0I7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRXJCLE9BQU87Z0JBQ2pDLElBQUlzQixXQUFXO2dCQUVmLElBQU16QixjQUFjLElBQUksQ0FBQ25CLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ3NCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaTixhQUFZO2dCQUU1QyxJQUFNMEIsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDM0MsWUFBWSxFQUFFdUMsYUFBYUMsUUFBUXJCO2dCQUU3RixJQUFJdUIsc0JBQXNCO29CQUN4QixJQUFPRSx3QkFBd0IsSUFBSSxDQUFDM0MsYUFBYSxDQUFDNEMsS0FBSyxDQUFDLFNBQUNyQzt3QkFDdkQsSUFBTXNDLHVCQUF1QnRDLGFBQWE4QixNQUFNLENBQUNuQjt3QkFFakQsT0FBTzJCO29CQUNUO29CQUVBLElBQUlGLHVCQUF1Qjt3QkFDekIsSUFBSUcscUJBQXFCLE9BQ3JCQyxzQkFBc0I7d0JBRTFCLElBQUlSLFFBQVE7NEJBQ1ZPLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDVixhQUFhcEI7d0JBQzFELE9BQU87NEJBQ0w2QixzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ1gsYUFBYXBCO3dCQUM1RDt3QkFFQSxJQUFJNEIsc0JBQXNCQyxxQkFBcUI7NEJBQzdDUCxXQUFXO3dCQUNiO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1p0QixRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlQsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT3lCO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CM0MsWUFBWSxFQUFFdUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVyQixPQUFPO2dCQUMzRHFCLFNBQVMsTUFBTyxHQUFHO2dCQUVuQkQsY0FBYyxNQUFNLEdBQUc7Z0JBRXZCLElBQU1HLHVCQUF1QjFDLGFBQWE2QyxLQUFLLENBQUMsU0FBQ3JCO29CQUMvQyxJQUFNVixRQUFRLE1BQ1JxQyxzQkFBc0IzQixZQUFZYyxNQUFNLENBQUN4QixPQUFPeUIsYUFBYUMsUUFBUXJCO29CQUUzRSxPQUFPZ0M7Z0JBQ1Q7Z0JBRUEsT0FBT1Q7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJWLFdBQVcsRUFBRXBCLE9BQU87Z0JBQ25DLElBQUk0QixxQkFBcUI7Z0JBRXpCLElBQU0vQixjQUFjLElBQUksQ0FBQ25CLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ3NCLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaTixhQUFZO2dCQUU1QyxJQUFNUCxxQkFBcUIsSUFBSSxDQUFDVCxZQUFZLENBQUNVLE1BQU07Z0JBRW5ELElBQUlELHFCQUFxQixHQUFHO29CQUMxQlUsUUFBUUcsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWk4sYUFBWTtnQkFDcEMsT0FBTztvQkFDTCxJQUFNTCxzQkFBc0IsSUFBSSxDQUFDVixhQUFhLENBQUNTLE1BQU07b0JBRXJELElBQUlDLHNCQUFzQixHQUFHO3dCQUMzQlEsUUFBUUcsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWk4sYUFBWTtvQkFDcEMsT0FBTzt3QkFDTCtCLHFCQUFxQjtvQkFDdkI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsb0JBQW9CO29CQUN0QjVCLFFBQVFNLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaVCxhQUFZO2dCQUNoRDtnQkFFQSxPQUFPK0I7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JYLFdBQVcsRUFBRXBCLE9BQU87Z0JBQ3BDLElBQUk2QjtnQkFFSixJQUFNaEMsY0FBYyxJQUFJLENBQUNuQixNQUFNLEVBQUcsR0FBRztnQkFFckNzQixRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWk4sYUFBWTtnQkFFNUNnQyxzQkFBc0I7Z0JBRXRCLElBQUlBLHFCQUFxQjtvQkFDdkI3QixRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlQsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT2dDO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxRQUFRLEVBQUVkLFdBQVcsRUFBRUMsTUFBTSxFQUFFckIsT0FBTztnQkFDeEQsSUFBSW1DLHdCQUF3QjtnQkFFNUIsSUFBTXRDLGNBQWMsSUFBSSxDQUFDbkIsTUFBTSxFQUN6QjBELGlCQUFpQkYsU0FBU25ELFNBQVM7Z0JBRXpDaUIsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQWtEaUMsT0FBakN2QyxhQUFZLHVCQUFvQyxPQUFmdUMsZ0JBQWU7Z0JBRWhGLElBQU1DLGVBQWVILFNBQVNJLE9BQU87Z0JBRXJDLElBQUlELGlCQUFpQkUsbUNBQW9CLEVBQUU7b0JBQ3pDLElBQU1qQixXQUFXLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxhQUFhQyxRQUFRckI7b0JBRWxEbUMsd0JBQXdCYixVQUFVLEdBQUc7Z0JBQ3ZDO2dCQUVBLElBQUlhLHVCQUF1QjtvQkFDekJuQyxRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBb0Q4QixPQUFqQ3ZDLGFBQVksdUJBQW9DLE9BQWZ1QyxnQkFBZTtnQkFDcEY7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUV6QyxPQUFPO2dCQUNyQyxJQUFJTCxRQUFRO2dCQUVaLElBQUk4QyxjQUFjLE1BQU07b0JBQ3RCLElBQVFDLGNBQThCQyxZQUFHLENBQWpDRCxhQUFhRSxlQUFpQkQsWUFBRyxDQUFwQkMsY0FDZmpFLE9BQU84RCxXQUNQL0QsU0FBU3NCLFFBQVE2QyxZQUFZLENBQUNsRSxPQUM5QkMsU0FBU29CLFFBQVE4QyxZQUFZLENBQUNuRSxPQUM5Qm9FLG1CQUFtQjdFLHNCQUFzQnVFLFlBQ3pDTyxvQkFBb0IzRSx1QkFBdUJvRSxZQUMzQzVELGVBQWVrRSxpQkFBaUJFLEdBQUcsQ0FBQyxTQUFDQzt3QkFDbkMsSUFBTTdDLGNBQWNxQyxZQUFZUyxtQkFBbUIsQ0FBQ0QsaUJBQWlCbEQ7d0JBRXJFLE9BQU9LO29CQUNULElBQ0F2QixnQkFBZ0JrRSxrQkFBa0JDLEdBQUcsQ0FBQyxTQUFDRzt3QkFDckMsSUFBTS9ELGVBQWV1RCxhQUFhUyxvQkFBb0IsQ0FBQ0Qsa0JBQWtCcEQ7d0JBRXpFLE9BQU9YO29CQUNUO29CQUVOTSxRQUFRLElBQUlsQixNQUFNQyxRQUFRQyxNQUFNQyxRQUFRQyxjQUFjQztnQkFDeEQ7Z0JBRUEsT0FBT2E7WUFDVDs7O1lBRU8yRCxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFdkQsT0FBTztnQkFDM0QsSUFBSUwsUUFBUTtnQkFFWixJQUFNOEMsWUFBWXpFLGVBQWV1RjtnQkFFakMsSUFBSWQsY0FBYyxNQUFNO29CQUN0QixJQUFNVyxtQkFBbUJoRixzQkFBc0JxRTtvQkFFL0MsSUFBSVcscUJBQXFCLE1BQU07d0JBQzdCLElBQU0sQUFBRVIsZUFBaUJELFlBQUcsQ0FBcEJDLGNBQ0Z2RCxlQUFldUQsYUFBYVMsb0JBQW9CLENBQUNELGtCQUFrQnBELFVBQ25FbkIsZUFBZSxFQUFFLEVBQ2pCQyxnQkFBZ0I7NEJBQ2RPO3lCQUNELEVBQ0RWLE9BQU84RCxXQUNQL0QsU0FBU3NCLFFBQVE2QyxZQUFZLENBQUNsRSxPQUM5QkMsU0FBU29CLFFBQVE4QyxZQUFZLENBQUNuRTt3QkFFcENnQixRQUFRLElBQUlsQixNQUFNQyxRQUFRQyxNQUFNQyxRQUFRQyxjQUFjQztvQkFDeEQ7Z0JBQ0Y7Z0JBRUEsT0FBT2E7WUFDVDs7O1lBRU82RCxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFekQsT0FBTztnQkFDL0QsSUFBSUwsUUFBUTtnQkFFWixJQUFNOEMsWUFBWXpFLGVBQWV5RjtnQkFFakMsSUFBSWhCLGNBQWMsTUFBTTtvQkFDdEIsSUFBTVcsbUJBQW1CaEYsc0JBQXNCcUU7b0JBRS9DLElBQUlXLHFCQUFxQixNQUFNO3dCQUM3QixJQUFNLEFBQUVSLGVBQWlCRCxZQUFHLENBQXBCQyxjQUNGdkQsZUFBZXVELGFBQWFTLG9CQUFvQixDQUFDRCxrQkFBa0JwRCxVQUNuRW5CLGVBQWUsRUFBRSxFQUNqQkMsZ0JBQWdCOzRCQUNkTzt5QkFDRCxFQUNEVixPQUFPOEQsV0FDUC9ELFNBQVNzQixRQUFRNkMsWUFBWSxDQUFDbEUsT0FDOUJDLFNBQVNvQixRQUFROEMsWUFBWSxDQUFDbkU7d0JBRXBDZ0IsUUFBUSxJQUFJbEIsTUFBTUMsUUFBUUMsTUFBTUMsUUFBUUMsY0FBY0M7b0JBQ3hEO2dCQUNGO2dCQUVBLE9BQU9hO1lBQ1Q7Ozs7S0EvRUEseUJBQU8rRCxRQUFPIn0=