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
        var statementUnifiesAsSatisfiesAssertion, statementString, stated, subproofOrProofAssertions, topLevelAssertion, axiom, satisfiable, substitutions, topLevelAssertionUnifies, substitutionsCorrelates, axiomString;
        return _ts_generator(this, function(_state) {
            statementUnifiesAsSatisfiesAssertion = false;
            satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
            if (satisfiesAssertion !== null) {
                statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement as a satisfies assertion..."));
                stated = true;
                satisfiesAssertion.verifySignature(stated, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgcnVsZS51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSByZWZlcmVuY2UudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIC8vICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuICAgICAgLy9cbiAgICAgIC8vICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAvLyAgdmFsaWRhdGVcbiAgICAgIC8vXG4gICAgICAvLyB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTtcblxuICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBheGlvbS51bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgICAvLyBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIC8vICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAvLyB2YWlkZGF0ZVxuICAgICAgICAvL1xuICAgICAgICAvLyB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5O1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGNvbnRleHQuY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RhdGVtZW50cyA9IFtcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSxcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlLFxuICB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LFxuICB1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuXTtcbiJdLCJuYW1lcyI6WyJ1bmlmeVN0YXRlbWVudHMiLCJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJ1bmlmeVN0YXRlbWVudFdpdGhSdWxlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSIsInJ1bGUiLCJydWxlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJ1bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aFJlZmVyZW5jZSIsInN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVkIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJheGlvbSIsInNhdGlzZmlhYmxlIiwic3Vic3RpdHV0aW9ucyIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiYXhpb21TdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5U2lnbmF0dXJlIiwic3RlcHNPclN1YnByb29mIiwic3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJpc1NhdGlzZmlhYmxlIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInVuaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RXF1YWwiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnQiLCJpc0VxdWFsIiwidW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwidGVybSIsImVxdWl2YWxlbmNlIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwiZ2V0VGVybSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsImNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErVWFBOzs7ZUFBQUE7Ozt5QkE3VWtCOytEQUVWO3lCQU0yQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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