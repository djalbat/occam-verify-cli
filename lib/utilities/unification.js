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
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _statement = require("../utilities/statement");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
        const metavariableValidates = reference.validateMetavariable(context);
        if (metavariableValidates) {
            const metavariable = reference.getMetavariable();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGVxdWFsaXR5RnJvbVN0YXRlbWVudCxcbiAgICAgICAgIGp1ZGdlbWVudEZyb21TdGF0ZW1lbnQsXG4gICAgICAgICB0eXBlQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCxcbiAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSdWxlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgcnVsZS51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSByZWZlcmVuY2UudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIC8vICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuICAgICAgLy9cbiAgICAgIC8vICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAvLyAgdmFsaWRhdGVcbiAgICAgIC8vXG4gICAgICAvLyB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTtcblxuICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBheGlvbS51bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc0VxdWFsaXR5KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5Li4uYCk7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5RXF1YWwgPSBlcXVhbGl0eS5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlFcXVhbCkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5O1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1R5cGVBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uID0gdHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNQcm9wZXJ0eUFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3QgdGVybSA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gY29udGV4dC5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMgPSBlcXVpdmFsZW5jZS5zb21lT3RoZXJUZXJtKHRlcm0sICh0ZXJtKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0UHJvcGVydHlSZWxhdGlvbigpLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGNvbnRleHQuY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcGVydHlBc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcyA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFN0ZXBzID0gc3RhdGVtZW50LmNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMpIHtcbiAgICAgIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RhdGVtZW50cyA9IFtcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUnVsZSxcbiAgdW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlLFxuICB1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRBc0VxdWFsaXR5LFxuICB1bmlmeVN0YXRlbWVudEFzSnVkZ2VtZW50LFxuICB1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIGNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuXTtcbiJdLCJuYW1lcyI6WyJ1bmlmeVN0YXRlbWVudHMiLCJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJ1bmlmeVN0YXRlbWVudFdpdGhSdWxlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSIsInJ1bGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJ1bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aFJlZmVyZW5jZSIsInN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInN0YXRlZCIsInZlcmlmeVNpZ25hdHVyZSIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiYXhpb21TdHJpbmciLCJ1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInVuaWZ5U3RhdGVtZW50QXNFcXVhbGl0eSIsInN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudCIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzVHlwZUFzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsImNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpVWFBOzs7ZUFBQUE7OzsyQkEvVGtCO2lFQUVWOzJCQU0yQjs7Ozs7O0FBRWhELE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO0FBRXhDLGVBQWVDLHVCQUF1QkMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixFQUFFQyxPQUFPO0lBQ3JGLElBQUlDLDJCQUEyQjtJQUUvQixJQUFJSCxjQUFjLE1BQU07UUFDdEIsTUFBTUksT0FBT0YsUUFBUUcsbUJBQW1CLENBQUNMO1FBRXpDLElBQUlJLFNBQVMsTUFBTTtZQUNqQixNQUFNRSxhQUFhRixLQUFLRyxTQUFTLElBQzNCQyxrQkFBa0JULFVBQVVRLFNBQVM7WUFFM0NMLFFBQVFPLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUQsZ0JBQWdCLHNCQUFzQixFQUFFRixXQUFXLFNBQVMsQ0FBQztZQUU1RixNQUFNSSw0QkFBNEJSLFFBQVFTLDRCQUE0QixJQUNoRUMsNkNBQTZDLE1BQU1SLEtBQUtTLDBDQUEwQyxDQUFDZCxXQUFXVywyQkFBMkJSO1lBRS9JLElBQUlVLDRDQUE0QztnQkFDOUNULDJCQUEyQjtZQUM3QjtZQUVBLElBQUlBLDBCQUEwQjtnQkFDNUJELFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFTixnQkFB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