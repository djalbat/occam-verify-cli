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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVzY2VuZCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwV2l0aFJ1bGUoc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGF3YWl0IHJ1bGUudW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUnVsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhSdWxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhSdWxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoUmVmZXJlbmNlKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IHN0ZXAuZ2V0UmVmZXJlbmNlKCk7XG5cbiAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgICBpZiAobWV0YUxldmVsKSB7XG4gICAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IE1ldGFMZXZlbEFzc3VtcHRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb24gPSBNZXRhTGV2ZWxBc3N1bXB0aW9uLmZyb21TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIHN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBXaXRoVG9wTGV2ZWxBc3NlcnRpb24oc3RlcCwgY29udGV4dCkge1xuICBsZXQgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCByZWZlcmVuY2UgPSBzdGVwLmdldFJlZmVyZW5jZSgpO1xuXG4gIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gYXdhaXQgdG9wTGV2ZWxBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoVG9wTGV2ZWxBc3NlcnRpb24pIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc1dpdGhUb3BMZXZlbEFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNFcXVhbGl0eShzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FFcXVhbGl0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IHVucXVhbGlmaWVkID0gc3RlcC5pc1VucXVhbGlmaWVkKCk7XG5cbiAgaWYgKHVucXVhbGlmaWVkKSB7XG4gICAgY29uc3QgeyBFcXVhbGl0eSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChlcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiBlcXVhbGl0eS4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FFcXVhbGl0eSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FFcXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhbiBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBRXF1YWxpdHk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVuaWZ5U3RlcEFzSnVkZ2VtZW50KHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNKdWRnZW1lbnQgPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgSnVkZ2VtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IEp1ZGdlbWVudC5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoanVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEganVkZ2VtZW50Li4uYCk7XG5cbiAgICAgIHN0ZXBVbmlmaWVzQXNKdWRnZW1lbnQgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNBc0p1ZGdlbWVudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc0p1ZGdlbWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNUeXBlQXNzZXJ0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgbGV0IHN0ZXBVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFR5cGVBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IFR5cGVBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGVwVW5pZmllc0FzVHlwZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwQXNQcm9wZXJ0eUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYXMgYSBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uID0gdHJ1ZTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1bmlmeVN0ZXBBc1NpZ25hdHVyZUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgY29uc3QgdW5xdWFsaWZpZWQgPSBzdGVwLmlzVW5xdWFsaWZpZWQoKTtcblxuICBpZiAodW5xdWFsaWZpZWQpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb24gPSBTaWduYXR1cmVBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBhcyBhIHNpZ25hdHVyZSBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgc3RlcFVuaWZpZXNBc1NpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc0FzU2lnbmF0dXJlQXNzZXJ0aW9uKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGFzIGEgc2lnbmF0dXJlIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcFVuaWZpZXNBc1NpZ25hdHVyZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdW5pZnlTdGVwV2l0aFNpZ25hdHVyZUFzc2VydGlvbihzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24gPSBmYWxzZTtcblxuICBjb25zdCBzaWduYXR1cmVBc3NlcnRpb24gPSBzdGVwLmdldFNpZ25hdHVyZUFzc2VydGlvbigpO1xuXG4gIGlmIChzaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb25TdHJpbmcgPSBzaWduYXR1cmVBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBhd2FpdCBzaWduYXR1cmVBc3NlcnRpb24udW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5KSB7XG4gICAgICBzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NpZ25hdHVyZUFzc2VydGlvblN0cmluZ30nIHNpZ25hdHVyZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGFyZVN0ZXBXaXRoU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBjb250ZXh0KSB7XG4gIGxldCBzdGVwQ29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBmYWxzZTtcblxuICBjb25zdCB1bnF1YWxpZmllZCA9IHN0ZXAuaXNVbnF1YWxpZmllZCgpO1xuXG4gIGlmICh1bnF1YWxpZmllZCkge1xuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSBzdWJwcm9vZnMgb3IgcHJvb2YgYXNzc2VydGlvbnMuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN0ZXAuY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICAgIHN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBDb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlIHN1YnByb29mcyBvciBwcm9vZiBhc3NzZXJ0aW9ucy5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgdW5pZnlTdGVwcyA9IFtcbiAgdW5pZnlTdGVwV2l0aFJ1bGUsXG4gIHVuaWZ5U3RlcFdpdGhSZWZlcmVuY2UsXG4gIHVuaWZ5U3RlcFdpdGhUb3BMZXZlbEFzc2VydGlvbixcbiAgdW5pZnlTdGVwQXNFcXVhbGl0eSxcbiAgdW5pZnlTdGVwQXNKdWRnZW1lbnQsXG4gIHVuaWZ5U3RlcEFzVHlwZUFzc2VydGlvbixcbiAgdW5pZnlTdGVwQXNQcm9wZXJ0eUFzc2VydGlvbixcbiAgdW5pZnlTdGVwQXNTaWduYXR1cmVBc3NlcnRpb24sXG4gIHVuaWZ5U3RlcFdpdGhTaWduYXR1cmVBc3NlcnRpb24sXG4gIGNvbXBhcmVTdGVwV2l0aFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNcbl07XG4iXSwibmFtZXMiOlsidW5pZnlTdGVwcyIsInVuaWZ5U3RlcFdpdGhSdWxlIiwic3RlcCIsImNvbnRleHQiLCJzdGVwVW5pZmllc1dpdGhSdWxlIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwicnVsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwicnVsZVN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5IiwidW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImRlYnVnIiwidW5pZnlTdGVwV2l0aFJlZmVyZW5jZSIsInN0ZXBVbmlmaWVzV2l0aFJlZmVyZW5jZSIsInJlZmVyZW5jZVN0cmluZyIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJtZXRhTGV2ZWwiLCJpc01ldGFMZXZlbCIsImRlc2NlbmQiLCJNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZnJvbVN0ZXAiLCJ2YWxpZGF0ZSIsInVuaWZ5U3RlcFdpdGhUb3BMZXZlbEFzc2VydGlvbiIsInN0ZXBVbmlmaWVzV2l0aFRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVN0ZXBBc0VxdWFsaXR5Iiwic3RlcFVuaWZpZXNBRXF1YWxpdHkiLCJ1bnF1YWxpZmllZCIsImlzVW5xdWFsaWZpZWQiLCJFcXVhbGl0eSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImVxdWFsaXR5IiwiZnJvbVN0YXRlbWVudCIsInVuaWZ5U3RlcEFzSnVkZ2VtZW50Iiwic3RlcFVuaWZpZXNBc0p1ZGdlbWVudCIsIkp1ZGdlbWVudCIsImp1ZGdlbWVudCIsInVuaWZ5U3RlcEFzVHlwZUFzc2VydGlvbiIsInN0ZXBVbmlmaWVzQXNUeXBlQXNzZXJ0aW9uIiwiVHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb24iLCJ1bmlmeVN0ZXBBc1Byb3BlcnR5QXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNBc1Byb3BlcnR5QXNzZXJ0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbiIsInVuaWZ5U3RlcEFzU2lnbmF0dXJlQXNzZXJ0aW9uIiwic3RlcFVuaWZpZXNBc1NpZ25hdHVyZUFzc2VydGlvbiIsIlNpZ25hdHVyZUFzc2VydGlvbiIsInNpZ25hdHVyZUFzc2VydGlvbiIsInVuaWZ5U3RlcFdpdGhTaWduYXR1cmVBc3NlcnRpb24iLCJzdGVwVW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24iLCJnZXRTaWduYXR1cmVBc3NlcnRpb24iLCJzaWduYXR1cmVBc3NlcnRpb25TdHJpbmciLCJjb21wYXJlU3RlcFdpdGhTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcENvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa1NhQTs7O2VBQUFBOzs7aUVBaFNRO3lCQUVHOzs7Ozs7QUFFeEIsZUFBZUMsa0JBQWtCQyxJQUFJLEVBQUVDLE9BQU87SUFDNUMsSUFBSUMsc0JBQXNCO0lBRTFCLE1BQU1DLFlBQVlILEtBQUtJLFlBQVk7SUFFbkMsSUFBSUQsY0FBYyxNQUFNO1FBQ3RCLE1BQU1FLE9BQU9KLFFBQVFLLG1CQUFtQixDQUFDSDtRQUV6QyxJQUFJRSxTQUFTLE1BQU07WUFDakIsTUFBTUUsYUFBYVAsS0FBS1EsU0FBUyxJQUMzQkMsYUFBYUosS0FBS0csU0FBUztZQUVqQ1AsUUFBUVMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFSCxXQUFXLGlCQUFpQixFQUFFRSxXQUFXLFNBQVMsQ0FBQztZQUVsRixNQUFNRSw0QkFBNEJWLFFBQVFXLDRCQUE0QixJQUNoRUMsd0NBQXdDLE1BQU1SLEtBQUtTLHFDQUFxQyxDQUFDZCxNQUFNVywyQkFBMkJWO1lBRWhJLElBQUlZLHVDQUF1QztnQkFDekNYLHNCQUFzQjtZQUN4QjtZQUVBLElBQUlBLHFCQUFxQjtnQkFDdkJELFFBQVFjLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFUixXQUFXLGlCQUFpQixFQUFFRSxXQUFXLE9BQU8sQ0FBQztZQUNwRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUO0FBRUEsZUFBZWMsdUJBQXVCaEIs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