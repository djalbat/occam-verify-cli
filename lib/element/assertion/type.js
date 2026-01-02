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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _assign = require("../../process/assign");
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
var _default = (0, _elements.define)((_TypeAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(TypeAssertion, Assertion);
    function TypeAssertion(string, node, term, type) {
        _class_call_check(this, TypeAssertion);
        var _this;
        _this = _call_super(this, TypeAssertion, [
            string,
            node
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
                var Type = _elements.default.Type, Variable = _elements.default.Variable, termNode = this.term.getNode();
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
                    var variableNode = singularVariableNode, variable = Variable.fromVariableNodeAndType(variableNode, type, context), variableAssignment = (0, _assign.variableAssignmentFromVariable)(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ]);
    return TypeAssertion;
}(_assertion.default), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRlcm0sIHR5cGUpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGxldCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllc0FoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVzQWhlYWQgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybVR5cGVQcm92aXNpb25hbCA9IHRlcm1UeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgaWYgKCF0ZXJtVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVzQWhlYWQgPSB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZTsgLy8vXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRlcm1WZXJpZmllczsgLy8vXG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFzc2lnbm1lbnRzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBUeXBlLCBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgbGV0IHR5cGUsXG4gICAgICAgIHByb3Zpc2lvbmFsO1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLnR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgdHlwZSA9IHRoaXMudHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0aGlzLnR5cGUsIHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaW5ndWxhclZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFNpbmd1bGFyVmFyaWFibGVOb2RlKCk7XG5cbiAgICBpZiAoc2luZ3VsYXJWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNpbmd1bGFyVmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJ0eXBlIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInRlcm1WZXJpZmllcyIsInZlcmlmaWVzQWhlYWQiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwidGVybVR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJUeXBlIiwiZWxlbWVudHMiLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInByb3Zpc2lvbmFsIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7c0JBR3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxrQ0FBQzs7YUFBTUMsY0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEVko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFRQzs7UUFFZCxNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsSUFBSSxHQUFHQTs7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNqQyxJQUFJQyxXQUFXO2dCQUVmLElBQUlDLHNCQUFzQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUVoREgsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQXFDLE9BQXBCRixxQkFBb0I7Z0JBRXBELElBQU1HLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNOO2dCQUVyQyxJQUFJSyxjQUFjO29CQUNoQixJQUFJRSxxQkFBcUIsT0FDckJDLHNCQUFzQjtvQkFFMUIs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