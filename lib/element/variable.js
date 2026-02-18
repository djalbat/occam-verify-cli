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
var _Variable;
var _default = (0, _elements.define)((_Variable = /*#__PURE__*/ function(Element) {
    _inherits(Variable, Element);
    function Variable(context, string, node, type, identifier, propertyRelations) {
        _class_call_check(this, Variable);
        var _this;
        _this = _call_super(this, Variable, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.identifier = identifier;
        _this.propertyRelations = propertyRelations;
        return _this;
    }
    _create_class(Variable, [
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getPropertyRelations",
            value: function getPropertyRelations() {
                return this.propertyRelations;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                var node = this.getNode(), variableNode = node; //
                return variableNode;
            }
        },
        {
            key: "getTypeString",
            value: function getTypeString() {
                return this.type.getString();
            }
        },
        {
            key: "isIdentifierEqualTo",
            value: function isIdentifierEqualTo(identifier) {
                var identifierEqualTo = this.identifier === identifier;
                return identifierEqualTo;
            }
        },
        {
            key: "compare",
            value: function compare(variable) {
                var variableIdentifier = variable.getIdentifier(), comparesTo = this.identifier === variableIdentifier;
                return comparesTo;
            }
        },
        {
            key: "compareParamter",
            value: function compareParamter(parameter) {
                var identifier = parameter.getIdentifier(), identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToParamter = identifierEqualTo; ///
                return comparesToParamter;
            }
        },
        {
            key: "compareVariableIdentifier",
            value: function compareVariableIdentifier(variableIdentifier) {
                var identifier = variableIdentifier, identifierEqualTo = this.isIdentifierEqualTo(identifier), comparesToVariableIdentifier = identifierEqualTo; ///
                return comparesToVariableIdentifier;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates;
                var variableString = this.getString(); ///
                context.trace("Validating the '".concat(variableString, "' variable..."));
                var variableIdentifier = this.identifier, variable = context.findVariableByVariableIdentifier(variableIdentifier);
                if (variable !== null) {
                    var type = variable.getType();
                    this.type = type;
                    validates = true;
                } else {
                    context.debug("The '".concat(variableString, "' variable is not present."));
                }
                if (validates) {
                    context.debug("...validated the '".concat(variableString, "' variable."));
                }
                return validates;
            }
        },
        {
            key: "validateType",
            value: function validateType(context) {
                var typeValidates = false;
                var typeString = this.type.getString();
                context.trace("Validating the '".concat(typeString, "' type..."));
                var prefixedTypeName = this.type.getPrefixedName(), type = context.findTypeByPrefixedTypeName(prefixedTypeName);
                if (type === null) {
                    context.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    this.type = type; ///
                    typeValidates = true;
                }
                if (typeValidates) {
                    context.debug("...validated the '".concat(typeString, "' type."));
                }
                return typeValidates;
            }
        },
        {
            key: "unifyTerm",
            value: function unifyTerm(term, generalContext, specificContext) {
                var termUnifies = false;
                var context = specificContext, termString = term.getString(), variableString = this.getString(); ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var variable, substitution;
                variable = this; ///
                var variableIdentifier = variable.getIdentifier();
                substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);
                if (substitution !== null) {
                    var substitutionComparesToTerm = substitution.compareTerm(term, context);
                    if (substitutionComparesToTerm) {
                        termUnifies = true;
                    }
                } else {
                    var context1;
                    context1 = generalContext; ///
                    var variableIdentifier1 = variable.getIdentifier();
                    variable = context1.findVariableByVariableIdentifier(variableIdentifier1);
                    context1 = specificContext; ///
                    var termNode = term.getNode();
                    term = context1.findTermByTermNode(termNode);
                    var termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                    if (termTypeEqualToOrSubTypeOfVariableType) {
                        var TermSubstitution = elements.TermSubstitution, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context1), termSubstitutionValidates = termSubstitution.validate(generalContext, specificContext);
                        if (termSubstitutionValidates) {
                            termUnifies = true;
                        }
                    }
                }
                if (termUnifies) {
                    context.debug("...unified the '".concat(termString, "' term with the '").concat(variableString, "' variable."));
                }
                return termUnifies;
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
    return Variable;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGU7ICAvL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICBpc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyRXF1YWxUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXJFcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBjb21wYXJlc1RvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gdmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtdGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwYXJhbWV0ZXIuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIGlkZW50aWZpZXJFcXVhbFRvID0gdGhpcy5pc0lkZW50aWZpZXJFcXVhbFRvKGlkZW50aWZpZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMuaWRlbnRpZmllcixcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHByZWZpeGVkVHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLy9cblxuICAgICAgdHlwZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgbGV0IHZhcmlhYmxlLFxuICAgICAgICBzdWJzdGl0dXRpb247XG5cbiAgICB2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0pIHtcbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdGVybVN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJnZXRJZGVudGlmaWVyIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImdldFZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZhbGlkYXRlVHlwZSIsInR5cGVWYWxpZGF0ZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVGVybVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwidGVybVN1YnN0aXR1dGlvbiIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ0ZXJtU3Vic3RpdHV0aW9uVmFsaWRhdGVzIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBl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