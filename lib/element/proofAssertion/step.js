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
    compareTermAndPropertyRelation(term, propertyRelation, context) {
        let comparesToTermAndPropertyRelation = false;
        const { PropertyAssertion } = _elements.default, statement = this.getStatement(), propertyAssertion = PropertyAssertion.fromStatement(statement, context);
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
        const statement = this.getStatement(), reference = this.getReference(), satisfiesAssertion = this.getSatisfiesAssertion();
        await asyncSome(_unification.unifyStatements, async (unifyStatement)=>{
            let statementUnifies;
            await (0, _context.reconcile)(async (context)=>{
                statementUnifies = await unifyStatement(statement, reference, satisfiesAssertion, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IFByb3BlcnR5QXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCB1bmlmaWllcyA9IGF3YWl0IHRoaXMudW5pZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuaWZpaWVzKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBkZXJpdmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSB0aGlzLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCk7XG5cbiAgICBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGF0ZW1lbnRzLCBhc3luYyAodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgICBhd2FpdCByZWNvbmNpbGUoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHVuaWZpZXMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RlcCIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiZWxlbWVudHMiLCJnZXRTdGF0ZW1lbnQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwidW5pZmlpZXMiLCJ1bmlmeSIsImRlYnVnIiwiZGVyaXZlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyIsInZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwiY29tbWl0IiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwidW5pZmllcyIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInJlY29uY2lsZSIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYc0M7a0VBRWpCO3VFQUNNOzZCQUdLO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFM0MsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBYztJQUNyRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCLENBQUU7UUFDM0UsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7SUFDNUI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQ0Ysa0JBQWtCO0lBQ2hDO0lBRUFHLGNBQWM7UUFDWixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsV0FBV1IsTUFBTyxHQUFHO1FBRTNCLE9BQU9RO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLFlBQWEsSUFBSSxDQUFDUCxrQkFBa0IsS0FBSztRQUUvQyxPQUFPTztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQyxZQUFhLElBQUksQ0FBQ1YsU0FBUyxL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