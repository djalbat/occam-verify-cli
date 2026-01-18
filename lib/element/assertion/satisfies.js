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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                    var Substitutions = _elements.default.Substitutions;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlU2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHJlZmVyZW5jZVZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlID0gYXhpb20uY29tcGFyZVNpZ25hdHVyZSh0aGlzLnNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0IgPSBzdWJzdGl0dXRpb25zOyAvLy9cblxuICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGUgPSBzdWJzdGl0dXRpb25zQS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIGlmICghc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0FTdHJpbmcgPSBzdWJzdGl0dXRpb25zQS5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0JTdHJpbmcgPSBzdWJzdGl0dXRpb25zQi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUSGUgc2lnbmF0dXJlJ3MgJHtzdWJzdGl0dXRpb25zQlN0cmluZ30gc3Vic3RpdHV0aW9ucyBkbyBub3QgY29ycmVsYXRlIHdpdGggdGhlIHVuaWZpY2F0aW9uJ3MgJHtzdWJzdGl0dXRpb25zQVN0cmluZ30gc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmFsaWRhdGVTaWduYXR1cmUiLCJyZWZlcmVuY2VWZXJpZmllcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwiZGVidWciLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNhdGlzZmlhYmxlIiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwiZnJvbU5vdGhpbmciLCJheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9uc0IiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGUiLCJzdWJzdGl0dXRpb25zQVN0cmluZyIsImFzU3RyaW5nIiwic3Vic3RpdHV0aW9uc0JTdHJpbmciLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnRUFMcUI7Z0VBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXRCLFdBQWVBLElBQUFBLGdCQUFNLHVDQUFDOzthQUFNQyxtQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxF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