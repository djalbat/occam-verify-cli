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
var termNodeQuery = (0, _query.nodeQuery)("/term"), statementNodeQuery = (0, _query.nodeQuery)("/statement");
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, assignments, stated, localContext) {
                var verifiedAtMetaLevel;
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, stated, localContext);
                verifiedAtMetaLevel = nonTerminalNodeVerified; ///
                return verifiedAtMetaLevel;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
_define_property(MetaLevelVerifier, "maps", [
    {
        nodeQuery: statementNodeQuery,
        verify: function(statementNode, assignments, stated, localContext) {
            var Statement = _shim.default.Statement, statement = Statement.fromStatementNode(statementNode, localContext), statementVerified = statement.verify(assignments, stated, localContext);
            return statementVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, assignments, stated, localContext) {
            var Term = _shim.default.Term, term = Term.fromTermNode(termNode, localContext), termVerified = term.verify(localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            return termVerified;
        }
    }
]);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKTtcblxuY2xhc3MgTWV0YUxldmVsVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeShub2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZEF0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiB2ZXJpZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB2ZXJpZnk6ICh0ZXJtTm9kZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIk1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZ5Iiwibm9kZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWRBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwiVmVyaWZpZXIiLCJtYXBzIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInNoaW0iLCJzdGF0ZW1lbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidGVybU5vZGUiLCJUZXJtIiwidGVybSIsImZyb21UZXJtTm9kZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJtZXRhTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcURBOzs7ZUFBQTs7OzJEQW5EaUI7K0RBQ0k7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUUsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQkFDNUMsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxNQUNsQk0sYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQywwQkFBMEIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsWUFBWUwsYUFBYUMsUUFBUUM7Z0JBRXZGQyxzQkFBc0JJLHlCQUEwQixHQUFHO2dCQUVuRCxPQUFPSjtZQUNUOzs7V0FYSU47RUFBMEJZLGlCQUFRO0FBYXRDLGlCQWJJWixtQkFhR2EsUUFBTztJQUNaO1FBQ0VmLFdBQVdDO1FBQ1hFLFFBQVEsU0FBQ2EsZUFBZVgsYUFBYUMsUUFBUUM7WUFDM0MsSUFBTSxBQUFFVSxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxZQUFZRixVQUFVRyxpQkFBaUIsQ0FBQ0osZUFBZVQsZUFDdkRjLG9CQUFvQkYsVUFBVWhCLE1BQU0sQ0FBQ0UsYUFBYUMsUUFBUUM7WUFFaEUsT0FBT2M7UUFDVDtJQUNGO0lBQ0E7UUFDRXJCLFdBQVdEO1FBQ1hJLFFBQVEsU0FBQ21CLFVBQVVqQixhQUFhQyxRQUFRQztZQUN0QyxJQUFNLEFBQUVnQixPQUFTTCxhQUFJLENBQWJLLE1BQ0ZDLE9BQU9ELEtBQUtFLFlBQVksQ0FBQ0gsVUFBVWYsZUFDbkNtQixlQUFlRixLQUFLckIsTUFBTSxDQUFDSSxjQUFjO2dCQUN2QyxJQUFNb0IsZ0JBQWdCO2dCQUV0QixPQUFPQTtZQUNUO1lBRU4sT0FBT0Q7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNRSxvQkFBb0IsSUFBSTFCO0lBRTlCLFdBQWUwQiJ9