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
var _verifier = /*#__PURE__*/ _interop_require_default(require("../verifier"));
var _query = require("../utilities/query");
var _term = require("../verify/term");
var _variable = require("../verify/variable");
var _metavariable = require("../verify/metavariable");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), variableNodeQuery = (0, _query.nodeQuery)("/variable!"), metavariableNodeQuery = (0, _query.nodeQuery)("/metavariable!");
var MetaLevelVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetaLevelVerifier, Verifier);
    function MetaLevelVerifier() {
        _class_call_check(this, MetaLevelVerifier);
        return _call_super(this, MetaLevelVerifier, arguments);
    }
    _create_class(MetaLevelVerifier, [
        {
            key: "verify",
            value: function verify(node, localContext) {
                var verified;
                var nonTerminalNode = node, nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                verified = nonTerminalNodeVerified; ///
                return verified;
            }
        }
    ]);
    return MetaLevelVerifier;
}(_verifier.default);
_define_property(MetaLevelVerifier, "maps", [
    {
        nodeQuery: metavariableNodeQuery,
        verify: function(metavariableNode, localContext, verifyAhead) {
            var standaloneMetavariableVerified = (0, _metavariable.verifyStandaloneMetavariable)(metavariableNode, localContext, verifyAhead), metavariableVerified = standaloneMetavariableVerified; ///
            return metavariableVerified;
        }
    },
    {
        nodeQuery: variableNodeQuery,
        verify: function(variableNode, localContext, verifyAhead) {
            var standaloneVariableVerified = (0, _variable.verifyStandaloneVariable)(variableNode, localContext, verifyAhead), variableVerified = standaloneVariableVerified; ///
            return variableVerified;
        }
    },
    {
        nodeQuery: termNodeQuery,
        verify: function(termNode, localContext, verifyAhead) {
            var standaloneTermVerified = (0, _term.verifyStandaloneTerm)(termNode, localContext, verifyAhead), termVerified = standaloneTermVerified; ///
            return termVerified;
        }
    }
]);
var metaLevelVerifier = new MetaLevelVerifier();
var _default = metaLevelVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhTGV2ZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhbmRhbG9uZVRlcm0gfSBmcm9tIFwiLi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSB9IGZyb20gXCIuLi92ZXJpZnkvdmFyaWFibGVcIjtcbmltcG9ydCB7IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vdmVyaWZ5L21ldGF2YXJpYWJsZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUhXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFZlcmlmaWVyIGV4dGVuZHMgVmVyaWZpZXIge1xuICB2ZXJpZnkobm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB2ZXJpZnk6IChtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YW5kYWxvbmVNZXRhdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gc3RhbmRhbG9uZU1ldGF2YXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHZlcmlmeTogKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCksXG4gICAgICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7ICAvLy9cblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVmVyaWZpZXIgPSBuZXcgTWV0YUxldmVsVmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVmVyaWZpZXIiLCJ2ZXJpZnkiLCJub2RlIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJWZXJpZmllciIsIm1hcHMiLCJtZXRhdmFyaWFibGVOb2RlIiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lTWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ0ZXJtTm9kZSIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1WZXJpZmllZCIsIm1ldGFMZXZlbFZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7K0RBNURxQjtxQkFFSztvQkFDVzt3QkFDSTs0QkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsZUFDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1HLGtDQUFELEFBQUw7Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsSUFBSSxFQUFFQyxZQUFZO2dCQUN2QixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JILE1BQ2xCSSwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0YsaUJBQWlCRixjQUFjO29CQUNsRixJQUFNSyxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNUO2dCQUVOSixXQUFXRSx5QkFBMEIsR0FBRztnQkFFeEMsT0FBT0Y7WUFDVDs7O1dBZElKO0VBQTBCUyxpQkFBUTtBQWdCdEMsaUJBaEJJVCxtQkFnQkdVLFFBQU87SUFDWjtRQUNFYixXQUFXRTtRQUNYRSxRQUFRLFNBQUNVLGtCQUFrQlIsY0FBY1M7WUFDdkMsSUFBTUMsaUNBQWlDQyxJQUFBQSwwQ0FBNEIsRUFBQ0gsa0JBQWtCUixjQUFjUyxjQUM5RkcsdUJBQXVCRixnQ0FBaUMsR0FBRztZQUVqRSxPQUFPRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFbEIsV0FBV0M7UUFDWEcsUUFBUSxTQUFDZSxjQUFjYixjQUFjUztZQUNuQyxJQUFNSyw2QkFBNkJDLElBQUFBLGtDQUF3QixFQUFDRixjQUFjYixjQUFjUyxjQUNsRk8sbUJBQW1CRiw0QkFBNkIsR0FBRztZQUV6RCxPQUFPRTtRQUNUO0lBQ0Y7SUFDQTtRQUNFdEIsV0FBV0Q7UUFDWEssUUFBUSxTQUFDbUIsVUFBVWpCLGNBQWNTO1lBQy9CLElBQU1TLHlCQUF5QkMsSUFBQUEsMEJBQW9CLEVBQUNGLFVBQVVqQixjQUFjUyxjQUN0RVcsZUFBZUYsd0JBQXlCLEdBQUc7WUFFakQsT0FBT0U7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNQyxvQkFBb0IsSUFBSXhCO0lBRTlCLFdBQWV3QiJ9