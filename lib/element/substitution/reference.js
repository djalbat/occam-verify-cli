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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _elements = require("../../elements");
var _context = require("../../utilities/context");
var _instantiate = require("../../process/instantiate");
var _element = require("../../utilities/element");
var _string = require("../../utilities/string");
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
var _ReferenceSubstitution;
var _default = (0, _elements.define)((_ReferenceSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(ReferenceSubstitution, Substitution);
    function ReferenceSubstitution(context, string, node, targetReference, replacementReference) {
        _class_call_check(this, ReferenceSubstitution);
        var _this;
        _this = _call_super(this, ReferenceSubstitution, [
            context,
            string,
            node
        ]);
        _this.targetReference = targetReference;
        _this.replacementReference = replacementReference;
        return _this;
    }
    _create_class(ReferenceSubstitution, [
        {
            key: "getTargetReference",
            value: function getTargetReference() {
                return this.targetReference;
            }
        },
        {
            key: "getReplacementReference",
            value: function getReplacementReference() {
                return this.replacementReference;
            }
        },
        {
            key: "getReferenceSubstitutionNode",
            value: function getReferenceSubstitutionNode() {
                var node = this.getNode(), referenceSubstitution = node; ///
                return referenceSubstitution;
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var targetReferenceNode = this.targetReference.getNode(), tergetNode = targetReferenceNode; ///
                return tergetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementReferenceNode = this.replacementReference.getNode(), replacementNode = replacementReferenceNode; ///
                return replacementNode;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.targetReference.getMetavariableName();
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.targetReference.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var targetReferenceEqualToReplacementReference = this.targetReference.isEqualTo(this.replacementReference), trivial = targetReferenceEqualToReplacementReference; ///
                return trivial;
            }
        },
        {
            key: "compareReference",
            value: function compareReference(reference, context) {
                var referenceEqualToReplacementReference = this.replacementReference.isEqualTo(reference), comparedToReference = referenceEqualToReplacementReference; ///
                return comparedToReference;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var targetReferenceComparesToParameter = this.targetReference.compareParameter(parameter), comparesToParameter = targetReferenceComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(generalContext, specificContext) {
                var referenceSubstitution = null;
                var context = this.getContext();
                specificContext = context; ///
                var referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference substitution..."));
                var validSubstitution = this.findValidSubstiution(context);
                if (validSubstitution) {
                    referenceSubstitution = validSubstitution; ///
                    context.debug("...the '".concat(referenceSubstitutionString, "' reference substitution is already valid."));
                } else {
                    var validates = false;
                    var targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);
                    if (targetReferenceValidates) {
                        var replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);
                        if (replacementReferenceValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var subsitution = this; ///
                        referenceSubstitution = subsitution; ///
                        context.addSubstitution(subsitution);
                        context.debug("...validated the '".concat(referenceSubstitutionString, "' reference substitution."));
                    }
                }
                return referenceSubstitution;
            }
        },
        {
            key: "validateTargetReference",
            value: function validateTargetReference(generalContext, specificContext) {
                var targetReferenceValidates = false;
                var context = generalContext, targetReferenceString = this.targetReference.getString(), referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(targetReferenceString, "' target reference..."));
                var targetReferenceSingular = this.targetReference.isSingular();
                if (targetReferenceSingular) {
                    var targetReference = this.targetReference.validate(context);
                    if (targetReference !== null) {
                        targetReferenceValidates = true;
                    }
                } else {
                    context.debug("The '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(targetReferenceString, "' target reference is not singular."));
                }
                if (targetReferenceValidates) {
                    context.debug("...validated the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(targetReferenceString, "' target reference..."));
                }
                return targetReferenceValidates;
            }
        },
        {
            key: "validateReplacementReference",
            value: function validateReplacementReference(generalContext, specificContext) {
                var replacementReferenceValidates = false;
                var context = specificContext, replacementReferenceString = this.replacementReference.getString(), referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(replacementReferenceString, "' replacement reference..."));
                var replacementReference = this.replacementReference.validate(context);
                if (replacementReference !== null) {
                    replacementReferenceValidates = true;
                }
                if (replacementReferenceValidates) {
                    context.debug("...validated the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(replacementReferenceString, "' replacement reference."));
                }
                return replacementReferenceValidates;
            }
        }
    ], [
        {
            key: "fromReferenceAndMetavariable",
            value: function fromReferenceAndMetavariable(reference, metavariable, context) {
                return (0, _context.literally)(function(context) {
                    var referenceSubstitutionString = (0, _string.referenceSubstitutionStringFromReferenceAndMetavariable)(reference, metavariable), string = referenceSubstitutionString, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context), referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, context);
                    return referenceSubstitution;
                }, context);
            }
        }
    ]);
    return ReferenceSubstitution;
}(_substitution.default), _define_property(_ReferenceSubstitution, "name", "ReferenceSubstitution"), _ReferenceSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlO1xuICAgIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlZFRvUmVmZXJlbmNlID0gcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzaXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBzdWJzaXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnNpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFJlZmVyZW5jZVN0cmluZyA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHRhcmdldFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0UmVmZXJlbmNlU3RyaW5nfScgdGFyZ2V0IHJlZmVyZW5jZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHt0YXJnZXRSZWZlcmVuY2VTdHJpbmd9JyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZ30nIHJlcGxhY2VtZW50IHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50UmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nfScgcmVwbGFjZW1lbnQgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSIsImNvbXBhcmVkVG9SZWZlcmVuY2UiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl1dGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwidGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJzdWJzaXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZVN0cmluZyIsInRhcmdldFJlZmVyZW5jZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O21FQVJ5Qjt3QkFFRjt1QkFDRzsyQkFDdUI7dUJBQ2tCO3NCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEUsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQjtnQ0FEOUNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLGVBQWUsR0FBR0E7UUFDdkIsTUFBS0Msb0JBQW9CLEdBQUdBOzs7OztZQUc5QkMsS0FB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