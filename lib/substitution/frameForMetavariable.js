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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZVswXVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25TdHJpbmcoKSB7XG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ30gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uU3RyaW5nO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5hbWUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgZXF1YWxUbyA9IChmcmFtZU5vZGVNYXRjaGVzICYmIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKGdlbmVyYWxNZXRhdmFyaWFibGVOYW1lID09PSBzcGVjaWZpY01ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmICgoZnJhbWVOb2RlICE9PSBudWxsKSAmJiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBjb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlciksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vucywgc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsICAvL1xuICAgICAgICAgIHRva2VucyA9IHN1YnN0aXR1dGlvblRva2VucywgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSB7XG4gIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFske2ZyYW1lU3RyaW5nfSBmb3IgWyR7bWV0YXZhcmlhYmxlU3RyaW5nfV1dYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJhbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldFN1YnN0aXR1dGlvblN0cmluZyIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwiZXF1YWxUbyIsImZyYW1lTm9kZSIsImdldEZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdlbmVyYWxNZXRhdmFyaWFibGVOYW1lIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImNvbnRleHQiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvblRva2VucyIsInN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjttRUFDUTtxQkFFQztvQkFHNkM7c0JBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLHlDQUNsQ0Usd0JBQXdCRixJQUFBQSxnQkFBUyxF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