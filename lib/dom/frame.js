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
                var frameNode = judgementNode.getFrameNode(), frame = frameFromFrameNode(frameNode, context);
                return frame;
            }
        },
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, context) {
                var frame = null;
                var frameNode = definedAssertionNode.getFrameNode();
                if (frameNode !== null) {
                    frame = frameFromFrameNode(frameNode, context);
                }
                return frame;
            }
        },
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, context) {
                var frame = null;
                var frameNode = containedAssertionNode.getFrameNode();
                if (frameNode !== null) {
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
    var Declaration = _dom.default.Declaration, declarationNodes = frameNode.getDeclarationNodes(), declarations = declarationNodes.map(function(declarationNode) {
        var declaration = Declaration.fromDeclarationNode(declarationNode, context);
        return declaration;
    });
    return declarations;
}
function metavariablesFromFrameNode(frameNode, context) {
    var Metavariable = _dom.default.Metavariable, metavariableNodes = frameNode.getMetavariableNodes(), metavariables = metavariableNodes.map(function(metavariableNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc2ltcGxlID0gKChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSAmJiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0ICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChkZWNsYXJhdGlvbnNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHtkZWNsYXJhdGlvbnNTdHJpbmd9JyBkZWNsYXJhdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSBtZXRhdmFyaWFibGVzU3RyaW5nRnJvbU1ldGF2YXJpYWJsZXModGhpcy5tZXRhdmFyaWFibGVzKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZhcmlhYmxlc1N0cmluZ30nIG1ldGF2YXJpYWJsZSR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZhcmlhYmxlc1N0cmluZ30nIG1ldGF2YXJpYWJsZSR7c09yTm90aGluZ30uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZS5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0RGVjbGFyYXRpb25Ob2RlcygpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlcygpLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlTm9kZXMubWFwKChtZXRhdmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gIGNvbnN0IGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9ucy5yZWR1Y2UoKGRlY2xhcmF0aW9uc1N0cmluZywgZGVjbGFyYXRpb24pID0+IHtcbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IGRlY2xhcmF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgZGVjbGFyYXRpb25zU3RyaW5nID0gKGRlY2xhcmF0aW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc1N0cmluZ30sICR7ZGVjbGFyYXRpb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNTdHJpbmdGcm9tTWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc1N0cmluZyA9IG1ldGF2YXJpYWJsZS5yZWR1Y2UoKG1ldGF2YXJpYWJsZXNTdHJpbmcsIG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSAobWV0YXZhcmlhYmxlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21ldGF2YXJpYWJsZXNTdHJpbmd9LCAke21ldGF2YXJpYWJsZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkb21Bc3NpZ25lZCIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbXBsZSIsImlzU2ltcGxlIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsIm1ldGF2YXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzRGVjbGFyYXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVzIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImRlY2xhcmF0aW9uc1N0cmluZyIsImRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJldmVyeSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVzU3RyaW5nIiwibWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2ZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsImdldE5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyb21GcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJmcm9tSnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5hbWUiLCJkb20iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uTm9kZXMiLCJnZXREZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIk1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZXMiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvblN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7eUJBVitCOzJEQUVmO3lCQUVXOzZCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dD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