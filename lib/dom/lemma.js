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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _dom = require("../dom");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var _Lemma;
var _default = (0, _dom.domAssigned)((_Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Lemma, TopLevelAssertion);
    function Lemma() {
        _class_call_check(this, Lemma);
        return _call_super(this, Lemma, arguments);
    }
    _create_class(Lemma, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var lemma = this, context = this.getContext(), lemmaString = lemma.getString();
                lemmaString === null ? context.trace("Verifying a lemma...") : context.trace("Verifying the '".concat(lemmaString, "' lemma..."));
                verifies = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verifies) {
                    var lemma1 = this; ///
                    context.addLemma(lemma1);
                    lemmaString === null ? context.debug("...verified a lemma.") : context.debug("...verified the '".concat(lemmaString, "' lemma."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(lemmaNode, context) {
                var node = lemmaNode, lemma = _topLevelAssertion.default.fromNode(Lemma, node, context);
                return lemma;
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default), _define_property(_Lemma, "name", "Lemma"), _Lemma));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBsZW1tYSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmApIDpcbiAgICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBsZW1tYSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgKGxlbW1hU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbGVtbWEuYCkgOlxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMZW1tYVwiO1xuXG4gIHN0YXRpYyBmcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBsZW1tYU5vZGUsIC8vL1xuICAgICAgICAgIGxlbW1hID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTGVtbWEsIG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkxlbW1hIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJsZW1tYSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZExlbW1hIiwiZGVidWciLCJmcm9tTGVtbWFOb2RlIiwibGVtbWFOb2RlIiwibm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3RUFKOEI7bUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxFQUNaQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBY0gsTUFBTUksU0FBUztnQkFFbENELGdCQUFnQixPQUNmRixRQUFRSSxLQUFLLENBQUUsMEJBQ2JKLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZO2dCQUVoREosV0FBVyx1QkFaa0JGLGtCQVlaQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsU0FBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJDLFFBQVFLLFFBQVEsQ0FBQ047b0JBRWhCRyxnQkFBZ0IsT0FDZkYsUUFBUU0sS0FBSyxDQUFFLDBCQUNiTixRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkosYUFBWTtnQkFDcEQ7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUlPUyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVSLE9BQU87Z0JBQ3JDLElBQU1TLE9BQU9ELFdBQ1BULFFBQVFXLDBCQUFpQixDQUFDQyxRQUFRLENBQUNmLE9BQU9hLE1BQU1UO2dCQUV0RCxPQUFPRDtZQUNUOzs7O0VBbEM2Q1csMEJBQWlCLEdBMkI5RCx5QkFBT0UsUUFBTyJ9