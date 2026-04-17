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
const { match } = _necessary.arrayUtilities;
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
    isEqualTo(signature) {
        const signatureNode = signature.getNode(), signatureNodeMatches = this.matchSignatureNode(signatureNode), equalTo = signatureNodeMatches; ///
        return equalTo;
    }
    matchSignatureNode(signatureNode) {
        const node = signatureNode, nodeMatches = this.matchNode(node), signatureNodeMatches = nodeMatches; ///
        return signatureNodeMatches;
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
    unifySignature(signature, generalContext, specificContext) {
        let signatureUnifies;
        const context = specificContext, generalSignature = this, specificSignature = signature, generalSignatureString = generalSignature.getString(), specificSignatureString = specificSignature.getString();
        context.trace(`Unifying the '${specificSignatureString}' signature with the '${generalSignatureString}' signature...`);
        const generalSignatureTerms = generalSignature.getTerms(), specificSignatureTerms = specificSignature.getTerms(), generalSignatureContext = generalSignature.getContext(), specificSignatureContext = specificSignature.getContext(), generalTerms = generalSignatureTerms, specificTerms = specificSignatureTerms, generalContexts = [
            generalSignatureContext,
            generalContext
        ], specificContexts = [
            specificSignatureContext,
            specificContext
        ];
        (0, _context.join)((generalContext)=>{
            (0, _context.join)((specificContext)=>{
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
            }, ...specificContexts);
        }, ...generalContexts);
        if (signatureUnifies) {
            context.debug(`...unified the '${specificSignatureString}' signature with the '${generalSignatureString}' signature.`);
        }
        return signatureUnifies;
    }
    static name = "Signature";
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBqb2luLCBhYmxhdGUsIGF0dGVtcHQsIHJlY29uY2lsZSwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRoaXMudGVybXMubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9IHRlcm1zTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8oc2lnbmF0dXJlKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNpZ25hdHVyZS5nZXROb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc2lnbmF0dXJlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICB2YWxpZFNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU2lnbmF0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFNpZ25hdHVyZSA9IHRoaXMuZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU2lnbmF0dXJlKSB7XG4gICAgICBzaWduYXR1cmUgPSB2YWxpZFNpZ25hdHVyZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZSA9IHRoaXMsXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmUgPSBzaWduYXR1cmUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlU3RyaW5nID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyA9IHNwZWNpZmljU2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmVUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlQ29udGV4dCA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCA9IHNwZWNpZmljU2lnbmF0dXJlLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsVGVybXMgPSBnZW5lcmFsU2lnbmF0dXJlVGVybXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1Rlcm1zID0gc3BlY2lmaWNTaWduYXR1cmVUZXJtcywgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZUNvbnRleHQsXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0cyA9IFtcbiAgICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICBqb2luKChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIHNpZ25hdHVyZVVuaWZpZXMgPSBtYXRjaChnZW5lcmFsVGVybXMsIHNwZWNpZmljVGVybXMsIChnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHRlcm1VbmlmaWVzO1xuXG4gICAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gZ2VuZXJhbFRlcm0udW5pZnlUZXJtKHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIC4uLnNwZWNpZmljQ29udGV4dHMpO1xuICAgIH0sIC4uLmdlbmVyYWxDb250ZXh0cyk7XG5cblxuICAgIGlmIChzaWduYXR1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtnZW5lcmFsU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRCcmVha1BvaW50KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmU7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtcyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZVN0cmluZyhzaWduYXR1cmVTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTaWduYXR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtcyIsImdldFRlcm1zIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldE5vZGUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0TGVuZ3RoIiwidGVybXNMZW5ndGgiLCJsZW5ndGgiLCJnZXRUZXJtIiwiaW5kZXgiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwic2lnbmF0dXJlIiwic2lnbmF0dXJlTm9kZU1hdGNoZXMiLCJtYXRjaFNpZ25hdHVyZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRTaWduYXR1cmUiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwidmFsaWRTaWduYXR1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwiY29tbWl0IiwiZGVidWciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJhZGRTaWduYXR1cmUiLCJldmVyeSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHVzaCIsInVuaWZ5U2lnbmF0dXJlIiwiZ2VuZXJhbENvbnRleHQiLCJzaWduYXR1cmVVbmlmaWVzIiwiZ2VuZXJhbFNpZ25hdHVyZSIsInNwZWNpZmljU2lnbmF0dXJlIiwiZ2VuZXJhbFNpZ25hdHVyZVN0cmluZyIsInNwZWNpZmljU2lnbmF0dXJlU3RyaW5nIiwiZ2VuZXJhbFNpZ25hdHVyZVRlcm1zIiwic3BlY2lmaWNTaWduYXR1cmVUZXJtcyIsImdlbmVyYWxTaWduYXR1cmVDb250ZXh0Iiwic3BlY2lmaWNTaWduYXR1cmVDb250ZXh0IiwiZ2VuZXJhbFRlcm1zIiwic3BlY2lmaWNUZXJtcyIsImdlbmVyYWxDb250ZXh0cyIsInNwZWNpZmljQ29udGV4dHMiLCJqb2luIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllcyIsInJlY29uY2lsZSIsInVuaWZ5VGVybSIsIm5hbWUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU2lnbmF0dXJlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSIsImZyb21TaWduYXR1cmVTdHJpbmciLCJhYmxhdGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsIm1hcCIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MkJBQ087MEJBRVI7NkJBQ2M7eUJBQ007eUJBQzJDO0FBRXRGLE1BQU0sRUFBRUEsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRWhD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