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
    constructor(contexts, string, node, lineIndex, targetFrame, replacementFrame){
        super(contexts, string, node, lineIndex);
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
            frameSubstitution = validSubstitution; ///
            context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
        } else {
            const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext();
            (0, _context.attempt)((generalContext)=>{
                (0, _context.attempt)((specificContext)=>{
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
                }, specificContext);
            }, generalContext);
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
            (0, _context.unserialises)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, specificContext = context, contexts = [
                        generalContext,
                        specificContext
                    ], frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);
                    frameSubstitutionn = new FrameSubstitution(contexts, string, node, lineIndex, targetFrame, replacementFrame);
                }, context);
            }, json, context);
        }
        return frameSubstitutionn;
    }
    static fromStatement(statement, generalContext, specificContext) {
        let frameSubstitution = null;
        const frameSubstitutionNode = statement.getFrameSubstitutionNode();
        if (frameSubstitutionNode !== null) {
            (0, _context.ablates)((generalContext, specificContext)=>{
                frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, generalContext, specificContext);
            }, generalContext, specificContext);
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
function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(), targetFrame = context.findFrameByFrameNode(targetFrameNode);
    return targetFrame;
}
function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(), replacementFrame = context.findFrameByFrameNode(replacementFrameNode);
    return replacementFrame;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGFibGF0ZXMsIGRlc2NlbmQsIGF0dGVtcHQsIGluc3RhbnRpYXRlLCB1bnNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWU7XG4gICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0KChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldEZyYW1lU2luZ3VsYXIgPSB0aGlzLnRhcmdldEZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVNpbmd1bGFyKSB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWdldEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodHJhZ2V0RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldEZyYW1lID0gdHJhZ2V0RnJhbWU7XG5cbiAgICAgICAgICB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRGcmFtZVN0cmluZyA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlIGZyYW1lIHN1YnN0aXR1dGlvbidzIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG5cbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHVuc2VyaWFsaXNlcygoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9ubiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmIChmcmFtZVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZXMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0RnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHRhcmdldEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldEZyYW1lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUocmVwbGFjZW1lbnRGcmFtZU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudEZyYW1lO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dHMiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0VGFyZ2V0RnJhbWUiLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0RnJhbWVOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZUZyYW1lIiwiZnJhbWUiLCJjb250ZXh0IiwiZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImNvbXBhcmVkVG9GcmFtZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2VuZXJhbENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsImF0dGVtcHQiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidHJhZ2V0RnJhbWUiLCJ0YXJnZXRGcmFtZVN0cmluZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJmcmFtZVN1YnN0aXR1dGlvbm4iLCJ1bnNlcmlhbGlzZXMiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhYmxhdGVzIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztxRUFSeUI7MEJBRUY7NkJBQ3NCO3lCQUNjO3dCQUNLO3lCQUNLOzs7Ozs7TUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsQ0FBRTtRQUM1RSxLQUFLLENBQUNMLFVBQVVDLFFBQVFDLE1BQU1DO1FBRTlCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztJQUN6QjtJQUVBRyxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtJQUM5QjtJQUVBRywyQkFBMkI7UUFDekIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHdCQUF3QlIsTUFBTSxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFdBQVcsQ0FBQ08sbUJBQW1CO0lBQUk7SUFFdkVDLGdCQUFnQjtRQUNkLE1BQU1DLGtCQUFrQixJQUFJLENBQUNULFdBQVcsQ0FBQ0ssT0FBTyxJQUMxQ0ssYUFBYUQsaUJBQWlCLEdBQUc7UUFFdkMsT0FBT0M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTUMsdUJBQXVCLElBQUksQ0FBQ1gsZ0JBQWdCLENBQUNJLE9B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