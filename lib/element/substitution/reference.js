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
                var context = this.getContext(), referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference substitution..."));
                specificContext = context; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlO1xuICAgIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlZFRvUmVmZXJlbmNlID0gcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGFyZ2V0UmVmZXJlbmNlU3RyaW5nID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0UmVmZXJlbmNlU3RyaW5nfScgdGFyZ2V0IHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlU2luZ3VsYXIgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0UmVmZXJlbmNlU2luZ3VsYXIpIHtcbiAgICAgIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0UmVmZXJlbmNlU3RyaW5nfScgdGFyZ2V0IHJlZmVyZW5jZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHt0YXJnZXRSZWZlcmVuY2VTdHJpbmd9JyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmd9JyByZXBsYWNlbWVudCByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZ30nIHJlcGxhY2VtZW50IHJlZmVyZW5jZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJjb21wYXJlZFRvUmVmZXJlbmNlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZhbGlkYXRlcyIsImdldENvbnRleHQiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlIiwic3Vic3RpdGl0b2luIiwiYWRkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJ0YXJnZXRSZWZlcmVuY2VTdHJpbmciLCJ0YXJnZXRSZWZlcmVuY2VTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZyIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJsaXRlcmFsbHkiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImluc3RhbnRpYXRlUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzttRUFSeUI7d0JBRUY7dUJBQ0c7MkJBQ3VCO3VCQUNrQjtzQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhFLFdBQWVBLElBQUFBLGdCQUFNLDBDQUFDOzthQUFNQyxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0I7Z0NBRDlDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxlQUFlLEdBQUdBO1FBQ3ZCLE1BQUtDLG9CQUFvQixHQUFHQTs7Ozs7WUFHOUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZUFBZTtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO1lBQ2xDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNMLGVBQWUsQ0FBQ00sT0FBTyxJQUNsREMsYUFBYUYscUJBQXFCLEdB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