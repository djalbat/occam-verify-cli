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
                var string = json.string, node = nodeFromString(string, context), type = (0, _json.typeFromJSON)(json, context), term = new Term(context, string, node, type);
                return term;
            }
        }
    ]);
    return Term;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Term, "name", "Term"), _Term));
function nodeFromString(string, context) {
    var node = (0, _context.literally)(function(context) {
        var termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode; ///
        return node;
    }, context);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHZhbGlkYXRlVGVybXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVGVybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlQSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgIHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpO1xuXG4gICAgY29uc3QgdGVybU5vZGVCID0gdGVybU5vZGUsIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlQUFNYXRjaGVzVGVybUJOb2RlQiA9IHRlcm1Ob2RlQS5tYXRjaCh0ZXJtTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0ZXJtTm9kZUFBTWF0Y2hlc1Rlcm1CTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGxldCBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJBID0gdmFyaWFibGVJZGVudGlmaWVyOyAvLy9cblxuICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyQiA9IHZhcmlhYmxlSWRlbnRpZmllcjtcblxuICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9ICh2YXJpYWJsZUlkZW50aWZpZXJBID09PSB2YXJpYWJsZUlkZW50aWZpZXJCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIGZpbmRWYWxpZFRlcm0oY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdmFsaWRUZXJtID0gdGVybTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRUZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHRlcm1Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtICA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgZmlsdGVyKHZhcmlhYmxlcywgKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIWRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdW5kZWZpbmVkVmFyaWFibGVzID0gdmFyaWFibGVzLCAvLy9cbiAgICAgICAgICB1bmRlZmluZWRWYXJpYWJsZXNMZW5ndGggPSB1bmRlZmluZWRWYXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGdyb3VuZGVkID0gKHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA8PSAxKTtcblxuICAgIHJldHVybiBncm91bmRlZDtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0aGlzLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSB0ZXJtTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzTGVuZ3RoID0gdmFyaWFibGVzLmxlbmd0aCxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9ICh2YXJpYWJsZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGdyb3VuZGVkID0gdGhpcy5pc0dyb3VuZGVkKGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IGdyb3VuZGVkOyAgLy8vXG5cbiAgICByZXR1cm4gaW1wbGljaXRseUdyb3VuZGVkO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJJZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlcklkZW50aWZpZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVySWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHRlcm0gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFRlcm0gPSB0aGlzLmZpbmRWYWxpZFRlcm0oY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRUZXJtICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdGVybSA9IHZhbGlkVGVybTsgLy8vXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybXMuc29tZSgodmFsaWRhdGVUZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHZhbGlkYXRlVGVybSh0ZXJtLCBjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKTtcblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzO1xuXG4gICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBub2RlID0gbm9kZUZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub2RlRnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gaW5zdGFudGlhdGVUZXJtKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59Il0sIm5hbWVzIjpbImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVGVybSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImdldFR5cGUiLCJzZXRUeXBlIiwiZ2V0VGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybU5vZGVBQU1hdGNoZXNUZXJtQk5vZGVCIiwibWF0Y2giLCJlcXVhbFRvIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YXJpYWJsZUlkZW50aWZpZXJBIiwidmFyaWFibGVJZGVudGlmaWVyQiIsImZpbmRWYWxpZFRlcm0iLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidmFsaWRUZXJtIiwiaXNFcXVhbFRvIiwidGVybU5vZGVNYXRjaGVzIiwiaXNHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVGVybSIsInZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNQcm92aXNpb25hbCIsImlzSW5pdGlhbGx5R3JvdW5kZWQiLCJ2YXJpYWJsZXNMZW5ndGgiLCJpbml0aWFsbHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW1wbGljaXRseUdyb3VuZGVkIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlcklkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZvcndhcmRzIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm1zIiwic29tZSIsInZhbGlkYXRlVGVybSIsInRlcm1WYWxpZGF0ZXMiLCJhZGRUZXJtIiwidmFsaWRhdGVHaXZlblR5cGUiLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm5vZGVGcm9tU3RyaW5nIiwidHlwZUZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzhCQVp3Qjt5QkFDTzt3QkFFUjt1QkFDRzswQkFDSTsyQkFDRTsyQkFDRTtvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQSxTQUFXQyx5QkFBYyxDQUF6QkQ7SUFFUixXQUFl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