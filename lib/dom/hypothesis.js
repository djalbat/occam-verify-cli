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
var _Hypothesis;
var _default = (0, _dom.domAssigned)((_Hypothesis = /*#__PURE__*/ function() {
    function Hypothesis(string, statement) {
        _class_call_check(this, Hypothesis);
        this.string = string;
        this.statement = statement;
    }
    _create_class(Hypothesis, [
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
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var hypothesisString = this.string; ///
                context.trace("Verifying the '".concat(hypothesisString, "' hypothesis..."));
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
                } else {
                    context.debug("Unable to verify the '".concat(hypothesisString, "' hypothesis because it is nonsense."));
                }
                if (verifies) {
                    context.debug("...verified the '".concat(hypothesisString, "' hypothesis."));
                }
                return verifies;
            }
        },
        {
            key: "unifyHypothesis",
            value: function unifyHypothesis(hypothesis, substitutions, generalContext, specificContext) {
                var hypothesisUnifies;
                var context = specificContext, specificHypothesis = hypothesis, generalHypothesisString = this.string, specificHypothesisString = specificHypothesis.getString();
                context.trace("Unifying the '".concat(specificHypothesisString, "' hypothesis with the '").concat(generalHypothesisString, "' hypothesis..."));
                var statement = specificHypothesis.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                hypothesisUnifies = statementUnifies; ///
                if (hypothesisUnifies) {
                    context.debug("...unified the '".concat(specificHypothesisString, "' hypothesis with the '").concat(generalHypothesisString, "' hypothesis."));
                }
                return hypothesisUnifies;
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
                var stepUnifies;
                var statement = step.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                stepUnifies = statementUnifies; ///
                return stepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnifies = false;
                var hypothesis = this, subproofString = subproof.getString(), hypothesisStatement = hypothesis.getStatement(), hypothesisStatementString = hypothesisStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the hypothesis's '").concat(hypothesisStatementString, "' statement..."));
                if (this.statement !== null) {
                    var context = generalContext, subproofAssertion = (0, _context.subproofAssertionFromStatement)(this.statement, context);
                    if (subproofAssertion !== null) {
                        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    }
                }
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the hypothesis's '").concat(hypothesisStatementString, "' statement."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies;
                var hypothesis = this, statementString = statement.getString(), hypothesisString = hypothesis.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(hypothesisString, "' hypothesis..."));
                if (this.statement !== null) {
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(hypothesisString, "' hypothesis."));
                }
                return statementUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                var hypothesis = new Hypothesis(string, statement);
                return hypothesis;
            }
        },
        {
            key: "fromHypothesisNode",
            value: function fromHypothesisNode(hypothesisNode, context) {
                var Statement = _dom.default.Statement, node = hypothesisNode, string = context.nodeAsString(node), statement = Statement.fromHypothesisNode(hypothesisNode, context), hypothesis = new Hypothesis(string, statement);
                return hypothesis;
            }
        }
    ]);
    return Hypothesis;
}(), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vaHlwb3RoZXNpcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgSHlwb3RoZXNpcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHN0ZXAgPSBTdGVwLmZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gc3RlcDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUh5cG90aGVzaXMoaHlwb3RoZXNpcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBoeXBvdGhlc2lzVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0h5cG90aGVzaXMgPSBoeXBvdGhlc2lzLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbEh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNIeXBvdGhlc2lzU3RyaW5nID0gc3BlY2lmaWNIeXBvdGhlc2lzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljSHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgd2l0aCB0aGUgJyR7Z2VuZXJhbEh5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0h5cG90aGVzaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGh5cG90aGVzaXNVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKGh5cG90aGVzaXNVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIHdpdGggdGhlICcke2dlbmVyYWxIeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpc1VuaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBzdGVwT3JTdWJQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mLFxuICAgICAgICAgIHN0ZXAgPSBzdGVwT3JTdWJQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mIDpcbiAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN1YnByb29mVW5pZmllczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXBPclN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RlcFVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgaHlwb3RoZXNpc1N0YXRlbWVudCA9IGh5cG90aGVzaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgaHlwb3RoZXNpc1N0YXRlbWVudFN0cmluZyA9IGh5cG90aGVzaXNTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIGh5cG90aGVzaXMncyAnJHtoeXBvdGhlc2lzU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgaHlwb3RoZXNpcydzICcke2h5cG90aGVzaXNTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpcyA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzU3RyaW5nID0gaHlwb3RoZXNpcy5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSHlwb3RoZXNpc05vZGUoaHlwb3RoZXNpc05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBoeXBvdGhlc2lzTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21IeXBvdGhlc2lzTm9kZShoeXBvdGhlc2lzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IG5ldyBIeXBvdGhlc2lzKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiSHlwb3RoZXNpcyIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImh5cG90aGVzaXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZXMiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZG9tIiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwiZGVidWciLCJ1bmlmeUh5cG90aGVzaXMiLCJoeXBvdGhlc2lzIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiaHlwb3RoZXNpc1VuaWZpZXMiLCJzcGVjaWZpY0h5cG90aGVzaXMiLCJnZW5lcmFsSHlwb3RoZXNpc1N0cmluZyIsInNwZWNpZmljSHlwb3RoZXNpc1N0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0ZXAiLCJyZXNvbHZlIiwiY29udGludWUiLCJyb2xsYmFjayIsInN0ZXBVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJoeXBvdGhlc2lzU3RhdGVtZW50IiwiaHlwb3RoZXNpc1N0YXRlbWVudFN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50U3RyaW5nIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbUh5cG90aGVzaXNOb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJTdGF0ZW1lbnQiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzJCQUdrQjt1QkFDYTtvQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE9BQU87Z0JBQ1osSUFBSUMsV0FBVztnQkFFZixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFekNLLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQkQsa0JBQWlCO2dCQUVqRCxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDTixTQUFTLEtBQUssTUFBTTtvQkFDbEMsSUFBTVEsU0FBUyxNQUNU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