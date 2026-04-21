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
const _breakPoint = require("../utilities/breakPoint");
const _context = require("../utilities/context");
const { match } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Signature extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, terms){
        super(context, string, node, breakPoint);
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
        (0, _context.posit)((context)=>{
            (0, _context.ablate)((context)=>{
                (0, _context.attempt)((context)=>{
                    const termsValidate = this.validateTerms(context);
                    if (termsValidate !== null) {
                        verifies = true;
                    }
                    if (verifies) {
                        this.commit(context);
                    }
                }, context);
            }, context);
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
            validates = true;
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
            term = term.validate(context, (term, context)=>{
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
        let signatureUnifies;
        const generalSignature = this, specificSignature = signature, generalSignatureString = generalSignature.getString(), specificSignatureString = specificSignature.getString();
        context.trace(`Unifying the '${specificSignatureString}' signature with the '${generalSignatureString}' signature...`);
        const generalSignatureTerms = generalSignature.getTerms(), specificSignatureTerms = specificSignature.getTerms(), generalSignatureContext = generalSignature.getContext(), specificSignatureContext = specificSignature.getContext(), generalTerms = generalSignatureTerms, specificTerms = specificSignatureTerms, generalContext = generalSignatureContext, specificContext = specificSignatureContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                signatureUnifies = match(generalTerms, specificTerms, (generalTerm, specificTerm)=>{
                    let termUnifies;
                    termUnifies = generalTerm.unifyTerm(specificTerm, generalContext, specificContext);
                    if (termUnifies) {
                        return true;
                    }
                });
                if (signatureUnifies) {
                    specificContext.commit(context);
                }
            }, specificContext);
        }, specificContext, context);
        if (signatureUnifies) {
            context.debug(`...unified the '${specificSignatureString}' signature with the '${generalSignatureString}' signature.`);
        }
        return signatureUnifies;
    }
    static name = "Signature";
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let signature;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), terms = termsFromSignatureNode(signatureNode, context);
                signature = new Signature(context, string, node, breakPoint, terms);
            }, json, context);
        }, context);
        return signature;
    }
    static fromSignatureString(signatureString, context) {
        let signature;
        (0, _context.posit)((context)=>{
            (0, _context.ablate)((context)=>{
                (0, _context.instantiate)((context)=>{
                    const string = signatureString, signatureNode = (0, _instantiate.instantiateSignature)(string, context);
                    signature = (0, _element.signatureFromSignatureNode)(signatureNode, context);
                }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBqb2luLCBwb3NpdCwgYWJsYXRlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2lnbmF0dXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRoaXMudGVybXMubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9IHRlcm1zTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8oc2lnbmF0dXJlKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNpZ25hdHVyZS5nZXROb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc2lnbmF0dXJlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICB2YWxpZFNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU2lnbmF0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFNpZ25hdHVyZSA9IHRoaXMuZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU2lnbmF0dXJlKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzaWduYXR1cmUgPSB2YWxpZFNpZ25hdHVyZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0sIGNvbnRleHQpID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVTdHJpbmcgPSBnZW5lcmFsU2lnbmF0dXJlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlU3RyaW5nID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7Z2VuZXJhbFNpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFNpZ25hdHVyZVRlcm1zID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVDb250ZXh0ID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVDb250ZXh0ID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmVUZXJtcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTaWduYXR1cmVDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1NpZ25hdHVyZUNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgc2lnbmF0dXJlVW5pZmllcyA9IG1hdGNoKGdlbmVyYWxUZXJtcywgc3BlY2lmaWNUZXJtcywgKGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0pID0+IHtcbiAgICAgICAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllcyA9IGdlbmVyYWxUZXJtLnVuaWZ5VGVybShzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaWduYXR1cmVVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaW5zdGFudGlhdGVTaWduYXR1cmUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtcyk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZVN0cmluZyhzaWduYXR1cmVTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgcG9zaXQoKGNvbnRleHQpID0+IHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHNpZ25hdHVyZVN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlcyA9IHNpZ25hdHVyZU5vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRlcm07XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZSIsInNpZ25hdHVyZU5vZGUiLCJnZXRMZW5ndGgiLCJ0ZXJtc0xlbmd0aCIsImxlbmd0aCIsImdldFRlcm0iLCJpbmRleCIsInRlcm0iLCJpc0VxdWFsVG8iLCJzaWduYXR1cmUiLCJzaWduYXR1cmVOb2RlTWF0Y2hlcyIsIm1hdGNoU2lnbmF0dXJlTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZFNpZ25hdHVyZSIsImZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUiLCJ2YWxpZFNpZ25hdHVyZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJwb3NpdCIsImFibGF0ZSIsImF0dGVtcHQiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsImNvbW1pdCIsImRlYnVnIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiYWRkU2lnbmF0dXJlIiwiZXZlcnkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJ1bmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJnZW5lcmFsU2lnbmF0dXJlIiwic3BlY2lmaWNTaWduYXR1cmUiLCJnZW5lcmFsU2lnbmF0dXJlU3RyaW5nIiwic3BlY2lmaWNTaWduYXR1cmVTdHJpbmciLCJnZW5lcmFsU2lnbmF0dXJlVGVybXMiLCJzcGVjaWZpY1NpZ25hdHVyZVRlcm1zIiwiZ2VuZXJhbFNpZ25hdHVyZUNvbnRleHQiLCJzcGVjaWZpY1NpZ25hdHVyZUNvbnRleHQiLCJnZW5lcmFsVGVybXMiLCJzcGVjaWZpY1Rlcm1zIiwiZ2VuZXJhbENvbnRleHQiLCJqb2luIiwicmVjb25jaWxlIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIm5hbWUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZVNpZ25hdHVyZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJmcm9tU2lnbmF0dXJlU3RyaW5nIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJtYXAiLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPOzBCQUVSOzZCQUNjO3lCQUNNOzRCQUNvQjt5QkFDOEI7QUFFN0YsTUFBTSxFQUFFQSxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFaEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsZ0JBQWdCTixNQUFNLEdBQUc7UUFFL0IsT0FBT007SUFDVDtJQUVBQyxZQUFZO1FBQ1YsTUFBTUMsY0FBYyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxFQUMvQkEsU0FBU0QsYUFBYSxHQUFHO1FBRS9CLE9BQU9DO0lBQ1Q7SUFFQUMsUUFBUUMsS0FBSyxFQUFFO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1MsTUFBTTtRQUU5QixPQUFPQztJQUNUO0lBRUFDLFVBQVVDLFNBQVMsRUFBRTtRQUNuQixNQUFNUixnQkFBZ0JRLFVBQVVULE9BQU8sSUFDakNVLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDVixnQkFDL0NXLFVBQVVGLHNCQUF1QixHQUFHO1FBRTFDLE9BQU9FO0lB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