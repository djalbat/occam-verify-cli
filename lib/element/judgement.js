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
    constructor(context, string, node, lineIndex, frame, assumption){
        super(context, string, node, lineIndex);
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
        const validJudgement = this.findValidJudgement(context);
        if (validJudgement !== null) {
            judgement = validJudgement; ///
            context.debug(`...the '${judgementString}' judgement is already valid.`);
        } else {
            let validates = false;
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
                context.debug(`...validated the '${judgementString}' judgement.`);
            }
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
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, judgementNode = (0, _instantiate.instantiateJudgement)(string, context), node = judgementNode, frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
            context = null;
            const judgement = new Judgement(context, string, node, lineIndex, frame, assumption);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGp1ZGdlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRBc3N1bXB0aW9ucygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbi5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTsgfVxuXG4gIG1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRKdWRnZW1lbnQgPSB0aGlzLmZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAganVkZ2VtZW50ID0gdmFsaWRKdWRnZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpLFxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5ldmVyeSgobWV0YUxldmVsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IGFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uVW5pZmllcyA9IG1ldGFMZXZlbEFzc3VtcHRpb24udW5pZnlBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChqdWRnZW1lbnRBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUp1ZGdlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBmcmFtZSwgYXNzdW1wdGlvbik7XG5cbiAgICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJmcmFtZSIsImFzc3VtcHRpb24iLCJnZXRGcmFtZSIsImdldEFzc3VtcHRpb24iLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0VxdWFsVG8iLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImVxdWFsVG8iLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFsaWRKdWRnZW1lbnQiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwidmFsaWRKdWRnZW1lbmV0IiwidmFsaWRhdGUiLCJqdWRnZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkSnVkZ2VtZW50IiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkSnVkZ2VtZW50IiwicmVjb25jaWxlIiwiYXNzdW1wdGlvbnMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwibWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSIsImV2ZXJ5IiwibWV0YUxldmVsQXNzdW1wdGlvbiIsImFzc3VtcHRpb25VbmlmaWVzIiwic29tZSIsInVuaWZ5QXNzdW1wdGlvbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLENBQUU7UUFDL0QsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdC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