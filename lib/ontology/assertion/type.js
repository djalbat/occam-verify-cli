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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _TypeAssertion;
var _default = (0, _ontology.define)((_TypeAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(TypeAssertion, Assertion);
    function TypeAssertion(string, node, tokens, term, type) {
        _class_call_check(this, TypeAssertion);
        var _this;
        _this = _call_super(this, TypeAssertion, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.type = type;
        return _this;
    }
    _create_class(TypeAssertion, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."));
                var typeVerifies = this.verifyType(context);
                if (typeVerifies) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(typeAssertionString, "' type assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(context) {
                var typeVerifies;
                var typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."));
                var nominalTypeName = this.type.getNominalTypeName(), type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    this.type = type;
                    typeVerifies = true;
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."));
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiesWhenStated = false;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' stated type assertion..."));
                var termVerifies = this.term.verify(context, function() {
                    var verifiesAhead;
                    var termType = _this.term.getType(), typeEqualToOrSubTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                    if (typeEqualToOrSubTypeOfTermType) {
                        verifiesAhead = true;
                    }
                    return verifiesAhead;
                });
                if (termVerifies) {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var _this = this;
                var verifiesWhenDerived;
                var typeAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."));
                var termVerifies = this.term.verify(context, function() {
                    var verifiesAhead = false;
                    var termType = _this.term.getType(), termTypeProvisional = termType.isProvisional();
                    if (!termTypeProvisional) {
                        var typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                        verifiesAhead = typeEqualToOrSuperTypeOfTermType; ///
                    }
                    return verifiesAhead;
                });
                verifiesWhenDerived = termVerifies; ///
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var Type = _ontology.default.Type, Variable = _ontology.default.Variable, termNode = this.term.getNode();
                var type, provisional;
                provisional = this.type.isProvisional();
                if (!provisional) {
                    type = this.type;
                } else {
                    provisional = false;
                    type = Type.fromTypeAndProvisional(this.type, provisional);
                }
                var singularVariableNode = termNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    var variableNode = singularVariableNode, variable = Variable.fromVariableNodeAndType(variableNode, type, context), variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var typeAssertion = null;
                var typeAssertionNode = statementNode.getTypeAssertionNode();
                if (typeAssertionNode !== null) {
                    var Term = _ontology.default.Term, Type = _ontology.default.Type, node = typeAssertionNode, tokens = null, string = context.nodeAsString(node), term = Term.fromTypeAssertionNode(typeAssertionNode, context), type = Type.fromTypeAssertionNode(typeAssertionNode, context);
                    typeAssertion = new TypeAssertion(string, node, tokens, term, type);
                }
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}(_assertion.default), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCB0eXBlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGxldCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVzQWhlYWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVQcm92aXNpb25hbCA9IHRlcm1UeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgaWYgKCF0ZXJtVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZTsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRlcm1WZXJpZmllczsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBUeXBlLCBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgbGV0IHR5cGUsXG4gICAgICAgIHByb3Zpc2lvbmFsO1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLnR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgdHlwZSA9IHRoaXMudHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0aGlzLnR5cGUsIHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFR5cGVBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsInR5cGUiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVzIiwidHlwZUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVzIiwidmVyaWZ5VHlwZSIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybVZlcmlmaWVzIiwidmVyaWZpZXNBaGVhZCIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsIlR5cGUiLCJvbnRvbG9neSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwicHJvdmlzaW9uYWwiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwic2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhclZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsImdldFR5cGVBc3NlcnRpb25Ob2RlIiwiVGVybSIsIm5vZGVBc1N0cmlu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