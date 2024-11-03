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
var _Premise;
var _default = (0, _dom.domAssigned)((_Premise = /*#__PURE__*/ function() {
    function Premise(string, statement) {
        _class_call_check(this, Premise);
        this.string = string;
        this.statement = statement;
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
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiedIndependently;
                var premise = this, premiseString = premise.getString();
                specificContext.trace("Unifying the '".concat(premiseString, "' premise independently..."));
                var statementResolvedIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);
                unifiedIndependently = statementResolvedIndependently; ///
                if (unifiedIndependently) {
                    specificContext.trace("...unified the '".concat(premiseString, "' premise independently."));
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
                var premise = this, premiseString = premise.getString(), statementString = statement.getString();
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise..."));
                statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(premiseString, "' premise."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var premise = this, subproofString = subproof.getString(), premiseStatement = premise.getStatement(), premiseStatementString = premiseStatement.getString();
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement..."));
                var context = generalContext, statement = this.statement.getStatement(), subproofAssertion = (0, _verification.subproofAssertionFromStatement)(statement, context);
                if (subproofAssertion !== null) {
                    subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
                if (subproofUnified) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the premise's '").concat(premiseStatementString, "' statement."));
                }
                return subproofUnified;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var premiseString = this.string; ///
                if (this.statement !== null) {
                    context.trace("Verifying the '".concat(premiseString, "' premise..."));
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
                        context.debug("...verified the '".concat(premiseString, "' premise."));
                    }
                } else {
                    context.debug("Unable to verify the '".concat(premiseString, "' premise because it is nonsense."));
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
                var statement = (0, _json.statementFromJSON)(json, fileContext), string = statement.getString(), premise = new Premise(string, statement);
                return premise;
            }
        },
        {
            key: "fromPremiseNode",
            value: function fromPremiseNode(premiseNode, fileContext) {
                var Statement = _dom.default.Statement, statement = Statement.fromPremiseNode(premiseNode, fileContext), statementString = statement.getString(), string = statementString, premise = new Premise(string, statement);
                return premise;
            }
        }
    ]);
    return Premise;
}(), _define_property(_Premise, "name", "Premise"), _Premise));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJlbWlzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgYXNzaWduQXNzaWdubWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2lnbm1lbnRzXCI7XG5pbXBvcnQgeyBzdWJwcm9vZkFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcmVtaXNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRSZXNvbHZlZEluZGVwZW5kZW50bHkgPSB0aGlzLnN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVkSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudFJlc29sdmVkSW5kZXBlbmRlbnRseTsgIC8vL1xuXG4gICAgaWYgKHVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mID0gcHJvb2ZTdGVwLmdldFN1YnByb29mKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3Vic3RpdHV0aW9ucy5zbmFwc2hvdCgpO1xuXG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHN1YnByb29mVW5pZmllZCA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllZCB8fCBzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzdWJzdGl0dXRpb25zLnJlc29sdmUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHByb29mU3RlcFVuaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHByb29mU3RlcFVuaWZpZWQgP1xuICAgICAgc3Vic3RpdHV0aW9ucy5jb250aW51ZSgpIDpcbiAgICAgICAgc3Vic3RpdHV0aW9ucy5yb2xsYmFjayhjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50ID0gcHJlbWlzZS5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcmVtaXNlU3RhdGVtZW50U3RyaW5nID0gcHJlbWlzZVN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJwcm9vZlVuaWZpZWQgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgcHJlbWlzZSdzICcke3ByZW1pc2VTdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdO1xuXG4gICAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWQsXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQgfHwgc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCB7IFByb29mU3RlcCB9ID0gZG9tLFxuICAgICAgICAgICAgICBwcm9vZlN0ZXAgPSBQcm9vZlN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKHN0cmluZywgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2Uoc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQcmVtaXNlIiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZEluZGVwZW5kZW50bHkiLCJwcmVtaXNlIiwicHJlbWlzZVN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50UmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlQcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwic3VicHJvb2YiLCJnZXRTdWJwcm9vZiIsInNuYXBzaG90Iiwic3VicHJvb2ZVbmlmaWVkIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3VicHJvb2YiLCJ1bmlmeVN0YXRlbWVudCIsInJlc29sdmUiLCJjb250ZXh0IiwiY29udGludWUiLCJyb2xsYmFjayIsInN0YXRlbWVudFN0cmluZyIsImRlYnVnIiwic3VicHJvb2ZTdHJpbmciLCJwcmVtaXNlU3RhdGVtZW50IiwicHJlbWlzZVN0YXRlbWVudFN0cmluZyIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwidW5pZnkiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJQcm9vZlN0ZXAiLCJkb20iLCJmcm9tU3RhdGVtZW50IiwiYWRkUHJvb2ZTdGVwIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0Iiwic3RhdGVtZW50RnJvbUpTT04iLCJmcm9tUHJlbWlzZU5vZGUiLCJwcmVtaXNlTm9kZSIsIlN0YXRlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjsyQkFHa0I7NEJBQ2E7b0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBVyw0QkFBQzthQUFNQyxRQUNuQkMsTUFBTSxFQUFFQyxTQUFTO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFP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