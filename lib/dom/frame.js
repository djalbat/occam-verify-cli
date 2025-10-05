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
    function Frame(string, node, tokens, declarations) {
        _class_call_check(this, Frame);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.declarations = declarations;
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
            key: "getLength",
            value: function getLength() {
                return this.declarations.length;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var simple = this.isSimple();
                if (simple) {
                    var firstDeclaration = first(this.declarations), declaration = firstDeclaration; ///
                    metavariable = declaration.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "isSimple",
            value: function isSimple() {
                var simple = false;
                var length = this.getLength();
                if (length === 1) {
                    var firstDeclaration = first(this.declarations), declaration = firstDeclaration; ///
                    simple = declaration.isSimple();
                }
                return simple;
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
                var simple = this.isSimple();
                if (!simple) {
                    context.trace("The '".concat(frameString, "' stated frame must be simple."));
                } else {
                    verifiesWhenStated = true;
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
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, declarationsString = declarationsStringFromDeclarations(this.declarations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb24gPSBmaXJzdCh0aGlzLmRlY2xhcmF0aW9ucyksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IGZpcnN0RGVjbGFyYXRpb247IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBkZWNsYXJhdGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0RGVjbGFyYXRpb24gPSBmaXJzdCh0aGlzLmRlY2xhcmF0aW9ucyksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbiA9IGZpcnN0RGVjbGFyYXRpb247IC8vL1xuXG4gICAgICBzaW1wbGUgPSBkZWNsYXJhdGlvbi5pc1NpbXBsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpO1xuXG4gICAgaWYgKCFzaW1wbGUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbXBsZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGxlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1RISU5HLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLmRlY2xhcmF0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgZGVjbGFyYXRpb25zVmVyaWZ5ID0gdGhpcy5kZWNsYXJhdGlvbnMuZXZlcnkoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmVyaWZpZXMgPSBkZWNsYXJhdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlY2xhcmF0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVjbGFyYXRpb25zU3RyaW5nfScgZGVjbGFyYXRpb24ke3NPck5vdGhpbmd9LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZXMgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSB2ZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZyYW1lIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICBkZWNsYXJhdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldERlY2xhcmF0aW9uTm9kZXMoKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZXMoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZU5vZGVzLm1hcCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICBjb25zdCBkZWNsYXJhdGlvbnNTdHJpbmcgPSBkZWNsYXJhdGlvbnMucmVkdWNlKChkZWNsYXJhdGlvbnNTdHJpbmcsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSBkZWNsYXJhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IChkZWNsYXJhdGlvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNTdHJpbmd9LCAke2RlY2xhcmF0aW9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkb21Bc3NpZ25lZCIsIkZyYW1lIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9ucyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImZpcnN0RGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbiIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVTdHJpbmciLCJlcXVhbFRvIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3Vic3RpdHV0aW9uTWF0Y2hlcyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsInN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiIsImRlYnVnIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImRlY2xhcmF0aW9uc1ZlcmlmeSIsInZlcmlmeURlY2xhcmF0aW9ucyIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJkZWNsYXJhdGlvbnNTdHJpbmciLCJkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zIiwiZXZlcnkiLCJkZWNsYXJhdGlvblZlcmlmaWVzIiwidmVyaWZ5R2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmVyaWZpZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcm9tRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZnJvbUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJuYW1lIiwiZG9tIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZSIsIkRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25Ob2RlcyIsImdldERlY2xhcmF0aW9uTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJmcm9tRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOb2RlcyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZHVjZSIsImRlY2xhcmF0aW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7MkRBRWY7eUJBRVc7NkJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNLEFB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