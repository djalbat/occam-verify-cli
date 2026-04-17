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
const _element = require("../utilities/element");
const _assign = require("../process/assign");
const _default = (0, _elements.define)(class Judgement extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, frame, assumption){
        super(context, string, node, breakPoint);
        this.frame = frame;
        this.assumption = assumption;
    }
    getFrame() {
        return this.frame;
    }
    getAssumption() {
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
    isEqualTo(judgement) {
        const judgementNode = judgement.getNode(), judgementNodeMatches = this.matchJudgementNode(judgementNode), equalTo = judgementNodeMatches; ///
        return equalTo;
    }
    getAssumptions() {
        return this.frame.getAssumptions();
    }
    getMetavariable() {
        return this.frame.getMetavariable();
    }
    getMetavariableNode() {
        return this.frame.getMetavariableNode();
    }
    getTopLevelMetaAssertion() {
        return this.assumption.getTopLevelMetaAssertion();
    }
    matchJudgementNode(judgementNode) {
        const node = judgementNode, nodeMatches = this.matchNode(node), judgementNodeMatches = nodeMatches; ///
        return judgementNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        return this.frame.matchMetavariableNode(metavariableNode);
    }
    compareMetavariableName(metavariableName) {
        return this.frame.compareMetavariableName(metavariableName);
    }
    findValidJudgement(context) {
        const judgementNode = this.getJudgementNode(), judgement = context.findJudgementByJudgementNode(judgementNode), validJudgemenet = judgement; ///
        return validJudgemenet;
    }
    validate(context) {
        let judgement = null;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement...`);
        let validates = false;
        const validJudgement = this.findValidJudgement(context);
        if (validJudgement !== null) {
            validates = true;
            judgement = validJudgement; ///
            context.debug(`...the '${judgementString}' judgement is already valid.`);
        } else {
            const frameValidates = this.validateFrame(context);
            if (frameValidates) {
                const assumptionValidates = this.validateAssumption(context);
                if (assumptionValidates) {
                    const stated = context.isStated();
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
            if (validates) {
                judgement = this; ///
                this.assign(context);
                context.addJudgement(judgement);
            }
        }
        if (validates) {
            context.debug(`...validated the '${judgementString}' judgement.`);
        }
        return judgement;
    }
    validateFrame(context) {
        let frameValidates = false;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's frame...`);
        const frame = this.frame.validate(context);
        if (frame !== null) {
            this.frame = frame;
            frameValidates = true;
        }
        if (frameValidates) {
            context.trace(`...validated the '${judgementString}' judgement's frame.`);
        }
        return frameValidates;
    }
    validateAssumption(context) {
        let assumptionValidates = false;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's assumption...`);
        const assumption = this.assumption.validate(context);
        if (assumption !== null) {
            this.assumption = assumption;
            assumptionValidates = true;
        }
        if (assumptionValidates) {
            context.debug(`...validated the '${judgementString}' judgement's assumption.`);
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
        (0, _context.reconcile)((context)=>{
            const assumptions = this.getAssumptions(), topLevelMetaAssertion = this.getTopLevelMetaAssertion(), metaLevelAssumptions = topLevelMetaAssertion.getMetaLevelAssumptions(), metaLevelAssumptionsUnify = metaLevelAssumptions.every((metaLevelAssumption)=>{
                const assumptionUnifies = assumptions.some((assumption)=>{
                    const assumptionUnifies = metaLevelAssumption.unifyAssumption(assumption, context);
                    if (assumptionUnifies) {
                        return true;
                    }
                });
                if (assumptionUnifies) {
                    return true;
                }
            });
            if (metaLevelAssumptionsUnify) {
                validatesWhenDerived = true;
            }
        }, context);
        if (validatesWhenDerived) {
            context.debug(`...validated the '${judgementString}' derived judgement.`);
        }
        return validatesWhenDerived;
    }
    assign(context) {
        const stated = context.isStated();
        if (!stated) {
            return;
        }
        const judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement, context);
        context.addAssignment(judgementAssignment);
    }
    static name = "Judgement";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, judgementNode = (0, _instantiate.instantiateJudgement)(string, context), node = judgementNode, frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
            context = null;
            const judgement = new Judgement(context, string, node, breakPoint, frame, assumption);
            return judgement;
        }, context);
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), judgement = (0, _element.judgementFromStatementNode)(statementNode, context);
        return judgement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0VxdWFsVG8oanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0ganVkZ2VtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldEFzc3VtcHRpb25zKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9uLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpLFxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5ldmVyeSgobWV0YUxldmVsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IGFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IG1ldGFMZXZlbEFzc3VtcHRpb24udW5pZnlBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChqdWRnZW1lbnRBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50LnRvSlNPTigpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUp1ZGdlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSnVkZ2VtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0QXNzdW1wdGlvbiIsImdldEp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50Tm9kZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzRXF1YWxUbyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZXF1YWxUbyIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZEp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJ2YWxpZEp1ZGdlbWVuZXQiLCJ2YWxpZGF0ZSIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRKdWRnZW1lbnQiLCJkZWJ1ZyIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJyZWNvbmNpbGUiLCJhc3N1bXB0aW9ucyIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYXNzdW1wdGlvblVuaWZpZXMiLCJzb21lIiwidW5pZnlBc3N1bXB0aW9uIiwianVkZ2VtZW50QXNzaWdubWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50IiwiYWRkQXNzaWdubWVudCIsIm5hbWUiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlSnVkZ2VtZW50IiwiZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZSIsImFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwianVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDs2QkFDYzt5QkFDRTt5QkFDSTt3QkFDTTtNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsQ0FBRTtRQUNoRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElB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