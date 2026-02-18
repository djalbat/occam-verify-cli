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
var _assign = require("../process/assign");
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
var _Judgement;
var _default = (0, _elements.define)((_Judgement = /*#__PURE__*/ function(Element) {
    _inherits(Judgement, Element);
    function Judgement(context, string, node, frame, assumption) {
        _class_call_check(this, Judgement);
        var _this;
        _this = _call_super(this, Judgement, [
            context,
            string,
            node
        ]);
        _this.frame = frame;
        _this.assumption = assumption;
        return _this;
    }
    _create_class(Judgement, [
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                return this.assumption;
            }
        },
        {
            key: "getJudgementNode",
            value: function getJudgementNode() {
                var node = this.getNode(), judgementNode = node; ///
                return judgementNode;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var judgementNode = this.getJudgementNode(), singular = judgementNode.isSingular();
                return singular;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.frame.getMetavariable();
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.frame.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' judgement..."));
                var frameValidates = this.frame.validate(assignments, stated, context);
                if (frameValidates) {
                    var assumptionValidates = this.assumption.validate(assignments, stated, context);
                    if (assumptionValidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(assignments, context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                }
                if (validates) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (validates) {
                    context.debug("...validated the '".concat(judgementString, "' judgement."));
                }
                return validates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var validatesWhenStated;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' stated judgement..."));
                validatesWhenStated = true;
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(judgementString, "' stated judgement."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived = false;
                var judgementString = this.getString(); ///
                context.trace("Validating the '".concat(judgementString, "' derived judgement..."));
                var metavariable = this.assumption.getMetavariable(), reference = referenceFromMetavariable(metavariable, context), topLevelMetaAssertion = context.findTopLevelMetaAssertionByReference(reference), substitutions = topLevelMetaAssertion.getSubstitutions(), frameComparesToSubstitutions = this.frame.compareSubstitutions(substitutions, context);
                if (frameComparesToSubstitutions) {
                    validatesWhenDerived = true;
                }
                if (validatesWhenDerived) {
                    context.debug("...validated the '".concat(judgementString, "' derived judgement."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement), assignment = judgementAssignment; ///
                assignments.push(assignment);
            }
        }
    ]);
    return Judgement;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Judgement, "name", "Judgement"), _Judgement));
function referenceFromMetavariable(metavariable, context) {
    var Reference = elements.Reference, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSnVkZ2VtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lVmFsaWRhdGVzID0gdGhpcy5mcmFtZS52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHRoaXMuZnJhbWUuY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoYXNzaWdubWVudHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDsgLy8vXG5cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkp1ZGdlbWVudFwiO1xufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSnVkZ2VtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJmcmFtZSIsImFzc3VtcHRpb24iLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZhbGlkYXRlcyIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZnJhbWVWYWxpZGF0ZXMiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwibWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZSIsInN1YnN0aXR1dGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwiZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucyIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwianVkZ2VtZW50IiwianVkZ2VtZW50QXNzaWdubWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50IiwiYXNzaWdubWVudCIsInB1c2giLCJFbGVtZW50IiwibmFtZSIsIlJlZmVyZW5jZSIsImVsZW1lbnRzIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7Ozs4QkFMd0I7d0JBRUQ7c0JBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzs7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVO2dDQUQxQkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO2dCQUUvQixPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ0ksV0FBV0YsY0FBY0MsVUFBVTtnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1MsZUFBZTtZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGdCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQ1gsS0FBSyxDQUFDVSx1QkFBdUIsQ0FBQ0M7WUFBbUI7OztZQUV6R0MsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFdBQVcsRUFBRUMsTUFBTSxFQUFFakIsT0FBTztnQkFDbkMsSUFBSWtCLFlBQVk7Z0JBRWhCLElBQU1DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUU5Q3BCLFFBQVFxQixLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJGLGlCQUFnQjtnQkFFakQsSUFBTUcsaUJBQWlCLElBQUksQ0FBQ25CLEtBQUssQ0FBQ1ksUUFBUSxDQUFDQyxhQUFhQyxRQUFRakI7Z0JBRWhFLElBQUlzQixnQkFBZ0I7b0JBQ2xCLElBQU1DLHNCQUFzQixJQUFJLENBQUNuQixVQUFVLENBQUNXLFFBQVEsQ0FBQ0MsYUFBYUMsUUFBUWpCO29CQUUxRSxJQUFJdUIscUJBQXFCO3dCQUN2QixJQUFJQyxzQkFBc0IsT0FDdEJDLHVCQUF1Qjt3QkFFM0IsSUFBSVIsUUFBUTs0QkFDVk8sc0JBQXNCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUNWLGFBQWFoQjt3QkFDN0QsT0FBTzs0QkFDTHlCLHVCQUF1QixJQUFJLENBQUNFLG1CQUFtQixDQUFDM0I7d0JBQ2xEO3dCQUVBLElBQUl3Qix1QkFBdUJDLHNCQUFzQjs0QkFDL0NQLFlBQVk7d0JBQ2Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsV0FBVztvQkFDYixJQUFJRCxRQUFRO3dCQUNWLElBQUksQ0FBQ1csTUFBTSxDQUFDWixhQUFhaEI7b0JBQzNCO2dCQUNGO2dCQUVBLElBQUlrQixXQUFXO29CQUNibEIsUUFBUTZCLEtBQUssQ0FBQyxBQUFDLHFCQUFvQyxPQUFoQlYsaUJBQWdCO2dCQUNyRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlYsV0FBVyxFQUFFaEIsT0FBTztnQkFDckMsSUFBSXdCO2dCQUVKLElBQU1MLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUU5Q3BCLFFBQVFxQixLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJGLGlCQUFnQjtnQkFFakRLLHNCQUFzQjtnQkFFdEIsSUFBSUEscUJBQXFCO29CQUN2QnhCLFFBQVE2QixLQUFLLENBQUMsQUFBQyxxQkFBb0MsT0FBaEJWLGlCQUFnQjtnQkFDckQ7Z0JBRUEsT0FBT0s7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0IzQixPQUFPO2dCQUN6QixJQUFJeUIsdUJBQXVCO2dCQUUzQixJQUFNTixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFOUNwQixRQUFRcUIsS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCRixpQkFBZ0I7Z0JBRWpELElBQU1XLGVBQWUsSUFBSSxDQUFDMUIsVUFBVSxDQUFDUSxlQUFlLElBQzlDbUIsWUFBWUMsMEJBQTBCRixjQUFjOUIsVUFDcERpQyx3QkFBd0JqQyxRQUFRa0Msb0NBQW9DLENBQUNILFlBQ3JFSSxnQkFBZ0JGLHNCQUFzQkcsZ0JBQWdCLElBQ3REQywrQkFBK0IsSUFBSSxDQUFDbEMsS0FBSyxDQUFDbUMsb0JBQW9CLENBQUNILGVBQWVuQztnQkFFcEYsSUFBSXFDLDhCQUE4QjtvQkFDaENaLHVCQUF1QjtnQkFDekI7Z0JBRUEsSUFBSUEsc0JBQXNCO29CQUN4QnpCLFFBQVE2QixLQUFLLENBQUMsQUFBQyxxQkFBb0MsT0FBaEJWLGlCQUFnQjtnQkFDckQ7Z0JBRUEsT0FBT007WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPWixXQUFXLEVBQUVoQixPQUFPO2dCQUN6QixJQUFJZ0IsZ0JBQWdCLE1BQU07b0JBQ3hCO2dCQUNGO2dCQUVBLElBQU11QixZQUFZLElBQUksRUFDaEJDLHNCQUFzQkMsSUFBQUEsd0NBQWdDLEVBQUNGLFlBQ3ZERyxhQUFhRixxQkFBcUIsR0FBRztnQkFFM0N4QixZQUFZMkIsSUFBSSxDQUFDRDtZQUNuQjs7OztxQkE3SDRDRSx1QkFBTyxJQStIbkQsNkJBQU9DLFFBQU87QUFHaEIsU0FBU2IsMEJBQTBCRixZQUFZLEVBQUU5QixPQUFPO0lBQ3RELElBQU0sQUFBRThDLFlBQWNDLFNBQWRELFdBQ0ZFLG1CQUFtQmxCLGFBQWF0QixPQUFPLElBQ3ZDdUIsWUFBWWUsVUFBVUcsb0JBQW9CLENBQUNELGtCQUFrQmhEO0lBRW5FLE9BQU8rQjtBQUNUIn0=