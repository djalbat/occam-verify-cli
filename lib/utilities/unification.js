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
const _necessary = require("necessary");
const _statement = require("../utilities/statement");
const { backwardsSome } = _necessary.arrayUtilities;
async function unifyStatementWithRule(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesWithRule = false;
    if (reference !== null) {
        const rule = context.findRuleByReference(reference);
        if (rule !== null) {
            const ruleString = rule.getString(), statementString = statement.getString();
            context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule...`);
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = await rule.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithRule = true;
            }
            if (statementUnifiesWithRule) {
                context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule.`);
            }
        }
    }
    return statementUnifiesWithRule;
}
async function unifyStatementWithReference(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesWithReference = false;
    if (reference !== null) {
        const statementString = statement.getString(), referenceString = reference.getString();
        context.trace(`Unifying the '${statementString}' statement with the '${referenceString}' reference...`);
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithReference = true;
            }
        }
        if (statementUnifiesWithReference) {
            context.debug(`...unified the '${statementString}' statement with the '${referenceString}' reference.`);
        }
    }
    return statementUnifiesWithReference;
}
async function unifyStatementAsSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesAsSatisfiesAssertion = false;
    satisfiesAssertion = (0, _statement.satisfiesAssertionFromStatement)(statement, context);
    if (satisfiesAssertion !== null) {
        const statementString = statement.getString();
        context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);
        const stated = true;
        satisfiesAssertion.verifySignature(stated, context);
        if (reference === null) {
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            statementUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, (stepsOrSubproof)=>{
                const stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                    return true;
                }
            });
        } else {
            const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
            if (topLevelAssertion !== null) {
                reference = satisfiesAssertion.getReference();
                const axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    const satisfiable = axiom.isSatisfiable();
                    if (satisfiable) {
                        const topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, context);
                        if (topLevelAssertionUnifies) {
                            const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);
                            if (substitutionsCorrelates) {
                                statementUnifiesAsSatisfiesAssertion = true;
                            }
                        }
                    } else {
                        const axiomString = axiom.getString();
                        context.debug(`Unable to unify with the '${axiomString}' because it is not satisfiable.`);
                    }
                }
            }
        }
        if (statementUnifiesAsSatisfiesAssertion) {
            context.debug(`...unified the '${statementString}' statement as a satisfies assertion.`);
        }
    }
    return statementUnifiesAsSatisfiesAssertion;
}
async function unifyStatementWithTopLevelAssertion(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesWithTopLevelAssertion = false;
    if (reference !== null) {
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const statementString = statement.getString(), topLevelAssertionString = reference.getString();
            context.trace(`Unifying the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion...`);
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithTopLevelAssertion = true;
            }
            if (statementUnifiesWithTopLevelAssertion) {
                context.debug(`...unified the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion.`);
            }
        }
    }
    return statementUnifiesWithTopLevelAssertion;
}
async function unifyStatementAsEquality(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesAEquality = false;
    if (reference === null) {
        const equality = (0, _statement.equalityFromStatement)(statement, context);
        if (equality !== null) {
            const statementString = statement.getString();
            context.trace(`Unifying the '${statementString}' statement as an equality...`);
            const equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                statementUnifiesAEquality = true;
            }
            if (statementUnifiesAEquality) {
                context.debug(`...unified the '${statementString}' statement as an equality.`);
            }
        }
    }
    return statementUnifiesAEquality;
}
async function unifyStatementAsJudgement(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesAsJudgement = false;
    if (reference === null) {
        const judgement = (0, _statement.judgementFromStatement)(statement, context);
        if (judgement !== null) {
            const statementString = statement.getString();
            context.trace(`Unifying the '${statementString}' statement as a judgement...`);
            statementUnifiesAsJudgement = true;
            if (statementUnifiesAsJudgement) {
                context.debug(`...unified the '${statementString}' statement as a judgement.`);
            }
        }
    }
    return statementUnifiesAsJudgement;
}
async function unifyStatementAsTypeAssertion(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesAsTypeAssertion = false;
    if (reference === null) {
        const typeAssertion = (0, _statement.typeAssertionFromStatement)(statement, context);
        if (typeAssertion !== null) {
            const statementString = statement.getString();
            context.trace(`Unifying the '${statementString}' statement as a type assertion...`);
            statementUnifiesAsTypeAssertion = true;
            context.debug(`...unified the '${statementString}' statement as a type assertion.`);
        }
    }
    return statementUnifiesAsTypeAssertion;
}
async function unifyStatementAsPropertyAssertion(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesAsPropertyAssertion = false;
    if (reference === null) {
        const propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            const statementString = statement.getString();
            context.trace(`Unifying the '${statementString}' statement as a property assertion...`);
            const term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                const propertyAssertionMatches = equivalence.someOtherTerm(term, (term)=>{
                    const propertyRelation = propertyAssertion.getPropertyRelation(), comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);
                    if (comparesToTermAndPropertyRelation) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    statementUnifiesAsPropertyAssertion = true;
                }
            }
            if (statementUnifiesAsPropertyAssertion) {
                context.debug(`...unified the '${statementString}' statement as a property assertion.`);
            }
        }
    }
    return statementUnifiesAsPropertyAssertion;
}
async function unifyStatementWithSatisfiesAssertion(statement, reference, satisfiesAssertion, context) {
    let statementUnifiesWithSatisfiesAssertion = false;
    if (satisfiesAssertion !== null) {
        const statementString = statement.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace(`Unifying the '${statementString}' statememnt with the '${satisfiesAssertionString}' satisfies assertion...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifies = satisfiesAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
        if (statementUnifies) {
            statementUnifiesWithSatisfiesAssertion = true;
        }
        if (statementUnifiesWithSatisfiesAssertion) {
            context.debug(`...unified the '${statementString}' statememnt with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
    }
    return statementUnifiesWithSatisfiesAssertion;
}
async function compareStatementWithSubproofOrProofAssertions(statement, reference, satisfiesAssertion, context) {
    let statementEquatesWithStepOrSubproofs = false;
    if (reference === null) {
        const statementString = statement.getString();
        context.trace(`Comparing the '${statementString}' statement with the subproofs or proof asssertions...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementUnifiesWithSteps = statement.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);
        if (statementUnifiesWithSteps) {
            statementEquatesWithStepOrSubproofs = true;
        }
        if (statementEquatesWithStepOrSubproofs) {
            context.debug(`...compared the '${statementString}' statement with the subproofs or proof asssertions.`);
        }
    }
    return statementEquatesWithStepOrSubproofs;
}
const unifyStatements = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBqdWRnZW1lbnRGcm9tU3RhdGVtZW50LFxuICAgICAgICAgdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQsXG4gICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoUnVsZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHJ1bGUudW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHRvcExldmVsQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7XG5cbiAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGJhY2t3YXJkc1NvbWUoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN0ZXBzT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gc3RlcHNPclN1YnByb29mLnVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gYXhpb20udW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB1bmlmeSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGJlY2F1c2UgaXQgaXMgbm90IHNhdGlzZmlhYmxlLmApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eUVxdWFsID0gZXF1YWxpdHkuaXNFcXVhbChjb250ZXh0KTtcblxuICAgICAgaWYgKGVxdWFsaXR5RXF1YWwpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZUFzc2VydGlvbiA9IHR5cGVBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBjb250ZXh0LmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW1udCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHNhdGlzZmllc0Fzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wYXJlU3RhdGVtZW50V2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyA9IHN0YXRlbWVudC5jb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzKSB7XG4gICAgICBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnM7XG59XG5cbmV4cG9ydCBjb25zdCB1bmlmeVN0YXRlbWVudHMgPSBbXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUsXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlTdGF0ZW1lbnRBc1NhdGlzZmllc0Fzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoVG9wTGV2ZWxBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSxcbiAgdW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCxcbiAgdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICBjb21wYXJlU3RhdGVtZW50V2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNcbl07XG4iXSwibmFtZXMiOlsidW5pZnlTdGF0ZW1lbnRzIiwiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwidW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ0cmFjZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5IiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2UiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSIsInJlZmVyZW5jZVN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlZCIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJheGlvbVN0cmluZyIsInVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRBc0VxdWFsaXR5Iiwic3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50IiwiZXF1YWxpdHlFcXVhbCIsImlzRXF1YWwiLCJ1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50Iiwic3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50RnJvbVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ0ZXJtIiwiZ2V0VGVybSIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicHJvcGVydHlBc3NlcnRpb25NYXRjaGVzIiwic29tZU90aGVyVGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzIiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVUYUE7OztlQUFBQTs7OzJCQXJUa0I7MkJBTWlCO0FBRWhELE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO0FBRXhDLGVBQWVDLHVCQUF1QkMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPO0lBQ3JGLElBQUlDLDJCQUEyQjtJQUUvQixJQUFJSCxjQUFjLE1BQU07UUFDdEIsTUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixNQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUQsZ0JBQWdCLHNCQUFzQixFQUFFRixXQUFXLFNBQVMsQ0FBQztZQUU1RixNQUFNSSw0QkFBNEJSLFFBQVFTLDRCQUE0QixJQUNoRUMsNkNBQTZDLE1BQU1SLEtBQUtTLDBDQUEwQyxDQUFDZCxXQUFXVywyQkFBMkJSO1lBRS9JLElBQUlVLDRDQUE0QztnQkFDOUNULDJCQUEyQjtZQUM3QjtZQUVBLElBQUlBLDBCQUEwQjtnQkFDNUJELFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFTixnQkFBZ0Isc0JBQXNCLEVBQUVGLFdBQVcsT0FBTyxDQUFDO1lBQzlGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9IO0FBQ1Q7QUFFQSxlQUFlWSw0QkFBNEJoQixTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87SUFDMUYsSUFBSWMsZ0NBQWdDO0lBRXBDLElBQUloQixj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