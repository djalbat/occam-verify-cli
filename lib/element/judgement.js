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
        const metavariableNode = this.getMetavariableNode(), topLevelMetaAssertion = this.getTopLevelMetaAssertion(), metaLevelAssumptions = topLevelMetaAssertion.getMetaLevelAssumptions(), judgements = context.findJudgementsByMetavariableNode(metavariableNode);
        let assumptions;
        assumptions = this.getAssumptions();
        assumptions = assumptionsFromJudgements(judgements, assumptions);
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
function assumptionsFromJudgements(judgements, assumptions = []) {
    judgements.map((judgement)=>{
        const assumption = judgement.getAssumption();
        assumptions.push(assumption);
    });
    return assumptions;
}
function assumptionFromJudgementNode(judgementNode, context) {
    const assumptionNode = judgementNode.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode);
    return assumption;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb247XG4gIH1cblxuICBnZXRKdWRnZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnROb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0ganVkZ2VtZW50Tm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0QXNzdW1wdGlvbnMoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7IHJldHVybiB0aGlzLmFzc3VtcHRpb24uZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7IH1cblxuICBtYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICB2YWxpZEp1ZGdlbWVuZXQgPSBqdWRnZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEp1ZGdlbWVuZXQ7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGp1ZGdlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkSnVkZ2VtZW50ID0gdGhpcy5maW5kVmFsaWRKdWRnZW1lbnQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRKdWRnZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGp1ZGdlbWVudCA9IHZhbGlkSnVkZ2VtZW50OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuYXNzdW1wdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpLFxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldE1ldGFMZXZlbEFzc3VtcHRpb25zKCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBsZXQgYXNzdW1wdGlvbnM7XG5cbiAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyhqdWRnZW1lbnRzLCBhc3N1bXB0aW9ucyk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5ldmVyeSgobWV0YUxldmVsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcyA9IGFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcyA9IGFzc3VtcHRpb24udW5pZnlNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChqdWRnZW1lbnRBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAganVkZ2VtZW50Tm9kZSA9IGluc3RhbnRpYXRlSnVkZ2VtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzKGp1ZGdlbWVudHMsIGFzc3VtcHRpb25zID0gW10pIHtcbiAganVkZ2VtZW50cy5tYXAoKGp1ZGdlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBqdWRnZW1lbnQuZ2V0QXNzdW1wdGlvbigpO1xuXG4gICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJmcmFtZSIsImFzc3VtcHRpb24iLCJnZXRGcmFtZSIsImdldEFzc3VtcHRpb24iLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJ2YWxpZEp1ZGdlbWVuZXQiLCJ2YWxpZGF0ZSIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRKdWRnZW1lbnQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInJlY29uY2lsZSIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJmcmFtZVN0cmluZyIsImFzc3VtcHRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwianVkZ2VtZW50cyIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiYXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzIiwibWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSIsImV2ZXJ5IiwibWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzIiwic29tZSIsInVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJtYXAiLCJwdXNoIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImZpbmRB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