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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb25zID0gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUeXBlU3RyaW5nKCkgeyByZXR1cm4gdGhpcy50eXBlLmdldFN0cmluZygpOyB9XG5cbiAgaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllckVxdWFsVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyRXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgY29tcGFyZXNUbyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUbztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcGFyYW1ldGVyLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSBpZGVudGlmaWVyRXF1YWxUbzsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyLCAvLy9cbiAgICAgICAgICBpZGVudGlmaWVyRXF1YWxUbyA9IHRoaXMuaXNJZGVudGlmaWVyRXF1YWxUbyhpZGVudGlmaWVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcztcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdGhpcy50eXBlLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgIHR5cGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGxldCB2YXJpYWJsZSxcbiAgICAgICAgc3Vic3RpdHV0aW9uO1xuXG4gICAgdmFyaWFibGUgPSB0aGlzOyAvLy9cblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRlcm1TdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1TdWJzdGl0dXRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiaWRlbnRpZmllciIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0SWRlbnRpZmllciIsImdldFR5cGUiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInNldFR5cGUiLCJnZXRUeXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiaXNJZGVudGlmaWVyRXF1YWxUbyIsImlkZW50aWZpZXJFcXVhbFRvIiwiY29tcGFyZSIsInZhcmlhYmxlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUbyIsImNvbXBhcmVQYXJhbXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZhbGlkYXRlVHlwZSIsInR5cGVWYWxpZGF0ZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVVuaWZpZXMiLCJ0ZXJtU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7OEJBTHdCO3dCQUVEO29CQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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