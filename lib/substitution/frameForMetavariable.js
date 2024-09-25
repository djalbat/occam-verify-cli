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
var frameNodeQuery = (0, _query.nodeQuery)("/substitution/frame!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), substitutionMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/metavariable!");
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
                var transformedFrameNode = transformFrameNode(this.frameNode, substitutions);
                if (transformedFrameNode !== null) {
                    var frameNode = transformedFrameNode, metavariableNode = this.metavariableNode, frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);
                    transformedSubstitution = frameForMetavariableSubstitution; ///
                }
                return transformedSubstitution;
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
                var frameNode = frameNodeQuery(substitutionNode);
                if (frameNode !== null) {
                    var substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode; ///
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
            var substitutionMatchesVariableNode = substitution.matchMetavariableNode(metavariableNode);
            if (substitutionMatchesVariableNode) {
                var _$frameNode = substitution.getFrameNode();
                transformedFrameNode = _$frameNode; ////
                return true;
            }
        });
    }
    return transformedFrameNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZyYW1lTm9kZSA9IGZyYW1lTm9kZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZnJhbWVOb2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHRyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSB0cmFuc2Zvcm1GcmFtZU5vZGUodGhpcy5mcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHRyYW5zZm9ybWVkRnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSB0cmFuc2Zvcm1lZEZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5mcmFtZU5vZGUubWF0Y2goZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZS5tYXRjaChtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCBmcmFtZU5vZGVCID0gdGhpcy5mcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhmcmFtZU5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nQn0gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nQX1dYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBsZXQgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1GcmFtZU5vZGUoZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSBmcmFtZU5vZGU7IC8vLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEZyYW1lTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJub2RlIiwidHJhbnNmb3JtZWQiLCJzdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZEZyYW1lTm9kZSIsInRyYW5zZm9ybUZyYW1lTm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImFzU3RyaW5nIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJmcmFtZU5vZGVCIiwiZnJhbWVTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZSIsImZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlIiwiU3Vic3RpdHV0aW9uIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElB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