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
const _default = (0, _elements.define)(class FrameSubstitution extends _substitution.default {
    constructor(context, string, node, lineIndex, generalContext, targetFrame, replacementFrame){
        super(context, string, node, lineIndex, generalContext);
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
    validate(generalContext, specificContext) {
        let frameSubstitution = null;
        const context = specificContext, frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            frameSubstitution = validSubstitution; ///
            context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
        } else {
            const context = this.getContext();
            (0, _context.join)((generalContext)=>{
                (0, _context.join)((specificContext)=>{
                    (0, _context.attempt)((generalContext, specificContext)=>{
                        const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                        if (targetFrameValidates) {
                            const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                            if (replacementFrameValidates) {
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
            frameSubstitution = substitution; ///
            context.addSubstitution(substitution);
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
            (0, _context.descend)((context)=>{
                const tragetFrame = this.targetFrame.validate(context);
                if (tragetFrame !== null) {
                    this.targetFrame = tragetFrame;
                    targetFrameValidates = true;
                }
            }, context);
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
        (0, _context.descend)((context)=>{
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
    static name = "FrameSubstitution";
    static fromJSON(json, context) {
        let frameSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.unserialise)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);
                    frameSubstitutionn = new FrameSubstitution(context, string, node, lineIndex, generalContext, targetFrame, replacementFrame);
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
                frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
            }, context);
        }
        return frameSubstitution;
    }
    static fromFrameAndMetavariable(frame, metavariable, context) {
        let frameSubstitution;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const frameSubstitutionString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameSubstitutionString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context);
                frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
            }, context);
        }, context);
        return frameSubstitution;
    }
});
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = context.findFrameByFrameNode(targetFrameNode);
    return targetFrame;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = context.findFrameByFrameNode(replacementFrameNode);
    return replacementFrame;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lO1xuICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRUYXJnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSB0aGlzLnRhcmdldEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50RnJhbWUpLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5pc0VxdWFsVG8oZnJhbWUpLFxuICAgICAgICAgIGNvbXBhcmVkVG9GcmFtZSA9IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9GcmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRGcmFtZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGpvaW4oKGdlbmVyYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGF0dGVtcHQoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dHMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFnZXRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRyYWdldEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IHRyYWdldEZyYW1lO1xuXG4gICAgICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSBmcmFtZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25cblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdlbmVyYWxDb250ZXh0IiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0VGFyZ2V0RnJhbWUiLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0RnJhbWVOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZUZyYW1lIiwiZnJhbWUiLCJmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiY29tcGFyZWRUb0ZyYW1lIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0Iiwiam9pbiIsImF0dGVtcHQiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwic2V0Q29udGV4dHMiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ0cmFnZXRGcmFtZSIsInRhcmdldEZyYW1lU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImZyYW1lU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztxRUFSeUI7MEJBRUY7NkJBQ3NCO3lCQUNjO3dCQUNLO3lCQUNTOzs7Ozs7TUFFekUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixDQUFFO1FBQzNGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFeEMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO0lBQzlCO0lBRUFHLDJCQUEyQjtRQUN6QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsd0JBQXdCVCxNQUFNLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxzQkFBc0I7UUFBRSxPQUFPLElBQUksQ0FBQ1AsV0FBVyxDQUFDTyxtQkFBbUI7SUFBSTtJQUV2RUMsZ0JBQWdCO1FBQ2QsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ1QsV0FBVyxDQUFDSyxPQUFPLElBQzFDSyxhQUFhRCxpQkFBaUIsR0FBRztRQUV2QyxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNQyx1QkFBdUIsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQ0ksT0FBTyxJQUNwRFEsa0JBQWtCRCxzQkFBc0IsR0FBRztRQUVqRCxPQUFPQztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNQyxxQ0FBcUMsSUFBSSxDQUFDZixXQUFXLENBQUNnQixTQUFTLENBQUMsSUFBSSxDQUFDZixnQkFBZ0IsR0FDckZnQixVQUFVRixvQ0FBb0MsR0FBRztRQUV2RCxPQUFPRTtJQUNUO0lBRUFDLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ2tCLHFCQUFxQixDQUFDQztJQUFtQjtJQUUzR0MsYUFBYUMsS0FBSyxFQUFFMUIsT0FBTyxFQUFFO1FBQzNCLE1BQU0yQiwrQkFBK0IsSUFBSSxDQUFDckIsZ0JBQWdCLENBQUNlLFNBQVMsQ0FBQ0ssUUFDL0RFLGtCQUFrQkQsOEJBQThCLEdBQUc7UUFFekQsT0FBT0M7SUFDVDtJQUVBQyxpQkFBaUJDLFNBQVMsRUFBRTtRQUMxQixNQUFNQyxpQ0FBaUMsSUFBSSxDQUFDMUIsV0FBVyxDQUFDd0IsZ0JBQWdCLENBQUNDLFlBQ25FRSxzQkFBc0JELGdDQUFpQyxHQUFHO1FBRWhFLE9BQU9DO0lBQ1Q7SUFFQUMsU0FBUzdCLGNBQWMsRUFBRThCLGVBQWUsRUFBRTtRQUN4QyxJQUFJQyxvQkFBb0I7UUFFeEIsTUFBTW5DLFVBQVVrQyxpQkFDVkUsMEJBQTBCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFdERyQyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHdCQUF3Qix1QkFBdUIsQ0FBQztRQUVqRixJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLHFCQUFxQixDQUFDekM7UUFFckQsSUFBSXdDLG1CQUFtQjtZQUNyQkwsb0JBQW9CSyxtQkFBb0IsR0FBRztZQUUzQ3hDLFFBQVEwQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVOLHdCQUF3QixzQ0FBc0MsQ0FBQztRQUMxRixPQUFPO1lBQ0wsTUFBTXBDLFVBQVUsSUFBSSxDQUFDMkMsVUFBVTtZQUUvQkMsSUFBQUEsYUFBSSxFQUFDLENBQUN4QztnQkFDSndDLElBQUFBLGFBQUksRUFBQyxDQUFDVjtvQkFDSlcsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDekMsZ0JBQWdCOEI7d0JBQ3ZCLE1BQU1ZLHVCQUF1QixJQUFJLENBQUNDLG1CQUFtQixDQUFDM0MsZ0JBQWdCOEI7d0JBRXRFLElBQUlZLHNCQUFzQjs0QkFDeEIsTUFBTUUsNEJBQTRCLElBQUksQ0FBQ0Msd0JBQXdCLENBQUM3QyxnQkFBZ0I4Qjs0QkFFaEYsSUFBSWMsMkJBQTJCO2dDQUM3QlQsWUFBWTs0QkFDZDt3QkFDRjt3QkFFQSxJQUFJQSxXQUFXOzRCQUNiLElBQUksQ0FBQ1csV0FBVyxDQUFDOUMsZ0JBQWdCOEI7d0JBQ25DO29CQUNGLEdBQUc5QixnQkFBZ0I4QjtnQkFDckIsR0FBR0EsaUJBQWlCbEM7WUFDdEIsR0FBR0ksZ0JBQWdCSjtRQUNyQjtRQUVBLElBQUl1QyxXQUFXO1lBQ2IsTUFBTVksZUFBZSxJQUFJLEVBQUcsR0FBRztZQUUvQmhCLG9CQUFvQmdCLGNBQWMsR0FBRztZQUVyQ25ELFFBQVFvRCxlQUFlLENBQUNEO1lBRXhCbkQsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTix3QkFBd0IscUJBQXFCLENBQUM7UUFDbkY7UUFFQSxPQUFPRDtJQUNUO0lBRUFZLG9CQUFvQjNDLGNBQWMsRUFBRThCLGVBQWUsRUFBRTtRQUNuRCxJQUFJWSx1QkFBdUI7UUFFM0IsTUFBTTlDLFVBQVVJLGdCQUNWZ0MsMEJBQTBCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFdERyQyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHdCQUF3QixzQ0FBc0MsQ0FBQztRQUVoRyxNQUFNaUIsc0JBQXNCLElBQUksQ0FBQ2hELFdBQVcsQ0FBQ2lELFVBQVU7UUFFdkQsSUFBSUQscUJBQXFCO1lBQ3ZCRSxJQUFBQSxnQkFBTyxFQUFDLENBQUN2RDtnQkFDUCxNQUFNd0QsY0FBYyxJQUFJLENBQUNuRCxXQUFXLENBQUM0QixRQUFRLENBQUNqQztnQkFFOUMsSUFBSXdELGdCQUFnQixNQUFNO29CQUN4QixJQUFJLENBQUNuRCxXQUFXLEdBQUdtRDtvQkFFbkJWLHVCQUF1QjtnQkFDekI7WUFDRixHQUFHOUM7UUFDTCxPQUFPO1lBQ0wsTUFBTXlELG9CQUFvQixJQUFJLENBQUNwRCxXQUFXLENBQUNnQyxTQUFTO1lBRXBEckMsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRWUsa0JBQWtCLCtCQUErQixDQUFDO1FBQzFFO1FBRUEsSUFBSVgsc0JBQXNCO1lBQ3hCOUMsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLHFEQUFxRCxDQUFDO1FBQ3ZFO1FBRUEsT0FBT0k7SUFDVDtJQUVBRyx5QkFBeUI3QyxjQUFjLEVBQUU4QixlQUFlLEVBQUU7UUFDeEQsSUFBSWMsNEJBQTRCO1FBRWhDLE1BQU1oRCxVQUFVa0MsaUJBQ1ZFLDBCQUEwQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRXREckMsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix3QkFBd0IsMkNBQTJDLENBQUM7UUFFckdtQixJQUFBQSxnQkFBTyxFQUFDLENBQUN2RDtZQUNQLE1BQU1NLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDMkIsUUFBUSxDQUFDakM7WUFFeEQsSUFBSU0scUJBQXFCLE1BQU07Z0JBQzdCLElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUdBO2dCQUV4QjBDLDRCQUE0QjtZQUM5QjtRQUNGLEdBQUdoRDtRQUVILElBQUlnRCwyQkFBMkI7WUFDN0JoRCxRQUFRMEMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLHdCQUF3Qix5Q0FBeUMsQ0FBQztRQUN2RztRQUVBLE9BQU9ZO0lBQ1Q7SUFFQSxPQUFPVSxPQUFPLG9CQUFvQjtJQUVsQyxPQUFPQyxTQUFTQyxJQUFJLEVBQUU1RCxPQUFPLEVBQUU7UUFDN0IsSUFBSTZELHFCQUFxQjtRQUV6QixNQUFNLEVBQUVILElBQUksRUFBRSxHQUFHRTtRQUVqQixJQUFJLElBQUksQ0FBQ0YsSUFBSSxLQUFLQSxNQUFNO1lBQ3RCSSxJQUFBQSxvQkFBVyxFQUFDLENBQUNGLE1BQU14RCxnQkFBZ0I4QjtnQkFDakMsTUFBTWxDLFVBQVVrQyxpQkFBa0IsR0FBRztnQkFFckM2QixJQUFBQSxvQkFBVyxFQUFDLENBQUMvRDtvQkFDWCxNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUd5RCxNQUN4QmpELHdCQUF3QnFELElBQUFBLHlDQUE0QixFQUFDL0QsUUFBUUQsVUFDN0RFLE9BQU9TLHVCQUNQTixjQUFjNEQscUNBQXFDdEQsdUJBQXVCWCxVQUMxRU0sbUJBQW1CNEQsMENBQTBDdkQsdUJBQXVCWDtvQkFFMUY2RCxxQkFBcUIsSUFBSS9ELGtCQUFrQkUsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0MsZ0JBQWdCQyxhQUFhQztnQkFDNUcsR0FBR047WUFDTCxHQUFHNEQsTUFBTTVEO1FBQ1g7UUFFQSxPQUFPNkQ7SUFDVDtJQUVBLE9BQU9NLGNBQWNDLFNBQVMsRUFBRXBFLE9BQU8sRUFBRTtRQUN2QyxJQUFJbUMsb0JBQW9CO1FBRXhCLE1BQU14Qix3QkFBd0J5RCxVQUFVM0Qsd0JBQXdCO1FBRWhFLElBQUlFLDBCQUEwQixNQUFNO1lBQ2xDMEQsSUFBQUEsZUFBTSxFQUFDLENBQUNyRTtnQkFDTm1DLG9CQUFvQm1DLElBQUFBLG1EQUEwQyxFQUFDM0QsdUJBQXVCWDtZQUN4RixHQUFHQTtRQUNMO1FBRUEsT0FBT21DO0lBQ1Q7SUFFQSxPQUFPb0MseUJBQXlCN0MsS0FBSyxFQUFFOEMsWUFBWSxFQUFFeEUsT0FBTyxFQUFFO1FBQzVELElBQUltQztRQUVKa0MsSUFBQUEsZUFBTSxFQUFDLENBQUNyRTtZQUNOK0QsSUFBQUEsb0JBQVcsRUFBQyxDQUFDL0Q7Z0JBQ1gsTUFBTW9DLDBCQUEwQnFDLElBQUFBLHVEQUErQyxFQUFDL0MsT0FBTzhDLGVBQ2pGdkUsU0FBU21DLHlCQUNUekIsd0JBQXdCcUQsSUFBQUEseUNBQTRCLEVBQUMvRCxRQUFRRDtnQkFFbkVtQyxvQkFBb0JtQyxJQUFBQSxtREFBMEMsRUFBQzNELHVCQUF1Qlg7WUFDeEYsR0FBR0E7UUFDTCxHQUFHQTtRQUVILE9BQU9tQztJQUNUO0FBQ0Y7QUFFQSxTQUFTOEIscUNBQXFDdEQscUJBQXFCLEVBQUVYLE9BQU87SUFDMUUsTUFBTWMsa0JBQWtCSCxzQkFBc0IrRCxrQkFBa0IsSUFDMURyRSxjQUFjTCxRQUFRMkUsb0JBQW9CLENBQUM3RDtJQUVqRCxPQUFPVDtBQUNUO0FBRUEsU0FBUzZELDBDQUEwQ3ZELHFCQUFxQixFQUFFWCxPQUFPO0lBQy9FLE1BQU1pQix1QkFBdUJOLHNCQUFzQmlFLHVCQUF1QixJQUNwRXRFLG1CQUFtQk4sUUFBUTJFLG9CQUFvQixDQUFDMUQ7SUFFdEQsT0FBT1g7QUFDVCJ9