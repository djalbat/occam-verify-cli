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
var define = _occamfurtle.elements.define;
var _default = define((_TermSubstitution = /*#__PURE__*/ function(Substitution) {
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
            value: function validate(context) {
                var validates = false;
                var termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term substitution..."));
                var targetTermValidates = this.validateTargetTerm(context);
                if (targetTermValidates) {
                    var replacementTermValidates = this.validateReplacementTerm(context);
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
            value: function validateTargetTerm(context) {
                var targetTermValidates = false;
                var targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(targetTermString, "' target term..."));
                var targetTermSingular = this.targetTerm.isSingular();
                if (targetTermSingular) {
                    targetTermValidates = this.targetTerm.validate(context, function() {
                        var verifiesAhead = true;
                        return verifiesAhead;
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
            value: function validateReplacementTerm(context) {
                var replacementTermValidates;
                var replacementTermString = this.replacementTerm.getString(), termSubstitutionString = this.getString(); ///
                context.trace("Validating the '".concat(termSubstitutionString, "' term subtitution's '").concat(replacementTermString, "' replacement term..."));
                replacementTermValidates = this.replacementTerm.validate(context, function() {
                    var validatesAhead = true;
                    return validatesAhead;
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
                    termSubstitution.validate(context);
                    return termSubstitution;
                }, context);
            }
        }
    ]);
    return TermSubstitution;
}(_substitution.default), _define_property(_TermSubstitution, "name", "TermSubstitution"), _TermSubstitution));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSwgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcbiAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGhpcy50YXJnZXRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0aXRvaW4gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXRpdG9pbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oY29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3VidGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIlRlcm1TdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRUYXJnZXRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsInN1YnN0aXRpdG9pbiIsImFkZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwidGFyZ2V0VGVybVN0cmluZyIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2ZXJpZmllc0FoZWFkIiwicmVwbGFjZW1lbnRUZXJtU3RyaW5nIiwidmFsaWRhdGVzQWhlYWQiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwidmFyaWFibGUiLCJsaXRlcmFsbHkiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsIlN1YnN0aXR1dGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJCQVp5QjttRUFFQTt1QkFFQzt3QkFDWTsyQkFDTTtzQkFDYzt1QkFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLDBDQUFPOzthQUFNRSxpQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxlQUFlO2dDQURwQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxlQUFlLEdBQUdBOzs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixlQUFlO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNMLFVBQVUsQ0FBQ00sT0FBTyxJQUN4Q0MsYUFBYUYsZ0JBQWdCLEdBQUc7Z0JBRXRDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ1IsZUFBZSxDQUFDSyxPQUFPLElBQ2xESSxrQkFBa0JELHFCQUFxQixHQUFHO2dCQUVoRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1DQUFtQyxJQUFJLENBQUNaLFVBQVUsQ0FB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