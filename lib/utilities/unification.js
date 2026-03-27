"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unifySteps", {
    enumerable: true,
    get: function() {
        return unifySteps;
    }
});
const _necessary = require("necessary");
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _context = require("./context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { backwardsSome } = _necessary.arrayUtilities;
async function unifyStepWithRule(step, context) {
    let stepUnifiesWithRule = false;
    const qualified = step.isQualified();
    if (qualified) {
        const reference = step.getReference(), rule = context.findRuleByReference(reference);
        if (rule !== null) {
            const stepString = step.getString(), ruleString = rule.getString();
            context.trace(`Unifying the '${stepString}' step with the '${ruleString}' rule...`);
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepAndSubproofOrProofAssertionsUnify = await rule.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
            if (stepAndSubproofOrProofAssertionsUnify) {
                stepUnifiesWithRule = true;
            }
            if (stepUnifiesWithRule) {
                context.debug(`...unified the '${stepString}' step with the '${ruleString}' rule.`);
            }
        }
    }
    return stepUnifiesWithRule;
}
async function unifyStepWithReference(step, context) {
    let stepUnifiesWithReference = false;
    const qualified = step.isQualified();
    if (qualified) {
        const reference = step.getReference(), stepString = step.getString(), referenceString = reference.getString();
        context.trace(`Unifying the '${stepString}' step with the '${referenceString}' reference...`);
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
            if (stepAndSubproofOrProofAssertionsUnify) {
                stepUnifiesWithReference = true;
            }
        } else {
            const metaLevel = context.isMetaLevel();
            if (metaLevel) {
                (0, _context.descend)((context)=>{
                    const { MetaLevelAssumption } = _elements.default, metaLevelAssumption = MetaLevelAssumption.fromStep(step, context);
                    metaLevelAssumption.validate(context);
                    stepUnifiesWithReference = true;
                }, context);
            }
        }
        if (stepUnifiesWithReference) {
            context.debug(`...unified the '${stepString}' step with the '${referenceString}' reference.`);
        }
    }
    return stepUnifiesWithReference;
}
async function unifyStepAsSatisfiesAssertion(step, context) {
    let stepUnifiesAsSatisfiesAssertion = false;
    const { SatisfiesAssertion } = _elements.default;
    const satisfiesAssertion = SatisfiesAssertion.fromStep(step, context);
    if (satisfiesAssertion !== null) {
        const stepString = step.getString();
        context.trace(`Unifying the '${stepString}' step as a satisfies assertion...`);
        (0, _context.descend)((context)=>{
            satisfiesAssertion.verifySignature(context);
        }, context);
        const unqualified = step.isUnqualified();
        if (unqualified) {
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions();
            stepUnifiesAsSatisfiesAssertion = backwardsSome(subproofOrProofAssertions, (stepsOrSubproof)=>{
                const stepOrSubProofUnifiesWIthSatisfiesAssertion = stepsOrSubproof.unifyWithSatisfiesAssertion(satisfiesAssertion, context);
                if (stepOrSubProofUnifiesWIthSatisfiesAssertion) {
                    return true;
                }
            });
        } else {
            const reference = satisfiesAssertion.getReference(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
            if (topLevelAssertion !== null) {
                const axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    const satisfiable = axiom.isSatisfiable();
                    if (satisfiable) {
                        const topLevelAssertionUnifies = axiom.unifyTopLevelAssertion(topLevelAssertion, context);
                        if (topLevelAssertionUnifies) {
                            const substitutionsCorrelates = satisfiesAssertion.correlateSubstitutions(substitutions, context);
                            if (substitutionsCorrelates) {
                                stepUnifiesAsSatisfiesAssertion = true;
                            }
                        }
                    } else {
                        const axiomString = axiom.getString();
                        context.debug(`Unable to unify with the '${axiomString}' because it is not satisfiable.`);
                    }
                }
            }
        }
        if (stepUnifiesAsSatisfiesAssertion) {
            context.debug(`...unified the '${stepString}' step as a satisfies assertion.`);
        }
    }
    return stepUnifiesAsSatisfiesAssertion;
}
async function unifyStepWithTopLevelAssertion(step, context) {
    let stepUnifiesWithTopLevelAssertion = false;
    const qualified = step.isQualified();
    if (qualified) {
        const reference = step.getReference(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const stepString = step.getString(), topLevelAssertionString = reference.getString();
            context.trace(`Unifying the '${stepString}' step with the '${topLevelAssertionString}' top level assertion...`);
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
            if (stepAndSubproofOrProofAssertionsUnify) {
                stepUnifiesWithTopLevelAssertion = true;
            }
            if (stepUnifiesWithTopLevelAssertion) {
                context.debug(`...unified the '${stepString}' step with the '${topLevelAssertionString}' top level assertion.`);
            }
        }
    }
    return stepUnifiesWithTopLevelAssertion;
}
async function unifyStepAsEquality(step, context) {
    let stepUnifiesAEquality = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { Equality } = _elements.default, statement = step.getStatement(), equality = Equality.fromStatement(statement, context);
        if (equality !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as an equality...`);
            const equalityEqual = equality.isEqual(context);
            if (equalityEqual) {
                stepUnifiesAEquality = true;
            }
            if (stepUnifiesAEquality) {
                context.debug(`...unified the '${stepString}' step as an equality.`);
            }
        }
    }
    return stepUnifiesAEquality;
}
async function unifyStepAsJudgement(step, context) {
    let stepUnifiesAsJudgement = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { Judgement } = _elements.default, statement = step.getStatement(), judgement = Judgement.fromStatement(statement, context);
        if (judgement !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as a judgement...`);
            stepUnifiesAsJudgement = true;
            if (stepUnifiesAsJudgement) {
                context.debug(`...unified the '${stepString}' step as a judgement.`);
            }
        }
    }
    return stepUnifiesAsJudgement;
}
async function unifyStepAsTypeAssertion(step, context) {
    let stepUnifiesAsTypeAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { TypeAssertion } = _elements.default, statement = step.getStatement(), typeAssertion = TypeAssertion.fromStatement(statement, context);
        if (typeAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as a type assertion...`);
            stepUnifiesAsTypeAssertion = true;
            context.debug(`...unified the '${stepString}' step as a type assertion.`);
        }
    }
    return stepUnifiesAsTypeAssertion;
}
async function unifyStepAsPropertyAssertion(step, context) {
    let stepUnifiesAsPropertyAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { PropertyAssertion } = _elements.default, statement = step.getStatement(), propertyAssertion = PropertyAssertion.fromStatement(statement, context);
        if (propertyAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as a property assertion...`);
            const term = propertyAssertion.getTerm(), equivalence = context.findEquivalenceByTerm(term);
            if (equivalence !== null) {
                const propertyAssertionMatches = equivalence.someOtherTerm(term, (term)=>{
                    const propertyRelation = propertyAssertion.getPropertyRelation(), comparesToTermAndPropertyRelation = context.compareTermAndPropertyRelation(term, propertyRelation);
                    if (comparesToTermAndPropertyRelation) {
                        return true;
                    }
                });
                if (propertyAssertionMatches) {
                    stepUnifiesAsPropertyAssertion = true;
                }
            }
            if (stepUnifiesAsPropertyAssertion) {
                context.debug(`...unified the '${stepString}' step as a property assertion.`);
            }
        }
    }
    return stepUnifiesAsPropertyAssertion;
}
async function unifyStepWithSatisfiesAssertion(step, context) {
    let stepUnifiesWithSatisfiesAssertion = false;
    const satisfiesAssertion = step.getSatisfiesAssertion();
    if (satisfiesAssertion !== null) {
        const stepString = step.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepUnifies = satisfiesAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
        if (stepUnifies) {
            stepUnifiesWithSatisfiesAssertion = true;
        }
        if (stepUnifiesWithSatisfiesAssertion) {
            context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
    }
    return stepUnifiesWithSatisfiesAssertion;
}
async function compareStepWithSubproofOrProofAssertions(step, context) {
    let stepComparesToSubproofOrProofAssertions = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const stepString = step.getString();
        context.trace(`Comparing the '${stepString}' step with the subproofs or proof asssertions...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), comparesToSubproofOrProofAssertions = step.compareSubproofOrProofAssertions(subproofOrProofAssertions, context);
        if (comparesToSubproofOrProofAssertions) {
            stepComparesToSubproofOrProofAssertions = true;
        }
        if (stepComparesToSubproofOrProofAssertions) {
            context.debug(`...compared the '${stepString}' step with the subproofs or proof asssertions.`);
        }
    }
    return stepComparesToSubproofOrProofAssertions;
}
const unifySteps = [
    unifyStepWithRule,
    unifyStepWithReference,
    unifyStepAsSatisfiesAssertion,
    unifyStepWithTopLevelAssertion,
    unifyStepAsEquality,
    unifyStepAsJudgement,
    unifyStepAsTypeAssertion,
    unifyStepAsPropertyAssertion,
    unifyStepWithSatisfiesAssertion,
    compareStepWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlc2NlbmQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcFdpdGhSdWxlKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzV2l0aFJ1bGUgPSBmYWxzZTtcblxuICBjb25zdCBxdWFsaWZpZWQgPSBzdGVwLmlzUXVhbGlmaWVkKCk7XG5cbiAgaWYgKHF1YWxpZmllZCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgcnVsZS51bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGVwVW5pZmllc1dpdGhSdWxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFJ1bGUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aFJ1bGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcFdpdGhSZWZlcmVuY2Uoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gZmFsc2U7XG5cbiAgY29uc3QgcXVhbGlmaWVkID0gc3RlcC5pc1F1YWxpZmllZCgpO1xuXG4gIGlmIChxdWFsaWZpZWQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBzdGVwLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgICBpZiAobWV0YUxldmVsKSB7XG4gICAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IE1ldGFMZXZlbEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb24gPSBNZXRhTGV2ZWxBc3N1bXB0aW9uLmZyb21TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIHN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1NhdGlzZmllc0Fzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgeyBTYXRpc2ZpZXNBc3NlcnRpb24gfSA9IGVsZW1lbnRzO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IFNhdGlzZmllc0Fzc2VydGlvbi5mcm9tU3RlcChzdGVwLCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24udmVyaWZ5U2lnbmF0dXJlKGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICAgIGlmICh1bnF1YWxpZmllZCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgICBzdGVwVW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3RlcHNPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBzdGVwc09yU3VicHJvb2YudW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGF4aW9tLnVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzKSB7XG4gICAgICAgICAgICAgICAgc3RlcFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHVuaWZ5IHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYmVjYXVzZSBpdCBpcyBub3Qgc2F0aXNmaWFibGUuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBxdWFsaWZpZWQgPSBzdGVwLmlzUXVhbGlmaWVkKCk7XG5cbiAgaWYgKHF1YWxpZmllZCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHRvcExldmVsQXNzZXJ0aW9uLnVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcEFzRXF1YWxpdHkoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBRXF1YWxpdHkgPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzQUVxdWFsaXR5ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQUVxdWFsaXR5KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGFuIGVxdWFsaXR5LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FFcXVhbGl0eTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNKdWRnZW1lbnQoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBc0p1ZGdlbWVudCA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBKdWRnZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gSnVkZ2VtZW50LmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChqdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzSnVkZ2VtZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FzSnVkZ2VtZW50O1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1R5cGVBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgVHlwZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0ZXBVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1R5cGVBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcEFzUHJvcGVydHlBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gUHJvcGVydHlBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm0gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRUZXJtKCksXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IGNvbnRleHQuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25NYXRjaGVzID0gZXF1aXZhbGVuY2Uuc29tZU90aGVyVGVybSh0ZXJtLCAodGVybSkgPT4geyAgLy8vXG4gICAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmdldFByb3BlcnR5UmVsYXRpb24oKSxcbiAgICAgICAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBjb250ZXh0LmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgICAgIHN0ZXBVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvbiA9IHN0ZXAuZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCk7XG5cbiAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgc3RlcFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVTdGVwV2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdGVwLmNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgICBzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RlcHMgPSBbXG4gIHVuaWZ5U3RlcFdpdGhSdWxlLFxuICB1bmlmeVN0ZXBXaXRoUmVmZXJlbmNlLFxuICB1bmlmeVN0ZXBBc1NhdGlzZmllc0Fzc2VydGlvbixcbiAgdW5pZnlTdGVwV2l0aFRvcExldmVsQXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBBc0VxdWFsaXR5LFxuICB1bmlmeVN0ZXBBc0p1ZGdlbWVudCxcbiAgdW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uLFxuICBjb21wYXJlU3RlcFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG5dO1xuIl0sIm5hbWVzIjpbInVuaWZ5U3RlcHMiLCJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJ1bmlmeVN0ZXBXaXRoUnVsZSIsInN0ZXAiLCJjb250ZXh0Iiwic3RlcFVuaWZpZXNXaXRoUnVsZSIsInF1YWxpZmllZCIsImlzUXVhbGlmaWVkIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwicnVsZVN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5IiwidW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGVwV2l0aFJlZmVyZW5jZSIsInN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSIsInJlZmVyZW5jZVN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJtZXRhTGV2ZWwiLCJpc01ldGFMZXZlbCIsImRlc2NlbmQiLCJNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZnJvbVN0ZXAiLCJ2YWxpZGF0ZSIsInVuaWZ5U3RlcEFzU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiIsIlNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbiIsInZlcmlmeVNpZ25hdHVyZSIsInVucXVhbGlmaWVkIiwiaXNVbnF1YWxpZmllZCIsInN0ZXBzT3JTdWJwcm9vZiIsInN0ZXBPclN1YlByb29mVW5pZmllc1dJdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJheGlvbVN0cmluZyIsInVuaWZ5U3RlcFdpdGhUb3BMZXZlbEFzc2VydGlvbiIsInN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVN0ZXBBc0VxdWFsaXR5Iiwic3RlcFVuaWZpZXNBRXF1YWxpdHkiLCJFcXVhbGl0eSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudCIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlTdGVwQXNKdWRnZW1lbnQiLCJzdGVwVW5pZmllc0FzSnVkZ2VtZW50IiwiSnVkZ2VtZW50IiwianVkZ2VtZW50IiwidW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInVuaWZ5U3RlcEFzUHJvcGVydHlBc3NlcnRpb24iLCJzdGVwVW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5U3RlcFdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGVwVW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJzdGVwVW5pZmllcyIsImNvbXBhcmVTdGVwV2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrV2FBOzs7ZUFBQUE7OzsyQkFoV2tCO2lFQUVWO3lCQUVHOzs7Ozs7QUFFeEIsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MseUJBQWM7QUFFeEMsZUFBZUMsa0JBQWtCQyxJQUFJLEVBQUVDLE9BQU87SUFDNUMsSUFBSUMsc0JBQXNCO0lBRTFCLE1BQU1DLFlBQVlILEtBQUtJLFdBQVc7SUFFbEMsSUFBSUQsV0FBVztRQUNiLE1BQU1FLFlBQVlMLEtBQUtNLFlBQVksSUFDN0JDLE9BQU9OLFFBQVFPLG1CQUFtQixDQUFDSDtRQUV6QyxJQUFJRSxTQUFTLE1BQU07WUFDakIsTUFBTUUsYUFBYVQsS0FBS1UsU0FBUyxJQUMzQkMsYUFBYUosS0FBS0csU0FBUztZQUVqQ1QsUUFBUVcsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFSCxXQUFXLGlCQUFpQixFQUFFRSxXQUFXLFNBQVMsQ0FBQztZQUVsRixNQUFNRSw0QkFBNEJaLFFBQVFhLDRCQUE0QixJQUNoRUMsd0NBQXdDLE1BQU1SLEtBQUtTLHFDQUFxQyxDQUFDaEIsTUFBTWEsMkJBQTJC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