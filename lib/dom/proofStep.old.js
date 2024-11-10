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
var _default = (0, _dom.domAssigned)((_ProofStep = /*#__PURE__*/ function() {
    function ProofStep(string, subproof, statement, reference) {
        _class_call_check(this, ProofStep);
        this.string = string;
        this.subproof = subproof;
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
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
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
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unified;
                if (this.subproof !== null) {
                    unified = true; ///
                }
                if (this.statement !== null) {
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
                }
                return unified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var specificContext = context, generalContext = context, substitutions = _substitutions.default.fromNothing();
                if (this.subproof !== null) {
                    var subproofUnified = statement.unifySubproof(this.subproof, substitutions, generalContext, specificContext);
                    statementUnified = subproofUnified; ///
                }
                if (this.statement !== null) {
                    statementUnified = statement.unifyStatement(this.statement, substitutions, generalContext, specificContext);
                }
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
                            var proofStep = this; ///
                            context.addProofStep(proofStep);
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
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, context);
                    verified = subproofVerified; ///
                } else if (this.statement !== null) {
                    var proofStepString = this.string; ///
                    context.trace("Verifying the '".concat(proofStepString, "' proof step..."));
                    var qualified = this.isQualified(), stated = qualified, statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        if (this.reference === null) {
                            verified = true;
                        } else {
                            var referenceVerified = this.reference.verify(context);
                            verified = referenceVerified; ///
                        }
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(proofStepString, "' proof step."));
                    }
                } else {
                    var proofStepString1 = this.string;
                    context.debug("Cannot verify the '".concat(proofStepString1, "' proof step because it is nonsense."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), string = statementString, subproof = null, reference = null, proofStep = new ProofStep(string, subproof, statement, reference);
                return proofStep;
            }
        },
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var Subproof = _dom.default.Subproof, Statement = _dom.default.Statement, Reference = _dom.default.Reference, node = proofStepNode, string = fileContext.nodeAsString(node), subproof = Subproof.fromProofStepNode(proofStepNode, fileContext), statement = Statement.fromProofStepNode(proofStepNode, fileContext), reference = Reference.fromProofStepNode(proofStepNode, fileContext), proofStep = new ProofStep(string, subproof, statement, reference);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}(), _define_property(_ProofStep, "name", "ProofStep"), _ProofStep));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvb2ZTdGVwLm9sZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgdW5pZnlNaXhpbnMgZnJvbSBcIi4uL21peGlucy9wcm9vZlN0ZXAvdW5pZnlcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdWJwcm9vZiA9IHN1YnByb29mO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN1YnByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnByb29mO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICB1bmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcC4uLmApO1xuXG4gICAgICB1bmlmaWVkID0gdW5pZnlNaXhpbnMuc29tZSgodW5pZnlNaXhpbikgPT4ge1xuICAgICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbih0aGlzLnN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVkID0gc3RhdGVtZW50LnVuaWZ5U3VicHJvb2YodGhpcy5zdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJwcm9vZlVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudC51bmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zVW5pZmllZCA9IGVxdWl2YWxlbmNlcy51bmlmeVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5QW5kVW5pZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFuZFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHVuaWZpZWQgPSB0aGlzLnVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodW5pZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZTdGVwID0gdGhpczsgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgICAgdmVyaWZpZWRBbmRVbmlmaWVkID0gdHJ1ZTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBbmRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZWZXJpZmllZCA9IHRoaXMuc3VicHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllZCA9IHN1YnByb29mVmVyaWZpZWQ7ICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAuLi5gKTtcblxuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSByZWZlcmVuY2VWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9vZlN0ZXBTdHJpbmd9JyBwcm9vZiBzdGVwLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7cHJvb2ZTdGVwU3RyaW5nfScgcHJvb2Ygc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9vZlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZiA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN0cmluZywgc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnByb29mLCBTdGF0ZW1lbnQsIFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcm9vZlN0ZXBOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3VicHJvb2YgPSBTdWJwcm9vZi5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcm9vZlN0ZXAiLCJzdHJpbmciLCJzdWJwcm9vZiIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN1YnByb29mIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJ1bmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidW5pZmllZCIsInByb29mU3RlcFN0cmluZyIsInRyYWNlIiwidW5pZnlNaXhpbnMiLCJzb21lIiwidW5pZnlNaXhpbiIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwic3Vic3RpdHV0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnlBbmRVbmlmeSIsInZlcmlmaWVkQW5kVW5pZmllZCIsImFzc2lnbm1lbnRzIiwidmVyaWZpZWQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJwcm9vZlN0ZXAiLCJhZGRQcm9vZlN0ZXAiLCJzdWJwcm9vZlZlcmlmaWVkIiwic3RhdGVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJyZWZlcmVuY2VWZXJpZmllZCIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInByb29mU3RlcE5vZGUiLCJmaWxlQ29udGV4dCIsIlN1YnByb29mIiwiZG9tIiwiU3RhdGVtZW50IiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjs0REFDUTtvRUFDRTsyQkFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEMsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRG5CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFN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