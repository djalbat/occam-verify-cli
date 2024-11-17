"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return TermPartialContext;
    },
    termNodeFromTermString: function() {
        return termNodeFromTermString;
    }
});
var _partial = /*#__PURE__*/ _interop_require_wildcard(require("../../context/partial"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var bnf = "\n\n        _ ::= term... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var TermPartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(TermPartialContext, PartialContext);
    function TermPartialContext() {
        _class_call_check(this, TermPartialContext);
        return _call_super(this, TermPartialContext, arguments);
    }
    _create_class(TermPartialContext, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var termNode = this.node; ///
                return termNode;
            }
        },
        {
            key: "getTermTokens",
            value: function getTermTokens() {
                var termTokens = this.tokens; ///
                return termTokens;
            }
        }
    ], [
        {
            key: "fromTerm",
            value: function fromTerm(term, context) {
                var string = term.getString(), termPartialContext = _partial.default.fromString(TermPartialContext, string, context);
                return termPartialContext;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                return _partial.default.fromString(TermPartialContext, string, context);
            }
        }
    ]);
    return TermPartialContext;
}(_partial.default);
_define_property(TermPartialContext, "rule", rule);
function termNodeFromTermString(termString, context) {
    var string = termString, termPartialContext = TermPartialContext.fromString(string, context), termNode = termPartialContext.getTermNode();
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnRpYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWxcIjtcblxuaW1wb3J0IHsgcnVsZUZyb21CTkYgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9wYXJ0aWFsXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBfIDo6PSB0ZXJtLi4uIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBydWxlID0gcnVsZUZyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybVBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUZXJtVG9rZW5zKCkge1xuICAgIGNvbnN0IHRlcm1Ub2tlbnMgPSB0aGlzLnRva2VuczsgLy8vXG5cbiAgICByZXR1cm4gdGVybVRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVBhcnRpYWxDb250ZXh0ID0gUGFydGlhbENvbnRleHQuZnJvbVN0cmluZyhUZXJtUGFydGlhbENvbnRleHQsIHN0cmluZywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVBhcnRpYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nKFRlcm1QYXJ0aWFsQ29udGV4dCwgc3RyaW5nLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgdGVybVBhcnRpYWxDb250ZXh0ID0gVGVybVBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtUGFydGlhbENvbnRleHQuZ2V0VGVybU5vZGUoKTtcblxuICByZXR1cm4gdGVybU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybVBhcnRpYWxDb250ZXh0IiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImdldFRlcm1Ob2RlIiwidGVybU5vZGUiLCJub2RlIiwiZ2V0VGVybVRva2VucyIsInRlcm1Ub2tlbnMiLCJ0b2tlbnMiLCJmcm9tVGVybSIsInRlcm0iLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwidGVybVBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nIiwidGVybVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQWFxQkE7O0lBeUJMQyxzQkFBc0I7ZUFBdEJBOzs7K0RBcENXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixJQUFNQyxNQUFPLCtEQUtQQyxPQUFPQyxJQUFBQSxvQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUYsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxJQUFJLEVBQUUsR0FBRztnQkFFL0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRW5DLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUMzQixJQUFNQyxTQUFTRixLQUFLRyxTQUFTLElBQ3ZCQyxxQkFBcUJDLGdCQUFjLENBQUNDLFVBQVUsQ0FqQm5DbEIsb0JBaUJ3RGMsUUFBUUQ7Z0JBRWpGLE9BQU9HO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXSixNQUFNLEVBQUVELE9BQU87Z0JBQUksT0FBT0ksZ0JBQWMsQ0FBQ0MsVUFBVSxDQXRCbERsQixvQkFzQnVFYyxRQUFRRDtZQUFVOzs7V0F0QnpGYjtFQUEyQmlCLGdCQUFjO0FBYTVELGlCQWJtQmpCLG9CQWFaRyxRQUFPQTtBQVlULFNBQVNGLHVCQUF1QmtCLFVBQVUsRUFBRU4sT0FBTztJQUN4RCxJQUFNQyxTQUFTSyxZQUNUSCxxQkFBcUJoQixtQkFBbUJrQixVQUFVLENBQUNKLFFBQVFELFVBQzNEUCxXQUFXVSxtQkFBbUJYLFdBQVc7SUFFL0MsT0FBT0M7QUFDVCJ9