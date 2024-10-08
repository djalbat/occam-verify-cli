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
    function FrameForMetavariableSubstitution(string, frameNode, metavariableNode) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution, [
            string
        ]);
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
        }
    ], [
        {
            key: "fromSubstitution",
            value: function fromSubstitution(substitution, localContextA, localContextB) {
                var frameForMetavariableSubstitution = null;
                var substitutionNode = substitution.getNode(), substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);
                if (substitutionFrameNode !== null) {
                    var substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode, frameNode = substitutionFrameNode, string = stringFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, localContextA, localContextB);
                    frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode);
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameNodeAndMetavariableNode",
            value: function fromFrameNodeAndMetavariableNode(frameNode, metavariableNode, localContextA, localContextB) {
                var string = stringFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, localContextA, localContextB), frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode);
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
function stringFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, localContextA, localContextB) {
    var frameNodeB = frameNode, frameStringB = localContextB.nodeAsString(frameNodeB), metavariableNodeA = metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA), string = "[".concat(frameStringB, " for ").concat(metavariableStringA, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuZnJhbWVOb2RlID0gZnJhbWVOb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5mcmFtZU5vZGU7ICAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IHRyYW5zZm9ybUZyYW1lTm9kZSh0aGlzLmZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtTWV0YXZhcmlhYmxlTm9kZSh0aGlzLm1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZEZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRyYW5zZm9ybWVkRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVOb2RlTWF0Y2hlcyAmJiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLmZyYW1lTm9kZS5tYXRjaChmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpLFxuICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1GcmFtZU5vZGUoZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKTtcblxuICAgICAgICB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IGZyYW1lTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkRnJhbWVOb2RlO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgY29uc3QgZnJhbWVOb2RlQiA9IGZyYW1lTm9kZSwgIC8vL1xuICAgICAgICBmcmFtZVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhmcmFtZU5vZGVCKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkRnJhbWVOb2RlIiwidHJhbnNmb3JtRnJhbWVOb2RlIiwidHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlIiwidHJhbnNmb3JtTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJlcXVhbFRvIiwibWF0Y2giLCJmcm9tU3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uRnJhbWVOb2RlIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJTdWJzdGl0dXRpb24iLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlQiIsImZyYW1lU3RyaW5nQiIsIm5vZGVBc1N0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YXZhcmlhYmxlU3RyaW5nQSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUVBUkk7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFB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