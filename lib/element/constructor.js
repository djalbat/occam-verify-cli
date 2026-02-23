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
var _verify = require("../process/verify");
var _unify = require("../process/unify");
var _json = require("../utilities/json");
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
var _Constructor;
var _default = (0, _elements.define)((_Constructor = /*#__PURE__*/ function(Element) {
    _inherits(Constructor, Element);
    function Constructor(context, string, node, term) {
        _class_call_check(this, Constructor);
        var _this;
        _this = _call_super(this, Constructor, [
            context,
            string,
            node
        ]);
        _this.term = term;
        return _this;
    }
    _create_class(Constructor, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getConclusionNode",
            value: function getConclusionNode() {
                var node = this.getNode(), constructorNode = node; ///
                return constructorNode;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.term.setType(type);
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var constructorString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var termVerifiesAsConstructor = (0, _verify.verifyTermAsConstructor)(this.term, context);
                if (termVerifiesAsConstructor) {
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return verifies;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, validateForwards) {
                var termUnifies = false;
                var termString = term.getString(), constructorString = this.getString(); ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."));
                var constructor = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiesWithConstructor) {
                    var validatesForwards;
                    var type = this.getType();
                    term.setType(type);
                    validatesForwards = validateForwards();
                    termUnifies = validatesForwards; ///
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."));
                }
                return termUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termJSON = (0, _json.termToTermJSON)(this.term), term = termJSON, json = {
                    term: term
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var term = (0, _json.termFromJSON)(json, context), constructor = new Constructor(term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Constructor, "name", "Constructor"), _Constructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgdGVybUZyb21KU09OLCB0ZXJtVG9UZXJtSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29uc3RydWN0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yTm9kZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkgeyB0aGlzLnRlcm0uc2V0VHlwZSh0eXBlKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRoaXMudGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcztcblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdmFsaWRhdGVGb3J3YXJkcygpO1xuXG4gICAgICB0ZXJtVW5pZmllcyA9IHZhbGlkYXRlc0ZvcndhcmRzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtSlNPTiA9IHRlcm1Ub1Rlcm1KU09OKHRoaXMudGVybSksXG4gICAgICAgICAgdGVybSA9IHRlcm1KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZ2V0VGVybSIsImdldENvbmNsdXNpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnN0cnVjdG9yTm9kZSIsInNldFR5cGUiLCJ0eXBlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwiZGVidWciLCJ1bmlmeVRlcm0iLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZ2V0VHlwZSIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OEJBUHdCO3dCQUVEO3NCQUNpQjtxQkFDQztvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRGJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7Ozs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsa0JBQWtCTCxNQUFPLEdBQUc7Z0JBRWxDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSTtnQkFBSSxJQUFJLENBQUNOLElBQUksQ0FBQ0ssT0FBTyxDQUFDQztZQUFPOzs7WUFFekNDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPVixPQUFPO2dCQUNaLElBQUlXLFdBQVc7Z0JBRWYsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRWhEYixRQUFRYyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJGLG1CQUFrQjtnQkFFbEQsSUFBTUcsNEJBQTRCQyxJQUFBQSwrQkFBdUIsRUFBQyxJQUFJLENBQUNiLElBQUksRUFBRUg7Z0JBRXJFLElBQUllLDJCQUEyQjtvQkFDN0JKLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWlgsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQkwsbUJBQWtCO2dCQUN0RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVmLElBQUksRUFBRUgsT0FBTyxFQUFFbUIsZ0JBQWdCO2dCQUN2QyxJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxhQUFhbEIsS0FBS1UsU0FBUyxJQUMzQkQsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRS9DYixRQUFRYyxLQUFLLENBQUMsQUFBQyxpQkFBOENGLE9BQTlCUyxZQUFXLHFCQUFxQyxPQUFsQlQsbUJBQWtCO2dCQUUvRSxJQUFNVSxjQUFjLElBQUksRUFDbEJDLDZCQUE2QkMsSUFBQUEsK0JBQXdCLEVBQUNyQixNQUFNbUIsYUFBYXRCO2dCQUUvRSxJQUFJdUIsNEJBQTRCO29CQUM5QixJQUFJRTtvQkFFSixJQUFNaEIsT0FBTyxJQUFJLENBQUNpQixPQUFPO29CQUV6QnZCLEtBQUtLLE9BQU8sQ0FBQ0M7b0JBRWJnQixvQkFBb0JOO29CQUVwQkMsY0FBY0ssbUJBQW9CLEdBQUc7Z0JBQ3ZDO2dCQUVBLElBQUlMLGFBQWE7b0JBQ2ZwQixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsbUJBQWdETCxPQUE5QlMsWUFBVyxxQkFBcUMsT0FBbEJULG1CQUFrQjtnQkFDbkY7Z0JBRUEsT0FBT1E7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQzFCLElBQUksR0FDbkNBLE9BQU95QixVQUNQRSxPQUFPO29CQUNMM0IsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzJCO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFOUIsT0FBTztnQkFDM0IsSUFBTUcsT0FBTzZCLElBQUFBLGtCQUFZLEVBQUNGLE1BQU05QixVQUMxQnNCLGNBQWMsSUFBSXZCLFlBQVlJO2dCQUVwQyxPQUFPbUI7WUFDVDs7OztxQkF2RjhDVyx1QkFBTyxJQWdGckQsK0JBQU9DLFFBQU8ifQ==