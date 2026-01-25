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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
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
var _SatisfiesAssertion;
var define = _occamfurtle.elements.define;
var _default = define((_SatisfiesAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(SatisfiesAssertion, Assertion);
    function SatisfiesAssertion(context, string, node, signature, reference) {
        _class_call_check(this, SatisfiesAssertion);
        var _this;
        _this = _call_super(this, SatisfiesAssertion, [
            context,
            string,
            node
        ]);
        _this.signature = signature;
        _this.reference = reference;
        return _this;
    }
    _create_class(SatisfiesAssertion, [
        {
            key: "getSignature",
            value: function getSignature() {
                return this.signature;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "compareSubstitutions",
            value: function compareSubstitutions(substitutions, context) {
                return this.signature.compareSubstitutions(substitutions, context);
            }
        },
        {
            key: "correlateSubstitutions",
            value: function correlateSubstitutions(substitutions, context) {
                return this.signature.correlateSubstitutions(substitutions, context);
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var satisfiesAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var signatureVerifies = this.validateSignature(assignments, stated, context);
                if (signatureVerifies) {
                    var referenceVerifies = this.validateReference(assignments, stated, context);
                    validates = referenceVerifies; ///
                }
                if (validates) {
                    context.debug("...validated the '".concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return validates;
            }
        },
        {
            key: "validateSignature",
            value: function validateSignature(assignments, stated, context) {
                var signatureVerifies = this.signature.validate(context);
                return signatureVerifies;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(assignments, stated, context) {
                var referenceVerifies = false;
                var referenceString = this.reference.getString(), satisfiesAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(satisfiesAssertionString, "' satisfies assertino's '").concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        referenceVerifies = true;
                    }
                }
                if (referenceVerifies) {
                    context.debug("...validated the '".concat(satisfiesAssertionString, "' satisfies assertino's '").concat(referenceString, "' reference."));
                }
                return referenceVerifies;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementUnifies = false;
                var statementString = statement.getString(), satisfiesAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                this.signature.validate(context);
                var axiom = context.findAxiomByReference(this.reference), satisfiable = axiom.isSatisfiable();
                if (satisfiable) {
                    var substitutions;
                    var Substitutions = _occamfurtle.elements.Substitutions;
                    substitutions = Substitutions.fromNothing(context);
                    var axiomComparesToSignature = axiom.compareSignature(this.signature, substitutions, context);
                    if (axiomComparesToSignature) {
                        var substitutionsB = substitutions; ///
                        substitutions = Substitutions.fromNothing(context);
                        statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsA = substitutions, substitutionsCorrelate = substitutionsA.correlateSubstitutions(substitutionsB);
                            if (!substitutionsCorrelate) {
                                var substitutionsAString = substitutionsA.asString(), substitutionsBString = substitutionsB.asString();
                                context.trace("THe signature's ".concat(substitutionsBString, " substitutions do not correlate with the unification's ").concat(substitutionsAString, " substitutions."));
                                statementUnifies = false;
                            }
                        }
                    }
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return statementUnifies;
            }
        }
    ]);
    return SatisfiesAssertion;
}(_assertion.default), _define_property(_SatisfiesAssertion, "name", "SatisfiesAssertion"), _SatisfiesAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2F0aXNmaWVzQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7IH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7IH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmFsaWRhdGVzID0gcmVmZXJlbmNlVmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBheGlvbVNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICBpZiAoYXhpb21TYXRpc2ZpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgbGV0IHN1YnN0aXR1dGlvbnM7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHM7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUgPSBheGlvbS5jb21wYXJlU2lnbmF0dXJlKHRoaXMuc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInNpZ25hdHVyZSIsInJlZmVyZW5jZSIsImdldFNpZ25hdHVyZSIsImdldFJlZmVyZW5jZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmFsaWRhdGVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZhbGlkYXRlU2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsImRlYnVnIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50Iiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzYXRpc2ZpYWJsZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSIsInN1YnN0aXR1dGlvbnNBU3RyaW5nIiwiYXNTdHJpbmciLCJzdWJzdGl0dXRpb25zQlN0cmluZyIsIkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJCQU55QjtnRUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUEsU0FBV0MscUJBQVEsQ0FBbkJEO0lBRVIsV0FBZUEsNENBQU87O2FBQU1FLG1CQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRDdCTDs7Z0JBRXhCLGtC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