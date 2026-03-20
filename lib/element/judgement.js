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
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const _assign = require("../process/assign");
const _default = (0, _elements.define)(class Judgement extends _occamlanguages.Element {
    constructor(context, string, node, frame, assumption){
        super(context, string, node);
        this.frame = frame;
        this.assumption = assumption;
    }
    getFrame() {
        return this.frame;
    }
    getDeclaration() {
        return this.assumption;
    }
    getJudgementNode() {
        const node = this.getNode(), judgementNode = node; ///
        return judgementNode;
    }
    isSingular() {
        const judgementNode = this.getJudgementNode(), singular = judgementNode.isSingular();
        return singular;
    }
    getMetavariable() {
        return this.frame.getMetavariable();
    }
    matchJudgementNode(judgementNode) {
        const node = judgementNode, nodeMatches = this.matchNode(node), judgementNodeMatches = nodeMatches; ///
        return judgementNodeMatches;
    }
    compareMetavariableName(metavariableName) {
        return this.frame.compareMetavariableName(metavariableName);
    }
    findValidJudgement(context) {
        const judgementNode = this.getJudgementNode(), judgement = context.findJudgementByJudgementNode(judgementNode), validJudgemenet = judgement; ///
        return validJudgemenet;
    }
    validate(stated, context) {
        let judgement = null;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement...`);
        const validJudgement = this.findValidJudgement(context);
        if (validJudgement !== null) {
            judgement = validJudgement; ///
            context.debug(`...the '${judgementString}' judgement is already valid.`);
        } else {
            let validates = false;
            (0, _context.reconcile)((context)=>{
                const frameValidates = this.validateFrame(stated, context);
                if (frameValidates) {
                    const assumptionValidates = this.validateAssumption(stated, context);
                    if (assumptionValidates) {
                        let validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                }
            }, context);
            if (validates) {
                judgement = this; ///
                this.assign(stated, context);
                context.addJudgement(judgement);
                context.debug(`...validated the '${judgementString}' judgement.`);
            }
        }
        return judgement;
    }
    validateFrame(stated, context) {
        let frameValidates = false;
        const frameString = this.frame.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${frameString}' frame...`);
        const frame = this.frame.validate(stated, context);
        if (frame !== null) {
            this.frame = frame;
            frameValidates = true;
        }
        if (frameValidates) {
            context.trace(`...validated the '${judgementString}' judgement's '${frameString}' frame.`);
        }
        return frameValidates;
    }
    validateAssumption(stated, context) {
        let assumptionValidates = false;
        const assumptionString = this.assumption.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${assumptionString}' assumption...`);
        const assumption = this.assumption.validate(stated, context);
        if (assumption !== null) {
            this.assumption = assumption;
            assumptionValidates = true;
        }
        if (assumptionValidates) {
            context.debug(`...validated the '${judgementString}' judgement's '${assumptionString}' assumption.`);
        }
        return assumptionValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' stated judgement...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validated the '${judgementString}' stated judgement.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived = false;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' derived judgement...`);
        const topLevelMetaAssertion = this.assumption.getTopLevelMetaAssertion(), metaLevelSubstitutions = topLevelMetaAssertion.getMetaLevelSubstitutions(), frameComparesToSubstitutions = this.frame.compareMetaLevelSubstitutions(metaLevelSubstitutions, context);
        if (frameComparesToSubstitutions) {
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...validated the '${judgementString}' derived judgement.`);
        }
        return validatesWhenDerived;
    }
    assign(stated, context) {
        if (!stated) {
            return;
        }
        const judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement, context);
        context.addAssignment(judgementAssignment);
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Judgement";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, judgementNode = (0, _instantiate.instantiateJudgement)(string, context), node = judgementNode, frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
            context = null;
            const judgement = new Judgement(context, string, node, frame, assumption);
            return judgement;
        }, context);
    }
});
function frameFromJudgementNode(judgementNode, context) {
    const frameNode = judgementNode.getFrameNode(), frame = context.findFrameByFrameNode(frameNode);
    return frame;
}
function assumptionFromJudgementNode(judgementNode, context) {
    const assumptionNode = judgementNode.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSnVkZ2VtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkSnVkZ2VtZW50ID0gdGhpcy5maW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRKdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGp1ZGdlbWVudCA9IHZhbGlkSnVkZ2VtZW50OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGp1ZGdlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgIGZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuYXNzdW1wdGlvbi5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSxcbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldE1ldGFMZXZlbFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBmcmFtZUNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gdGhpcy5mcmFtZS5jb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZUNvbXBhcmVzVG9TdWJzdGl0dXRpb25zKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudChqdWRnZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGp1ZGdlbWVudEFzc2lnbm1lbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICAgICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJnZXRNZXRhdmFyaWFibGUiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwic3RhdGVkIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwidmFsaWRhdGVzIiwicmVjb25jaWxlIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJmcmFtZVN0cmluZyIsImFzc3VtcHRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiZ2V0TWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImZyYW1lQ29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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