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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB1bmlmeU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3Byb29mU3RlcC91bmlmeVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgcHJvb2ZTdGVwTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1Byb29mU3RlcCgpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXAgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IHByb29mU3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcC4uLmApO1xuXG4gICAgdW5pZmllZCA9IHVuaWZ5TWl4aW5zLnNvbWUoKHVuaWZ5TWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB1bmlmeU1peGluKHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IGVxdWl2YWxlbmNlcy51bmlmeVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFuZFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB0aGlzLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2YgPSB0aGlzOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZWRBbmRVbmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBbmRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZWQgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHJlZmVyZW5jZVZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBDYW5ub3QgdmVyaWZ5IHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvb2ZTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN0cmluZywgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwU3VicHJvb2ZOb2RlKHByb29mU3RlcFN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcE5vZGUgPSBwcm9vZlN0ZXBOb2RlUXVlcnkocHJvb2ZTdGVwU3VicHJvb2ZOb2RlKTtcblxuICAgIGlmIChwcm9vZlN0ZXBOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvb2ZTdGVwTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwcm9vZlN0ZXBOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb29mU3RlcCIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZCIsInByb29mU3RlcFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJzdWJzdGl0dXRpb25zVW5pZmllZCIsInVuaWZ5U3Vic3RpdHV0aW9ucyIsInZlcmlmeUFuZFVuaWZ5IiwidmVyaWZpZWRBbmRVbmlmaWVkIiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllZCIsInZlcmlmeSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcFN1YnByb29mIiwiYWRkUHJvb2ZTdGVwU3VicHJvb2YiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsImZyb21Qcm9vZlN0ZXBTdWJwcm9vZk5vZGUiLCJwcm9vZlN0ZXBTdWJwcm9vZk5vZGUiLCJmaWxlQ29udGV4dCIsInByb29mU3RlcE5vZGUiLCJTdGF0ZW1lbnQiLCJkb20iLCJSZWZlcmVuY2UiLCJub2RlIiwibm9kZUFz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