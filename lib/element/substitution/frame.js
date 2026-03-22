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
const _context = require("../../utilities/context");
const _string = require("../../utilities/string");
const _element = require("../../utilities/element");
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
    getTargetNode() {
        const targetFrameNode = this.targetFrame.getNode(), tergetNode = targetFrameNode; ///
        return tergetNode;
    }
    getReplacementNode() {
        const replacementFrameNode = this.replacementFrame.getNode(), replacementNode = replacementFrameNode; ///
        return replacementNode;
    }
    compareMetavariableName(metavariableName) {
        return this.targetFrame.compareMetavariableName(metavariableName);
    }
    getMetavariableName() {
        return this.targetFrame.getMetavariableName();
    }
    isTrivial() {
        const targetFrameEqualToReplacementFrame = this.targetFrame.isEqualTo(this.replacementFrame), trivial = targetFrameEqualToReplacementFrame; ///
        return trivial;
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
            const context = this.getContext(), specificContext = context; ///
            (0, _context.attempt)((specificContext)=>{
                const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
                if (targetFrameValidates) {
                    const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                    if (replacementFrameValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    specificContext.commit(this);
                }
            }, specificContext);
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
        const statementNode = statement.getNode(), frameSubstitution = (0, _element.frameSubstitutionFromStatementNode)(statementNode, context);
        return frameSubstitution;
    }
    static fromFrameAndMetavariable(frame, metavariable, context) {
        let frameSubstitution;
        (0, _context.instantiate)((context)=>{
            const frameSubstitutionString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameSubstitutionString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context);
            frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBkZXNjZW5kLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSwgZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50YXJnZXRGcmFtZSA9IHRhcmdldEZyYW1lO1xuICAgIHRoaXMucmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRUYXJnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSB0aGlzLnRhcmdldEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0RnJhbWVOb2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldEZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudEZyYW1lKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVGcmFtZShmcmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuaXNFcXVhbFRvKGZyYW1lKSxcbiAgICAgICAgICBjb21wYXJlZFRvRnJhbWUgPSBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvRnJhbWU7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0RnJhbWUuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB0YXJnZXRGcmFtZVN0cmluZyA9IHRoaXMudGFyZ2V0RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFnZXRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRyYWdldEZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IHRyYWdldEZyYW1lO1xuXG4gICAgICAgICAgdGFyZ2V0RnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0RnJhbWVTdHJpbmd9JyB0YXJnZXQgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRGcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RnJhbWVTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50RnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcblxuICAgICAgICByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRGcmFtZVN0cmluZ30nIHJlcGxhY2VtZW50IGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRGcmFtZSA9IHJlcGxhY2VtZW50RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25uID0gbmV3IEZyYW1lU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0RnJhbWUsIHJlcGxhY2VtZW50RnJhbWUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVN1YnN0aXR1dGlvblxuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmdGcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBmcmFtZVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRGcmFtZU5vZGUgPSBmcmFtZVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIHRhcmdldEZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZSh0YXJnZXRGcmFtZU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRGcmFtZTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50RnJhbWVOb2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50RnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKHJlcGxhY2VtZW50RnJhbWVOb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0VGFyZ2V0RnJhbWUiLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwiZ2V0RnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRGcmFtZU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRGcmFtZU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiaXNUcml2aWFsIiwidGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJjb21wYXJlRnJhbWUiLCJmcmFtZSIsImZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJjb21wYXJlZFRvRnJhbWUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImF0dGVtcHQiLCJ0YXJnZXRGcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVTdHJpbmciLCJ0YXJnZXRGcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ0cmFnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVTdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiZnJhbWVTdWJzdGl0dXRpb25uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIiwidGFyZ2V0RnJhbWVGcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRGcmFtZUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmcmFtZVN1YnN0aXR1dGlvblN0cmluZ0Zyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3FFQVJ5QjswQkFFRjs2QkFDc0I7eUJBQ0M7d0JBQ2tCO3lCQUMrQjs7Ozs7O01BRS9GLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxxQkFBWTtJQUNoRSxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixDQUFFO1FBQ2hFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO0lBQzlCO0lBRUFHLDJCQUEyQjtRQUN6QixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsd0JBQXdCUCxNQUFNLEdBQUc7UUFFdkMsT0FBT087SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxN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