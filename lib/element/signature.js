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
        const signature = this.validate(context);
        if (signature !== null) {
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${signatureString}' signature.`);
        }
        return verifies;
    }
    validate(context) {
        let signature = null;
        const signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature...`);
        const terms = [], termsValidate = this.validateTerms(terms, context);
        if (termsValidate) {
            this.terms = terms;
            signature = this; ///
        }
        if (signature) {
            context.debug(`...validated the '${signatureString}' signature.`);
        }
        return signature;
    }
    validateTerm(term, terms, context) {
        let termValidates = false;
        const termString = term.getString(), signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature's '${termString}' term...`);
        term = term.validate(context, (term)=>{
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
        const signature = (0, _context.instantiate)((context)=>{
            const { string } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, terms = (0, _element.termsFromSignatureNode)(signatureNode, context), signature = new Signature(context, string, node, terms);
            return signature;
        }, context);
        return signature;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVNpZ25hdHVyZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGNvbXBhcmUsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSAhPT0gbnVsbCkge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyh0ZXJtcywgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2lnbmF0dXJlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlXG4gIH1cblxuICB2YWxpZGF0ZVRlcm0odGVybSwgdGVybXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7IC8vL1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXNcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLi4uYCk7XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybSh0ZXJtLCB0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSl7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlXG4gIH1cblxuICBjb21wYXJlKHNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gc2lnbmF0dXJlLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybXNBID0gdGhpcy50ZXJtcywgIC8vL1xuICAgICAgICAgIHRlcm1zQiA9IHRlcm1zLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gbWF0Y2godGVybXNBLCB0ZXJtc0IsICh0ZXJtQSwgdGVybUIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1BLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHZhcmlhYmxlVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcblxuICAgICAgICAgICAgICAgIC8vIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgIFRlcm1TdWJzdGl0dXRpb24uZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAvLyAgdmFsaWRhdGVzLi4uXG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbXBhcmVzID0gbWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKTtcblxuICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtIiwidGVybVZhbGlkYXRlcyIsInRlcm1TdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJldmVyeSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1zQSIsInRlcm1zQiIsIm1hdGNoZXMiLCJ0ZXJtQSIsInRlcm1CIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbXBhcmVzIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29tcGFyZXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheSIsImdldEFycmF5Iiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVGVybSIsImdldFRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJpc0VxdWFsVG8iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTaWduYXR1cmUiLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MkJBQ087MEJBRVI7eUJBQ0s7NkJBQ1M7eUJBQ0U7QUFFdkMsTUFBTSxFQUFFQSxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLHlCQUFjO01BRXBELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDeEMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxnQkFBZ0JMLE1BQU0s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