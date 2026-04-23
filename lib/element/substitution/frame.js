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
const _default = (0, _elements.define)(class FrameSubstitution extends _substitution.default {
    constructor(contexts, string, node, breakPoint, targetFrame, replacementFrame){
        super(contexts, string, node, breakPoint);
        this.targetFrame = targetFrame;
        this.replacementFrame = replacementFrame;
    }
    getTargetFrame() {
        return this.targetFrame;
    }
    getReplacementFrame() {
        return this.replacementFrame;
    }
    getFrameSubstitutionNode() {
        const node = this.getNode(), frameSubstitutionNode = node; ///
        return frameSubstitutionNode;
    }
    getMetavariableNode() {
        return this.targetFrame.getMetavariableNode();
    }
    getTargetNode() {
        const targetFrameNode = this.targetFrame.getNode(), tergetNode = targetFrameNode; ///
        return tergetNode;
    }
    getReplacementNode() {
        const replacementFrameNode = this.replacementFrame.getNode(), replacementNode = replacementFrameNode; ///
        return replacementNode;
    }
    isTrivial() {
        const targetFrameEqualToReplacementFrame = this.targetFrame.isEqualTo(this.replacementFrame), trivial = targetFrameEqualToReplacementFrame; ///
        return trivial;
    }
    matchMetavariableNode(metavariableNode) {
        return this.targetFrame.matchMetavariableNode(metavariableNode);
    }
    compareFrame(frame, context) {
        const frameEqualToReplacementFrame = this.replacementFrame.isEqualTo(frame), comparedToFrame = frameEqualToReplacementFrame; ///
        return comparedToFrame;
    }
    compareParameter(parameter) {
        const targetFrameComparesToParameter = this.targetFrame.compareParameter(parameter), comparesToParameter = targetFrameComparesToParameter; ///
        return comparesToParameter;
    }
    validate(context) {
        let frameSubstitution = null;
        const frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            validates = true;
            frameSubstitution = validSubstitution; ///
            context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
        } else {
            const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext();
            (0, _context.attempts)((generalContext, specificContext)=>{
                const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                if (targetFrameValidates) {
                    const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                    if (replacementFrameValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    this.commit(generalContext, specificContext);
                }
            }, generalContext, specificContext);
            if (validates) {
                const substitution = this; ///
                frameSubstitution = substitution; ///
                context.addSubstitution(substitution);
            }
        }
        if (validates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
        }
        return frameSubstitution;
    }
    validateTargetFrame(generalContext, specificContext) {
        let targetFrameValidates = false;
        const context = generalContext, frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution's target frame...`);
        const targetFrameSingular = this.targetFrame.isSingular();
        if (targetFrameSingular) {
            (0, _context.manifest)((context)=>{
                (0, _context.elide)((context)=>{
                    const tragetFrame = this.targetFrame.validate(context);
                    if (tragetFrame !== null) {
                        this.targetFrame = tragetFrame;
                        targetFrameValidates = true;
                    }
                }, context);
            }, specificContext, context);
        } else {
            const targetFrameString = this.targetFrame.getString();
            context.debug(`The '${targetFrameString}' target frame is not singular.`);
        }
        if (targetFrameValidates) {
            context.debug(`...validated the frame substitution's target frame...`);
        }
        return targetFrameValidates;
    }
    validateReplacementFrame(generalContext, specificContext) {
        let replacementFrameValidates = false;
        const context = specificContext, frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution's replacement frame...`);
        (0, _context.elide)((context)=>{
            const replacementFrame = this.replacementFrame.validate(context);
            if (replacementFrame !== null) {
                this.replacementFrame = replacementFrame;
                replacementFrameValidates = true;
            }
        }, context);
        if (replacementFrameValidates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame substitution's replacement frame.`);
        }
        return replacementFrameValidates;
    }
    unifySubstitution(substitution, context) {
        let substitutionUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);
        (0, _context.reconcile)((context)=>{
            const replacementFrameUnifies = this.unifyReplacementFrame(substitution, context);
            if (replacementFrameUnifies) {
                const targetFrameUnifies = this.unifyTargetFrame(substitution, context);
                if (targetFrameUnifies) {
                    context.commit();
                    substitutionUnifies = true;
                }
            }
        }, context);
        if (substitutionUnifies) {
            context.debug(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
        }
        return substitutionUnifies;
    }
    unifyTargetFrame(substitution, context) {
        let targetFrameUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's target frame with the '${generalSubstitutionString}' substitution's target frame...`);
        const generalSubstitutionGeneralContext = generalSubstitution.getGeneralContext(), specificSubstitutionGeneralContext = specificSubstitution.getGeneralContext(), generalSubstitutionTargetFrame = generalSubstitution.getTargetFrame(), specificSubstitutionTargetFrame = specificSubstitution.getTargetFrame(), generalContext = generalSubstitutionGeneralContext, specificContext = specificSubstitutionGeneralContext, generalFrame = generalSubstitutionTargetFrame, specificFrame = specificSubstitutionTargetFrame; ///
        (0, _context.reconcile)((specificContext)=>{
            const frameNode = generalFrame.getFrameNode(), metavariable = metavariableFromFrameNode(frameNode, generalContext);
            if (metavariable !== null) {
                const frame = specificFrame, frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    specificContext.commit(context);
                    targetFrameUnifies = true;
                }
            }
        }, specificContext);
        if (targetFrameUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's target frame with the '${generalSubstitutionString}' substitution's target frame.`);
        }
        return targetFrameUnifies;
    }
    unifyReplacementFrame(substitution, context) {
        let replacementFrameUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's replacement frame with the '${generalSubstitutionString}' substitution's replacement frame...`);
        const generalSubstitutionSpecificContext = generalSubstitution.getSpecificContext(), specificSubstitutionSpecificContext = specificSubstitution.getSpecificContext(), generalSubstitutionReplacementFrame = generalSubstitution.getReplacementFrame(), specificSubstitutionReplacementFrame = specificSubstitution.getReplacementFrame(), generalContext = generalSubstitutionSpecificContext, specificContext = specificSubstitutionSpecificContext, generalFrame = generalSubstitutionReplacementFrame, specificFrame = specificSubstitutionReplacementFrame; ///
        (0, _context.reconcile)((specificContext)=>{
            const frameNode = generalFrame.getNode(), metavariable = metavariableFromFrameNode(frameNode, generalContext);
            if (metavariable !== null) {
                const frame = specificFrame, frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    specificContext.commit(context);
                    replacementFrameUnifies = true;
                }
            }
        }, specificContext);
        if (replacementFrameUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's replacement frame with the '${generalSubstitutionString}' substitution's replacement frame.`);
        }
        return replacementFrameUnifies;
    }
    static name = "FrameSubstitution";
    static fromJSON(json, context) {
        let frameSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                (0, _context.unserialises)((json, generalContext, specificContext)=>{
                    const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, generalContext), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, specificContext), contexts = [
                        generalContext,
                        specificContext
                    ];
                    frameSubstitutionn = new FrameSubstitution(contexts, string, node, breakPoint, targetFrame, replacementFrame);
                }, json, context);
            }, context);
        }
        return frameSubstitutionn;
    }
    static fromStatement(statement, context) {
        let frameSubstitution = null;
        const frameSubstitutionNode = statement.getFrameSubstitutionNode();
        if (frameSubstitutionNode !== null) {
            (0, _context.ablate)((context)=>{
                const generalContext = context, specificContext = context; ///
                frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, generalContext, specificContext);
            }, context);
        }
        return frameSubstitution;
    }
    static fromFrameAndMetavariable(frame, metavariable, generalContext, specificContext) {
        let frameSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, frameSubstitutionString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameSubstitutionString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context);
                frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return frameSubstitution;
    }
});
function metavariableFromFrameNode(frameNode, generalContext) {
    let metavariable = null;
    const metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode);
    }
    return metavariable;
}
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, generalContext) {
    const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = generalContext.findFrameByFrameNode(targetFrameNode);
    return targetFrame;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, specificContext) {
    const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = specificContext.findFrameByFrameNode(replacementFrameNode);
    return replacementFrame;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgZWxpZGUsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlLCB1bnNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpIHtcbiAgICBzdXBlcihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldEZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gdGhpcy50YXJnZXRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudEZyYW1lKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldEZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuaXNFcXVhbFRvKGZyYW1lKSxcbiAgICAgICAgICBjb21wYXJlZFRvRnJhbWUgPSBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvRnJhbWU7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0RnJhbWUuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHRzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgbWFuaWZlc3QoKGNvbnRleHQpID0+IHtcbiAgICAgICAgZWxpZGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0cmFnZXRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodHJhZ2V0RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0cmFnZXRGcmFtZTtcblxuICAgICAgICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRGcmFtZVN0cmluZyA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlIGZyYW1lIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIGVsaWRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzID0gdGhpcy51bmlmeVJlcGxhY2VtZW50RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEZyYW1lVW5pZmllcyA9IHRoaXMudW5pZnlUYXJnZXRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRGcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUYXJnZXRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0RnJhbWVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZSB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRUYXJnZXRGcmFtZSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxGcmFtZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNGcmFtZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWU7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGdlbmVyYWxGcmFtZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBzcGVjaWZpY0ZyYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHRhcmdldEZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldEZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0RnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudEZyYW1lKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudEZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZSB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50RnJhbWUoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudEZyYW1lKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRnJhbWUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNGcmFtZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVOb2RlID0gZ2VuZXJhbEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBzcGVjaWZpY0ZyYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICB1bnNlcmlhbGlzZXMoKGpzb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcbiAgICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gc3BlY2lmaWNDb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRUYXJnZXRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImNvbnRleHQiLCJmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiY29tcGFyZWRUb0ZyYW1lIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtYW5pZmVzdCIsImVsaWRlIiwidHJhZ2V0RnJhbWUiLCJ0YXJnZXRGcmFtZVN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInJlcGxhY2VtZW50RnJhbWVVbmlmaWVzIiwidW5pZnlSZXBsYWNlbWVudEZyYW1lIiwidGFyZ2V0RnJhbWVVbmlmaWVzIiwidW5pZnlUYXJnZXRGcmFtZSIsImdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldEZyYW1lIiwiZ2VuZXJhbEZyYW1lIiwic3BlY2lmaWNGcmFtZSIsImZyYW1lTm9kZSIsImdldEZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiZnJhbWVTdWJzdGl0dXRpb25uIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZXMiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWJsYXRlcyIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZ2V0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