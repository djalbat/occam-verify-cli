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
                var frameSingular = this.frame.isSingular();
                if (frameSingular) {
                    if (this.metavariable === null) {
                        context.debug("The specific frame is not singular.");
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
                    context.debug("The general frame is not singular.");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vZnJhbWVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc0VxdWFsVG8oZnJhbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlcik7IH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpeWluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpbi4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGlmICh0aGlzLm1ldGF2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgc3BlY2lmaWMgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgZ2VuZXJhbCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGluLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIGZpcnN0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldEZpcnN0RnJhbWVOb2RlKCksXG4gICAgICAgICAgICBsYXN0TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRMYXN0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGxhc3RNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBmaXJzdEZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0ID0gRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ30gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsImZyYW1lTm9kZSIsImdldE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlYnVnIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZSIsIm9udG9sb2d5IiwiTWV0YXZhcmlhYmxlIiwiZmlyc3RGcmFtZU5vZGUiLCJnZXRGaXJzdEZyYW1lTm9kZSIsImxhc3RNZXRhdmFyaWFibGVOb2RlIiwiZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibm9kZUFzVG9rZW5zIiwibm9kZUFzU3RyaW5nIiwiZnJvbUZyYW1lTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwic3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsImZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQiLCJGcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwibmFtZSIsImZyYW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7bUVBQ0k7NERBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUk1QyxXQUFlQSxJQUFBQSxnQkFBTSxzQ0FBQzs7YUFBTUMsa0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZO2dDQURwQ047O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNMLEtBQUssQ0FBQ00sT0FBTyxJQUM5QkMsa0JBQWtCRixXQUFXLEdBQUc7Z0JBRXRDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CUixLQUFLO2dCQUFJLE9BQU8sSUFBSSxDQUFDQSxLQUFLLENBQUNTLFNBQVMsQ0FBQ1Q7WUFBUTs7O1lBRWpFVSxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDVCxZ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