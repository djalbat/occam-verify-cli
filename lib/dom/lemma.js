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
var _Lemma;
var _default = (0, _dom.domAssigned)((_Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Lemma, TopLevelAssertion);
    function Lemma() {
        _class_call_check(this, Lemma);
        return _call_super(this, Lemma, arguments);
    }
    _create_class(Lemma, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var lemma = this, fileContext = this.getFileContext(), lemmaString = lemma.getString();
                lemmaString === null ? fileContext.trace("Verifying a lemma...") : fileContext.trace("Verifying the '".concat(lemmaString, "' lemma..."));
                verified = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verified) {
                    var lemma1 = this; ///
                    fileContext.addLemma(lemma1);
                    lemmaString === null ? fileContext.debug("...verified a lemma.") : fileContext.debug("...verified the '".concat(lemmaString, "' lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromLemmaNode",
            value: function fromLemmaNode(metaLemmaNode, fileContext) {
                return _topLevelAssertion.default.fromNode(Lemma, metaLemmaNode, fileContext);
            }
        }
    ]);
    return Lemma;
}(_topLevelAssertion.default), _define_property(_Lemma, "name", "Lemma"), _Lemma));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBsZW1tYSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxlbW1hU3RyaW5nID0gbGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICAobGVtbWFTdHJpbmcgPT09IG51bGwpID9cbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmApIDpcbiAgICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbGVtbWEgPSB0aGlzOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAobGVtbWFTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbGVtbWEuYCkgOlxuICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGVtbWFcIjtcblxuICBzdGF0aWMgZnJvbUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTGVtbWEsIG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVkIiwibGVtbWEiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwibGVtbWFTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZExlbW1hIiwiZGVidWciLCJmcm9tTGVtbWFOb2RlIiwibWV0YUxlbW1hTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3RUFKOEI7bUJBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDOzthQUFNQztnQ0FBQUE7ZUFBTixrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxRQUFRLElBQUksRUFDWkMsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLGNBQWNILE1BQU1JLFNBQVM7Z0JBRWxDRCxnQkFBZ0IsT0FDZkYsWUFBWUksS0FBSyxDQUFFLDBCQUNqQkosWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVk7Z0JBRXBESixXQUFXLHVCQVprQkYsa0JBWVpDLFVBQU4sSUFBSztnQkFFaEIsSUFBSUMsVUFBVTtvQkFDWixJQUFNQyxTQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QkMsWUFBWUssUUFBUSxDQUFDTjtvQkFFcEJHLGdCQUFnQixPQUNmRixZQUFZTSxLQUFLLENBQUUsMEJBQ2pCTixZQUFZTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkosYUFBWTtnQkFDeEQ7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUlPUyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxhQUFhLEVBQUVSLFdBQVc7Z0JBQUksT0FBT1MsMEJBQWlCLENBQUNDLFFBQVEsQ0FBQ2QsT0FBT1ksZUFBZVI7WUFBYzs7OztFQTdCNUVTLDBCQUFpQixHQTJCOUQseUJBQU9FLFFBQU8ifQ==