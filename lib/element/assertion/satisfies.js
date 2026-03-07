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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zYXRpc2ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTYXRpc2ZpZXNBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlLCByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNhdGlzZmllc0Fzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc2lnbmF0dXJlLCByZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnNpZ25hdHVyZS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBzYXRpc2ZpZXNBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTaWduYXR1cmUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgICBzaWduYXR1cmVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpbm8ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGF4aW9tU2F0aXNmaWFibGUgPSBheGlvbS5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChheGlvbVNhdGlzZmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlubydzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdGhpcy5zaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gYXhpb20uaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9ucztcblxuICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgICBjb25zdCBheGlvbUNvbXBhcmVzVG9TaWduYXR1cmUgPSBheGlvbS5jb21wYXJlU2lnbmF0dXJlKHRoaXMuc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQiA9IHN1YnN0aXR1dGlvbnM7IC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXhpb20udW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQSA9IHN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGUgPSBzdWJzdGl0dXRpb25zQS5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnNCKTtcblxuICAgICAgICAgIGlmICghc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0FTdHJpbmcgPSBzdWJzdGl0dXRpb25zQS5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uc0JTdHJpbmcgPSBzdWJzdGl0dXRpb25zQi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUSGUgc2lnbmF0dXJlJ3MgJHtzdWJzdGl0dXRpb25zQlN0cmluZ30gc3Vic3RpdHV0aW9ucyBkbyBub3QgY29ycmVsYXRlIHdpdGggdGhlIHVuaWZpY2F0aW9uJ3MgJHtzdWJzdGl0dXRpb25zQVN0cmluZ30gc3Vic3RpdHV0aW9ucy5gKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTYXRpc2ZpZXNBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tSlNhdGlzZmllc0Fzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IG5ldyBTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzaWduYXR1cmUsIHJlZmVyZW5jZSk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTYXRpc2ZpZXNBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInNpZ25hdHVyZSIsInJlZmVyZW5jZSIsImdldFNpZ25hdHVyZSIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwic2F0aXNmaWVzQXNzZXJ0aW9uTm9kZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmFsaWRhdGVTaWduYXR1cmUiLCJyZWZlcmVuY2VWZXJpZmllcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwic2lnbmF0dXJlVmFsaWRhdGVzIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tU2F0aXNmaWFibGUiLCJpc1NhdGlzZmlhYmxlIiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50Iiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzYXRpc2ZpYWJsZSIsImF4aW9tQ29tcGFyZXNUb1NpZ25hdHVyZSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zQiIsInN1YnN0aXR1dGlvbnNBIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZSIsInN1YnN0aXR1dGlvbnNBU3RyaW5nIiwiYXNTdHJpbmciLCJzdWJzdGl0dXRpb25zQlN0cmluZyIsInRvSlNPTiIsIm5hbWUiLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImluc3RhbnRpYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2lnbmF0dXJlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIiwicmVmZXJlbmNlRnJvbUpTYXRpc2ZpZXNBc3NlcnRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFT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