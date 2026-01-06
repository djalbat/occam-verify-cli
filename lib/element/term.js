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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _verify = /*#__PURE__*/ _interop_require_default(require("../mixins/term/verify"));
var _elements = require("../elements");
var _instantiate = require("../process/instantiate");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
            }
        },
        {
            key: "isProvisional",
            value: function isProvisional() {
                return this.type.isProvisional();
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                return this.node.match(termNode);
            }
        },
        {
            key: "isEqualToVariable",
            value: function isEqualToVariable(variable) {
                var variableNodeMathces = false;
                var singular = this.isSingular();
                if (singular) {
                    var variableNode = variable.getNode(), singularVariableNode = this.node.getSingularVariableNode(), variableNodeA = variableNode, variableNodeB = singularVariableNode, matches = variableNodeA.match(variableNodeB);
                    if (matches) {
                        variableNodeMathces = true;
                    }
                }
                return variableNodeMathces;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var termNode = term.getNode(), matches = this.node.match(termNode), equalTo = matches; ///
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
            key: "verify",
            value: function verify(context, verifyAhead) {
                var _this = this;
                var verifies;
                var termString = this.string; ///
                context.trace("Verifying the '".concat(termString, "' term..."));
                verifies = _verify.default.some(function(verifyMixin) {
                    var term = _this, verifies = verifyMixin(term, context, verifyAhead);
                    if (verifies) {
                        return true;
                    }
                });
                if (verifies) {
                    var term = this; ///
                    context.addTerm(term);
                    context.debug("...verified the '".concat(termString, "' term."));
                }
                return verifies;
            }
        },
        {
            key: "verifyGivenType",
            value: function verifyGivenType(type, generalContext, specificContext) {
                var _this = this;
                var verifiesGivenType;
                var typeString = type.getString(), termString = this.getString(); ///
                specificContext.trace("Verifying the '".concat(termString, "' term given the '").concat(typeString, "' type..."));
                var context = specificContext, verifies = this.verify(context, function() {
                    var verifiesAhead;
                    var typeEqualToOrSubTypeOfGivenTypeType = _this.type.isEqualToOrSubTypeOf(type);
                    if (typeEqualToOrSubTypeOfGivenTypeType) {
                        verifiesAhead = true;
                    }
                    return verifiesAhead;
                });
                verifiesGivenType = verifies; ///
                if (verifiesGivenType) {
                    specificContext.debug("...verified the '".concat(termString, "' term given the '").concat(typeString, "' type."));
                }
                return verifiesGivenType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.string, type = typeJSON, json = {
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
                var string = json.string, termNode = (0, _instantiate.instantiateTerm)(string, context), node = termNode, type = (0, _json.typeFromJSON)(json, context), term = new Term(context, string, node, type);
                return term;
            }
        }
    ]);
    return Term;
}(_wrap_native_super(_element.default)), _define_property(_Term, "name", "Term"), _Term));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IHZlcmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Rlcm0vdmVyaWZ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBmaWx0ZXIsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHsgcmV0dXJuIHRoaXMubm9kZS5pc1Npbmd1bGFyKCk7IH1cblxuICBpc1Byb3Zpc2lvbmFsKCkgeyByZXR1cm4gdGhpcy50eXBlLmlzUHJvdmlzaW9uYWwoKTsgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaCh0ZXJtTm9kZSk7IH1cblxuICBpc0VxdWFsVG9WYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZU5vZGVNYXRoY2VzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgICBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRoaXMubm9kZS5nZXRTaW5ndWxhclZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVCID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhcmlhYmxlTm9kZUEubWF0Y2godmFyaWFibGVOb2RlQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZU1hdGhjZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRoY2VzO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2godGVybU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm0gID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICBmaWx0ZXIodmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmRlZmluZWRWYXJpYWJsZXMgPSB2YXJpYWJsZXMsIC8vL1xuICAgICAgICAgIHVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCA9IHVuZGVmaW5lZFZhcmlhYmxlcy5sZW5ndGgsXG4gICAgICAgICAgZ3JvdW5kZWQgPSAodW5kZWZpbmVkVmFyaWFibGVzTGVuZ3RoIDw9IDEpO1xuXG4gICAgcmV0dXJuIGdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZChjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSAgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNMZW5ndGggPSB2YXJpYWJsZXMubGVuZ3RoLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkID0gKHZhcmlhYmxlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZ3JvdW5kZWQgPSB0aGlzLmlzR3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gZ3JvdW5kZWQ7ICAvLy9cblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHZlcmlmaWVzID0gdmVyaWZ5TWl4aW5zLnNvbWUoKHZlcmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHZlcmlmeU1peGluKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB0ZXJtID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlHaXZlblR5cGUodHlwZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuVHlwZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICB2ZXJpZmllcyA9IHRoaXMudmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHZlcmlmaWVzR2l2ZW5UeXBlID0gdmVyaWZpZXM7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVzR2l2ZW5UeXBlKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzR2l2ZW5UeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgdGVybU5vZGUgPSBpbnN0YW50aWF0ZVRlcm0oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGVzID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlcygpLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICBjb21wcmVzcyh2YXJpYWJsZXMsICh2YXJpYWJsZUEsIHZhcmlhYmxlQikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIgPSB2YXJpYWJsZUEuaXNFcXVhbFRvKHZhcmlhYmxlQik7XG5cbiAgICBpZiAoIXZhcmlhYmxlQUVxdWFsVG9WYXJpYWJsZUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21UZXJtIiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJjb21wcmVzcyIsImRlZmluZSIsIlRlcm0iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImlzU2luZ3VsYXIiLCJpc1Byb3Zpc2lvbmFsIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwibWF0Y2giLCJpc0VxdWFsVG9WYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlTWF0aGNlcyIsInNpbmd1bGFyIiwidmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVOb2RlQiIsIm1hdGNoZXMiLCJpc0VxdWFsVG8iLCJ0ZXJtIiwiZXF1YWxUbyIsImlzR3JvdW5kZWQiLCJkZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVzIiwiZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInVuZGVmaW5lZFZhcmlhYmxlcyIsInVuZGVmaW5lZFZhcmlhYmxlc0xlbmd0aCIsImxlbmd0aCIsImdyb3VuZGVkIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsInZhcmlhYmxlc0xlbmd0aCIsImluaXRpYWxseUdyb3VuZGVkIiwiaXNJbXBsaWNpdGx5R3JvdW5kZWQiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJ2ZXJpZnkiLCJ2ZXJpZnlBaGVhZCIsInZlcmlmaWVzIiwidGVybVN0cmluZyIsInRyYWNlIiwidmVyaWZ5TWl4aW5zIiwic29tZSIsInZlcmlmeU1peGluIiwiYWRkVGVybSIsImRlYnVnIiwidmVyaWZ5R2l2ZW5UeXBlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ2ZXJpZmllc0dpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ2ZXJpZmllc0FoZWFkIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZVRlcm0iLCJ0eXBlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSIsInZhcmlhYmxlTm9kZXMiLCJnZXRWYXJpYWJsZU5vZGVzIiwibWFwIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUEiLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFFcXVhbFRvVmFyaWFibGVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFhQTtlQUFBOztRQXNLZ0JBO2VBQUFBOzs7eUJBakxlOzhEQUVYOzZEQUNLO3dCQUVGOzJCQUNTO29CQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQVFDLFNBQXFCQyx5QkFBYyxDQUFuQ0QsUUFBUUUsV0FBYUQseUJBQWMsQ0FBM0JDO0lBRWhCLFdBQWVDLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURiSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBOzs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUYsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBZSxPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxVQUFVO1lBQUk7OztZQUU5Q0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFrQixPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDSSxhQUFhO1lB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