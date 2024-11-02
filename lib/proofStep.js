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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _assignments = require("./utilities/assignments");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ProofStep = /*#__PURE__*/ function() {
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
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = this.statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement..."));
                var Substitutions = _shim.default.Substitutions, specificContext = context, generalContext = context, substitutions = Substitutions.fromNothing();
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                var substitutionsLength = substitutions.getLength();
                if (substitutionsLength > 0) {
                    statementUnified = false;
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, context) {
                var subproofAssertionUnified = false;
                if (this.subproof !== null) {
                    var subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion..."));
                    var Substitutions = _shim.default.Substitutions, specificContext = context, generalContext = context, substitutions = Substitutions.fromNothing();
                    subproofAssertionUnified = this.subproof.unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext);
                    if (subproofAssertionUnified) {
                        var substitutionsLength = substitutions.getLength();
                        if (substitutionsLength > 0) {
                            subproofAssertionUnified = false;
                        }
                    }
                    if (subproofAssertionUnified) {
                        context.debug("...unified the '".concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified = false;
                if (false) {
                ///
                } else if (this.subproof !== null) {
                    var subproofVerified = this.subproof.verify(substitutions, context);
                    verified = subproofVerified; ///
                } else if (this.statement !== null) {
                    var qualified = this.isQualified(), assignments = [], stated = qualified, statementVerified = this.statement.verify(substitutions, assignments, stated, context);
                    if (statementVerified) {
                        var statementUnified = false;
                        debugger;
                        if (qualified) {} else {}
                        if (statementUnified) {
                            var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                            verified = assignmentsAssigned; ///
                        }
                    }
                } else {
                    var proofStepString = this.string;
                    context.debug("Cannot verify the '".concat(proofStepString, "' proof step because it is nonsense."));
                }
                if (verified) {
                    var proofStep = this; ///
                    context.addProofStep(proofStep);
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var Subproof = _shim.default.Subproof, Statement = _shim.default.Statement, Reference = _shim.default.Reference, subproofNode = subproofNodeQuery(proofStepNode), statementNode = statementNodeQuery(proofStepNode), node = proofStepNode, string = fileContext.nodeAsString(node), subproof = Subproof.fromProofStepNode(subproofNode, fileContext), statement = Statement.fromProofStepNode(statementNode, fileContext), reference = Reference.fromProofStepNode(proofStepNode, fileContext), proofStep = new ProofStep(string, subproof, statement, reference);
                return proofStep;
            }
        }
    ]);
    return ProofStep;
}();
Object.assign(_shim.default, {
    ProofStep: ProofStep
});
var _default = ProofStep;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcblxuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdWJwcm9vZiwgc3RhdGVtZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNMZW5ndGggPSBzdWJzdGl0dXRpb25zLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IHRoaXMuc3VicHJvb2YudW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0xlbmd0aCA9IHN1YnN0aXR1dGlvbnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlZlcmlmaWVkID0gdGhpcy5zdWJwcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gc3VicHJvb2ZWZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgaWYgKHF1YWxpZmllZCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3Byb29mU3RlcFN0cmluZ30nIHByb29mIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3VicHJvb2YsIFN0YXRlbWVudCwgUmVmZXJlbmNlIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZVF1ZXJ5KHByb29mU3RlcE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHByb29mU3RlcE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21Qcm9vZlN0ZXBOb2RlKHN1YnByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tUHJvb2ZTdGVwTm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Qcm9vZlN0ZXBOb2RlKHByb29mU3RlcE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBuZXcgUHJvb2ZTdGVwKHN0cmluZywgc3VicHJvb2YsIHN0YXRlbWVudCwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFByb29mU3RlcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mU3RlcDsiXSwibmFtZXMiOlsiUHJvb2ZTdGVwIiwic3RyaW5nIiwic3VicHJvb2YiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJnZXRTdWJwcm9vZiIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJkZWJ1ZyIsInVuaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdWJwcm9vZlZlcmlmaWVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRWZXJpZmllZCIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInByb29mU3RlcFN0cmluZyIsInByb29mU3RlcCIsImFkZFByb29mU3RlcCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0IiwiU3VicHJvb2YiLCJTdGF0ZW1lbnQiLCJSZWZlcmVuY2UiLCJzdWJwcm9vZk5vZGUiLCJzdWJwcm9vZk5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnS0E7OztlQUFBOzs7MkRBOUppQjsyQkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNRQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQUQ5Q0o7UUFFRixJQUFJLENBQUND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