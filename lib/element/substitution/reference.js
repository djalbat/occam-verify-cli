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
    constructor(context, string, node, lineIndex, generalContext, targetReference, replacementReference){
        super(context, string, node, lineIndex, generalContext);
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
    validate(generalContext, specificContext) {
        let referenceSubstitution = null;
        const context = specificContext, referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            referenceSubstitution = validSubstitution; ///
            context.debug(`...the '${referenceSubstitutionString}' reference substitution is already valid.`);
        } else {
            const context = this.getContext();
            (0, _context.join)((generalContext)=>{
                (0, _context.join)((specificContext)=>{
                    (0, _context.attempt)((generalContext, specificContext)=>{
                        const targetReferenceValidates = this.validateTargetReference(generalContext, specificContext);
                        if (targetReferenceValidates) {
                            const replacementReferenceValidates = this.validateReplacementReference(generalContext, specificContext);
                            if (replacementReferenceValidates) {
                                validates = true;
                            }
                        }
                        if (validates) {
                            this.setContexts(generalContext, specificContext);
                        }
                    }, generalContext, specificContext);
                }, specificContext, context);
            }, generalContext, context);
        }
        if (validates) {
            const substitution = this; ///
            referenceSubstitution = substitution; ///
            context.addSubstitution(substitution);
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution.`);
        }
        return referenceSubstitution;
    }
    validateTargetReference(generalContext, specificContext) {
        let targetReferenceValidates = false;
        const context = generalContext, referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's target reference...`);
        (0, _context.descend)((context)=>{
            const targetReference = this.targetReference.validate(context);
            if (targetReference !== null) {
                targetReferenceValidates = true;
            }
        }, context);
        if (targetReferenceValidates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's target reference...`);
        }
        return targetReferenceValidates;
    }
    validateReplacementReference(generalContext, specificContext) {
        let replacementReferenceValidates = false;
        const context = specificContext, referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's replacement reference...`);
        (0, _context.descend)((context)=>{
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
            (0, _context.unserialise)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context), node = referenceSubstitutionNode, targetReference = targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context), replacementReference = replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context);
                    referenceSubstitutionn = new ReferenceSubstitution(context, string, node, lineIndex, generalContext, targetReference, replacementReference);
                }, context);
            }, json, context);
        }
        return referenceSubstitutionn;
    }
    static fromReferenceAndMetavariable(reference, metavariable, context) {
        let referenceSubstitution;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const referenceSubstitutionString = (0, _string.referenceSubstitutionStringFromReferenceAndMetavariable)(reference, metavariable), string = referenceSubstitutionString, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context);
                referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, context);
            }, context);
        }, context);
        return referenceSubstitution;
    }
    static fromAssumptionAndMetaLevelAssumption(assumption, metaLevelAssumption, context) {
        let referenceSubstitution;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const reference = metaLevelAssumption.getReference(), metavariable = assumption.getMetavariable(), referenceSubstitutionString = (0, _string.referenceSubstitutionStringFromReferenceAndMetavariable)(reference, metavariable), string = referenceSubstitutionString, referenceSubstitutionNode = (0, _instantiate.instantiateReferenceSubstitution)(string, context);
                referenceSubstitution = (0, _element.referenceSubstitutionFromReferenceSubstitutionNode)(referenceSubstitutionNode, context);
            }, context);
        }, context);
        return referenceSubstitution;
    }
});
function targetReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    const targetReferenceNode = referenceSubstitutionNode.getTargetReferenceNode(), targetReference = context.findReferenceByReferenceNode(targetReferenceNode);
    return targetReference;
}
function replacementReferenceFromReferenceSubstitutionNode(referenceSubstitutionNode, context) {
    const replacementReferenceNode = referenceSubstitutionNode.getReplacementReferenceNode(), replacementReference = context.findReferenceByReferenceNode(replacementReferenceNode);
    return replacementReference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy50YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2U7XG4gICAgdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VOb2RlID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VFcXVhbFRvUmVwbGFjZW1lbnRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UuaXNFcXVhbFRvKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29tcGFyZWRUb1JlZmVyZW5jZSA9IHJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0UmVmZXJlbmNlQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBzdWJzdGl0dXRpb25Db21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uUmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbiBpbnN0YW5jZW9mIFJlZmVyZW5jZVN1YnN0aXR1dGlvbik7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICBzdWJzdGl0dXRpb25Db21wYXJlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbkNvbXBhcmVzO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgYXR0ZW1wdCgoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFJlZmVyZW5jZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0cyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2UgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHRhcmdldFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHJlZmVyZW5jZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3N1bXB0aW9uQW5kTWV0YUxldmVsQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsImdldFRhcmdldFJlZmVyZW5jZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiY29tcGFyZWRUb1JlZmVyZW5jZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlcyIsInN1YnN0aXR1dGlvblJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJzZXRDb250ZXh0cyIsImFkZFN1YnN0aXR1dGlvbiIsImRlc2NlbmQiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25BbmRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7cUVBUnlCOzBCQUVGOzZCQUMwQjt5QkFDa0I7d0JBQ0s7eUJBQ0M7Ozs7OztNQUV6RSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDbkcsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztRQUV4QyxJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO0lBQ2xDO0lBRUFHLCtCQUErQjtRQUM3QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsd0JBQXdCVCxN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