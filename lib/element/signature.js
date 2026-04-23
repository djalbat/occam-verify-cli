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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBhYmxhdGUsIGF0dGVtcHQsIHJlY29uY2lsZSwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGhpcy50ZXJtcy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gdGVybXNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpbmRleF07XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzaWduYXR1cmUpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2lnbmF0dXJlLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzaWduYXR1cmVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIHZhbGlkU2lnbmF0dXJlID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTaWduYXR1cmU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU2lnbmF0dXJlID0gdGhpcy5maW5kVmFsaWRTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTaWduYXR1cmUpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHNpZ25hdHVyZSA9IHZhbGlkU2lnbmF0dXJlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc2lnbmF0dXJlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTaWduYXR1cmUoc2lnbmF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSwgY29udGV4dCkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB9XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSl7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlXG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSB0aGlzLFxuICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlID0gc2lnbmF0dXJlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZVN0cmluZyA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVTdHJpbmcgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtnZW5lcmFsU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlVGVybXMgPSBnZW5lcmFsU2lnbmF0dXJlLmdldFRlcm1zKCksXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmVUZXJtcyA9IHNwZWNpZmljU2lnbmF0dXJlLmdldFRlcm1zKCksXG4gICAgICAgICAgZ2VuZXJhbFNpZ25hdHVyZUNvbnRleHQgPSBnZW5lcmFsU2lnbmF0dXJlLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZUNvbnRleHQgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFRlcm1zID0gZ2VuZXJhbFNpZ25hdHVyZVRlcm1zLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNUZXJtcyA9IHNwZWNpZmljU2lnbmF0dXJlVGVybXMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFNpZ25hdHVyZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU2lnbmF0dXJlQ29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHNpZ25hdHVyZVVuaWZpZXMgPSBtYXRjaChnZW5lcmFsVGVybXMsIHNwZWNpZmljVGVybXMsIChnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgICAgICB0ZXJtVW5pZmllcyA9IGdlbmVyYWxUZXJtLnVuaWZ5VGVybShzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzaWduYXR1cmVOb2RlID0gaW5zdGFudGlhdGVTaWduYXR1cmUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtcyk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZVN0cmluZyhzaWduYXR1cmVTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTaWduYXR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsImdldExlbmd0aCIsInRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VGVybSIsImluZGV4IiwidGVybSIsImlzRXF1YWxUbyIsInNpZ25hdHVyZSIsInNpZ25hdHVyZU5vZGVNYXRjaGVzIiwibWF0Y2hTaWduYXR1cmVOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU2lnbmF0dXJlIiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInZhbGlkU2lnbmF0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFibGF0ZSIsImF0dGVtcHQiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsImNvbW1pdCIsImRlYnVnIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImFkZFNpZ25hdHVyZSIsImV2ZXJ5IiwidmFsaWRhdGVzRm9yd2FyZHMiLCJwdXNoIiwidW5pZnlTaWduYXR1cmUiLCJzaWduYXR1cmVVbmlmaWVzIiwiZ2VuZXJhbFNpZ25hdHVyZSIsInNwZWNpZmljU2lnbmF0dXJlIiwiZ2VuZXJhbFNpZ25hdHVyZVN0cmluZyIsInNwZWNpZmljU2lnbmF0dXJlU3RyaW5nIiwiZ2VuZXJhbFNpZ25hdHVyZVRlcm1zIiwic3BlY2lmaWNTaWduYXR1cmVUZXJtcyIsImdlbmVyYWxTaWduYXR1cmVDb250ZXh0Iiwic3BlY2lmaWNTaWduYXR1cmVDb250ZXh0IiwiZ2VuZXJhbFRlcm1zIiwic3BlY2lmaWNUZXJtcyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwicmVjb25jaWxlIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIm5hbWUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZVNpZ25hdHVyZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJmcm9tU2lnbmF0dXJlU3RyaW5nIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJtYXAiLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWHdCOzJCQUNPOzBCQUVSOzZCQUNjO3lCQUNN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