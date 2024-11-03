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
                var supposition = this, suppositionString = supposition.getString();
                specificContext.trace("Unifying the '".concat(suppositionString, "' supposition independently..."));
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
                if (unifiedIndependently) {
                    specificContext.trace("...unified the '".concat(suppositionString, "' supposition independently."));
                }
                return unifiedIndependently;
            }
        },
        {
            key: "unifyProofStep",
            value: function unifyProofStep(proofStep, substitutions, generalContext, specificContext) {
                var proofStepUnified = false;
                var subproof = proofStep.getSubproof(), statement = proofStep.getStatement();
                substitutions.snapshot();
                var subproofUnified = false, statementUnified = false;
                if (false) {
                ///
                } else if (subproof !== null) {
                    subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                } else if (statement !== null) {
                    statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                }
                if (subproofUnified || statementUnified) {
                    substitutions.resolve(generalContext, specificContext);
                    proofStepUnified = true;
                }
                var context = specificContext; ///
                proofStepUnified ? substitutions.continue() : substitutions.rollback(context);
                return proofStepUnified;
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
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var supposition = this, subproofString = subproof.getString(), suppositionStatement = supposition.getStatement(), suppositionStatementString = suppositionStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the supposition's '").concat(suppositionStatementString, "' statement..."));
                var context = generalContext, statement = this.statement.getStatement(), subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
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
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var suppositionString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                    var stated = true, assignments = [];
                    var statementVerified, statementUnified = false;
                    statementVerified = this.statement.verify(assignments, stated, context);
                    if (!statementVerified) {
                        var assignments1 = null;
                        statementUnified = this.statement.unify(assignments1, stated, context);
                    }
                    if (statementVerified || statementUnified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        verified = assignmentsAssigned; ///
                    }
                    if (verified) {
                        var ProofStep = _dom.default.ProofStep, proofStep = ProofStep.fromStatement(this.statement, context);
                        context.addProofStep(proofStep);
                    }
                    if (verified) {
                        context.debug("...verified the '".concat(suppositionString, "' supposition."));
                    }
                } else {
                    context.debug("Unable to verify the '".concat(suppositionString, "' supposition because it is nonsense."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJpZmljYXRpb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mID0gcHJvb2ZTdGVwLmdldFN1YnByb29mKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkIHx8IHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMucmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgcHJvb2ZTdGVwVW5pZmllZCA/XG4gICAgICBzdWJzdGl0dXRpb25zLmNvbnRpbnVlKCkgOlxuICAgICAgICBzdWJzdGl0dXRpb25zLnJvbGxiYWNrKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSBzdXBwb3NpdGlvbidzICcke3N1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdO1xuXG4gICAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQsXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQgfHwgc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gZG9tLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihzdHJpbmcsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdXBwb3NpdGlvbiIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRJbmRlcGVuZGVudGx5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwic3VicHJvb2YiLCJnZXRTdWJwcm9vZiIsInNuYXBzaG90Iiwic3VicHJvb2ZVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0YXRlbWVudCIsInJlc29sdmUiLCJjb250ZXh0IiwiY29udGludWUiLCJyb2xsYmFjayIsInN0YXRlbWVudFN0cmluZyIsImRlYnVnIiwic3VicHJvb2ZTdHJpbmciLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ1bmlmeSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlByb29mU3RlcCIsImRvbSIsImZyb21TdGF0ZW1lbnQiLCJhZGRQcm9vZlN0ZXAiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdGF0ZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7MkJBR2tCOzRCQUNhO29CQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUQsV0FBZUEsSUFBQUEs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