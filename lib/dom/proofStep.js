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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/proofStep/unify"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
var _context = require("../utilities/context");
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
var _ProofStep;
var proofStepNodeQuery = (0, _query.nodeQuery)("/proofStep");
var _default = (0, _dom.domAssigned)((_ProofStep = /*#__PURE__*/ function() {
    function ProofStep(string, statement, reference) {
        _class_call_check(this, ProofStep);
        this.string = string;
        this.statement = statement;
        this.reference = reference;
    }
    _create_class(ProofStep, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "isQualified",
            value: function isQualified() {
                var qualified = this.reference !== null;
                return qualified;
            }
        },
        {
            key: "isProofStep",
            value: function isProofStep() {
                var proofStep = true;
                return proofStep;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation, context) {
                var termAndPropertyRelationMatch = false;
                var propertyAssertion = (0, _context.propertyAssertionFromStatement)(this.statement, context);
                if (propertyAssertion !== null) {
                    termAndPropertyRelationMatch = propertyAssertion.matchTermAndPropertyRelation(term, propertyRelation, context);
                }
                return termAndPropertyRelationMatch;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unified;
                var proofStepString = this.string; ///
                context.trace("Unifying the '".concat(proofStepString, "' proof step..."));
                unified = _unify.default.some(function(unifyMixin) {
                    var unified = unifyMixin(_this.statement, _this.reference, substitutions, context);
                    if (unified) {
                        return true;
                    }
                });
                if (unified) {
                    context.debug("...unified the '".concat(proofStepString, "' proof step."));
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    var equivalences = context.getEquivalences(), substitutionsUnified = equivalences.unifySubstitutions(substitutions);
                    statementUnified = substitutionsUnified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "verifyAndUnify",
            value: function verifyAndUnify(substitutions, context) {
                var verifiedAndUnified = false;
                var assignments = [], verified = this.verify(substitutions, assignments, context);
                if (verified) {
                    var unified = this.unify(substitutions, context);
                    if (unified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var proofStepSubproof = this; ///
                            context.addProofStepSubproof(proofStepSubproof);
                            verifiedAndUnified = true; ///
                        }
                    }
                }
                return verifiedAndUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var verified = false;
                var proofStepString = this.string;
                context.trace("Verifying the '".concat(proofStepString, "' proof step..."));
                if (this.statement !== null) {
                    var qualified = this.isQualified(), stated = qualified, statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        if (this.reference === null) {
                            verified = true;
                        } else {
                            var referenceVerified = this.reference.verify(context);
                            verified = referenceVerified; ///
                        }
                    }
                } else {
                    context.debug("Cannot verify the '".concat(proofStepString, "' proof step because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(proofStepString, "' proof step."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, reference = null, proofStep = new ProofStep(string, statement, reference);
                return proofStep;
            }
        },
        {
            key: "fromProofStepSubproofNode",
            value: function fromProofStepSubproofNode(proofStepSubproofNode, fileContext) {
                var proofStep = null;
                var proofStepNode = proofStepNodeQuery(proofStepSubproofNode);
                if (proofStepNode !== null) {
                    var Statement = _dom.default.Statement, Reference = _dom.default.Reference, node = proofStepNode, string = fileContext.nodeAsString(node), statement = Statement.fromProofStepNode(proofStepNode, fileContext), reference = Reference.fromProofStepNode(proofStepNode, fileContext);
                    proofStep = new ProofStep(string, statement, reference);
                }
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}(), _define_property(_ProofStep, "name", "ProofStep"), _ProofStep));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCBwcm9vZlN0ZXBOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvb2ZTdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9vZlN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzUHJvb2ZTdGVwKCkge1xuICAgIGNvbnN0IHByb29mU3RlcCA9IHRydWU7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB1bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuLi5gKTtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1VuaWZpZWQgPSBlcXVpdmFsZW5jZXMudW5pZnlTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1VuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeUFuZFVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBbmRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgIHZlcmlmaWVkID0gdGhpcy52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdGhpcy51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mID0gdGhpczsgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVkQW5kVW5pZmllZCA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQW5kVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb29mU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcFN1YnByb29mTm9kZShwcm9vZlN0ZXBTdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBOb2RlID0gcHJvb2ZTdGVwTm9kZVF1ZXJ5KHByb29mU3RlcFN1YnByb29mTm9kZSk7XG5cbiAgICBpZiAocHJvb2ZTdGVwTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdGF0ZW1lbnQsIFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHByb29mU3RlcE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicHJvb2ZTdGVwTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9vZlN0ZXAiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29udGV4dCIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2giLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZWQiLCJwcm9vZlN0ZXBTdHJpbmciLCJ0cmFjZSIsInVuaWZ5TWl4aW5zIiwic29tZSIsInVuaWZ5TWl4aW4iLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnlBbmRVbmlmeSIsInZlcmlmaWVkQW5kVW5pZmllZCIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsImFkZFByb29mU3RlcFN1YnByb29mIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwicHJvb2ZTdGVwU3VicHJvb2ZOb2RlIiwiZmlsZUNvbnRleHQiLCJwcm9vZlN0ZXBOb2RlIiwiU3RhdGVtZW50IiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21Qcm9vZlN0ZXBOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCOzREQUNRO29FQUNFO3FCQUVBOzJCQUVRO3VCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFD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