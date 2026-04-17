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
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _context = require("./context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function unifyStepWithRule(step, context) {
    let stepUnifiesWithRule = false;
    const reference = step.getReference();
    if (reference !== null) {
        const rule = context.findRuleByReference(reference);
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
async function unifyStepWithTopLevelAssertion(step, context) {
    let stepUnifiesWithTopLevelAssertion = false;
    const reference = step.getReference();
    if (reference !== null) {
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const satisfiable = topLevelAssertion.isSatisfiable();
            if (!satisfiable) {
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
    }
    return stepUnifiesWithTopLevelAssertion;
}
async function unifyStepWithSignatureAssertion(step, context) {
    let stepUnifiesWithSignatureAssertion = false;
    const signatureAssertion = step.getSignatureAssertion();
    if (signatureAssertion !== null) {
        const stepString = step.getString(), signatureAssertionString = signatureAssertion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${signatureAssertionString}' signature assertion...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepAndSubproofOrProofAssertionsUnify = await signatureAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
        if (stepAndSubproofOrProofAssertionsUnify) {
            stepUnifiesWithSignatureAssertion = true;
        }
        if (stepUnifiesWithSignatureAssertion) {
            context.debug(`...unified the '${stepString}' step with the '${signatureAssertionString}' signature assertion.`);
        }
    }
    return stepUnifiesWithSignatureAssertion;
}
async function unifyStepAsUnqualifiedEquality(step, context) {
    let stepUnifiesAUnqualifiedEquality = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { Equality } = _elements.default, statement = step.getStatement(), equality = Equality.fromStatement(statement, context);
        if (equality !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as an unqualified equality...`);
            stepUnifiesAUnqualifiedEquality = true;
            if (stepUnifiesAUnqualifiedEquality) {
                context.debug(`...unified the '${stepString}' step as an unqualified equality.`);
            }
        }
    }
    return stepUnifiesAUnqualifiedEquality;
}
async function unifyStepAsUNqualifiedJudgement(step, context) {
    let stepUnifiesAsUnqualifiedJudgement = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { Judgement } = _elements.default, statement = step.getStatement(), judgement = Judgement.fromStatement(statement, context);
        if (judgement !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as an unqualified judgement...`);
            stepUnifiesAsUnqualifiedJudgement = true;
            if (stepUnifiesAsUnqualifiedJudgement) {
                context.debug(`...unified the '${stepString}' step as an unqualified judgement.`);
            }
        }
    }
    return stepUnifiesAsUnqualifiedJudgement;
}
async function unifyStepAsUnqualifiedTypeAssertion(step, context) {
    let stepUnifiesAsUnqualifiedTypeAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { TypeAssertion } = _elements.default, statement = step.getStatement(), typeAssertion = TypeAssertion.fromStatement(statement, context);
        if (typeAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as an unqualified type assertion...`);
            stepUnifiesAsUnqualifiedTypeAssertion = true;
            if (stepUnifiesAsUnqualifiedTypeAssertion) {
                context.debug(`...unified the '${stepString}' step as an unqualified type assertion.`);
            }
        }
    }
    return stepUnifiesAsUnqualifiedTypeAssertion;
}
async function unifyStepAsUnqualifiedPropertyAssertion(step, context) {
    let stepUnifiesAsUnqualifiedPropertyAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { PropertyAssertion } = _elements.default, statement = step.getStatement(), propertyAssertion = PropertyAssertion.fromStatement(statement, context);
        if (propertyAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as an unqualified property assertion...`);
            stepUnifiesAsUnqualifiedPropertyAssertion = true;
            if (stepUnifiesAsUnqualifiedPropertyAssertion) {
                context.debug(`...unified the '${stepString}' step as an unqualified property assertion.`);
            }
        }
    }
    return stepUnifiesAsUnqualifiedPropertyAssertion;
}
async function unifyStepAsUnqualifiedSignatureAssertion(step, context) {
    let stepUnifiesAsUnqualifiedSignatureAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { SignatureAssertion } = _elements.default, statement = step.getStatement(), signatureAssertion = SignatureAssertion.fromStatement(statement, context);
        if (signatureAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as a signature assertion...`);
            stepUnifiesAsUnqualifiedSignatureAssertion = true;
            if (stepUnifiesAsUnqualifiedSignatureAssertion) {
                context.debug(`...unified the '${stepString}' step as a signature assertion.`);
            }
        }
    }
    return stepUnifiesAsUnqualifiedSignatureAssertion;
}
async function validateStepAsMetaLevelAssumption(step, context) {
    let stepValidatesAsMetaLevelAssumption = false;
    const metaLevel = context.isMetaLevel();
    if (metaLevel) {
        const reference = step.getReference();
        if (reference !== null) {
            const stepString = step.getString(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
            if (topLevelAssertion === null) {
                context.trace(`Validating the '${stepString}' step as a meta-level assumption...`);
                (0, _context.descend)((context)=>{
                    let metaLevelAssumption;
                    const { MetaLevelAssumption } = _elements.default;
                    metaLevelAssumption = MetaLevelAssumption.fromStep(step, context);
                    metaLevelAssumption = metaLevelAssumption.validate(context); ///
                    if (metaLevelAssumption !== null) {
                        stepValidatesAsMetaLevelAssumption = true;
                    }
                }, context);
                if (stepValidatesAsMetaLevelAssumption) {
                    context.debug(`...validated the '${stepString}' step as a meta-level assumption.`);
                }
            }
        }
    }
    return stepValidatesAsMetaLevelAssumption;
}
async function unifyStepAsSignatureAssertion(step, context) {
    let stepUnifiesAsSignatureAssertion = false;
    const reference = step.getReference();
    if (reference !== null) {
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        if (topLevelAssertion !== null) {
            const statementNode = step.getStatementNode(), signatureAssertionNode = statementNode.getSignatureAssertionNode();
            if (signatureAssertionNode !== null) {
                const stepString = step.getString(), referenceString = reference.getString(), signatureAssertion = context.findAssertionByAssertionNode(signatureAssertionNode);
                context.trace(`Unifying the '${stepString}' step as a signature assertion with the '${referenceString}' reference...`);
                const unifyTopLevelAssertion = await signatureAssertion.unifyTopLevelAssertion(topLevelAssertion, context);
                if (unifyTopLevelAssertion) {
                    stepUnifiesAsSignatureAssertion = true;
                }
                if (stepUnifiesAsSignatureAssertion) {
                    context.debug(`...unified the '${stepString}' step as a signature assertion with the '${referenceString}' reference.`);
                }
            }
        }
    }
    return stepUnifiesAsSignatureAssertion;
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
    unifyStepWithTopLevelAssertion,
    unifyStepWithSignatureAssertion,
    unifyStepAsUnqualifiedEquality,
    unifyStepAsUNqualifiedJudgement,
    unifyStepAsUnqualifiedTypeAssertion,
    unifyStepAsUnqualifiedPropertyAssertion,
    unifyStepAsUnqualifiedSignatureAssertion,
    validateStepAsMetaLevelAssumption,
    unifyStepAsSignatureAssertion,
    compareStepWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVzY2VuZCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwV2l0aFJ1bGUoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHJ1bGUudW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCByZWZlcmVuY2UgPSBzdGVwLmdldFJlZmVyZW5jZSgpO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0b3BMZXZlbEFzc2VydGlvbi5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmICghc2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCB0b3BMZXZlbEFzc2VydGlvbi51bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoU2lnbmF0dXJlQXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHNpZ25hdHVyZUFzc2VydGlvbiA9IHN0ZXAuZ2V0U2lnbmF0dXJlQXNzZXJ0aW9uKCk7XG5cbiAgaWYgKHNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpZ25hdHVyZUFzc2VydGlvblN0cmluZyA9IHNpZ25hdHVyZUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzaWduYXR1cmVBc3NlcnRpb25TdHJpbmd9JyBzaWduYXR1cmUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHNpZ25hdHVyZUFzc2VydGlvbi51bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoU2lnbmF0dXJlQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1VucXVhbGlmaWVkRXF1YWxpdHkoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBVW5xdWFsaWZpZWRFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiB1bnF1YWxpZmllZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FVbnF1YWxpZmllZEVxdWFsaXR5ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQVVucXVhbGlmaWVkRXF1YWxpdHkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYW4gdW5xdWFsaWZpZWQgZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzQVVucXVhbGlmaWVkRXF1YWxpdHk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcEFzVU5xdWFsaWZpZWRKdWRnZW1lbnQoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBc1VucXVhbGlmaWVkSnVkZ2VtZW50ID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IEp1ZGdlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBKdWRnZW1lbnQuZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiB1bnF1YWxpZmllZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc1VucXVhbGlmaWVkSnVkZ2VtZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZEp1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiB1bnF1YWxpZmllZCBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZEp1ZGdlbWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNVbnF1YWxpZmllZFR5cGVBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNBc1VucXVhbGlmaWVkVHlwZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBUeXBlQXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHR5cGVBc3NlcnRpb24gPSBUeXBlQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGFuIHVucXVhbGlmaWVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFR5cGVBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNBc1VucXVhbGlmaWVkVHlwZUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiB1bnF1YWxpZmllZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1VucXVhbGlmaWVkVHlwZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNVbnF1YWxpZmllZFByb3BlcnR5QXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFByb3BlcnR5QXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gUHJvcGVydHlBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGFuIHVucXVhbGlmaWVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRQcm9wZXJ0eUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiB1bnF1YWxpZmllZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFByb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1VucXVhbGlmaWVkU2lnbmF0dXJlQXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFNpZ25hdHVyZUFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uID0gU2lnbmF0dXJlQXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBzaWduYXR1cmUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFNpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRTaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBzaWduYXR1cmUgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRTaWduYXR1cmVBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlU3RlcEFzTWV0YUxldmVsQXNzdW1wdGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVmFsaWRhdGVzQXNNZXRhTGV2ZWxBc3N1bXB0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gIGlmIChtZXRhTGV2ZWwpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBzdGVwLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEgbWV0YS1sZXZlbCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGxldCBtZXRhTGV2ZWxBc3N1bXB0aW9uO1xuXG4gICAgICAgICAgY29uc3QgeyBNZXRhTGV2ZWxBc3N1bXB0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb24gPSBNZXRhTGV2ZWxBc3N1bXB0aW9uLmZyb21TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbiA9IG1ldGFMZXZlbEFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChtZXRhTGV2ZWxBc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGVwVmFsaWRhdGVzQXNNZXRhTGV2ZWxBc3N1bXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwVmFsaWRhdGVzQXNNZXRhTGV2ZWxBc3N1bXB0aW9uKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIG1ldGEtbGV2ZWwgYXNzdW1wdGlvbi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVmFsaWRhdGVzQXNNZXRhTGV2ZWxBc3N1bXB0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1NpZ25hdHVyZUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gc3RlcC5nZXRSZWZlcmVuY2UoKTtcblxuICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGVwLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFNpZ25hdHVyZUFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHNpZ25hdHVyZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHNpZ25hdHVyZSBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgdW5pZnlUb3BMZXZlbEFzc2VydGlvbiA9IGF3YWl0IHNpZ25hdHVyZUFzc2VydGlvbi51bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZnlUb3BMZXZlbEFzc2VydGlvbikge1xuICAgICAgICAgIHN0ZXBVbmlmaWVzQXNTaWduYXR1cmVBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ZXBVbmlmaWVzQXNTaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHNpZ25hdHVyZSBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzQXNTaWduYXR1cmVBc3NlcnRpb247XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVTdGVwV2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdGVwLmNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgICBzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IHVuaWZ5U3RlcHMgPSBbXG4gIHVuaWZ5U3RlcFdpdGhSdWxlLFxuICB1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24sXG4gIHVuaWZ5U3RlcFdpdGhTaWduYXR1cmVBc3NlcnRpb24sXG4gIHVuaWZ5U3RlcEFzVW5xdWFsaWZpZWRFcXVhbGl0eSxcbiAgdW5pZnlTdGVwQXNVTnF1YWxpZmllZEp1ZGdlbWVudCxcbiAgdW5pZnlTdGVwQXNVbnF1YWxpZmllZFR5cGVBc3NlcnRpb24sXG4gIHVuaWZ5U3RlcEFzVW5xdWFsaWZpZWRQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlTdGVwQXNVbnF1YWxpZmllZFNpZ25hdHVyZUFzc2VydGlvbixcbiAgdmFsaWRhdGVTdGVwQXNNZXRhTGV2ZWxBc3N1bXB0aW9uLFxuICB1bmlmeVN0ZXBBc1NpZ25hdHVyZUFzc2VydGlvbixcbiAgY29tcGFyZVN0ZXBXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuXTtcbiJdLCJuYW1lcyI6WyJ1bmlmeVN0ZXBzIiwidW5pZnlTdGVwV2l0aFJ1bGUiLCJzdGVwIiwiY29udGV4dCIsInN0ZXBVbmlmaWVzV2l0aFJ1bGUiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJydWxlU3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZGVidWciLCJ1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJzdGVwVW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInVuaWZ5U3RlcFdpdGhTaWduYXR1cmVBc3NlcnRpb24iLCJzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24iLCJzaWduYXR1cmVBc3NlcnRpb24iLCJnZXRTaWduYXR1cmVBc3NlcnRpb24iLCJzaWduYXR1cmVBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVN0ZXBBc1VucXVhbGlmaWVkRXF1YWxpdHkiLCJzdGVwVW5pZmllc0FVbnF1YWxpZmllZEVxdWFsaXR5IiwidW5xdWFsaWZpZWQiLCJpc1VucXVhbGlmaWVkIiwiRXF1YWxpdHkiLCJlbGVtZW50cyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudCIsInVuaWZ5U3RlcEFzVU5xdWFsaWZpZWRKdWRnZW1lbnQiLCJzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRKdWRnZW1lbnQiLCJKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJ1bmlmeVN0ZXBBc1VucXVhbGlmaWVkVHlwZUFzc2VydGlvbiIsInN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFR5cGVBc3NlcnRpb24iLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInVuaWZ5U3RlcEFzVW5xdWFsaWZpZWRQcm9wZXJ0eUFzc2VydGlvbiIsInN0ZXBVbmlmaWVzQXNVbnF1YWxpZmllZFByb3BlcnR5QXNzZXJ0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZ5U3RlcEFzVW5xdWFsaWZpZWRTaWduYXR1cmVBc3NlcnRpb24iLCJzdGVwVW5pZmllc0FzVW5xdWFsaWZpZWRTaWduYXR1cmVBc3NlcnRpb24iLCJTaWduYXR1cmVBc3NlcnRpb24iLCJ2YWxpZGF0ZVN0ZXBBc01ldGFMZXZlbEFzc3VtcHRpb24iLCJzdGVwVmFsaWRhdGVzQXNNZXRhTGV2ZWxBc3N1bXB0aW9uIiwibWV0YUxldmVsIiwiaXNNZXRhTGV2ZWwiLCJkZXNjZW5kIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsIk1ldGFMZXZlbEFzc3VtcHRpb24iLCJmcm9tU3RlcCIsInZhbGlkYXRlIiwidW5pZnlTdGVwQXNTaWduYXR1cmVBc3NlcnRpb24iLCJzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzaWduYXR1cmVBc3NlcnRpb25Ob2RlIiwiZ2V0U2lnbmF0dXJlQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZVN0cmluZyIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwiY29tcGFyZVN0ZXBXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFVYUE7OztlQUFBQTs7O2lFQW5VUTt5QkFFRzs7Ozs7O0FBRXhCLGVBQWVDLGtCQUFrQkMsSUFBSSxFQUFFQyxPQUFPO0lBQzVDLElBQUlDLHNCQUFzQjtJQUUxQixNQUFNQyxZQUFZSCxLQUFLSSxZQUFZO0lBRW5DLElBQUlELGNBQWMsTUFBTTtRQUN0QixNQUFNRSxPQUFPSixRQUFRSyxtQkFBbUIsQ0FBQ0g7UUFFekMsSUFBSUUsU0FBUyxNQUFNO1lBQ2pCLE1BQU1FLGFBQWFQLEtBQUtRLFNBQVMsSUFDM0JDLGFBQWFKLEtBQUtHLFNBQVM7WUFFakNQLFFBQVFTLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUgsV0FBVyxpQkFBaUIsRUFBRUUsV0FBVyxTQUFTLENBQUM7WUFFbEYsTUFBTUUsNEJBQTRCVixRQUFRVyw0QkFBNEIs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