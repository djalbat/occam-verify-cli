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
    getStatementNode() {
        const statement = this.getStatement(), statementNode = statement.getNode();
        return statementNode;
    }
    isSatisfied() {
        const satisfied = this.satisfiesAssertion !== null;
        return satisfied;
    }
    isQualified() {
        const qualified = this.reference !== null;
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
        (0, _context.derive)((context)=>{
            (0, _context.attempt)((context)=>{
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    const referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        const satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                        if (satisfiesAssertioValidates) {
                            validates = true;
                        }
                    }
                }
                if (validates) {
                    context.commit(this);
                }
            }, context);
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
    validateSatisfiesAssertion(context) {
        let satisfiesAssertionValidates = true; ///
        if (this.satisfiesAssertion !== null) {
            const stepString = this.getString(), satisfiesAssertionString = this.satisfiesAssertion.getString();
            context.trace(`Validating the '${stepString}' step's '${satisfiesAssertionString}' satisfies assertion... `);
            const satisfiesAssertion = this.satisfiesAssertion.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN0ZXBOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzdGVwTm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzVW5xdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHVucXVhbGlmaWVkID0gIXF1YWxpZmllZDtcblxuICAgIHJldHVybiB1bnF1YWxpZmllZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IFByb3BlcnR5QXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3Qgc3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgdW5pZmlpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgZGVyaXZlKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLiBgKTtcblxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLiBgKTtcblxuICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gPT09IG51bGwpIHtcbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0ZXAgPSB0aGlzOyAgLy8vXG5cbiAgICBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGVwcywgYXN5bmMgKHVuaWZ5U3RlcCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICAgIGF3YWl0IHJlY29uY2lsZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgdW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHVuaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RlcCIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzVW5xdWFsaWZpZWQiLCJ1bnF1YWxpZmllZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiUHJvcGVydHlBc3NlcnRpb24iLCJlbGVtZW50cyIsInByb3BlcnR5QXNzZXJ0aW9uIiwiZnJvbVN0YXRlbWVudCIsImNvbXBhcmVTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RlcCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImdldENvbnRleHQiLCJ1bmlmaWllcyIsInVuaWZ5IiwiZGVidWciLCJkZXJpdmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzIiwidmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJjb21taXQiLCJyZWZlcmVuY2VTdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ1bmlmaWVzIiwidW5pZnlTdGVwcyIsInVuaWZ5U3RlcCIsInN0YXRlbWVudFVuaWZpZXMiLCJyZWNvbmNpbGUiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzdGVwVW5pZmllcyIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OzsyQkFiK0I7Z0NBQ087a0VBRWpCO3VFQUNNOzZCQUdBO3lCQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCLEVBQ3JDLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyx5QkFBYztNQUV4QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFjO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsQ0FBRTtRQUMzRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7SUFDaEM7SUFFQUcsY0FBYztRQUNaLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxX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