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
                const { string } = json, signatureNode = instantiateSignature(string, context), node = signatureNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), terms = termsFromSignatureNode(signatureNode, context);
                signature = new Signature(context, string, node, breakPoint, terms);
            }, context);
        }, json, context);
        return signature;
    }
    static fromSignatureString(signatureString, context) {
        let signature;
        (0, _context.declare)((context)=>{
            (0, _context.ablate)((context)=>{
                (0, _context.instantiate)((context)=>{
                    const string = signatureString, signatureNode = instantiateSignature(string, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBqb2luLCBkZWNsYXJlLCBhYmxhdGUsIGF0dGVtcHQsIHJlY29uY2lsZSwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGhpcy50ZXJtcy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gdGVybXNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpbmRleF07XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzaWduYXR1cmUpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2lnbmF0dXJlLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzaWduYXR1cmVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIHZhbGlkU2lnbmF0dXJlID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTaWduYXR1cmU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU2lnbmF0dXJlID0gdGhpcy5maW5kVmFsaWRTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTaWduYXR1cmUpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHNpZ25hdHVyZSA9IHZhbGlkU2lnbmF0dXJlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc2lnbmF0dXJlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTaWduYXR1cmUoc2lnbmF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSwgY29udGV4dCkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB9XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSl7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlXG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlID0gdGhpcyxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVTdHJpbmcgPSBnZW5lcmFsU2lnbmF0dXJlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlU3RyaW5nID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7Z2VuZXJhbFNpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFNpZ25hdHVyZVRlcm1zID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIGdlbmVyYWxTaWduYXR1cmVDb250ZXh0ID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVDb250ZXh0ID0gc3BlY2lmaWNTaWduYXR1cmUuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmVUZXJtcywgIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZVRlcm1zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlQ29udGV4dCxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRzID0gW1xuICAgICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVDb250ZXh0LFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgXTtcblxuICAgIGpvaW4oKGdlbmVyYWxDb250ZXh0KSA9PiB7XG4gICAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgc2lnbmF0dXJlVW5pZmllcyA9IG1hdGNoKGdlbmVyYWxUZXJtcywgc3BlY2lmaWNUZXJtcywgKGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0pID0+IHtcbiAgICAgICAgICBsZXQgdGVybVVuaWZpZXM7XG5cbiAgICAgICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgdGVybVVuaWZpZXMgPSBnZW5lcmFsVGVybS51bmlmeVRlcm0oc3BlY2lmaWNUZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgLi4uc3BlY2lmaWNDb250ZXh0cyk7XG4gICAgfSwgLi4uZ2VuZXJhbENvbnRleHRzKTtcblxuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaW5zdGFudGlhdGVTaWduYXR1cmUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtcyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZVN0cmluZyhzaWduYXR1cmVTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gc2lnbmF0dXJlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTaWduYXR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsImdldExlbmd0aCIsInRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VGVybSIsImluZGV4IiwidGVybSIsImlzRXF1YWxUbyIsInNpZ25hdHVyZSIsInNpZ25hdHVyZU5vZGVNYXRjaGVzIiwibWF0Y2hTaWduYXR1cmVOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU2lnbmF0dXJlIiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInZhbGlkU2lnbmF0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsImNvbW1pdCIsImRlYnVnIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiYWRkU2lnbmF0dXJlIiwiZXZlcnkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJ1bmlmeVNpZ25hdHVyZSIsImdlbmVyYWxDb250ZXh0Iiwic2lnbmF0dXJlVW5pZmllcyIsImdlbmVyYWxTaWduYXR1cmUiLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyIsImdlbmVyYWxTaWduYXR1cmVUZXJtcyIsInNwZWNpZmljU2lnbmF0dXJlVGVybXMiLCJnZW5lcmFsU2lnbmF0dXJlQ29udGV4dCIsInNwZWNpZmljU2lnbmF0dXJlQ29udGV4dCIsImdlbmVyYWxUZXJtcyIsInNwZWNpZmljVGVybXMiLCJnZW5lcmFsQ29udGV4dHMiLCJzcGVjaWZpY0NvbnRleHRzIiwiam9pbiIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwidGVybVVuaWZpZXMiLCJyZWNvbmNpbGUiLCJ1bmlmeVRlcm0iLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTaWduYXR1cmUiLCJicmVha1BvaW50RnJvbUpTT04iLCJ0ZXJtc0Zyb21TaWduYXR1cmVOb2RlIiwiZnJvbVNpZ25hdHVyZVN0cmluZyIsImRlY2xhcmUiLCJhYmxhdGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsIm1hcCIsInRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MkJBQ087MEJBRVI7eUJBQ29COzRCQUNvQjt5QkFDZ0M7QUFFL0YsTUFBTSxFQUFFQSxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFaEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsZ0JBQWdCTixNQUFNLEdBQUc7UUFFL0IsT0FBT007SUFDVDtJQUVBQyxZQUFZO1FBQ1YsTUFBTUMsY0FBYyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxFQUMvQkEsU0FBU0QsYUFBYSxHQUFHO1FBRS9CLE9BQU9DO0lBQ1Q7SUFFQUMsUUFBUUMsS0FBSyxFQUFFO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1MsTUFBTTtRQUU5QixPQUFPQztJQUNUO0lBRUFDLFVBQVVDLFNBQVMsRUFBRTtRQUNuQixNQUFNUixnQkFBZ0JR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