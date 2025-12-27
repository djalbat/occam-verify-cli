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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
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
var _default = (0, _structure.define)((_FrameSubstitution = /*#__PURE__*/ function(Substitution) {
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
                    var Frame = _structure.default.Frame, Metavariable = _structure.default.Metavariable, firstFrameNode = frameSubstitutionNode.getFirstFrameNode(), lastMetavariableNode = frameSubstitutionNode.getLastMetavariableNode(), metavariableNode = lastMetavariableNode, frameNode = firstFrameNode, node = frameSubstitutionNode, tokens = context.nodeAsTokens(node), string = context.nodeAsString(node), frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvc3Vic3RpdHV0aW9uL2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IEZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbC9zdWJzdGl0dXRpb24vZnJhbWVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNFcXVhbFRvKGZyYW1lKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaXlpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgaWYgKHRoaXMubWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudCh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZSA9IHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQoZnJhbWVNZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBnZW5lcmFsIGZyYW1lJ3MgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyBzcGVjaWZpYyBmcmFtZSdzIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgZ2VuZXJhbCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHNwZWNpZmljIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICBmaXJzdEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRGaXJzdEZyYW1lTm9kZSgpLFxuICAgICAgICAgICAgbGFzdE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0TGFzdE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBsYXN0TWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlID0gZmlyc3RGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCA9IEZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZnJvbVN0cmluZ0xleGVyQW5kUGFyc2VyKHN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IGZyYW1lU3Vic3RpdHV0aW9uUGFydGlhbENvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0b2tlbnMsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsImZyYW1lIiwibWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsImlzRXF1YWxUbyIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmcmFtZU1ldGF2YXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJmcmFtZVN1YnN0aXR1dGlvbiIsInN0YXRlbWVudE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJGcmFtZSIsInN0cnVjdHVyZSIsIk1ldGF2YXJpYWJsZSIsImZpcnN0RnJhbWVOb2RlIiwiZ2V0Rmlyc3RGcmFtZU5vZGUiLCJsYXN0TWV0YXZhcmlhYmxlTm9kZSIsImdldExhc3RNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsIm5vZGVBc1N0cmluZyIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJmcmFtZVN1YnN0aXR1dGlvblBhcnRpYWxDb250ZXh0IiwiRnJhbWVTdWJzdGl0dXRpb25QYXJ0aWFsQ29udGV4dCIsImZyb21TdHJpbmdMZXhlckFuZFBhcnNlciIsImdldFRva2VucyIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCO21FQUNHOzREQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJNUMsV0FBZUEsSUFBQUEsaUJBQU0sc0NBQUM7O2FBQU1DLGtCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWTtnQ0FEcENOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7WUFBTUM7O1FBRTdCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDTCxLQUFLLENBQUNNLE9BQU8sSUFDOUJDLGtCQUFrQkYsV0FBVyxHQUFHO2dCQUV0QyxPQUFPRTtZQUNUOzs7WUFF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