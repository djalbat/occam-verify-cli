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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), typeNodeQuery = (0, _query.nodeQuery)("/type");
var CombinatorVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(CombinatorVerifier, Verifier);
    function CombinatorVerifier() {
        _class_call_check(this, CombinatorVerifier);
        return _call_super(this, CombinatorVerifier, arguments);
    }
    _create_class(CombinatorVerifier, [
        {
            key: "verifyStatement",
            value: function verifyStatement(statementNode, fileContext) {
                var statementVerifiedAsCombinator;
                var nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = this.verifyChildNodes(childNodes, fileContext);
                statementVerifiedAsCombinator = childNodesVerified; ///
                return statementVerifiedAsCombinator;
            }
        }
    ]);
    return CombinatorVerifier;
}(_verifier.default);
_define_property(CombinatorVerifier, "maps", [
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, fileContext) {
            var Term = _shim.default.Term, localContext = _local.default.fromFileContext(fileContext), context = localContext, term = Term.fromTermNode(termNode, context), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    },
    {
        nodeQuery: typeNodeQuery,
        verify: function(typeNode, fileContext) {
            var typeVerified = false;
            var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typePresent = fileContext.isTypePresentByTypeName(typeName);
            if (typePresent) {
                typeVerified = true;
            }
            return typeVerified;
        }
    }
]);
var combinatorVerifier = new CombinatorVerifier();
var _default = combinatorVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVcIik7XG5cbmNsYXNzIENvbWJpbmF0b3JWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0eXBlTm9kZSwgZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGNvbWJpbmF0b3JWZXJpZmllciA9IG5ldyBDb21iaW5hdG9yVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluYXRvclZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiQ29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInZlcmlmeUNoaWxkTm9kZXMiLCJWZXJpZmllciIsIm1hcHMiLCJ2ZXJpZnkiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJzaGltIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZU5vZGUiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImNvbWJpbmF0b3JWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOERBOzs7ZUFBQTs7OzJEQTVEaUI7K0RBQ0k7NERBQ0k7cUJBRUM7b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUUsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQ3hDLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkgsZUFDbEJJLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNILFlBQVlIO2dCQUU3REMsZ0NBQWdDSSxvQkFBcUIsR0FBRztnQkFFeEQsT0FBT0o7WUFDVDs7O1dBWElKO0VBQTJCVSxpQkFBUTtBQWF2QyxpQkFiSVYsb0JBYUdXLFFBQU87SUFDWjtRQUNFYixXQUFXRDtRQUNYZSxRQUFRLFNBQUNDLFVBQVVWO1lBQ2pCLElBQU0sQUFBRVcsT0FBU0MsYUFBSSxDQUFiRCxNQUNGRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ2YsY0FDNUNnQixVQUFVSCxjQUNWSSxPQUFPTixLQUFLTyxZQUFZLENBQUNSLFVBQVVNLFVBQ25DRyxlQUFlRixLQUFLUixNQUFNLENBQUNJLGNBQWM7Z0JBQ3ZDLElBQU1PLGdCQUFnQjtnQkFFdEIsT0FBT0E7WUFDVDtZQUVOLE9BQU9EO1FBQ1Q7SUFDRjtJQUNBO1FBQ0V4QixXQUFXQztRQUNYYSxRQUFRLFNBQUNZLFVBQVVyQjtZQUNqQixJQUFJc0IsZUFBZTtZQUVuQixJQUFNQyxXQUFXQyxJQUFBQSwwQkFBb0IsRUFBQ0gsV0FDaENJLGNBQWN6QixZQUFZMEIsdUJBQXVCLENBQUNIO1lBRXhELElBQUlFLGFBQWE7Z0JBQ2ZILGVBQWU7WUFDakI7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1LLHFCQUFxQixJQUFJOUI7SUFFL0IsV0FBZThCIn0=