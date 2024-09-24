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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _query = require("../utilities/query");
var _brackets = require("../utilities/brackets");
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
var frameNodeQuery = (0, _query.nodeQuery)("/substitution/frame!"), substitutionMetavariableNodeQuery = (0, _query.nodeQuery)("/substitution/metavariable!"), frameStatementMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/statement/metavariable!");
var FrameForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameForMetavariableSubstitution, Substitution);
    function FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution);
        _this.frameNode = frameNode;
        _this.metavariableNode = metavariableNode;
        _this.substitution = substitution;
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
            key: "getSubstitution",
            value: function getSubstitution() {
                return this.substitution;
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
            key: "isSimple",
            value: function isSimple() {
                var simple = this.substitution === null;
                return simple;
            }
        },
        {
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedFrameNode = transformFrameNode(this.frameNode, substitutions);
                if (transformedFrameNode !== null) {
                    var substitution = null, frameNode = transformedFrameNode, metavariableNode = this.metavariableNode, frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);
                    transformedSubstitution = frameForMetavariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                frameNode = (0, _brackets.stripBracketsFromFrame)(frameNode); ///
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
                var metavariableNodeAndSubstitutionNodeMatches = false;
                return metavariableNodeAndSubstitutionNodeMatches;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var string;
                var frameNodeB = this.frameNode, frameStringB = localContextB.nodeAsString(frameNodeB), metavariableNodeA = this.metavariableNode, metavariableStringA = localContextA.nodeAsString(metavariableNodeA);
                if (this.substitution === null) {
                    string = "[".concat(frameStringB, " for ").concat(metavariableStringA, "]");
                } else {
                    var substitutionString = this.substitution.asString(localContextA, localContextA);
                    string = "[".concat(frameStringB, " for ").concat(metavariableStringA).concat(substitutionString, "]");
                }
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
                    frameNode = (0, _brackets.stripBracketsFromFrame)(frameNode); ///
                    var substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode), metavariableNode = substitutionMetavariableNode, substitution = null;
                    frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameNodeAndMetavariableNode",
            value: function fromFrameNodeAndMetavariableNode(frameNode, metavariableNode) {
                frameNode = (0, _brackets.stripBracketsFromFrame)(frameNode); ///
                var substitution = null, frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameNodeMetavariableNodeAndSubstitutionNode",
            value: function fromFrameNodeMetavariableNodeAndSubstitutionNode(frameNode, metavariableNode, substitutionNode) {
                frameNode = (0, _brackets.stripBracketsFromFrame)(frameNode); ///
                var substitution = substitutionFromSubstitutionNode(substitutionNode), frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);
                return frameForMetavariableSubstitution;
            }
        }
    ]);
    return FrameForMetavariableSubstitution;
}(_substitution.default);
function substitutionFromSubstitutionNode(substitutionNode) {
    var substitution = null;
    if (substitution === null) {
        var termForVariableSubstitution = _termForVariable.default.fromSubstitutionNode(substitutionNode);
        if (termForVariableSubstitution !== null) {
            substitution = termForVariableSubstitution; ///
        }
    }
    if (substitution === null) {
        var frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitutionNode(substitutionNode);
        if (frameForMetavariableSubstitution !== null) {
            substitution = frameForMetavariableSubstitution; ///
        }
    }
    return substitution;
}
function transformFrameNode(frameNode, substitutions) {
    var transformedFrameNode = null;
    var frameStatementMetavariableNode = frameStatementMetavariableNodeQuery(frameNode);
    if (frameStatementMetavariableNode !== null) {
        var metavariableNode = frameStatementMetavariableNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuaW1wb3J0IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1Gb3JWYXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbUZyYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5mcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5mcmFtZU5vZGU7ICAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gdHJhbnNmb3JtRnJhbWVOb2RlKHRoaXMuZnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZEZyYW1lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IHRyYW5zZm9ybWVkRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgZnJhbWVOb2RlID0gc3RyaXBCcmFja2V0c0Zyb21GcmFtZShmcmFtZU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLmZyYW1lTm9kZS5tYXRjaChmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBmcmFtZU5vZGVCID0gdGhpcy5mcmFtZU5vZGUsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyhmcmFtZU5vZGVCKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlQSA9IHRoaXMubWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlQSk7XG5cbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ0J9IGZvciAke21ldGF2YXJpYWJsZVN0cmluZ0F9XWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9uLmFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEEpO1xuXG4gICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmdCfSBmb3IgJHttZXRhdmFyaWFibGVTdHJpbmdBfSR7c3Vic3RpdHV0aW9uU3RyaW5nfV1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBsZXQgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBmcmFtZU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbUZyYW1lKGZyYW1lTm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUoZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgZnJhbWVOb2RlID0gc3RyaXBCcmFja2V0c0Zyb21GcmFtZShmcmFtZU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZU5vZGVNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uTm9kZShmcmFtZU5vZGUsIG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBmcmFtZU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbUZyYW1lKGZyYW1lTm9kZSk7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICBpZiAoZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRnJhbWVOb2RlKGZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRGcmFtZU5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IGZyYW1lU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KGZyYW1lTm9kZSk7XG5cbiAgaWYgKGZyYW1lU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZVN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3Vic3RpdHV0aW9uLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkRnJhbWVOb2RlID0gZnJhbWVOb2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRGcmFtZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImdldEZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXROb2RlIiwibm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwidHJhbnNmb3JtZWQiLCJzdWJzdGl0dXRpb25zIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZEZyYW1lTm9kZSIsInRyYW5zZm9ybUZyYW1lTm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWF0Y2hGcmFtZU5vZGUiLCJzdHJpcEJyYWNrZXRzRnJvbUZyYW1lIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImFzU3RyaW5nIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdHJpbmciLCJmcmFtZU5vZGVCIiwiZnJhbWVTdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVTdHJpbmdBIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25NZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZyYW1lTm9kZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRnJhbWVOb2RlTWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyYW1lU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNvbWVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzttRUFWSTtzRUFDZTtxQkFFZDt3QkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMseUJBQzNCQyxvQ0FBb0NELElBQUFBLGdCQUFTLEVBQUMsZ0NBQzlD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