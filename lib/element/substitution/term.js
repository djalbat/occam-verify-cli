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
var _brackets = require("../../utilities/brackets");
var _instantiate = require("../../process/instantiate");
var _string = require("../../utilities/string");
var _element = require("../../utilities/element");
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
var _TermSubstitution;
var _default = (0, _elements.define)((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermSubstitution, Substitution);
    function TermSubstitution(context, string, node, targetTerm, replacementTerm) {
        _class_call_check(this, TermSubstitution);
        var _this;
        _this = _call_super(this, TermSubstitution, [
            context,
            string,
            node
        ]);
        _this.targetTerm = targetTerm;
        _this.replacementTerm = replacementTerm;
        return _this;
    }
    _create_class(TermSubstitution, [
        {
            key: "getTargetTerm",
            value: function getTargetTerm() {
                return this.targetTerm;
            }
        },
        {
            key: "getReplacementTerm",
            value: function getReplacementTerm() {
                return this.replacementTerm;
            }
        },
        {
            key: "getTargetNode",
            value: function getTargetNode() {
                var targetTermNode = this.targetTerm.getNode(), tergetNode = targetTermNode; ///
                return tergetNode;
            }
        },
        {
            key: "getReplacementNode",
            value: function getReplacementNode() {
                var replacementTermNode = this.replacementTerm.getNode(), replacementNode = replacementTermNode; ///
                return replacementNode;
            }
        },
        {
            key: "isTrivial",
            value: function isTrivial() {
                var targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm), trivial = targetTermEqualToReplacementTerm; ///
                return trivial;
            }
        },
        {
            key: "compareTerm",
            value: function compareTerm(term, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                var termEqualToReplacementTerm = this.replacementTerm.isEqualTo(term), comparedToTerm = termEqualToReplacementTerm; ///
                return comparedToTerm;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
                return comparesToParameter;
            }
        },
        {
            key: "validate",
            value: function validate(generalContext, specificContext) {
                var validates = false;
                var context = this.getContext(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term substitution..."));
                specificContext = context; ///
                var targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                if (targetTermValidates) {
                    var replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                    if (replacementTermValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    var substititoin = this; ///
                    context.addSubstitution(substititoin);
                    context.debug("...validated the '".concat(termSubstitutionString, "' term substitution."));
                }
                return validates;
            }
        },
        {
            key: "validateTargetTerm",
            value: function validateTargetTerm(generalContext, specificContext) {
                var targetTermValidates = false;
                var context = generalContext, targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term..."));
                var targetTermSingular = this.targetTerm.isSingular();
                if (targetTermSingular) {
                    targetTermValidates = this.targetTerm.validate(context, function() {
                        var verifiesForwards = true;
                        return verifiesForwards;
                    });
                } else {
                    context.debug("The '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term is not singular."));
                }
                if (targetTermValidates) {
                    context.debug("...validated the '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term..."));
                }
                return targetTermValidates;
            }
        },
        {
            key: "validateReplacementTerm",
            value: function validateReplacementTerm(generalContext, specificContext) {
                var replacementTermValidates;
                var context = specificContext, replacementTermString = this.replacementTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(replacementTermString, "' replacement term..."));
                replacementTermValidates = this.replacementTerm.validate(context, function() {
                    var validatesForwards = true;
                    return validatesForwards;
                });
                if (replacementTermValidates) {
                    context.debug("...validated the '".concat(termSubstitutionString, "' term subtitution's '").concat(replacementTermString, "' replacement term..."));
                }
                return replacementTermValidates;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementNode = statement.getNode(), termSubstitution = (0, _element.termSubstitutionFromStatementNode)(statementNode, context);
                return termSubstitution;
            }
        },
        {
            key: "fromTermAndVariable",
            value: function fromTermAndVariable(term, variable, context) {
                term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
                return (0, _context.literally)(function(context) {
                    var termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
                    return termSubstitution;
                }, context);
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default), _define_property(_TermSubstitution, "name", "TermSubstitution"), _TermSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFRlcm0pLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uaXNFcXVhbFRvKHRlcm0pLFxuICAgICAgICAgIGNvbXBhcmVkVG9UZXJtID0gdGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9UZXJtO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRUZXJtU2luZ3VsYXIgPSB0aGlzLnRhcmdldFRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1TaW5ndWxhcikge1xuICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllc0ZvcndhcmRzO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3VidGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUZXJtTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInZhbGlkYXRlcyIsImdldENvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJzdWJzdGl0aXRvaW4iLCJhZGRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsInRhcmdldFRlcm1TdHJpbmciLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmVyaWZpZXNGb3J3YXJkcyIsInJlcGxhY2VtZW50VGVybVN0cmluZyIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInZhcmlhYmxlIiwibGl0ZXJhbGx5IiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJTdWJzdGl0dXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzttRUFUeUI7d0JBRUY7dUJBQ0c7d0JBQ1k7MkJBQ007c0JBQ2M7dUJBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0scUNBQUM7O2FBQU1DLGlCQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGVBQWU7Z0NBRHBDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLGVBQWUsR0FBR0E7Ozs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGVBQWU7WUFDN0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0wsVUFBVSxDQUFDTSxPQUFPLElBQ3hDQyxhQUFhRixnQkFBZ0IsR0FBRztnQkFFdEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDUixlQUFlLENBQUNLLE9BQU8sSUFDbERJLGtCQUFrQkQscUJBQXFCLEdBQUc7Z0JBRWhELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUNBQW1DLElBQUksQ0FBQ1osVUFBVSxDQUFDYSxTQUFTLENBQUMsSUFBSSxDQUFDWixlQUFlLEdBQ2pGYSxVQUFVRixrQ0FBa0MsR0FBRztnQkFFckQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxJQUFJLEVBQUVuQixPQUFPO2dCQUN2Qm1CLE9BQU9DLElBQUFBLCtCQUFxQixFQUFDRCxNQUFNbkIsVUFBVSxHQUFHO2dCQUVoRCxJQUFNcUIsNkJBQTZCLElBQUksQ0FBQ2pCLGVBQWUsQ0FBQ1ksU0FBUyxDQUFDRyxPQUM1REcsaUJBQWlCRCw0QkFBNEIsR0FBRztnQkFFdEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFNBQVM7Z0JBQ3hCLElBQU1DLGdDQUFnQyxJQUFJLENBQUN0QixVQUFVLENBQUNvQixnQkFBZ0IsQ0FBQ0MsWUFDakVFLHNCQUFzQkQsK0JBQWdDLEdBQUc7Z0JBRS9ELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsY0FBYyxFQUFFQyxlQUFlO2dCQUN0QyxJQUFJQyxZQUFZO2dCQUVoQixJQUFNOUIsVUFBVSxJQUFJLENBQUMrQixVQUFVLElBQ3pCQyx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFckRqQyxRQUFRa0MsS0FBSyxDQUFDLEFBQUMsbUJBQXlDLE9BQXZCRix3QkFBdUI7Z0JBRXhESCxrQkFBa0I3QixTQUFVLEdBQUc7Z0JBRS9CLElBQU1tQyxzQkFBc0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1IsZ0JBQWdCQztnQkFFcEUsSUFBSU0scUJBQXFCO29CQUN2QixJQUFNRSwyQkFBMkIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQ1YsZ0JBQWdCQztvQkFFOUUsSUFBSVEsMEJBQTBCO3dCQUM1QlAsWUFBWTtvQkFDZDtnQkFDRjtnQkFFQSxJQUFJQSxXQUFXO29CQUNiLElBQU1TLGVBQWUsSUFBSSxFQUFHLEdBQUc7b0JBRS9CdkMsUUFBUXdDLGVBQWUsQ0FBQ0Q7b0JBRXhCdkMsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLHFCQUEyQyxPQUF2QlQsd0JBQXVCO2dCQUM1RDtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlIsY0FBYyxFQUFFQyxlQUFlO2dCQUNoRCxJQUFJTSxzQkFBc0I7Z0JBRTFCLElBQU1uQyxVQUFVNEIsZ0JBQ1ZjLG1CQUFtQixJQUFJLENBQUN2QyxVQUFVLENBQUM4QixTQUFTLElBQzVDRCx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFckRqQyxRQUFRa0MsS0FBSyxDQUFDLEFBQUMsbUJBQWlFUSxPQUEvQ1Ysd0JBQXVCLDBCQUF5QyxPQUFqQlUsa0JBQWlCO2dCQUVqRyxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDeEMsVUFBVSxDQUFDeUMsVUFBVTtnQkFFckQsSUFBSUQsb0JBQW9CO29CQUN0QlIsc0JBQXNCLElBQUksQ0FBQ2hDLFVBQVUsQ0FBQ3dCLFFBQVEsQ0FBQzNCLFNBQVM7d0JBQ3RELElBQU02QyxtQkFBbUI7d0JBRXpCLE9BQU9BO29CQUNUO2dCQUNGLE9BQU87b0JBQ0w3QyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsUUFBc0RDLE9BQS9DVix3QkFBdUIsMEJBQXlDLE9BQWpCVSxrQkFBaUI7Z0JBQ3hGO2dCQUVBLElBQUlQLHFCQUFxQjtvQkFDdkJuQyxRQUFReUMsS0FBSyxDQUFDLEFBQUMscUJBQW1FQyxPQUEvQ1Ysd0JBQXVCLDBCQUF5QyxPQUFqQlUsa0JBQWlCO2dCQUNyRztnQkFFQSxPQUFPUDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QlYsY0FBYyxFQUFFQyxlQUFlO2dCQUNyRCxJQUFJUTtnQkFFSixJQUFNckMsVUFBVTZCLGlCQUNWaUIsd0JBQXdCLElBQUksQ0FBQzFDLGVBQWUsQ0FBQzZCLFNBQVMsSUFDdERELHlCQUF5QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUVyRGpDLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxtQkFBaUVZLE9BQS9DZCx3QkFBdUIsMEJBQThDLE9BQXRCYyx1QkFBc0I7Z0JBRXRHVCwyQkFBMkIsSUFBSSxDQUFDakMsZUFBZSxDQUFDdUIsUUFBUSxDQUFDM0IsU0FBUztvQkFDaEUsSUFBTStDLG9CQUFvQjtvQkFFMUIsT0FBT0E7Z0JBQ1Q7Z0JBRUEsSUFBSVYsMEJBQTBCO29CQUM1QnJDLFFBQVF5QyxLQUFLLENBQUMsQUFBQyxxQkFBbUVLLE9BQS9DZCx3QkFBdUIsMEJBQThDLE9BQXRCYyx1QkFBc0I7Z0JBQzFHO2dCQUVBLE9BQU9UO1lBQ1Q7Ozs7WUFJT1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFakQsT0FBTztnQkFDckMsSUFBTWtELGdCQUFnQkQsVUFBVXhDLE9BQU8sSUFDakMwQyxtQkFBbUJDLElBQUFBLDBDQUFpQyxFQUFDRixlQUFlbEQ7Z0JBRTFFLE9BQU9tRDtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CbEMsSUFBSSxFQUFFbUMsUUFBUSxFQUFFdEQsT0FBTztnQkFDaERtQixPQUFPQyxJQUFBQSwrQkFBcUIsRUFBQ0QsTUFBTW5CLFVBQVUsR0FBRztnQkFFaEQsT0FBT3VELElBQUFBLGtCQUFTLEVBQUMsU0FBQ3ZEO29CQUNoQixJQUFNZ0MseUJBQXlCd0IsSUFBQUEsaURBQXlDLEVBQUNyQyxNQUFNbUMsV0FDekVyRCxTQUFTK0Isd0JBQ1R5Qix1QkFBdUJDLElBQUFBLHdDQUEyQixFQUFDekQsUUFBUUQsVUFDM0RtRCxtQkFBbUJRLElBQUFBLGlEQUF3QyxFQUFDRixzQkFBc0J6RDtvQkFFeEYsT0FBT21EO2dCQUNULEdBQUduRDtZQUNMOzs7O0VBMUptRDRELHFCQUFZLEdBc0kvRCxvQ0FBT0MsUUFBTyJ9