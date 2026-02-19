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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
                        var TermSubstitution = _elements.default.TermSubstitution, termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context1), termSubstitutionValidates = termSubstitution.validate(generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgaWRlbnRpZmllciwgcHJvcGVydHlSZWxhdGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbnMgPSBwcm9wZXJ0eVJlbGF0aW9ucztcbiAgfVxuXG4gIGdldElkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZTsgIC8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VHlwZVN0cmluZygpIHsgcmV0dXJuIHRoaXMudHlwZS5nZXRTdHJpbmcoKTsgfVxuXG4gIGlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGlkZW50aWZpZXJFcXVhbFRvID0gKHRoaXMuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllckVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIGNvbXBhcmVzVG8gPSAodGhpcy5pZGVudGlmaWVyID09PSB2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW10ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBhcmFtZXRlci5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gaWRlbnRpZmllckVxdWFsVG87IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgaWRlbnRpZmllckVxdWFsVG8gPSB0aGlzLmlzSWRlbnRpZmllckVxdWFsVG8oaWRlbnRpZmllciksXG4gICAgICAgICAgY29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IGlkZW50aWZpZXJFcXVhbFRvOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXM7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgcHJlZml4ZWRUeXBlTmFtZSA9IHRoaXMudHlwZS5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICB0eXBlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBsZXQgdmFyaWFibGUsXG4gICAgICAgIHN1YnN0aXR1dGlvbjtcblxuICAgIHZhcmlhYmxlID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1Rlcm0gPSBzdWJzdGl0dXRpb24uY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSkge1xuICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0ZXJtU3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidHlwZSIsImlkZW50aWZpZXIiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldElkZW50aWZpZXIiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlSZWxhdGlvbnMiLCJzZXRUeXBlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJpc0lkZW50aWZpZXJFcXVhbFRvIiwiaWRlbnRpZmllckVxdWFsVG8iLCJjb21wYXJlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlc1RvIiwiY29tcGFyZVBhcmFtdGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImRlYnVnIiwidmFsaWRhdGVUeXBlIiwidHlwZVZhbGlkYXRlcyIsInR5cGVTdHJpbmciLCJwcmVmaXhlZFR5cGVOYW1lIiwiZ2V0UHJlZml4ZWROYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJ1bmlmeVRlcm0iLCJ0ZXJtIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtVW5pZmllcyIsInRlcm1TdHJpbmciLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvVGVybSIsImNvbXBhcmVUZXJtIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJUZXJtU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzhCQVB3QjtnRUFFSDtvQkFHVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixXQUFlQSxJQUFBQSxnQkFBTSw2QkFBQzs7YUFBTUMsU0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FENUNOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLGlCQUFpQixHQUFHQTs7Ozs7WUFHM0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsaUJBQWlCO1lBQy9COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsT0FBTyxJQUFJLENBQUNTLE9BQU8sSUFDbkJDLGVBQWVWLE1BQU8sRUFBRTtnQkFFOUIsT0FBT1U7WUFDVDs7O1lBRUFD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