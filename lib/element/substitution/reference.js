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
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
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
var define = _occamfurtle.elements.define;
var _default = define((_ReferenceSubstitution = /*#__PURE__*/ function(Substitution) {
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
            value: function validate(context) {
                var validates = false;
                var referenceSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(referenceSubstitutionString, "' reference substitution..."));
                var targetReferenceValidates = this.validateTargetReference(context);
                if (targetReferenceValidates) {
                    var replacementReferenceValidates = this.validateReplacementReference(context);
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
            value: function validateTargetReference(context) {
                var targetReferenceValidates = false;
                var targetReferenceString = this.targetReference.getString(), referenceSubstitutionString = this.getString(); ///
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
            value: function validateReplacementReference(context) {
                var replacementReferenceValidates;
                var replacementReferenceString = this.replacementReference.getString(), referenceSubstitutionString = this.getString(); ///
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
                    referenceSubstitution.validate(context);
                    return referenceSubstitution;
                }, context);
            }
        }
    ]);
    return ReferenceSubstitution;
}(_substitution.default), _define_property(_ReferenceSubstitution, "name", "ReferenceSubstitution"), _ReferenceSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRhcmdldFJlZmVyZW5jZSA9IHRhcmdldFJlZmVyZW5jZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUYXJnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UpLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2U7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UuaXNFcXVhbFRvKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29tcGFyZWRUb1JlZmVyZW5jZSA9IHJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZVN0cmluZyA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVNpbmd1bGFyKSB7XG4gICAgICB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0UmVmZXJlbmNlU3RyaW5nfScgdGFyZ2V0IHJlZmVyZW5jZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmd9JyByZXBsYWNlbWVudCByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3VidGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZ30nIHJlcGxhY2VtZW50IHJlZmVyZW5jZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsImdldFRhcmdldFJlZmVyZW5jZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiY29tcGFyZWRUb1JlZmVyZW5jZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZSIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidGFyZ2V0UmVmZXJlbmNlU3RyaW5nIiwidGFyZ2V0UmVmZXJlbmNlU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwicmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmciLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibGl0ZXJhbGx5IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiU3Vic3RpdHV0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkJBWHlCO21FQUVBO3VCQUVDOzJCQUN1Qjt1QkFDa0I7c0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLCtDQUFPOzthQUFNRSxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0I7Z0NBRDlDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxlQUFlLEdBQUdBO1FBQ3ZCLE1BQUtDLG9CQUFvQixHQUFHQTs7Ozs7WUFHOUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsZUFBZTtZQUM3Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO1lBQ2xDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNMLGVBQWUsQ0FBQ00sT0FBTyxJQUNsREMsYUFBYUYscUJBQXFCLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ1Isb0JBQW9CLENBQUNLLE9BQU8sSUFDNURJLGtCQUFrQkQsMEJBQTBCLEdBQUc7Z0JBRXJELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNkNBQTZDLElBQUksQ0FBQ1osZUFBZSxDQUFDYSxTQUFT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