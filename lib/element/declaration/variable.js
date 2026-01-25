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
var _occamfurtle = require("occam-furtle");
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
var define = _occamfurtle.elements.define;
var _default = define((_VariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(VariableDeclaration, Declaration);
    function VariableDeclaration(context, string, node, variable) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            string,
            node
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
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
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
    ]);
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlVHlwZSgpO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVUeXBlKCkge1xuICAgIGxldCB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGxldCB0eXBlO1xuXG4gICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbClcblxuICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IHR5cGUuY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCF0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmAsIG5vZGUpIDpcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB2YXJpYWJsZVR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVR5cGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlVHlwZSIsInZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZSIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVOYW1lIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlU3RyaW5nIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJ0eXBlQ29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwic2V0VHlwZSIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkJBTnlCO2tFQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxBQUFFQSxTQUFXQyxxQkFBUSxDQUFuQkQ7SUFFUixXQUFlQSw2Q0FBTzs7YUFBTUUsb0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGpCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFdkRWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUEyQyxP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