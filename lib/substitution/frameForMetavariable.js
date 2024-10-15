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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution"), substitutionFrameNodeQuery = (0, _query.nodeQuery)("/substitution/frame!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), substitutionMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/metavariable!");
var FrameForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameForMetavariableSubstitution, Substitution);
    function FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution, [
            string
        ]);
        _this.frameNode = frameNode;
        _this.metavariableNode = metavariableNode;
        _this.substitutionNode = substitutionNode;
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
            key: "getSubstitutionNode",
            value: function getSubstitutionNode() {
                return this.substitutionNode;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedFrameNode = transformFrameNode(this.frameNode, substitutions), transformedMetavariableNode = transformMetavariableNode(this.metavariableNode, substitutions);
                if (transformedFrameNode !== null && transformedMetavariableNode !== null) {
                    var string = null, frameNode = transformedFrameNode, metavariableNode = transformedMetavariableNode, substitutionNode = null, frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);
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
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                var substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
                return substitutionNodeMatches;
            }
        },
        {
            key: "matchMetavariableNodeAndSubstitutionNode",
            value: function matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
                var metavariableNodeMatches = this.matchMetavariableNode(metavariableNode), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), metavariableNodeAndSubstitutionNodeMatches = metavariableNodeMatches && substitutionNodeMatches;
                return metavariableNodeAndSubstitutionNodeMatches;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var frameForMetavariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);
                    if (substitutionFrameNode !== null) {
                        var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode, frameNode = substitutionFrameNode, frame = Frame.fromTermNode(frameNode, localContext), variable = Metavariable.fromMetavariableNode(metavariableNode, localContext), string = stringFromFrameAndMetavariable(frame, variable, localContext);
                        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);
                    }
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, localContext) {
                var string = stringFromFrameAndMetavariable(frame, metavariable, localContext), frameNode = frame.getNode(), metavariableNode = metavariable.getNode(), substitutionNode = null, statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);
                return statementForMetavariableSubstitution;
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
function stringFromFrameAndMetavariable(frame, metavariable, localContext) {
    var frameNode = frame.getNode(), frameString = localContext.nodeAsString(frameNode), metavariableString = metavariable.getString(), string = "[[".concat(frameString, "] for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnN0aXR1dGlvblwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuZnJhbWVOb2RlID0gZnJhbWVOb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gdHJhbnNmb3JtRnJhbWVOb2RlKHRoaXMuZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlKHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoKHRyYW5zZm9ybWVkRnJhbWVOb2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlID0gdHJhbnNmb3JtZWRGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVOb2RlTWF0Y2hlcyAmJiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLmZyYW1lTm9kZS5tYXRjaChmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgJiYgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9uRnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uRnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb25GcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tVGVybU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIHZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1GcmFtZU5vZGUoZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IG51bGw7XG5cbiAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICBpZiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKTtcblxuICAgICAgICB0cmFuc2Zvcm1lZEZyYW1lTm9kZSA9IGZyYW1lTm9kZTsgLy8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkRnJhbWVOb2RlO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgZnJhbWVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFtbJHtmcmFtZVN0cmluZ31dIGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJzdGl0dXRpb25GcmFtZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRGcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRGcmFtZU5vZGUiLCJ0cmFuc2Zvcm1GcmFtZU5vZGUiLCJ0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJtYXRjaCIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN1YnN0aXR1dGlvbkZyYW1lTm9kZSIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsImZyYW1lU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyREFWSjttRUFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQ2xDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDRSw2QkFBNkJGLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDRyxvQ0FBb0NILElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRixpREFBTjtjQUFNQTthQUFBQSxpQ0FDUE0sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFQyxnQkFBZ0I7Z0NBRDlDVDs7Z0JBRWpCLGtCQUZpQkE7WUFFWE07O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxnQkFBZ0IsR0FBR0E7UUFDeEIsTUFBS0MsZ0JBQWdCLEdBQUdBOzs7a0JBTlBUOztZQVNuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxn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