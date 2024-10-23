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
var MetaLemma = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(MetaLemma, TopLevelAssertion);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _call_super(this, MetaLemma, arguments);
    }
    _create_class(MetaLemma, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var fileContext = this.getFileContext(), metaLemmaString = this.string; ///
                metaLemmaString === _constants.EMPTY_STRING ? fileContext.trace("Verifying a meta-lemma...") : fileContext.trace("Verifying the '".concat(metaLemmaString, "' meta-lemma..."));
                verified = _get(_get_prototype_of(MetaLemma.prototype), "verify", this).call(this);
                if (verified) {
                    var metaLemma = this; ///
                    fileContext.addMetaLemma(metaLemma);
                    metaLemmaString === _constants.EMPTY_STRING ? fileContext.debug("...verified a meta-lemma.") : fileContext.debug("...verified the '".concat(metaLemmaString, "' meta-lemma."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromMetaLemmaNode",
            value: function fromMetaLemmaNode(metaLemmaNode, fileContext) {
                return _topLevelAssertion.default.fromNode(MetaLemma, metaLemmaNode, fileContext);
            }
        }
    ]);
    return MetaLemma;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    MetaLemma: MetaLemma
});
var _default = MetaLemma;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWV0YUxlbW1hIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIChtZXRhTGVtbWFTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIG1ldGEtbGVtbWEuLi5gKSA6XG4gICAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEuLi5gKTtcblxuICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRNZXRhTGVtbWEobWV0YUxlbW1hKTtcblxuICAgICAgKG1ldGFMZW1tYVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCBhIG1ldGEtbGVtbWEuYCkgOlxuICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKE1ldGFMZW1tYSwgbWV0YUxlbW1hTm9kZSwgZmlsZUNvbnRleHQpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhTGVtbWFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhTGVtbWE7Il0sIm5hbWVzIjpbIk1ldGFMZW1tYSIsInZlcmlmeSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsIm1ldGFMZW1tYVN0cmluZyIsInN0cmluZyIsIkVNUFRZX1NUUklORyIsInRyYWNlIiwibWV0YUxlbW1hIiwiYWRkTWV0YUxlbW1hIiwiZGVidWciLCJmcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0NBOzs7ZUFBQTs7OzJEQXRDaUI7d0VBQ2E7eUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDQyxrQkFBa0IsSUFBSSxDQUFDQyxNQUFNLEVBQUcsR0FBRztnQkFFeENELG9CQUFvQkUsdUJBQVksR0FDL0JKLFlBQVlLLEtBQUssQ0FBRSwrQkFDakJMLFlBQVlLLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkgsaUJBQWdCO2dCQUV4REgsV0FBVyx1QkFYVEYsc0JBV2VDLFVBQU4sSUFBSztnQkFFaEIsSUFBSUMsVUFBVTtvQkFDWixJQUFNTyxZQUFZLElBQUksRUFBRSxHQUFHO29CQUUzQk4sWUFBWU8sWUFBWSxDQUFDRDtvQkFFeEJKLG9CQUFvQkUsdUJBQVksR0FDL0JKLFlBQVlRLEtBQUssQ0FBRSwrQkFDakJSLFlBQVlRLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQk4saUJBQWdCO2dCQUM1RDtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFVixXQUFXO2dCQUFJLE9BQU9XLDBCQUFpQixDQUFDQyxRQUFRLENBMUJwRmYsV0EwQmdHYSxlQUFlVjtZQUFjOzs7V0ExQjdISDtFQUFrQmMsMEJBQWlCO0FBNkJ6Q0UsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJsQixXQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==