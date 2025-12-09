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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
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
var _Premise;
var _default = (0, _ontology.define)((_Premise = /*#__PURE__*/ function() {
    function Premise(context, node, string, statement, procedureCall) {
        _class_call_check(this, Premise);
        this.context = context;
        this.node = node;
        this.string = string;
        this.statement = statement;
        this.procedureCall = procedureCall;
    }
    _create_class(Premise, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
                var temporaryContext = _temporary.default.fromContext(context);
                context = temporaryContext; ///
                var premiseString = this.string; ///
                context.trace("Verifying the '".concat(premiseString, "' premise..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _ontology.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
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
                    this.context = context;
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
                var terms = (0, _json.termsFromJSON)(json, context), statement = (0, _json.statementFromJSON)(json, context), procedureCall = (0, _json.procedureCallFromJSON)(json, context), temporaryContext = _temporary.default.fromTerms(terms, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                if (procedureCall !== null) {
                    string = procedureCall.getString();
                }
                var node = null;
                context = temporaryContext; ///
                var premise = new Premise(context, node, string, statement, procedureCall);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, context) {
                var Statement = _ontology.default.Statement, ProcedureCall = _ontology.default.ProcedureCall, node = premiseNode, string = context.nodeAsString(node), statement = Statement.fromPremiseNode(premiseNode, context), procedureCall = ProcedureCall.fromPremiseNode(premiseNode, context), temporaryContext = null;
                context = temporaryContext; ///
                var premise = new Premise(context, node, string, statement, procedureCall);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcbmltcG9ydCB7IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdGVybXNGcm9tSlNPTiwgc3RhdGVtZW50RnJvbUpTT04sIHByb2NlZHVyZUNhbGxGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OLCBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCB7IFN0ZXAgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICAgIHN0ZXAgPSBTdGVwLmZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gc3RlcDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxWZXJpZmllcyA9IHRoaXMucHJvY2VkdXJlQ2FsbC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmVyaWZpZXMpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBzdGVwT3JTdWJQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwT3JTdWJwcm9vZixcbiAgICAgICAgICBzdGVwID0gc3RlcE9yU3ViUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZVbmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHN0ZXBPclN1YnByb29mVW5pZmllcyA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RlcE9yU3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnQgPSBwcmVtaXNlLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByZW1pc2VTdGF0ZW1lbnRTdHJpbmcgPSBwcmVtaXNlU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBwcmVtaXNlJ3MgJyR7cHJlbWlzZVN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbEpTT04gPSBwcm9jZWR1cmVDYWxsVG9Qcm9jZWR1cmVDYWxsSlNPTih0aGlzLnByb2NlZHVyZUNhbGwpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmVtaXNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tVGVybXModGVybXMsIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbDtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBub2RlLCBzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCwgUHJvY2VkdXJlQ2FsbCB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRlbXBvcmFyeUNvbnRleHQgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIG5vZGUsIHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBwcmVtaXNlXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByZW1pc2UiLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFByb2NlZHVyZUNhbGwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJwcmVtaXNlU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiU3RlcCIsIm9udG9sb2d5Iiwic3RlcCIsImZyb21TdGF0ZW1lbnQiLCJzdGVwT3JTdWJwcm9vZiIsImFkZFN0ZXBPclN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwic3RlcE9yU3ViUHJvb2ZTdGVwIiwiaXNTdGVwIiwic3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicHJlbWlzZSIsInN1YnByb29mU3RyaW5nIiwicHJlbWlzZVN0YXRlbWVudCIsInByZW1pc2VTdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJwcm9jZWR1cmVDYWxsSlNPTiIsInByb2NlZHVyZUNhbGxUb1Byb2NlZHVyZUNhbGxKU09OIiwianNvbiIsImZyb21KU09OIiwidGVybXMiLCJ0ZXJtc0Zyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJwcm9jZWR1cmVDYWxsRnJvbUpTT04iLCJmcm9tVGVybXMiLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7Z0VBQ1E7MkJBR0s7dUJBQ2E7b0JBQ3FGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwSSxXQUFlQSxJQUFBQSxnQkFBTSw0QkFBQzthQUFNQyxRQUNkQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGpDTDtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGFBQWE7WUFDM0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1YsT0FBTztnQkFDWixJQUFJVyxXQUFXO2dCQUVmLElBQU1DLG1C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