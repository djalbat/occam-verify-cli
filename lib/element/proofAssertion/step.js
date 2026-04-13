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
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
const _unification = require("../../utilities/unification");
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const { asyncSome } = _occamlanguages.asynchronousUtilities, { backwardsSome } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Step extends _proofAssertion.default {
    constructor(context, string, node, lineIndex, statement, reference, signatureAssertion){
        super(context, string, node, lineIndex, statement);
        this.reference = reference;
        this.signatureAssertion = signatureAssertion;
    }
    getReference() {
        return this.reference;
    }
    getSignatureAssertion() {
        return this.signatureAssertion;
    }
    getStepNode() {
        const node = this.getNode(), stepNode = node; ///
        return stepNode;
    }
    getStatementNode() {
        const statement = this.getStatement(), statementNode = statement.getNode();
        return statementNode;
    }
    isSatisfied() {
        const satisfied = this.signatureAssertion !== null;
        return satisfied;
    }
    isQualified() {
        const qualified = this.reference !== null || this.signatureAssertion !== null;
        return qualified;
    }
    isUnqualified() {
        const qualified = this.isQualified(), unqualified = !qualified;
        return unqualified;
    }
    compareTermAndPropertyRelation(term, propertyRelation, context) {
        let comparesToTermAndPropertyRelation = false;
        const { PropertyAssertion } = _elements.default, statement = this.getStatement(), propertyAssertion = PropertyAssertion.fromStatement(statement, context);
        if (propertyAssertion !== null) {
            comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
        }
        return comparesToTermAndPropertyRelation;
    }
    compareSubproofOrProofAssertions(subproofOrProofAssertions, context) {
        let comparesToSubproofOrProofAssertions;
        const step = this; ///
        comparesToSubproofOrProofAssertions = backwardsSome(subproofOrProofAssertions, (subproofOrProofAssertion)=>{
            const subproofOrProofAssertionComparesToStatement = subproofOrProofAssertion.compareStep(step, context);
            if (subproofOrProofAssertionComparesToStatement) {
                return true;
            }
        });
        return comparesToSubproofOrProofAssertions;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const stepString = this.getString(); ///
        context.trace(`Verifying the '${stepString}' step...`);
        const statement = this.getStatement();
        if (statement !== null) {
            const validates = this.validate(context);
            if (validates) {
                context = this.getContext();
                const unifiies = await this.unify(context);
                if (unifiies) {
                    verifies = true;
                }
            }
        } else {
            context.debug(`Unable to verify the '${stepString}' step because it is nonsense.`);
        }
        if (verifies) {
            context.debug(`...verified the '${stepString}' step.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const stepString = this.getString(); ///
        context.trace(`Validating the '${stepString}' step...`);
        const qualified = this.isQualified();
        (qualified ? _context.declare : _context.derive)((context)=>{
            (0, _context.attempt)((context)=>{
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    const referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        const signatureAssertionValidates = this.validateSignatureAssertion(context);
                        if (signatureAssertionValidates) {
                            validates = true;
                        }
                    }
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
        }, context);
        if (validates) {
            context.debug(`...validated the '${stepString}' step.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const stepString = this.getString();
        context.trace(`Validating the '${stepString}' step's statement... `);
        let statement;
        statement = this.getStatement();
        statement = statement.validate(context); ///
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${stepString}' step's statement. `);
        }
        return statementValidates;
    }
    validateReference(context) {
        let referenceValidates = false;
        if (this.reference !== null) {
            const stepString = this.getString(), referenceString = this.reference.getString();
            context.trace(`Validating the '${stepString}' step's '${referenceString}' reference... `);
            const reference = this.reference.validate(context);
            if (reference !== null) {
                this.reference = reference;
                referenceValidates = true;
            }
            if (referenceValidates) {
                context.debug(`...validated the '${stepString}' step's '${referenceString}' reference. `);
            }
        } else {
            referenceValidates = true;
        }
        return referenceValidates;
    }
    validateSignatureAssertion(context) {
        let signatureAssertionValidates = false;
        if (this.signatureAssertion !== null) {
            const stepString = this.getString(), signatureAssertionString = this.signatureAssertion.getString();
            context.trace(`Validating the '${stepString}' step's '${signatureAssertionString}' signature assertion... `);
            const signatureAssertion = this.signatureAssertion.validate(context);
            if (signatureAssertion !== null) {
                this.signatureAssertion = signatureAssertion;
                signatureAssertionValidates = true;
            }
            if (signatureAssertionValidates) {
                context.debug(`...validated the '${stepString}' step's '${signatureAssertionString}' signature assertion. `);
            }
        } else {
            signatureAssertionValidates = true;
        }
        return signatureAssertionValidates;
    }
    async unify(context) {
        let unifies = false;
        const stepString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step...`);
        const step = this; ///
        await asyncSome(_unification.unifySteps, async (unifyStep)=>{
            let statementUnifies;
            await (0, _context.reconcile)(async (context)=>{
                statementUnifies = await unifyStep(step, context);
            }, context);
            if (statementUnifies) {
                unifies = true;
                return true;
            }
        });
        if (unifies) {
            context.debug(`...unified the '${stepString}' step.`);
        }
        return unifies;
    }
    unifyWithSignatureAssertion(signatureAssertion, context) {
        let unifiesWithSignatureAssertion = false;
        const stepString = this.getString(), signatureAssertionString = signatureAssertion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${signatureAssertionString}' signature assertion...`);
        const reference = signatureAssertion.getReference(), axiom = context.findAxiomByReference(reference);
        if (axiom !== null) {
            const step = this, stepUnifies = axiom.unifyStep(step, context);
            if (stepUnifies) {
                const substitutionsCompare = signatureAssertion.compareSubstitutions(context);
                if (substitutionsCompare) {
                    unifiesWithSignatureAssertion = true;
                }
            }
        }
        if (unifiesWithSignatureAssertion) {
            context.debug(`...unified the '${stepString}' step with the '${signatureAssertionString}' signature assertion.`);
        }
        return unifiesWithSignatureAssertion;
    }
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uID0gc2lnbmF0dXJlQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZUFzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVBc3NlcnRpb247XG4gIH1cblxuICBnZXRTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKCh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkgfHwgKHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uICE9PSBudWxsKSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgaXNVbnF1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWQgPSAhcXVhbGlmaWVkO1xuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gUHJvcGVydHlBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBzdGVwID0gdGhpczsgLy8vXG5cbiAgICBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGJhY2t3YXJkc1NvbWUoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5jb21wYXJlU3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB1bmlmaWllcyA9IGF3YWl0IHRoaXMudW5pZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCk7XG5cbiAgICAocXVhbGlmaWVkID8gZGVjbGFyZSA6IGRlcml2ZSkoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTaWduYXR1cmVBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHN0YXRlbWVudC4uLiBgKTtcblxuICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25hdHVyZUFzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zaWduYXR1cmVBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4uLiBgKTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQXNzZXJ0aW9uID0gdGhpcy5zaWduYXR1cmVBc3NlcnRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zaWduYXR1cmVBc3NlcnRpb24gPSBzaWduYXR1cmVBc3NlcnRpb247XG5cbiAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGVwID0gdGhpczsgIC8vL1xuXG4gICAgYXdhaXQgYXN5bmNTb21lKHVuaWZ5U3RlcHMsIGFzeW5jICh1bmlmeVN0ZXApID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgICBhd2FpdCByZWNvbmNpbGUoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICB1bmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNpZ25hdHVyZUFzc2VydGlvbihzaWduYXR1cmVBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb25TdHJpbmcgPSBzaWduYXR1cmVBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2lnbmF0dXJlQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3RlcFVuaWZpZXMgPSBheGlvbS51bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNpZ25hdHVyZUFzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICB1bmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NpZ25hdHVyZUFzc2VydGlvblN0cmluZ30nIHNpZ25hdHVyZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2lnbmF0dXJlQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN0ZXAiLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4Iiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2lnbmF0dXJlQXNzZXJ0aW9uIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlQXNzZXJ0aW9uIiwiZ2V0U3RlcE5vZGUiLCJnZXROb2RlIiwic3RlcE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1VucXVhbGlmaWVkIiwidW5xdWFsaWZpZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiZWxlbWVudHMiLCJwcm9wZXJ0eUFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXAiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwidW5pZmlpZXMiLCJ1bmlmeSIsImRlYnVnIiwiZGVjbGFyZSIsImRlcml2ZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVTaWduYXR1cmVBc3NlcnRpb24iLCJjb21taXQiLCJyZWZlcmVuY2VTdHJpbmciLCJzaWduYXR1cmVBc3NlcnRpb25TdHJpbmciLCJ1bmlmaWVzIiwidW5pZnlTdGVwcyIsInVuaWZ5U3RlcCIsInN0YXRlbWVudFVuaWZpZXMiLCJyZWNvbmNpbGUiLCJ1bmlmeVdpdGhTaWduYXR1cmVBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNpZ25hdHVyZUFzc2VydGlvbiIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzdGVwVW5pZmllcyIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OzsyQkFiK0I7Z0NBQ087a0VBRWpCO3VFQUNNOzZCQUdBO3lCQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCLEVBQ3JDLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyx5QkFBYztNQUV4QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVC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