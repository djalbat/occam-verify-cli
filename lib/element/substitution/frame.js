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
            (0, _context.join)((context)=>{
                (0, _context.attempt)((context)=>{
                    const specificContext = context, targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                    if (targetFrameValidates) {
                        const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                        if (replacementFrameValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        context.commit(this);
                    }
                }, context);
            }, specificContext, context);
        }
        if (validates) {
            const substitution = this; ///
            frameSubstitution = substitution; ///
            context.addSubstitution(substitution);
            this.setGeneralContext(generalContext);
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
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let frameSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.unserialise)((json, context)=>{
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, generalContext = generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);
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
function generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const generalContext = context; ///
    return generalContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgc2VyaWFsaXNlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICB0aGlzLnRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWU7XG4gICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vLyxcbiAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICB0aGlzLnNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRhcmdldEZyYW1lU3RyaW5nID0gdGhpcy50YXJnZXRGcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldEZyYW1lU2luZ3VsYXIgPSB0aGlzLnRhcmdldEZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRGcmFtZVNpbmd1bGFyKSB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWdldEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodHJhZ2V0RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldEZyYW1lID0gdHJhZ2V0RnJhbWU7XG5cbiAgICAgICAgICB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudEZyYW1lU3RyaW5nfScgcmVwbGFjZW1lbnQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVTdWJzdGl0dXRpb25cIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0RnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbm4gPSBuZXcgRnJhbWVTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnQuZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZnJhbWVTdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhbENvbnRleHRGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBnZW5lcmFsQ29udGV4dDtcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJnZW5lcmFsQ29udGV4dCIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldEZyYW1lTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVGcmFtZSIsImZyYW1lIiwiZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImNvbXBhcmVkVG9GcmFtZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInNldEdlbmVyYWxDb250ZXh0IiwidGFyZ2V0RnJhbWVTdHJpbmciLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ0cmFnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVTdHJpbmciLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiZnJhbWVTdWJzdGl0dXRpb25uIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhYmxhdGUiLCJmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3FFQVJ5QjswQkFFRjs2QkFDc0I7eUJBQ2M7d0JBQ0s7eUJBQ29COzs7Ozs7TUFFcEYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFB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