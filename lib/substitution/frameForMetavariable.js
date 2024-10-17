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
                var frameString = this.frame.getString(), metavariableString = this.metavariable.getString(), substitutionString = "[[".concat(frameString, "] for [").concat(metavariableString, "]]");
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
    var frameNode = frame.getNode(), frameString = localContext.nodeAsString(frameNode), metavariableString = metavariable.getString(), string = "[[".concat(frameString, "] for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWVGb3JNZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3Vic3RpdHV0aW9uTm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZ0Zyb21TdWJzdGl0dXRpb25TdHJpbmcsXG4gICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nLFxuICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi9mcmFtZVswXVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZnJhbWUsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uTm9kZSwgc3Vic3RpdHV0aW9uVG9rZW5zKSB7XG4gICAgc3VwZXIoc3RyaW5nKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uVG9rZW5zID0gc3Vic3RpdHV0aW9uVG9rZW5zO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvblRva2VucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uU3RyaW5nKCkge1xuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBgW1ske2ZyYW1lU3RyaW5nfV0gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uU3RyaW5nO1xuICB9XG5cbiAgc2V0U3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGxvY2FsQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGxvY2FsQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN1YnN0aXR1dGlvblN0cmluZygpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nKHN1YnN0aXR1dGlvblN0cmluZyksXG4gICAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyh1bnF1YWxpZmllZFN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKTtcblxuICAgIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSk7XG5cbiAgICB0aGlzLnN1YnN0aXR1dGlvblRva2VucyA9IHN1YnN0aXR1dGlvblRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0FuZFN1YnN0aXR1dGlvbk5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMsIHRoaXMuc3Vic3RpdHV0aW9uTm9kZSk7XG4gIH1cblxuICBzZXRTdWJzdGl0dXRpb25Ub2tlbnMobG9jYWxDb250ZXh0KSB7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGlmICgoZnJhbWVOb2RlICE9PSBudWxsKSAmJiAobWV0YXZhcmlhYmxlTmFtZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBlcXVhbFRvID0gKGZyYW1lTm9kZU1hdGNoZXMgJiYgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGxldCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcblxuICAgIGlmICgoc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkgJiYgKHRoaXMuc3Vic3RpdHV0aW9uTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSAmJiAodGhpcy5zdWJzdGl0dXRpb25Ob2RlID09PSBudWxsKSkge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLnN1YnN0aXR1dGlvbk5vZGUubWF0Y2goc3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZShtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyAmJiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKChmcmFtZU5vZGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVG9rZW5zID0gbG9jYWxDb250ZXh0Lm5vZGVBc1Rva2VucyhzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICBmcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lLCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvblRva2Vucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ub2tlbnMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbihzdHJpbmcsIGZyYW1lLCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvblRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICBmcmFtZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcoZnJhbWVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgW1ske2ZyYW1lU3RyaW5nfV0gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5Iiwic3RyaW5nIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uVG9rZW5zIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0U3Vic3RpdHV0aW9uU3RyaW5nIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzZXRTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zIiwibG9jYWxDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInVucXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmdGcm9tU3Vic3RpdHV0aW9uU3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21VbnF1YWxpZmllZFN0YXRlbWVudFN0cmluZyIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInN1YnN0aXR1dGlvbk5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uVG9rZW5zRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zQW5kU3Vic3RpdHV0aW9uTm9kZSIsInNldFN1YnN0aXR1dGlvblRva2VucyIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsImVxdWFsVG8iLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlTm9kZSIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsIm5vZGVBc1Rva2VucyIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImdldE5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjttRUFDUTtxQkFFQztvQkFHNkM7c0JBRWE7Ozs7Ozs7Ozs7Ozs7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