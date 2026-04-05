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
    constructor(context, string, node, lineIndex, statement, reference, satisfiesAssertion){
        super(context, string, node, lineIndex, statement);
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
        const qualified = this.isQualified();
        (qualified ? _context.declare : _context.derive)((context)=>{
            (0, _context.attempt)((context)=>{
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    const referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        const satisfiesAssertionValidates = this.validateSatisfiesAssertion(context);
                        if (satisfiesAssertionValidates) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1VucXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZCA9ICFxdWFsaWZpZWQ7XG5cbiAgICByZXR1cm4gdW5xdWFsaWZpZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgUHJvcGVydHlBc3NlcnRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBQcm9wZXJ0eUFzc2VydGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbnN0IHN0ZXAgPSB0aGlzOyAvLy9cblxuICAgIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gYmFja3dhcmRzU29tZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50ID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmNvbXBhcmVTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IHVuaWZpaWVzID0gYXdhaXQgdGhpcy51bmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmlpZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKTtcblxuICAgIChxdWFsaWZpZWQgPyBkZWNsYXJlIDogZGVyaXZlKSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RlcCA9IHRoaXM7ICAvLy9cblxuICAgIGF3YWl0IGFzeW5jU29tZSh1bmlmeVN0ZXBzLCBhc3luYyAodW5pZnlTdGVwKSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgICAgYXdhaXQgcmVjb25jaWxlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgdW5pZmllcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGVwIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImdldFN0ZXBOb2RlIiwiZ2V0Tm9kZSIsInN0ZXBOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNVbnF1YWxpZmllZCIsInVucXVhbGlmaWVkIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJQcm9wZXJ0eUFzc2VydGlvbiIsImVsZW1lbnRzIiwicHJvcGVydHlBc3NlcnRpb24iLCJmcm9tU3RhdGVtZW50IiwiY29tcGFyZVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGVwIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZ2V0Q29udGV4dCIsInVuaWZpaWVzIiwidW5pZnkiLCJkZWJ1ZyIsImRlY2xhcmUiLCJkZXJpdmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29tbWl0IiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidW5pZmllcyIsInVuaWZ5U3RlcHMiLCJ1bmlmeVN0ZXAiLCJzdGF0ZW1lbnRVbmlmaWVzIiwicmVjb25jaWxlIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcFVuaWZpZXMiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkJBYitCO2dDQUNPO2tFQUVqQjt1RUFDTTs2QkFHQTt5QkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLHFDQUFxQixFQUNyQyxFQUFFQyxhQUFhLEVBQUUsR0FBR0MseUJBQWM7TUFFeEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBYztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0IsQ0FBRTtRQUN0RixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1FBRXhDLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNG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