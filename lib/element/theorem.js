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
var _axiomLemmaTheoremConjecture = /*#__PURE__*/ _interop_require_default(require("./axiomLemmaTheoremConjecture"));
var _elements = require("../elements");
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
var _default = (0, _elements.define)((_Theorem = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Theorem, AxiomLemmaTheoremConjecture);
    function Theorem() {
        _class_call_check(this, Theorem);
        return _call_super(this, Theorem, arguments);
    }
    _create_class(Theorem, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), theoremString = this.string; ///
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
                return _axiomLemmaTheoremConjecture.default.fromJSON(Theorem, json, context);
            }
        },
        {
            key: "fromTheoremNode",
            value: function fromTheoremNode(theoremNode, context) {
                var node = theoremNode, theorem = _axiomLemmaTheoremConjecture.default.fromNode(Theorem, node, context);
                return theorem;
            }
        }
    ]);
    return Theorem;
}(_axiomLemmaTheoremConjecture.default), _define_property(_Theorem, "name", "Theorem"), _Theorem));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgZnJvbSBcIi4vYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGhlb3JlbSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS4uLmAsIG5vZGUpO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgdGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGhlb3JlbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZnJvbUpTT04oVGhlb3JlbSwganNvbiwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbVRoZW9yZW1Ob2RlKHRoZW9yZW1Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoZW9yZW1Ob2RlLCAvLy9cbiAgICAgICAgICB0aGVvcmVtID0gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21Ob2RlKFRoZW9yZW0sIG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRoZW9yZW0iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm5vZGUiLCJnZXROb2RlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ0aGVvcmVtU3RyaW5nIiwic3RyaW5nIiwidHJhY2UiLCJ0aGVvcmVtIiwiYWRkVGhlb3JlbSIsImRlYnVnIiwiZnJvbUpTT04iLCJqc29uIiwiQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZnJvbVRoZW9yZW1Ob2RlIiwidGhlb3JlbU5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tGQUp3Qzt3QkFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ0MsTUFBTSxFQUFHLEdBQUc7Z0JBRXZDSCxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYsZUFBYyxpQkFBZUo7Z0JBRTdERCxXQUFXLHVCQVZhRixvQkFVUEMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1RLFVBQVUsSUFBSSxFQUFFLEdBQUc7b0JBRXpCTCxRQUFRTSxVQUFVLENBQUNEO29CQUVuQkwsUUFBUU8sS0FBSyxDQUFDLEFBQUMsb0JBQWlDLE9BQWRMLGVBQWMsZUFBYUo7Z0JBQy9EO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT1csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxPQUFPO2dCQUFJLE9BQU9VLG9DQUEyQixDQUFDRixRQUFRLENBQUNiLFNBQVNjLE1BQU1UO1lBQVU7OztZQUUvRlcsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUVaLE9BQU87Z0JBQ3pDLElBQU1GLE9BQU9jLGFBQ1BQLFVBQVVLLG9DQUEyQixDQUFDRyxRQUFRLENBQUNsQixTQUFTRyxNQUFNRTtnQkFFcEUsT0FBT0s7WUFDVDs7OztFQWhDMENLLG9DQUEyQixHQXVCckUsMkJBQU9JLFFBQU8ifQ==