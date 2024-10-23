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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
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
var Theorem = /*#__PURE__*/ function(TopLevelAssertion) {
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
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Theorem: Theorem
});
var _default = Theorem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuY2xhc3MgVGhlb3JlbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIHRoZW9yZW1TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGhlb3JlbVN0cmluZ30nIHRoZW9yZW0uLi5gKTtcblxuICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRoZW9yZW0gPSB0aGlzOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKFRoZW9yZW0sIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tVGhlb3JlbU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKFRoZW9yZW0sIG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVGhlb3JlbVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW9yZW07XG4iXSwibmFtZXMiOlsiVGhlb3JlbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsInRoZW9yZW1TdHJpbmciLCJzdHJpbmciLCJ0cmFjZSIsInRoZW9yZW0iLCJhZGRUaGVvcmVtIiwiZGVidWciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21UaGVvcmVtTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJmcm9tTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OzsyREFsQ2lCO3dFQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsZ0JBQWdCLElBQUksQ0FBQ0MsTUFBTSxFQUFHLEdBQUc7Z0JBRXZDSCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEYsZUFBYztnQkFFbERILFdBQVcsdUJBVFRGLG9CQVNlQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTU0sVUFBVSxJQUFJLEVBQUUsR0FBRztvQkFFekJMLFlBQVlNLFVBQVUsQ0FBQ0Q7b0JBRXZCTCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBaUMsT0FBZEwsZUFBYztnQkFDdEQ7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVULFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNGLFFBQVEsQ0F0QmxFWCxTQXNCNEVZLE1BQU1UO1lBQWM7OztZQUU3RlcsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxhQUFhLEVBQUVaLFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNHLFFBQVEsQ0F4QmxGaEIsU0F3QjRGZSxlQUFlWjtZQUFjOzs7V0F4QnpISDtFQUFnQmEsMEJBQWlCO0FBMkJ2Q0ksT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJuQixTQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==