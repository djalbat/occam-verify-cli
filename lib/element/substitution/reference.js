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
        const context = generalContext, targetReferenceString = this.targetReference.getString(), referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's '${targetReferenceString}' target reference...`);
        (0, _context.descend)((context)=>{
            const targetReference = this.targetReference.validate(context);
            if (targetReference !== null) {
                targetReferenceValidates = true;
            }
        }, context);
        if (targetReferenceValidates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's '${targetReferenceString}' target reference...`);
        }
        return targetReferenceValidates;
    }
    validateReplacementReference(generalContext, specificContext) {
        let replacementReferenceValidates = false;
        const context = specificContext, replacementReferenceString = this.replacementReference.getString(), referenceSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${referenceSubstitutionString}' reference substitution's '${replacementReferenceString}' replacement reference...`);
        (0, _context.descend)((context)=>{
            const replacementReference = this.replacementReference.validate(context);
            if (replacementReference !== null) {
                replacementReferenceValidates = true;
            }
        }, context);
        if (replacementReferenceValidates) {
            context.debug(`...validated the '${referenceSubstitutionString}' reference substitution's '${replacementReferenceString}' replacement reference.`);
        }
        return replacementReferenceValidates;
    }
    static name = "ReferenceSubstitution";
    toJSON() {
        const contexts = this.getContexts();
        return (0, _context.serialise)((...contexts)=>{
            const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                contexts,
                string,
                lineIndex
            };
            return json;
        }, ...contexts);
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9yZWZlcmVuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0UmVmZXJlbmNlLCByZXBsYWNlbWVudFJlZmVyZW5jZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICB0aGlzLnRhcmdldFJlZmVyZW5jZSA9IHRhcmdldFJlZmVyZW5jZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUYXJnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZU5vZGUgPSB0aGlzLnRhcmdldFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFJlZmVyZW5jZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRSZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZUVxdWFsVG9SZXBsYWNlbWVudFJlZmVyZW5jZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50UmVmZXJlbmNlKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0UmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5pc0VxdWFsVG8ocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlZFRvUmVmZXJlbmNlID0gcmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25SZWZlcmVuY2VTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uIGluc3RhbmNlb2YgUmVmZXJlbmNlU3Vic3RpdHV0aW9uKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25SZWZlcmVuY2VTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbkNvbXBhcmVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uQ29tcGFyZXM7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBhdHRlbXB0KChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50UmVmZXJlbmNlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHRzKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRSZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGFyZ2V0UmVmZXJlbmNlU3RyaW5nID0gdGhpcy50YXJnZXRSZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nfScgcmVmZXJlbmNlIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFJlZmVyZW5jZVN0cmluZ30nIHRhcmdldCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFJlZmVyZW5jZSA9IHRoaXMudGFyZ2V0UmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0UmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZ30nIHJlZmVyZW5jZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRSZWZlcmVuY2VTdHJpbmd9JyB0YXJnZXQgcmVmZXJlbmNlLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmd9JyByZXBsYWNlbWVudCByZWZlcmVuY2UuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlID0gdGhpcy5yZXBsYWNlbWVudFJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50UmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmd9JyByZWZlcmVuY2Ugc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRSZWZlcmVuY2VTdHJpbmd9JyByZXBsYWNlbWVudCByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVN1YnN0aXR1dGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKC4uLmNvbnRleHRzKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgLi4uY29udGV4dHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSB0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFJlZmVyZW5jZSA9IHJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUocmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25uID0gbmV3IFJlZmVyZW5jZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFJlZmVyZW5jZSwgcmVwbGFjZW1lbnRSZWZlcmVuY2UpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmcgPSByZWZlcmVuY2VTdWJzdGl0dXRpb25TdHJpbmdGcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3N1bXB0aW9uQW5kTWV0YUxldmVsQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBtZXRhTGV2ZWxBc3N1bXB0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSByZWZlcmVuY2VTdWJzdGl0dXRpb25Gcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFJlZmVyZW5jZUZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlKHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICB0YXJnZXRSZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUodGFyZ2V0UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZShyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50UmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsImdldFRhcmdldFJlZmVyZW5jZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0UmVmZXJlbmNlTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFJlZmVyZW5jZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0UmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRXF1YWxUb1JlcGxhY2VtZW50UmVmZXJlbmNlIiwiY29tcGFyZWRUb1JlZmVyZW5jZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRSZWZlcmVuY2VDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlcyIsInN1YnN0aXR1dGlvblJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0UmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJzZXRDb250ZXh0cyIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFJlZmVyZW5jZVN0cmluZyIsImRlc2NlbmQiLCJyZXBsYWNlbWVudFJlZmVyZW5jZVN0cmluZyIsIm5hbWUiLCJ0b0pTT04iLCJjb250ZXh0cyIsImdldENvbnRleHRzIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJyZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJ0YXJnZXRSZWZlcmVuY2VGcm9tUmVmZXJlbmNlU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlRnJvbVJlZmVyZW5jZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlIiwicmVmZXJlbmNlU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbkZyb21SZWZlcmVuY2VTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUFzc3VtcHRpb25BbmRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRSZWZlcmVuY2VOb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7cUVBUnlCOzBCQUVGOzZCQUMwQjt5QkFDa0I7d0JBQ0s7eUJBQ1k7Ozs7OztNQUVwRixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDbkcsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztRQUV4QyxJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CO0lBQ2xDO0lBRUFHLCtCQUErQjtRQUM3QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsd0JBQXdCVCxNQUFNLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxzQkFBc0IsSUFBSSxDQUFDUixlQUFlLENBQUNLLE9BQU8sSUFDbERJLGFBQWFELHFC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