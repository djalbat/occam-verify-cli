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
var _constants = require("../constants");
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
var declarationNodesQuery = (0, _query.nodesQuery)("/frame/declaration"), metavariableNodesQuery = (0, _query.nodesQuery)("/frame/metavariable"), judgementFrameNodeQuery = (0, _query.nodeQuery)("/judgement/frame"), definedAssertionFrameNodeQuery = (0, _query.nodeQuery)("/definedAssertion/frame"), containedAssertionFrameNodeQuery = (0, _query.nodeQuery)("/containedAssertion/frame");
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
                var simple = this.isSimple();
                if (simple) {
                    var firstMetavariable = first(this.metavariables);
                    metavariable = firstMetavariable; ///
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
            key: "isSimple",
            value: function isSimple() {
                var metavariablesLength = this.metavariables.length, declarationsLength = this.declarations.length, simple = metavariablesLength === 1 && declarationsLength === 0;
                return simple;
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.declarations.some(function(declaration) {
                        var substitutionMatchesDeclaration = declaration.matchSubstitution(substitution, context);
                        if (substitutionMatchesDeclaration) {
                            return true;
                        }
                    });
                }
                if (!substitutionMatches) {
                    substitutionMatches = this.metavariables.some(function(metavariable) {
                        var substitutionMatchesMetavariable = metavariable.matchSubstitution(substitution, context);
                        if (substitutionMatchesMetavariable) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
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
                            verifiedWhenDerived = this.verifyWhenDerived(context);
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
            value: function verifyWhenDerived(context) {
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
            key: "verifyDeclarations",
            value: function verifyDeclarations(assignments, stated, context) {
                var declarationsVerified = true; ///
                var declarationsLength = this.declarations.length;
                if (declarationsLength > 0) {
                    var sOrNothing = declarationsLength > 1 ? _constants.S : _constants.NOTHING, frameString = this.string, declarationsString = declarationsStringFromDeclarations(this.declarations);
                    context.trace("Verifying the '".concat(frameString, "' frame's '").concat(declarationsString, "' declaration").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    declarationsVerified = this.declarations.every(function(declaration) {
                        var declarationVerified = declaration.verify(assignments, stated, context);
                        return declarationVerified;
                    });
                    if (declarationsVerified) {
                        context.debug("...verified the '".concat(frameString, "' frame's '").concat(declarationsString, "' declaration").concat(sOrNothing, "."));
                    }
                }
                return declarationsVerified;
            }
        },
        {
            key: "verifyMetavariables",
            value: function verifyMetavariables(assignments, stated, context) {
                var metavariablesVerified = true;
                var metavariablesLength = this.metavariables.length;
                if (metavariablesLength > 0) {
                    var sOrNothing = metavariablesLength > 1 ? _constants.S : _constants.NOTHING, frameString = this.string, metavariablesString = metavariablesStringFromMetavariables(this.metavariables);
                    context.trace("Verifying the '".concat(frameString, "' frame's '").concat(metavariablesString, "' metavariable").concat(sOrNothing, "..."));
                    metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(context);
                        return metavariableVerified;
                    });
                    if (metavariablesVerified) {
                        context.debug("...verified the '".concat(frameString, "' frame's '").concat(metavariablesString, "' metavariable").concat(sOrNothing, "."));
                    }
                }
                return metavariablesVerified;
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
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromJudgementNode",
            value: function fromJudgementNode(judgementNode, context) {
                var judgementFrameNode = judgementFrameNodeQuery(judgementNode), frameNode = judgementFrameNode, frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var definedAssertionFrameNode = definedAssertionFrameNodeQuery(definedAssertionNode);
                if (definedAssertionFrameNode !== null) {
                    var frameNode = definedAssertionFrameNode; ///
                    frame = frameFromFrameNode(frameNode, context);
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
                    var frameNode = containedAssertionFrameNode; ///
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(), _define_property(_Frame, "name", "Frame"), _Frame));
function frameFromFrameNode(frameNode, context) {
    var Frame = _dom.default.Frame, node = frameNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), declarations = declarationsFromFrameNode(frameNode, context), metavariables = metavariablesFromFrameNode(frameNode, context), frame = new Frame(string, node, tokens, declarations, metavariables);
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
function metavariablesStringFromMetavariables(metavariable) {
    var metavariablesString = metavariable.reduce(function(metavariablesString, metavariable) {
        var metavariableString = metavariable.getString();
        metavariablesString = metavariablesString === null ? metavariableString : "".concat(metavariablesString, ", ").concat(metavariableString);
        return metavariablesString;
    }, null);
    return metavariablesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpLFxuICAgICAganVkZ2VtZW50RnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvanVkZ2VtZW50L2ZyYW1lXCIpLFxuICAgICAgZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vZnJhbWVcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vZnJhbWVcIik7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoc2ltcGxlKSB7XG4gICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGZpcnN0TWV0YXZhcmlhYmxlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKGZyYW1lU3RyaW5nID09PSB0aGlzLnN0cmluZyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzaW1wbGUgPSAoKG1ldGF2YXJpYWJsZXNMZW5ndGggPT09IDEpICYmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgaWYgKCFzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5kZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uID0gZGVjbGFyYXRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0RlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZS5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zTWF0Y2g7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzdWJzdGl0dXRpb25zLmV2ZXJ5U3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc01hdGNoO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIGRlY2xhcmF0aW9ucy5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgbW9yZSB0aGFuIG9uZSBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlc0xlbmd0aCA9IHRoaXMubWV0YXZhcmlhYmxlcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNPck5vdGhpbmcgPSAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1N0cmluZyA9IG1ldGF2YXJpYWJsZXNTdHJpbmdGcm9tTWV0YXZhcmlhYmxlcyh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRGcmFtZU5vZGUgPSBqdWRnZW1lbnRGcmFtZU5vZGVRdWVyeShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBqdWRnZW1lbnRGcmFtZU5vZGUsXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZTsgIC8vL1xuXG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zLnJlZHVjZSgoZGVjbGFyYXRpb25zU3RyaW5nLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBkZWNsYXJhdGlvbnNTdHJpbmcgPSAoZGVjbGFyYXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zU3RyaW5nfSwgJHtkZWNsYXJhdGlvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVzU3RyaW5nID0gbWV0YXZhcmlhYmxlLnJlZHVjZSgobWV0YXZhcmlhYmxlc1N0cmluZywgbWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgbWV0YXZhcmlhYmxlc1N0cmluZyA9IChtZXRhdmFyaWFibGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bWV0YXZhcmlhYmxlc1N0cmluZ30sICR7bWV0YXZhcmlhYmxlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVzUXVlcnkiLCJqdWRnZW1lbnRGcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVTdHJpbmciLCJlcXVhbFRvIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImRlY2xhcmF0aW9uc0xlbmd0aCIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeVN1YnN0aXR1dGlvbiIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwic09yTm90aGluZyIsIlMiLCJOT1RISU5HIiwiZGVjbGFyYXRpb25zU3RyaW5nIiwiZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyIsImV2ZXJ5IiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNTdHJpbmciLCJtZXRhdmFyaWFibGVzU3RyaW5nRnJvbU1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudEZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsIm5hbWUiLCJkb20iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvblN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3lCQWpCK0I7MkRBRWY7eUJBRVc7NkJBRVU7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQ25DQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsd0JBQ3BDRSwwQkFBMEJDLElBQUFBLGdCQUFTLEVBQUMscUJBQ3BDQyxpQ0FB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