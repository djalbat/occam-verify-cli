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
    var frameNode = frame.getNode(), frameString = localContext.nodeAsString(frameNode), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for ").concat(metavariableString, "]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnN0aXR1dGlvblwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuZnJhbWVOb2RlID0gZnJhbWVOb2RlO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gdHJhbnNmb3JtRnJhbWVOb2RlKHRoaXMuZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlKHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoKHRyYW5zZm9ybWVkRnJhbWVOb2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gbnVsbCwgIC8vL1xuICAgICAgICAgICAgZnJhbWVOb2RlID0gdHJhbnNmb3JtZWRGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSAoZnJhbWVOb2RlTWF0Y2hlcyAmJiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLmZyYW1lTm9kZS5tYXRjaChmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25GcmFtZU5vZGUgPSBzdWJzdGl0dXRpb25GcmFtZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21UZXJtTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgdmFyaWFibGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZyYW1lTm9kZShmcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gZnJhbWVOb2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRGcmFtZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ31dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uRnJhbWVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkRnJhbWVOb2RlIiwidHJhbnNmb3JtRnJhbWVOb2RlIiwidHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlIiwidHJhbnNmb3JtTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJlcXVhbFRvIiwibWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdWJzdGl0dXRpb25GcmFtZU5vZGUiLCJGcmFtZSIsInNoaW0iLCJNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWUiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNvbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkRBVko7bUVBQ1E7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLDRCQUNsQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0csb0NBQW9DSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUYsaURBQU47Y0FBTUE7YUFBQUEsaUNBQ1BNLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCO2dDQUQ5Q1Q7O2dCQUVqQixrQkFGaUJBO1lBRVhNOztRQUVOLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGdCQUFnQixHQUFHQTs7O2tCQU5QVDs7WUFTbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsYUFBYTtnQkFDdkIsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyx1QkFBdUJDLG1CQUFtQixJQUFJLENBQUNWLFNBQVMsRUFB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