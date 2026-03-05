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
const _necessary = require("necessary");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const { match, compare, correlate } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Signature extends _occamlanguages.Element {
    constructor(context, string, node, terms){
        super(context, string, node);
        this.terms = terms;
    }
    getTerms() {
        return this.terms;
    }
    getSignatureNode() {
        const node = this.getNode(), signatureNode = node; ///
        return signatureNode;
    }
    verify(context) {
        let verifies = false;
        const signatureString = this.getString(); ///
        context.trace(`Verifying the '${signatureString}' signature...`);
        const validates = this.validate(context);
        if (validates) {
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${signatureString}' signature.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature...`);
        const terms = [], termsValidate = this.validateTerms(terms, context);
        if (termsValidate) {
            this.terms = terms;
            validates = true;
        }
        if (validates) {
            context.debug(`...validated the '${signatureString}' signature.`);
        }
        return validates;
    }
    validateTerm(term, terms, context) {
        let termValidates = false;
        const termString = term.getString(), signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature's '${termString}' term...`);
        term = term.validate(context, ()=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (term !== null) {
            terms.push(term);
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${signatureString}' signature's '${termString}' term.`);
        }
        return termValidates;
    }
    validateTerms(terms, context) {
        let termsValidate;
        const signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature's terms...`);
        termsValidate = terms.every((term)=>{
            const termValidates = this.validateTerm(term, terms, context);
            if (termValidates) {
                return true;
            }
        });
        if (termsValidate) {
            context.debug(`...validated the '${signatureString}' signature's terms.`);
        }
        return termsValidate;
    }
    compare(signature, substitutions, generalContext, specificContext) {
        const terms = signature.getTerms(), termsA = this.terms, termsB = terms, matches = match(termsA, termsB, (termA, termB)=>{
            const term = termB, context = generalContext, variable = variableFromTerm(term, context);
            if (variable !== null) {
                const term = termA, termType = term.getType(), variableType = variable.getType(), termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);
                if (termTypeEqualToOrSubTypeOfVariableType) {
                    debugger;
                    // synthetically((context) => {
                    //   const { TermSubstitution } = elements;
                    //
                    //   TermSubstitution.fromTermAndVariable(term, variable, context);
                    //  validates...
                    // });
                    return true;
                }
            }
        }), compares = matches; ///
        return compares;
    }
    compareSubstitutions(substitutions, context) {
        let substitutionsCompares = false;
        const signatureString = this.getString(), substitutionsString = substitutions.asString();
        context.trace(`Comparing the '${substitutionsString}' substitutions against the '${signatureString}' signature...`);
        const array = substitutions.getArray(), compares = compare(this.terms, array, (term, substitution)=>{
            const substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
            if (substitutionTermEqualToTerm) {
                return true;
            }
        });
        if (compares) {
            substitutionsCompares = true;
        }
        if (substitutionsCompares) {
            context.debug(`...compared the '${substitutionsString}' substitutions against the '${signatureString}' signature.`);
        }
        return substitutionsCompares;
    }
    correlateSubstitutions(substitutions, context) {
        let substitutionsCorrelates = false;
        const signatureString = this.getString(), substitutionsString = substitutions.asString();
        context.trace(`Correlating the '${substitutionsString}' substitutions against the '${signatureString}' signature...`);
        const array = substitutions.getArray(), correlates = correlate(this.terms, array, (term, substitution)=>{
            const substitutionTerm = substitution.getTerm(), substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);
            if (substitutionTermEqualToTerm) {
                return true;
            }
        });
        if (correlates) {
            substitutionsCorrelates = true;
        }
        if (substitutionsCorrelates) {
            context.debug(`...correlated the '${substitutionsString}' substitutions against the '${signatureString}' signature.`);
        }
        return substitutionsCorrelates;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Signature";
    static fromJSON(json, context) {
        const signature = (0, _context.literally)((context)=>{
            const { string } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, terms = (0, _element.termsFromSignatureNode)(signatureNode, context), signature = new Signature(context, string, node, terms);
            return signature;
        }, context);
        return signature;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTaWduYXR1cmUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tU2lnbmF0dXJlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG1hdGNoLCBjb21wYXJlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2lnbmF0dXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG5cbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHRlcm0sIHRlcm1zLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXNcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLi4uYCk7XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybSh0ZXJtLCB0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSl7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlXG4gIH1cblxuICBjb21wYXJlKHNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gc2lnbmF0dXJlLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXNBID0gdGhpcy50ZXJtcywgIC8vL1xuICAgICAgICAgIHRlcm1zQiA9IHRlcm1zLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gbWF0Y2godGVybXNBLCB0ZXJtc0IsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1BLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcblxuICAgICAgICAgICAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgIFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAvLyAgdmFsaWRhdGVzLi4uXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbXBhcmVzID0gbWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImNvbXBhcmUiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlNpZ25hdHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZSIsInNpZ25hdHVyZU5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwidmFsaWRhdGVUZXJtIiwidGVybSIsInRlcm1WYWxpZGF0ZXMiLCJ0ZXJtU3RyaW5nIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJwdXNoIiwiZXZlcnkiLCJzaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtc0EiLCJ0ZXJtc0IiLCJtYXRjaGVzIiwidGVybUEiLCJ0ZXJtQiIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJjb21wYXJlcyIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvbXBhcmVzIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiYXJyYXkiLCJnZXRBcnJheSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRlcm0iLCJnZXRUZXJtIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlcyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVNpZ25hdHVyZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZ3QjsyQkFDTzswQkFFUjt5QkFDRzs2QkFDVzt5QkFDRTtBQUV2QyxNQUFNLEVBQUVBLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MseUJBQWM7TUFFcEQsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUN4QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGdCQUFnQkwsTUFBTSxHQUFHO1FBRS9C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