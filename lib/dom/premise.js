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
var _context = require("../utilities/context");
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
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently;
                if (this.statement !== null) {
                    var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, context);
                    unifiedIndependently = statementResolvedIndependently; ///
                }
                if (this.procedureCall !== null) {
                    var procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);
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
                proofStepSubproofUnified ? substitutions.continue() : substitutions.rollback(specificContext);
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
                if (this.statement !== null) {
                    var context = generalContext, subproofAssertion = (0, _context.subproofAssertionFromStatement)(this.statement, context);
                    if (subproofAssertion !== null) {
                        subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    }
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
                if (this.statement !== null) {
                    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
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
                var Statement = _dom.default.Statement, ProcedureCall = _dom.default.ProcedureCall, node = premiseNode, string = fileContext.nodeAsString(node), statement = Statement.fromPremiseNode(premiseNode, fileContext), procedureCall = ProcedureCall.fromPremiseNode(premiseNode, fileContext), premise = new Premise(string, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2YgPSBwcm9vZlN0ZXA7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsVmVyaWZpZWQgPSB0aGlzLnByb2NlZHVyZUNhbGwudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFZlcmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAgPSBwcm9vZlN0ZXBTdWJwcm9vZi5pc1Byb29mU3RlcCgpLFxuICAgICAgICAgIHN1YnByb29mID0gcHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZixcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IHN1YnByb29mVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudCA9IHByZW1pc2UuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJlbWlzZVN0YXRlbWVudFN0cmluZyA9IHByZW1pc2VTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByZW1pc2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQsIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2Uoc3RyaW5nLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcmVtaXNlIiwic3RyaW5nIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJwcmVtaXNlU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwiZG9tIiwicHJvb2ZTdGVwIiwiZnJvbVN0YXRlbWVudCIsInByb29mU3RlcFN1YnByb29mIiwiYWRkUHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9jZWR1cmVDYWxsVmVyaWZpZWQiLCJkZWJ1ZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQiLCJwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCIsImlzUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInByZW1pc2UiLCJzdWJwcm9vZlN0cmluZyIsInByZW1pc2VTdGF0ZW1lbnQiLCJwcmVtaXNlU3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwicHJvY2VkdXJlQ2FsbEpTT04iLCJwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzJCQUdrQjt1QkFDYTtvQkFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBVyw0QkFBQzthQUFNQyxRQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21C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