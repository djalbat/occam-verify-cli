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
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const { match, compare, correlate } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Signature extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, terms){
        super(context, string, node, lineIndex);
        this.terms = terms;
    }
    getTerms() {
        return this.terms;
    }
    getSignatureNode() {
        const node = this.getNode(), signatureNode = node; ///
        return signatureNode;
    }
    getLength() {
        const termsLength = this.terms.length, length = termsLength; ///
        return length;
    }
    getTerm(index) {
        const term = this.terms[index];
        return term;
    }
    findValidSignature(context) {
        const signatureNode = this.getSignatureNode(), signature = context.findSignatureBySignatureNode(signatureNode), validSignature = signature; ///
        return validSignature;
    }
    verify(context) {
        let verifies = false;
        const signatureString = this.getString(); ///
        context.trace(`Verifying the '${signatureString}' signature...`);
        (0, _context.attempt)((context)=>{
            const termsValidate = this.validateTerms(context);
            if (termsValidate !== null) {
                verifies = true;
            }
            if (verifies) {
                this.commit(context);
            }
        }, context);
        if (verifies) {
            context.debug(`...validated the '${signatureString}' signature.`);
        }
        return verifies;
    }
    validate(context) {
        let signature = null;
        const signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature...`);
        let validates = false;
        const validSignature = this.findValidSignature(context);
        if (validSignature) {
            signature = validSignature; ///
            context.debug(`...the '${signatureString}' signature is already valid.`);
        } else {
            const specificContext = context; ///
            context = this.getContext();
            (0, _context.attempt)((context)=>{
                const termsValidate = this.validateTerms(context);
                if (termsValidate !== null) {
                    validates = true;
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
            context = specificContext; ///
            if (validates) {
                signature = this; ///
                context.addSignature(signature);
            }
        }
        if (validates) {
            context.debug(`...validated the '${signatureString}' signature.`);
        }
        return signature;
    }
    validateTerms(context) {
        let termsValidate;
        const signatureString = this.getString(); ///
        context.trace(`Validating the '${signatureString}' signature's terms...`);
        const terms = [];
        termsValidate = this.terms.every((term)=>{
            term = term.validate(context, (term)=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (term !== null) {
                terms.push(term);
                return true;
            }
        });
        if (termsValidate) {
            this.terms = terms;
        }
        if (termsValidate) {
            context.debug(`...validated the '${signatureString}' signature's terms.`);
        }
        return termsValidate;
    }
    unifySignature(signature, context) {
        let signatureUnifies = false;
        const generalSignature = this, specificSignature = signature, generalSignatureString = generalSignature.getString(), specificSignatureString = specificSignature.getString();
        context.trace(`Unifying the '${specificSignatureString}' signature with the '${generalSignatureString}' signature...`);
        context = specificSignature.getContext();
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const generalSignatureTerms = generalSignature.getTerms(), specificSignatureTerms = specificSignature.getTerms(), generalTerms = generalSignatureTerms, specificTerms = specificSignatureTerms; ///
            signatureUnifies = match(generalTerms, specificTerms, (generalTerm, specificTerm)=>{
                let termUnifies;
                (0, _context.reconcile)((specificContext)=>{
                    termUnifies = generalTerm.unifyTerm(specificTerm, generalContext, specificContext);
                    if (termUnifies) {
                        specificContext.commit();
                    }
                }, specificContext);
                if (termUnifies) {
                    return true;
                }
            });
        }, specificContext);
        if (signatureUnifies) {
            context.debug(`...unified the '${specificSignatureString}' signature with the '${generalSignatureString}' signature.`);
        }
        return signatureUnifies;
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
    static name = "Signature";
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getLineIndex(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let signature;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, terms = termsFromSignatureNode(signatureNode, context);
                signature = new Signature(context, string, node, lineIndex, terms);
            }, context);
        }, json, context);
        return signature;
    }
    static fromSignatureString(signatureString, context) {
        let signature;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const string = signatureString, signatureNode = (0, _instantiate.instantiateSignature)(string, context);
                signature = (0, _element.signatureFromSignatureNode)(signatureNode, context);
            }, context);
        }, context);
        return signature;
    }
});
function termsFromSignatureNode(signatureNode, context) {
    const termNodes = signatureNode.getTermNodes(), terms = termNodes.map((termNode)=>{
        const term = context.findTermByTermNode(termNode);
        return term;
    });
    return terms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlLCBhYmxhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGhpcy50ZXJtcy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gdGVybXNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpbmRleF07XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRWYWxpZFNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICB2YWxpZFNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU2lnbmF0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFNpZ25hdHVyZSA9IHRoaXMuZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU2lnbmF0dXJlKSB7XG4gICAgICBzaWduYXR1cmUgPSB2YWxpZFNpZ25hdHVyZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSB0aGlzLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlID0gc2lnbmF0dXJlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZVN0cmluZyA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVTdHJpbmcgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtnZW5lcmFsU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlVGVybXMgPSBnZW5lcmFsU2lnbmF0dXJlLmdldFRlcm1zKCksXG4gICAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIGdlbmVyYWxUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmVUZXJtcywgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNUZXJtcyA9IHNwZWNpZmljU2lnbmF0dXJlVGVybXM7IC8vL1xuXG4gICAgICBzaWduYXR1cmVVbmlmaWVzID0gbWF0Y2goZ2VuZXJhbFRlcm1zLCBzcGVjaWZpY1Rlcm1zLCAoZ2VuZXJhbFRlcm0sIHNwZWNpZmljVGVybSkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICB0ZXJtVW5pZmllcyA9IGdlbmVyYWxUZXJtLnVuaWZ5VGVybShzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduYXR1cmVTdHJpbmcoc2lnbmF0dXJlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZTtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gc2lnbmF0dXJlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImNvbXBhcmUiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlNpZ25hdHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZSIsInNpZ25hdHVyZU5vZGUiLCJnZXRMZW5ndGgiLCJ0ZXJtc0xlbmd0aCIsImxlbmd0aCIsImdldFRlcm0iLCJpbmRleCIsInRlcm0iLCJmaW5kVmFsaWRTaWduYXR1cmUiLCJzaWduYXR1cmUiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwidmFsaWRTaWduYXR1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwiY29tbWl0IiwiZGVidWciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJhZGRTaWduYXR1cmUiLCJldmVyeSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHVzaCIsInVuaWZ5U2lnbmF0dXJlIiwic2lnbmF0dXJlVW5pZmllcyIsImdlbmVyYWxTaWduYXR1cmUiLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyIsImdlbmVyYWxDb250ZXh0IiwicmVjb25jaWxlIiwiZ2VuZXJhbFNpZ25hdHVyZVRlcm1zIiwic3BlY2lmaWNTaWduYXR1cmVUZXJtcyIsImdlbmVyYWxUZXJtcyIsInNwZWNpZmljVGVybXMiLCJnZW5lcmFsVGVybSIsInNwZWNpZmljVGVybSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvbXBhcmVzIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiYXJyYXkiLCJnZXRBcnJheSIsImNvbXBhcmVzIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVGVybSIsInN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZXMiLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU2lnbmF0dXJlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsImZyb21TaWduYXR1cmVTdHJpbmciLCJhYmxhdGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsIm1hcCIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MkJBQ087MEJBRVI7NkJBQ2M7eUJBQ007eUJBQ3FDO0FBRWhGLE1BQU0sRUFBRUEsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyx5QkFBYztNQUVwRCxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxnQkFBZ0JOLE1BQU0sR0FBRztRQUUvQixPQUFPTTtJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNQyxjQUFjLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLEVBQy9CQSxTQUFTRCxhQUFhLEdBQUc7UUFFL0IsT0FBT0M7SUFDVDtJQUVBQyxRQUFRQyxLQUFLLEVB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