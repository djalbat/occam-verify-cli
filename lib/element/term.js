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
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _elements = require("../elements");
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
var filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
var _default = (0, _elements.define)((_Term = /*#__PURE__*/ function(Element) {
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
            key: "getTermNode",
            value: function getTermNode() {
                var node = this.getNode(), termNode = node; ///
                return termNode;
            }
        },
        {
            key: "getVariableIdentifier",
            value: function getVariableIdentifier() {
                var termNode = this.getTermNode(), variableIdentifier = termNode.getVariableIdentifier();
                return variableIdentifier;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeA = termNode; ///
                termNode = this.getTermNode();
                var termNodeB = termNode, termNodeAAMatchesTermBNodeB = termNodeA.match(termNodeB), equalTo = termNodeAAMatchesTermBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "isValid",
            value: function isValid(context) {
                var termNode = this.getTermNode(), termPresent = context.isTermPresentByTermNode(termNode), valid = termPresent; ///
                return valid;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var termNode = term.getNode(), termNodeMatches = this.matchTermNode(termNode), equalTo = termNodeMatches; ///
                return equalTo;
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
            key: "isSingular",
            value: function isSingular() {
                var termNode = this.getTermNode(), singular = termNode.isSingular();
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
            value: function validate(context, verifyForwards) {
                var _this = this;
                var validates;
                var termString = this.getString(); ///
                context.trace("Validating the '".concat(termString, "' term..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(termString, "' term is already valid."));
                } else {
                    validates = _validation.validateTerms.some(function(validateTerm) {
                        var term = _this, termValidates = validateTerm(term, context, verifyForwards);
                        if (termValidates) {
                            return true;
                        }
                    });
                    if (validates) {
                        var term = this; ///
                        context.addTerm(term);
                        context.debug("...validated the '".concat(termString, "' term."));
                    }
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
                    var validatesForwards;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        validatesForwards = true;
                    }
                    return validatesForwards;
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Term, "name", "Term"), _Term));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1ZhbGlkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRoaXMuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhbGlkID0gdGVybVByZXNlbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0ZXJtKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgIGZpbHRlcih2YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHVuZGVmaW5lZFZhcmlhYmxlcyA9IHZhcmlhYmxlcywgLy8vXG4gICAgICAgICAgdW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoID0gdW5kZWZpbmVkVmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBncm91bmRlZCA9ICh1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPD0gMSk7XG5cbiAgICByZXR1cm4gZ3JvdW5kZWQ7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gdGVybU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbCgpIHsgcmV0dXJuIHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7IH1cblxuICBpc0luaXRpYWxseUdyb3VuZGVkKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0xlbmd0aCA9IHZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSAodmFyaWFibGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBpbml0aWFsbHlHcm91bmRlZDtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUdyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBncm91bmRlZCA9IHRoaXMuaXNHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBncm91bmRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVySWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJJZGVudGlmaWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCwgdmVyaWZ5Rm9yd2FyZHMpIHtcbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuaXNWYWxpZChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdmFsaWRhdGVUZXJtKHRlcm0sIGNvbnRleHQsIHZlcmlmeUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHM7XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICB2YWxpZGF0ZXNHaXZlblR5cGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlblR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlcyA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgY29tcHJlc3ModmFyaWFibGVzLCAodmFyaWFibGVBLCB2YXJpYWJsZUIpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCID0gdmFyaWFibGVBLmlzRXF1YWxUbyh2YXJpYWJsZUIpO1xuXG4gICAgaWYgKCF2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tVGVybSIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiY29tcHJlc3MiLCJkZWZpbmUiLCJUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUIiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1ZhbGlkIiwidGVybVByZXNlbnQiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInZhbGlkIiwiaXNFcXVhbFRvIiwidGVybSIsInRlcm1Ob2RlTWF0Y2hlcyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSIsImluY2x1ZGVzIiwidW5kZWZpbmVkVmFyaWFibGVzIiwidW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIiwibGVuZ3RoIiwiZ3JvdW5kZWQiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc1Byb3Zpc2lvbmFsIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVySWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZlcmlmeUZvcndhcmRzIiwidmFsaWRhdGVzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIiwidmFyaWFibGVOb2RlcyIsImdldFZhcmlhYmxlTm9kZXMiLCJtYXAiLCJ2YXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxl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