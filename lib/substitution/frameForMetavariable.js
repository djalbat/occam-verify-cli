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
var substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution"), substitutionFrameNodeQuery = (0, _query.nodeQuery)("/substitution/frame!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), substitutionMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/metavariable!");
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var frameForMetavariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);
                    if (substitutionFrameNode !== null) {
                        var substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode, frameNode = substitutionFrameNode, localContextA = localContext, localContextB = localContext, string = stringFromFrameNodeAndMetavariableNode(frameNode, metavariableNode, localContextA, localContextB);
                        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uRnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL2ZyYW1lIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy5mcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmZyYW1lTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gdHJhbnNmb3JtRnJhbWVOb2RlKHRoaXMuZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlKHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAoKHRyYW5zZm9ybWVkRnJhbWVOb2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gdHJhbnNmb3JtZWRGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IChmcmFtZU5vZGVNYXRjaGVzICYmIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMuZnJhbWVOb2RlLm1hdGNoKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uRnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uRnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbkZyYW1lTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbkZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBsb2NhbENvbnRleHRBID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiksXG4gICAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZyYW1lTm9kZShmcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gbnVsbDtcblxuICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeShmcmFtZU5vZGUpO1xuXG4gIGlmIChmcmFtZU1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gZnJhbWVOb2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRGcmFtZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRNZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZU5vZGVBbmRNZXRhdmFyaWFibGVOb2RlKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBjb25zdCBmcmFtZU5vZGVCID0gZnJhbWVOb2RlLCAgLy8vXG4gICAgICAgIGZyYW1lU3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKGZyYW1lTm9kZUIpLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKG1ldGF2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nQn0gZm9yICR7bWV0YXZhcmlhYmxlU3RyaW5nQX1dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJzdGl0dXRpb25GcmFtZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldEZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRGcmFtZU5vZGUiLCJ0cmFuc2Zvcm1GcmFtZU5vZGUiLCJ0cmFuc2Zvcm1lZE1ldGF2YXJpYWJsZU5vZGUiLCJ0cmFuc2Zvcm1NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJtYXRjaCIsImZyb21TdWJzdGl0dXRpb24iLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25GcmFtZU5vZGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJmcm9tRnJhbWVOb2RlQW5kTWV0YXZhcmlhYmxlTm9kZSIsIlN1YnN0aXR1dGlvbiIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNvbWVTdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVCIiwiZnJhbWVTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzttRUFUSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQ2xDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDRSw2QkFBNkJGLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDRyxvQ0FBb0NILElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRixpREFBTjtjQUFNQTthQUFBQSxpQ0FDUE0sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQjtnQ0FENUJSOztnQkFFakIsa0JBRmlCQTtZQUVYTTs7UUFFTixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLGdCQUFnQixHQUFHQTs7O2tCQUxQUjs7WUFRbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDTCxTQUFTLEVBQUcsR0FBRztnQkFFakMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxhQUFhO2dCQUN2QixJQUFJQywwQkFBMEI7Z0JBRTlCLElBQU1DLHVCQUF1QkMsbUJBQW1CLElBQUksQ0FBQ1YsU0FBUyxFQUFFTyxnQkFDMURJLDhCQUE4QkMsMEJBQTBCLElBQUksQ0FBQ1gsZ0JBQWdCLEVBQUVNO2dCQUVyRixJQUFJLEFBQUNF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