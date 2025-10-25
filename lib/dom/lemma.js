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
                var lemma = this, node = this.getNode(), context = this.getContext(), lemmaString = lemma.getString();
                lemmaString === null ? context.trace("Verifying a lemma...", node) : context.trace("Verifying the '".concat(lemmaString, "' lemma..."), node);
                verifies = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verifies) {
                    var lemma1 = this; ///
                    context.addLemma(lemma1);
                    lemmaString === null ? context.debug("...verified a lemma.", node) : context.debug("...verified the '".concat(lemmaString, "' lemma."), node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBsZW1tYSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGVtbWFTdHJpbmcgPSBsZW1tYS5nZXRTdHJpbmcoKTtcblxuICAgIChsZW1tYVN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gLCBub2RlKSA6XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS4uLmAsIG5vZGUpO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgbGVtbWEgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG5cbiAgICAgIChsZW1tYVN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIGxlbW1hLmAsIG5vZGUpIDpcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGVtbWFcIjtcblxuICBzdGF0aWMgZnJvbUxlbW1hTm9kZShsZW1tYU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbGVtbWFOb2RlLCAvLy9cbiAgICAgICAgICBsZW1tYSA9IFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKExlbW1hLCBub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVzIiwibGVtbWEiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZExlbW1hIiwiZGVidWciLCJmcm9tTGVtbWFOb2RlIiwibGVtbWFOb2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O3dFQUo4QjttQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsMEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLEVBQ1pDLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBY0wsTUFBTU0sU0FBUztnQkFFbENELGdCQUFnQixPQUNmRixRQUFRSSxLQUFLLENBQUMsd0JBQXdCTixRQUNwQ0UsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUo7Z0JBRTdERixXQUFXLHVCQWJrQkYsa0JBYVpDLFVBQU4sSUFBSztnQkFFaEIsSUFBSUMsVUFBVTtvQkFDWixJQUFNQyxTQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QkcsUUFBUUssUUFBUSxDQUFDUjtvQkFFaEJLLGdCQUFnQixPQUNmRixRQUFRTSxLQUFLLENBQUMsd0JBQXdCUixRQUNwQ0UsUUFBUU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpKLGFBQVksYUFBV0o7Z0JBQy9EO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFUixPQUFPO2dCQUNyQyxJQUFNRixPQUFPVSxXQUNQWCxRQUFRWSwwQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDaEIsT0FBT0ksTUFBTUU7Z0JBRXRELE9BQU9IO1lBQ1Q7Ozs7RUFuQzZDWSwwQkFBaUIsR0E0QjlELHlCQUFPRSxRQUFPIn0=