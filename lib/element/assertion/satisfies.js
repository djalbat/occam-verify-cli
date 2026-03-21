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
    validate(context) {
        let satisfiesAssertion = null;
        const satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            satisfiesAssertion = validAssertion; ///
            context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
        } else {
            let validates = true;
            const signatureVerifies = this.validateSignature(context);
            if (signatureVerifies) {
                const referenceVerifies = this.validateReference(context);
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
    validateSignature(context) {
        let signatureValidates = false;
        const signature = this.signature.validate(context);
        if (signature !== null) {
            signatureValidates = true;
        }
        return signatureValidates;
    }
    validateReference(context) {
        let referenceVerifies = false;
        const referenceString = this.reference.getString(), satisfiesAssertionString = this.getString(); ///
        context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference...`);
        const axiom = context.findAxiomByReference(this.reference);
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
            (0, _context.instantiate)((context)=>{
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
            }, context);
        }
        return satisfiesAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), satisfiesAssertion = (0, _element.satisfiesAssertionFromStatementNode)(statementNode, context);
        return satisfiesAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUsIHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSwgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uKSB7XG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgc2F0aXNmaWVzQXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWZXJpZmllcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuc2lnbmF0dXJlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgICAgc2lnbmF0dXJlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0EgPSBzdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQ29ycmVsYXRlID0gc3Vic3RpdHV0aW9uc0EuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zQik7XG5cbiAgICAgICAgICBpZiAoIXN1YnN0aXR1dGlvbnNDb3JyZWxhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBU3RyaW5nID0gc3Vic3RpdHV0aW9uc0EuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNCU3RyaW5nID0gc3Vic3RpdHV0aW9uc0IuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFjZShgVEhlIHNpZ25hdHVyZSdzICR7c3Vic3RpdHV0aW9uc0JTdHJpbmd9IHN1YnN0aXR1dGlvbnMgZG8gbm90IGNvcnJlbGF0ZSB3aXRoIHRoZSB1bmlmaWNhdGlvbidzICR7c3Vic3RpdHV0aW9uc0FTdHJpbmd9IHN1YnN0aXR1dGlvbnMuYCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2F0aXNmaWVzQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7Y29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJzaWduYXR1cmVWYWxpZGF0ZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNhdGlzZmlhYmxlIiwiYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJpbnN0YW50aWF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsInJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2tFQVBzQjswQkFFQzt5QkFDSzs2QkFDa0I7eUJBQ2tGOzs7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