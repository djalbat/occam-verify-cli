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
    getMetavariableNode() {
        return this.frame.getMetavariableNode();
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
        const topLevelMetaAssertion = this.assumption.getTopLevelMetaAssertion(), metavariableNode = this.getMetavariableNode(), judgements = context.findJudgementsByMetavariableNode(metavariableNode);
        let assumptions;
        assumptions = topLevelMetaAssertion.getAssumptions();
        const specificAssumptions = assumptions; ///
        assumptions = assumptionsFromJudgements(judgements);
        const generalAssumptions = assumptions; ///
        (0, _context.reconcile)((context)=>{
            const specificAssumptionsUnify = specificAssumptions.every((specificAssumption)=>{
                const specificAssumptionUnifies = generalAssumptions.some((generalAssumption)=>{
                    const specificAssumptionUnifies = generalAssumption.unifyAssumption(specificAssumption, context);
                    if (specificAssumptionUnifies) {
                        return true;
                    }
                });
                if (specificAssumptionUnifies) {
                    return true;
                }
            });
            if (specificAssumptionsUnify) {
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
function assumptionsFromJudgements(judgements) {
    const assumptions = judgements.map((judgement)=>{
        const assumption = judgement.getAssumption();
        return assumption;
    });
    return assumptions;
}
function assumptionFromJudgementNode(judgementNode, context) {
    const assumptionNode = judgementNode.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAganVkZ2VtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmFzc3VtcHRpb24uZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgbGV0IGFzc3VtcHRpb25zO1xuXG4gICAgYXNzdW1wdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uczsgLy8vXG5cbiAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUp1ZGdlbWVudHMoanVkZ2VtZW50cyk7XG5cbiAgICBjb25zdCBnZW5lcmFsQXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uczsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzcGVjaWZpY0Fzc3VtcHRpb25zVW5pZnkgPSBzcGVjaWZpY0Fzc3VtcHRpb25zLmV2ZXJ5KChzcGVjaWZpY0Fzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNBc3N1bXB0aW9uVW5pZmllcyA9IGdlbmVyYWxBc3N1bXB0aW9ucy5zb21lKChnZW5lcmFsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQXNzdW1wdGlvblVuaWZpZXMgPSBnZW5lcmFsQXNzdW1wdGlvbi51bmlmeUFzc3VtcHRpb24oc3BlY2lmaWNBc3N1bXB0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzcGVjaWZpY0Fzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzcGVjaWZpY0Fzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3BlY2lmaWNBc3N1bXB0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoanVkZ2VtZW50QXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkp1ZGdlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUp1ZGdlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyhqdWRnZW1lbnRzKSB7XG4gIGNvbnN0IGFzc3VtcHRpb25zID0ganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBqdWRnZW1lbnQuZ2V0QXNzdW1wdGlvbigpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSnVkZ2VtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZnJhbWUiLCJhc3N1bXB0aW9uIiwiZ2V0RnJhbWUiLCJnZXRBc3N1bXB0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwidmFsaWRhdGVzIiwicmVjb25jaWxlIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEp1ZGdlbWVudCIsImZyYW1lU3RyaW5nIiwiYXNzdW1wdGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImp1ZGdlbWVudHMiLCJmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImFzc3VtcHRpb25zIiwiZ2V0QXNzdW1wdGlvbnMiLCJzcGVjaWZpY0Fzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyIsImdlbmVyYWxBc3N1bXB0aW9ucyIsInNwZWNpZmljQXNzdW1wdGlvbnNVbmlmeSIsImV2ZXJ5Iiwic3BlY2lmaWNBc3N1bXB0aW9uIiwic3BlY2lmaWNBc3N1bXB0aW9uVW5pZmllcyIsInNvbWUiLCJnZW5lcmFsQXNzdW1wdGlvbiIsInVuaWZ5QXNzdW1wdGlvbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0s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