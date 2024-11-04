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
                if (subproof !== null) {
                    var subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);
                    proofStepUnified = subproofUnified; ///
                }
                if (statement !== null) {
                    var statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                    proofStepUnified = statementUnified; ///
                }
                if (proofStepUnified) {
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
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var suppositionString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(suppositionString, "' supposition..."));
                    var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, context);
                        if (assignmentsAssigned) {
                            var ProofStep = _dom.default.ProofStep, proofStep = ProofStep.fromStatement(this.statement, context);
                            context.addProofStep(proofStep);
                            verified = true;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3VwcG9zaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuaW1wb3J0IHsgc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJpZmljYXRpb25cIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3VwcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHk7ICAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mID0gcHJvb2ZTdGVwLmdldFN1YnByb29mKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBwcm9vZlN0ZXBVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHByb29mU3RlcFVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmcgPSBzdXBwb3NpdGlvblN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgc3VwcG9zaXRpb24ncyAnJHtzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZVbmlmaWVkID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCkge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlIHN1cHBvc2l0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICBjb250ZXh0LmFkZFByb29mU3RlcChwcm9vZlN0ZXApO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdXBwb3NpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN0cmluZywgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU3VwcG9zaXRpb24iLCJzdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5UHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInN1YnByb29mIiwiZ2V0U3VicHJvb2YiLCJzbmFwc2hvdCIsInN1YnByb29mVW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJyZXNvbHZlIiwiY29udGV4dCIsImNvbnRpbnVlIiwicm9sbGJhY2siLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWJ1ZyIsInN1YnByb29mU3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiUHJvb2ZTdGVwIiwiZG9tIiwiZnJvbVN0YXRlbWVudCIsImFkZFByb29mU3RlcCIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudEZyb21KU09OIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsIlN0YXRlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjsyQkFHa0I7NEJBQ2E7b0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxTQUFTO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUMvRCxJQUFJQztnQkFFSixJQUFNQyxj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