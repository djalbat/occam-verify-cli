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
var _Theorem;
var _default = (0, _dom.domAssigned)((_Theorem = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Theorem, TopLevelAssertion);
    function Theorem() {
        _class_call_check(this, Theorem);
        return _call_super(this, Theorem, arguments);
    }
    _create_class(Theorem, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var fileContext = this.getFileContext(), theoremString = this.string; ///
                fileContext.trace("Verifying the '".concat(theoremString, "' theorem..."));
                verified = _get(_get_prototype_of(Theorem.prototype), "verify", this).call(this);
                if (verified) {
                    var theorem = this; ///
                    fileContext.addTheorem(theorem);
                    fileContext.debug("...verified the '".concat(theoremString, "' theorem."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Theorem, json, fileContext);
            }
        },
        {
            key: "fromTheoremNode",
            value: function fromTheoremNode(metaLemmaNode, fileContext) {
                return _topLevelAssertion.default.fromNode(Theorem, metaLemmaNode, fileContext);
            }
        }
    ]);
    return Theorem;
}(_topLevelAssertion.default), _define_property(_Theorem, "name", "Theorem"), _Theorem));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUaGVvcmVtIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgdGhlb3JlbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgdGhlb3JlbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUaGVvcmVtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihUaGVvcmVtLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbVRoZW9yZW1Ob2RlKG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShUaGVvcmVtLCBtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVGhlb3JlbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsInRoZW9yZW1TdHJpbmciLCJzdHJpbmciLCJ0cmFjZSIsInRoZW9yZW0iLCJhZGRUaGVvcmVtIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21UaGVvcmVtTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O3dFQUo4QjttQkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsNEJBQUM7O2FBQU1DO2dDQUFBQTtpQ0FBQUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsZ0JBQWdCLElBQUksQ0FBQ0MsTUFBTSxFQUFHLEdBQUc7Z0JBRXZDSCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYsZUFBYztnQkFFbERILFdBQVcsdUJBVGtCRixvQkFTWkMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1NLFVBQVUsSUFBSSxFQUFFLEdBQUc7b0JBRXpCTCxZQUFZTSxVQUFVLENBQUNEO29CQUV2QkwsWUFBWU8sS0FBSyxDQUFDLEFBQUMsb0JBQWlDLE9BQWRMLGVBQWM7Z0JBQ3REO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxXQUFXO2dCQUFJLE9BQU9VLDBCQUFpQixDQUFDRixRQUFRLENBQUNYLFNBQVNZLE1BQU1UO1lBQWM7OztZQUU3RlcsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxhQUFhLEVBQUVaLFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNHLFFBQVEsQ0FBQ2hCLFNBQVNlLGVBQWVaO1lBQWM7Ozs7RUExQjlFVSwwQkFBaUIsR0FzQmhFLDJCQUFPSSxRQUFPIn0=