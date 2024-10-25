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
var frameNodeQuery = (0, _query.nodeQuery)("/substitution/frame[0]"), metavariableNodeQuery = (0, _query.nodeQuery)("/substitution/frame[1]/metavariable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution");
var FrameForMetavariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameForMetavariableSubstitution, Substitution);
    function FrameForMetavariableSubstitution(string, node, tokens, frame, metavariable) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameForMetavariableSubstitution, [
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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
            }
        },
        {
            key: "getSubstitutionString",
            value: function getSubstitutionString() {
                var frameString = this.frame.getString(), metavariableString = this.metavariable.getString(), substitutionString = "[".concat(frameString, " for [").concat(metavariableString, "]]");
                return substitutionString;
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
                return this.frame.matchFrameNode(frameNode);
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches;
                var generalMetavariableName = metavariableName; ///
                metavariableName = this.metavariable.getName();
                var specificMetavariableName = metavariableName; ///
                metavariableNameMatches = generalMetavariableName === specificMetavariableName;
                return metavariableNameMatches;
            }
        },
        {
            key: "matchSubstitutionNode",
            value: function matchSubstitutionNode(substitutionNode) {
                debugger;
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
            value: function fromStatementNode(statementNode, context) {
                var frameForMetavariableSubstitution = null;
                var substitutionNode = substitutionNodeQuery(statementNode);
                if (substitutionNode !== null) {
                    var frameNode = frameNodeQuery(substitutionNode), metavariableNode = metavariableNodeQuery(substitutionNode);
                    if (frameNode !== null && metavariableNode !== null) {
                        var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), node = substitutionNode, tokens = context.nodeAsTokens(node), string = stringFromFrameAndMetavariable(frame, metavariable);
                        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, node, tokens, frame, metavariable);
                    }
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                var lexer = context.getLexer(), parser = context.getParser(), string = stringFromFrameAndMetavariable(frame, metavariable), substitutionString = string, unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode), substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, substitutionNode), node = substitutionNode, tokens = substitutionTokens, statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, node, tokens, frame, metavariable);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return FrameForMetavariableSubstitution;
}(_substitution.default);
function stringFromFrameAndMetavariable(frame, metavariable) {
    var frameString = frame.getString(), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZVswXVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25TdHJpbmcoKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ30gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uU3RyaW5nO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5hbWUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgZXF1YWxUbyA9IChmcmFtZU5vZGVNYXRjaGVzICYmIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKGdlbmVyYWxNZXRhdmFyaWFibGVOYW1lID09PSBzcGVjaWZpY01ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgbGV0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzICYmIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKChmcmFtZU5vZGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCBzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vXG4gICAgICAgICAgdG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgY29uc3QgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcmFtZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZSIsImdldEZyYW1lIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0U3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJlcXVhbFRvIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5hbWUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwiZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJGcmFtZSIsInNoaW0iLCJNZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNUb2tlbnMiLCJzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwic3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ub2tlbnMiLCJzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7MkRBZEo7bUVBQ1E7cUJBRUM7b0JBRzZDO3NCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQywyQkFDM0JDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQyx5Q0FDbENFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLGlEQUFOO2NBQU1BO2FBQUFBLGlDQUNQSyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFlBQVk7Z0NBRGxDVDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEs7WUFBUUM7WUFBTUM7O1FBRXBCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxZQUFZLEdBQUdBOzs7a0JBTEhUOztZQVFuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNKLFlBQVksQ0FBQ0ssT0FBTztnQkFFbEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxTQUFTLElBQ2xDQyxxQkFBcUIsSUFBSSxDQUFDVCxZQUFZLENBQUNRLFNBQVMsSUFDaERFLHFCQUFxQixBQUFDLElBQXVCRCxPQUFwQkYsYUFBWSxVQUEyQixPQUFuQkUsb0JBQW1CO2dCQUV0RSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFlBQVk7Z0JBQ3BCLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMsWUFBWUYsYUFBYUcsWUFBWSxJQUNyQ1gsbUJBQW1CUSxhQUFhVCxtQkFBbUI7Z0JBRXpELElBQUksQUFBQ1csY0FBYyxRQUFVVixxQkFBcUIsTUFBTztvQkFDdkQsSUFBTVksbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxZQUN2Q0ksMEJBQTBCLElBQUksQ0FBQ0MscUJBQXFCLENBQUNmO29CQUUzRFMsVUFBV0csb0JBQW9CRTtnQkFDakM7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNrQixjQUFjLENBQUNIO1lBQVk7OztZQUV6RU0sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDckIsWUFBWSxDQUFDb0IscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFNUdGLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JmLGdCQUFnQjtnQkFDcEMsSUFBSWM7Z0JBRUosSUFBTUksMEJBQTBCbEIsa0JBQWtCLEdBQUc7Z0JBRXJEQSxtQkFBbUIsSUFBSSxDQUFDSixZQUFZLENBQUNLLE9BQU87Z0JBRTVDLElBQU1rQiwyQkFBMkJuQixrQkFBa0IsR0FBRztnQkFFdERjLDBCQUEyQkksNEJBQTRCQztnQkFFdkQsT0FBT0w7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsUUFBUTtnQkFFUixJQUFJQztnQkFFSixJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ0EsZ0JBQWdCLEtBQUssTUFBTztvQkFDbkVDLDBCQUEwQjtnQkFDNUIsT0FBTyxJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ0EsZ0JBQWdCLEtBQUssTUFBTztvQkFDMUVDLDBCQUEwQjtnQkFDNUIsT0FBTyxJQUFJLEFBQUNELHFCQUFxQixRQUFVLElBQUksQ0FBQ0EsZ0JBQWdCLEtBQUssTUFBTztvQkFDMUVDLDBCQUEwQjtnQkFDNUIsT0FBTztvQkFDTEEsMEJBQTBCLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUNFLEtBQUssQ0FBQ0Y7Z0JBQ3hEO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEseUNBQXlDeEIsZ0JBQWdCLEVBQUVxQixnQkFBZ0I7Z0JBQ3pFLElBQU1QLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDZixtQkFDckRzQiwwQkFBMEIsSUFBSSxDQUFDRixxQkFBcUIsQ0FBQ0MsbUJBQ3JESSw2Q0FBOENYLDJCQUEyQlE7Z0JBRS9FLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQUlDLG1DQUFtQztnQkFFdkMsSUFBTVIsbUJBQW1COUIsc0JBQXNCb0M7Z0JBRS9DLElBQUlOLHFCQUFxQixNQUFNO29CQUM3QixJQUFNWCxZQUFZdEIsZUFBZWlDLG1CQUMzQkosbUJBQW1CM0Isc0JBQXNCK0I7b0JBRS9DLElBQUksQUFBQ1gsY0FBYyxRQUFVTyxxQkFBcUIsTUFBTzt3QkFDdkQsSUFBUWEsUUFBd0JDLGFBQUksQ0FBNUJELE9BQU9FLGVBQWlCRCxhQUFJLENBQXJCQyxjQUNUckMsUUFBUW1DLE1BQU1HLGFBQWEsQ0FBQ3ZCLFdBQVdrQixVQUN2Q2hDLGVBQWVvQyxhQUFhRSxvQkFBb0IsQ0FBQ2pCLGtCQUFrQlcsVUFDbkVuQyxPQUFPNEIsa0JBQ1AzQixTQUFTa0MsUUFBUU8sWUFBWSxDQUFDMUMsT0FDOUJELFNBQVM0QywrQkFBK0J6QyxPQUFPQzt3QkFFckRpQyxtQ0FBbUMsSUEzR3RCMUMsaUNBMkcyREssUUFBUUMsTUFBTUMsUUFBUUMsT0FBT0M7b0JBQ3ZHO2dCQUNGO2dCQUVBLE9BQU9pQztZQUNUOzs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCMUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVnQyxPQUFPO2dCQUMxRCxJQUFNVSxRQUFRVixRQUFRVyxRQUFRLElBQ3hCQyxTQUFTWixRQUFRYSxTQUFTLElBQzFCakQsU0FBUzRDLCtCQUErQnpDLE9BQU9DLGVBQy9DVSxxQkFBcUJkLFFBQ3JCa0QsNkJBQTZCQyxJQUFBQSxzREFBZ0QsRUFBQ3JDLHFCQUM5RXNDLDZCQUE2QkMsSUFBQUEsZ0VBQXdELEVBQUNILDRCQUE0QkosUUFDbEhRLDJCQUEyQkMsSUFBQUEsNERBQXNELEVBQUNILDRCQUE0QkosU0FDOUduQixtQkFBbUIyQixJQUFBQSxrREFBNEMsRUFBQ0YsMkJBQ2hFRyxxQkFBcUJDLElBQUFBLDJFQUFtRSxFQUFDTiw0QkFBNEJ2QixtQkFDckg1QixPQUFPNEIsa0JBQ1AzQixTQUFTdUQsb0JBQ1RFLHVDQUF1QyxJQTlINUJoRSxpQ0E4SGlFSyxRQUFRQyxNQUFNQyxRQUFRQyxPQUFPQztnQkFFL0csT0FBT3VEO1lBQ1Q7OztXQWpJbUJoRTtFQUF5Q2lFLHFCQUFZO0FBb0kxRSxTQUFTaEIsK0JBQStCekMsS0FBSyxFQUFFQyxZQUFZO0lBQ3pELElBQU1PLGNBQWNSLE1BQU1TLFNBQVMsSUFDN0JDLHFCQUFxQlQsYUFBYVEsU0FBUyxJQUMzQ1osU0FBUyxBQUFDLElBQXVCYSxPQUFwQkYsYUFBWSxVQUEyQixPQUFuQkUsb0JBQW1CO0lBRTFELE9BQU9iO0FBQ1QifQ==