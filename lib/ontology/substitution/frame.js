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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../../context/partial/substitution/frame"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _FrameSubstitution;
var _default = (0, _ontology.define)((_FrameSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameSubstitution, Substitution);
    function FrameSubstitution(context, string, node, tokens, frame, metavariable) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            context,
            string,
            node,
            tokens
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameSubstitution, [
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var frameNode = this.frame.getNode(), replacementNode = frameNode; ///
                return replacementNode;
            }
        },
        {
            key: "isFrameEqualToFrame",
            value: function isFrameEqualToFrame(frame) {
                return this.frame.isEqualTo(frame);
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter) {
                return this.metavariable.matchParameter(parameter);
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var frameSubstitutionString = this.string; ///
                context.trace("Verifiying the '".concat(frameSubstitutionString, "' frame substitution..."));
                var frameSingular = this.frame.isSingular();
                if (frameSingular) {
                    if (this.metavariable !== null) {
                        var metavariablePresent = context.isMetavariablePresent(this.metavariable);
                        if (metavariablePresent) {
                            var frameMetavariable = this.frame.getMetavariable(), frameMetavariablePresent = context.isMetavariablePresent(frameMetavariable);
                            if (frameMetavariablePresent) {
                                verifies = true;
                            } else {
                                context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame's metavariable is not present."));
                            }
                        } else {
                            context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame's metavariable is not present."));
                        }
                    } else {
                        context.debug("The '".concat(frameSubstitutionString, "' frame substitution's general frame is not singular."));
                    }
                } else {
                    context.debug("The '".concat(frameSubstitutionString, "' frame substitution's specific frame is not singular."));
                }
                if (verifies) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(frameSubstitutionString, "' frame substitution."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var frameSubstitution = null;
                var statementNode = statement.getNode(), frameSubstitutionNode = statementNode.getFrameSubstitutionNode();
                if (frameSubstitutionNode !== null) {
                    var Frame = _ontology.default.Frame, Metavariable = _ontology.default.Metavariable, firstFrameNode = frameSubstitutionNode.getFirstFrameNode(), lastMetavariableNode = frameSubstitutionNode.getLastMetavariableNode(), metavariableNode = lastMetavariableNode, frameNode = firstFrameNode, node = frameSubstitutionNode, tokens = context.nodeAsTokens(node), string = context.nodeAsString(node), frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                    frameSubstitution = new FrameSubstitution(context, string, node, tokens, frame, metavariable);
                }
                return frameSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                var string = stringFromFrameAndMetavariable(frame, metavariable), lexer = context.getLexer(), parser = context.getParser(), frameSubstitutionPartialContext = _frame.default.fromStringLexerAndParser(string, lexer, parser), node = frameSubstitutionPartialContext.getNode(), tokens = frameSubstitutionPartialContext.getTokens(), frameSubstitution = new FrameSubstitution(context, string, node, tokens, frame, metavariable);
                return frameSubstitution;
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default), _define_property(_FrameSubstitution, "name", "FrameSubstitution"), _FrameSubstitution));
function stringFromFrameAndMetavariable(frame, metavariable) {
    var frameString = frame.getString(), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vZnJhbWVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc0VxdWFsVG8oZnJhbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlID0gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChmcmFtZU1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIGdlbmVyYWwgZnJhbWUncyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3Mgc3BlY2lmaWMgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3Qgc3Vic3RpdGl0b2luID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0aXRvaW4pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZmlyc3RGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGxhc3RNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldExhc3RNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbGFzdE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZpcnN0RnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBGcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nfSBmb3IgWyR7bWV0YXZhcmlhYmxlU3RyaW5nfV1dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZSIsImdldEZyYW1lIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInZlcmlmeSIsInZlcmlmaWVzIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsImZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImZyYW1lTWV0YXZhcmlhYmxlIiwiZnJhbWVNZXRhdmFyaWFibGVQcmVzZW50IiwiZGVidWciLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWUiLCJvbnRvbG9neSIsIk1ldGF2YXJpYWJsZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3RGcmFtZU5vZGUiLCJsYXN0TWV0YXZhcmlhYmxlTm9kZSIsImdldExhc3RNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsIm5vZGVBc1N0cmluZyIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO21FQUNJOzREQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJNUMsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7O2FBQU1DLGtCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtnQ0FEcENOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sSUFDOUJDLGtCQUFrQkYsV0FBVyxHQUFHO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FB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