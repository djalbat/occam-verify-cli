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
const _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
const _elements = require("../../elements");
const _breakPoint = require("../../utilities/breakPoint");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
const _string = require("../../utilities/string");
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class ReferenceSubstitution extends _substitution.default {
    constructor(context, string, node, breakPoint, targetReference, replacementReference){
        super(context, string, node, breakPoint);
        this.targetReference = targetReference;
        this.replacementReference = replacementReference;
    }
    getTargetReference() {
        return this.targetReference;
    }
    getReplacementReference() {
        return this.replacementReference;
    }
    getReferenceSubstitutionNode() {
        const node = this.getNode(), referenceSubstitution = node; ///
        return referenceSubstitution;
    }
    getTargetNode() {
        const targetReferenceNode = this.targetReference.getNode(), tergetNode = targetReferenceNode; ///
        return tergetNode;
    }
    getReplacementNode() {
        const replacementReferenceNode = this.replacementReference.getNode(), replacementNode = replacementReferenceNode; ///
        return replacementNode;
    }
    getMetavariableNode() {
        return this.targetReference.getMetavariableNode();
    }
    isTrivial() {
        const targetReferenceEqualToReplacementReference = this.targetReference.isEqualTo(this.replacementReference), trivial = targetReferenceEqualToReplacementReference; ///
        return trivial;
    }
    matchMetavariableNode(metavariableNode) {
        return this.targetReference.matchMetavariableNode(metavariableNode);
    }
    compareReference(reference, context) {
        const referenceEqualToReplacementReference = this.replacementReference.isEqualTo(reference), comparedToReference = referenceEqualToReplacementReference; ///
        return comparedToReference;
    }
    compareParameter(parameter) {
        const targetReferenceComparesToParameter = this.targetReference.compareParameter(parameter), comparesToParameter = targetReferenceComparesToParameter; ///
        return comparesToParameter;
    }
    compareSubstitution(substitution) {
        let substitutionCompares = false;
        const substitutionReferenceSubstitution = substitution instanceof ReferenceSubstitution;
        if (substitutionReferenceSubstitution) {
            const substitutionNode = substitution.getNode(), substitutionNodeMatches = this.matchNode(substitutionNode);
            if (substitutionNodeMatches) {
                substitutionCompares = true;
            }
        }
        return substitutionCompares;
    }
    validate(context) {
        let referenceSubstitution = null;
        const referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            validates = true;
            referenceSubstitution = validSubstitution; ///
            context.debug(`...the '${referenceSubstitutionString}' reference substitution is already valid.`);
        } else {
            const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext();
            (0, _context.attempts)((generalContext, specificContext)=>{
                const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);
                if (targetReferenceValidates) {
                    const replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);
                    if (replacementReferenceValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    this.commit(generalContext, specificContext);
                }
            }, generalContext, specificContext);
            if (validates) {
                const substitution = this; ///
                referenceSubstitution = substitution; ///
                context.addSubstitution(substitution);
            }
        }
        if (validates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution.`);
        }
        return referenceSubstitution;
    }
    validateTargetReference(generalContext, specificContext) {
        let targetReferenceValidates = false;
        const context = generalContext, referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's target reference...`);
        (0, _context.manifest)((context)=>{
            (0, _context.elide)((context)=>{
                const targetReference = this.targetReference.validate(context);
                if (targetReference !== null) {
                    targetReferenceValidates = true;
                }
            }, context);
        }, specificContext, context);
        if (targetReferenceValidates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's target reference...`);
        }
        return targetReferenceValidates;
    }
    validateReplacementReference(generalContext, specificContext) {
        let replacementReferenceValidates = false;
        const context = specificContext, referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's replacement reference...`);
        (0, _context.elide)((context)=>{
            const replacementReference = this.replacementReference.validate(context);
            if (replacementReference !== null) {
                replacementReferenceValidates = true;
            }
        }, context);
        if (replacementReferenceValidates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's replacement reference.`);
        }
        return replacementReferenceValidates;
    }
    static name = "ReferenceSubstitution";
    static fromJSON(json, context) {
        let referenceSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            const forced = true;
            (0, _context.posit)((context)=>{
                (0, _context.ablate)((context)=>{
                    (0, _context.instantiate)((context)=>{
                        (0, _context.unserialises)((json, generalContext, specificContext)=>{
                            const { string } = json, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context), node = referenceSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, generalContext), replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            referenceSubstitutionn = new ReferenceSubstitution(contexts, string, node, breakPoint, targetReference, replacementReference);
                        }, json, context);
                    }, context);
                }, forced, context);
            }, context);
        }
        return referenceSubstitutionn;
    }
    static fromReferenceAndMetavariable(reference, metavariable, generalContext, specificContext) {
        let referenceSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, referenceSubstitutionString = (0, _string.referenceSubstitutionStringFromReferenceAndMetavariable)(reference, metavariable), string = referenceSubstitutionString, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context);
                referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return referenceSubstitution;
    }
    static fromAssumptionAndMetaLevelAssumption(assumption, metaLevelAssumption, generalContext, specificContext) {
        let referenceSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, metavariable = assumption.getMetavariable(), reference = metaLevelAssumption.getReference(), referenceSubstitutionString = (0, _string.referenceSubstitutionStringFromReferenceAndMetavariable)(reference, metavariable), string = referenceSubstitutionString, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context);
                referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return referenceSubstitution;
    }
});
function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, generalContext) {
    const targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(), targetReference = generalContext.findReferenceByReferenceNode(targetReferenceNode);
    return targetReference;
}
function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, specificContext) {
    const replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(), replacementReference = specificContext.findReferenceByReferenceNode(replacementReferenceNode);
    return replacementReference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgcG9zaXQsIGVsaWRlLCBhYmxhdGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGFyZ2V0UmVmZXJlbmNlID0gdGFyZ2V0UmVmZXJlbmNlO1xuICAgIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UgPSByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRhcmdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UpLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2U7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlLmlzRXF1YWxUbyhyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbXBhcmVkVG9SZWZlcmVuY2UgPSByZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2U7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9SZWZlcmVuY2U7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb24gaW5zdGFuY2VvZiBSZWZlcmVuY2VTdWJzdGl0dXRpb24pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZVN1YnN0aXR1dGlvbikge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Db21wYXJlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgZWxpZGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlID0gdGhpcy50YXJnZXRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGVsaWRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBjb25zdCBmb3JjZWQgPSB0cnVlO1xuXG4gICAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICB9LCBmb3JjZWQsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb24oYXNzdW1wdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gZ2VuZXJhbENvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSh0YXJnZXRSZWZlcmVuY2VOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0UmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHNwZWNpZmljQ29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJjb21wYXJlZFRvUmVmZXJlbmNlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwidmFsaWRhdGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZSIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsIm1hbmlmZXN0IiwiZWxpZGUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9ubiIsImZvcmNlZCIsInBvc2l0IiwiYWJsYXRlIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZXMiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJjb250ZXh0cyIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJhYmxhdGVzIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25BbmRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2UiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7cUVBVHlCOzBCQUVGOzRCQUNZOzZCQUNjO3lCQUNrQjt3QkFDSzt5QkFDcUI7Ozs7OztNQUU3RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQixDQUFFO1FBQ3BGLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBO0lBQzlCO0lBRUFDLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRywwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUNGLG9CQUFvQjtJQUNsQztJQUVBRywrQkFBK0I7UUFDN0IsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHdCQUF3QlIsTUFBTSxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ1IsZUFBZSxDQUFDSyxPQUFPLElBQ2xESSxh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