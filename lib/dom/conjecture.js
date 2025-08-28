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
var _Conjecture;
var _default = (0, _dom.domAssigned)((_Conjecture = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Conjecture, TopLevelAssertion);
    function Conjecture() {
        _class_call_check(this, Conjecture);
        return _call_super(this, Conjecture, arguments);
    }
    _create_class(Conjecture, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var context = this.getContext(), conjecture = this, conjectureString = conjecture.getString();
                context.trace("Verifying the '".concat(conjectureString, "' conjecture..."));
                verifies = _get(_get_prototype_of(Conjecture.prototype), "verify", this).call(this);
                if (verifies) {
                    var conjecture1 = this; ///
                    context.addConjecture(conjecture1);
                    context.debug("...verified the '".concat(conjectureString, "' conjecture."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _topLevelAssertion.default.fromJSON(Conjecture, json, context);
            }
        },
        {
            key: "fromConjectureNode",
            value: function fromConjectureNode(conjectureNode, context) {
                var node = conjectureNode, conjecture = _topLevelAssertion.default.fromNode(Conjecture, node, context);
                return conjecture;
            }
        }
    ]);
    return Conjecture;
}(_topLevelAssertion.default), _define_property(_Conjecture, "name", "Conjecture"), _Conjecture));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZVN0cmluZyA9IGNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uamVjdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihDb25qZWN0dXJlLCBqc29uLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gY29uamVjdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQ29uamVjdHVyZSwgbm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVOb2RlIiwibm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7d0VBSjhCO21CQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVywrQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsYUFBYSxJQUFJLEVBQ2pCQyxtQkFBbUJELFdBQVdFLFNBQVM7Z0JBRTdDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJGLGtCQUFpQjtnQkFFakRKLFdBQVcsdUJBVmtCRix1QkFVWkMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1HLGNBQWEsSUFBSSxFQUFHLEdBQUc7b0JBRTdCRixRQUFRTSxhQUFhLENBQUNKO29CQUV0QkYsUUFBUU8sS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCSixrQkFBaUI7Z0JBQ3JEO2dCQUVBLE9BQU9KO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxPQUFPO2dCQUFJLE9BQU9VLDBCQUFpQixDQUFDRixRQUFRLENBQUNYLFlBQVlZLE1BQU1UO1lBQVU7OztZQUV4RlcsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVaLE9BQU87Z0JBQy9DLElBQU1hLE9BQU9ELGdCQUNQVixhQUFhUSwwQkFBaUIsQ0FBQ0ksUUFBUSxDQUFDakIsWUFBWWdCLE1BQU1iO2dCQUVoRSxPQUFPRTtZQUNUOzs7O0VBaENrRFEsMEJBQWlCLEdBdUJuRSw4QkFBT0ssUUFBTyJ9