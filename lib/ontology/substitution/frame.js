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
                context.trace("Verifiying the '".concat(frameSubstitutionString, "' frame substitutin..."));
                var frameSimple = this.frame.isSimple();
                if (frameSimple) {
                    if (this.metavariable === null) {
                        context.debug("The specific frame is not simple.");
                    } else {
                        var metavariablePresent = context.isMetavariablePresent(this.metavariable);
                        if (metavariablePresent) {
                            var metavariable = this.frame.getMetavariable(), metavariablePresent1 = context.isMetavariablePresent(metavariable);
                            if (metavariablePresent1) {
                                verifies = true;
                            } else {
                                var metavariableString = metavariable.getString();
                                context.debug("The '".concat(metavariableString, "' metavariable is not present."));
                            }
                        } else {
                            var metavariableString1 = this.metavariable.getString();
                            context.debug("The '".concat(metavariableString1, "' metavariable is not present."));
                        }
                    }
                } else {
                    context.debug("The general frame is not simple.");
                }
                if (verifies) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...verified the '".concat(frameSubstitutionString, "' frame substitutin."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vZnJhbWVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc0VxdWFsVG8oZnJhbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpbi4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVTaW1wbGUgPSB0aGlzLmZyYW1lLmlzU2ltcGxlKCk7XG5cbiAgICBpZiAoZnJhbWVTaW1wbGUpIHtcbiAgICAgIGlmICh0aGlzLm1ldGF2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgc3BlY2lmaWMgZnJhbWUgaXMgbm90IHNpbXBsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudCh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIGdlbmVyYWwgZnJhbWUgaXMgbm90IHNpbXBsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgZmlyc3RGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0Rmlyc3RGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGxhc3RNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldExhc3RNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbGFzdE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZpcnN0RnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgPSBGcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihzdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nfSBmb3IgWyR7bWV0YXZhcmlhYmxlU3RyaW5nfV1dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZSIsImdldEZyYW1lIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0VxdWFsVG8iLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInZlcmlmeSIsInZlcmlmaWVzIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsImZyYW1lU2ltcGxlIiwiaXNTaW1wbGUiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiRnJhbWUiLCJvbnRvbG9neSIsIk1ldGF2YXJpYWJsZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3RGcmFtZU5vZGUiLCJsYXN0TWV0YXZhcmlhYmxlTm9kZSIsImdldExhc3RNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsIm5vZGVBc1N0cmluZyIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJmcmFtZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO21FQUNJOzREQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJNUMsV0FBZUEsSUFBQUEsZ0JBQU0sc0NBQUM7O2FBQU1DLGtCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtnQ0FEcENOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sSUFDOUJDLGtCQUFrQkYsV0FBVyxHQUFHO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQlIsS0FBSztnQkFBSSxPQUFPLElBQUksQ0FBQ0EsS0FBSyxDQUFDUyxTQUFTLENBQUNUO1lBQVE7OztZQUVqRVUsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ1QsWUFBWTtnQkFBSSxPQUFP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