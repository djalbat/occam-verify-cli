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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
    findValidSignature(context) {
        const signatureNode = this.getSignatureNode(), signature = context.findSignatureBySignatureNode(signatureNode), validSignature = signature; ///
        return validSignature;
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
                context.addSignature(context);
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
    compareSignature(signature, substitutions, generalContext, specificContext) {
        const terms = signature.getTerms(), termsA = this.terms, termsB = terms, matches = match(termsA, termsB, (termA, termB)=>{
            const { Variable } = _elements.default, term = termB, context = generalContext, variable = Variable.fromTerm(term, context);
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
        }), comparesToSignature = matches; ///
        return comparesToSignature;
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
                const { string, lineIndex } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, terms = (0, _element.termsFromSignatureNode)(signatureNode, context);
                signature = new Signature(context, string, node, lineIndex, terms);
            }, context);
        }, json, context);
        return signature;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTaWduYXR1cmUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tU2lnbmF0dXJlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgZmluZFZhbGlkU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBjb25zdCBzaWduYXR1cmVOb2RlID0gdGhpcy5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpLFxuICAgICAgICAgIHZhbGlkU2lnbmF0dXJlID0gc2lnbmF0dXJlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTaWduYXR1cmU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU2lnbmF0dXJlID0gdGhpcy5maW5kVmFsaWRTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTaWduYXR1cmUpIHtcbiAgICAgIHNpZ25hdHVyZSA9IHZhbGlkU2lnbmF0dXJlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgc2lnbmF0dXJlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTaWduYXR1cmUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy50ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpe1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZVxuICB9XG5cbiAgY29tcGFyZVNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHNpZ25hdHVyZS5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1zQSA9IHRoaXMudGVybXMsICAvLy9cbiAgICAgICAgICB0ZXJtc0IgPSB0ZXJtcywgLy8vXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRlcm1zQSwgdGVybXNCLCAodGVybUEsIHRlcm1CKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSB0ZXJtQiwgLy8vXG4gICAgICAgICAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtQSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih2YXJpYWJsZVR5cGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlZhcmlhYmxlVHlwZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgICAgICAgICAvLyBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICBUZXJtU3Vic3RpdHV0aW9uLmZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gIHZhbGlkYXRlcy4uLlxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21wYXJlc1RvU2lnbmF0dXJlID0gbWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1NpZ25hdHVyZTtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uc0NvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb21wYXJlcyA9IGNvbXBhcmUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvbXBhcmVzO1xuICB9XG5cbiAgY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IGFycmF5ID0gc3Vic3RpdHV0aW9ucy5nZXRBcnJheSgpLFxuICAgICAgICAgIGNvcnJlbGF0ZXMgPSBjb3JyZWxhdGUodGhpcy50ZXJtcywgYXJyYXksICh0ZXJtLCBzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblRlcm0gPSBzdWJzdGl0dXRpb24uZ2V0VGVybSgpLFxuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtID0gc3Vic3RpdHV0aW9uVGVybS5pc0VxdWFsVG8odGVybSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25UZXJtRXF1YWxUb1Rlcm0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoY29ycmVsYXRlcykge1xuICAgICAgc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29ycmVsYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTaWduYXR1cmVcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmU7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IGluc3RhbnRpYXRlU2lnbmF0dXJlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzaWduYXR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtcyk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsImZpbmRWYWxpZFNpZ25hdHVyZSIsInNpZ25hdHVyZSIsImZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUiLCJ2YWxpZFNpZ25hdHVyZSIsInZhbGlkYXRlIiwic2lnbmF0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJhdHRlbXB0IiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJjb21taXQiLCJhZGRTaWduYXR1cmUiLCJldmVyeSIsInRlcm0iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0IiwidGVybXNBIiwidGVybXNCIiwibWF0Y2hlcyIsInRlcm1BIiwidGVybUIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJmcm9tVGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInZhcmlhYmxlVHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJjb21wYXJlc1RvU2lnbmF0dXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29tcGFyZXMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheSIsImdldEFycmF5IiwiY29tcGFyZXMiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25UZXJtIiwiZ2V0VGVybSIsInN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSIsImlzRXF1YWxUbyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyIsImNvcnJlbGF0ZXMiLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU2lnbmF0dXJlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPO2tFQUVWOzZCQUdnQjt5QkFDRTt5QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxNQUFNLEVBQUVBLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MseUJBQWM7TUFFcEQsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsZ0JBQWdCTixNQUFNLEdBQUc7UUFFL0IsT0FBT007SUFDVDtJQUVBQyxtQkFBbUJULE9BQU8sRUFBRTtRQUMxQixNQUFNUSxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNJLFlBQVlWLFFBQVFXLDRCQUE0QixDQUFDSCxnQkFDakRJLGlCQUFpQkYsV0FBWSxHQUFHO1FBRXRDLE9BQU9FO0lBQ1Q7SUFFQUMsU0FBU2IsT0FBTyxFQUFFO1FBQ2hCLElBQUlVLFlBQVk7UUFFaEIsTUFBTUksa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNmLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRSxJQUFJRyxZQUFZO1FBRWhCLE1BQU1MLGlCQUFpQixJQUFJLENBQUNILGtCQUFrQixDQUFDVDtRQUUvQyxJQUFJWSxnQkFBZ0I7WUFDbEJGLFlBQVlFLGdCQUFpQixHQUFHO1lBRWhDWixRQUFRa0IsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFSixnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLE1BQU1LLGtCQUFrQm5CLFNBQVUsR0FBRztZQUVyQ0EsVUFBVSxJQUFJLENBQUNvQixVQUFVO1lBRXpCQyxJQUFBQSxnQkFBTyxFQUFDLENBQUNyQjtnQkFDUCxNQUFNc0IsZ0JBQWdCLElBQUksQ0FBQ0MsYUFBYSxDQUFDdkI7Z0JBRXpDLElBQUlzQixrQkFBa0IsTUFBTTtvQkFDMUJMLFlBQVk7Z0JBQ2Q7Z0JBRUEsSUFBSUEsV0FBVztvQkFDYixJQUFJLENBQUNPLE1BQU0sQ0FBQ3hCO2dCQUNkO1lBQ0YsR0FBR0E7WUFFSEEsVUFBVW1CLGlCQUFrQixHQUFHO1lBRS9CLElBQUlGLFdBQVc7Z0JBQ2JQLFlBQVksSUFBSSxFQUFFLEdBQUc7Z0JBRXJCVixRQUFReUIsWUFBWSxDQUFDekI7WUFDdkI7UUFDRjtRQUVBLElBQUlpQixXQUFXO1lBQ2JqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLGdCQUFnQixZQUFZLENBQUM7UUFDbEU7UUFFQSxPQUFPSjtJQUNUO0lBRUFhLGNBQWN2QixPQUFPLEVBQUU7UUFDckIsSUFBSXNCO1FBRUosTUFBTVIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNmLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXhFLE1BQU1WLFFBQVEsRUFBRTtRQUVoQmtCLGdCQUFnQixJQUFJLENBQUNsQixLQUFLLENBQUNzQixLQUFLLENBQUMsQ0FBQ0M7WUFDaENBLE9BQU9BLEtBQUtkLFFBQVEsQ0FBQ2IsU0FBUyxDQUFDMkI7Z0JBQzdCLE1BQU1DLG9CQUFvQjtnQkFFMUIsT0FBT0E7WUFDVDtZQUVBLElBQUlELFNBQVMsTUFBTTtnQkFDakJ2QixNQUFNeUIsSUFBSSxDQUFDRjtnQkFFWCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUlMLGVBQWU7WUFDakIsSUFBSSxDQUFDbEIsS0FBSyxHQUFHQTtRQUNmO1FBRUEsSUFBSWtCLGVBQWM7WUFDaEJ0QixRQUFRa0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLGdCQUFnQixvQkFBb0IsQ0FBQztRQUMxRTtRQUVBLE9BQU9RO0lBQ1Q7SUFFQVEsaUJBQWlCcEIsU0FBUyxFQUFFcUIsYUFBYSxFQUFFQyxjQUFjLEVBQUViLGVBQWUsRUFBRTtRQUMxRSxNQUFNZixRQUFRTSxVQUFVTCxRQUFRLElBQzFCNEIsU0FBUyxJQUFJLENBQUM3QixLQUFLLEVBQ25COEIsU0FBUzlCLE9BQ1QrQixVQUFVMUMsTUFBTXdDLFFBQVFDLFFBQVEsQ0FBQ0UsT0FBT0M7WUFDdEMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJaLE9BQU9VLE9BQ1ByQyxVQUFVZ0MsZ0JBQ1ZRLFdBQVdGLFNBQVNHLFFBQVEsQ0FBQ2QsTUFBTTNCO1lBRXpDLElBQUl3QyxhQUFhLE1BQU07Z0JBQ3JCLE1BQU1iLE9BQU9TLE9BQ1BNLFdBQVdmLEtBQUtnQixPQUFPLElBQ3ZCQyxlQUFlSixTQUFTRyxPQUFPLElBQy9CRSx5Q0FBeUNILFNBQVNJLG9CQUFvQixDQUFDRjtnQkFFN0UsSUFBSUMsd0NBQXdDO29CQUMxQyxRQUFRO29CQUVSLCtCQUErQjtvQkFDL0IsMkNBQTJDO29CQUMzQyxFQUFFO29CQUNGLG1FQUFtRTtvQkFFbkUsZ0JBQWdCO29CQUNoQixNQUFNO29CQUVOLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGLElBQ0FFLHNCQUFzQlosU0FBUyxHQUFHO1FBRXhDLE9BQU9ZO0lBQ1Q7SUFFQUMscUJBQXFCakIsYUFBYSxFQUFFL0IsT0FBTyxFQUFFO1FBQzNDLElBQUlpRCx3QkFBd0I7UUFFNUIsTUFBTW5DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaENtQyxzQkFBc0JuQixjQUFjb0IsUUFBUTtRQUVsRG5ELFFBQVFnQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVrQyxvQkFBb0IsNkJBQTZCLEVBQUVwQyxnQkFBZ0IsY0FBYyxDQUFDO1FBRWxILE1BQU1zQyxRQUFRckIsY0FBY3NCLFFBQVEsSUFDOUJDLFdBQVc1RCxRQUFRLElBQUksQ0FBQ1UsS0FBSyxFQUFFZ0QsT0FBTyxDQUFDekIsTUFBTTRCO1lBQzNDLE1BQU1DLG1CQUFtQkQsYUFBYUUsT0FBTyxJQUN2Q0MsOEJBQThCRixpQkFBaUJHLFNBQVMsQ0FBQ2hDO1lBRS9ELElBQUkrQiw2QkFBNkI7Z0JBQy9CLE9BQU87WUFDVDtRQUNGO1FBRU4sSUFBSUosVUFBVTtZQUNaTCx3QkFBd0I7UUFDMUI7UUFFQSxJQUFJQSx1QkFBdUI7WUFDekJqRCxRQUFRa0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVnQyxvQkFBb0IsNkJBQTZCLEVBQUVwQyxnQkFBZ0IsWUFBWSxDQUFDO1FBQ3BIO1FBRUEsT0FBT21DO0lBQ1Q7SUFFQVcsdUJBQXVCN0IsYUFBYSxFQUFFL0IsT0FBTyxFQUFFO1FBQzdDLElBQUk2RCwwQkFBMEI7UUFFOUIsTUFBTS9DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaENtQyxzQkFBc0JuQixjQUFjb0IsUUFBUTtRQUVsRG5ELFFBQVFnQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWtDLG9CQUFvQiw2QkFBNkIsRUFBRXBDLGdCQUFnQixjQUFjLENBQUM7UUFFcEgsTUFBTXNDLFFBQVFyQixjQUFjc0IsUUFBUSxJQUM5QlMsYUFBYW5FLFVBQVUsSUFBSSxDQUFDUyxLQUFLLEVBQUVnRCxPQUFPLENBQUN6QixNQUFNNEI7WUFDL0MsTUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFPLElBQ3ZDQyw4QkFBOEJGLGlCQUFpQkcsU0FBUyxDQUFDaEM7WUFFL0QsSUFBSStCLDZCQUE2QjtnQkFDL0IsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSSxZQUFZO1lBQ2RELDBCQUEwQjtRQUM1QjtRQUVBLElBQUlBLHlCQUF5QjtZQUMzQjdELFFBQVFrQixLQUFLLENBQUMsQ0FBQyxtQkFBbUIsRUFBRWdDLG9CQUFvQiw2QkFBNkIsRUFBRXBDLGdCQUFnQixZQUFZLENBQUM7UUFDdEg7UUFFQSxPQUFPK0M7SUFDVDtJQUVBLE9BQU9FLE9BQU8sWUFBWTtJQUUxQkMsU0FBUztRQUNQLE1BQU1oRSxVQUFVLElBQUksQ0FBQ29CLFVBQVU7UUFFL0IsT0FBTzZDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2pFO1lBQ2hCLE1BQU1DLFNBQVMsSUFBSSxDQUFDYyxTQUFTLElBQ3ZCWixZQUFZLElBQUksQ0FBQytELFlBQVksSUFDN0JDLE9BQU87Z0JBQ0xuRTtnQkFDQUM7Z0JBQ0FFO1lBQ0Y7WUFFTixPQUFPZ0U7UUFDVCxHQUFHbkU7SUFDTDtJQUVBLE9BQU9vRSxTQUFTRCxJQUFJLEVBQUVuRSxPQUFPLEVBQUU7UUFDN0IsSUFBSVU7UUFFSjJELElBQUFBLG9CQUFXLEVBQUMsQ0FBQ0YsTUFBTW5FO1lBQ2pCc0UsSUFBQUEsb0JBQVcsRUFBQyxDQUFDdEU7Z0JBQ1gsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHZ0UsTUFDeEIzRCxnQkFBZ0IrRCxJQUFBQSxpQ0FBb0IsRUFBQ3RFLFFBQVFELFVBQzdDRSxPQUFPTSxlQUNQSixRQUFRb0UsSUFBQUEsK0JBQXNCLEVBQUNoRSxlQUFlUjtnQkFFcERVLFlBQVksSUFBSVosVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7WUFDOUQsR0FBR0o7UUFDTCxHQUFHbUUsTUFBTW5FO1FBRVQsT0FBT1U7SUFDVDtBQUNGIn0=