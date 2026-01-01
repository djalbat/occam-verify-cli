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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
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
var _default = (0, _ontology.define)((_SatisfiesAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(SatisfiesAssertion, Assertion);
    function SatisfiesAssertion(string, node, signature, reference) {
        _class_call_check(this, SatisfiesAssertion);
        var _this;
        _this = _call_super(this, SatisfiesAssertion, [
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var satisfiesAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(satisfiesAssertionString, "' satisfies assertion..."));
                var signatureVerifies = this.verifySignature(assignments, stated, context);
                if (signatureVerifies) {
                    var referenceVerifies = this.verifyReference(assignments, stated, context);
                    verifies = referenceVerifies; ///
                }
                if (verifies) {
                    context.debug("...verified the '".concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifySignature",
            value: function verifySignature(assignments, stated, context) {
                var signatureVerifies = this.signature.verify(context);
                return signatureVerifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(assignments, stated, context) {
                var referenceVerifies = false;
                var referenceString = this.reference.getString();
                context.trace("Verifying the '".concat(referenceString, "' reference..."));
                var axiom = context.findAxiomByReference(this.reference, context);
                if (axiom !== null) {
                    var axiomSatisfiable = axiom.isSatisfiable();
                    if (axiomSatisfiable) {
                        referenceVerifies = true;
                    }
                }
                if (referenceVerifies) {
                    context.debug("...verified the '".concat(referenceString, "' reference."));
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
                this.signature.verify(context);
                var axiom = context.findAxiomByReference(this.reference), satisfiable = axiom.isSatisfiable();
                if (satisfiable) {
                    var substitutions;
                    var Substitutions = _ontology.default.Substitutions;
                    substitutions = Substitutions.fromNothing();
                    var signatureMatches = axiom.matchSignature(this.signature, substitutions, context);
                    if (signatureMatches) {
                        var substitutionsB = substitutions; ///
                        substitutions = Substitutions.fromNothing();
                        statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
                        if (statementUnifies) {
                            var substitutionsA = substitutions, substitutionsMatch = substitutionsA.correlateSubstitutions(substitutionsB);
                            if (!substitutionsMatch) {
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
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionNode = stepNode.getSatisfiedAssertionNode();
                if (satisfiesAssertionNode !== null) {
                    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
                }
                return satisfiesAssertion;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var satisfiesAssertion = null;
                var satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();
                if (satisfiesAssertionNode !== null) {
                    satisfiesAssertion = satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context);
                }
                return satisfiesAssertion;
            }
        }
    ]);
    return SatisfiesAssertion;
}(_assertion.default), _define_property(_SatisfiesAssertion, "name", "SatisfiesAssertion"), _SatisfiesAssertion));
function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var Signature = _ontology.default.Signature, signatureNode = satisfiesAssertionNode.getSignatureNode(), signature = Signature.fromSignatureNode(signatureNode, context);
    return signature;
}
function satisfiesAssertionFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
    var Reference = _ontology.default.Reference, SatisfiesAssertion = _ontology.default.SatisfiesAssertion, node = satisfiesAssertionNode, string = context.nodeAsString(node), signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context), reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context), satisfiesAssertion = new SatisfiesAssertion(string, node, signature, reference);
    return satisfiesAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vc2F0aXNmaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTYXRpc2ZpZXNBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSByZWZlcmVuY2VWZXJpZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy5zaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIHRoaXMuc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5O1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmVNYXRjaGVzID0gYXhpb20ubWF0Y2hTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0EgPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzdWJzdGl0dXRpb25zQS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIGlmICghc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBzdGVwTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TYXRpc2ZpZXNBc3NlcnRpb25Ob2RlKHNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTaWduYXR1cmUgfSA9IG9udG9sb2d5LFxuICAgICAgICBzaWduYXR1cmVOb2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5mdW5jdGlvbiBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlLCBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBub2RlID0gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUoc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJzaWduYXR1cmUiLCJyZWZlcmVuY2UiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic2F0aXNmaWFibGUiLCJTdWJzdGl0dXRpb25zIiwib250b2xvZ3kiLCJmcm9tTm90aGluZyIsInNpZ25hdHVyZU1hdGNoZXMiLCJtYXRjaFNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdWJzdGl0dXRpb25zQVN0cmluZyIsImFzU3RyaW5nIiwic3Vic3RpdHV0aW9uc0JTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJnZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJBc3NlcnRpb24iLCJuYW1lIiwic2lnbmF0dXJlRnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJTaWduYXR1cmUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImZyb21TaWduYXR1cmVOb2RlIiwiUmVmZXJlbmNlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVNhdGlzZmllc0Fzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dFQUxxQjtnRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJdEIsV0FBZUEsSUFBQUEsZ0JBQU0sdUNBQUM7O2FBQU1DLG1CQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURwQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFRQzs7UUFFZCxNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTtt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