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
    static name = "Step";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGVwcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGRlcml2ZSwgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzaWduYXR1cmVBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uID0gc2lnbmF0dXJlQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZUFzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVBc3NlcnRpb247XG4gIH1cblxuICBnZXRTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICgodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHx8ICh0aGlzLnNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzVW5xdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHVucXVhbGlmaWVkID0gIXF1YWxpZmllZDtcblxuICAgIHJldHVybiB1bnF1YWxpZmllZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgeyBQcm9wZXJ0eUFzc2VydGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IFByb3BlcnR5QXNzZXJ0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3Qgc3RlcCA9IHRoaXM7IC8vL1xuXG4gICAgY29tcGFyZXNUb1N1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBiYWNrd2FyZHNTb21lKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uY29tcGFyZVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgdW5pZmlpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWllcykge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpO1xuXG4gICAgKHF1YWxpZmllZCA/IGRlY2xhcmUgOiBkZXJpdmUpKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU2lnbmF0dXJlQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLiBgKTtcblxuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmVBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnNpZ25hdHVyZUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNpZ25hdHVyZUFzc2VydGlvblN0cmluZyA9IHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NpZ25hdHVyZUFzc2VydGlvblN0cmluZ30nIHNpZ25hdHVyZSBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUFzc2VydGlvbiA9IHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlQXNzZXJ0aW9uID0gc2lnbmF0dXJlQXNzZXJ0aW9uO1xuXG4gICAgICAgIHNpZ25hdHVyZUFzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NpZ25hdHVyZUFzc2VydGlvblN0cmluZ30nIHNpZ25hdHVyZSBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RlcCA9IHRoaXM7ICAvLy9cblxuICAgIGF3YWl0IGFzeW5jU29tZSh1bmlmeVN0ZXBzLCBhc3luYyAodW5pZnlTdGVwKSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgICAgYXdhaXQgcmVjb25jaWxlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgdW5pZmllcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNTb21lIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYmFja3dhcmRzU29tZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU3RlcCIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzaWduYXR1cmVBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTaWduYXR1cmVBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1VucXVhbGlmaWVkIiwidW5xdWFsaWZpZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiZWxlbWVudHMiLCJwcm9wZXJ0eUFzc2VydGlvbiIsImZyb21TdGF0ZW1lbnQiLCJjb21wYXJlU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJjb21wYXJlc1RvU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXAiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwidW5pZmlpZXMiLCJ1bmlmeSIsImRlYnVnIiwiZGVjbGFyZSIsImRlcml2ZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2lnbmF0dXJlQXNzZXJ0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVTaWduYXR1cmVBc3NlcnRpb24iLCJjb21taXQiLCJyZWZlcmVuY2VTdHJpbmciLCJzaWduYXR1cmVBc3NlcnRpb25TdHJpbmciLCJ1bmlmaWVzIiwidW5pZnlTdGVwcyIsInVuaWZ5U3RlcCIsInN0YXRlbWVudFVuaWZpZXMiLCJyZWNvbmNpbGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OzsyQkFiK0I7Z0NBQ087a0VBRWpCO3VFQUNNOzZCQUdBO3lCQUN5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCLEVBQ3JDLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyx5QkFBYztNQUV4QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFjO0lBQ3JELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQixDQUFFO1FBQ3RGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFeEMsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBRyxjQUFjO1FBQ1osTUFBTVAsT0FBTyxJQUFJLENBQUNRLE9BQU8sSUFDbkJDLFdBQVdULE1BQU8sR0FBRztRQUUzQixPQUFPUztJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNUixZQUFZLElBQUksQ0FBQ1MsWUFBWSxJQUM3QkMsZ0JBQWdC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