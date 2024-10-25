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
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _query = require("./utilities/query");
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
var match = _necessary.arrayUtilities.match;
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/subproof"), qualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/qualifiedStatement"), unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/proofStep|lastProofStep/unqualifiedStatement");
var ProofStep = /*#__PURE__*/ function() {
    function ProofStep(subproof, qualifiedStatement, unqualifiedStatement) {
        _class_call_check(this, ProofStep);
        this.subproof = subproof;
        this.qualifiedStatement = qualifiedStatement;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(ProofStep, [
        {
            key: "getSubproof",
            value: function getSubproof() {
                return this.subproof;
            }
        },
        {
            key: "getQualifiedStatement",
            value: function getQualifiedStatement() {
                return this.qualifiedStatement;
            }
        },
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var statement = null;
                if (this.qualifiedStatement !== null) {
                    statement = this.qualifiedStatement.getStatement();
                }
                if (this.unqualifiedStatement !== null) {
                    statement = this.unqualifiedStatement.getStatement();
                }
                return statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified = false;
                if (this.qualifiedStatement !== null || this.unqualifiedStatement !== null !== null) {
                    var statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement..."));
                    var Substitutions = _shim.default.Substitutions, specificContext = context, generalContext = context, substitutions = Substitutions.fromNothing();
                    if (this.qualifiedStatement !== null) {
                        statementUnified = this.qualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                    }
                    if (this.unqualifiedStatement !== null) {
                        statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);
                    }
                    var substitutionsLength = substitutions.getLength();
                    if (substitutionsLength > 0) {
                        statementUnified = false;
                    }
                    if (statementUnified) {
                        context.debug("...unified the '".concat(statementString, "' statement."));
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, context) {
                var subproofAssertionUnified = false;
                if (this.subproof !== null) {
                    var subproofString = this.subproof.getString(), subproofAssertionString = subproofAssertion.getString();
                    context.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof..."));
                    var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), subproofStatements = this.subproof.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                    subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                        var subproofAssertionStatementNode = subproofAssertionStatement.getNode(), subproofStatementNode = subproofStatement.getNode(), generalNode = subproofAssertionStatementNode, specificNode = subproofStatementNode, generalContext = context, specificContext = context, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
                        if (unifiedAtMetaLevel) {
                            return true;
                        }
                    });
                    if (subproofAssertionUnified) {
                        var substitutionsLength = substitutions.getLength();
                        if (substitutionsLength > 0) {
                            subproofAssertionUnified = false;
                        }
                    }
                    if (subproofAssertionUnified) {
                        context.trace("...unified the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof."));
                    }
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var verified = false;
                var stated = false;
                var assignments = [];
                var subproofVerified = false, qualifiedStatementVerified = false, unqualifiedStatementVerified = false;
                if (this.subproof !== null) {
                    subproofVerified = this.subproof.verify(substitutions, context);
                }
                if (this.qualifiedStatement !== null) {
                    stated = true;
                    qualifiedStatementVerified = this.qualifiedStatement.verify(substitutions, assignments, stated, context);
                }
                if (this.unqualifiedStatement !== null) {
                    stated = false;
                    unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);
                }
                if (subproofVerified || qualifiedStatementVerified || unqualifiedStatementVerified) {
                    var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                    if (assignmentsAssigned) {
                        verified = true;
                    }
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
                var Subproof = _shim.default.Subproof, QualifiedStatement = _shim.default.QualifiedStatement, UnqualifiedStatement = _shim.default.UnqualifiedStatement, subproofNode = subproofNodeQuery(proofStepNode), qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode), unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode), subproof = Subproof.fromSubproofNode(subproofNode, fileContext), qualifiedStatement = QualifiedStatement.fromQualifiedStatementNode(qualifiedStatementNode, fileContext), unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
                return proofStep;
            }
        },
        {
            key: "fromUnqualifiedStatement",
            value: function fromUnqualifiedStatement(unqualifiedStatement) {
                var subproof = null, qualifiedStatement = null, proofStep = new ProofStep(subproof, qualifiedStatement, unqualifiedStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZlN0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzdWJwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC9xdWFsaWZpZWRTdGF0ZW1lbnRcIiksXG4gICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgUHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN1YnByb29mID0gc3VicHJvb2Y7XG4gICAgdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgPSBxdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3VicHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2Y7XG4gIH1cblxuICBnZXRRdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKCh0aGlzLnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHRoaXMucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZkFzc2VydGlvbihzdWJwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHRoaXMuc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnRzID0gdGhpcy5zdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMgPSBzdWJwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnRzKCk7XG5cbiAgICAgIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCA9IG1hdGNoKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cywgc3VicHJvb2ZTdGF0ZW1lbnRzLCAoc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQsIHN1YnByb29mU3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgc3VicHJvb2ZTdGF0ZW1lbnROb2RlID0gc3VicHJvb2ZTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBnZW5lcmFsTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY05vZGUgPSBzdWJwcm9vZlN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTGVuZ3RoID0gc3Vic3RpdHV0aW9ucy5nZXRMZW5ndGgoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblVuaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsZXQgc3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdO1xuXG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVmVyaWZpZWQgPSB0aGlzLnN1YnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlZCA9IHRydWU7XG5cbiAgICAgIHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZWQgPSBmYWxzZTtcblxuICAgICAgdW5xdWFsaWZpZWRTdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlZlcmlmaWVkIHx8IHF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIHx8IHVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3VicHJvb2YsIFF1YWxpZmllZFN0YXRlbWVudCwgVW5xdWFsaWZpZWRTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUgPSB1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeShwcm9vZlN0ZXBOb2RlKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IFN1YnByb29mLmZyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50ID0gUXVhbGlmaWVkU3RhdGVtZW50LmZyb21RdWFsaWZpZWRTdGF0ZW1lbnROb2RlKHF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2ZTdGVwID0gbmV3IFByb29mU3RlcChzdWJwcm9vZiwgcXVhbGlmaWVkU3RhdGVtZW50LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudCh1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIGNvbnN0IHN1YnByb29mID0gbnVsbCxcbiAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsLFxuICAgICAgICAgIHByb29mU3RlcCA9IG5ldyBQcm9vZlN0ZXAoc3VicHJvb2YsIHF1YWxpZmllZFN0YXRlbWVudCwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUHJvb2ZTdGVwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZTdGVwOyJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwic3VicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIlByb29mU3RlcCIsInN1YnByb29mIiwicXVhbGlmaWVkU3RhdGVtZW50IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRTdWJwcm9vZiIsImdldFF1YWxpZmllZFN0YXRlbWVudCIsImdldFVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN1YnN0aXR1dGlvbnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJkZWJ1ZyIsInVuaWZ5U3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uVW5pZmllZCIsInN1YnByb29mU3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZlN0YXRlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJzdWJwcm9vZlN0YXRlbWVudE5vZGUiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsInZlcmlmeSIsInZlcmlmaWVkIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdWJwcm9vZlZlcmlmaWVkIiwicXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwicHJvb2ZTdGVwIiwiYWRkUHJvb2ZTdGVwIiwiZnJvbVByb29mU3RlcE5vZGUiLCJwcm9vZlN0ZXBOb2RlIiwiZmlsZUNvbnRleHQiLCJTdWJwcm9vZiIsIlF1YWxpZmllZFN0YXRlbWVudCIsIlVucXVhbGlmaWVkU3RhdGVtZW50Iiwic3VicHJvb2ZOb2RlIiwicXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21TdWJwcm9vZk5vZGUiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNNQTs7O2VBQUE7Ozt5QkFwTStCOzJEQUVkO2dFQUNZO3FCQUVIOzJCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMs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