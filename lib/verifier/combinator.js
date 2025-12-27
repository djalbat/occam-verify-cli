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
var _structure = /*#__PURE__*/ _interop_require_default(require("../structure"));
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
            var Statement = _structure.default.Statement, statement = Statement.fromStatementNode(statementNode, context), assignments = null, stated = false, statementVerifies = statement.verify(assignments, stated, context);
            return statementVerifies;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, context) {
            var Term = _structure.default.Term, term = Term.fromTermNode(termNode, context), termVerifies = term.verify(context, function() {
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
            var nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
            if (typePresent) {
                typeVerifies = true;
            }
            return typeVerifies;
        }
    }
]);
var combinatorVerifier = new CombinatorVerifier();
var _default = combinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpO1xuXG5jbGFzcyBDb21iaW5hdG9yVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yID0gY2hpbGROb2Rlc1ZlcmlmeTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0eXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgY29tYmluYXRvclZlcmlmaWVyID0gbmV3IENvbWJpbmF0b3JWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5hdG9yVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJDb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiY29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZ5IiwidmVyaWZ5Q2hpbGROb2RlcyIsIlZlcmlmaWVyIiwibWFwcyIsInZlcmlmeSIsIlN0YXRlbWVudCIsInN0cnVjdHVyZSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInRlcm1Ob2RlIiwiVGVybSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZmllc0FoZWFkIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZXMiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImNvbWJpbmF0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUVBOzs7ZUFBQTs7O2dFQXJFc0I7K0RBQ0Q7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQ3BDLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MsbUJBQW1CLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFlBQVlIO2dCQUUzREMsZ0NBQWdDSSxrQkFBbUIsR0FBRztnQkFFdEQsT0FBT0o7WUFDVDs7O1dBWElKO0VBQTJCVSxpQkFBUTtBQWF2QyxpQkFiSVYsb0JBYUdXLFFBQU87SUFDWjtRQUNFZCxXQUFXRTtRQUNYYSxRQUFRLFNBQUNWLGVBQWVDO1lBQ3RCLElBQU0sQUFBRVUsWUFBY0Msa0JBQVMsQ0FBdkJELFdBQ0ZFLFlBQVlGLFVBQVVHLGlCQUFpQixDQUFDZCxlQUFlQyxVQUN2RGMsY0FBYyxNQUNkQyxTQUFTLE9BQ1RDLG9CQUFvQkosVUFBVUgsTUFBTSxDQUFDSyxhQUFhQyxRQUFRZjtZQUVoRSxPQUFPZ0I7UUFDVDtJQUNGO0lBQ0E7UUFDRXRCLFdBQVdEO1FBQ1hnQixRQUFRLFNBQUNRLFVBQVVqQjtZQUNqQixJQUFNLEFBQUVrQixPQUFTUCxrQkFBUyxDQUFsQk8sTUFDRkMsT0FBT0QsS0FBS0UsWUFBWSxDQUFDSCxVQUFVakIsVUFDbkNxQixlQUFlRixLQUFLVixNQUFNLENBQUNULFNBQVM7Z0JBQ2xDLElBQU1zQixnQkFBZ0I7Z0JBRXRCLE9BQU9BO1lBQ1Q7WUFFTixPQUFPRDtRQUNUO0lBQ0Y7SUFDQTtRQUNFM0IsV0FBV0M7UUFDWGMsUUFBUSxTQUFDYyxVQUFVdkI7WUFDakIsSUFBSXdCLGVBQWU7WUFFbkIsSUFBTUMsa0JBQWtCRixTQUFTRyxrQkFBa0IsSUFDN0NDLGNBQWMzQixRQUFRNEIsOEJBQThCLENBQUNIO1lBRTNELElBQUlFLGFBQWE7Z0JBQ2ZILGVBQWU7WUFDakI7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1LLHFCQUFxQixJQUFJaEM7SUFFL0IsV0FBZWdDIn0=