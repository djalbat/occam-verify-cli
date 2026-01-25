"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get variablesFromTerm () {
        return variablesFromTerm;
    }
});
var _necessary = require("necessary");
var _occamfurtle = require("occam-furtle");
var _validation = require("../utilities/validation");
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
var _Term;
var define = _occamfurtle.elements.define, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
var _default = define((_Term = /*#__PURE__*/ function(Element) {
    _inherits(Term, Element);
    function Term(context, string, node, type) {
        _class_call_check(this, Term);
        var _this;
        _this = _call_super(this, Term, [
            context,
            string,
            node
        ]);
        _this.type = type;
        return _this;
    }
    _create_class(Term, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var node = this.getNode(), singular = node.isSingular();
                return singular;
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.type.isProvisional();
            }
        },
        {
            key: "isGrounded",
            value: function isGrounded(definedVariables, context) {
                var term = this, variables = variablesFromTerm(term, context);
                filter(variables, function(variable) {
                    var definedVariablesIncludesVariable = definedVariables.includes(variable);
                    if (!definedVariablesIncludesVariable) {
                        return true;
                    }
                });
                var undefinedVariables = variables, undefinedVariablesLength = undefinedVariables.length, grounded = undefinedVariablesLength <= 1;
                return grounded;
            }
        },
        {
            key: "isInitiallyGrounded",
            value: function isInitiallyGrounded(context) {
                var term = this, variables = variablesFromTerm(term, context), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables, context) {
                var grounded = this.isGrounded(definedVariables, context), implicitlyGrounded = grounded; ///
                return implicitlyGrounded;
            }
        },
        {
            key: "getVariableIdentifier",
            value: function getVariableIdentifier() {
                var node = this.getNode(), variableIdentifier = node.getVariableIdentifier();
                return variableIdentifier;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var comparesToParamter = false;
                var singular = this.isSingular();
                if (singular) {
                    var parameterIdentifier = parameter.getIdentifier();
                    if (parameterIdentifier !== null) {
                        var variableIdentifier = this.getVariableIdentifier();
                        if (parameterIdentifier === variableIdentifier) {
                            comparesToParamter = true;
                        }
                    }
                }
                return comparesToParamter;
            }
        },
        {
            key: "validate",
            value: function validate(context, verifyAhead) {
                var _this = this;
                var validates;
                var termString = this.getString(); ///
                context.trace("Validating the '".concat(termString, "' term..."));
                validates = _validation.validateTerms.some(function(validateTerm) {
                    var term = _this, termValidates = validateTerm(term, context, verifyAhead);
                    if (termValidates) {
                        return true;
                    }
                });
                if (validates) {
                    var term = this; ///
                    context.addTerm(term);
                    context.debug("...validated the '".concat(termString, "' term."));
                }
                return validates;
            }
        },
        {
            key: "validateGivenType",
            value: function validateGivenType(type, context) {
                var _this = this;
                var validatesGivenType = false;
                var typeString = type.getString(), termString = this.getString(); ///
                context.trace("Validating the '".concat(termString, "' term given the '").concat(typeString, "' type..."));
                var validates = this.validate(context, function() {
                    var verifiesAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiesAhead = true;
                    }
                    return verifiesAhead;
                });
                if (validates) {
                    validatesGivenType = true;
                }
                if (validatesGivenType) {
                    context.debug("...validated the '".concat(termString, "' term given the '").concat(typeString, "' type."));
                }
                return validatesGivenType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(), type = typeJSON, json = {
                    type: type,
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
            ///
            }
        }
    ]);
    return Term;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Term, "name", "Term"), _Term));
function variablesFromTerm(term, context) {
    var termNode = term.getNode(), variableNodes = termNode.getVariableNodes(), variables = variableNodes.map(function(variableNode) {
        var variableIdentifier = variableNode.getVariableIdentifier(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
        return variable;
    });
    compress(variables, function(variableA, variableB) {
        var variableAEqualToVariableB = variableA.isEqualTo(variableB);
        if (!variableAEqualToVariableB) {
            return true;
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cyxcbiAgICAgIHsgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gbm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IG5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB2YWxpZGF0ZVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHRlcm0gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVzQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZXMgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQiA9IHZhcmlhYmxlQS5pc0VxdWFsVG8odmFyaWFibGVCKTtcblxuICAgIGlmICghdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVRlcm0iLCJkZWZpbmUiLCJlbGVtZW50cyIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJpc1Npbmd1bGFyIiwiZ2V0Tm9kZSIsInNpbmd1bGFyIiwiaXNQcm92aXNpb25hbCIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidGVybSIsInZhcmlhYmxlcyIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZlcmlmeUFoZWFkIiwidmFsaWRhdGVzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVUZXJtcyIsInNvbWUiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtVmFsaWRhdGVzIiwiYWRkVGVybSIsImRlYnVnIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmVyaWZpZXNBaGVhZCIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZXMiLCJnZXRWYXJpYWJsZU5vZGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUEiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCIiwiaXNFcXVhbFRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFXQTtlQUFBOztRQW1LZ0JBO2VBQUFBOzs7eUJBNUtlOzJCQUNHOzBCQUVKO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLFNBQVdDLHFCQUFRLENBQW5CRCxRQUNBRSxTQUFxQkMseUJBQWMsQ0FBbkNELFFBQVFFLFdB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