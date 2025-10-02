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
    function Premise(node, string, statement, procedureCall) {
        _class_call_check(this, Premise);
        this.node = node;
        this.string = string;
        this.statement = statement;
        this.procedureCall = procedureCall;
    }
    _create_class(Premise, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
                context.trace("Verifying the '".concat(premiseString, "' premise..."), this.node);
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
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(premiseString, "' premise."), this.node);
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
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."), this.node);
                if (this.statement !== null) {
                    var context = generalContext, subproofAssertion = (0, _context.subproofAssertionFromStatement)(this.statement, context);
                    if (subproofAssertion !== null) {
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    }
                }
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."), this.node);
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."), this.node);
                if (this.statement !== null) {
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."), this.node);
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
                var node = null, premise = new Premise(node, string, statement, procedureCall);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, context) {
                var Statement = _dom.default.Statement, ProcedureCall = _dom.default.ProcedureCall, node = premiseNode, string = context.nodeAsString(node), statement = Statement.fromPremiseNode(premiseNode, context), procedureCall = ProcedureCall.fromPremiseNode(premiseNode, context), premise = new Premise(node, string, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHN0ZXAgPSBTdGVwLmZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gc3RlcDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxWZXJpZmllcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBzdGVwT3JTdWJQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZixcbiAgICAgICAgICBzdGVwID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZVbmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RlcE9yU3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnQgPSBwcmVtaXNlLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnRTdHJpbmcgPSBwcmVtaXNlU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsSlNPTiA9IHByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OKHRoaXMucHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByZW1pc2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2Uobm9kZSwgc3RyaW5nLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcmVtaXNlIiwibm9kZSIsInN0cmluZyIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwiZ2V0UHJvY2VkdXJlQ2FsbCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsInByZW1pc2VTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZG9tIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN1YnByb29mU3RyaW5nIiwicHJlbWlzZVN0YXRlbWVudCIsInByZW1pc2VTdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7MkJBR2tCO3VCQUNhO29CQUNzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJILFdBQWVBLElBQUFBLGdCQUFXLDRCQUFDO2FBQU1DLFFBQ25CQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxhQUFhO2dDQURuQko7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9B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