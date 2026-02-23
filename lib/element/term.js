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
            key: "compareVariableIdentifier",
            value: function compareVariableIdentifier(variableIdentifier) {
                var comparesToVariableIdentifier = false;
                var singular = this.isSingular();
                if (singular) {
                    var variableIdentifierA = variableIdentifier; ///
                    variableIdentifier = this.getVariableIdentifier();
                    var variableIdentifierB = variableIdentifier;
                    comparesToVariableIdentifier = variableIdentifierA === variableIdentifierB;
                }
                return comparesToVariableIdentifier;
            }
        },
        {
            key: "findValidTerm",
            value: function findValidTerm(context) {
                var termNode = this.getTermNode(), term = context.findTermByTermNode(termNode), validTerm = term; ///
                return validTerm;
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
            value: function validate(context, validateForwards) {
                var _this = this;
                var term = null;
                var termString = this.getString(); ///
                context.trace("Validating the '".concat(termString, "' term..."));
                var validTerm = this.findValidTerm(context), valid = validTerm !== null;
                if (valid) {
                    var validatesForward = validateForwards();
                    if (validatesForward) {
                        term = validTerm; ///
                        context.debug("...the '".concat(termString, "' term is already valid."));
                    }
                } else {
                    var validates = _validation.validateTerms.some(function(validateTerm) {
                        var term = _this, termValidates = validateTerm(term, context, validateForwards);
                        if (termValidates) {
                            return true;
                        }
                    });
                    if (validates) {
                        term = this; ///
                        context.addTerm(term);
                        context.debug("...validated the '".concat(termString, "' term."));
                    }
                }
                return term;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVRlcm1zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGZpbHRlciwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJBID0gdmFyaWFibGVJZGVudGlmaWVyOyAvLy9cblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQiA9IHZhcmlhYmxlSWRlbnRpZmllcjtcblxuICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9ICh2YXJpYWJsZUlkZW50aWZpZXJBID09PSB2YXJpYWJsZUlkZW50aWZpZXJCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFRlcm0gPSB0aGlzLmZpbmRWYWxpZFRlcm0oY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRUZXJtICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZXMgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIGNvbXByZXNzKHZhcmlhYmxlcywgKHZhcmlhYmxlQSwgdmFyaWFibGVCKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQiA9IHZhcmlhYmxlQS5pc0VxdWFsVG8odmFyaWFibGVCKTtcblxuICAgIGlmICghdmFyaWFibGVBRXF1YWxUb1ZhcmlhYmxlQikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVRlcm0iLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImNvbXByZXNzIiwiZGVmaW5lIiwiVGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVBQU1hdGNoZXNUZXJtQk5vZGVCIiwibWF0Y2giLCJlcXVhbFRvIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXJBIiwidmFyaWFibGVJZGVudGlmaWVyQiIsImZpbmRWYWxpZFRlcm0iLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidmFsaWRUZXJtIiwiaXNFcXVhbFRvIiwidGVybU5vZGVNYXRjaGVzIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzUHJvdmlzaW9uYWwiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkIiwidmFsaWRhdGVzRm9yd2FyZCIsImRlYnVnIiwidmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtcyIsInNvbWUiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtVmFsaWRhdGVzIiwiYWRkVGVybSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSIsInZhcmlhYmxlTm9kZXMiLCJnZXRWYXJpYWJsZU5vZGVzIiwibWFwIiwidmFyaWFibGVOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUEiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFXQTtlQUFBOztRQXFPZ0JBO2VBQUFBOzs7OEJBOU9RO3lCQUNPO3dCQUVSOzBCQUNPO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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