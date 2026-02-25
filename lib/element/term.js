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
var _necessary = require("necessary");
var _elements = require("../elements");
var _context = require("../utilities/context");
var _validation = require("../utilities/validation");
var _instantiate = require("../process/instantiate");
var _equivalence = require("../utilities/equivalence");
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
var filter = _necessary.arrayUtilities.filter;
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
                var term = this, variables = (0, _equivalence.variablesFromTerm)(term, context);
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
                var term = this, variables = (0, _equivalence.variablesFromTerm)(term, context), variablesLength = variables.length, initiallyGrounded = variablesLength === 0;
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
                var term = (0, _context.literally)(function(context) {
                    var string = json.string, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), term = new Term(context, string, node, type);
                    return term;
                }, context);
                return term;
            }
        }
    ]);
    return Term;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHZhbGlkYXRlVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJBID0gdmFyaWFibGVJZGVudGlmaWVyOyAvLy9cblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQiA9IHZhcmlhYmxlSWRlbnRpZmllcjtcblxuICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9ICh2YXJpYWJsZUlkZW50aWZpZXJBID09PSB2YXJpYWJsZUlkZW50aWZpZXJCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFRlcm0gPSB0aGlzLmZpbmRWYWxpZFRlcm0oY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRUZXJtICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKTtcblxuICAgICAgcmV0dXJuIHRlcm07XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlRlcm0iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFyaWFibGVJZGVudGlmaWVyQSIsInZhcmlhYmxlSWRlbnRpZmllckIiLCJmaW5kVmFsaWRUZXJtIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInZhbGlkVGVybSIsImlzRXF1YWxUbyIsInRlcm1Ob2RlTWF0Y2hlcyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVRlcm0iLCJ2YXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXMiLCJ1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGgiLCJsZW5ndGgiLCJncm91bmRlZCIsImlzUHJvdmlzaW9uYWwiLCJpc0luaXRpYWxseUdyb3VuZGVkIiwidmFyaWFibGVzTGVuZ3RoIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImltcGxpY2l0bHlHcm91bmRlZCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3J3YXJkcyIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkIiwidmFsaWRhdGVzRm9yd2FyZCIsImRlYnVnIiwidmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtcyIsInNvbWUiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtVmFsaWRhdGVzIiwiYWRkVGVybSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7OEJBWndCO3lCQUNPO3dCQUVSO3VCQUNHOzBCQUNJOzJCQUNFOzJCQUNFO29CQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFNBQVdDLHlCQUFjLENBQXpCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURiSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztR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