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
        let referenceValidates = true;
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
            if (satisfiesAssertion !== null) {
                satisfiesAssertionValidates = true;
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
        const statement = this.getStatement(), reference = this.getReference(), satisfiesAssertion = this.getSatisfiesAssertion(), statementUnifies = await (0, _context.asyncLiminally)(async (context)=>{
            const statementUnifies = await asyncSome(_unification.unifyStatements, async (unifyStatement)=>{
                const statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);
                if (statementUnifies) {
                    return true;
                }
            });
            return statementUnifies;
        }, context);
        if (statementUnifies) {
            unifies = true;
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIGFzeW5jTGltaW5hbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5jb25zdCB7IGFzeW5jU29tZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN0ZXBOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB1bmlmaWllcyA9IGF3YWl0IHRoaXMudW5pZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgYXN5bmNMaW1pbmFsbHkoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGF0ZW1lbnRzLCBhc3luYyAodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICB1bmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGVwIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImdldFN0ZXBOb2RlIiwiZ2V0Tm9kZSIsInN0ZXBOb2RlIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJnZXRTdGF0ZW1lbnQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImdldENvbnRleHQiLCJ1bmlmaWllcyIsInVuaWZ5IiwiZGVidWciLCJhdHRlbXB0IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyIsInZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJzZXRDb250ZXh0IiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidW5pZmllcyIsInN0YXRlbWVudFVuaWZpZXMiLCJhc3luY0xpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVhzQzt1RUFFWDswQkFFSjs2QkFDUzt5QkFDUTsyQkFDTzs7Ozs7O0FBRS9DLE1BQU0sRUFBRUEsU0FBUyxFQUFF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