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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGp1ZGdlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRBc3N1bXB0aW9ucygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbi5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTsgfVxuXG4gIG1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRKdWRnZW1lbnQgPSB0aGlzLmZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAganVkZ2VtZW50ID0gdmFsaWRKdWRnZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAganVkZ2VtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcblxuICAgICAgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldE1ldGFMZXZlbEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5ID0gbWV0YUxldmVsQXNzdW1wdGlvbnMuZXZlcnkoKG1ldGFMZXZlbEFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzdW1wdGlvblVuaWZpZXMgPSBhc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXNzdW1wdGlvblVuaWZpZXMgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uLnVuaWZ5QXNzdW1wdGlvbihhc3N1bXB0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoYXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoanVkZ2VtZW50QXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRCcmVha1BvaW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAganVkZ2VtZW50Tm9kZSA9IGluc3RhbnRpYXRlSnVkZ2VtZW50KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0ganVkZ2VtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICAgICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0QXNzdW1wdGlvbiIsImdldEp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50Tm9kZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzRXF1YWxUbyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZXF1YWxUbyIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZEp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJ2YWxpZEp1ZGdlbWVuZXQiLCJ2YWxpZGF0ZSIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRKdWRnZW1lbnQiLCJkZWJ1ZyIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJyZWNvbmNpbGUiLCJhc3N1bXB0aW9ucyIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5IiwiZXZlcnkiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYXNzdW1wdGlvblVuaWZpZXMiLCJzb21lIiwidW5pZnlBc3N1bXB0aW9uIiwianVkZ2VtZW50QXNzaWdubWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50IiwiYWRkQXNzaWdubWVudCIsIm5hbWUiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLENBQUU7UUFDL0QsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxhQUFhO1FBQ1gsTUFBTUQsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDSSxXQUFXRixjQUFjQyxVQUFVO1FBRXpDLE9BQU9DO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFO1FBQ25CLE1BQU1KLGdCQUFnQkksVUFBVUwsT0FBTyxJQUNqQ00sdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOLGdCQUMvQ08sVUFBVUYsc0JBQXVCLEdBQUc7UUFFMUMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUI7UUFBRSxPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxjQUFjO0lBQUk7SUFFdkRDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNlLGVBQWU7SUFBSTtJQUV6REMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixLQUFLLENBQUNnQixtQkFBbUI7SUFBSTtJQUVqRUMsMkJBQTJCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixVQUFVLENBQUNnQix3QkFBd0I7SUFBSTtJQUVoRkwsbUJBQW1CTixhQUFhLEVBQUU7UUFDaEMsTUFBTVIsT0FBT1EsZUFDUFksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JCLE9BQzdCYSx1QkFBdUJPLGFBQWEsR0FBRztRQUU3QyxPQUFPUDtJQUNUO0lBRUFTLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ29CLHFCQUFxQixDQUFDQztJQUFtQjtJQUVyR0Msd0JBQXdCQyxnQkFBZ0IsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDdkIsS0FBSyxDQUFDc0IsdUJBQXVCLENBQUNDO0lBQW1CO0lBRXpHQyxtQkFBbUI1QixPQUFPLEVBQUU7UUFDMUIsTUFBTVUsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDTSxZQUFZZCxRQUFRNkIsNEJBQTRCLENBQUNuQixnQkFDakRvQixrQkFBa0JoQixXQUFZLEdBQUc7UUFFdkMsT0FBT2dCO0lBQ1Q7SUFFQUMsU0FBUy9CLE9BQU8sRUFBRTtRQUNoQixJQUFJYyxZQUFZO1FBRWhCLE1BQU1rQixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRSxJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLGtCQUFrQixDQUFDNUI7UUFFL0MsSUFBSW9DLG1CQUFtQixNQUFNO1lBQzNCRCxZQUFZO1lBRVpyQixZQUFZc0IsZ0JBQWdCLEdBQUc7WUFFL0JwQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFTCxnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLE1BQU1NLGlCQUFpQixJQUFJLENBQUNDLGFBQWEsQ0FBQ3ZDO1lBRTFDLElBQUlzQyxnQkFBZ0I7Z0JBQ2xCLE1BQU1FLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQixDQUFDekM7Z0JBRXBELElBQUl3QyxxQkFBcUI7b0JBQ3ZCLE1BQU1FLFNBQVMxQyxRQUFRMkMsUUFBUTtvQkFFL0IsSUFBSUMsc0JBQXNCLE9BQ3RCQyx1QkFBdUI7b0JBRTNCLElBQUlILFFBQVE7d0JBQ1ZFLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDOUM7b0JBQ2hELE9BQU87d0JBQ0w2Qyx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQy9DO29CQUNsRDtvQkFFQSxJQUFJNEMsdUJBQXVCQyxzQkFBc0I7d0JBQy9DVixZQUFZO29CQUNkO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJQSxXQUFXO2dCQUNickIsWUFBWSxJQUFJLEVBQUUsR0FBRztnQkFFckIsSUFBSSxDQUFDa0MsTUFBTSxDQUFDaEQ7Z0JBRVpBLFFBQVFpRCxZQUFZLENBQUNuQztZQUN2QjtRQUNGO1FBRUEsSUFBSXFCLFdBQVc7WUFDYm5DLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLFlBQVksQ0FBQztRQUNsRTtRQUVBLE9BQU9sQjtJQUNUO0lBRUF5QixjQUFjdkMsT0FBTyxFQUFFO1FBQ3JCLElBQUlzQyxpQkFBaUI7UUFFckIsTUFBTU4sa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NqQyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixzQkFBc0IsQ0FBQztRQUV4RSxNQUFNNUIsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQy9CO1FBRWxDLElBQUlJLFVBQVUsTUFBTTtZQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0E7WUFFYmtDLGlCQUFpQjtRQUNuQjtRQUVBLElBQUlBLGdCQUFnQjtZQUNsQnRDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsZ0JBQWdCLG9CQUFvQixDQUFDO1FBQzFFO1FBRUEsT0FBT007SUFDVDtJQUVBRyxtQkFBbUJ6QyxPQUFPLEVBQUU7UUFDMUIsSUFBSXdDLHNCQUFzQjtRQUUxQixNQUFNUixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLDJCQUEyQixDQUFDO1FBRTdFLE1BQU0zQixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDMEIsUUFBUSxDQUFDL0I7UUFFNUMsSUFBSUssZUFBZSxNQUFNO1lBQ3ZCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUVsQm1DLHNCQUFzQjtRQUN4QjtRQUVBLElBQUlBLHFCQUFxQjtZQUN2QnhDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLHlCQUF5QixDQUFDO1FBQy9FO1FBRUEsT0FBT1E7SUFDVDtJQUVBTSxtQkFBbUI5QyxPQUFPLEVBQUU7UUFDMUIsSUFBSTRDO1FBRUosTUFBTVosa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNqQyxRQUFRa0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixxQkFBcUIsQ0FBQztRQUV2RVksc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QjVDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLG1CQUFtQixDQUFDO1FBQ3pFO1FBRUEsT0FBT1k7SUFDVDtJQUVBRyxvQkFBb0IvQyxPQUFPLEVBQUU7UUFDM0IsSUFBSTZDLHVCQUF1QjtRQUUzQixNQUFNYixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXhFa0IsSUFBQUEsa0JBQVMsRUFBQyxDQUFDbEQ7WUFDVCxNQUFNbUQsY0FBYyxJQUFJLENBQUNqQyxjQUFjLElBQ2pDa0Msd0JBQXdCLElBQUksQ0FBQy9CLHdCQUF3QixJQUNyRGdDLHVCQUF1QkQsc0JBQXNCRSx1QkFBdUIsSUFDcEVDLDRCQUE0QkYscUJBQXFCRyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ3RELE1BQU1DLG9CQUFvQlAsWUFBWVEsSUFBSSxDQUFDLENBQUN0RDtvQkFDMUMsTUFBTXFELG9CQUFvQkQsb0JBQW9CRyxlQUFlLENBQUN2RCxZQUFZTDtvQkFFMUUsSUFBSTBELG1CQUFtQjt3QkFDckIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJQSxtQkFBbUI7b0JBQ3JCLE9BQU87Z0JBQ1Q7WUFDRjtZQUVOLElBQUlILDJCQUEyQjtnQkFDN0JWLHVCQUF1QjtZQUN6QjtRQUNGLEdBQUc3QztRQUVILElBQUk2QyxzQkFBc0I7WUFDeEI3QyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLGdCQUFnQixvQkFBb0IsQ0FBQztRQUMxRTtRQUVBLE9BQU9hO0lBQ1Q7SUFFQUcsT0FBT2hELE9BQU8sRUFBRTtRQUNkLE1BQU0wQyxTQUFTMUMsUUFBUTJDLFFBQVE7UUFFL0IsSUFBSSxDQUFDRCxRQUFRO1lBQ1g7UUFDRjtRQUVBLE1BQU01QixZQUFZLElBQUksRUFDaEIrQyxzQkFBc0JDLElBQUFBLHdDQUFnQyxFQUFDaEQsV0FBV2Q7UUFFeEVBLFFBQVErRCxhQUFhLENBQUNGO0lBQ3hCO0lBRUEsT0FBT0csT0FBTyxZQUFZO0lBRTFCQyxTQUFTO1FBQ1AsTUFBTWhFLFNBQVMsSUFBSSxDQUFDZ0MsU0FBUyxJQUN2QjlCLFlBQVksSUFBSSxDQUFDK0QsYUFBYSxJQUM5QkMsT0FBTztZQUNMbEU7WUFDQUU7UUFDRjtRQUVOLE9BQU9nRTtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFbkUsT0FBTyxFQUFFO1FBQzdCLE9BQU9xRSxJQUFBQSxvQkFBVyxFQUFDLENBQUNyRTtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdnRSxNQUN4QnpELGdCQUFnQjRELElBQUFBLGlDQUFvQixFQUFDckUsUUFBUUQsVUFDN0NFLE9BQU9RLGVBQ1BOLFFBQVFtRSx1QkFBdUI3RCxlQUFlVixVQUM5Q0ssYUFBYW1FLDRCQUE0QjlELGVBQWVWO1lBRTlEQSxVQUFVO1lBRVYsTUFBTWMsWUFBWSxJQUFJaEIsVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0MsT0FBT0M7WUFFekUsT0FBT1M7UUFDVCxHQUFHZDtJQUNMO0lBRUEsT0FBT3lFLGNBQWNDLFNBQVMsRUFBRTFFLE9BQU8sRUFBRTtRQUN2QyxNQUFNMkUsZ0JBQWdCRCxVQUFVakUsT0FBTyxJQUNqQ0ssWUFBWThELElBQUFBLG1DQUEwQixFQUFDRCxlQUFlM0U7UUFFNUQsT0FBT2M7SUFDVDtBQUNGO0FBRUEsU0FBU3lELHVCQUF1QjdELGFBQWEsRUFBRVYsT0FBTztJQUNwRCxNQUFNNkUsWUFBWW5FLGNBQWNvRSxZQUFZLElBQ3RDMUUsUUFBUUosUUFBUStFLG9CQUFvQixDQUFDRjtJQUUzQyxPQUFPekU7QUFDVDtBQUVBLFNBQVNvRSw0QkFBNEI5RCxhQUFhLEVBQUVWLE9BQU87SUFDekQsTUFBTWdGLGlCQUFpQnRFLGNBQWN1RSxpQkFBaUIsSUFDaEQ1RSxhQUFhTCxRQUFRa0YsOEJBQThCLENBQUNGO0lBRTFELE9BQU8zRTtBQUNUIn0=