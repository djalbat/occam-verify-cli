"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unifyStatements", {
    enumerable: true,
    get: function() {
        return unifyStatements;
    }
});
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _statement = require("../utilities/statement");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var backwardsSome = _necessary.arrayUtilities.backwardsSome;
function unifyStatementWithRule(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesWithRule, rule, ruleString, statementString, subproofOrProofAssertions, statementAndSubproofOrProofAssertionsUnify;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    statementUnifiesWithRule = false;
                    if (!(reference !== null)) return [
                        3,
                        2
                    ];
                    rule = context.findRuleByReference(reference);
                    if (!(rule !== null)) return [
                        3,
                        2
                    ];
                    ruleString = rule.getString(), statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule..."));
                    subproofOrProofAssertions = context.getSubproofOrProofAssertions();
                    return [
                        4,
                        rule.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context)
                    ];
                case 1:
                    statementAndSubproofOrProofAssertionsUnify = _state.sent();
                    if (statementAndSubproofOrProofAssertionsUnify) {
                        statementUnifiesWithRule = true;
                    }
                    if (statementUnifiesWithRule) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule."));
                    }
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        statementUnifiesWithRule
                    ];
            }
        });
    })();
}
function unifyStatementWithReference(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesWithReference, statementString, referenceString, metavariableValidates, metavariable;
        return _ts_generator(this, function(_state) {
            statementUnifiesWithReference = false;
            if (reference !== null) {
                statementString = statement.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference..."));
                metavariableValidates = reference.validateMetavariable(context);
                if (metavariableValidates) {
                    metavariable = reference.getMetavariable();
                    debugger;
                    // synthetically((context) => {
                    //   const { StatementSubstitution } = elements;
                    //
                    //   StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
                    //  validate
                    //
                    // }, generalContext, specificContext);
                    statementUnifiesWithReference = true;
                }
                if (statementUnifiesWithReference) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(referenceString, "' reference."));
                }
            }
            return [
                2,
                statementUnifiesWithReference
            ];
        });
    })();
}
function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesAsSatisfiesAssertion, statementString, stated, assignments, subproofOrProofAssertions, topLevelAssertion, axiom, satisfiable, substitutions, topLevelAssertionUnifies, substitutionsCorrelates, axiomString;
        return _ts_generator(this, function(_state) {
            statementUnifiesAsSatisfiesAssertion = false;
            satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
            if (satisfiesAssertion !== null) {
                statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
                stated = true, assignments = null;
                satisfiesAssertion.verifySignature(assignments, stated, context);
                if (reference === null) {
                    subproofOrProofAssertions = context.getSubproofOrProofAssertions();
                    statementUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, function(stepsOrSubproof) {
                        var stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                        if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                            return true;
                        }
                    });
                } else {
                    topLevelAssertion = context.findTopLevelAssertionByReference(reference);
                    if (topLevelAssertion !== null) {
                        reference = satisfiesAssertion.getReference();
                        axiom = context.findAxiomByReference(reference);
                        if (axiom !== null) {
                            satisfiable = axiom.isSatisfiable();
                            if (satisfiable) {
                                substitutions = [], topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, substitutions, context);
                                if (topLevelAssertionUnifies) {
                                    substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);
                                    if (substitutionsCorrelates) {
                                        statementUnifiesAsSatisfiesAssertion = true;
                                    }
                                }
                            } else {
                                axiomString = axiom.getString();
                                context.debug("Unable to unify with the '".concat(axiomString, "' because it is not satisfiable."));
                            }
                        }
                    }
                }
                if (statementUnifiesAsSatisfiesAssertion) {
                    context.debug("...unified the '".concat(statementString, "' statement as a satisfies assertion."));
                }
            }
            return [
                2,
                statementUnifiesAsSatisfiesAssertion
            ];
        });
    })();
}
function unifyStatementWithTopLevelAssertion(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesWithTopLevelAssertion, topLevelAssertion, statementString, topLevelAssertionString, subproofOrProofAssertions, statementAndSubproofOrProofAssertionsUnify, metavariable;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    statementUnifiesWithTopLevelAssertion = false;
                    if (!(reference !== null)) return [
                        3,
                        2
                    ];
                    topLevelAssertion = context.findTopLevelAssertionByReference(reference);
                    if (!(topLevelAssertion !== null)) return [
                        3,
                        2
                    ];
                    statementString = statement.getString(), topLevelAssertionString = reference.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion..."));
                    subproofOrProofAssertions = context.getSubproofOrProofAssertions();
                    return [
                        4,
                        topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context)
                    ];
                case 1:
                    statementAndSubproofOrProofAssertionsUnify = _state.sent();
                    if (statementAndSubproofOrProofAssertionsUnify) {
                        metavariable = reference.getMetavariable();
                        debugger;
                        // synthetically((context) => {
                        //   const { StatementSubstitution } = elements;
                        //
                        //   StatementSubstitution.fromStatementAndMetavariable(statement, metavariable, context);
                        // vaiddate
                        //
                        // }, generalContext, specificContext);
                        statementUnifiesWithTopLevelAssertion = true;
                    }
                    if (statementUnifiesWithTopLevelAssertion) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion."));
                    }
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        statementUnifiesWithTopLevelAssertion
                    ];
            }
        });
    })();
}
function unifyStatementAsEquality(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesAEquality, equality, statementString, equalityEqual;
        return _ts_generator(this, function(_state) {
            statementUnifiesAEquality = false;
            if (reference === null) {
                equality = (0, _statement.equalityFromStatement)(statement, context);
                if (equality !== null) {
                    statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement as an equality..."));
                    equalityEqual = equality.isEqual(context);
                    if (equalityEqual) {
                        statementUnifiesAEquality = true;
                    }
                    if (statementUnifiesAEquality) {
                        context.debug("...unified the '".concat(statementString, "' statement as an equality."));
                    }
                }
            }
            return [
                2,
                statementUnifiesAEquality
            ];
        });
    })();
}
function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesAsJudgement, judgement, statementString;
        return _ts_generator(this, function(_state) {
            statementUnifiesAsJudgement = false;
            if (reference === null) {
                judgement = (0, _statement.judgementFromStatement)(statement, context);
                if (judgement !== null) {
                    statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement as a judgement..."));
                    statementUnifiesAsJudgement = true;
                    if (statementUnifiesAsJudgement) {
                        context.debug("...unified the '".concat(statementString, "' statement as a judgement."));
                    }
                }
            }
            return [
                2,
                statementUnifiesAsJudgement
            ];
        });
    })();
}
function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesAsTypeAssertion, typeAssertion, statementString;
        return _ts_generator(this, function(_state) {
            statementUnifiesAsTypeAssertion = false;
            if (reference === null) {
                typeAssertion = (0, _statement.typeAssertionFromStatement)(statement, context);
                if (typeAssertion !== null) {
                    statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement as a type assertion..."));
                    statementUnifiesAsTypeAssertion = true;
                    context.debug("...unified the '".concat(statementString, "' statement as a type assertion."));
                }
            }
            return [
                2,
                statementUnifiesAsTypeAssertion
            ];
        });
    })();
}
function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesAsPropertyAssertion, propertyAssertion, statementString, term, equivalence, propertyAssertionMatches;
        return _ts_generator(this, function(_state) {
            statementUnifiesAsPropertyAssertion = false;
            if (reference === null) {
                propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
                if (propertyAssertion !== null) {
                    statementString = statement.getString();
                    context.trace("Unifying the '".concat(statementString, "' statement as a property assertion..."));
                    term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
                    if (equivalence !== null) {
                        propertyAssertionMatches = equivalence.someOtherTerm(term, function(term) {
                            var propertyRelation = propertyAssertion.getPropertyRelation(), comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);
                            if (comparesToTermAndPropertyRelation) {
                                return true;
                            }
                        });
                        if (propertyAssertionMatches) {
                            statementUnifiesAsPropertyAssertion = true;
                        }
                    }
                    if (statementUnifiesAsPropertyAssertion) {
                        context.debug("...unified the '".concat(statementString, "' statement as a property assertion."));
                    }
                }
            }
            return [
                2,
                statementUnifiesAsPropertyAssertion
            ];
        });
    })();
}
function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementUnifiesWithSatisfiesAssertion, statementString, satisfiesAssertionString, subproofOrProofAssertions, statementUnifies;
        return _ts_generator(this, function(_state) {
            statementUnifiesWithSatisfiesAssertion = false;
            if (satisfiesAssertion !== null) {
                statementString = statement.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifies = satisfiesAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
                if (statementUnifies) {
                    statementUnifiesWithSatisfiesAssertion = true;
                }
                if (statementUnifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(statementString, "' statememnt with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
            }
            return [
                2,
                statementUnifiesWithSatisfiesAssertion
            ];
        });
    })();
}
function compareStatementWithSubproofOrProofAssertions(statement, reference, satisfiesAssertion, context) {
    return _async_to_generator(function() {
        var statementEquatesWithStepOrSubproofs, statementString, subproofOrProofAssertions, statementUnifiesWithSteps;
        return _ts_generator(this, function(_state) {
            statementEquatesWithStepOrSubproofs = false;
            if (reference === null) {
                statementString = statement.getString();
                context.trace("Comparing the '".concat(statementString, "' statement with the subproofs or proof asssertions..."));
                subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifiesWithSteps = statement.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);
                if (statementUnifiesWithSteps) {
                    statementEquatesWithStepOrSubproofs = true;
                }
                if (statementEquatesWithStepOrSubproofs) {
                    context.debug("...compared the '".concat(statementString, "' statement with the subproofs or proof asssertions."));
                }
            }
            return [
                2,
                statementEquatesWithStepOrSubproofs
            ];
        });
    })();
}
var unifyStatements = [
    unifyStatementWithRule,
    unifyStatementWithReference,
    unifyStatementAsSatisfiesAssertion,
    unifyStatementWithTopLevelAssertion,
    unifyStatementAsEquality,
    unifyStatementAsJudgement,
    unifyStatementAsTypeAssertion,
    unifyStatementAsPropertyAssertion,
    unifyStatementWithSatisfiesAssertion,
    compareStatementWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgcnVsZS51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSByZWZlcmVuY2UudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIC8vICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuICAgICAgLy9cbiAgICAgIC8vICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAvLyAgdmFsaWRhdGVcbiAgICAgIC8vXG4gICAgICAvLyB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdGVwc09yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHN0ZXBzT3JTdWJwcm9vZi51bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGF4aW9tLnVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdW5pZnkgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBiZWNhdXNlIGl0IGlzIG5vdCBzYXRpc2ZpYWJsZS5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoVG9wTGV2ZWxBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHRvcExldmVsQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgLy8gICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIC8vIHZhaWRkYXRlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzRXF1YWxpdHkoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50O1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHR5cGVBc3NlcnRpb24gPSB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW1udCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMgPSBzdGF0ZW1lbnQuY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcykge1xuICAgICAgc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgY29uc3QgdW5pZnlTdGF0ZW1lbnRzID0gW1xuICB1bmlmeVN0YXRlbWVudFdpdGhSdWxlLFxuICB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQsXG4gIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG5dO1xuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50cyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc1dpdGhSdWxlIiwicnVsZSIsInJ1bGVTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5IiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlIiwic3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJtZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInRvcExldmVsQXNzZXJ0aW9uIiwiYXhpb20iLCJzYXRpc2ZpYWJsZSIsInN1YnN0aXR1dGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImF4aW9tU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidW5pZnlTdGF0ZW1lbnRXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUVxdWFsIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiaXNFcXVhbCIsInVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInRlcm0iLCJlcXVpdmFsZW5jZSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsImdldFRlcm0iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJzb21lT3RoZXJUZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJjb21wYXJlU3RhdGVtZW50V2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ1ZhQTs7O2VBQUFBOzs7eUJBOVVrQjsrREFFVjt5QkFNMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVDLGdCQUFrQkMseUJBQWMsQ0FBaENEO0FBRVIsU0FBZUUsdUJBQXVCQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87O1lBQ2pGQywwQkFHSUMsTUFHRUMsWUFDQUMsaUJBSUFDLDJCQUNBQzs7OztvQkFaTkwsMkJBQTJCO3lCQUUzQkgsQ0FBQUEsY0FBYyxJQUFHLEdBQWpCQTs7OztvQkFDSUksT0FBT0YsUUFBUU8sbUJBQW1CLENBQUNUO3lCQUVyQ0ksQ0FBQUEsU0FBUyxJQUFHLEdBQVpBOzs7O29CQUNJQyxhQUFhRCxLQUFLTSxTQUFTLElBQzNCSixrQkFBa0JQLFVBQVVXLFNBQVM7b0JBRTNDUixRQUFRUyxLQUFLLENBQUMsQUFBQyxpQkFBd0ROLE9BQXhDQyxpQkFBZ0IsMEJBQW1DLE9BQVhELFlBQVc7b0JBRTVFRSw0QkFBNEJMLFFBQVFVLDRCQUE0QjtvQkFDbkI7O3dCQUFNUixLQUFLUywwQ0FBMEMsQ0FBQ2QsV0FBV1EsMkJBQTJCTDs7O29CQUF6SU0sNkNBQTZDO29CQUVuRCxJQUFJQSw0Q0FBNEM7d0JBQzlDTCwyQkFBMkI7b0JBQzdCO29CQUVBLElBQUlBLDBCQUEwQjt3QkFDNUJELFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUEwRFQsT0FBeENDLGlCQUFnQiwwQkFBbUMsT0FBWEQsWUFBVztvQkFDdEY7OztvQkFJSjs7d0JBQU9GOzs7O0lBQ1Q7O0FBRUEsU0FBZVksNEJBQTRCaEIsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPOztZQUN0RmMsK0JBR0lWLGlCQUNBVyxpQkFJQUMsdUJBR0VDOztZQVhOSCxnQ0FBZ0M7WUFFcEMsSUFBSWhCLGNBQWMsTUFBTTtnQkFDaEJNLGtCQUFrQlAsVUFBVVcsU0FBUyxJQUNyQ08sa0JBQWtCakIsVUFBVVUsU0FBUztnQkFFM0NSLFFBQVFTLEtBQUssQ0FBQyxBQUFDLGlCQUF3RE0sT0FBeENYLGlCQUFnQiwwQkFBd0MsT0FBaEJXLGlCQUFnQjtnQkFFakZDLHdCQUF3QmxCLFVBQVVvQixvQkFBb0IsQ0FBQ2xCO2dCQUU3RCxJQUFJZ0IsdUJBQXVCO29CQUNuQkMsZUFBZW5CLFVBQVVxQixlQUFlO29CQUU5QyxRQUFRO29CQUVSLCtCQUErQjtvQkFDL0IsZ0RBQWdEO29CQUNoRCxFQUFFO29CQUNGLDBGQUEwRjtvQkFFMUYsWUFBWTtvQkFDWixFQUFFO29CQUNGLHVDQUF1QztvQkFFdkNMLGdDQUFnQztnQkFDbEM7Z0JBRUEsSUFBSUEsK0JBQStCO29CQUNqQ2QsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQTBERyxPQUF4Q1gsaUJBQWdCLDBCQUF3QyxPQUFoQlcsaUJBQWdCO2dCQUMzRjtZQUNGO1lBRUE7O2dCQUFPRDs7O0lBQ1Q7O0FBRUEsU0FBZU0sbUNBQW1DdkIsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPOztZQUM3RnFCLHNDQUtJakIsaUJBSUFrQixRQUNBQyxhQUtFbEIsMkJBVUFtQixtQkFLRUMsT0FHRUMsYUFHRUMsZUFDQUMsMEJBR0VDLHlCQU9GQzs7WUEvQ1pULHVDQUF1QztZQUUzQ3RCLHFCQUFxQmdDLElBQUFBLDBDQUErQixFQUFDbEMsV0FBV0c7WUFFaEUsSUFBSUQsdUJBQXVCLE1BQU07Z0JBQ3pCSyxrQkFBa0JQLFVBQVVXLFNBQVM7Z0JBRTNDUixRQUFRUyxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJMLGlCQUFnQjtnQkFFekNrQixTQUFTLE1BQ1RDLGNBQWM7Z0JBRXBCeEIsbUJBQW1CaUMsZUFBZSxDQUFDVCxhQUFhRCxRQUFRdEI7Z0JBRXhELElBQUlGLGNBQWMsTUFBTTtvQkFDaEJPLDRCQUE0QkwsUUFBUVUsNEJBQTRCO29CQUV0RVcsdUNBQXVDM0IsY0FBY1csMkJBQTJCLFNBQUM0Qjt3QkFDL0UsSUFBTUMsOENBQThDRCxnQkFBZ0JFLDJCQUEyQixDQUFDcEMsb0JBQW9CQzt3QkFFcEgsSUFBSWtDLDZDQUE2Qzs0QkFDL0MsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRixPQUFPO29CQUNDVixvQkFBb0J4QixRQUFRb0MsZ0NBQWdDLENBQUN0QztvQkFFbkUsSUFBSTBCLHNCQUFzQixNQUFNO3dCQUM5QjFCLFlBQVlDLG1CQUFtQnNDLFlBQVk7d0JBRXJDWixRQUFRekIsUUFBUXNDLG9CQUFvQixDQUFDeEM7d0JBRTNDLElBQUkyQixVQUFVLE1BQU07NEJBQ1pDLGNBQWNELE1BQU1jLGFBQWE7NEJBRXZDLElBQUliLGFBQWE7Z0NBQ1RDLG9CQUNBQywyQkFBMkJILE1BQU1lLHNCQUFzQixDQUFDaEIsbUJBQW1CRyxlQUFlM0I7Z0NBRWhHLElBQUk0QiwwQkFBMEI7b0NBQ3RCQywwQkFBMEI5QixtQkFBbUIwQyxzQkFBc0IsQ0FBQ2QsZUFBZTNCO29DQUV6RixJQUFJNkIseUJBQXlCO3dDQUMzQlIsdUNBQXVDO29DQUN6QztnQ0FDRjs0QkFDRixPQUFPO2dDQUNDUyxjQUFjTCxNQUFNakIsU0FBUztnQ0FFbkNSLFFBQVFZLEtBQUssQ0FBQyxBQUFDLDZCQUF3QyxPQUFaa0IsYUFBWTs0QkFDekQ7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSVQsc0NBQXNDO29CQUN4Q3JCLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUFrQyxPQUFoQlIsaUJBQWdCO2dCQUNuRDtZQUNGO1lBRUE7O2dCQUFPaUI7OztJQUNUOztBQUVBLFNBQWVxQixvQ0FBb0M3QyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87O1lBQzlGMkMsdUNBR0luQixtQkFHRXBCLGlCQUNBd0MseUJBSUF2QywyQkFDQUMsNENBR0VXOzs7O29CQWZSMEIsd0NBQXdDO3lCQUV4QzdDLENBQUFBLGNBQWMsSUFBRyxHQUFqQkE7Ozs7b0JBQ0kwQixvQkFBb0J4QixRQUFRb0MsZ0NBQWdDLENBQUN0Qzt5QkFFL0QwQixDQUFBQSxzQkFBc0IsSUFBRyxHQUF6QkE7Ozs7b0JBQ0lwQixrQkFBa0JQLFVBQVVXLFNBQVMsSUFDckNvQywwQkFBMEI5QyxVQUFVVSxTQUFTO29CQUVuRFIsUUFBUVMsS0FBSyxDQUFDLEFBQUMsaUJBQXdEbUMsT0FBeEN4QyxpQkFBZ0IsMEJBQWdELE9BQXhCd0MseUJBQXdCO29CQUV6RnZDLDRCQUE0QkwsUUFBUVUsNEJBQTRCO29CQUNuQjs7d0JBQU1jLGtCQUFrQmIsMENBQTBDLENBQUNkLFdBQVdRLDJCQUEyQkw7OztvQkFBdEpNLDZDQUE2QztvQkFFbkQsSUFBSUEsNENBQTRDO3dCQUN4Q1csZUFBZW5CLFVBQVVxQixlQUFlO3dCQUU5QyxRQUFRO3dCQUVSLCtCQUErQjt3QkFDL0IsZ0RBQWdEO3dCQUNoRCxFQUFFO3dCQUNGLDBGQUEwRjt3QkFFMUYsV0FBVzt3QkFDWCxFQUFFO3dCQUNGLHVDQUF1Qzt3QkFFdkN3Qix3Q0FBd0M7b0JBQzFDO29CQUVBLElBQUlBLHVDQUF1Qzt3QkFDekMzQyxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBMERnQyxPQUF4Q3hDLGlCQUFnQiwwQkFBZ0QsT0FBeEJ3Qyx5QkFBd0I7b0JBQ25HOzs7b0JBSUo7O3dCQUFPRDs7OztJQUNUOztBQUVBLFNBQWVFLHlCQUF5QmhELFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsT0FBTzs7WUFDbkY4QywyQkFHSUMsVUFHRTNDLGlCQUlBNEM7O1lBVk5GLDRCQUE0QjtZQUVoQyxJQUFJaEQsY0FBYyxNQUFNO2dCQUNoQmlELFdBQVdFLElBQUFBLGdDQUFxQixFQUFDcEQsV0FBV0c7Z0JBRWxELElBQUkrQyxhQUFhLE1BQU07b0JBQ2YzQyxrQkFBa0JQLFVBQVVXLFNBQVM7b0JBRTNDUixRQUFRUyxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJMLGlCQUFnQjtvQkFFekM0QyxnQkFBZ0JELFNBQVNHLE9BQU8sQ0FBQ2xEO29CQUV2QyxJQUFJZ0QsZUFBZTt3QkFDakJGLDRCQUE0QjtvQkFDOUI7b0JBRUEsSUFBSUEsMkJBQTJCO3dCQUM3QjlDLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUFrQyxPQUFoQlIsaUJBQWdCO29CQUNuRDtnQkFDRjtZQUNGO1lBRUE7O2dCQUFPMEM7OztJQUNUOztBQUVBLFNBQWVLLDBCQUEwQnRELFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsT0FBTzs7WUFDcEZvRCw2QkFHSUMsV0FHRWpEOztZQU5OZ0QsOEJBQThCO1lBRWxDLElBQUl0RCxjQUFjLE1BQU07Z0JBQ2hCdUQsWUFBWUMsSUFBQUEsaUNBQXNCLEVBQUN6RCxXQUFXRztnQkFFcEQsSUFBSXFELGNBQWMsTUFBTTtvQkFDaEJqRCxrQkFBa0JQLFVBQVVXLFNBQVM7b0JBRTNDUixRQUFRUyxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJMLGlCQUFnQjtvQkFFL0NnRCw4QkFBOEI7b0JBRTlCLElBQUlBLDZCQUE2Qjt3QkFDL0JwRCxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJSLGlCQUFnQjtvQkFDbkQ7Z0JBQ0Y7WUFDRjtZQUVBOztnQkFBT2dEOzs7SUFDVDs7QUFFQSxTQUFlRyw4QkFBOEIxRCxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87O1lBQ3hGd0QsaUNBR0lDLGVBR0VyRDs7WUFOTm9ELGtDQUFrQztZQUV0QyxJQUFJMUQsY0FBYyxNQUFNO2dCQUNoQjJELGdCQUFnQkMsSUFBQUEscUNBQTBCLEVBQUM3RCxXQUFXRztnQkFFNUQsSUFBSXlELGtCQUFrQixNQUFNO29CQUNwQnJELGtCQUFrQlAsVUFBVVcsU0FBUztvQkFFM0NSLFFBQVFTLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkwsaUJBQWdCO29CQUUvQ29ELGtDQUFrQztvQkFFbEN4RCxRQUFRWSxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJSLGlCQUFnQjtnQkFDbkQ7WUFDRjtZQUVBOztnQkFBT29EOzs7SUFDVDs7QUFFQSxTQUFlRyxrQ0FBa0M5RCxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87O1lBQzVGNEQscUNBR0lDLG1CQUdFekQsaUJBSUEwRCxNQUNBQyxhQUdFQzs7WUFkUkosc0NBQXNDO1lBRTFDLElBQUk5RCxjQUFjLE1BQU07Z0JBQ2hCK0Qsb0JBQW9CSSxJQUFBQSx5Q0FBOEIsRUFBQ3BFLFdBQVdHO2dCQUVwRSxJQUFJNkQsc0JBQXNCLE1BQU07b0JBQ3hCekQsa0JBQWtCUCxVQUFVVyxTQUFTO29CQUUzQ1IsUUFBUVMsS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCTCxpQkFBZ0I7b0JBRXpDMEQsT0FBT0Qsa0JBQWtCSyxPQUFPLElBQ2hDSCxjQUFjL0QsUUFBUW1FLHFCQUFxQixDQUFDTDtvQkFFbEQsSUFBSUMsZ0JBQWdCLE1BQU07d0JBQ2xCQywyQkFBMkJELFlBQVlLLGFBQWEsQ0FBQ04sTUFBTSxTQUFDQTs0QkFDaEUsSUFBTU8sbUJBQW1CUixrQkFBa0JTLG1CQUFtQixJQUN4REMsb0NBQW9DdkUsUUFBUXdFLDhCQUE4QixDQUFDVixNQUFNTzs0QkFFdkYsSUFBSUUsbUNBQW1DO2dDQUNyQyxPQUFPOzRCQUNUO3dCQUNGO3dCQUVBLElBQUlQLDBCQUEwQjs0QkFDNUJKLHNDQUFzQzt3QkFDeEM7b0JBQ0Y7b0JBRUEsSUFBSUEscUNBQXFDO3dCQUN2QzVELFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUFrQyxPQUFoQlIsaUJBQWdCO29CQUNuRDtnQkFDRjtZQUNGO1lBRUE7O2dCQUFPd0Q7OztJQUNUOztBQUVBLFNBQWVhLHFDQUFxQzVFLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsT0FBTzs7WUFDL0YwRSx3Q0FHSXRFLGlCQUNBdUUsMEJBSUF0RSwyQkFDQXVFOztZQVRKRix5Q0FBeUM7WUFFN0MsSUFBSTNFLHVCQUF1QixNQUFNO2dCQUN6Qkssa0JBQWtCUCxVQUFVVyxTQUFTLElBQ3JDbUUsMkJBQTJCNUUsbUJBQW1CUyxTQUFTO2dCQUU3RFIsUUFBUVMsS0FBSyxDQUFDLEFBQUMsaUJBQXlEa0UsT0FBekN2RSxpQkFBZ0IsMkJBQWtELE9BQXpCdUUsMEJBQXlCO2dCQUUzRnRFLDRCQUE0QkwsUUFBUVUsNEJBQTRCLElBQ2hFa0UsbUJBQW1CN0UsbUJBQW1CWSwwQ0FBMEMsQ0FBQ2QsV0FBV1EsMkJBQTJCTDtnQkFFN0gsSUFBSTRFLGtCQUFrQjtvQkFDcEJGLHlDQUF5QztnQkFDM0M7Z0JBRUEsSUFBSUEsd0NBQXdDO29CQUMxQzFFLFFBQVFZLEtBQUssQ0FBQyxBQUFDLG1CQUEyRCtELE9BQXpDdkUsaUJBQWdCLDJCQUFrRCxPQUF6QnVFLDBCQUF5QjtnQkFDckc7WUFDRjtZQUVBOztnQkFBT0Q7OztJQUNUOztBQUVBLFNBQWVHLDhDQUE4Q2hGLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsRUFBRUMsT0FBTzs7WUFDeEc4RSxxQ0FHSTFFLGlCQUlBQywyQkFDQTBFOztZQVJKRCxzQ0FBc0M7WUFFMUMsSUFBSWhGLGNBQWMsTUFBTTtnQkFDaEJNLGtCQUFrQlAsVUFBVVcsU0FBUztnQkFFM0NSLFFBQVFTLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkwsaUJBQWdCO2dCQUUxQ0MsNEJBQTRCTCxRQUFRVSw0QkFBNEIsSUFDaEVxRSw0QkFBNEJsRixVQUFVbUYsZ0NBQWdDLENBQUMzRSwyQkFBMkJMO2dCQUV4RyxJQUFJK0UsMkJBQTJCO29CQUM3QkQsc0NBQXNDO2dCQUN4QztnQkFFQSxJQUFJQSxxQ0FBcUM7b0JBQ3ZDOUUsUUFBUVksS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCUixpQkFBZ0I7Z0JBQ3BEO1lBQ0Y7WUFFQTs7Z0JBQU8wRTs7O0lBQ1Q7O0FBRU8sSUFBTXJGLGtCQUFrQjtJQUM3Qkc7SUFDQWlCO0lBQ0FPO0lBQ0FzQjtJQUNBRztJQUNBTTtJQUNBSTtJQUNBSTtJQUNBYztJQUNBSTtDQUNEIn0=