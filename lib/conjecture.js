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
var Conjecture = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Conjecture, TopLevelAssertion);
    function Conjecture() {
        _class_call_check(this, Conjecture);
        return _call_super(this, Conjecture, arguments);
    }
    _create_class(Conjecture, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var fileContext = this.getFileContext(), conjectureString = this.string; ///
                fileContext.trace("Verifying the '".concat(conjectureString, "' conjecture..."));
                verified = _get(_get_prototype_of(Conjecture.prototype), "verify", this).call(this);
                if (verified) {
                    var conjecture = this; ///
                    fileContext.addConjecture(conjecture);
                    fileContext.debug("...verified the '".concat(conjectureString, "' conjecture."));
                }
                return verified;
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
                return _topLevelAssertion.default.fromNode(Conjecture, conjectureNode, fileContext);
            }
        }
    ]);
    return Conjecture;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Conjecture: Conjecture
});
var _default = Conjecture;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25qZWN0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuY2xhc3MgQ29uamVjdHVyZSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGNvbmplY3R1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uamVjdHVyZSA9IHRoaXM7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25qZWN0dXJlU3RyaW5nfScgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKENvbmplY3R1cmUsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShDb25qZWN0dXJlLCBjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBDb25qZWN0dXJlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uamVjdHVyZTtcbiJdLCJuYW1lcyI6WyJDb25qZWN0dXJlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwiY29uamVjdHVyZVN0cmluZyIsInN0cmluZyIsInRyYWNlIiwiY29uamVjdHVyZSIsImFkZENvbmplY3R1cmUiLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZU5vZGUiLCJmcm9tTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OzsyREFsQ2lCO3dFQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsbUJBQW1CLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRXpDSCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJGLGtCQUFpQjtnQkFFckRILFdBQVcsdUJBVFRGLHVCQVNlQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTU0sYUFBYSxJQUFJLEVBQUcsR0FBRztvQkFFN0JMLFlBQVlNLGFBQWEsQ0FBQ0Q7b0JBRTFCTCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJMLGtCQUFpQjtnQkFDekQ7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVULFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNGLFFBQVEsQ0F0QmxFWCxZQXNCK0VZLE1BQU1UO1lBQWM7OztZQUVoR1csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVaLFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNHLFFBQVEsQ0F4QnRGaEIsWUF3Qm1HZSxnQkFBZ0JaO1lBQWM7OztXQXhCaklIO0VBQW1CYSwwQkFBaUI7QUEyQjFDSSxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQm5CLFlBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9