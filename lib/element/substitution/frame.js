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
    constructor(context, string, node, generalContext, targetFrame, replacementFrame){
        super(context, string, node, generalContext);
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
    static fromJSON(json, context) {
        let frameSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, generalContext = generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context), targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);
                frameSubstitutionn = new FrameSubstitution(context, string, node, generalContext, targetFrame, replacementFrame);
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
function generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const generalContext = context; ///
    return generalContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBmcmFtZVN1YnN0aXR1dGlvbkZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgYXR0ZW1wdCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldEZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gdGhpcy50YXJnZXRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudEZyYW1lKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldEZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuaXNFcXVhbFRvKGZyYW1lKSxcbiAgICAgICAgICBjb21wYXJlZFRvRnJhbWUgPSBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvRnJhbWU7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0RnJhbWUuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vLFxuICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHRoaXMuc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0RnJhbWVTaW5ndWxhciA9IHRoaXMudGFyZ2V0RnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldEZyYW1lU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdHJhZ2V0RnJhbWUgPSB0aGlzLnRhcmdldEZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0cmFnZXRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0cmFnZXRGcmFtZTtcblxuICAgICAgICAgIHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudEZyYW1lU3RyaW5nfScgcmVwbGFjZW1lbnQgZnJhbWUuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG5cbiAgICAgICAgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dEZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZ2VuZXJhbENvbnRleHQsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25cblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldEZyYW1lTm9kZSgpLFxuICAgICAgICB0YXJnZXRGcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0RnJhbWVOb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0RnJhbWU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudEZyYW1lTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShyZXBsYWNlbWVudEZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYWxDb250ZXh0RnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICByZXR1cm4gZ2VuZXJhbENvbnRleHQ7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRUYXJnZXRGcmFtZSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJjb21wYXJlZFRvRnJhbWUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldENvbnRleHQiLCJqb2luIiwiYXR0ZW1wdCIsInRhcmdldEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUiLCJjb21taXQiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzZXRHZW5lcmFsQ29udGV4dCIsInRhcmdldEZyYW1lU3RyaW5nIiwidGFyZ2V0RnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidHJhZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImZyYW1lU3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsImdlbmVyYWxDb250ZXh0RnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldEZyYW1lRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsImFibGF0ZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiZ2V0VGFyZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7cUVBUnlCOzBCQUVGOzZCQUNzQjt5QkFDYzt5QkFDQzt3QkFDSTs7Ozs7O01BRWhFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxxQkFBWTtJQUNoRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCLENBQUU7UUFDaEYsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7SUFDMUI7SUFFQUMsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7SUFDekI7SUFFQUcsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7SUFDOUI7SUFFQUcsMkJBQTJCO1FBQ3pCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx3QkFBd0JSLE1BQU0sR0FBRztRQUV2QyxPQUFPUTtJQUNUO0lBRUFDLHNCQUFzQjtRQUFFLE9BQU8sSUFBSSxDQUFDUCxXQUFXLENBQUNPLG1CQUFtQjtJQUFJO0lBRXZFQyxnQkFBZ0I7UUFDZCxNQUFNQyxrQkFBa0IsSUFBSSxDQUFDVCxXQUFXLENBQUNLLE9BQU8sSUFDMUNLLGFBQWFELGlCQUFpQixHQUFHO1FBRXZDLE9BQU9DO0lBQ1Q7SUFFQUMscUJBQXFCO1FBQ25CLE1BQU1DLHVCQUF1QixJQUFJLENBQUNYLGdCQUFnQixDQUFDSSxPQUFPLElBQ3BEUSxrQkFBa0JELHNCQUFzQixHQUFH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