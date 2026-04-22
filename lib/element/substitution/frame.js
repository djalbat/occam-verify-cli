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
            const forced = true;
            (0, _context.posit)((context)=>{
                (0, _context.ablate)((context)=>{
                    (0, _context.instantiate)((context)=>{
                        (0, _context.unserialises)((json, generalContext, specificContext)=>{
                            const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, generalContext), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            frameSubstitutionn = new FrameSubstitution(contexts, string, node, breakPoint, targetFrame, replacementFrame);
                        }, json, context);
                    }, context);
                }, forced, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgcG9zaXQsIGVsaWRlLCBhYmxhdGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWU7XG4gICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0cygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0RnJhbWVTaW5ndWxhciA9IHRoaXMudGFyZ2V0RnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldEZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIG1hbmlmZXN0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGVsaWRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHJhZ2V0RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRyYWdldEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEZyYW1lID0gdHJhZ2V0RnJhbWU7XG5cbiAgICAgICAgICAgIHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSBmcmFtZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBlbGlkZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcblxuICAgICAgICByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lVW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudEZyYW1lKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVW5pZmllcykge1xuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGFyZ2V0RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0RnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0RnJhbWUoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldEZyYW1lID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0RnJhbWUoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRnJhbWUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldEZyYW1lOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBnZW5lcmFsRnJhbWUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gc3BlY2lmaWNGcmFtZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICB0YXJnZXRGcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudEZyYW1lKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGdlbmVyYWxGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gc3BlY2lmaWNGcmFtZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgY29uc3QgZm9yY2VkID0gdHJ1ZTtcblxuICAgICAgcG9zaXQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHVuc2VyaWFsaXNlcygoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9ubiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSk7XG4gICAgICAgICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgfSwgZm9yY2VkLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uXG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gZ2VuZXJhbENvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBzcGVjaWZpY0NvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUocmVwbGFjZW1lbnRGcmFtZU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudEZyYW1lO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dHMiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldEZyYW1lTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVGcmFtZSIsImZyYW1lIiwiY29udGV4dCIsImZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJjb21wYXJlZFRvRnJhbWUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0cyIsInRhcmdldEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUiLCJjb21taXQiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsIm1hbmlmZXN0IiwiZWxpZGUiLCJ0cmFnZXRGcmFtZSIsInRhcmdldEZyYW1lU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwicmVjb25jaWxlIiwicmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50RnJhbWUiLCJ0YXJnZXRGcmFtZVVuaWZpZXMiLCJ1bmlmeVRhcmdldEZyYW1lIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUiLCJnZW5lcmFsRnJhbWUiLCJzcGVjaWZpY0ZyYW1lIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZSIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJmcmFtZVN1YnN0aXR1dGlvbm4iLCJmb3JjZWQiLCJwb3NpdCIsImFibGF0ZSIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2VzIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFibGF0ZXMiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztxRUFUeUI7MEJBRUY7NEJBQ1k7NkJBQ1U7eUJBQ2M7d0JBQ0s7eUJBQ3dDOzs7Ozs7TUFFeEcsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsQ0FBRTtRQUM3RSxLQUFLLENBQUNMLFVBQVVDLFFBQVFDLE1BQU1DO1FBRTlCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztJQUN6QjtJQUVBRyxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtJQUM5QjtJQUVBRywyQkFBMkI7UUFDekIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHdCQUF3QlIsTUFBTSxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFdBQVcsQ0FBQ08sbUJBQW1CO0lBQUk7SUFFdkVDLGdCQUFnQjtRQUNkLE1BQU1DLGtCQUFrQixJQUFJLENBQUNULFdBQVcsQ0FBQ0ssT0FBTyxJQUMxQ0ssYUFBYUQsaUJBQWlCLEdBQUc7UUFFdkMsT0FBT0M7SUFDVDtJQUVB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