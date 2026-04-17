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
const _breakPoint = require("../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, judgementNode = (0, _instantiate.instantiateJudgement)(string, context), node = judgementNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0VxdWFsVG8oanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IGp1ZGdlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0ganVkZ2VtZW50Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldEFzc3VtcHRpb25zKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9uLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpLFxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5ldmVyeSgobWV0YUxldmVsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IGFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IG1ldGFMZXZlbEFzc3VtcHRpb24udW5pZnlBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChqdWRnZW1lbnRBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiZnJhbWUiLCJhc3N1bXB0aW9uIiwiZ2V0RnJhbWUiLCJnZXRBc3N1bXB0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNFcXVhbFRvIiwianVkZ2VtZW50IiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJlcXVhbFRvIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEp1ZGdlbWVudCIsInJlY29uY2lsZSIsImFzc3VtcHRpb25zIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRNZXRhTGV2ZWxBc3N1bXB0aW9ucyIsIm1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkiLCJldmVyeSIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uVW5pZmllcyIsInNvbWUiLCJ1bmlmeUFzc3VtcHRpb24iLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImJyZWFrUG9pbnRGcm9tSlNPTiIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007NEJBQ2M7TUFFL0QsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLENBQUU7UUFDaEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxhQUFhO1FBQ1gsTUFBTUQsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDSSxXQUFXRixjQUFjQyxVQUFVO1FBRXpDLE9BQU9DO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFO1FBQ25CLE1BQU1KLGdCQUFnQkksVUFBVUwsT0FBTyxJQUNqQ00sdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOLGdCQUMvQ08sVUFBVUYsc0JBQXVCLEdBQUc7UUFFMUMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUI7UUFBRSxPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxjQUFjO0lBQUk7SUFFdkRDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNlLGVBQWU7SUFBSTtJQUV6REMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixLQUFLLENBQUNnQixtQkFBbUI7SUFBSTtJQUVqRUMsMkJBQTJCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixVQUFVLENBQUNnQix3QkFBd0I7SUFBSTtJQUVoRkwsbUJBQW1CTixhQUFhLEVBQUU7UUFDaEMsTUFBTVIsT0FBT1EsZUFDUFksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JCLE9BQzdCYSx1QkFBdUJPLGFBQWEsR0FBRztRQUU3QyxPQUFPUDtJQUNUO0lBRUFTLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ29CLHFCQUFxQixDQUFDQztJQUFtQjtJQUVyR0Msd0JBQXdCQyxnQkFBZ0IsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDdkIsS0FBSyxDQUFDc0IsdUJBQXVCLENBQUNDO0lBQW1CO0lBRXpHQyxtQkFBbUI1QixPQUFPLEVBQUU7UUFDMUIsTUFBTVUsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDTSxZQUFZZCxRQUFRNkIsNEJBQTRCLENBQUNuQixnQkFDakRvQixrQkFBa0JoQixXQUFZLEdBQUc7UUFFdkMsT0FBT2dCO0lBQ1Q7SUFFQUMsU0FBUy9CLE9BQU8sRUFBRTtRQUNoQixJQUFJYyxZQUFZO1FBRWhCLE1BQU1rQixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRSxJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLGtCQUFrQixDQUFDNUI7UUFFL0MsSUFBSW9DLG1CQUFtQixNQUFNO1lBQzNCRCxZQUFZO1lBRVpyQixZQUFZc0IsZ0JBQWdCLEdBQUc7WUFFL0JwQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFTCxnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLE1BQU1NLGlCQUFpQixJQUFJLENBQUNDLGFBQWEsQ0FBQ3ZDO1lBRTFDLElBQUlzQyxnQkFBZ0I7Z0JBQ2xCLE1BQU1FLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQixDQUFDekM7Z0JBRXBELElBQUl3QyxxQkFBcUI7b0JBQ3ZCLE1BQU1FLFNBQVMxQyxRQUFRMkMsUUFBUTtvQkFFL0IsSUFBSUMsc0JBQXNCLE9BQ3RCQyx1QkFBdUI7b0JBRTNCLElBQUlILFFBQVE7d0JBQ1ZFLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDOUM7b0JBQ2hELE9BQU87d0JBQ0w2Qyx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQy9DO29CQUNsRDtvQkFFQSxJQUFJNEMsdUJBQXVCQyxzQkFBc0I7d0JBQy9DVixZQUFZO29CQUNkO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJQSxXQUFXO2dCQUNickIsWUFBWSxJQUFJLEVBQUUsR0FBRztnQkFFckIsSUFBSSxDQUFDa0MsTUFBTSxDQUFDaEQ7Z0JBRVpBLFFBQVFpRCxZQUFZLENBQUNuQztZQUN2QjtRQUNGO1FBRUEsSUFBSXFCLFdBQVc7WUFDYm5DLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLFlBQVksQ0FBQztRQUNsRTtRQUVBLE9BQU9sQjtJQUNUO0lBRUF5QixjQUFjdkMsT0FBTyxFQUFFO1FBQ3JCLElBQUlzQyxpQkFBaUI7UUFFckIsTUFBTU4sa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NqQyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixzQkFBc0IsQ0FBQztRQUV4RSxNQUFNNUIsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQy9CO1FBRWxDLElBQUlJLFVBQVUsTUFBTTtZQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0E7WUFFYmtDLGlCQUFpQjtRQUNuQjtRQUVBLElBQUlBLGdCQUFnQjtZQUNsQnRDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsZ0JBQWdCLG9CQUFvQixDQUFDO1FBQzFFO1FBRUEsT0FBT007SUFDVDtJQUVBRyxtQkFBbUJ6QyxPQUFPLEVBQUU7UUFDMUIsSUFBSXdDLHNCQUFzQjtRQUUxQixNQUFNUixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLDJCQUEyQixDQUFDO1FBRTdFLE1BQU0zQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDMEIsUUFBUSxDQUFDL0I7UUFFNUMsSUFBSUssZUFBZSxNQUFNO1lBQ3ZCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUVsQm1DLHNCQUFzQjtRQUN4QjtRQUVBLElBQUlBLHFCQUFxQjtZQUN2QnhDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLHlCQUF5QixDQUFDO1FBQy9FO1FBRUEsT0FBT1E7SUFDVDtJQUVBTSxtQkFBbUI5QyxPQUFPLEVBQUU7UUFDMUIsSUFBSTRDO1FBRUosTUFBTVosa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNqQyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixxQkFBcUIsQ0FBQztRQUV2RVksc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QjVDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLG1CQUFtQixDQUFDO1FBQ3pFO1FBRUEsT0FBT1k7SUFDVDtJQUVBRyxvQkFBb0IvQyxPQUFPLEVBQUU7UUFDM0IsSUFBSTZDLHVCQUF1QjtRQUUzQixNQUFNYixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXhFa0IsSUFBQUEsa0JBQVMsRUFBQyxDQUFDbEQ7WUFDVCxNQUFNbUQsY0FBYyxJQUFJLENBQUNqQyxjQUFjLElBQ2pDa0Msd0JBQXdCLElBQUksQ0FBQy9CLHdCQUF3QixJQUNyRGdDLHVCQUF1QkQsc0JBQXNCRSx1QkFBdUIsSUFDcEVDLDRCQUE0QkYscUJBQXFCRyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ3RELE1BQU1DLG9CQUFvQlAsWUFBWVEsSUFBSSxDQUFDLENBQUN0RDtvQkFDMUMsTUFBTXFELG9CQUFvQkQsb0JBQW9CRyxlQUFlLENBQUN2RCxZQUFZTDtvQkFFMUUsSUFBSTBELG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxtQkFBbUI7b0JBQ3JCLE9BQU87Z0JBQ1Q7WUFDRjtZQUVOLElBQUlILDJCQUEyQjtnQkFDN0JWLHVCQUF1QjtZQUN6QjtRQUNGLEdBQUc3QztRQUVILElBQUk2QyxzQkFBc0I7WUFDeEI3QyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLGdCQUFnQixvQkFBb0IsQ0FBQztRQUMxRTtRQUVBLE9BQU9hO0lBQ1Q7SUFFQUcsT0FBT2hELE9BQU8sRUFBRTtRQUNkLE1BQU0wQyxTQUFTMUMsUUFBUTJDLFFBQVE7UUFFL0IsSUFBSSxDQUFDRCxRQUFRO1lBQ1g7UUFDRjtRQUVBLE1BQU01QixZQUFZLElBQUksRUFDaEIrQyxzQkFBc0JDLElBQUFBLHdDQUFnQyxFQUFDaEQsV0FBV2Q7UUFFeEVBLFFBQVErRCxhQUFhLENBQUNGO0lBQ3hCO0lBRUEsT0FBT0csT0FBTyxZQUFZO0lBRTFCQyxTQUFTO1FBQ1AsTUFBTWhFLFNBQVMsSUFBSSxDQUFDZ0MsU0FBUztRQUU3QixJQUFJOUI7UUFFSkEsYUFBYSxJQUFJLENBQUMrRCxhQUFhO1FBRS9CLE1BQU1DLGlCQUFpQkMsSUFBQUEsc0NBQTBCLEVBQUNqRTtRQUVsREEsYUFBYWdFLGdCQUFpQixHQUFHO1FBRWpDLE1BQU1FLE9BQU87WUFDWHBFO1lBQ0FFO1FBQ0Y7UUFFQSxPQUFPa0U7SUFDVDtJQUVBLE9BQU9DLFNBQVNELElBQUksRUFBRXJFLE9BQU8sRUFBRTtRQUM3QixPQUFPdUUsSUFBQUEsb0JBQVcsRUFBQyxDQUFDdkU7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR29FLE1BQ2IzRCxnQkFBZ0I4RCxJQUFBQSxpQ0FBb0IsRUFBQ3ZFLFFBQVFELFVBQzdDRSxPQUFPUSxlQUNQUCxhQUFhc0UsSUFBQUEsOEJBQWtCLEVBQUNKLE9BQ2hDakUsUUFBUXNFLHVCQUF1QmhFLGVBQWVWLFVBQzlDSyxhQUFhc0UsNEJBQTRCakUsZUFBZVY7WUFFOURBLFVBQVU7WUFFVixNQUFNYyxZQUFZLElBQUloQixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQyxPQUFPQztZQUUxRSxPQUFPUztRQUNULEdBQUdkO0lBQ0w7SUFFQSxPQUFPNEUsY0FBY0MsU0FBUyxFQUFFN0UsT0FBTyxFQUFFO1FBQ3ZDLE1BQU04RSxnQkFBZ0JELFVBQVVwRSxPQUFPLElBQ2pDSyxZQUFZaUUsSUFBQUEsbUNBQTBCLEVBQUNELGVBQWU5RTtRQUU1RCxPQUFPYztJQUNUO0FBQ0Y7QUFFQSxTQUFTNEQsdUJBQXVCaEUsYUFBYSxFQUFFVixPQUFPO0lBQ3BELE1BQU1nRixZQUFZdEUsY0FBY3VFLFlBQVksSUFDdEM3RSxRQUFRSixRQUFRa0Ysb0JBQW9CLENBQUNGO0lBRTNDLE9BQU81RTtBQUNUO0FBRUEsU0FBU3VFLDRCQUE0QmpFLGFBQWEsRUFBRVYsT0FBTztJQUN6RCxNQUFNbUYsaUJBQWlCekUsY0FBYzBFLGlCQUFpQixJQUNoRC9FLGFBQWFMLFFBQVFxRiw4QkFBOEIsQ0FBQ0Y7SUFFMUQsT0FBTzlFO0FBQ1QifQ==