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
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), terms = termsFromSignatureNode(signatureNode, context);
                signature = new Signature(context, string, node, breakPoint, terms);
            }, context);
        }, json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBqb2luLCBwb3NpdCwgYWJsYXRlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU2lnbmF0dXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRTaWduYXR1cmVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTm9kZTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCB0ZXJtc0xlbmd0aCA9IHRoaXMudGVybXMubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aCA9IHRlcm1zTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRUZXJtKGluZGV4KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8oc2lnbmF0dXJlKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHNpZ25hdHVyZS5nZXROb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc2lnbmF0dXJlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc2lnbmF0dXJlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlTm9kZSA9IHRoaXMuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSxcbiAgICAgICAgICB2YWxpZFNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU2lnbmF0dXJlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFNpZ25hdHVyZSA9IHRoaXMuZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU2lnbmF0dXJlKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBzaWduYXR1cmUgPSB2YWxpZFNpZ25hdHVyZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1zVmFsaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0sIGNvbnRleHQpID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgdW5pZnlTaWduYXR1cmUoc2lnbmF0dXJlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZSA9IHRoaXMsXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmUgPSBzaWduYXR1cmUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlU3RyaW5nID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyA9IHNwZWNpZmljU2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmVUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlQ29udGV4dCA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCA9IHNwZWNpZmljU2lnbmF0dXJlLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsVGVybXMgPSBnZW5lcmFsU2lnbmF0dXJlVGVybXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1Rlcm1zID0gc3BlY2lmaWNTaWduYXR1cmVUZXJtcywgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZUNvbnRleHQsXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0cyA9IFtcbiAgICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICBqb2luKChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIHNpZ25hdHVyZVVuaWZpZXMgPSBtYXRjaChnZW5lcmFsVGVybXMsIHNwZWNpZmljVGVybXMsIChnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHRlcm1VbmlmaWVzO1xuXG4gICAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gZ2VuZXJhbFRlcm0udW5pZnlUZXJtKHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIC4uLnNwZWNpZmljQ29udGV4dHMpO1xuICAgIH0sIC4uLmdlbmVyYWxDb250ZXh0cyk7XG5cblxuICAgIGlmIChzaWduYXR1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtnZW5lcmFsU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgICAgY29uc3QganNvbiA9IHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBicmVha1BvaW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybXMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduYXR1cmVTdHJpbmcoc2lnbmF0dXJlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZTtcblxuICAgIHBvc2l0KChjb250ZXh0KSA9PiB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaW5zdGFudGlhdGVTaWduYXR1cmUoc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZXMgPSBzaWduYXR1cmVOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiB0ZXJtO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdGVybXM7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlNpZ25hdHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtcyIsImdldFRlcm1zIiwiZ2V0U2lnbmF0dXJlTm9kZSIsImdldE5vZGUiLCJzaWduYXR1cmVOb2RlIiwiZ2V0TGVuZ3RoIiwidGVybXNMZW5ndGgiLCJsZW5ndGgiLCJnZXRUZXJtIiwiaW5kZXgiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwic2lnbmF0dXJlIiwic2lnbmF0dXJlTm9kZU1hdGNoZXMiLCJtYXRjaFNpZ25hdHVyZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRTaWduYXR1cmUiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwidmFsaWRTaWduYXR1cmUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwiY29tbWl0IiwiZGVidWciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJhZGRTaWduYXR1cmUiLCJldmVyeSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHVzaCIsInVuaWZ5U2lnbmF0dXJlIiwiZ2VuZXJhbENvbnRleHQiLCJzaWduYXR1cmVVbmlmaWVzIiwiZ2VuZXJhbFNpZ25hdHVyZSIsInNwZWNpZmljU2lnbmF0dXJlIiwiZ2VuZXJhbFNpZ25hdHVyZVN0cmluZyIsInNwZWNpZmljU2lnbmF0dXJlU3RyaW5nIiwiZ2VuZXJhbFNpZ25hdHVyZVRlcm1zIiwic3BlY2lmaWNTaWduYXR1cmVUZXJtcyIsImdlbmVyYWxTaWduYXR1cmVDb250ZXh0Iiwic3BlY2lmaWNTaWduYXR1cmVDb250ZXh0IiwiZ2VuZXJhbFRlcm1zIiwic3BlY2lmaWNUZXJtcyIsImdlbmVyYWxDb250ZXh0cyIsInNwZWNpZmljQ29udGV4dHMiLCJqb2luIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllcyIsInJlY29uY2lsZSIsInVuaWZ5VGVybSIsIm5hbWUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVNpZ25hdHVyZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJmcm9tU2lnbmF0dXJlU3RyaW5nIiwicG9zaXQiLCJhYmxhdGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsIm1hcCIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYd0I7MkJBQ087MEJBRVI7NkJBQ2M7eUJBQ007NEJBQ29CO3lCQUM4QjtBQUU3RixNQUFNLEVBQUVBLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUVoQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLENBQUU7UUFDcEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxnQkFBZ0JOLE1BQU0sR0FBRztRQUUvQixPQUFPTTtJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNQyxjQUFjLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxNQUFNLEVBQy9CQSxTQUFTRCxhQUFhLEdBQUc7UUFFL0IsT0FBT0M7SUFDVDtJQUVBQyxRQUFRQyxLQUFLLEVBQUU7UUFDYixNQUFNQyxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFD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