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
var _occamfurtle = require("occam-furtle");
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
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
var _Theorem;
var define = _occamfurtle.elements.define;
var _default = define((_Theorem = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Theorem, TopLevelAssertion);
    function Theorem() {
        _class_call_check(this, Theorem);
        return _call_super(this, Theorem, arguments);
    }
    _create_class(Theorem, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), theoremString = this.getString(); ///
                context.trace("Verifying the '".concat(theoremString, "' theorem..."), node);
                verifies = _get(_get_prototype_of(Theorem.prototype), "verify", this).call(this);
                if (verifies) {
                    var theorem = this; ///
                    context.addTheorem(theorem);
                    context.debug("...verified the '".concat(theoremString, "' theorem."), node);
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _topLevelAssertion.default.fromJSON(Theorem, json, context);
            }
        }
    ]);
    return Theorem;
}(_topLevelAssertion.default), _define_property(_Theorem, "name", "Theorem"), _Theorem));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL3RoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRoZW9yZW1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtLi4uYCwgbm9kZSk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0aGVvcmVtID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUaGVvcmVtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKFRoZW9yZW0sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlRoZW9yZW0iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm5vZGUiLCJnZXROb2RlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ0aGVvcmVtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0aGVvcmVtIiwiYWRkVGhlb3JlbSIsImRlYnVnIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyQkFOeUI7d0VBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZUEsaUNBQU87O2FBQU1FO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxnQkFBZ0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFNUNILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUErQixPQUFkRixlQUFjLGlCQUFlSjtnQkFFN0RELFdBQVcsdUJBVmFGLG9CQVVQQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTVEsVUFBVSxJQUFJLEVBQUUsR0FBRztvQkFFekJMLFFBQVFNLFVBQVUsQ0FBQ0Q7b0JBRW5CTCxRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBaUMsT0FBZEwsZUFBYyxlQUFhSjtnQkFDL0Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPVyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVULE9BQU87Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNGLFFBQVEsQ0FBQ2IsU0FBU2MsTUFBTVQ7WUFBVTs7OztFQXpCbERVLDBCQUFpQixHQXVCM0QsMkJBQU9DLFFBQU8ifQ==