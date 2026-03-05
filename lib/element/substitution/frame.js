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
const _instantiate = require("../../process/instantiate");
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
        const context = this.getContext();
        specificContext = context; ///
        const frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);
        const validSubstitution = this.findValidSubstiution(context);
        if (validSubstitution) {
            frameSubstitution = validSubstitution; ///
            context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
        } else {
            let validates = false;
            const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);
            if (targetFrameValidates) {
                const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);
                if (replacementFrameValidates) {
                    validates = true;
                }
            }
            if (validates) {
                const substitution = this; ///
                frameSubstitution = substitution; ///
                context.addSubstitution(substitution);
                context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
            }
        }
        return frameSubstitution;
    }
    validateTargetFrame(generalContext, specificContext) {
        let targetFrameValidates = false;
        const context = generalContext, targetFrameString = this.targetFrame.getString(), frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);
        const targetFrameSingular = this.targetFrame.isSingular();
        if (targetFrameSingular) {
            const stated = true, tragetFrame = this.targetFrame.validate(stated, context);
            if (tragetFrame !== null) {
                this.targetFrame = tragetFrame;
                targetFrameValidates = true;
            }
        } else {
            context.debug(`The '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame is not singular.`);
        }
        if (targetFrameValidates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);
        }
        return targetFrameValidates;
    }
    validateReplacementFrame(generalContext, specificContext) {
        let replacementFrameValidates;
        const context = specificContext, replacementFrameString = this.replacementFrame.getString(), frameSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame...`);
        const stated = true, replacementFrame = this.replacementFrame.validate(stated, context);
        if (replacementFrame !== null) {
            this.replacementFrame = replacementFrame;
            replacementFrameValidates = true;
        }
        if (replacementFrameValidates) {
            context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame.`);
        }
        return replacementFrameValidates;
    }
    toJSON() {
        const { name } = this.constructor, string = this.getString(), json = {
            name,
            string
        };
        return json;
    }
    static name = "FrameSubstitution";
    static fromJSON(json, context) {
        let frameSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            debugger;
        }
        return frameSubstitutionn;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), frameSubstitution = (0, _element.frameSubstitutionFromStatementNode)(statementNode, context);
        return frameSubstitution;
    }
    static fromFrameAndMetavariable(frame, metavariable, context) {
        return (0, _context.literally)((context)=>{
            const frameSubstitutionString = (0, _string.frameSubstitutionStringFromFrameAndMetavariable)(frame, metavariable), string = frameSubstitutionString, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), frameSubstitution = (0, _element.frameSubstitutionFromFrameSubstitutionNode)(frameSubstitutionNode, context);
            return frameSubstitution;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIGZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldEZyYW1lLCByZXBsYWNlbWVudEZyYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0RnJhbWUgPSB0YXJnZXRGcmFtZTtcbiAgICB0aGlzLnJlcGxhY2VtZW50RnJhbWUgPSByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRGcmFtZVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVOb2RlID0gdGhpcy50YXJnZXRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldEZyYW1lTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRGcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRGcmFtZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0RnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRGcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0RnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZSA9IHRoaXMudGFyZ2V0RnJhbWUuaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRGcmFtZSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlRnJhbWUoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmlzRXF1YWxUbyhmcmFtZSksXG4gICAgICAgICAgY29tcGFyZWRUb0ZyYW1lID0gZnJhbWVFcXVhbFRvUmVwbGFjZW1lbnRGcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb0ZyYW1lO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRGcmFtZUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldEZyYW1lLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0RnJhbWVDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN1YnN0aXR1dGlvblN0cmluZ30nIGZyYW1lIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudEZyYW1lKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0RnJhbWUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRGcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0RnJhbWVTdHJpbmcgPSB0aGlzLnRhcmdldEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3RhcmdldEZyYW1lU3RyaW5nfScgdGFyZ2V0IGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRGcmFtZVNpbmd1bGFyID0gdGhpcy50YXJnZXRGcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0RnJhbWVTaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIHRyYWdldEZyYW1lID0gdGhpcy50YXJnZXRGcmFtZS52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodHJhZ2V0RnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50YXJnZXRGcmFtZSA9IHRyYWdldEZyYW1lO1xuXG4gICAgICAgIHRhcmdldEZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldEZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nfScgZnJhbWUgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRGcmFtZVN0cmluZ30nIHRhcmdldCBmcmFtZS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRGcmFtZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICByZXBsYWNlbWVudEZyYW1lID0gdGhpcy5yZXBsYWNlbWVudEZyYW1lLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRGcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlbWVudEZyYW1lID0gcmVwbGFjZW1lbnRGcmFtZTtcblxuICAgICAgcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdWJzdGl0dXRpb25TdHJpbmd9JyBmcmFtZSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50RnJhbWVTdHJpbmd9JyByZXBsYWNlbWVudCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnJhbWVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvblN0cmluZyA9IGZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gZnJhbWVTdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gZnJhbWVTdWJzdGl0dXRpb25Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBmcmFtZVN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRhcmdldEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFRhcmdldEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsImdldEZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0RnJhbWVOb2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50RnJhbWVOb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImlzVHJpdmlhbCIsInRhcmdldEZyYW1lRXF1YWxUb1JlcGxhY2VtZW50RnJhbWUiLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZUZyYW1lIiwiZnJhbWUiLCJmcmFtZUVxdWFsVG9SZXBsYWNlbWVudEZyYW1lIiwiY29tcGFyZWRUb0ZyYW1lIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldEZyYW1lQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb24iLCJnZXRDb250ZXh0IiwiZnJhbWVTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRhcmdldEZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50RnJhbWUiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRGcmFtZVN0cmluZyIsInRhcmdldEZyYW1lU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwic3RhdGVkIiwidHJhZ2V0RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lU3RyaW5nIiwidG9KU09OIiwibmFtZSIsImpzb24iLCJmcm9tSlNPTiIsImZyYW1lU3Vic3RpdHV0aW9ubiIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZnJhbWVTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImxpdGVyYWxseSIsImZyYW1lU3Vic3RpdHV0aW9uU3RyaW5nRnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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