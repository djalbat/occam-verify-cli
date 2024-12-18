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
var _Supposition;
var _default = (0, _dom.domAssigned)((_Supposition = /*#__PURE__*/ function() {
    function Supposition(string, statement, procedureCall) {
        _class_call_check(this, Supposition);
        this.string = string;
        this.statement = statement;
        this.procedureCall = procedureCall;
    }
    _create_class(Supposition, [
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
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                if (this.statement !== null) {
                    var context = generalContext, subproofAssertion = (0, _verification.subproofAssertionFromStatement)(this.statement, context);
                    if (subproofAssertion !== null) {
                        subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    }
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnified;
                var supposition = this, statementString = statement.getString(), suppositionString = supposition.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                if (this.statement) {
                    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var suppositionString = this.string; ///
                context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
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
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."));
                }
                if (verified) {
                    context.debug("...verified the '".concat(suppositionString, "' supposition."));
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
                var supposition = new Supposition(string, statement, procedureCall);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var Statement = _dom.default.Statement, ProcedureCall = _dom.default.ProcedureCall, node = suppositionNode, string = fileContext.nodeAsString(node), statement = Statement.fromSuppositionNode(suppositionNode, fileContext), procedureCall = ProcedureCall.fromSuppositionNode(suppositionNode, fileContext), supposition = new Supposition(string, statement, procedureCall);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJpZmljYXRpb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBwcm9jZWR1cmVDYWxsRnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiwgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMucHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCA9IHByb29mU3RlcFN1YnByb29mLmlzUHJvb2ZTdGVwKCksXG4gICAgICAgICAgc3VicHJvb2YgPSBwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mLFxuICAgICAgICAgIHByb29mU3RlcCA9IHByb29mU3RlcFN1YlByb29mUHJvb2ZTdGVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHN1YnN0aXR1dGlvbnMuc25hcHNob3QoKTtcblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByb29mU3RlcFN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3Vic3RpdHV0aW9ucy5yZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHByb29mU3RlcFN1YnByb29mVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBwcm9vZlN0ZXBVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2YgPSBwcm9vZlN0ZXA7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsVmVyaWZpZWQgPSB0aGlzLnByb2NlZHVyZUNhbGwudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFZlcmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxKU09OID0gcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04odGhpcy5wcm9jZWR1cmVDYWxsKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0cmluZywgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN1cHBvc2l0aW9uIiwic3RyaW5nIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFByb2NlZHVyZUNhbGwiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInVuaWZpZWRJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5UHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkIiwicHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAiLCJpc1Byb29mU3RlcCIsInN1YnByb29mIiwicHJvb2ZTdGVwIiwic25hcHNob3QiLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwicmVzb2x2ZSIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdXBwb3NpdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWJ1ZyIsInN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwiZG9tIiwiZnJvbVN0YXRlbWVudCIsImFkZFByb29mU3RlcFN1YnByb29mIiwicHJvY2VkdXJlQ2FsbFZlcmlmaWVkIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsInByb2NlZHVyZUNhbGxKU09OIiwicHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21KU09OIiwicHJvY2VkdXJlQ2FsbEZyb21KU09OIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN0YXRlbWVudCIsIlByb2NlZHVyZUNhbGwiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCOzJCQUdrQjs0QkFDYTtvQkFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWE7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtR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