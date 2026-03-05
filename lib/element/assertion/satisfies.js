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
    compareSubstitutions(substitutions, context) {
        return this.signature.compareSubstitutions(substitutions, context);
    }
    correlateSubstitutions(substitutions, context) {
        return this.signature.correlateSubstitutions(substitutions, context);
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
        const signatureVerifies = this.signature.validate(context);
        return signatureVerifies;
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
            let substitutions;
            substitutions = [];
            const axiomComparesToSignature = axiom.compareSignature(this.signature, substitutions, context);
            if (axiomComparesToSignature) {
                const substitutionsB = substitutions; ///
                substitutions = [];
                statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
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
    toJSON() {
        const { name } = this.constructor, string = this.getString(), json = {
            name,
            string
        };
        return json;
    }
    static name = "SatisfiesAssertion";
    static fromJSON(json, context) {
        let satisfiesAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.literally)((context)=>{
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
            }, context);
        }
        return satisfiesAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBzYXRpc2ZpZXNBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXhpb21TYXRpc2ZpYWJsZSA9IGF4aW9tLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKGF4aW9tU2F0aXNmaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW5vJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB0aGlzLnNpZ25hdHVyZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGxldCBzdWJzdGl0dXRpb25zO1xuXG4gICAgICBzdWJzdGl0dXRpb25zID0gW107XG5cbiAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSA9IGF4aW9tLmNvbXBhcmVTaWduYXR1cmUodGhpcy5zaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNCID0gc3Vic3RpdHV0aW9uczsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwic3RhdGVkIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNhdGlzZmlhYmxlIiwiYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwidG9KU09OIiwibmFtZSIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2tFQVBzQjswQkFFQzt5QkFDRzs2QkFDb0I7eUJBQzZDOzs7Ozs7TUFFM0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxF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