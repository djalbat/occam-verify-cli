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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlLCBhYmxhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHRlcm1zTGVuZ3RoID0gdGhpcy50ZXJtcy5sZW5ndGgsXG4gICAgICAgICAgbGVuZ3RoID0gdGVybXNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtc1tpbmRleF07XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzaWduYXR1cmUpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gc2lnbmF0dXJlLmdldE5vZGUoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzaWduYXR1cmVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzaWduYXR1cmVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIHZhbGlkU2lnbmF0dXJlID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTaWduYXR1cmU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU2lnbmF0dXJlID0gdGhpcy5maW5kVmFsaWRTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTaWduYXR1cmUpIHtcbiAgICAgIHNpZ25hdHVyZSA9IHZhbGlkU2lnbmF0dXJlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc2lnbmF0dXJlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTaWduYXR1cmUoc2lnbmF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSB0aGlzLnRlcm1zLmV2ZXJ5KCh0ZXJtKSA9PiB7XG4gICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4geyAvLy9cbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB9XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSl7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlXG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFNpZ25hdHVyZSA9IHRoaXMsXG4gICAgICAgICAgc3BlY2lmaWNTaWduYXR1cmUgPSBzaWduYXR1cmUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU2lnbmF0dXJlU3RyaW5nID0gZ2VuZXJhbFNpZ25hdHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1NpZ25hdHVyZVN0cmluZyA9IHNwZWNpZmljU2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2dlbmVyYWxTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmVUZXJtcyA9IGdlbmVyYWxTaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIHNwZWNpZmljU2lnbmF0dXJlVGVybXMgPSBzcGVjaWZpY1NpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgICAgZ2VuZXJhbFRlcm1zID0gZ2VuZXJhbFNpZ25hdHVyZVRlcm1zLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1Rlcm1zID0gc3BlY2lmaWNTaWduYXR1cmVUZXJtczsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZVVuaWZpZXMgPSBtYXRjaChnZW5lcmFsVGVybXMsIHNwZWNpZmljVGVybXMsIChnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgIHRlcm1VbmlmaWVzID0gZ2VuZXJhbFRlcm0udW5pZnlUZXJtKHNwZWNpZmljVGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgd2l0aCB0aGUgJyR7Z2VuZXJhbFNpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVW5pZmllcztcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvbXBhcmVzO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29ycmVsYXRlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmU7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtcyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25hdHVyZVN0cmluZyhzaWduYXR1cmVTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBzaWduYXR1cmVTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtc0Zyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGVzID0gc2lnbmF0dXJlTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsImdldExlbmd0aCIsInRlcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VGVybSIsImluZGV4IiwidGVybSIsImlzRXF1YWxUbyIsInNpZ25hdHVyZSIsInNpZ25hdHVyZU5vZGVNYXRjaGVzIiwibWF0Y2hTaWduYXR1cmVOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkU2lnbmF0dXJlIiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInZhbGlkU2lnbmF0dXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsImNvbW1pdCIsImRlYnVnIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiYWRkU2lnbmF0dXJlIiwiZXZlcnkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJ1bmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJnZW5lcmFsU2lnbmF0dXJlIiwic3BlY2lmaWNTaWduYXR1cmUiLCJnZW5lcmFsU2lnbmF0dXJlU3RyaW5nIiwic3BlY2lmaWNTaWduYXR1cmVTdHJpbmciLCJnZW5lcmFsQ29udGV4dCIsInJlY29uY2lsZSIsImdlbmVyYWxTaWduYXR1cmVUZXJtcyIsInNwZWNpZmljU2lnbmF0dXJlVGVybXMiLCJnZW5lcmFsVGVybXMiLCJzcGVjaWZpY1Rlcm1zIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJjb21wYXJlcyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRlcm0iLCJzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0iLCJjb3JyZWxhdGVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMiLCJjb3JyZWxhdGVzIiwibmFtZSIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVNpZ25hdHVyZSIsInRlcm1zRnJvbVNpZ25hdHVyZU5vZGUiLCJmcm9tU2lnbmF0dXJlU3RyaW5nIiwiYWJsYXRlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJtYXAiLCJ0ZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NB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