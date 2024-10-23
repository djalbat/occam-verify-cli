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
    function FrameForMetavariableSubstitution(string, frame, metavariable, substitutionNode, substitutionTokens) {
        _class_call_check(this, FrameForMetavariableSubstitution);
        var _this;
        _this = _call_super(this, FrameForMetavariableSubstitution, [
            string
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        _this.substitutionNode = substitutionNode;
        _this.substitutionTokens = substitutionTokens;
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
            key: "setSubstitutionNodeAndTokens",
            value: function setSubstitutionNodeAndTokens(localContext) {
                var lexer = localContext.getLexer(), parser = localContext.getParser(), substitutionString = this.getSubstitutionString(), unqualifiedStatementString = (0, _node.unqualifiedStatementStringFromSubstitutionString)(substitutionString), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromUnqualifiedStatementString)(unqualifiedStatementString, lexer), unqualifiedStatementNode = (0, _node.unqualifiedStatementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser);
                this.substitutionNode = (0, _node.substitutionNodeFromUnqualifiedStatementNode)(unqualifiedStatementNode);
                this.substitutionTokens = (0, _tokens.substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode)(unqualifiedStatementTokens, this.substitutionNode);
            }
        },
        {
            key: "setSubstitutionTokens",
            value: function setSubstitutionTokens(localContext) {}
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
                var metavariableNameA = metavariableName; ///
                metavariableName = this.metavariable.getName();
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
                        var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frame = Frame.fromFrameNode(frameNode, localContext), metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext), string = stringFromFrameAndMetavariable(frame, metavariable, localContext), substitutionTokens = localContext.nodeAsTokens(substitutionNode);
                        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frame, metavariable, substitutionNode, substitutionTokens);
                    }
                }
                return frameForMetavariableSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, localContext) {
                var string = stringFromFrameAndMetavariable(frame, metavariable, localContext), substitutionNode = null, substitutionTokens = null, statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frame, metavariable, substitutionNode, substitutionTokens);
                return statementForMetavariableSubstitution;
            }
        }
    ]);
    return FrameForMetavariableSubstitution;
}(_substitution.default);
function stringFromFrameAndMetavariable(frame, metavariable, localContext) {
    var frameNode = frame.getNode(), frameString = localContext.nodeAsString(frameNode), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZVswXVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uU3RyaW5nKCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBgWyR7ZnJhbWVTdHJpbmd9IGZvciBbJHttZXRhdmFyaWFibGVTdHJpbmd9XV1gO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblN0cmluZztcbiAgfVxuXG4gIHNldFN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBsb2NhbENvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBsb2NhbENvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdWJzdGl0dXRpb25TdHJpbmcoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nRnJvbVN1YnN0aXR1dGlvblN0cmluZyhzdWJzdGl0dXRpb25TdHJpbmcpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcodW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnModW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHBhcnNlcik7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpO1xuXG4gICAgdGhpcy5zdWJzdGl0dXRpb25Ub2tlbnMgPSBzdWJzdGl0dXRpb25Ub2tlbnNGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNBbmRTdWJzdGl0dXRpb25Ob2RlKHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCB0aGlzLnN1YnN0aXR1dGlvbk5vZGUpO1xuICB9XG5cbiAgc2V0U3Vic3RpdHV0aW9uVG9rZW5zKGxvY2FsQ29udGV4dCkge1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5hbWUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgZXF1YWxUbyA9IChmcmFtZU5vZGVNYXRjaGVzICYmIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuXG4gICAgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpICYmICh0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPT09IG51bGwpKSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMuc3Vic3RpdHV0aW9uTm9kZS5tYXRjaChzdWJzdGl0dXRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzICYmIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoKGZyYW1lTm9kZSAhPT0gbnVsbCkgJiYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBsb2NhbENvbnRleHQubm9kZUFzVG9rZW5zKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWUsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblRva2VucyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uKHN0cmluZywgZnJhbWUsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgIGZyYW1lU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhmcmFtZU5vZGUpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ30gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0U3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwibG9jYWxDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSIsInNldFN1YnN0aXR1dGlvblRva2VucyIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsImVxdWFsVG8iLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsIm5vZGVBc1Rva2VucyIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjttRUFDUTtxQkFFQztvQkFHNkM7c0JBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLHlDQUNsQ0Usd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXpCLElBQUEsQUFBTUYsaURBQU47Y0FBTUE7YUFBQUEsaUNBQ1BLLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0I7Z0NBRDFEVDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEs7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQUtDLGtCQUFrQixHQUFHQTs7O2tCQVBUVDs7WUFVbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZ0JBQWdCO1lBQzlCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixrQkFBa0I7WUFDaEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxPQUFPO2dCQUVsRCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNF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