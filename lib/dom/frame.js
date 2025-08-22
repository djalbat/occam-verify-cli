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
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var declarationsVerify = this.verifyDeclarations(assignments, stated, context);
                if (declarationsVerify) {
                    var metavariablesVerify = this.verifyMetavariables(assignments, stated, context);
                    if (metavariablesVerify) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.verifyWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
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
                        verifiesWhenStated = true;
                    }
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyDeclarations",
            value: function verifyDeclarations(assignments, stated, context) {
                var declarationsVerify = true; ///
                var declarationsLength = this.declarations.length;
                if (declarationsLength > 0) {
                    var sOrNothing = declarationsLength > 1 ? _constants.S : _constants.NOTHING, declarationsString = declarationsStringFromDeclarations(this.declarations);
                    context.trace("Verifying the '".concat(declarationsString, "' declaration").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    declarationsVerify = this.declarations.every(function(declaration) {
                        var declarationVerifies = declaration.verify(assignments, stated, context);
                        return declarationVerifies;
                    });
                    if (declarationsVerify) {
                        context.debug("...verified the '".concat(declarationsString, "' declaration").concat(sOrNothing, "."));
                    }
                }
                return declarationsVerify;
            }
        },
        {
            key: "verifyMetavariables",
            value: function verifyMetavariables(assignments, stated, context) {
                var metavariablesVerify = true;
                var metavariablesLength = this.metavariables.length;
                if (metavariablesLength > 0) {
                    var sOrNothing = metavariablesLength > 1 ? _constants.S : _constants.NOTHING, metavariablesString = metavariablesStringFromMetavariables(this.metavariables);
                    context.trace("Verifying the '".concat(metavariablesString, "' metavariable").concat(sOrNothing, "..."));
                    metavariablesVerify = this.metavariables.every(function(metavariable) {
                        var metavariableVerifies = metavariable.verify(context);
                        return metavariableVerifies;
                    });
                    if (metavariablesVerify) {
                        context.debug("...verified the '".concat(metavariablesString, "' metavariable").concat(sOrNothing, "."));
                    }
                }
                return metavariablesVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKHNpbXBsZSkge1xuICAgICAgY29uc3QgZmlyc3RNZXRhdmFyaWFibGUgPSBmaXJzdCh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBmaXJzdE1ldGF2YXJpYWJsZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZVN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc2ltcGxlID0gKChtZXRhdmFyaWFibGVzTGVuZ3RoID09PSAxKSAmJiAoZGVjbGFyYXRpb25zTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZnkgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZ5KSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlY2xhcmF0aW9uc1ZlcmlmeSA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZXMgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlc1ZlcmlmeSA9IHRydWU7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChtZXRhdmFyaWFibGVzTGVuZ3RoID4gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVEhJTkcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzU3RyaW5nID0gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzKHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlc1N0cmluZ30nIG1ldGF2YXJpYWJsZSR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgbWV0YXZhcmlhYmxlc1ZlcmlmeSA9IHRoaXMubWV0YXZhcmlhYmxlcy5ldmVyeSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gbWV0YXZhcmlhYmxlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZXNTdHJpbmd9JyBtZXRhdmFyaWFibGUke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXREZWNsYXJhdGlvbk5vZGVzKCksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21EZWNsYXJhdGlvbk5vZGUoZGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGVzKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zLnJlZHVjZSgoZGVjbGFyYXRpb25zU3RyaW5nLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBkZWNsYXJhdGlvbnNTdHJpbmcgPSAoZGVjbGFyYXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zU3RyaW5nfSwgJHtkZWNsYXJhdGlvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21NZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBtZXRhdmFyaWFibGVzU3RyaW5nID0gbWV0YXZhcmlhYmxlLnJlZHVjZSgobWV0YXZhcmlhYmxlc1N0cmluZywgbWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgbWV0YXZhcmlhYmxlc1N0cmluZyA9IChtZXRhdmFyaWFibGVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bWV0YXZhcmlhYmxlc1N0cmluZ30sICR7bWV0YXZhcmlhYmxlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2ltcGxlIiwiaXNTaW1wbGUiLCJmaXJzdE1ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVTdHJpbmciLCJlcXVhbFRvIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImRlY2xhcmF0aW9uc0xlbmd0aCIsIm1hdGNoU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbk1hdGNoZXMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeVN1YnN0aXR1dGlvbiIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJkZWNsYXJhdGlvbnNWZXJpZnkiLCJ2ZXJpZnlEZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzVmVyaWZ5IiwidmVyaWZ5TWV0YXZhcmlhYmxlcyIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJkZWNsYXJhdGlvbnNTdHJpbmciLCJkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zIiwiZXZlcnkiLCJkZWNsYXJhdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlc1N0cmluZyIsIm1ldGF2YXJpYWJsZXNTdHJpbmdGcm9tTWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJuYW1lIiwiZG9tIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbk5vZGVzIiwiZ2V0RGVjbGFyYXRpb25Ob2RlcyIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsImZyb21EZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlcyIsImdldE1ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVkdWNlIiwiZGVjbGFyYXRpb25TdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjsyREFFZjt5QkFFVzs2QkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEOUJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFB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