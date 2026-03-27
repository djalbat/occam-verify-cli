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
const _context = require("../../utilities/context");
const _string = require("../../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class FrameSubstitution extends _substitution.default {
    constructor(context, string, node, targetFrame, replacementFrame){
        super(context, string, node);
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
            (0, _context.instantiate)((context)=>{
                const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);
                frameSubstitutionn = new FrameSubstitution(context, string, node, targetFrame, replacementFrame);
            }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRGcmFtZSwgcmVwbGFjZW1lbnRGcmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWU7XG4gICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFRhcmdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lTm9kZSA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vLyxcbiAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0RnJhbWVTaW5ndWxhciA9IHRoaXMudGFyZ2V0RnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldEZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHJhZ2V0RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0cmFnZXRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0cmFnZXRGcmFtZTtcblxuICAgICAgICAgIHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudEZyYW1lU3RyaW5nfScgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG5cbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldEZyYW1lID0gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9ubiA9IG5ldyBGcmFtZVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25cblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldEZyYW1lTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudEZyYW1lTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzVHJpdmlhbCIsInRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVGcmFtZSIsImZyYW1lIiwiZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImNvbXBhcmVkVG9GcmFtZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0Iiwiam9pbiIsImF0dGVtcHQiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTdHJpbmciLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ0cmFnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVTdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiZnJhbWVTdWJzdGl0dXRpb25uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJnZXRUYXJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImdldFJlcGxhY2VtZW50RnJhbWVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztxRUFSeUI7MEJBRUY7NkJBQ3NCO3lCQUNjO3lCQUNDO3dCQUNJOzs7Ozs7TUFFaEUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLHFCQUFZO0lBQ2hFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCLENBQUU7UUFDaEUsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7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