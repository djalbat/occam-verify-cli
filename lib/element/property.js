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
var _occamfurtle = require("occam-furtle");
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
                var name = json.name, nominalTypeName = json.nominalTypeName, string = name, node = null, property = new Property(context, string, node, name, nominalTypeName);
                return property;
            }
        }
    ]);
    return Property;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Property, "name", "Property"), _Property));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdGhpcy5ub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBub21pbmFsVHlwZU5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwicHJvcGVydHkiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyQkFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDZCQUFDOzthQUFNQyxTQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGVBQWU7Z0NBRDlCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsZUFBZSxHQUFHQTs7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZUFBZTtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFlBQVk7Z0JBQzlCLElBQU1DLHlCQUEwQixJQUFJLENBQUNOLElBQUksS0FBS0s7Z0JBRTlDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCTixlQUFlO2dCQUNwQyxJQUFNTyw0QkFBNkIsSUFBSSxDQUFDUCxlQUFlLEtBQUtBO2dCQUU1RCxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLEVBQ3RDUyxPQUFPO29CQUNMVixNQUFBQTtvQkFDQUMsaUJBQUFBO2dCQUNGO2dCQUVOLE9BQU9TO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFYixPQUFPO2dCQUMzQixJQUFRRyxPQUEwQlUsS0FBMUJWLE1BQU1DLGtCQUFvQlMsS0FBcEJULGlCQUNSSCxTQUFTRSxNQUNURCxPQUFPLE1BQ1BhLFdBQVcsSUFBSWhCLFNBQVNDLFNBQVNDLFFBQVFDLE1BQU1DLE1BQU1DO2dCQUUzRCxPQUFPVztZQUNUOzs7O3FCQWhEMkNDLG9CQUFPLElBdUNsRCw0QkFBT2IsUUFBTyJ9