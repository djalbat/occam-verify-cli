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
var _assignments = require("../utilities/assignments");
var _verification = require("../utilities/verification");
var _json = require("../utilities/json");
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
var _Premise;
var _default = (0, _dom.domAssigned)((_Premise = /*#__PURE__*/ function() {
    function Premise(string, statement, procedureCall) {
        _class_call_check(this, Premise);
        this.string = string;
        this.statement = statement;
        this.procedureCall = procedureCall;
    }
    _create_class(Premise, [
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
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                if (this.statesment !== null) {
                    var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                    unifiedIndependently = statementResolvedIndependently; ///
                }
                if (this.procedureCall !== null) {
                    var procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, generalContext, specificContext);
                    unifiedIndependently = procedureCallResolvedIndependently; ///
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyProofStepSubproof",
            value: function unifyProofStepSubproof(proofStepSubproof, substitutions, generalContext, specificContext) {
                var proofStepSubproofUnified = false;
                var proofStepSubProofProofStep = proofStepSubproof.isProofStep(), subproof = proofStepSubProofProofStep ? null : proofStepSubproof, proofStep = proofStepSubProofProofStep ? proofStepSubproof : null;
                substitutions.snapshot();
                if (subproof !== null) {
                    var subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    proofStepSubproofUnified = subproofUnified; ///
                }
                if (proofStep !== null) {
                    var statementUnified = this.unifyProofStep(proofStep, substitutions, generalContext, specificContext);
                    proofStepSubproofUnified = statementUnified; ///
                }
                if (proofStepSubproofUnified) {
                    substitutions.resolve(generalContext, specificContext);
                }
                var context = specificContext; ///
                proofStepSubproofUnified ? substitutions.continue() : substitutions.rollback(context);
                return proofStepSubproofUnified;
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, generalContext, specificContext) {
                var proofStepUnified;
                var statement = proofStep.getStatement(), statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                proofStepUnified = statementUnified; ///
                return proofStepUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var context = generalContext, subproofAssertion = (0, _verification.subproofAssertionFromStatement)(this.statement, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var premiseString = this.string; ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."));
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var ProofStep = _dom.default.ProofStep, proofStep = ProofStep.fromStatement(this.statement, context), proofStepSubproof = proofStep; ///
                            context.addProofStepSubproof(proofStepSubproof);
                            verified = true;
                        }
                    }
                } else if (this.procedureCall !== null) {
                    var stated1 = true, assignments1 = null, procedureCallVerified = this.procedureCall.verify(assignments1, stated1, context);
                    if (procedureCallVerified) {
                        verified = true;
                    }
                } else {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(premiseString, "' premise."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), procedureCallJSON = (0, _json.procedureCallToProcedureCallJSON)(this.procedureCall), statement = statementJSON, procedureCall = procedureCallJSON, json = {
                    statement: statement,
                    procedureCall: procedureCall
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statement = (0, _json.statementFromJSON)(json, fileContext), procedureCall = (0, _json.procedureCallFromJSON)(json, fileContext);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var premise = new Premise(string, statement, procedureCall);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var Statement = _dom.default.Statement, ProcedureCall = _dom.default.ProcedureCall, statement = Statement.fromPremiseNode(premiseNode, fileContext), procedureCall = ProcedureCall.fromPremiseNode(premiseNode, fileContext);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var premise = new Premise(string, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHByb2NlZHVyZUNhbGxGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGlmICh0aGlzLnN0YXRlc21lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5wcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBTdWJwcm9vZihwcm9vZlN0ZXBTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcFN1YlByb29mUHJvb2ZTdGVwID0gcHJvb2ZTdGVwU3VicHJvb2YuaXNQcm9vZlN0ZXAoKSxcbiAgICAgICAgICBzdWJwcm9vZiA9IHByb29mU3RlcFN1YlByb29mUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2YsXG4gICAgICAgICAgcHJvb2ZTdGVwID0gcHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2YgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgPSBzdWJwcm9vZlVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkID9cbiAgICAgIHN1YnN0aXR1dGlvbnMuY29udGludWUoKSA6XG4gICAgICAgIHN1YnN0aXR1dGlvbnMucm9sbGJhY2soY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgIHByZW1pc2VTdGF0ZW1lbnRTdHJpbmcgPSBwcmVtaXNlU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LFxuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZiA9IHByb29mU3RlcDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXBTdWJwcm9vZihwcm9vZlN0ZXBTdWJwcm9vZik7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxWZXJpZmllZCA9IHRoaXMucHJvY2VkdXJlQ2FsbC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmVyaWZpZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByZW1pc2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByZW1pc2UiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRJbmRlcGVuZGVudGx5Iiwic3RhdGVzbWVudCIsInN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwicHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQiLCJwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCIsImlzUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJwcm9vZlN0ZXAiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJyZXNvbHZlIiwiY29udGV4dCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJwcmVtaXNlIiwic3VicHJvb2ZTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWJ1ZyIsInByZW1pc2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJkb20iLCJmcm9tU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9jZWR1cmVDYWxsVmVyaWZpZWQiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7MkJBR2tCOzRCQUNhO29CQUNzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJILFdBQWVBLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEYkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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