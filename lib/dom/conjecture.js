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
                var conjecture = this, fileContext = this.getFileContext(), conjectureString = conjecture.getString();
                fileContext.trace("Verifying the '".concat(conjectureString, "' conjecture..."));
                verifies = _get(_get_prototype_of(Conjecture.prototype), "verify", this).call(this);
                if (verifies) {
                    var conjecture1 = this; ///
                    fileContext.addConjecture(conjecture1);
                    fileContext.debug("...verified the '".concat(conjectureString, "' conjecture."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Conjecture, json, fileContext);
            }
        },
        {
            key: "fromConjectureNode",
            value: function fromConjectureNode(conjectureNode, fileContext) {
                var node = conjectureNode, conjecture = _topLevelAssertion.default.fromNode(Conjecture, node, fileContext);
                return conjecture;
            }
        }
    ]);
    return Conjecture;
}(_topLevelAssertion.default), _define_property(_Conjecture, "name", "Conjecture"), _Conjecture));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29uamVjdHVyZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBjb25qZWN0dXJlU3RyaW5nID0gY29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpczsgIC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbmplY3R1cmVTdHJpbmd9JyBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25qZWN0dXJlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihDb25qZWN0dXJlLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBjb25qZWN0dXJlTm9kZSwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmUgPSBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShDb25qZWN0dXJlLCBub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25qZWN0dXJlIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImNvbmplY3R1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZENvbmplY3R1cmUiLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZU5vZGUiLCJub2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3RUFKOEI7bUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLCtCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGFBQWEsSUFBSSxFQUNqQkMsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLG1CQUFtQkgsV0FBV0ksU0FBUztnQkFFN0NILFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQkYsa0JBQWlCO2dCQUVyREosV0FBVyx1QkFWa0JGLHVCQVVaQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsY0FBYSxJQUFJLEVBQUcsR0FBRztvQkFFN0JDLFlBQVlLLGFBQWEsQ0FBQ047b0JBRTFCQyxZQUFZTSxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJKLGtCQUFpQjtnQkFDekQ7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUlPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVSLFdBQVc7Z0JBQUksT0FBT1MsMEJBQWlCLENBQUNGLFFBQVEsQ0FBQ1gsWUFBWVksTUFBTVI7WUFBYzs7O1lBRWhHVSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRVgsV0FBVztnQkFDbkQsSUFBTVksT0FBT0QsZ0JBQ1BaLGFBQWFVLDBCQUFpQixDQUFDSSxRQUFRLENBQUNqQixZQUFZZ0IsTUFBTVo7Z0JBRWhFLE9BQU9EO1lBQ1Q7Ozs7RUFoQ2tEVSwwQkFBaUIsR0F1Qm5FLDhCQUFPSyxRQUFPIn0=