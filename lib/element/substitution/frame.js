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
const _context = require("../../utilities/context");
const _breakPoint = require("../../utilities/breakPoint");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
const _string = require("../../utilities/string");
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
                (0, _context.sequester)((context)=>{
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
        (0, _context.sequester)((context)=>{
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const generalFrameNode = generalFrame.getNode(), generalMetavariable = metavariableFromFrameNode(generalFrameNode, generalContext);
                if (generalMetavariable !== null) {
                    const frame = specificFrame, metavariable = generalMetavariable, frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                    if (frameUnifies) {
                        specificContext.commit(context);
                        targetFrameUnifies = true;
                    }
                }
            }, specificContext);
        }, specificContext, context);
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const generalFrameNode = generalFrame.getNode(), generalMetavariable = metavariableFromFrameNode(generalFrameNode, generalContext);
                if (generalMetavariable !== null) {
                    const frame = specificFrame, metavariable = generalMetavariable, frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                    if (frameUnifies) {
                        specificContext.commit(context);
                        replacementFrameUnifies = true;
                    }
                }
            }, specificContext);
        }, specificContext, context);
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
            (0, _context.unserialises)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), specificContext = context, contexts = [
                        generalContext,
                        specificContext
                    ];
                    frameSubstitutionn = new FrameSubstitution(contexts, string, node, breakPoint, targetFrame, replacementFrame);
                }, context);
            }, json, context);
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
function metavariableFromFrameNode(frameNode, context) {
    let metavariable = null;
    const metavariableNode = frameNode.getMetavariableNode();
    if (metavariableNode !== null) {
        metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
    }
    return metavariable;
}
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = context.findFrameByFrameNode(targetFrameNode);
    return targetFrame;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = context.findFrameByFrameNode(replacementFrameNode);
    return replacementFrame;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgam9pbiwgcmVjb25jaWxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBhYmxhdGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgc2VxdWVzdGVyLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWU7XG4gICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0cygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0RnJhbWVTaW5ndWxhciA9IHRoaXMudGFyZ2V0RnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldEZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIG1hbmlmZXN0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIHNlcXVlc3RlcigoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyYWdldEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0cmFnZXRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IHRyYWdldEZyYW1lO1xuXG4gICAgICAgICAgICB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEZyYW1lU3RyaW5nID0gdGhpcy50YXJnZXRGcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS4uLmApO1xuXG4gICAgc2VxdWVzdGVyKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzID0gdGhpcy51bmlmeVJlcGxhY2VtZW50RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEZyYW1lVW5pZmllcyA9IHRoaXMudW5pZnlUYXJnZXRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRGcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCgpO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUYXJnZXRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0RnJhbWVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZSB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRUYXJnZXRGcmFtZSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxGcmFtZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNGcmFtZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWU7IC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsRnJhbWVOb2RlID0gZ2VuZXJhbEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZ2VuZXJhbEZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChnZW5lcmFsTWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBzcGVjaWZpY0ZyYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgdGFyZ2V0RnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudEZyYW1lKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsRnJhbWVOb2RlID0gZ2VuZXJhbEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZ2VuZXJhbEZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChnZW5lcmFsTWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWUgPSBzcGVjaWZpY0ZyYW1lLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0cyIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0VGFyZ2V0RnJhbWUiLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0RnJhbWVOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZUZyYW1lIiwiZnJhbWUiLCJjb250ZXh0IiwiZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImNvbXBhcmVkVG9GcmFtZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2VuZXJhbENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsImF0dGVtcHRzIiwidGFyZ2V0RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJzZXF1ZXN0ZXIiLCJ0cmFnZXRGcmFtZSIsInRhcmdldEZyYW1lU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwicmVjb25jaWxlIiwicmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50RnJhbWUiLCJ0YXJnZXRGcmFtZVVuaWZpZXMiLCJ1bmlmeVRhcmdldEZyYW1lIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUiLCJnZW5lcmFsRnJhbWUiLCJzcGVjaWZpY0ZyYW1lIiwiam9pbiIsImdlbmVyYWxGcmFtZU5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRGcmFtZSIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJmcmFtZVN1YnN0aXR1dGlvbm4iLCJ1bnNlcmlhbGlzZXMiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhYmxhdGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhYmxhdGVzIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGO3lCQUNTOzRCQUNHOzZCQUNVO3lCQUNjO3dCQUNLOzs7Ozs7TUFHaEUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsQ0FBRTtRQUM3RSxLQUFLLENBQUNMLFVBQVVDLFFBQVFDLE1BQU1DO1FBRTlCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztJQUN6QjtJQUVBRyxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNG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