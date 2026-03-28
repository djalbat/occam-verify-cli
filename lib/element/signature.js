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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
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
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Signature";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, signatureNode = (0, _instantiate.instantiateSignature)(string, context), node = signatureNode, terms = (0, _element.termsFromSignatureNode)(signatureNode, context), signature = new Signature(context, string, node, terms);
            return signature;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm1zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1zO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSBudWxsKSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKHRlcm1zLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnRlcm1zID0gdGVybXM7XG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChzaWduYXR1cmUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVcbiAgfVxuXG4gIHZhbGlkYXRlVGVybSh0ZXJtLCB0ZXJtcywgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaWduYXR1cmVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHsgLy8vXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlc1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuLi5gKTtcblxuICAgIHRlcm1zVmFsaWRhdGUgPSB0ZXJtcy5ldmVyeSgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHRlcm0sIHRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKXtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGVcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gdGVybUIsIC8vL1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgICAgICAgICAgLy8gc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vICB2YWxpZGF0ZXMuLi5cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tcGFyZXNUb1NpZ25hdHVyZSA9IG1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TaWduYXR1cmU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNpZ25hdHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHNpZ25hdHVyZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1zID0gdGVybXNGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtcyk7XG5cbiAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiY29tcGFyZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiU2lnbmF0dXJlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybXMiLCJnZXRUZXJtcyIsImdldFNpZ25hdHVyZU5vZGUiLCJnZXROb2RlIiwic2lnbmF0dXJlTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJ2YWxpZGF0ZVRlcm0iLCJ0ZXJtIiwidGVybVZhbGlkYXRlcyIsInRlcm1TdHJpbmciLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInB1c2giLCJldmVyeSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtc0EiLCJ0ZXJtc0IiLCJtYXRjaGVzIiwidGVybUEiLCJ0ZXJtQiIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsImZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJjb21wYXJlcyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRlcm0iLCJnZXRUZXJtIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlcyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU2lnbmF0dXJlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPO2tFQUVWO3lCQUdPOzZCQUNTO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsTUFBTSxFQUFFQSxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLHlCQUFjO01BRXBELFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLENBQUU7UUFDeEMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxnQkFBZ0JMLE1BQU0sR0FBRztRQUUvQixPQUFPSztJQUNUO0lBRUFDLE9BQU9SLE9BQU8sRUFBRTtRQUNkLElBQUlTLFdBQVc7UUFFZixNQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q1gsUUFBUVksS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixnQkFBZ0IsY0FBYyxDQUFDO1FBRS9ELE1BQU1HLFlBQVksSUFBSSxDQUFDQyxRQUFRLENBQUNkO1FBRWhDLElBQUlhLGNBQWMsTUFBTTtZQUN0QkosV0FBVztRQUNiO1FBRUEsSUFBSUEsVUFBVTtZQUNaVCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUwsZ0JBQWdCLFlBQVksQ0FBQztRQUNqRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUssU0FBU2QsT0FBTyxFQUFFO1FBQ2hCLElBQUlhLFlBQVk7UUFFaEIsTUFBTUgsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsY0FBYyxDQUFDO1FBRWhFLE1BQU1QLFFBQVEsRUFBRSxFQUNWYSxnQkFBZ0IsSUFBSSxDQUFDQyxhQUFhLENBQUNkLE9BQU9IO1FBRWhELElBQUlnQixlQUFlO1lBQ2pCLElBQUksQ0FBQ2IsS0FBSyxHQUFHQTtZQUViVSxZQUFZLElBQUksRUFBRSxHQUFHO1FBQ3ZCO1FBRUEsSUFBSUEsV0FBVztZQUNiYixRQUFRZSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLFlBQVksQ0FBQztRQUNsRTtRQUVBLE9BQU9HO0lBQ1Q7SUFFQUssYUFBYUMsSUFBSSxFQUFFaEIsS0FBSyxFQUFFSCxPQUFPLEVBQUU7UUFDakMsSUFBSW9CLGdCQUFnQjtRQUVwQixNQUFNQyxhQUFhRixLQUFLUixTQUFTLElBQzNCRCxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q1gsUUFBUVksS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixlQUFlLEVBQUVXLFdBQVcsU0FBUyxDQUFDO1FBRXZGRixPQUFPQSxLQUFLTCxRQUFRLENBQUNkLFNBQVMsQ0FBQ21CO1lBQzdCLE1BQU1HLG9CQUFvQjtZQUUxQixPQUFPQTtRQUNUO1FBRUEsSUFBSUgsU0FBUyxNQUFNO1lBQ2pCaEIsTUFBTW9CLElBQUksQ0FBQ0o7WUFFWEMsZ0JBQWdCO1FBQ2xCO1FBRUEsSUFBSUEsZUFBZTtZQUNqQnBCLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTCxnQkFBZ0IsZUFBZSxFQUFFVyxXQUFXLE9BQU8sQ0FBQztRQUN6RjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUgsY0FBY2QsS0FBSyxFQUFFSCxPQUFPLEVBQUU7UUFDNUIsSUFBSWdCO1FBRUosTUFBTU4sa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0Isc0JBQXNCLENBQUM7UUFFeEVNLGdCQUFnQmIsTUFBTXFCLEtBQUssQ0FBQyxDQUFDTDtZQUMzQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDRixZQUFZLENBQUNDLE1BQU1oQixPQUFPSDtZQUVyRCxJQUFJb0IsZUFBZTtnQkFDakIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFJSixlQUFjO1lBQ2hCaEIsUUFBUWUsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLGdCQUFnQixvQkFBb0IsQ0FBQztRQUMxRTtRQUVBLE9BQU9NO0lBQ1Q7SUFFQVMsaUJBQWlCWixTQUFTLEVBQUVhLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUU7UUFDMUUsTUFBTXpCLFFBQVFVLFVBQVVULFFBQVEsSUFDMUJ5QixTQUFTLElBQUksQ0FBQzFCLEtBQUssRUFDbkIyQixTQUFTM0IsT0FDVDRCLFVBQVV0QyxNQUFNb0MsUUFBUUMsUUFBUSxDQUFDRSxPQUFPQztZQUN0QyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxpQkFBUSxFQUN2QmhCLE9BQU9jLE9BQ1BqQyxVQUFVMkIsZ0JBQ1ZTLFdBQVdGLFNBQVNHLFFBQVEsQ0FBQ2xCLE1BQU1uQjtZQUV6QyxJQUFJb0MsYUFBYSxNQUFNO2dCQUNyQixNQUFNakIsT0FBT2EsT0FDUE0sV0FBV25CLEtBQUtvQixPQUFPLElBQ3ZCQyxlQUFlSixTQUFTRyxPQUFPLElBQy9CRSx5Q0FBeUNILFNBQVNJLG9CQUFvQixDQUFDRjtnQkFFN0UsSUFBSUMsd0NBQXdDO29CQUMxQyxRQUFRO29CQUVSLCtCQUErQjtvQkFDL0IsMkNBQTJDO29CQUMzQyxFQUFFO29CQUNGLG1FQUFtRTtvQkFFbkUsZ0JBQWdCO29CQUNoQixNQUFNO29CQUVOLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGLElBQ0FFLHNCQUFzQlosU0FBUyxHQUFHO1FBRXhDLE9BQU9ZO0lBQ1Q7SUFFQUMscUJBQXFCbEIsYUFBYSxFQUFFMUIsT0FBTyxFQUFFO1FBQzNDLElBQUk2Qyx3QkFBd0I7UUFFNUIsTUFBTW5DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaENtQyxzQkFBc0JwQixjQUFjcUIsUUFBUTtRQUVsRC9DLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRWtDLG9CQUFvQiw2QkFBNkIsRUFBRXBDLGdCQUFnQixjQUFjLENBQUM7UUFFbEgsTUFBTXNDLFFBQVF0QixjQUFjdUIsUUFBUSxJQUM5QkMsV0FBV3hELFFBQVEsSUFBSSxDQUFDUyxLQUFLLEVBQUU2QyxPQUFPLENBQUM3QixNQUFNZ0M7WUFDM0MsTUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFPLElBQ3ZDQyw4QkFBOEJGLGlCQUFpQkcsU0FBUyxDQUFDcEM7WUFFL0QsSUFBSW1DLDZCQUE2QjtnQkFDL0IsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSixVQUFVO1lBQ1pMLHdCQUF3QjtRQUMxQjtRQUVBLElBQUlBLHVCQUF1QjtZQUN6QjdDLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFK0Isb0JBQW9CLDZCQUE2QixFQUFFcEMsZ0JBQWdCLFlBQVksQ0FBQztRQUNwSDtRQUVBLE9BQU9tQztJQUNUO0lBRUFXLHVCQUF1QjlCLGFBQWEsRUFBRTFCLE9BQU8sRUFBRTtRQUM3QyxJQUFJeUQsMEJBQTBCO1FBRTlCLE1BQU0vQyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQ2hDbUMsc0JBQXNCcEIsY0FBY3FCLFFBQVE7UUFFbEQvQyxRQUFRWSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWtDLG9CQUFvQiw2QkFBNkIsRUFBRXBDLGdCQUFnQixjQUFjLENBQUM7UUFFcEgsTUFBTXNDLFFBQVF0QixjQUFjdUIsUUFBUSxJQUM5QlMsYUFBYS9ELFVBQVUsSUFBSSxDQUFDUSxLQUFLLEVBQUU2QyxPQUFPLENBQUM3QixNQUFNZ0M7WUFDL0MsTUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFPLElBQ3ZDQyw4QkFBOEJGLGlCQUFpQkcsU0FBUyxDQUFDcEM7WUFFL0QsSUFBSW1DLDZCQUE2QjtnQkFDL0IsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSSxZQUFZO1lBQ2RELDBCQUEwQjtRQUM1QjtRQUVBLElBQUlBLHlCQUF5QjtZQUMzQnpELFFBQVFlLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixFQUFFK0Isb0JBQW9CLDZCQUE2QixFQUFFcEMsZ0JBQWdCLFlBQVksQ0FBQztRQUN0SDtRQUVBLE9BQU8rQztJQUNUO0lBRUFFLFNBQVM7UUFDUCxNQUFNMUQsU0FBUyxJQUFJLENBQUNVLFNBQVMsSUFDdkJpRCxPQUFPO1lBQ0wzRDtRQUNGO1FBRU4sT0FBTzJEO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFlBQVk7SUFFMUIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFNUQsT0FBTyxFQUFFO1FBQzdCLE9BQU8rRCxJQUFBQSxvQkFBVyxFQUFDLENBQUMvRDtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHMkQsTUFDYnJELGdCQUFnQnlELElBQUFBLGlDQUFvQixFQUFDL0QsUUFBUUQsVUFDN0NFLE9BQU9LLGVBQ1BKLFFBQVE4RCxJQUFBQSwrQkFBc0IsRUFBQzFELGVBQWVQLFVBQzlDYSxZQUFZLElBQUlmLFVBQVVFLFNBQVNDLFFBQVFDLE1BQU1DO1lBRXZELE9BQU9VO1FBQ1QsR0FBR2I7SUFDTDtBQUNGIn0=