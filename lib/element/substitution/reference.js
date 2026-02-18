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
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.targetReference.matchMetavariableName(metavariableName);
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
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(referenceSubstitutionString, "' reference substitution is already valid."));
                } else {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlO1xuICAgIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmlzRXF1YWxUbyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbXBhcmVkVG9SZWZlcmVuY2UgPSByZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2U7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9SZWZlcmVuY2U7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5pc1ZhbGlkKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdGl0b2luKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFJlZmVyZW5jZVN0cmluZyA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyKSB7XG4gICAgICB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0UmVmZXJlbmNlU3RyaW5nfScgdGFyZ2V0IHJlZmVyZW5jZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nfScgcmVwbGFjZW1lbnQgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmd9JyByZXBsYWNlbWVudCByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBzdHJpbmcgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGFyZ2V0UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRUYXJnZXRSZWZlcmVuY2UiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSIsImdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSIsImNvbXBhcmVkVG9SZWZlcmVuY2UiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidmFsaWRhdGVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJpc1ZhbGlkIiwiZGVidWciLCJ0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZSIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZVN0cmluZyIsInRhcmdldFJlZmVyZW5jZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O21FQVJ5Qjt3QkFFRjt1QkFDRzsyQkFDdUI7dUJBQ2tCO3NCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEUsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQjtnQ0FEOUNMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLGVBQWUsR0FBR0E7UUFDdkIsTUFBS0Msb0JBQW9CLEdBQUdBOzs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixlQUFlO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixvQkFBb0I7WUFDbEM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLHdCQUF3QlAsTUFBTSxHQUFHO2dCQUV2QyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNSLGVBQWUsQ0FBQ0ssT0FBTyxJQUNsREksYUFBYUQscUJBQXFCLEdBQUc7Z0JBRTNDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ1Ysb0JBQW9C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