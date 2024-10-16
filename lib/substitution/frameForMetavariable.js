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
var _name = require("../utilities/name");
var _node = require("../utilities/node");
var _tokens = require("../utilities/tokens");
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
var frameNodeQuery = (0, _query.nodeQuery)("/substitution/frame[0]"), metavariableNodeQuery = (0, _query.nodeQuery)("/substitution/frame[1]/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable");
var FrameForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameForMetavariableSubstitution, Substitution);
    function FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode, substitutionTokens) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution, [
            string
        ]);
        _this.frameNode = frameNode;
        _this.metavariableNode = metavariableNode;
        _this.substitutionNode = substitutionNode;
        _this.substitutionTokens = substitutionTokens;
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
            key: "getSubstitutionTokens",
            value: function getSubstitutionTokens() {
                return this.substitutionTokens;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(this.metavariableNode);
                return metavariableName;
            }
        },
        {
            key: "setSubstitutionNode",
            value: function setSubstitutionNode() {
                this.substitutionNode = (0, _node.substitutionNodeFromSubstitutionTokens)(this.substitutionTokens);
            }
        },
        {
            key: "setSubstitutionTokens",
            value: function setSubstitutionTokens() {
                var frameMetavariableNode = frameMetavariableNodeQuery(this.frameNode), frameMetavariableName = (0, _name.metavariableNameFromMetavariableNode)(frameMetavariableNode), metavariableName = (0, _name.metavariableNameFromMetavariableNode)(this.metavariableNode), substitutionString = "[[".concat(frameMetavariableName, "] for [").concat(metavariableName, "]]");
                this.substitutionTokens = (0, _tokens.substitutionTokensFromSubstitutionString)(substitutionString);
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var equalTo = false;
                var frameNode = substitution.getFrameNode(), metavariableName = substitution.getMetavariableName();
                if (frameNode !== null && metavariableName !== null) {
                    var frameNodeMatches = this.matchFrameNode(frameNode), metavariableNameMatches = this.matchMetavariableName(metavariableName);
                    equalTo = frameNodeMatches && metavariableNameMatches;
                }
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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches;
                var metavariableNameA = metavariableName; ///
                metavariableName = (0, _name.metavariableNameFromMetavariableNode)(this.metavariableNode);
                var metavariableNameB = metavariableName; ///
                metavariableNameMatches = metavariableNameA === metavariableNameB;
                return metavariableNameMatches;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                var substitutionNodeMatches;
                if (substitutionNode === null && this.substitutionNode === null) {
                    substitutionNodeMatches = true;
                } else if (substitutionNode === null && this.substitutionNode !== null) {
                    substitutionNodeMatches = false;
                } else if (substitutionNode !== null && this.substitutionNode === null) {
                    substitutionNodeMatches = false;
                } else {
                    substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
                }
                return substitutionNodeMatches;
            }
        },
        {
            key: "matchMetavariableNameAndSubstitutionNode",
            value: function matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
                var metavariableNameMatches = this.matchMetavariableName(metavariableName), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), metavariableNameAndSubstitutionNodeMatches = metavariableNameMatches && substitutionNodeMatches;
                return metavariableNameAndSubstitutionNodeMatches;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, localContext) {
                var frameForMetavariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var frameNode = frameNodeQuery(substitutionNode), metavariableNode = metavariableNodeQuery(substitutionNode);
                    if (frameNode !== null && metavariableNode !== null) {
                        var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frame = Frame.fromFrameNode(frameNode, localContext), variable = Metavariable.fromMetavariableNode(metavariableNode, localContext), string = stringFromFrameAndMetavariable(frame, variable, localContext), substitutionTokens = localContext.nodeAsTokens(substitutionNode);
                        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode, substitutionTokens);
                    }
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, localContext) {
                var string = stringFromFrameAndMetavariable(frame, metavariable, localContext), frameNode = frame.getNode(), metavariableNode = metavariable.getNode(), substitutionNode = null, substitutionTokens = null, statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode, substitutionTokens);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return FrameForMetavariableSubstitution;
}(_substitution.default);
function stringFromFrameAndMetavariable(frame, metavariable, localContext) {
    var frameNode = frame.getNode(), frameString = localContext.nodeAsString(frameNode), metavariableString = metavariable.getString(), string = "[[".concat(frameString, "] for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVN1YnN0aXR1dGlvblN0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZVswXVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWVOb2RlLCBtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25Ub2tlbnMpIHtcbiAgICBzdXBlcihzdHJpbmcpO1xuXG4gICAgdGhpcy5mcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvblRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ub2tlbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUodGhpcy5tZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgc2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblRva2Vucyh0aGlzLnN1YnN0aXR1dGlvblRva2Vucyk7XG4gIH1cblxuICBzZXRTdWJzdGl0dXRpb25Ub2tlbnMoKSB7XG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOb2RlID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkodGhpcy5mcmFtZU5vZGUpLFxuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUoZnJhbWVNZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSh0aGlzLm1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBgW1ske2ZyYW1lTWV0YXZhcmlhYmxlTmFtZX1dIGZvciBbJHttZXRhdmFyaWFibGVOYW1lfV1dYDtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5hbWUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgZXF1YWxUbyA9IChmcmFtZU5vZGVNYXRjaGVzICYmIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLmZyYW1lTm9kZS5tYXRjaChmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKHRoaXMubWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzICYmIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCB2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2VucyhzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lTm9kZSwgbWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgIGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbWyR7ZnJhbWVTdHJpbmd9XSBmb3IgWyR7bWV0YXZhcmlhYmxlU3RyaW5nfV1dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ub2tlbnMiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInNldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlRnJvbVN1YnN0aXR1dGlvblRva2VucyIsInNldFN1YnN0aXR1dGlvblRva2VucyIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblRva2Vuc0Zyb21TdWJzdGl0dXRpb25TdHJpbmciLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJlcXVhbFRvIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaCIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsInZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJub2RlQXNUb2tlbnMiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXROb2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiZnJhbWVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OzJEQWJKO21FQUNRO3FCQUVDO29CQUMyQjtvQkFDRTtzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsMkJBQzNCQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMseUNBQ2xDRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUMsNEJBQ2xDRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNRixpREFBTjtjQUFNQTthQUFBQSxpQ0FDUE0sTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCO2dDQURsRVY7O2dCQUVqQixrQkFGaUJBO1lBRVhNOztRQUVOLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGdCQUFnQixHQUFHQTtRQUN4QixNQUFLQyxrQkFBa0IsR0FBR0E7OztrQkFQVFY7O1lBVW5CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGdCQUFnQjtZQUM5Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixrQkFBa0I7WUFDaEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CQyxJQUFBQSwwQ0FBb0MsRUFBQyxJQUFJLENBQUNULGdCQUFnQjtnQkFFbkYsT0FBT1E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULGdCQUFnQixHQUFHVSxJQUFBQSw0Q0FBc0MsRUFBQyxJQUFJLENBQUNULGtCQUFrQjtZQUN4Rjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx3QkFBd0JoQiwyQkFBMkIsSUFBSSxDQUFDRSxTQUFTLEdBQ25FZSx3QkFBd0JMLElBQUFBLDBDQUFvQyxFQUFDSSx3QkFDN0RMLG1CQUFtQkMsSUFBQUEsMENBQW9DLEVBQUMsSUFBSSxDQUFDVCxnQkFBZ0IsR0FDN0VlLHFCQUFxQixBQUFDLEtBQW1DUCxPQUEvQk0sdUJBQXNCLFdBQTBCLE9BQWpCTixrQkFBaUI7Z0JBRTlFLElBQUksQ0FBQ04sa0JBQWtCLEdBQUdjLElBQUFBLGdEQUF3QyxFQUFDRDtZQUNyRTs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxZQUFZO2dCQUNwQixJQUFJQyxVQUFVO2dCQUVkLElBQU1wQixZQUFZbUIsYUFBYWYsWUFBWSxJQUNyQ0ssbUJBQW1CVSxhQUFhWCxtQkFBbUI7Z0JBRXpELElBQUksQUFBQ1IsY0FBYyxRQUFVUyxxQkFBcUIsTUFBTztvQkFDdkQsSUFBTVksbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDdEIsWUFDdkN1QiwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ2Y7b0JBRTNEVyxVQUFXQyxvQkFBb0JFO2dCQUNqQztnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWV0QixTQUFTO2dCQUN0QixJQUFNcUIsbUJBQW1CLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ3lCLEtBQUssQ0FBQ3pCO2dCQUU5QyxPQUFPcUI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JmLGdCQUFnQjtnQkFDcEMsSUFBSWM7Z0JBRUosSUFBTUcsb0JBQW9CakIsa0JBQWtCLEdBQUc7Z0JBRS9DQSxtQkFBbUJDLElBQUFBLDBDQUFvQyxFQUFDLElBQUksQ0FBQ1QsZ0JBQWdCO2dCQUU3RSxJQUFNMEIsb0JBQW9CbEIsa0JBQWtCLEdBQUc7Z0JBRS9DYywwQkFBMkJHLHNCQUFzQkM7Z0JBRWpELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCMUIsZ0JBQWdCO2dCQUNwQyxJQUFJMkI7Z0JBRUosSUFBSSxBQUFDM0IscUJBQXFCLFFBQVUsSUFBSSxDQUFDQSxnQkFBZ0IsS0FBSyxNQUFPO29CQUNuRTJCLDBCQUEwQjtnQkFDNUIsT0FBTyxJQUFJLEFBQUMzQixxQkFBcUIsUUFBVSxJQUFJLENBQUNBLGdCQUFnQixLQUFLLE1BQU87b0JBQzFFMkIsMEJBQTBCO2dCQUM1QixPQUFPLElBQUksQUFBQzNCLHFCQUFxQixRQUFVLElBQUksQ0FBQ0EsZ0JBQWdCLEtBQUssTUFBTztvQkFDMUUyQiwwQkFBMEI7Z0JBQzVCLE9BQU87b0JBQ0xBLDBCQUEwQixJQUFJLENBQUMzQixnQkFBZ0IsQ0FBQ3VCLEtBQUssQ0FBQ3ZCO2dCQUN4RDtnQkFFQSxPQUFPMkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx5Q0FBeUNyQixnQkFBZ0IsRUFBRVAsZ0JBQWdCO2dCQUN6RSxJQUFNcUIsMEJBQTBCLElBQUksQ0FBQ0MscUJBQXFCLENBQUNmLG1CQUNyRG9CLDBCQUEwQixJQUFJLENBQUNELHFCQUFxQixDQUFDMUIsbUJBQ3JENkIsNkNBQThDUiwyQkFBMkJNO2dCQUUvRSxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxZQUFZO2dCQUNsRCxJQUFJQyxtQ0FBbUM7Z0JBRXZDLElBQU1qQyxtQkFBbUJMLHNCQUFzQm9DO2dCQUUvQyxJQUFJL0IscUJBQXFCLE1BQU07b0JBQzdCLElBQU1GLFlBQVlOLGVBQWVRLG1CQUMzQkQsbUJBQW1CTCxzQkFBc0JNO29CQUUvQyxJQUFJLEFBQUNGLGNBQWMsUUFBVUMscUJBQXFCLE1BQU87d0JBQ3ZELElBQVFtQyxRQUF3QkMsYUFBSSxDQUE1QkQsT0FBT0UsZUFBaUJELGFBQUksQ0FBckJDLGNBQ1RDLFFBQVFILE1BQU1JLGFBQWEsQ0FBQ3hDLFdBQVdrQyxlQUN2Q08sV0FBV0gsYUFBYUksb0JBQW9CLENBQUN6QyxrQkFBa0JpQyxlQUMvRG5DLFNBQVM0QywrQkFBK0JKLE9BQU9FLFVBQVVQLGVBQ3pEL0IscUJBQXFCK0IsYUFBYVUsWUFBWSxDQUFDMUM7d0JBRXJEaUMsbUNBQW1DLElBekh0QjFDLGlDQXlIMkRNLFFBQVFDLFdBQVdDLGtCQUFrQkMsa0JBQWtCQztvQkFDakk7Z0JBQ0Y7Z0JBRUEsT0FBT2dDO1lBQ1Q7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJOLEtBQUssRUFBRU8sWUFBWSxFQUFFWixZQUFZO2dCQUMvRCxJQUFNbkMsU0FBUzRDLCtCQUErQkosT0FBT08sY0FBY1osZUFDN0RsQyxZQUFZdUMsTUFBTVEsT0FBTyxJQUN6QjlDLG1CQUFtQjZDLGFBQWFDLE9BQU8sSUFDdkM3QyxtQkFBbUIsTUFDbkJDLHFCQUFxQixNQUNyQjZDLHVDQUF1QyxJQXRJNUJ2RCxpQ0FzSWlFTSxRQUFRQyxXQUFXQyxrQkFBa0JDLGtCQUFrQkM7Z0JBRXpJLE9BQU82QztZQUNUOzs7V0F6SW1CdkQ7RUFBeUN3RCxxQkFBWTtBQTRJMUUsU0FBU04sK0JBQStCSixLQUFLLEVBQUVPLFlBQVksRUFBRVosWUFBWTtJQUN2RSxJQUFNbEMsWUFBWXVDLE1BQU1RLE9BQU8sSUFDekJHLGNBQWNoQixhQUFhaUIsWUFBWSxDQUFDbkQsWUFDeENvRCxxQkFBcUJOLGFBQWFPLFNBQVMsSUFDM0N0RCxTQUFTLEFBQUMsS0FBeUJxRCxPQUFyQkYsYUFBWSxXQUE0QixPQUFuQkUsb0JBQW1CO0lBRTVELE9BQU9yRDtBQUNUIn0=