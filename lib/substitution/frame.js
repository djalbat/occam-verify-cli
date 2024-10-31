"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameSubstitution;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../nodeAndTokens/substitution/frame"));
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
var frameNodeQuery = (0, _query.nodeQuery)("/frameSubstitution/frame[0]"), metavariableNodeQuery = (0, _query.nodeQuery)("/frameSubstitution/frame[1]/metavariable!"), frameSubstitutionNodeQuery = (0, _query.nodeQuery)("/statement/frameSubstitution");
var FrameSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(FrameSubstitution, Substitution);
    function FrameSubstitution(string, node, tokens, frame, metavariable) {
        _class_call_check(this, FrameSubstitution);
        var _this;
        _this = _call_super(this, FrameSubstitution, [
            string,
            node,
            tokens
        ]);
        _this.frame = frame;
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(FrameSubstitution, [
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
            key: "isFrameEqualTo",
            value: function isFrameEqualTo(frame) {
                return this.frame.isEqualTo(frame);
            }
        },
        {
            key: "isMetavariableEqualTo",
            value: function isMetavariableEqualTo(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var frameSubstitution = null;
                var frameSubstitutionNode = frameSubstitutionNodeQuery(statementNode);
                if (frameSubstitutionNode !== null) {
                    var frameNode = frameNodeQuery(frameSubstitutionNode), metavariableNode = metavariableNodeQuery(frameSubstitutionNode);
                    if (frameNode !== null && metavariableNode !== null) {
                        var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frame = Frame.fromFrameNode(frameNode, context), metavariable = Metavariable.fromMetavariableNode(metavariableNode, context), node = frameSubstitutionNode, tokens = context.nodeAsTokens(node), string = stringFromFrameAndMetavariable(frame, metavariable);
                        frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);
                    }
                }
                return frameSubstitution;
            }
        },
        {
            key: "fromFrameAndMetavariable",
            value: function fromFrameAndMetavariable(frame, metavariable, context) {
                var string = stringFromFrameAndMetavariable(frame, metavariable), frameSubstitutionNodeAndTokens = _frame.default.fromString(string, context), node = frameSubstitutionNodeAndTokens.getNode(), tokens = frameSubstitutionNodeAndTokens.getTokens(), frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);
                return frameSubstitution;
            }
        }
    ]);
    return FrameSubstitution;
}(_substitution.default);
function stringFromFrameAndMetavariable(frame, metavariable) {
    var frameString = frame.getString(), metavariableString = metavariable.getString(), string = "[".concat(frameString, " for [").concat(metavariableString, "]]");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vZnJhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbk5vZGVBbmRUb2tlbnMgZnJvbSBcIi4uL25vZGVBbmRUb2tlbnMvc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVTdWJzdGl0dXRpb24vZnJhbWVbMF1cIiksXG4gICAgICBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVTdWJzdGl0dXRpb24vZnJhbWVbMV0vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9mcmFtZVN1YnN0aXR1dGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzRnJhbWVFcXVhbFRvKGZyYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzRXF1YWxUbyhmcmFtZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTsgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWVOb2RlUXVlcnkoZnJhbWVTdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoZnJhbWVTdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKChmcmFtZU5vZGUgIT09IG51bGwpICYmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSkge1xuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgZnJhbWUsIG1ldGF2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyA9IEZyYW1lU3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5mcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZUFuZFRva2Vucy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlQW5kVG9rZW5zLmdldFRva2VucygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBmcmFtZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSkge1xuICBjb25zdCBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBbJHtmcmFtZVN0cmluZ30gZm9yIFske21ldGF2YXJpYWJsZVN0cmluZ31dXWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwiZnJhbWUiLCJtZXRhdmFyaWFibGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImlzRnJhbWVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIkZyYW1lIiwic2hpbSIsIk1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1Rva2VucyIsInN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsIkZyYW1lU3Vic3RpdHV0aW9uTm9kZUFuZFRva2VucyIsImZyb21TdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiU3Vic3RpdHV0aW9uIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJEQVZKO21FQUNROzREQUNrQjtxQkFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsaUJBQWlC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