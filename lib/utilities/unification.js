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
async function unifyStepWithReference(step, context) {
    let stepUnifiesWithReference = false;
    const reference = step.getReference();
    if (reference !== null) {
        const stepString = step.getString(), referenceString = reference.getString();
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
async function unifyStepWithTopLevelAssertion(step, context) {
    let stepUnifiesWithTopLevelAssertion = false;
    const reference = step.getReference();
    if (reference !== null) {
        const topLevelAssertion = context.findTopLevelAssertionByReference(reference);
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
            stepUnifiesAEquality = true;
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
            if (stepUnifiesAsTypeAssertion) {
                context.debug(`...unified the '${stepString}' step as a type assertion.`);
            }
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
            stepUnifiesAsPropertyAssertion = true;
            if (stepUnifiesAsPropertyAssertion) {
                context.debug(`...unified the '${stepString}' step as a property assertion.`);
            }
        }
    }
    return stepUnifiesAsPropertyAssertion;
}
async function unifyStepAsSignatureAssertion(step, context) {
    let stepUnifiesAsSignatureAssertion = false;
    const unqualified = step.isUnqualified();
    if (unqualified) {
        const { SignatureAssertion } = _elements.default, statement = step.getStatement(), signatureAssertion = SignatureAssertion.fromStatement(statement, context);
        if (signatureAssertion !== null) {
            const stepString = step.getString();
            context.trace(`Unifying the '${stepString}' step as a signature assertion...`);
            stepUnifiesAsSignatureAssertion = true;
            if (stepUnifiesAsSignatureAssertion) {
                context.debug(`...unified the '${stepString}' step as a signature assertion.`);
            }
        }
    }
    return stepUnifiesAsSignatureAssertion;
}
async function unifyStepWithSignatureAssertion(step, context) {
    let stepUnifiesWithSignatureAssertion = false;
    const signatureAssertion = step.getSignatureAssertion();
    if (signatureAssertion !== null) {
        const stepString = step.getString(), signatureAssertionString = signatureAssertion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${signatureAssertionString}' signature assertion...`);
        const subproofOrProofAssertions = context.getSubproofOrProofAssertions(), stepUnifies = signatureAssertion.unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);
        if (stepUnifies) {
            stepUnifiesWithSignatureAssertion = true;
        }
        if (stepUnifiesWithSignatureAssertion) {
            context.debug(`...unified the '${stepString}' step with the '${signatureAssertionString}' signature assertion.`);
        }
    }
    return stepUnifiesWithSignatureAssertion;
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
    unifyStepWithTopLevelAssertion,
    unifyStepAsEquality,
    unifyStepAsJudgement,
    unifyStepAsTypeAssertion,
    unifyStepAsPropertyAssertion,
    unifyStepAsSignatureAssertion,
    unifyStepWithSignatureAssertion,
    compareStepWithSubproofOrProofAssertions
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVzY2VuZCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwV2l0aFJ1bGUoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHJ1bGUudW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoUmVmZXJlbmNlKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgICBpZiAobWV0YUxldmVsKSB7XG4gICAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IE1ldGFMZXZlbEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb24gPSBNZXRhTGV2ZWxBc3N1bXB0aW9uLmZyb21TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIHN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCByZWZlcmVuY2UgPSBzdGVwLmdldFJlZmVyZW5jZSgpO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNFcXVhbGl0eShzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FFcXVhbGl0eSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcEFzSnVkZ2VtZW50KHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHN0ZXBVbmlmaWVzQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IFR5cGVBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNQcm9wZXJ0eUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1NpZ25hdHVyZUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb24gPSBTaWduYXR1cmVBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHNpZ25hdHVyZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc1NpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEgc2lnbmF0dXJlIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1NpZ25hdHVyZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwV2l0aFNpZ25hdHVyZUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzaWduYXR1cmVBc3NlcnRpb24gPSBzdGVwLmdldFNpZ25hdHVyZUFzc2VydGlvbigpO1xuXG4gIGlmIChzaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb25TdHJpbmcgPSBzaWduYXR1cmVBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0ZXBVbmlmaWVzID0gc2lnbmF0dXJlQXNzZXJ0aW9uLnVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoU2lnbmF0dXJlQXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wYXJlU3RlcFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gc3RlcC5jb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgICAgc3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgc3VicHJvb2ZzIG9yIHByb29mIGFzc3NlcnRpb25zLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCB1bmlmeVN0ZXBzID0gW1xuICB1bmlmeVN0ZXBXaXRoUnVsZSxcbiAgdW5pZnlTdGVwV2l0aFJlZmVyZW5jZSxcbiAgdW5pZnlTdGVwV2l0aFRvcExldmVsQXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBBc0VxdWFsaXR5LFxuICB1bmlmeVN0ZXBBc0p1ZGdlbWVudCxcbiAgdW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBBc1Byb3BlcnR5QXNzZXJ0aW9uLFxuICB1bmlmeVN0ZXBBc1NpZ25hdHVyZUFzc2VydGlvbixcbiAgdW5pZnlTdGVwV2l0aFNpZ25hdHVyZUFzc2VydGlvbixcbiAgY29tcGFyZVN0ZXBXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuXTtcbiJdLCJuYW1lcyI6WyJ1bmlmeVN0ZXBzIiwidW5pZnlTdGVwV2l0aFJ1bGUiLCJzdGVwIiwiY29udGV4dCIsInN0ZXBVbmlmaWVzV2l0aFJ1bGUiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJydWxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJydWxlU3RyaW5nIiwidHJhY2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZGVidWciLCJ1bmlmeVN0ZXBXaXRoUmVmZXJlbmNlIiwic3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwicmVmZXJlbmNlU3RyaW5nIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsIm1ldGFMZXZlbCIsImlzTWV0YUxldmVsIiwiZGVzY2VuZCIsIk1ldGFMZXZlbEFzc3VtcHRpb24iLCJlbGVtZW50cyIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJmcm9tU3RlcCIsInZhbGlkYXRlIiwidW5pZnlTdGVwV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInVuaWZ5U3RlcEFzRXF1YWxpdHkiLCJzdGVwVW5pZmllc0FFcXVhbGl0eSIsInVucXVhbGlmaWVkIiwiaXNVbnF1YWxpZmllZCIsIkVxdWFsaXR5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZXF1YWxpdHkiLCJmcm9tU3RhdGVtZW50IiwidW5pZnlTdGVwQXNKdWRnZW1lbnQiLCJzdGVwVW5pZmllc0FzSnVkZ2VtZW50IiwiSnVkZ2VtZW50IiwianVkZ2VtZW50IiwidW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNBc1R5cGVBc3NlcnRpb24iLCJUeXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbiIsInVuaWZ5U3RlcEFzUHJvcGVydHlBc3NlcnRpb24iLCJzdGVwVW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uIiwidW5pZnlTdGVwQXNTaWduYXR1cmVBc3NlcnRpb24iLCJzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uIiwiU2lnbmF0dXJlQXNzZXJ0aW9uIiwic2lnbmF0dXJlQXNzZXJ0aW9uIiwidW5pZnlTdGVwV2l0aFNpZ25hdHVyZUFzc2VydGlvbiIsInN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiIsImdldFNpZ25hdHVyZUFzc2VydGlvbiIsInNpZ25hdHVyZUFzc2VydGlvblN0cmluZyIsInN0ZXBVbmlmaWVzIiwiY29tcGFyZVN0ZXBXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtTYUE7OztlQUFBQTs7O2lFQWhTUTt5QkFFRzs7Ozs7O0FBRXhCLGVBQWVDLGtCQUFrQkMsSUFBSSxFQUFFQyxPQUFPO0lBQzVDLElBQUlDLHNCQUFzQjtJQUUxQixNQUFNQyxZQUFZSCxLQUFLSSxZQUFZO0lBRW5DLElBQUlELGNBQWMsTUFBTTtRQUN0QixNQUFNRSxPQUFPSixRQUFRSyxtQkFBbUIsQ0FBQ0g7UUFFekMsSUFBSUUsU0FBUyxNQUFNO1lBQ2pCLE1BQU1FLGFBQWFQLEtBQUtRLFNBQVMsSUFDM0JDLGFBQWFKLEtBQUtHLFNBQVM7WUFFakNQLFFBQVFTLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUgsV0FBVyxpQkFBaUIsRUFBRUUsV0FBVyxTQUFTLENBQUM7WUFFbEYsTUFBTUUsNEJBQTRCVixRQUFRVyw0QkFBNEIsSUFDaEVDLHdDQUF3QyxNQUFNUixLQUFLUyxxQ0FBcUMsQ0FBQ2QsTUFBTVcsMkJBQTJCVjtZQUVoSSxJQUFJWSx1Q0FBdUM7Z0JBQ3pDWCxzQkFBc0I7WUFDeEI7WUFFQSxJQUFJQSxxQkFBcUI7Z0JBQ3ZCRCxRQUFRYyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRVIsV0FBVyxpQkFBaUIsRUFBRUUsV0FBVyxPQUFPLENBQUM7WUFDcEY7UUFDRjtJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVBLGVBQWVjLHVCQUF1QmhCLElBQUksRUFBRUMsT0FBTztJQUNqRCxJQUFJZ0IsMkJBQTJCO0lBRS9CLE1B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