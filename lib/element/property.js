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
var define = _occamfurtle.elements.define;
var _default = define((_Property = /*#__PURE__*/ function(Element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSAodGhpcy5ub21pbmFsVHlwZU5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0aGlzLm5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIG5vbWluYWxUeXBlTmFtZSB9ID0ganNvbixcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiUHJvcGVydHkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInByb3BlcnR5IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkJBSmtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLGtDQUFPOzthQUFNRSxTQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGVBQWU7Z0NBRDlCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsZUFBZSxHQUFHQTs7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZUFBZTtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFlBQVk7Z0JBQzlCLElBQU1DLHlCQUEwQixJQUFJLENBQUNOLElBQUksS0FBS0s7Z0JBRTlDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCTixlQUFlO2dCQUNwQyxJQUFNTyw0QkFBNkIsSUFBSSxDQUFDUCxlQUFlLEtBQUtBO2dCQUU1RCxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxrQkFBa0IsSUFBSSxDQUFDQSxlQUFlLEVBQ3RDUyxPQUFPO29CQUNMVixNQUFBQTtvQkFDQUMsaUJBQUFBO2dCQUNGO2dCQUVOLE9BQU9TO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFYixPQUFPO2dCQUMzQixJQUFRRyxPQUEwQlUsS0FBMUJWLE1BQU1DLGtCQUFvQlMsS0FBcEJULGlCQUNSSCxTQUFTRSxNQUNURCxPQUFPLE1BQ1BhLFdBQVcsSUFBSWhCLFNBQVNDLFNBQVNDLFFBQVFDLE1BQU1DLE1BQU1DO2dCQUUzRCxPQUFPVztZQUNUOzs7O3FCQWhEMkNDLG9CQUFPLElBdUNsRCw0QkFBT2IsUUFBTyJ9