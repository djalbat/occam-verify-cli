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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _elements = require("../../elements");
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
var _default = (0, _elements.define)((_SatisfiesAssertion = /*#__PURE__*/ function(Assertion) {
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
            key: "getSatisfiesAssertionNode",
            value: function getSatisfiesAssertionNode() {
                var node = this.getNode(), satisfiesAssertionNode = node; ///
                return satisfiesAssertionNode;
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
            value: function validate(stated, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion) {
                    satisfiesAssertion = validAssertion; ///
                    context.debug("...the '".concat(satisfiesAssertionString, "' satisfies satisfiesAssertion is already valid."));
                } else {
                    var validates = true;
                    var signatureVerifies = this.validateSignature(stated, context);
                    if (signatureVerifies) {
                        var referenceVerifies = this.validateReference(stated, context);
                        if (referenceVerifies) {
                            validates = true;
                        }
                        validates = true;
                    }
                    if (validates) {
                        var assertion = this; ///
                        satisfiesAssertion = assertion; ///
                        context.addAssertion(satisfiesAssertion);
                        context.debug("...validated the '".concat(satisfiesAssertionString, "' satisfies assertion."));
                    }
                }
                return satisfiesAssertion;
            }
        },
        {
            key: "validateSignature",
            value: function validateSignature(stated, context) {
                var signatureVerifies = this.signature.validate(context);
                return signatureVerifies;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(stated, context) {
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
                    substitutions = [];
                    var axiomComparesToSignature = axiom.compareSignature(this.signature, substitutions, context);
                    if (axiomComparesToSignature) {
                        var substitutionsB = substitutions; ///
                        substitutions = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBzYXRpc2ZpZXNBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gW107XG5cbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzaWduYXR1cmUiLCJyZWZlcmVuY2UiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzaWduYXR1cmVWZXJpZmllcyIsInZhbGlkYXRlU2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic2F0aXNmaWFibGUiLCJheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9uc0IiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGUiLCJzdWJzdGl0dXRpb25zQVN0cmluZyIsImFzU3RyaW5nIiwic3Vic3RpdHV0aW9uc0JTdHJpbmciLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnRUFKc0I7d0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx1Q0FBQzs7YUFBTUMsbUJBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEN0JMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMseUJBQXlCUCxNQUFPLEdBQUc7Z0JBRXpDLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxhQUFhLEVBQUVY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