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
            const temporaryContext = context; ///
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
            context = temporaryContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBwb3NpdCwgYWJsYXRlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2lnbmF0dXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRoaXMudGVybXMubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9IHRlcm1zTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8oc2lnbmF0dXJlKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNpZ25hdHVyZS5nZXROb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc2lnbmF0dXJlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICB2YWxpZFNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU2lnbmF0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFNpZ25hdHVyZSA9IHRoaXMuZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU2lnbmF0dXJlKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzaWduYXR1cmUgPSB2YWxpZFNpZ25hdHVyZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0sIGNvbnRleHQpID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVTdHJpbmcgPSBnZW5lcmFsU2lnbmF0dXJlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlU3RyaW5nID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7Z2VuZXJhbFNpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFNpZ25hdHVyZVRlcm1zID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVDb250ZXh0ID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVDb250ZXh0ID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmVUZXJtcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTaWduYXR1cmVDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1NpZ25hdHVyZUNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBzaWduYXR1cmVVbmlmaWVzID0gbWF0Y2goZ2VuZXJhbFRlcm1zLCBzcGVjaWZpY1Rlcm1zLCAoZ2VuZXJhbFRlcm0sIHNwZWNpZmljVGVybSkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSBnZW5lcmFsVGVybS51bmlmeVRlcm0oc3BlY2lmaWNUZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtnZW5lcmFsU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgICAgY29uc3QganNvbiA9IHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBicmVha1BvaW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZTtcblxuICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybXMpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduYXR1cmVTdHJpbmcoc2lnbmF0dXJlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZTtcblxuICAgIHBvc2l0KChjb250ZXh0KSA9PiB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaW5zdGFudGlhdGVTaWduYXR1cmUoc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlNpZ25hdHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtcyIsImdldFRlcm1zIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldE5vZGUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0TGVuZ3RoIiwidGVybXNMZW5ndGgiLCJsZW5ndGgiLCJnZXRUZXJtIiwiaW5kZXgiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwic2lnbmF0dXJlIiwic2lnbmF0dXJlTm9kZU1hdGNoZXMiLCJtYXRjaFNpZ25hdHVyZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRTaWduYXR1cmUiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwidmFsaWRTaWduYXR1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwicG9zaXQiLCJhYmxhdGUiLCJhdHRlbXB0IiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJjb21taXQiLCJkZWJ1ZyIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwidGVtcG9yYXJ5Q29udGV4dCIsImdldENvbnRleHQiLCJhZGRTaWduYXR1cmUiLCJldmVyeSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHVzaCIsInVuaWZ5U2lnbmF0dXJlIiwic2lnbmF0dXJlVW5pZmllcyIsImdlbmVyYWxTaWduYXR1cmUiLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyIsImdlbmVyYWxTaWduYXR1cmVUZXJtcyIsInNwZWNpZmljU2lnbmF0dXJlVGVybXMiLCJnZW5lcmFsU2lnbmF0dXJlQ29udGV4dCIsInNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCIsImdlbmVyYWxUZXJtcyIsInNwZWNpZmljVGVybXMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInJlY29uY2lsZSIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGVTaWduYXR1cmUiLCJicmVha1BvaW50RnJvbUpTT04iLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwiZnJvbVNpZ25hdHVyZVN0cmluZyIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwibWFwIiwidGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTzswQkFFUjs2QkFDYzt5QkFDTTs0QkFDb0I7eUJBQ3dCO0FBRXZGLE1BQU0sRUFBRUEsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRWhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssQ0FBRTtRQUNwRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGdCQUFnQk4sTUFBTSxHQUFHO1FBRS9CLE9BQU9NO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1DLGNBQWMsSUFBSSxDQUFDTixLQUFLLENBQUNPLE1BQU0sRUFDL0JBLFNBQVNELGFBQWEsR0FBRztRQUUvQixPQUFPQztJQUNUO0lBRUFDLFFBQVFDLEtBQUssRUFBRTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNTLE1BQU07UUFFOUIsT0FBT0M7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTVIsZ0JBQWdCUSxVQUFVVCxPQUFPLElBQ2pDVSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1YsZ0JBQy9DVyxVQUFVRixzQkFBdUIsR0FBRztRQUUxQyxPQUFPRTtJQUNUO0lBRUFELG1CQUFtQlYsYUFBYSxFQUFFO1FBQ2hDLE1BQU1OLE9BQU9NLGVBQ1BZLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNuQixPQUM3QmUs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