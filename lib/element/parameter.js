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
var _Parameter;
var _default = (0, _elements.define)((_Parameter = /*#__PURE__*/ function(Element) {
    _inherits(Parameter, Element);
    function Parameter(context, string, node, name, identifier) {
        _class_call_check(this, Parameter);
        var _this;
        _this = _call_super(this, Parameter, [
            context,
            string,
            node,
            identifier
        ]);
        _this.name = name;
        _this.identifier = identifier;
        return _this;
    }
    _create_class(Parameter, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "findReplacementNode",
            value: function findReplacementNode(substitutions) {
                var replacementNode = null;
                var parameter = this, substitution = substitutions.findSubstitution(function(substitution) {
                    var substitutionComparesToParamter = substitution.compareParameter(parameter);
                    if (substitutionComparesToParamter) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    replacementNode = substitution.getReplacementNode();
                }
                return replacementNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, json = {
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var name = json.name, identifier = json.identifier, string = null, node = null, parameter = new Parameter(context, string, node, name, identifier);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBpZGVudGlmaWVyKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZmluZFJlcGxhY2VtZW50Tm9kZShzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHJlcGxhY2VtZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgcmVwbGFjZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50Tm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaWRlbnRpZmllciB9ID0ganNvbixcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlciIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImlkZW50aWZpZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwicmVwbGFjZW1lbnROb2RlIiwicGFyYW1ldGVyIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVQYXJhbWV0ZXIiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyQkFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDhCQUFDOzthQUFNQyxVQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRHpCTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDO1lBQU1FOztRQUU3QixNQUFLRCxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGFBQWE7Z0JBQy9CLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsWUFBWSxJQUFJLEVBQ2hCQyxlQUFlSCxjQUFjSSxnQkFBZ0IsQ0FBQyxTQUFDRDtvQkFDN0MsSUFBTUUsaUNBQWlDRixhQUFhRyxnQkFBZ0IsQ0FBQ0o7b0JBRXJFLElBQUlHLGdDQUFnQzt3QkFDbEMsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLElBQUlGLGlCQUFpQixNQUFNO29CQUN6QkYsa0JBQWtCRSxhQUFhSSxrQkFBa0I7Z0JBQ25EO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJjLE9BQU87b0JBQ0xkLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFakIsT0FBTztnQkFDM0IsSUFBUUcsT0FBcUJjLEtBQXJCZCxNQUFNQyxhQUFlYSxLQUFmYixZQUNSSCxTQUFTLE1BQ1RDLE9BQU8sTUFDUFEsWUFBWSxJQUFJWCxVQUFVQyxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztnQkFFN0QsT0FBT007WUFDVDs7OztxQkFyRDRDUyxvQkFBTyxJQTRDbkQsNkJBQU9oQixRQUFPIn0=