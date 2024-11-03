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
var _constants = require("../constants");
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
                lemmaString === _constants.EMPTY_STRING ? fileContext.trace("Verifying a lemma...") : fileContext.trace("Verifying the '".concat(lemmaString, "' lemma..."));
                verified = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verified) {
                    var lemma1 = this; ///
                    fileContext.addLemma(lemma1);
                    lemmaString === _constants.EMPTY_STRING ? fileContext.debug("...verified a lemma.") : fileContext.debug("...verified the '".concat(lemmaString, "' lemma."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGVtbWEgZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBsZW1tYSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxlbW1hU3RyaW5nID0gbGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICAobGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCkgOlxuICAgICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsZW1tYSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG5cbiAgICAgIChsZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIGxlbW1hLmApIDpcbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxlbW1hXCI7XG5cbiAgc3RhdGljIGZyb21MZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKExlbW1hLCBtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiTGVtbWEiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxlbW1hIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImxlbW1hU3RyaW5nIiwiZ2V0U3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJhZGRMZW1tYSIsImRlYnVnIiwiZnJvbUxlbW1hTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7d0VBTDhCO21CQUVGO3lCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUM7Z0NBQUFBO2lDQUFBQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxFQUNaQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsY0FBY0gsTUFBTUksU0FBUztnQkFFbENELGdCQUFnQkUsdUJBQVksR0FDM0JKLFlBQVlLLEtBQUssQ0FBRSwwQkFDakJMLFlBQVlLLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUVwREosV0FBVyx1QkFaa0JGLGtCQVlaQyxVQUFOLElBQUs7Z0JBRWhCLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsU0FBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJDLFlBQVlNLFFBQVEsQ0FBQ1A7b0JBRXBCRyxnQkFBZ0JFLHVCQUFZLEdBQzNCSixZQUFZTyxLQUFLLENBQUUsMEJBQ2pCUCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWkwsYUFBWTtnQkFDeEQ7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxhQUFhLEVBQUVULFdBQVc7Z0JBQUksT0FBT1UsMEJBQWlCLENBQUNDLFFBQVEsQ0FBQ2YsT0FBT2EsZUFBZVQ7WUFBYzs7OztFQTdCNUVVLDBCQUFpQixHQTJCOUQseUJBQU9FLFFBQU8ifQ==