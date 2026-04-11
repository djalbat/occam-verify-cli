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
            context.debug(`...verified the '${signatureString}' signature.`);
        }
        return verifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NpZ25hdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTaWduYXR1cmUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybXNGcm9tU2lnbmF0dXJlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBtYXRjaCwgY29tcGFyZSwgY29ycmVsYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNpZ25hdHVyZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzaWduYXR1cmVOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSdzIHRlcm1zLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IFtdO1xuXG4gICAgdGVybXNWYWxpZGF0ZSA9IHRoaXMudGVybXMuZXZlcnkoKHRlcm0pID0+IHtcbiAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7IC8vL1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKXtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlJ3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGVcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBzaWduYXR1cmUuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtc0EgPSB0aGlzLnRlcm1zLCAgLy8vXG4gICAgICAgICAgdGVybXNCID0gdGVybXMsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0ZXJtc0EsIHRlcm1zQiwgKHRlcm1BLCB0ZXJtQikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gdGVybUIsIC8vL1xuICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtID0gdGVybUEsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVmFyaWFibGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodmFyaWFibGVUeXBlKTtcblxuICAgICAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgICAgICAgICAgLy8gc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgVGVybVN1YnN0aXR1dGlvbi5mcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vICB2YWxpZGF0ZXMuLi5cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tcGFyZXNUb1NpZ25hdHVyZSA9IG1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TaWduYXR1cmU7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNDb21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgY29uc3QgYXJyYXkgPSBzdWJzdGl0dXRpb25zLmdldEFycmF5KCksXG4gICAgICAgICAgY29tcGFyZXMgPSBjb21wYXJlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzKSB7XG4gICAgICBzdWJzdGl0dXRpb25zQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtzaWduYXR1cmVTdHJpbmd9JyBzaWduYXR1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnNDb21wYXJlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zQ29ycmVsYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBhcnJheSA9IHN1YnN0aXR1dGlvbnMuZ2V0QXJyYXkoKSxcbiAgICAgICAgICBjb3JyZWxhdGVzID0gY29ycmVsYXRlKHRoaXMudGVybXMsIGFycmF5LCAodGVybSwgc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25UZXJtID0gc3Vic3RpdHV0aW9uLmdldFRlcm0oKSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblRlcm1FcXVhbFRvVGVybSA9IHN1YnN0aXR1dGlvblRlcm0uaXNFcXVhbFRvKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uc0NvcnJlbGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2lnbmF0dXJlXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSBpbnN0YW50aWF0ZVNpZ25hdHVyZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc2lnbmF0dXJlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybXMpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImNvbXBhcmUiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlNpZ25hdHVyZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm1zIiwiZ2V0VGVybXMiLCJnZXRTaWduYXR1cmVOb2RlIiwiZ2V0Tm9kZSIsInNpZ25hdHVyZU5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInNpZ25hdHVyZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwiY29tbWl0IiwiZGVidWciLCJldmVyeSIsInRlcm0iLCJ2YWxpZGF0ZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHVzaCIsImNvbXBhcmVTaWduYXR1cmUiLCJzaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtc0EiLCJ0ZXJtc0IiLCJtYXRjaGVzIiwidGVybUEiLCJ0ZXJtQiIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJ2YXJpYWJsZSIsImZyb21UZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb21wYXJlcyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImFycmF5IiwiZ2V0QXJyYXkiLCJjb21wYXJlcyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblRlcm0iLCJnZXRUZXJtIiwic3Vic3RpdHV0aW9uVGVybUVxdWFsVG9UZXJtIiwiaXNFcXVhbFRvIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNDb3JyZWxhdGVzIiwiY29ycmVsYXRlcyIsIm5hbWUiLCJ0b0pTT04iLCJnZXRDb250ZXh0Iiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU2lnbmF0dXJlIiwidGVybXNGcm9tU2lnbmF0dXJlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPO2tFQUVWOzZCQUdnQjt5QkFDRTt5QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxNQUFNLEVBQUVBLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MseUJBQWM7TUFFcEQsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsZ0JBQWdCTixNQUFNLEdBQUc7UUFFL0IsT0FBT007SUFDVDtJQUVBQyxPQUFPVCxPQUFPLEVBQUU7UUFDZCxJQUFJVSxXQUFXO1FBRWYsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUUvREcsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDZDtZQUNQLE1BQU1lLGdCQUFnQixJQUFJLENBQUNDLGFBQWEsQ0FBQ2hCO1lB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