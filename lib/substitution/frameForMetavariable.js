"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameForMetavariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _query = require("../utilities/query");
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
var substitutionFrameNodeQuery = (0, _query.nodeQuery)("/substitution/frame!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), substitutionMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/metavariable!");
var FrameForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameForMetavariableSubstitution, Substitution);
    function FrameForMetavariableSubstitution(frameNode, metavariableNode) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution);
        _this.frameNode = frameNode;
        _this.metavariableNode = metavariableNode;
        return _this;
    }
    _create_class(FrameForMetavariableSubstitution, [
        {
            key: "getFrameNode",
            value: function getFrameNode() {
                return this.frameNode;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                var node = this.frameNode; ///
                return node;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedFrameNode = transformFrameNode(this.frameNode, substitutions), transformedMetavariableNode = transformMetavariableNode(this.metavariableNode, substitutions);
                if (transformedFrameNode !== null && transformedMetavariableNode !== null) {
                    var frameNode = transformedFrameNode, metavariableNode = transformedMetavariableNode, frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);
                    transformedSubstitution = frameForMetavariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var frameNode = substitution.getFrameNode(), metavariableNode = substitution.getMetavariableNode(), frameNodeMatches = this.matchFrameNode(frameNode), metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), equalTo = frameNodeMatches && metavariableNodeMatches;
                return equalTo;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                var frameNodeMatches = this.frameNode.match(frameNode);
                return frameNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var frameNodeB = this.frameNode, frameStringB = localContextB.nodeAsString(frameNodeB), metavariableNodeA = this.metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA), string = "[".concat(frameStringB, " for ").concat(metavariableStringA, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var frameForMetavariableSubstitution = null;
                var substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);
                if (substitutionFrameNode !== null) {
                    var substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode, frameNode = substitutionFrameNode; ///
                    frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameNodeAndMetavariableNode",
            value: function fromFrameNodeAndMetavariableNode(frameNode, metavariableNode) {
                var frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);
                return frameForMetavariableSubstitution;
            }
        }
    ]);
    return FrameForMetavariableSubstitution;
}(_substitution.default);
function transformFrameNode(frameNode, substitutions) {
    var transformedFrameNode = null;
    var frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
    if (frameMetavariableNode !== null) {
        var metavariableNode = frameMetavariableNode; ///
        substitutions.someSubstitution(function(substitution) {
            var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                var _$frameNode = substitution.getFrameNode();
                transformedFrameNode = _$frameNode; ////
                return true;
            }
        });
    }
    return transformedFrameNode;
}
function transformMetavariableNode(metavariableNode, substitutions) {
    var transformedMetavariableNode = null;
    substitutions.someSubstitution(function(substitution) {
        var metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);
        if (metavariableNodeMatches) {
            var frameNode = substitution.getFrameNode(), frameMetavariableNode = frameMetavariableNodeQuery(frameNode);
            if (frameMetavariableNode !== null) {
                transformedMetavariableNode = frameMetavariableNode; ///
                return true;
            }
        }
    });
    return transformedMetavariableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZyYW1lTm9kZSA9IGZyYW1lTm9kZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZnJhbWVOb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSB0cmFuc2Zvcm1GcmFtZU5vZGUodGhpcy5mcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybU1ldGF2YXJpYWJsZU5vZGUodGhpcy5tZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICgodHJhbnNmb3JtZWRGcmFtZU5vZGUgIT09IG51bGwpICYmICh0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSB0cmFuc2Zvcm1lZEZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gKGZyYW1lTm9kZU1hdGNoZXMgJiYgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5mcmFtZU5vZGUubWF0Y2goZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVCID0gdGhpcy5mcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhmcmFtZU5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nQn0gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nQX1dYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25GcmFtZU5vZGUgPSBzdWJzdGl0dXRpb25GcmFtZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRnJhbWVOb2RlKGZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSBmcmFtZU5vZGU7IC8vLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEZyYW1lTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJub2RlIiwidHJhbnNmb3JtZWQiLCJzdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZEZyYW1lTm9kZSIsInRyYW5zZm9ybUZyYW1lTm9kZSIsInRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZXF1YWxUbyIsIm1hdGNoIiwiYXNTdHJpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsImZyYW1lTm9kZUIiLCJmcmFtZVN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVN0cmluZ0EiLCJzdHJpbmciLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25GcmFtZU5vZGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJTdWJzdGl0dXRpb24iLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzttRUFSSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyw2QkFBNkJDLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDRSxvQ0FBb0NGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRixpREFBTjtjQUFNQTthQUFBQSxpQ0FDUEssU0FBUyxFQUFFQyxnQkFBZ0I7Z0NBRHBCTjs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0ssU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxnQkFBZ0IsR0FBR0E7OztrQkFMUE47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0wsU0FBUyxFQUFHLEdBQUc7Z0JBRWpDLE9BQU9LO1lBQ1Q7OztZ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