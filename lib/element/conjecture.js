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
var _Conjecture;
var _default = (0, _elements.define)((_Conjecture = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Conjecture, AxiomLemmaTheoremConjecture);
    function Conjecture() {
        _class_call_check(this, Conjecture);
        return _call_super(this, Conjecture, arguments);
    }
    _create_class(Conjecture, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), conjecture = this, conjectureString = conjecture.getString();
                context.trace("Verifying the '".concat(conjectureString, "' conjecture..."), node);
                verifies = _get(_get_prototype_of(Conjecture.prototype), "verify", this).call(this);
                if (verifies) {
                    var conjecture1 = this; ///
                    context.addConjecture(conjecture1);
                    context.debug("...verified the '".concat(conjectureString, "' conjecture."), node);
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _axiomLemmaTheoremConjecture.default.fromJSON(Conjecture, json, context);
            }
        },
        {
            key: "fromConjectureNode",
            value: function fromConjectureNode(conjectureNode, context) {
                var node = conjectureNode, conjecture = _axiomLemmaTheoremConjecture.default.fromNode(Conjecture, node, context);
                return conjecture;
            }
        }
    ]);
    return Conjecture;
}(_axiomLemmaTheoremConjecture.default), _define_property(_Conjecture, "name", "Conjecture"), _Conjecture));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbmplY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgZnJvbSBcIi4vYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uamVjdHVyZSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZVN0cmluZyA9IGNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCwgbm9kZSk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uamVjdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZnJvbUpTT04oQ29uamVjdHVyZSwganNvbiwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5mcm9tTm9kZShDb25qZWN0dXJlLCBub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZENvbmplY3R1cmUiLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRkFKd0M7d0JBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLGFBQWEsSUFBSSxFQUNqQkMsbUJBQW1CRCxXQUFXRSxTQUFTO2dCQUU3Q0osUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRixrQkFBaUIsb0JBQWtCTDtnQkFFbkVELFdBQVcsdUJBWGFGLHVCQVdQQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUssY0FBYSxJQUFJLEVBQUcsR0FBRztvQkFFN0JGLFFBQVFNLGFBQWEsQ0FBQ0o7b0JBRXRCRixRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJKLGtCQUFpQixrQkFBZ0JMO2dCQUNyRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9XLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRVQsT0FBTztnQkFBSSxPQUFPVSxvQ0FBMkIsQ0FBQ0YsUUFBUSxDQUFDYixZQUFZYyxNQUFNVDtZQUFVOzs7WUFFbEdXLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFWixPQUFPO2dCQUMvQyxJQUFNRixPQUFPYyxnQkFDUFYsYUFBYVEsb0NBQTJCLENBQUNHLFFBQVEsQ0FBQ2xCLFlBQVlHLE1BQU1FO2dCQUUxRSxPQUFPRTtZQUNUOzs7O0VBakM2Q1Esb0NBQTJCLEdBd0J4RSw4QkFBT0ksUUFBTyJ9