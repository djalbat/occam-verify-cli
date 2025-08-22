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
var _MetaLemma;
var _default = (0, _dom.domAssigned)((_MetaLemma = /*#__PURE__*/ function(TopLevelMetaAssertion) {
    _inherits(MetaLemma, TopLevelMetaAssertion);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, [
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var metaLemma = this, fileContext = this.getFileContext(), metaLemmaString = metaLemma.getString();
                fileContext.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."));
                verifies = _get(_get_prototype_of(MetaLemma.prototype), "verify", this).call(this);
                if (verifies) {
                    var metaTheorem = this; ///
                    fileContext.addMetatheorem(metaTheorem);
                    fileContext.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."));
                }
                return verifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelMetaAssertion.default.fromJSON(MetaLemma, json, fileContext);
            }
        },
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, fileContext) {
                var node = metaLemmaNode, metaLemma = _topLevelMetaAssertion.default.fromNode(MetaLemma, node, fileContext);
                return metaLemma;
            }
        }
    ]);
    return MetaLemma;
}(_topLevelMetaAssertion.default), _define_property(_MetaLemma, "name", "MetaLemma"), _MetaLemma));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWV0YUxlbW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsTWV0YUFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTWV0YUxlbW1hIGV4dGVuZHMgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZW1tYVN0cmluZyA9IG1ldGFMZW1tYS5nZXRTdHJpbmcoKTtcblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gKTtcblxuICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFUaGVvcmVtID0gdGhpczsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZE1ldGF0aGVvcmVtKG1ldGFUaGVvcmVtKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhTGVtbWFcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsTWV0YUFzc2VydGlvbi5mcm9tSlNPTihNZXRhTGVtbWEsIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhTGVtbWFOb2RlLCAvLy9cbiAgICAgICAgICBtZXRhTGVtbWEgPSBUb3BMZXZlbE1ldGFBc3NlcnRpb24uZnJvbU5vZGUoTWV0YUxlbW1hLCBub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIk1ldGFMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVzIiwibWV0YUxlbW1hIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsIm1ldGFMZW1tYVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YVRoZW9yZW0iLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFOb2RlIiwibm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7NEVBSmtDO21CQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVyw4QkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxZQUFZLElBQUksRUFDaEJDLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDQyxrQkFBa0JILFVBQVVJLFNBQVM7Z0JBRTNDSCxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJGLGlCQUFnQjtnQkFFcERKLFdBQVcsdUJBVmtCRixzQkFVWkMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1PLGNBQWMsSUFBSSxFQUFFLEdBQUc7b0JBRTdCTCxZQUFZTSxjQUFjLENBQUNEO29CQUUzQkwsWUFBWU8sS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCTCxpQkFBZ0I7Z0JBQ3hEO2dCQUVBLE9BQU9KO1lBQ1Q7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxXQUFXO2dCQUFJLE9BQU9VLDhCQUFxQixDQUFDRixRQUFRLENBQUNaLFdBQVdhLE1BQU1UO1lBQWM7OztZQUVuR1csS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVaLFdBQVc7Z0JBQ2pELElBQU1hLE9BQU9ELGVBQ1BiLFlBQVlXLDhCQUFxQixDQUFDSSxRQUFRLENBQUNsQixXQUFXaUIsTUFBTWI7Z0JBRWxFLE9BQU9EO1lBQ1Q7Ozs7RUFoQ2lEVyw4QkFBcUIsR0F1QnRFLDZCQUFPSyxRQUFPIn0=