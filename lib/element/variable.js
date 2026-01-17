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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
            value: function unifyTerm(term, substitutions, generalContext, specificContext) {
                var termUnifies = false;
                var context = specificContext, termString = term.getString(), variableString = this.getString(); ///
                context.trace("Unifying the '".concat(termString, "' term with the '").concat(variableString, "' variable..."));
                var variable;
                variable = this; ///
                var substitution = substitutions.findSubstitutionByVariable(variable);
                if (substitution !== null) {
                    var substitutionComparesToTerm = substitution.compareTerm(term, context);
                    if (substitutionComparesToTerm) {
                        termUnifies = true;
                    }
                } else {
                    var context1;
                    context1 = generalContext; ///
                    var variableIdentifier = variable.getIdentifier();
                    variable = context1.findVariableByVariableIdentifier(variableIdentifier);
                    context1 = specificContext; ///
                    var termNode = term.getNode();
                    term = context1.findTermByTermNode(termNode);
                    var termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                    if (termTypeEqualToOrSubTypeOfVariableType) {
                        var TermSubstitution = _elements.default.TermSubstitution, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context1), substitution1 = termSubstitution; ///
                        substitutions.addSubstitution(substitution1, context1);
                        termUnifies = true;
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
                var string = json.string, variableNode = (0, _instantiate.instantiateVariable)(string, context), variableIdentifier = variableNode.getVariableIdentifier(), node = variableNode, identifier = variableIdentifier, type = (0, _json.typeFromJSON)(json, context), propertyRelations = [], variable = new Variable(context, string, node, type, identifier, propertyRelations);
                return variable;
            }
        }
    ]);
    return Variable;
}(_wrap_native_super(_element.default)), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVmFyaWFibGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBpZGVudGlmaWVyLCBwcm9wZXJ0eVJlbGF0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9ucyA9IHByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICB2YXJpYWJsZSA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSA9IHN1YnN0aXR1dGlvbi5jb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9UZXJtKSB7XG4gICAgICAgIHRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZVZhcmlhYmxlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsXG4gICAgICAgICAgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbnMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGlkZW50aWZpZXIsIHByb3BlcnR5UmVsYXRpb25zKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJpZGVudGlmaWVyIiwicHJvcGVydHlSZWxhdGlvbnMiLCJnZXRJZGVudGlmaWVyIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5UmVsYXRpb25zIiwic2V0VHlwZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlUGFyYW10ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWJ1ZyIsInZhbGlkYXRlVHlwZSIsInR5cGVWYWxpZGF0ZXMiLCJ0eXBlU3RyaW5nIiwicHJlZml4ZWRUeXBlTmFtZSIsImdldFByZWZpeGVkTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwidW5pZnlUZXJtIiwidGVybSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1VbmlmaWVzIiwidGVybVN0cmluZyIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlVGVybSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1UeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlRlcm1TdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsInRlcm1TdWJzdGl0dXRpb24iLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInZhcmlhYmxlTm9kZSIsImluc3RhbnRpYXRlVmFyaWFibGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ0eXBlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OERBUG9CO2dFQUNDOzJCQUdlO29CQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBRDVDTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxpQkFBaUIsR0FBR0E7Ozs7O1lBRzNCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGlCQUFpQjtZQUMvQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNk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