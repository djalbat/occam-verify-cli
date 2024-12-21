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
                var declarationsVerified = true; ///
                var declarationsLength = this.declarations.length;
                if (declarationsLength > 0) {
                    var sOrNothing = declarationsLength > 1 ? _constants.S : _constants.NOTHING, frameString = this.string, declarationsString = declarationsStringFromDeclarations(this.declarations);
                    context.trace("Verifying the '".concat(frameString, "' frame's '").concat(declarationsString, "' declaration").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    declarationsVerified = this.declarations.every(function(declaration) {
                        var frame = null, declarationVerified = declaration.verify(frame, assignments, stated, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgUywgTk9USElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGVcIiksXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi9mcmFtZVwiKSxcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9mcmFtZVwiKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIGRlY2xhcmF0aW9ucywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaXJzdE1ldGF2YXJpYWJsZSA9IGZpcnN0KHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlID0gZmlyc3RNZXRhdmFyaWFibGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVTdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeURlY2xhcmF0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgIG1ldGF2YXJpYWJsZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlcyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNWZXJpZmllZCkge1xuICAgICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlEZWNsYXJhdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKGRlY2xhcmF0aW9uc0xlbmd0aCA+IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IGRlY2xhcmF0aW9uc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnModGhpcy5kZWNsYXJhdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHtkZWNsYXJhdGlvbnNTdHJpbmd9JyBkZWNsYXJhdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBkZWNsYXJhdGlvbnNWZXJpZmllZCA9IHRoaXMuZGVjbGFyYXRpb25zLmV2ZXJ5KChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZSA9IG51bGwsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uVmVyaWZpZWQgPSBkZWNsYXJhdGlvbi52ZXJpZnkoZnJhbWUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvblZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkZWNsYXJhdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2RlY2xhcmF0aW9uc1N0cmluZ30nIGRlY2xhcmF0aW9uJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVzKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlc1ZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXNMZW5ndGggPSB0aGlzLm1ldGF2YXJpYWJsZXMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzT3JOb3RoaW5nID0gKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9USElORyxcbiAgICAgICAgICAgIGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSBtZXRhdmFyaWFibGVzU3RyaW5nRnJvbURlY2xhcmF0aW9ucyh0aGlzLm1ldGF2YXJpYWJsZXMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS4uLmApO1xuXG4gICAgICBtZXRhdmFyaWFibGVzVmVyaWZpZWQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZXZlcnkoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IG1ldGF2YXJpYWJsZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVzVmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVzU3RyaW5nfScgbWV0YXZhcmlhYmxlJHtzT3JOb3RoaW5nfS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0xlbmd0aCA9IHRoaXMuZGVjbGFyYXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgY2Fubm90IGhhdmUgZGVjbGFyYXRpb25zLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVzTGVuZ3RoID0gdGhpcy5tZXRhdmFyaWFibGVzLmxlbmd0aDtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZXNMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBjYW5ub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2ZXJpZnlHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2ZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB2ZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEdpdmVuTWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgdG9rZW5zLCBkZWNsYXJhdGlvbnMsIG1ldGF2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGRlZmluZWRBc3NlcnRpb25GcmFtZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGVjbGFyYXRpb25zID0gW10sXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXG4gICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgIF0sXG4gICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIHRva2VucywgZGVjbGFyYXRpb25zLCBtZXRhdmFyaWFibGVzKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uTm9kZXNRdWVyeShmcmFtZU5vZGUpLFxuICAgICAgICBkZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBkZWNsYXJhdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZXNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlcyA9IG1ldGF2YXJpYWJsZU5vZGVzUXVlcnkoZnJhbWVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZU5vZGVzLm1hcCgobWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiBkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xuICBjb25zdCBkZWNsYXJhdGlvbnNTdHJpbmcgPSBkZWNsYXJhdGlvbnMucmVkdWNlKChkZWNsYXJhdGlvbnNTdHJpbmcsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSBkZWNsYXJhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGRlY2xhcmF0aW9uc1N0cmluZyA9IChkZWNsYXJhdGlvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNTdHJpbmd9LCAke2RlY2xhcmF0aW9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZGVjbGFyYXRpb25zU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVzU3RyaW5nRnJvbURlY2xhcmF0aW9ucyhtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlc1N0cmluZyA9IG1ldGF2YXJpYWJsZS5yZWR1Y2UoKG1ldGF2YXJpYWJsZXNTdHJpbmcsIG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIG1ldGF2YXJpYWJsZXNTdHJpbmcgPSAobWV0YXZhcmlhYmxlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21ldGF2YXJpYWJsZXNTdHJpbmd9LCAke21ldGF2YXJpYWJsZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVzU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlY2xhcmF0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZVF1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJGcmFtZSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldERlY2xhcmF0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJkZWNsYXJhdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhdmFyaWFibGVzTGVuZ3RoIiwiZmlyc3RNZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lU3RyaW5nIiwiZXF1YWxUbyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwidHJhY2UiLCJkZWNsYXJhdGlvbnNWZXJpZmllZCIsInZlcmlmeURlY2xhcmF0aW9ucyIsIm1ldGF2YXJpYWJsZXNWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJzT3JOb3RoaW5nIiwiUyIsIk5PVEhJTkciLCJkZWNsYXJhdGlvbnNTdHJpbmciLCJkZWNsYXJhdGlvbnNTdHJpbmdGcm9tRGVjbGFyYXRpb25zIiwiZXZlcnkiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVzU3RyaW5nIiwibWV0YXZhcmlhYmxlc1N0cmluZ0Zyb21EZWNsYXJhdGlvbnMiLCJtZXRhdmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVkR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJvbUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImRlY2xhcmF0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVzRnJvbUZyYW1lTm9kZSIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZUZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJhbWVOb2RlIiwibmFtZSIsImRvbSIsIk1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbk5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVzIiwicmVkdWNlIiwiZGVjbGFyYXRpb25TdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQUE7Ozt5QkFqQitCOzJEQUVmO3lCQUVXOzZCQUVVO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLHVCQUNuQ0Msd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLHlC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