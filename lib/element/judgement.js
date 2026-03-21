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
    constructor(context, string, node, frame, assumption){
        super(context, string, node);
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
    getMetavariable() {
        return this.frame.getMetavariable();
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
        const validJudgement = this.findValidJudgement(context);
        if (validJudgement !== null) {
            judgement = validJudgement; ///
            context.debug(`...the '${judgementString}' judgement is already valid.`);
        } else {
            let validates = false;
            (0, _context.reconcile)((context)=>{
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
            }, context);
            if (validates) {
                judgement = this; ///
                this.assign(context);
                context.addJudgement(judgement);
                context.debug(`...validated the '${judgementString}' judgement.`);
            }
        }
        return judgement;
    }
    validateFrame(context) {
        let frameValidates = false;
        const frameString = this.frame.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${frameString}' frame...`);
        const frame = this.frame.validate(context);
        if (frame !== null) {
            this.frame = frame;
            frameValidates = true;
        }
        if (frameValidates) {
            context.trace(`...validated the '${judgementString}' judgement's '${frameString}' frame.`);
        }
        return frameValidates;
    }
    validateAssumption(context) {
        let assumptionValidates = false;
        const assumptionString = this.assumption.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${assumptionString}' assumption...`);
        const assumption = this.assumption.validate(context);
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
    assign(context) {
        const stated = context.isStated();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAganVkZ2VtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmFzc3VtcHRpb24uZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCksXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRNZXRhTGV2ZWxTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHRoaXMuZnJhbWUuY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMobWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoanVkZ2VtZW50QXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkp1ZGdlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUp1ZGdlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSnVkZ2VtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZnJhbWUiLCJhc3N1bXB0aW9uIiwiZ2V0RnJhbWUiLCJnZXRBc3N1bXB0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFsaWRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwidmFsaWRKdWRnZW1lbmV0IiwidmFsaWRhdGUiLCJqdWRnZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkSnVkZ2VtZW50IiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJyZWNvbmNpbGUiLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkSnVkZ2VtZW50IiwiZnJhbWVTdHJpbmciLCJhc3N1bXB0aW9uU3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwibWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImdldE1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJmcmFtZUNvbXBhcmVzVG9TdWJzdGl0dXRpb25zIiwiY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVKdWRnZW1lbnQiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lTm9kZSIsImdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEOzZCQUNjO3lCQUNFO3lCQUNJO3dCQUNNO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsQ0FBRTtRQUNwRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNRCxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNJLFdBQVdGLGNBQWNDLFVBQVU7UUFFekMsT0FBT0M7SUFDVDtJQUVBQyxrQkFBa0I7UUFBRSxPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxlQUFlO0lBQUk7SUFFekRDLG1CQUFtQkosYUFBYSxFQUFFO1FBQ2hDLE1BQU1QLE9BQU9PLGVBQ1BLLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNiLE9BQzdCYyx1QkFBdUJGLGFBQWEsR0FBRztRQUU3QyxPQUFPRTtJQUNUO0lBRUFDLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2YsS0FBSyxDQUFDYyxxQkFBcUIsQ0FBQ0M7SUFBbUI7SUFFckdDLHdCQUF3QkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2dCLHVCQUF1QixDQUFDQztJQUFtQjtJQUV6R0MsbUJBQW1CckIsT0FBTyxFQUFFO1FBQzFCLE1BQU1TLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ2UsWUFBWXRCLFFBQVF1Qiw0QkFBNEIsQ0FBQ2QsZ0JBQ2pEZSxrQkFBa0JGLFdBQVksR0FBRztRQUV2QyxPQUFPRTtJQUNUO0lBRUFDLFNBQVN6QixPQUFPLEVBQUU7UUFDaEIsSUFBSXNCLFlBQVk7UUFFaEIsTUFBTUksa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUMzQixRQUFRNEIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFaEUsTUFBTUcsaUJBQWlCLElBQUksQ0FBQ1Isa0JBQWtCLENBQUNyQjtRQUUvQyxJQUFJNkIsbUJBQW1CLE1BQU07WUFDM0JQLFlBQVlPLGdCQUFnQixHQUFHO1lBRS9CN0IsUUFBUThCLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUosZ0JBQWdCLDZCQUE2QixDQUFDO1FBQ3pFLE9BQU87WUFDTCxJQUFJSyxZQUFZO1lBRWhCQyxJQUFBQSxrQkFBUyxFQUFDLENBQUNoQztnQkFDVCxNQUFNaUMsaUJBQWlCLElBQUksQ0FBQ0MsYUFBYSxDQUFDbEM7Z0JBRTFDLElBQUlpQyxnQkFBZ0I7b0JBQ2xCLE1BQU1FLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQixDQUFDcEM7b0JBRXBELElBQUltQyxxQkFBcUI7d0JBQ3ZCLE1BQU1FLFNBQVNyQyxRQUFRc0MsUUFBUTt3QkFFL0IsSUFBSUMsc0JBQXNCLE9BQ3RCQyx1QkFBdUI7d0JBRTNCLElBQUlILFFBQVE7NEJBQ1ZFLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDekM7d0JBQ2hELE9BQU87NEJBQ0x3Qyx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQzFDO3dCQUNsRDt3QkFFQSxJQUFJdUMsdUJBQXVCQyxzQkFBc0I7NEJBQy9DVCxZQUFZO3dCQUNkO29CQUNGO2dCQUNGO1lBQ0YsR0FBRy9CO1lBRUgsSUFBSStCLFdBQVc7Z0JBQ2JULFlBQVksSUFBSSxFQUFFLEdBQUc7Z0JBRXJCLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQzNDO2dCQUVaQSxRQUFRNEMsWUFBWSxDQUFDdEI7Z0JBRXJCdEIsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixnQkFBZ0IsWUFBWSxDQUFDO1lBQ2xFO1FBQ0Y7UUFFQSxPQUFPSjtJQUNUO0lBRUFZLGNBQWNsQyxPQUFPLEVBQUU7UUFDckIsSUFBSWlDLGlCQUFpQjtRQUVyQixNQUFNWSxjQUFjLElBQUksQ0FBQzFDLEtBQUssQ0FBQ3dCLFNBQVMsSUFDbENELGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDM0IsUUFBUTRCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsZUFBZSxFQUFFbUIsWUFBWSxVQUFVLENBQUM7UUFFekYsTUFBTTFDLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNzQixRQUFRLENBQUN6QjtRQUVsQyxJQUFJRyxVQUFVLE1BQU07WUFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBRWI4QixpQkFBaUI7UUFDbkI7UUFFQSxJQUFJQSxnQkFBZ0I7WUFDbEJqQyxRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVGLGdCQUFnQixlQUFlLEVBQUVtQixZQUFZLFFBQVEsQ0FBQztRQUMzRjtRQUVBLE9BQU9aO0lBQ1Q7SUFFQUcsbUJBQW1CcEMsT0FBTyxFQUFFO1FBQzFCLElBQUltQyxzQkFBc0I7UUFFMUIsTUFBTVcsbUJBQW1CLElBQUksQ0FBQzFDLFVBQVUsQ0FBQ3VCLFNBQVMsSUFDNUNELGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDM0IsUUFBUTRCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsZUFBZSxFQUFFb0IsaUJBQWlCLGVBQWUsQ0FBQztRQUVuRyxNQUFNMUMsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ3FCLFFBQVEsQ0FBQ3pCO1FBRTVDLElBQUlJLGVBQWUsTUFBTTtZQUN2QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFFbEIrQixzQkFBc0I7UUFDeEI7UUFFQSxJQUFJQSxxQkFBcUI7WUFDdkJuQyxRQUFROEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLGdCQUFnQixlQUFlLEVBQUVvQixpQkFBaUIsYUFBYSxDQUFDO1FBQ3JHO1FBRUEsT0FBT1g7SUFDVDtJQUVBTSxtQkFBbUJ6QyxPQUFPLEVBQUU7UUFDMUIsSUFBSXVDO1FBRUosTUFBTWIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUMzQixRQUFRNEIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixxQkFBcUIsQ0FBQztRQUV2RWEsc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QnZDLFFBQVE4QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosZ0JBQWdCLG1CQUFtQixDQUFDO1FBQ3pFO1FBRUEsT0FBT2E7SUFDVDtJQUVBRyxvQkFBb0IxQyxPQUFPLEVBQUU7UUFDM0IsSUFBSXdDLHVCQUF1QjtRQUUzQixNQUFNZCxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5QzNCLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXhFLE1BQU1xQix3QkFBd0IsSUFBSSxDQUFDM0MsVUFBVSxDQUFDNEMsd0JBQXdCLElBQ2hFQyx5QkFBeUJGLHNCQUFzQkcseUJBQXlCLElBQ3hFQywrQkFBK0IsSUFBSSxDQUFDaEQsS0FBSyxDQUFDaUQsNkJBQTZCLENBQUNILHdCQUF3QmpEO1FBRXRHLElBQUltRCw4QkFBOEI7WUFDaENYLHVCQUF1QjtRQUN6QjtRQUVBLElBQUlBLHNCQUFzQjtZQUN4QnhDLFFBQVE4QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosZ0JBQWdCLG9CQUFvQixDQUFDO1FBQzFFO1FBRUEsT0FBT2M7SUFDVDtJQUVBRyxPQUFPM0MsT0FBTyxFQUFFO1FBQ2QsTUFBTXFDLFNBQVNyQyxRQUFRc0MsUUFBUTtRQUUvQixJQUFJLENBQUNELFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTWYsWUFBWSxJQUFJLEVBQ2hCK0Isc0JBQXNCQyxJQUFBQSx3Q0FBZ0MsRUFBQ2hDLFdBQVd0QjtRQUV4RUEsUUFBUXVELGFBQWEsQ0FBQ0Y7SUFDeEI7SUFFQUcsU0FBUztRQUNQLE1BQU12RCxTQUFTLElBQUksQ0FBQzBCLFNBQVMsSUFDdkI4QixPQUFPO1lBQ0x4RDtRQUNGO1FBRU4sT0FBT3dEO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFlBQVk7SUFFMUIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFekQsT0FBTyxFQUFFO1FBQzdCLE9BQU80RCxJQUFBQSxvQkFBVyxFQUFDLENBQUM1RDtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHd0QsTUFDYmhELGdCQUFnQm9ELElBQUFBLGlDQUFvQixFQUFDNUQsUUFBUUQsVUFDN0NFLE9BQU9PLGVBQ1BOLFFBQVEyRCx1QkFBdUJyRCxlQUFlVCxVQUM5Q0ksYUFBYTJELDRCQUE0QnRELGVBQWVUO1lBRTlEQSxVQUFVO1lBRVYsTUFBTXNCLFlBQVksSUFBSXhCLFVBQVVFLFNBQVNDLFFBQVFDLE1BQU1DLE9BQU9DO1lBRTlELE9BQU9rQjtRQUNULEdBQUd0QjtJQUNMO0lBRUEsT0FBT2dFLGNBQWNDLFNBQVMsRUFBRWpFLE9BQU8sRUFBRTtRQUN2QyxNQUFNa0UsZ0JBQWdCRCxVQUFVekQsT0FBTyxJQUNqQ2MsWUFBWTZDLElBQUFBLG1DQUEwQixFQUFDRCxlQUFlbEU7UUFFNUQsT0FBT3NCO0lBQ1Q7QUFDRjtBQUVBLFNBQVN3Qyx1QkFBdUJyRCxhQUFhLEVBQUVULE9BQU87SUFDcEQsTUFBTW9FLFlBQVkzRCxjQUFjNEQsWUFBWSxJQUN0Q2xFLFFBQVFILFFBQVFzRSxvQkFBb0IsQ0FBQ0Y7SUFFM0MsT0FBT2pFO0FBQ1Q7QUFFQSxTQUFTNEQsNEJBQTRCdEQsYUFBYSxFQUFFVCxPQUFPO0lBQ3pELE1BQU11RSxpQkFBaUI5RCxjQUFjK0QsaUJBQWlCLElBQ2hEcEUsYUFBYUosUUFBUXlFLDhCQUE4QixDQUFDRjtJQUUxRCxPQUFPbkU7QUFDVCJ9