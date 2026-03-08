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
            const referenceValidates = this.validateReference(context);
            if (referenceValidates) {
                const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                if (satisfiesAssertioValidates) {
                    const statementValidates = this.validateStatement(context);
                    if (statementValidates) {
                        this.setContext(context);
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
        await (0, _context.asyncLiminally)(async (context)=>{
            await asyncSome(_unification.unifyStatements, async (unifyStatement)=>{
                const statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);
                if (statementUnifies) {
                    context.commit();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIGFzeW5jTGltaW5hbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGFzeW5jU29tZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN0ZXBOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB1bmlmaWllcyA9IGF3YWl0IHRoaXMudW5pZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKTtcblxuICAgIGF3YWl0IGFzeW5jTGltaW5hbGx5KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGF0ZW1lbnRzLCBhc3luYyAodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHVuaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RlcCIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwidW5pZmlpZXMiLCJ1bmlmeSIsImRlYnVnIiwiYXR0ZW1wdCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInVuaWZpZXMiLCJhc3luY0xpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsImNvbW1pdCIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYc0M7dUVBRVg7MEJBRUo7NkJBQ1M7eUJBQ1E7MkJBQ087Ozs7OztBQUUvQyxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFM0MsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBYztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVD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