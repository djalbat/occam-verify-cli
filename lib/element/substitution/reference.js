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
                var validates = false;
                var context = this.getContext();
                specificContext = context; ///
                var referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference substitution..."));
                var targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);
                if (targetReferenceValidates) {
                    var replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);
                    if (replacementReferenceValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...validated the '".concat(referenceSubstitutionString, "' reference substitution."));
                }
                return validates;
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
                    targetReferenceValidates = this.targetReference.validate(context);
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
                var replacementReferenceValidates;
                var context = specificContext, replacementReferenceString = this.replacementReference.getString(), referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(replacementReferenceString, "' replacement reference..."));
                replacementReferenceValidates = this.replacementReference.validate(context);
                if (replacementReferenceValidates) {
                    context.debug("...validated the '".concat(referenceSubstitutionString, "' reference subtitution's '").concat(replacementReferenceString, "' replacement reference..."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlO1xuICAgIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlZFRvUmVmZXJlbmNlID0gcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXRpdG9pbiA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRSZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHt0YXJnZXRSZWZlcmVuY2VTdHJpbmd9JyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VTaW5ndWxhciA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VTaW5ndWxhcikge1xuICAgICAgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy50YXJnZXRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHt0YXJnZXRSZWZlcmVuY2VTdHJpbmd9JyB0YXJnZXQgcmVmZXJlbmNlIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZ30nIHJlcGxhY2VtZW50IHJlZmVyZW5jZS4uLmApO1xuXG4gICAgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nfScgcmVwbGFjZW1lbnQgcmVmZXJlbmNlLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRUYXJnZXRSZWZlcmVuY2UiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSIsImNvbXBhcmVkVG9SZWZlcmVuY2UiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidmFsaWRhdGVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInRhcmdldFJlZmVyZW5jZVN0cmluZyIsInRhcmdldFJlZmVyZW5jZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O21FQVJ5Qjt3QkFFRjt1QkFDRzsyQkFDdUI7dUJBQ2tCO3NCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEUsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQjtnQ0FEOUNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLGVBQWUsR0FBR0E7UUFDdkIsTUFBS0Msb0JBQW9CLEdBQUdBOzs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixlQUFlO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixvQkFBb0I7WUFDbEM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ0wsZUFBZSxDQUFDTSxPQUFPLElBQ2xEQyxhQUFhRixxQkFBcUIs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