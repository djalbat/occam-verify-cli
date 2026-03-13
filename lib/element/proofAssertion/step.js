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
const _occamlanguages = require("occam-languages");
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
const _elements = require("../../elements");
const _unification = require("../../utilities/unification");
const _context = require("../../utilities/context");
const _statement = require("../../utilities/statement");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { asyncSome } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Step extends _proofAssertion.default {
    constructor(context, string, node, statement, reference, satisfiesAssertion){
        super(context, string, node, statement);
        this.reference = reference;
        this.satisfiesAssertion = satisfiesAssertion;
    }
    getReference() {
        return this.reference;
    }
    getSatisfiesAssertion() {
        return this.satisfiesAssertion;
    }
    getStepNode() {
        const node = this.getNode(), stepNode = node; ///
        return stepNode;
    }
    isSatisfied() {
        const satisfied = this.satisfiesAssertion !== null;
        return satisfied;
    }
    isQualified() {
        const qualified = this.reference !== null;
        return qualified;
    }
    isStated() {
        const qualified = this.isQualified(), stated = qualified; ///
        return stated;
    }
    compareTermAndPropertyRelation(term, propertyRelation, context) {
        let comparesToTermAndPropertyRelation = false;
        const statement = this.getStatement(), propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
        if (propertyAssertion !== null) {
            comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
        }
        return comparesToTermAndPropertyRelation;
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
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                const referenceValidates = this.validateReference(context);
                if (referenceValidates) {
                    const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                    if (satisfiesAssertioValidates) {
                        context.commit(this);
                        validates = true;
                    }
                }
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${stepString}' step.`);
        }
        return validates;
    }
    validateReference(context) {
        let referenceValidates = true; ///
        if (this.reference !== null) {
            const stepString = this.getString(), referenceString = this.reference.getString();
            context.trace(`Validating the '${stepString}' step's '${referenceString}' reference... `);
            const reference = this.reference.validate(context);
            if (reference === null) {
                referenceValidates = false;
            }
            if (referenceValidates) {
                context.debug(`...validated the '${stepString}' step's '${referenceString}' reference. `);
            }
        }
        return referenceValidates;
    }
    validateSatisfiesAssertion(context) {
        let satisfiesAssertionValidates = true; ///
        if (this.satisfiesAssertion !== null) {
            const stepString = this.getString(), satisfiesAssertionString = this.satisfiesAssertion.getString();
            context.trace(`Validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion... `);
            const stated = true, satisfiesAssertion = this.satisfiesAssertion.validate(stated, context);
            if (satisfiesAssertion === null) {
                satisfiesAssertionValidates = false;
            }
            if (satisfiesAssertionValidates) {
                context.debug(`...validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion. `);
            }
        }
        return satisfiesAssertionValidates;
    }
    async unify(context) {
        let unifies = false;
        const stepString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step...`);
        const statement = this.getStatement(), reference = this.getReference(), satisfiesAssertion = this.getSatisfiesAssertion();
        await (0, _context.asyncResolve)(async (context)=>{
            await asyncSome(_unification.unifyStatements, async (unifyStatement)=>{
                const statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);
                if (statementUnifies) {
                    unifies = true;
                    return true;
                }
            });
        }, context);
        if (unifies) {
            context.debug(`...unified the '${stepString}' step.`);
        }
        return unifies;
    }
    unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
        let unifiesWithSatisfiesAssertion = false;
        const stepString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);
        const reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
        if (axiom !== null) {
            const step = this, stepUnifies = axiom.unifyStep(step, context);
            if (stepUnifies) {
                const substitutionsCompare = satisfiesAssertion.compareSubstitutions(context);
                if (substitutionsCompare) {
                    unifiesWithSatisfiesAssertion = true;
                }
            }
        }
        if (unifiesWithSatisfiesAssertion) {
            context.debug(`...unified the '${stepString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
        return unifiesWithSatisfiesAssertion;
    }
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIGFzeW5jUmVzb2x2ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuY29uc3QgeyBhc3luY1NvbWUgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmllZCgpIHtcbiAgICBjb25zdCBzYXRpc2ZpZWQgPSAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllZDtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHN0YXRlZCA9IHF1YWxpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgdW5pZmlpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuXG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKTtcblxuICAgIGF3YWl0IGFzeW5jUmVzb2x2ZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgYXdhaXQgYXN5bmNTb21lKHVuaWZ5U3RhdGVtZW50cywgYXN5bmMgKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHVuaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RlcCIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwidW5pZmlpZXMiLCJ1bmlmeSIsImRlYnVnIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyIsInZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29tbWl0IiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidW5pZmllcyIsImFzeW5jUmVzb2x2ZSIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYc0M7dUVBRVg7MEJBRUo7NkJBQ1M7eUJBQ007MkJBQ1M7Ozs7OztBQUUvQyxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFM0MsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBYztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLENBQUU7UUFDM0UsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxN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