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
var _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelMetaAssertion"));
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
var _Metatheorem;
var _default = (0, _dom.domAssigned)((_Metatheorem = /*#__PURE__*/ function(TopLevelMetaAssertion) {
    _inherits(Metatheorem, TopLevelMetaAssertion);
    function Metatheorem() {
        _class_call_check(this, Metatheorem);
        return _call_super(this, Metatheorem, arguments);
    }
    _create_class(Metatheorem, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metaLemma = this, fileContext = this.getFileContext(), metaLemmaString = metaLemma.getString();
                fileContext.trace("Verifying the '".concat(metaLemmaString, "' metatheorem..."));
                verified = _get(_get_prototype_of(Metatheorem.prototype), "verify", this).call(this);
                if (verified) {
                    var metaTheorem = this; ///
                    fileContext.addMetatheorem(metaTheorem);
                    fileContext.debug("...verified the '".concat(metaLemmaString, "' metatheorem."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelMetaAssertion.default.fromJSON(Metatheorem, json, fileContext);
            }
        },
        {
            key: "fromMetatheoremNode",
            value: function fromMetatheoremNode(metatheoremNode, fileContext) {
                var node = metatheoremNode, metatheorem = _topLevelMetaAssertion.default.fromNode(Metatheorem, node, fileContext);
                return metatheorem;
            }
        }
    ]);
    return Metatheorem;
}(_topLevelMetaAssertion.default), _define_property(_Metatheorem, "name", "Metatheorem"), _Metatheorem));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YXRoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBNZXRhdGhlb3JlbSBleHRlbmRzIFRvcExldmVsTWV0YUFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhdGhlb3JlbS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YVRoZW9yZW0gPSB0aGlzOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YVRoZW9yZW0pO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGF0aGVvcmVtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdGhlb3JlbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmZyb21KU09OKE1ldGF0aGVvcmVtLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbU1ldGF0aGVvcmVtTm9kZShtZXRhdGhlb3JlbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF0aGVvcmVtTm9kZSwgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBUb3BMZXZlbE1ldGFBc3NlcnRpb24uZnJvbU5vZGUoTWV0YXRoZW9yZW0sIG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJNZXRhdGhlb3JlbSIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YUxlbW1hIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsIm1ldGFMZW1tYVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YVRoZW9yZW0iLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtTm9kZSIsIm5vZGUiLCJtZXRhdGhlb3JlbSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7NEVBSmtDO21CQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVyxnQ0FBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxZQUFZLElBQUksRUFDaEJDLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDQyxrQkFBa0JILFVBQVVJLFNBQVM7Z0JBRTNDSCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQjtnQkFFcERKLFdBQVcsdUJBVmtCRix3QkFVWkMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1PLGNBQWMsSUFBSSxFQUFFLEdBQUc7b0JBRTdCTCxZQUFZTSxjQUFjLENBQUNEO29CQUUzQkwsWUFBWU8sS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCTCxpQkFBZ0I7Z0JBQ3hEO2dCQUVBLE9BQU9KO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxXQUFXO2dCQUFJLE9BQU9VLDhCQUFxQixDQUFDRixRQUFRLENBQUNaLGFBQWFhLE1BQU1UO1lBQWM7OztZQUVyR1csS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVaLFdBQVc7Z0JBQ3JELElBQU1hLE9BQU9ELGlCQUNQRSxjQUFjSiw4QkFBcUIsQ0FBQ0ssUUFBUSxDQUFDbkIsYUFBYWlCLE1BQU1iO2dCQUV0RSxPQUFPYztZQUNUOzs7O0VBaENtREosOEJBQXFCLEdBdUJ4RSwrQkFBT00sUUFBTyJ9