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
const _context = require("./context");
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
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), statementAndSubproofOrProofAssertionsUnify = await topLevelAssertion.unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context);
            if (statementAndSubproofOrProofAssertionsUnify) {
                statementUnifiesWithReference = true;
            }
        } else {
            const metaLevel = context.isMetaLevel();
            if (metaLevel) {
                (0, _context.descend)((context)=>{
                    const { Assumption } = _elements.default, assumption = Assumption.fromStatementAndReference(statement, reference, context);
                    assumption.validate(context, metaLevel);
                    statementUnifiesWithReference = true;
                }, context);
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
    const { SatisfiesAssertion } = _elements.default;
    satisfiesAssertion = SatisfiesAssertion.fromStatement(statement, context);
    if (satisfiesAssertion !== null) {
        const statementString = statement.getString();
        context.trace(`Unifying the '${statementString}' statement as a satisfies assertion...`);
        (0, _context.descend)((context)=>{
            satisfiesAssertion.verifySignature(context);
        }, context);
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
        const { Equality } = _elements.default, equality = Equality.fromStatement(statement, context);
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
        const { Judgement } = _elements.default, judgement = Judgement.fromStatement(statement, context);
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
        const { TypeAssertion } = _elements.default, typeAssertion = TypeAssertion.fromStatement(statement, context);
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
        const { PropertyAssertion } = _elements.default, propertyAssertion = PropertyAssertion.fromStatement(statement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlc2NlbmQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhSdWxlID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCBydWxlLnVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJ1bGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi51bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZXZlbCA9IGNvbnRleHQuaXNNZXRhTGV2ZWwoKTtcblxuICAgICAgaWYgKG1ldGFMZXZlbCkge1xuICAgICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCwgbWV0YUxldmVsKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRBc1NhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB7IFNhdGlzZmllc0Fzc2VydGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gU2F0aXNmaWVzQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbi52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbiA9IGJhY2t3YXJkc1NvbWUoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN0ZXBzT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gc3RlcHNPclN1YnByb29mLnVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJQcm9vZlVuaWZpZXNXSXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gYXhpb20udW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB1bmlmeSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGJlY2F1c2UgaXQgaXMgbm90IHNhdGlzZmlhYmxlLmApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1NhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzU2F0aXNmaWVzQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhUb3BMZXZlbEFzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNFcXVhbGl0eShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgRXF1YWxpdHkgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuLi5gKTtcblxuICAgICAgY29uc3QgZXF1YWxpdHlFcXVhbCA9IGVxdWFsaXR5LmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChlcXVhbGl0eUVxdWFsKSB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgYXMgYW4gZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNKdWRnZW1lbnQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNBc1R5cGVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gVHlwZUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGFzIGEgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24oc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtID0gcHJvcGVydHlBc3NlcnRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBjb250ZXh0LmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyA9IGVxdWl2YWxlbmNlLnNvbWVPdGhlclRlcm0odGVybSwgKHRlcm0pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5nZXRQcm9wZXJ0eVJlbGF0aW9uKCksXG4gICAgICAgICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVtbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzYXRpc2ZpZXNBc3NlcnRpb24udW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW1udCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzID0gZmFsc2U7XG5cbiAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoU3RlcHMgPSBzdGF0ZW1lbnQuY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcykge1xuICAgICAgc3RhdGVtZW50RXF1YXRlc1dpdGhTdGVwT3JTdWJwcm9vZnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhdGVzV2l0aFN0ZXBPclN1YnByb29mcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzO1xufVxuXG5leHBvcnQgY29uc3QgdW5pZnlTdGF0ZW1lbnRzID0gW1xuICB1bmlmeVN0YXRlbWVudFdpdGhSdWxlLFxuICB1bmlmeVN0YXRlbWVudFdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFRvcExldmVsQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzRXF1YWxpdHksXG4gIHVuaWZ5U3RhdGVtZW50QXNKdWRnZW1lbnQsXG4gIHVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0YXRlbWVudEFzUHJvcGVydHlBc3NlcnRpb24sXG4gIHVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbixcbiAgY29tcGFyZVN0YXRlbWVudFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG5dO1xuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50cyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsInVuaWZ5U3RhdGVtZW50V2l0aFJ1bGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc1dpdGhSdWxlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoUmVmZXJlbmNlIiwic3RhdGVtZW50VW5pZmllc1dpdGhSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwibWV0YUxldmVsIiwiaXNNZXRhTGV2ZWwiLCJkZXNjZW5kIiwiQXNzdW1wdGlvbiIsImVsZW1lbnRzIiwiYXNzdW1wdGlvbiIsImZyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsInVuaWZ5U3RhdGVtZW50QXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzQXNTYXRpc2ZpZXNBc3NlcnRpb24iLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJmcm9tU3RhdGVtZW50IiwidmVyaWZ5U2lnbmF0dXJlIiwic3RlcHNPclN1YnByb29mIiwic3RlcE9yU3ViUHJvb2ZVbmlmaWVzV0l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImF4aW9tU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVN0YXRlbWVudEFzRXF1YWxpdHkiLCJzdGF0ZW1lbnRVbmlmaWVzQUVxdWFsaXR5IiwiRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5RXF1YWwiLCJpc0VxdWFsIiwidW5pZnlTdGF0ZW1lbnRBc0p1ZGdlbWVudCIsInN0YXRlbWVudFVuaWZpZXNBc0p1ZGdlbWVudCIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudCIsInVuaWZ5U3RhdGVtZW50QXNUeXBlQXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzVHlwZUFzc2VydGlvbiIsIlR5cGVBc3NlcnRpb24iLCJ0eXBlQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwic3RhdGVtZW50VW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwidGVybSIsImdldFRlcm0iLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInByb3BlcnR5QXNzZXJ0aW9uTWF0Y2hlcyIsInNvbWVPdGhlclRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsImNvbXBhcmVTdGF0ZW1lbnRXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEVxdWF0ZXNXaXRoU3RlcE9yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllc1dpdGhTdGVwcyIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3VWFBOzs7ZUFBQUE7OzsyQkF0VWtCO2lFQUVWO3lCQUVHOzs7Ozs7QUFFeEIsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MseUJBQWM7QUFFeEMsZUFBZUMsdUJBQXVCQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLEVBQUVDLE9BQU87SUFDckYsSUFBSUMsMkJBQTJCO0lBRS9CLElBQUlILGNB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