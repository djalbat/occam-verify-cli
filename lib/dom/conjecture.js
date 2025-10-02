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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25qZWN0dXJlIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVTdHJpbmcgPSBjb25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS4uLmAsIG5vZGUpO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgY29uamVjdHVyZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uamVjdHVyZVN0cmluZ30nIGNvbmplY3R1cmUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmplY3R1cmVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQ29uamVjdHVyZSwganNvbiwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUNvbmplY3R1cmVOb2RlKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbmplY3R1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZSA9IFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKENvbmplY3R1cmUsIG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uamVjdHVyZSIsInZlcmlmeSIsInZlcmlmaWVzIiwibm9kZSIsImdldE5vZGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVOb2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3RUFKOEI7bUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLCtCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsYUFBYSxJQUFJLEVBQ2pCQyxtQkFBbUJELFdBQVdFLFNBQVM7Z0JBRTdDSixRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJGLGtCQUFpQixvQkFBa0JMO2dCQUVuRUQsV0FBVyx1QkFYa0JGLHVCQVdaQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUssY0FBYSxJQUFJLEVBQUcsR0FBRztvQkFFN0JGLFFBQVFNLGFBQWEsQ0FBQ0o7b0JBRXRCRixRQUFRTyxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJKLGtCQUFpQixrQkFBZ0JMO2dCQUNyRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9XLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRVQsT0FBTztnQkFBSSxPQUFPVSwwQkFBaUIsQ0FBQ0YsUUFBUSxDQUFDYixZQUFZYyxNQUFNVDtZQUFVOzs7WUFFeEZXLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFWixPQUFPO2dCQUMvQyxJQUFNRixPQUFPYyxnQkFDUFYsYUFBYVEsMEJBQWlCLENBQUNHLFFBQVEsQ0FBQ2xCLFlBQVlHLE1BQU1FO2dCQUVoRSxPQUFPRTtZQUNUOzs7O0VBakNrRFEsMEJBQWlCLEdBd0JuRSw4QkFBT0ksUUFBTyJ9