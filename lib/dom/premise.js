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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBTdGVwIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbFZlcmlmaWVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5wcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBPclN1YlByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpLFxuICAgICAgICAgIHN1YnByb29mID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YsXG4gICAgICAgICAgc3RlcCA9IHN0ZXBPclN1YlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN1YnByb29mVW5pZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHByZW1pc2UncyAnJHtwcmVtaXNlU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSxcbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByZW1pc2UiLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInByZW1pc2VTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZG9tIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN1YnByb29mU3RyaW5nIiwicHJlbWlzZVN0YXRlbWVudCIsInByZW1pc2VTdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsInByb2NlZHVyZUNhbGxGcm9tSlNPTiIsImZyb21QcmVtaXNlTm9kZSIsInByZW1pc2VOb2RlIiwiU3RhdGVtZW50IiwiUHJvY2VkdXJlQ2FsbCIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7MkJBR2tCO3VCQUNhO29CQUNzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJILFdBQWVBLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEYkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBSUMsV0FBVztnQkFFZixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDVCxNQUFNLEVBQUUsR0FBRztnQkFFdENPLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUErQixPQUFkRCxlQUFjO2dCQUU5QyxJQUFJLE9BQU87Z0JBQ1QsR0FB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