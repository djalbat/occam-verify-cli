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
        const context = generalContext, targetFrameString = this.targetFrame.getString(), frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame...`);
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
            context.debug(`The '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame is not singular.`);
        }
        if (targetFrameValidates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame...`);
        }
        return targetFrameValidates;
    }
    validateReplacementFrame(generalContext, specificContext) {
        let replacementFrameValidates = false;
        const context = specificContext, replacementFrameString = this.replacementFrame.getString(), frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution's '${replacementFrameString}' replacement frame...`);
        (0, _context.descend)((context)=>{
            const replacementFrame = this.replacementFrame.validate(context);
            if (replacementFrame !== null) {
                this.replacementFrame = replacementFrame;
                replacementFrameValidates = true;
            }
        }, context);
        if (replacementFrameValidates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame substitution's '${replacementFrameString}' replacement frame.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lO1xuICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRUYXJnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSB0aGlzLnRhcmdldEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50RnJhbWUpLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZUZyYW1lKGZyYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5pc0VxdWFsVG8oZnJhbWUpLFxuICAgICAgICAgIGNvbXBhcmVkVG9GcmFtZSA9IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9GcmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRGcmFtZS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGpvaW4oKGdlbmVyYWxDb250ZXh0KSA9PiB7XG4gICAgICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGF0dGVtcHQoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dHMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB0YXJnZXRGcmFtZVN0cmluZyA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFnZXRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRyYWdldEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IHRyYWdldEZyYW1lO1xuXG4gICAgICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWVTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcblxuICAgICAgICByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbm4gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnQuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRUYXJnZXRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJjb21wYXJlZFRvRnJhbWUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldENvbnRleHQiLCJqb2luIiwiYXR0ZW1wdCIsInRhcmdldEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUiLCJzZXRDb250ZXh0cyIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldEZyYW1lU3RyaW5nIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidHJhZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImZyYW1lU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztxRUFSeUI7MEJBRUY7NkJBQ3NCO3lCQUNjO3dCQUNLO3lCQUNTOzs7Ozs7TUFFekUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixDQUFFO1FBQzNGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFeEMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO0lBQzlCO0lBRUFHLDJCQUEyQjtRQUN6QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsd0JBQXdCVCxNQUFNLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxzQkFBc0I7UUFBRSxPQUFPLElBQUksQ0FBQ1AsV0FBVyxDQUFDTyxtQkFBbUI7SUFBSTtJQUV2RUMsZ0JBQWdCO1FBQ2QsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ1QsV0FBVyxDQUFDSyxPQUFPLElBQzFDSyxhQUFhRCxpQkFBaUIsR0FBRztRQUV2QyxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNQyx1QkFBdUIsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQ0ksT0FBTyxJQUNwRFEs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