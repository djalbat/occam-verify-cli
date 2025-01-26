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
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution with the '").concat(frameString, "' frame..."));
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
                    context.debug("...matched the '".concat(substitutionString, "' substitutions with the '").concat(frameString, "' frame."));
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
                context.trace("Matching the '".concat(substitutionsString, "' substitutions with the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions with the '").concat(frameString, "' frame."));
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
                    var sOrNothing = metavariablesLength > 1 ? _constants.S : _constants.NOTHING, frameString = this.string, metavariablesString = metavariablesStringFromDeclarations(this.metavariables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi9mcmFtZVwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uLm1hdGNoU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNEZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucyB3aXRoIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc01hdGNoO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgd2l0aCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgc3Vic3RpdHV0aW9uc01hdGNoID0gc3Vic3RpdHV0aW9ucy5ldmVyeVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIHdpdGggdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNNYXRjaDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0ICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZXMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBkZWNsYXJhdGlvbnMuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdmVyaWZ5RGVjbGFyYXRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNMZW5ndGggPSB0aGlzLmRlY2xhcmF0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc09yTm90aGluZyA9IChkZWNsYXJhdGlvbnNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHtkZWNsYXJhdGlvbnNTdHJpbmd9JyBkZWNsYXJhdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZlcmlmaWVkID0gZGVjbGFyYXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSBtZXRhdmFyaWFibGVzU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEdpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChmcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUgPSBjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeShjb250YWluZWRBc3NlcnRpb25Ob2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRlY2xhcmF0aW9ucyA9IFtdLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gW1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICBdLFxuICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvbk5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbURlY2xhcmF0aW9uTm9kZShkZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZXMgPSBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGZyYW1lTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVOb2Rlcy5tYXAoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gZGVjbGFyYXRpb25zU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zU3RyaW5nID0gZGVjbGFyYXRpb25zLnJlZHVjZSgoZGVjbGFyYXRpb25zU3RyaW5nLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gZGVjbGFyYXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBkZWNsYXJhdGlvbnNTdHJpbmcgPSAoZGVjbGFyYXRpb25zU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zU3RyaW5nfSwgJHtkZWNsYXJhdGlvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGRlY2xhcmF0aW9uc1N0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMobWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZXNTdHJpbmcgPSBtZXRhdmFyaWFibGUucmVkdWNlKChtZXRhdmFyaWFibGVzU3RyaW5nLCBtZXRhdmFyaWFibGUpID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBtZXRhdmFyaWFibGVzU3RyaW5nID0gKG1ldGF2YXJpYWJsZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHttZXRhdmFyaWFibGVzU3RyaW5nfSwgJHttZXRhdmFyaWFibGVTdHJpbmd9YDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlc1N0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsImRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiRnJhbWUiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25zIiwibWV0YXZhcmlhYmxlcyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWV0YXZhcmlhYmxlc0xlbmd0aCIsImZpcnN0TWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZVN0cmluZyIsImVxdWFsVG8iLCJtYXRjaFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzRGVjbGFyYXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzTWV0YXZhcmlhYmxlIiwiZGVidWciLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZGVjbGFyYXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlEZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVzIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImRlY2xhcmF0aW9uc1N0cmluZyIsImRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJldmVyeSIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVzU3RyaW5nIiwibWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlIiwibmFtZSIsImRvbSIsIk1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwicmVkdWNlIiwiZGVjbGFyYXRpb25T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