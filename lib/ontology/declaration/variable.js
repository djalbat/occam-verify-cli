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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
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
var _VariableDeclaration;
var _default = (0, _ontology.define)((_VariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(VariableDeclaration, Declaration);
    function VariableDeclaration(context, node, string, variable) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            node,
            string
        ]);
        _this.variable = variable;
        return _this;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var node = this.getNode(), context = this.getContext(), variableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."), node);
                var variableTypeVerifies = this.verifyVariableType();
                if (variableTypeVerifies) {
                    var variableVerifies = this.verifyVariable();
                    if (variableVerifies) {
                        context.addVariable(this.variable);
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var node = this.getNode(), context = this.getContext(), variableString = this.variable.getString();
                context.trace("Verifying the '".concat(variableString, "' variable..."), node);
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    context.debug("The '".concat(variableName, "' variable is already present."), node);
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    context.debug("...verified the '".concat(variableString, "' variable."), node);
                }
                return variableVerifies;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.variable.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."), node);
                var nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional."), node) : context.debug("The '".concat(typeString, "' type is present but provisional."), node);
                    } else {
                        this.variable.setType(type);
                        variableTypeVerifies = true;
                    }
                }
                if (variableTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return variableTypeVerifies;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, context) {
                var Variable = _ontology.default.Variable, node = variableDeclarationNode, string = context.nodeAsString(node), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, node, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBub2RlLCBzdHJpbmcpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGVUeXBlKCk7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZSgpIHtcbiAgICBsZXQgIHZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0aGlzLnZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZU5hbWV9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICggdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICB2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVUeXBlKCkge1xuICAgIGxldCB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGxldCB0eXBlO1xuXG4gICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbClcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IHR5cGUubWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghcHJvdmlzaW9uYWxNYXRjaGVzKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmAsIG5vZGUpIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInZhcmlhYmxlIiwiZ2V0VmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFyaWFibGVUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZVR5cGUiLCJ2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5VmFyaWFibGUiLCJhZGRWYXJpYWJsZSIsImRlYnVnIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlTmFtZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInNldFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlIiwib250b2xvZ3kiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VB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