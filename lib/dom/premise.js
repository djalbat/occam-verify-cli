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
                var verifies = false;
                var premiseString = this.string; ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."));
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _dom.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                            context.addStepOrSubproof(stepOrSubproof);
                            verifies = true;
                        }
                    }
                } else if (this.procedureCall !== null) {
                    var stated1 = true, assignments1 = null, procedureCallVerifies = this.procedureCall.verify(assignments1, stated1, context);
                    if (procedureCallVerifies) {
                        verifies = true;
                    }
                } else {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."));
                }
                if (verifies) {
                    context.debug("...verified the '".concat(premiseString, "' premise."));
                }
                return verifies;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently;
                if (this.statement !== null) {
                    var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, context);
                    unifiesIndependently = statementResolvedIndependently; ///
                }
                if (this.procedureCall !== null) {
                    var procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);
                    unifiesIndependently = procedureCallResolvedIndependently; ///
                }
                return unifiesIndependently;
            }
        },
        {
            key: "unifyStepOrSubproof",
            value: function unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext) {
                var stepOrSubproofUnifies = false;
                var stepOrSubProofStep = stepOrSubproof.isStep(), subproof = stepOrSubProofStep ? null : stepOrSubproof, step = stepOrSubProofStep ? stepOrSubproof : null;
                substitutions.snapshot();
                if (subproof !== null) {
                    var subproofUnifies = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    stepOrSubproofUnifies = subproofUnifies; ///
                }
                if (step !== null) {
                    var statementUnifies = this.unifyStep(step, substitutions, generalContext, specificContext);
                    stepOrSubproofUnifies = statementUnifies; ///
                }
                if (stepOrSubproofUnifies) {
                    substitutions.resolve(generalContext, specificContext);
                }
                stepOrSubproofUnifies ? substitutions.continue() : substitutions.rollback(specificContext);
                return stepOrSubproofUnifies;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, generalContext, specificContext) {
                var stepUnifies = false;
                var statement = step.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    stepUnifies = true;
                }
                return stepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                if (this.statement !== null) {
                    var context = generalContext, subproofAssertion = (0, _context.subproofAssertionFromStatement)(this.statement, context);
                    if (subproofAssertion !== null) {
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    }
                }
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                if (this.statement !== null) {
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnifies;
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
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context);
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
            value: function fromPremiseNode(premiseNode, context) {
                var Statement = _dom.default.Statement, ProcedureCall = _dom.default.ProcedureCall, node = premiseNode, string = context.nodeAsString(node), statement = Statement.fromPremiseNode(premiseNode, context), procedureCall = ProcedureCall.fromPremiseNode(premiseNode, context), premise = new Premise(string, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBTdGVwIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbFZlcmlmaWVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5wcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBPclN1YlByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpLFxuICAgICAgICAgIHN1YnByb29mID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YsXG4gICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN1YnByb29mVW5pZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50LCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByZW1pc2UiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInByZW1pc2VTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZG9tIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN1YnByb29mU3RyaW5nIiwicHJlbWlzZVN0YXRlbWVudCIsInByZW1pc2VTdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzJCQUdrQjt1QkFDYTtvQkFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBVyw0QkFBQzthQUFNQyxRQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ1QsTUFBTSxFQUFFLEdBQUc7Z0JBRXRDTyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBK0IsT0FBZEQsZUFBYztnQkFFOUMsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1IsU0FBUyxLQUFL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