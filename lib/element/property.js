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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Property;
var _default = (0, _elements.define)((_Property = /*#__PURE__*/ function(Element) {
    _inherits(Property, Element);
    function Property(context, string, node, name, nominalTypeName) {
        _class_call_check(this, Property);
        var _this;
        _this = _call_super(this, Property, [
            context,
            string,
            node
        ]);
        _this.name = name;
        _this.nominalTypeName = nominalTypeName;
        return _this;
    }
    _create_class(Property, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                return this.nominalTypeName;
            }
        },
        {
            key: "getPropertyNode",
            value: function getPropertyNode() {
                var node = this.getNode(), properetyNode = node; ///
                return properetyNode;
            }
        },
        {
            key: "comparePropertyName",
            value: function comparePropertyName(propertyName) {
                var comparesToPropertyName = this.name === propertyName;
                return comparesToPropertyName;
            }
        },
        {
            key: "compareNominalTypeName",
            value: function compareNominalTypeName(nominalTypeName) {
                var comparesToNominalTypeName = this.nominalTypeName === nominalTypeName;
                return comparesToNominalTypeName;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, nominalTypeName = this.nominalTypeName, json = {
                    name: name,
                    nominalTypeName: nominalTypeName
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                debugger;
            }
        }
    ]);
    return Property;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Property, "name", "Property"), _Property));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJldHlOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVyZXR5Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9ICh0aGlzLm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb3BlcnR5TmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9ICh0aGlzLm5vbWluYWxUeXBlTmFtZSA9PT0gbm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHRoaXMubm9taW5hbFR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0TmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImdldFByb3BlcnR5Tm9kZSIsImdldE5vZGUiLCJwcm9wZXJldHlOb2RlIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzhCQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZUFBZTtnQ0FEOUJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxlQUFlLEdBQUdBOzs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixlQUFlO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztnQkFFL0IsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFlBQVk7Z0JBQzlCLElBQU1DLHlCQUEwQixJQUFJLENBQUNULElBQUksS0FBS1E7Z0JBRTlDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCVCxlQUFlO2dCQUNwQyxJQUFNVSw0QkFBNkIsSUFBSSxDQUFDVixlQUFlLEtBQUtBO2dCQUU1RCxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLEVBQ3RDWSxPQUFPO29CQUNMYixNQUFBQTtvQkFDQUMsaUJBQUFBO2dCQUNGO2dCQUVOLE9BQU9ZO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFaEIsT0FBTztnQkFDM0IsUUFBUTtZQUNWOzs7O3FCQWxEMkNrQix1QkFBTyxJQThDbEQsNEJBQU9mLFFBQU8ifQ==