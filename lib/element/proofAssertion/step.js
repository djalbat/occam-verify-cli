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
const _unification = require("../../process/unification");
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
            const qualified = this.isQualified(), stated = qualified; ///
            await (stated ? _context.declare : _context.derive)(async (context)=>{
                const validates = this.validate(context);
                if (validates) {
                    context = this.getContext();
                    const unifiies = await this.unify(context);
                    if (unifiies) {
                        verifies = true;
                    }
                }
            }, context);
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
            let stepUnifies;
            await (0, _context.reconcile)(async (context)=>{
                stepUnifies = await unifyStep(step, context);
            }, context);
            if (stepUnifies) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZXJpdmUsIGRlY2xhcmUsIGF0dGVtcHQsIHJlY29uY2lsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IGFzeW5jU29tZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNpZ25hdHVyZUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uID0gc2lnbmF0dXJlQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZUFzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVBc3NlcnRpb247XG4gIH1cblxuICBnZXRTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICgodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHx8ICh0aGlzLnNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzVW5xdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHVucXVhbGlmaWVkID0gIXF1YWxpZmllZDtcblxuICAgIHJldHVybiB1bnF1YWxpZmllZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IFByb3BlcnR5QXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3Qgc3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgICAgYXdhaXQgKHN0YXRlZCA/IGRlY2xhcmUgOiBkZXJpdmUpKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICAgIGNvbnN0IHVuaWZpaWVzID0gYXdhaXQgdGhpcy51bmlmeShjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh1bmlmaWllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZUFzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHN0YXRlbWVudC4uLiBgKTtcblxuICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25hdHVyZUFzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zaWduYXR1cmVBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4uLiBgKTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQXNzZXJ0aW9uID0gdGhpcy5zaWduYXR1cmVBc3NlcnRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zaWduYXR1cmVBc3NlcnRpb24gPSBzaWduYXR1cmVBc3NlcnRpb247XG5cbiAgICAgICAgc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2lnbmF0dXJlQXNzZXJ0aW9uU3RyaW5nfScgc2lnbmF0dXJlIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGVwID0gdGhpczsgIC8vL1xuXG4gICAgYXdhaXQgYXN5bmNTb21lKHVuaWZ5U3RlcHMsIGFzeW5jICh1bmlmeVN0ZXApID0+IHtcbiAgICAgIGxldCBzdGVwVW5pZmllcztcblxuICAgICAgYXdhaXQgcmVjb25jaWxlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gYXdhaXQgdW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICB1bmlmaWVzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGVwIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzaWduYXR1cmVBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTaWduYXR1cmVBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1VucXVhbGlmaWVkIiwidW5xdWFsaWZpZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiZWxlbWVudHMiLCJwcm9wZXJ0eUFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXAiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiZGVjbGFyZSIsImRlcml2ZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZ2V0Q29udGV4dCIsInVuaWZpaWVzIiwidW5pZnkiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVTaWduYXR1cmVBc3NlcnRpb24iLCJjb21taXQiLCJyZWZlcmVuY2VTdHJpbmciLCJzaWduYXR1cmVBc3NlcnRpb25TdHJpbmciLCJ1bmlmaWVzIiwidW5pZnlTdGVwcyIsInVuaWZ5U3RlcCIsInN0ZXBVbmlmaWVzIiwicmVjb25jaWxlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkJBYitCO2dDQUNPO2tFQUVqQjt1RUFDTTs2QkFHQTt5QkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLHFDQUFxQixFQUNyQyxFQUFFQyxhQUFhLEVBQUUsR0FBR0MseUJBQWM7TUFFeEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBYztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsQ0FBRTtRQUN2RixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDO1FBRXpDLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7SUFDaEM7SUFFQUcsY0FBYztRQUNaLE1BQU1QLE9BQU8sSUFBSSxDQUFDUSxPQUFPLElBQ25CQyxXQUFXVCxNQUFPLEdBQUc7UUFFM0IsT0FBT1M7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTVIsWUFBWSxJ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