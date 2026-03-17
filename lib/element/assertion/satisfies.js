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
const _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
const _elements = require("../../elements");
const _context = require("../../utilities/context");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class SatisfiesAssertion extends _assertion.default {
    constructor(context, string, node, signature, reference){
        super(context, string, node);
        this.signature = signature;
        this.reference = reference;
    }
    getSignature() {
        return this.signature;
    }
    getReference() {
        return this.reference;
    }
    getSatisfiesAssertionNode() {
        const node = this.getNode(), satisfiesAssertionNode = node; ///
        return satisfiesAssertionNode;
    }
    compareSubstitutions(substitutions1, context) {
        return this.signature.compareSubstitutions(substitutions1, context);
    }
    correlateSubstitutions(substitutions1, context) {
        return this.signature.correlateSubstitutions(substitutions1, context);
    }
    validate(stated, context) {
        let satisfiesAssertion = null;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            satisfiesAssertion = validAssertion; ///
            context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
        } else {
            let validates = true;
            const signatureVerifies = this.validateSignature(stated, context);
            if (signatureVerifies) {
                const referenceVerifies = this.validateReference(stated, context);
                if (referenceVerifies) {
                    validates = true;
                }
                validates = true;
            }
            if (validates) {
                const assertion = this; ///
                satisfiesAssertion = assertion; ///
                context.addAssertion(satisfiesAssertion);
                context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
            }
        }
        return satisfiesAssertion;
    }
    validateSignature(stated, context) {
        let signatureValidates = false;
        const signature = this.signature.validate(context);
        if (signature !== null) {
            signatureValidates = true;
        }
        return signatureValidates;
    }
    validateReference(stated, context) {
        let referenceVerifies = false;
        const referenceString = this.reference.getString(), satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference...`);
        const axiom = context.findAxiomByReference(this.reference, context);
        if (axiom !== null) {
            const axiomSatisfiable = axiom.isSatisfiable();
            if (axiomSatisfiable) {
                referenceVerifies = true;
            }
        }
        if (referenceVerifies) {
            context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference.`);
        }
        return referenceVerifies;
    }
    unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
        let statementUnifies = false;
        const statementString = statement.getString(), satisfiesAssertionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);
        this.signature.validate(context);
        const axiom = context.findAxiomByReference(this.reference), satisfiable = axiom.isSatisfiable();
        if (satisfiable) {
            const axiomComparesToSignature = axiom.compareSignature(this.signature, context);
            if (axiomComparesToSignature) {
                const substitutionsB = substitutions; ///
                statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context);
                if (statementUnifies) {
                    const substitutionsA = substitutions, substitutionsCorrelate = substitutionsA.correlateSubstitutions(substitutionsB);
                    if (!substitutionsCorrelate) {
                        const substitutionsAString = substitutionsA.asString(), substitutionsBString = substitutionsB.asString();
                        context.trace(`THe signature's ${substitutionsBString} substitutions do not correlate with the unification's ${substitutionsAString} substitutions.`);
                        statementUnifies = false;
                    }
                }
            }
        }
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion.`);
        }
        return statementUnifies;
    }
    static name = "SatisfiesAssertion";
    static fromJSON(json, context) {
        let satisfiesAssertion = null;
        const { name } = json;
        if (this.name === name) {
            satisfiesAssertion = (0, _context.instantiate)((context)=>{
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                const satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
                return satisfiesAssertion;
            }, context);
        }
        return satisfiesAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2F0aXNmaWVzQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkgeyByZXR1cm4gdGhpcy5zaWduYXR1cmUuY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7IH1cblxuICBjb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7IH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIHNhdGlzZmllc0Fzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlU2lnbmF0dXJlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2Uoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVNpZ25hdHVyZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IG51bGwpIHtcbiAgICAgIHNpZ25hdHVyZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0EgPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlID0gc3Vic3RpdHV0aW9uc0EuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQik7XG5cbiAgICAgICAgICBpZiAoIXN1YnN0aXR1dGlvbnNDb3JyZWxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBU3RyaW5nID0gc3Vic3RpdHV0aW9uc0EuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCU3RyaW5nID0gc3Vic3RpdHV0aW9uc0IuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVEhlIHNpZ25hdHVyZSdzICR7c3Vic3RpdHV0aW9uc0JTdHJpbmd9IHN1YnN0aXR1dGlvbnMgZG8gbm90IGNvcnJlbGF0ZSB3aXRoIHRoZSB1bmlmaWNhdGlvbidzICR7c3Vic3RpdHV0aW9uc0FTdHJpbmd9IHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7Y29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcblxuICAgICAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU2F0aXNmaWVzQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzaWduYXR1cmUiLCJyZWZlcmVuY2UiLCJnZXRTaWduYXR1cmUiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzaWduYXR1cmVWZXJpZmllcyIsInZhbGlkYXRlU2lnbmF0dXJlIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInNpZ25hdHVyZVZhbGlkYXRlcyIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbVNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudCIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic2F0aXNmaWFibGUiLCJheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9uc0IiLCJzdWJzdGl0dXRpb25zQSIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGUiLCJzdWJzdGl0dXRpb25zQVN0cmluZyIsImFzU3RyaW5nIiwic3Vic3RpdHV0aW9uc0JTdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztrRUFQc0I7MEJBRUM7eUJBQ0s7NkJBQ2tCO3lCQUM2Qzs7Ozs7O01BRTNGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyxrQkFBUztJQUM5RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFF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