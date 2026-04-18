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
    constructor(context, string, node, breakPoint, statement, reference, signatureAssertion){
        super(context, string, node, breakPoint, statement);
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
        const qualified = this.isQualified(), stated = qualified; ///
        (stated ? _context.declare : _context.derive)((context)=>{
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
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2lnbmF0dXJlQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zaWduYXR1cmVBc3NlcnRpb24gPSBzaWduYXR1cmVBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN0ZXBOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKCh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkgfHwgKHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uICE9PSBudWxsKSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgaXNVbnF1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgdW5xdWFsaWZpZWQgPSAhcXVhbGlmaWVkO1xuXG4gICAgcmV0dXJuIHVucXVhbGlmaWVkO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IFByb3BlcnR5QXNzZXJ0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gUHJvcGVydHlBc3NlcnRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBzdGVwID0gdGhpczsgLy8vXG5cbiAgICBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGJhY2t3YXJkc1NvbWUoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5jb21wYXJlU3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB1bmlmaWllcyA9IGF3YWl0IHRoaXMudW5pZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIChzdGF0ZWQgPyBkZWNsYXJlIDogZGVyaXZlKSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZUFzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4gYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmF0dXJlQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzaWduYXR1cmVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnNpZ25hdHVyZUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzaWduYXR1cmVBc3NlcnRpb25TdHJpbmd9JyBzaWduYXR1cmUgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmVBc3NlcnRpb24gPSB0aGlzLnNpZ25hdHVyZUFzc2VydGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNpZ25hdHVyZUFzc2VydGlvbiA9IHNpZ25hdHVyZUFzc2VydGlvbjtcblxuICAgICAgICBzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzaWduYXR1cmVBc3NlcnRpb25TdHJpbmd9JyBzaWduYXR1cmUgYXNzZXJ0aW9uLiBgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0ZXAgPSB0aGlzOyAgLy8vXG5cbiAgICBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGVwcywgYXN5bmMgKHVuaWZ5U3RlcCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICAgIGF3YWl0IHJlY29uY2lsZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgdW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHVuaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlN0ZXAiLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNpZ25hdHVyZUFzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNpZ25hdHVyZUFzc2VydGlvbiIsImdldFN0ZXBOb2RlIiwiZ2V0Tm9kZSIsInN0ZXBOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzVW5xdWFsaWZpZWQiLCJ1bnF1YWxpZmllZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJlbGVtZW50cyIsInByb3BlcnR5QXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudCIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RlcCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImdldENvbnRleHQiLCJ1bmlmaWllcyIsInVuaWZ5IiwiZGVidWciLCJzdGF0ZWQiLCJkZWNsYXJlIiwiZGVyaXZlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZUFzc2VydGlvbiIsImNvbW1pdCIsInJlZmVyZW5jZVN0cmluZyIsInNpZ25hdHVyZUFzc2VydGlvblN0cmluZyIsInVuaWZpZXMiLCJ1bmlmeVN0ZXBzIiwidW5pZnlTdGVwIiwic3RhdGVtZW50VW5pZmllcyIsInJlY29uY2lsZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzJCQWIrQjtnQ0FDTztrRUFFakI7dUVBQ007NkJBR0E7eUJBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxxQ0FBcUIsRUFDckMsRUFBRUMsYUFBYSxFQUFFLEdBQUdDLHlCQUFjO01BRXhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQWM7SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLENBQUU7UUFDdkYsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO0lBQ2hDO0lBRUFHLGNBQWM7UUFDWixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsV0FBV1QsTUFBTyxHQUFHO1FBRTNCLE9BQU9TO0lBQ1Q7SUFFQUMsbUJBQW1CO1FB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