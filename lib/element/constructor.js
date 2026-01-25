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
var define = _occamfurtle.elements.define;
var _default = define((_Constructor = /*#__PURE__*/ function(Element) {
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
            key: "isProvisional",
            value: function isProvisional() {
                return this.term.isProvisional();
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.term.setType(type);
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, context, verifyAhead) {
                var termUnifies = false;
                var termString = term.getString(), constructorString = this.getString(); ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."));
                var constructor = this, termUnifiesWithConstructor = (0, _unify.unifyTermWithConstructor)(term, constructor, context);
                if (termUnifiesWithConstructor) {
                    var verifiesAhead;
                    var type = this.getType();
                    term.setType(type);
                    verifiesAhead = verifyAhead();
                    termUnifies = verifiesAhead; ///
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Constructor, "name", "Constructor"), _Constructor));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IHsgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSlNPTiwgdGVybVRvVGVybUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50ZXJtLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7IHRoaXMudGVybS5zZXRUeXBlKHR5cGUpOyB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICBsZXQgdmVyaWZpZXNBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xuXG4gICAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHZlcmlmaWVzQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtVW5pZmllcyA9IHZlcmlmaWVzQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1KU09OID0gdGVybVRvVGVybUpTT04odGhpcy50ZXJtKSxcbiAgICAgICAgICB0ZXJtID0gdGVybUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJDb25zdHJ1Y3RvciIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImdldFRlcm0iLCJpc1Byb3Zpc2lvbmFsIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJ0eXBlIiwidW5pZnlUZXJtIiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVzQWhlYWQiLCJkZWJ1ZyIsInRvSlNPTiIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkJBUGtDO3FCQUVPO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLHFDQUFPOzthQUFNRSxZQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURiSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBOzs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUNFLGFBQWE7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxJQUFJO2dCQUFJLElBQUksQ0FBQ0wsSUFBSSxDQUFDSSxPQUFPLENBQUNDO1lBQU87OztZQUV6Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLElBQUksRUFBRUgsT0FBTyxFQUFFVSxXQUFXO2dCQUNsQyxJQUFJQyxjQUFjO2dCQUVsQixJQUFNQyxhQUFhVCxLQUFLVSxTQUFTLElBQzNCQyxvQkFBb0IsSUFBSSxDQUFDRCxTQUFTLElBQUksR0FBRztnQkFFL0NiLFFBQVFlLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0QsT0FBOUJGLFlBQVcscUJBQXFDLE9BQWxCRSxtQkFBa0I7Z0JBRS9FLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsNkJBQTZCQyxJQUFBQSwrQkFBd0IsRUFBQ2YsTUFBTWEsYUFBYWhCO2dCQUUvRSxJQUFJaUIsNEJBQTRCO29CQUM5QixJQUFJRTtvQkFFSixJQUFNWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztvQkFFekJILEtBQUtJLE9BQU8sQ0FBQ0M7b0JBRWJXLGdCQUFnQlQ7b0JBRWhCQyxjQUFjUSxlQUFnQixHQUFHO2dCQUNuQztnQkFFQSxJQUFJUixhQUFhO29CQUNmWCxRQUFRb0IsS0FBSyxDQUFDLEFBQUMsbUJBQWdETixPQUE5QkYsWUFBVyxxQkFBcUMsT0FBbEJFLG1CQUFrQjtnQkFDbkY7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ3BCLElBQUksR0FDbkNBLE9BQU9tQixVQUNQRSxPQUFPO29CQUNMckIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3FCO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFeEIsT0FBTztnQkFDM0IsSUFBTUcsT0FBT3VCLElBQUFBLGtCQUFZLEVBQUNGLE1BQU14QixVQUMxQmdCLGNBQWMsSUFBSWpCLFlBQVlJO2dCQUVwQyxPQUFPYTtZQUNUOzs7O3FCQWhFOENXLG9CQUFPLElBeURyRCwrQkFBT0MsUUFBTyJ9