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
                    (0, _context.unserialises)((json, generalContext, specificContext)=>{
                        const context = specificContext; ///
                        (0, _context.instantiate)((context)=>{
                            const { string } = json, specificContext = context, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, generalContext), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            frameSubstitutionn = new FrameSubstitution(contexts, string, node, breakPoint, targetFrame, replacementFrame);
                        }, context);
                    }, json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgcG9zaXQsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCByZWNvbmNpbGUsIHNlcXVlc3RlciwgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lO1xuICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRUYXJnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSB0aGlzLnRhcmdldEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50RnJhbWUpLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5pc0VxdWFsVG8oZnJhbWUpLFxuICAgICAgICAgIGNvbXBhcmVkVG9GcmFtZSA9IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9GcmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRGcmFtZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldEZyYW1lU2luZ3VsYXIgPSB0aGlzLnRhcmdldEZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0cmFnZXRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodHJhZ2V0RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0cmFnZXRGcmFtZTtcblxuICAgICAgICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRGcmFtZVN0cmluZyA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlIGZyYW1lIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIHNlcXVlc3RlcigoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcblxuICAgICAgICByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lVW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudEZyYW1lKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVW5pZmllcykge1xuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGFyZ2V0RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0RnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0RnJhbWUoc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0RnJhbWUoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldEZyYW1lID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0RnJhbWUoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRnJhbWUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0RnJhbWUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldEZyYW1lOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGUgPSBnZW5lcmFsRnJhbWUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gc3BlY2lmaWNGcmFtZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICB0YXJnZXRGcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRGcmFtZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudEZyYW1lKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRGcmFtZSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbEZyYW1lID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljRnJhbWUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGdlbmVyYWxGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gc3BlY2lmaWNGcmFtZSwgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgY29uc3QgZm9yY2VkID0gdHJ1ZTtcblxuICAgICAgcG9zaXQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbm4gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuICAgICAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgICAgIH0sIGZvcmNlZCwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gc3BlY2lmaWNDb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRUYXJnZXRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImNvbnRleHQiLCJmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiY29tcGFyZWRUb0ZyYW1lIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtYW5pZmVzdCIsInNlcXVlc3RlciIsInRyYWdldEZyYW1lIiwidGFyZ2V0RnJhbWVTdHJpbmciLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJyZWNvbmNpbGUiLCJyZXBsYWNlbWVudEZyYW1lVW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRGcmFtZSIsInRhcmdldEZyYW1lVW5pZmllcyIsInVuaWZ5VGFyZ2V0RnJhbWUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldEZyYW1lIiwic3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRGcmFtZSIsImdlbmVyYWxGcmFtZSIsInNwZWNpZmljRnJhbWUiLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lIiwic3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudEZyYW1lIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImZyYW1lU3Vic3RpdHV0aW9ubiIsImZvcmNlZCIsInBvc2l0IiwiYWJsYXRlIiwidW5zZXJpYWxpc2VzIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiYWJsYXRlcyIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3FFQVR5QjswQkFFRjs0QkFDWTs2QkFDVTt5QkFDYzt3QkFDSzt5QkFDNEM7Ozs7OztNQUU1RyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDBCQUEwQkMscUJBQVk7SUFDaEUsWUFBWUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixDQUFFO1FBQzdFLEtBQUssQ0FBQ0wsVUFBVUMsUUFBUUMsTUFBTUM7UUFFOUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO0lBQzlCO0lBRUFHLDJCQUEyQjtRQUN6QixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsd0JBQXdCUixNQUFNLEdBQUc7UUFFdkMsT0FBT1E7SUFDVDtJQUVBQyxzQkFBc0I7UUFBRSxPQUFPLElBQUksQ0FBQ1AsV0FBVyxD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