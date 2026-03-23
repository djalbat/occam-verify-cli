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
        const metavariableNode = this.getMetavariableNode(), topLevelMetaAssertion = this.getTopLevelMetaAssertion(), metaLevelAssumptions = topLevelMetaAssertion.getMetaLevelAssumptions(), judgements = context.findJudgementsByMetavariableNode(metavariableNode), assumptions = assumptionsFromJudgements(judgements);
        (0, _context.reconcile)((context)=>{
            const metaLevelAssumptionsUnify = metaLevelAssumptions.every((metaLevelAssumption)=>{
                const metaLevelAssumptionUnifies = assumptions.some((assumption)=>{
                    const metaLevelAssumptionUnifies = assumption.unifyMetaLevelAssumption(metaLevelAssumption, context);
                    if (metaLevelAssumptionUnifies) {
                        return true;
                    }
                });
                if (metaLevelAssumptionUnifies) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5hc3N1bXB0aW9uLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgbWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgdmFsaWRKdWRnZW1lbmV0ID0ganVkZ2VtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRKdWRnZW1lbmV0O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAganVkZ2VtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRNZXRhTGV2ZWxBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSA9IG1ldGFMZXZlbEFzc3VtcHRpb25zLmV2ZXJ5KChtZXRhTGV2ZWxBc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzID0gYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzID0gYXNzdW1wdGlvbi51bmlmeU1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAobWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbm1lbnQgPSBqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudChqdWRnZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGp1ZGdlbWVudEFzc2lnbm1lbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICAgICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0ganVkZ2VtZW50LmdldEFzc3VtcHRpb24oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0QXNzdW1wdGlvbiIsImdldEp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50Tm9kZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImdldE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJ2YWxpZEp1ZGdlbWVuZXQiLCJ2YWxpZGF0ZSIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRKdWRnZW1lbnQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInJlY29uY2lsZSIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJmcmFtZVN0cmluZyIsImFzc3VtcHRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwianVkZ2VtZW50cyIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiYXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzIiwibWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSIsImV2ZXJ5IiwibWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzIiwic29tZSIsInVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMs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