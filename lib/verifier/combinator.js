"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
var CombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(CombinatorVerifier, Verifier);
    function CombinatorVerifier() {
        _class_call_check(this, CombinatorVerifier);
        return _call_super(this, CombinatorVerifier, arguments);
    }
    _create_class(CombinatorVerifier, [
        {
            key: "verifyStatement",
            value: function verifyStatement(statementNode, context) {
                var statementVerifiesAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerify = this.verifyChildNodes(childNodes, context);
                statementVerifiesAsCombinator = childNodesVerify; ///
                return statementVerifiesAsCombinator;
            }
        }
    ]);
    return CombinatorVerifier;
}(_verifier.default);
_define_property(CombinatorVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, context) {
            var Statement = _dom.default.Statement, statement = Statement.fromStatementNode(statementNode, context), assignments = null, stated = false, statementVerifies = statement.verify(assignments, stated, context);
            return statementVerifies;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, context) {
            var Term = _dom.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, function() {
                var verifiesAhead = true;
                return verifiesAhead;
            });
            return termVerifies;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, context) {
            var typeVerifies = false;
            var typeName = typeNode.getTypeName(), typePresent = context.isTypePresentByTypeName(typeName);
            if (typePresent) {
                typeVerifies = true;
            }
            return typeVerifies;
        }
    }
]);
var combinatorVerifier = new CombinatorVerifier();
var _default = combinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yID0gY2hpbGROb2Rlc1ZlcmlmeTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gZG9tLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOb2RlLmdldFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBjb21iaW5hdG9yVmVyaWZpZXIgPSBuZXcgQ29tYmluYXRvclZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmF0b3JWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIkNvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJjb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZnkiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiVmVyaWZpZXIiLCJtYXBzIiwidmVyaWZ5IiwiU3RhdGVtZW50IiwiZG9tIiwic3RhdGVtZW50IiwiZnJvbVN0YXRlbWVudE5vZGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFZlcmlmaWVzIiwidGVybU5vZGUiLCJUZXJtIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0eXBlTm9kZSIsInR5cGVWZXJpZmllcyIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiY29tYmluYXRvclZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7MERBckVnQjsrREFDSztxQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsVUFDMUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1HLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDcEMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSCxlQUNsQkksYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxtQkFBbUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUg7Z0JBRTNEQyxnQ0FBZ0NJLGtCQUFtQixHQUFHO2dCQUV0RCxPQUFPSjtZQUNUOzs7V0FYSUo7RUFBMkJVLGlCQUFRO0FBYXZDLGlCQWJJVixvQkFhR1csUUFBTztJQUNaO1FBQ0VkLFdBQVdFO1FBQ1hhLFFBQVEsU0FBQ1YsZUFBZUM7WUFDdEIsSUFBTSxBQUFFVSxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ2QsZUFBZUMsVUFDdkRjLGNBQWMsTUFDZEMsU0FBUyxPQUNUQyxvQkFBb0JKLFVBQVVILE1BQU0sQ0FBQ0ssYUFBYUMsUUFBUWY7WUFFaEUsT0FBT2dCO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V0QixXQUFXRDtRQUNYZ0IsUUFBUSxTQUFDUSxVQUFVakI7WUFDakIsSUFBTSxBQUFFa0IsT0FBU1AsWUFBRyxDQUFaTyxNQUNGQyxPQUFPRCxLQUFLRSxZQUFZLENBQUNILFVBQVVqQixVQUNuQ3FCLGVBQWVGLEtBQUtWLE1BQU0sQ0FBQ1QsU0FBUztnQkFDbEMsSUFBTXNCLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDtZQUVOLE9BQU9EO1FBQ1Q7SUFDRjtJQUNBO1FBQ0UzQixXQUFXQztRQUNYYyxRQUFRLFNBQUNjLFVBQVV2QjtZQUNqQixJQUFJd0IsZUFBZTtZQUVuQixJQUFNQyxXQUFXRixTQUFTRyxXQUFXLElBQy9CQyxjQUFjM0IsUUFBUTRCLHVCQUF1QixDQUFDSDtZQUVwRCxJQUFJRSxhQUFhO2dCQUNmSCxlQUFlO1lBQ2pCO1lBRUEsT0FBT0E7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNSyxxQkFBcUIsSUFBSWhDO0lBRS9CLFdBQWVnQyJ9