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
            (0, _context.literally)((context)=>{
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateSatisfiesAssertion)(string, context), node = definedAssertionNode, signature = (0, _element.signatureFromJSatisfiesAssertionNode)(definedAssertionNode, context), reference = (0, _element.referenceFromJSatisfiesAssertionNode)(definedAssertionNode, context);
                context = null;
                satisfiesAssertion = new SatisfiesAssertion(context, string, node, signature, reference);
            }, context);
        }
        return satisfiesAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBzYXRpc2ZpZXNBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgICBzaWduYXR1cmVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUgPSBheGlvbS5jb21wYXJlU2lnbmF0dXJlKHRoaXMuc2lnbmF0dXJlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBheGlvbS51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNBID0gc3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSA9IHN1YnN0aXR1dGlvbnNBLmNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uc0IpO1xuXG4gICAgICAgICAgaWYgKCFzdWJzdGl0dXRpb25zQ29ycmVsYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQVN0cmluZyA9IHN1YnN0aXR1dGlvbnNBLmFzU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zQlN0cmluZyA9IHN1YnN0aXR1dGlvbnNCLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRIZSBzaWduYXR1cmUncyAke3N1YnN0aXR1dGlvbnNCU3RyaW5nfSBzdWJzdGl0dXRpb25zIGRvIG5vdCBjb3JyZWxhdGUgd2l0aCB0aGUgdW5pZmljYXRpb24ncyAke3N1YnN0aXR1dGlvbnNBU3RyaW5nfSBzdWJzdGl0dXRpb25zLmApO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNhdGlzZmllc0Fzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21KU2F0aXNmaWVzQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gbmV3IFNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHNpZ25hdHVyZSwgcmVmZXJlbmNlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNhdGlzZmllc0Fzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic2lnbmF0dXJlIiwicmVmZXJlbmNlIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInZhbGlkYXRlIiwic3RhdGVkIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsInJlZmVyZW5jZVZlcmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJzaWduYXR1cmVWYWxpZGF0ZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21TYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnQiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNhdGlzZmlhYmxlIiwiYXhpb21Db21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnNCIiwic3Vic3RpdHV0aW9uc0EiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlIiwic3Vic3RpdHV0aW9uc0FTdHJpbmciLCJhc1N0cmluZyIsInN1YnN0aXR1dGlvbnNCU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImxpdGVyYWxseSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJyZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2tFQVBzQjswQkFFQzt5QkFDRzs2QkFDb0I7eUJBQzZDOzs7Ozs7TUFFM0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8s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