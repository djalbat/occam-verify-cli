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
var _constants = require("./constants");
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
var Lemma = /*#__PURE__*/ function(TopLevelAssertion) {
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
                var fileContext = this.getFileContext(), lemmaString = this.string; ///
                lemmaString === _constants.EMPTY_STRING ? fileContext.trace("Verifying a lemma...") : fileContext.trace("Verifying the '".concat(lemmaString, "' lemma..."));
                verified = _get(_get_prototype_of(Lemma.prototype), "verify", this).call(this);
                if (verified) {
                    var lemma = this; ///
                    fileContext.addLemma(lemma);
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
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Lemma: Lemma
});
var _default = Lemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sZW1tYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBMZW1tYSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxlbW1hU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIChsZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gKSA6XG4gICAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxlbW1hID0gdGhpczsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgKGxlbW1hU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIGEgbGVtbWEuYCkgOlxuICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTGVtbWEsIG1ldGFMZW1tYU5vZGUsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgTGVtbWFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMZW1tYTtcbiJdLCJuYW1lcyI6WyJMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsImxlbW1hU3RyaW5nIiwic3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJsZW1tYSIsImFkZExlbW1hIiwiZGVidWciLCJmcm9tTGVtbWFOb2RlIiwibWV0YUxlbW1hTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3Q0E7OztlQUFBOzs7MkRBdENpQjt3RUFDYTt5QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsc0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLGNBQWMsSUFBSSxDQUFDQyxNQUFNLEVBQUcsR0FBRztnQkFFcENELGdCQUFnQkUsdUJBQVksR0FDM0JKLFlBQVlLLEtBQUssQ0FBRSwwQkFDakJMLFlBQVlLLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUVwREgsV0FBVyx1QkFYVEYsa0JBV2VDLFVBQU4sSUFBSztnQkFFaEIsSUFBSUMsVUFBVTtvQkFDWixJQUFNTyxRQUFRLElBQUksRUFBRSxHQUFHO29CQUV2Qk4sWUFBWU8sUUFBUSxDQUFDRDtvQkFFcEJKLGdCQUFnQkUsdUJBQVksR0FDM0JKLFlBQVlRLEtBQUssQ0FBRSwwQkFDakJSLFlBQVlRLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTixhQUFZO2dCQUN4RDtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLGFBQWEsRUFBRVYsV0FBVztnQkFBSSxPQUFPVywwQkFBaUIsQ0FBQ0MsUUFBUSxDQTFCaEZmLE9BMEJ3RmEsZUFBZVY7WUFBYzs7O1dBMUJySEg7RUFBY2MsMEJBQWlCO0FBNkJyQ0UsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJsQixPQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==