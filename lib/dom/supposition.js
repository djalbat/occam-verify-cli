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
    function Supposition(string, statement) {
        _class_call_check(this, Supposition);
        this.string = string;
        this.statement = statement;
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
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
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
                var context = generalContext, subproofAssertion = (0, _verification.subproofAssertionFromStatement)(this.statement, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
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
                var supposition = this, suppositionString = supposition.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(suppositionString, "' supposition..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
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
                if (this.statement !== null) {
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var ProofStep = _dom.default.ProofStep, proofStep = ProofStep.fromStatement(this.statement, context), proofStepSubproof = proofStep; ///
                            context.addProofStepSubproof(proofStepSubproof);
                            verified = true;
                        }
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
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), supposition = new Supposition(string, statement);
                return supposition;
            }
        },
        {
            key: "fromSuppositionNode",
            value: function fromSuppositionNode(suppositionNode, fileContext) {
                var Statement = _dom.default.Statement, statement = Statement.fromSuppositionNode(suppositionNode, fileContext), statementString = statement.getString(), string = statementString, supposition = new Supposition(string, statement);
                return supposition;
            }
        }
    ]);
    return Supposition;
}(), _define_property(_Supposition, "name", "Supposition"), _Supposition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJpZmljYXRpb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5OyAgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAgPSBwcm9vZlN0ZXBTdWJwcm9vZi5pc1Byb29mU3RlcCgpLFxuICAgICAgICAgIHN1YnByb29mID0gcHJvb2ZTdGVwU3ViUHJvb2ZQcm9vZlN0ZXAgP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZixcbiAgICAgICAgICBwcm9vZlN0ZXAgPSBwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICBzdWJzdGl0dXRpb25zLnNuYXBzaG90KCk7XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFN1YnByb29mVW5pZmllZCA9IHN1YnByb29mVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nID0gc3VwcG9zaXRpb25TdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgUHJvb2ZTdGVwIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGVwID0gUHJvb2ZTdGVwLmZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHByb29mU3RlcFN1YnByb29mID0gcHJvb2ZTdGVwOyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN1cHBvc2l0aW9uIiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwicHJvb2ZTdGVwU3VicHJvb2YiLCJwcm9vZlN0ZXBTdWJwcm9vZlVuaWZpZWQiLCJwcm9vZlN0ZXBTdWJQcm9vZlByb29mU3RlcCIsImlzUHJvb2ZTdGVwIiwic3VicHJvb2YiLCJwcm9vZlN0ZXAiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJyZXNvbHZlIiwiY29udGV4dCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdXBwb3NpdGlvbiIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJkZWJ1ZyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwiZG9tIiwiZnJvbVN0YXRlbWVudCIsImFkZFByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiU3RhdGVtZW50IiwibmFtZSJdLCJtYXBwaW5n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