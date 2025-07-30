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
                    var sOrNothing = declarationsLength > 1 ? _constants.S : _constants.NOTHING, declarationsString = declarationsStringFromDeclarations(this.declarations);
                    context.trace("Verifying the '".concat(declarationsString, "' declaration").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    declarationsVerified = this.declarations.every(function(declaration) {
                        var declarationVerified = declaration.verify(assignments, stated, context);
                        return declarationVerified;
                    });
                    if (declarationsVerified) {
                        context.debug("...verified the '".concat(declarationsString, "' declaration").concat(sOrNothing, "."));
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
                    var sOrNothing = metavariablesLength > 1 ? _constants.S : _constants.NOTHING, metavariablesString = metavariablesStringFromMetavariables(this.metavariables);
                    context.trace("Verifying the '".concat(metavariablesString, "' metavariable").concat(sOrNothing, "..."));
                    metavariablesVerified = this.metavariables.every(function(metavariable) {
                        var metavariableVerified = metavariable.verify(context);
                        return metavariableVerified;
                    });
                    if (metavariablesVerified) {
                        context.debug("...verified the '".concat(metavariablesString, "' metavariable").concat(sOrNothing, "."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc2ltcGxlID0gKChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSAmJiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0ICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChkZWNsYXJhdGlvbnNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvbnNTdHJpbmd9JyBkZWNsYXJhdGlvbiR7c09yTm90aGluZ30uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRydWU7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVEhJTkcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzU3RyaW5nID0gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzKHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlc1N0cmluZ30nIG1ldGF2YXJpYWJsZSR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdGhpcy5tZXRhdmFyaWFibGVzLmV2ZXJ5KChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBtZXRhdmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXREZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGVzKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zLnJlZHVjZSgoZGVjbGFyYXRpb25zU3RyaW5nLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBkZWNsYXJhdGlvbnNTdHJpbmcgPSAoZGVjbGFyYXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zU3RyaW5nfSwgJHtkZWNsYXJhdGlvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVzU3RyaW5nID0gbWV0YXZhcmlhYmxlLnJlZHVjZSgobWV0YXZhcmlhYmxlc1N0cmluZywgbWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgbWV0YXZhcmlhYmxlc1N0cmluZyA9IChtZXRhdmFyaWFibGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bWV0YXZhcmlhYmxlc1N0cmluZ30sICR7bWV0YXZhcmlhYmxlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVTdHJpbmciLCJlcXVhbFRvIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImRlY2xhcmF0aW9uc0xlbmd0aCIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeVN1YnN0aXR1dGlvbiIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwic09yTm90aGluZyIsIlMiLCJOT1RISU5HIiwiZGVjbGFyYXRpb25zU3RyaW5nIiwiZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyIsImV2ZXJ5IiwiZGVjbGFyYXRpb25WZXJpZmllZCIsIm1ldGF2YXJpYWJsZXNTdHJpbmciLCJtZXRhdmFyaWFibGVzU3RyaW5nRnJvbU1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImZyb21KdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImdldEZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSIsImRvbSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZSIsIkRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25Ob2RlcyIsImdldERlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZHVjZSIsImRlY2xhcmF0aW9uU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7MkRBRWY7eUJBRVc7NkJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENB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