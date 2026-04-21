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
            (0, _context.sequester)((context)=>{
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
        (0, _context.sequester)((context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlU3Vic3RpdHV0aW9uRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgcG9zaXQsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCBzZXF1ZXN0ZXIsIGluc3RhbnRpYXRlLCB1bnNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRhcmdldFJlZmVyZW5jZSA9IHRhcmdldFJlZmVyZW5jZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUYXJnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlZFRvUmVmZXJlbmNlID0gcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25SZWZlcmVuY2VTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uIGluc3RhbmNlb2YgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25SZWZlcmVuY2VTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkNvbXBhcmVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uQ29tcGFyZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHRzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHJlZmVyZW5jZS4uLmApO1xuXG4gICAgbWFuaWZlc3QoKGNvbnRleHQpID0+IHtcbiAgICAgIHNlcXVlc3RlcigoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHJlZmVyZW5jZS4uLmApO1xuXG4gICAgc2VxdWVzdGVyKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBjb25zdCBmb3JjZWQgPSB0cnVlO1xuXG4gICAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRSZWZlcmVuY2UsIHJlcGxhY2VtZW50UmVmZXJlbmNlKTtcbiAgICAgICAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICB9LCBmb3JjZWQsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzdW1wdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb24oYXNzdW1wdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlID0gZ2VuZXJhbENvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSh0YXJnZXRSZWZlcmVuY2VOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0UmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHNwZWNpZmljQ29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlIiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRSZWZlcmVuY2VOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJjb21wYXJlZFRvUmVmZXJlbmNlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFJlZmVyZW5jZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwidmFsaWRhdGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZSIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsIm1hbmlmZXN0Iiwic2VxdWVzdGVyIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbm4iLCJmb3JjZWQiLCJwb3NpdCIsImFibGF0ZSIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2VzIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImluc3RhbnRpYXRlUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGFyZ2V0UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dHMiLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlcyIsInJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImZyb21Bc3N1bXB0aW9uQW5kTWV0YUxldmVsQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3FFQVR5QjswQkFFRjs0QkFDWTs2QkFDYzt5QkFDa0I7d0JBQ0s7eUJBQ3lCOzs7Ozs7TUFFakcsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLHFCQUFZO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0IsQ0FBRTtRQUNwRixLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDRixvQkFBb0I7SUFDbEM7SUFFQUcsK0JBQStCO1FBQzdCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx3QkFBd0JSLE1BQU0sR0FBRztRQUV2QyxPQUFPUTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLHNCQUFzQixJQUFJLENBQUNSLGVBQWUsQ0FB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