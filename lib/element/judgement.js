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
        const metavariableNode = this.getMetavariableNode(), topLevelMetaAssertion = this.getTopLevelMetaAssertion(), metaLevelAssumptions = topLevelMetaAssertion.getMetaLevelAssumptions(), declaredJudgements = context.findDeclaredJudgementsByMetavariableNode(metavariableNode);
        let assumptions;
        assumptions = this.getAssumptions();
        assumptions = assumptionsFromDeclaredJudgements(declaredJudgements, assumptions);
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
function assumptionsFromDeclaredJudgements(declaredJudgements, assumptions = []) {
    declaredJudgements.map((declaredJudgement)=>{
        const assumption = declaredJudgement.getAssumption();
        assumptions.push(assumption);
    });
    return assumptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGp1ZGdlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRBc3N1bXB0aW9ucygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbi5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTsgfVxuXG4gIG1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRKdWRnZW1lbnQgPSB0aGlzLmZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAganVkZ2VtZW50ID0gdmFsaWRKdWRnZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGp1ZGdlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgIGZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBkZWNsYXJlZEp1ZGdlbWVudHMgPSBjb250ZXh0LmZpbmREZWNsYXJlZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBsZXQgYXNzdW1wdGlvbnM7XG5cbiAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRGVjbGFyZWRKdWRnZW1lbnRzKGRlY2xhcmVkSnVkZ2VtZW50cywgYXNzdW1wdGlvbnMpO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5ID0gbWV0YUxldmVsQXNzdW1wdGlvbnMuZXZlcnkoKG1ldGFMZXZlbEFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSBhc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSBhc3N1bXB0aW9uLnVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRhTGV2ZWxBc3N1bXB0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoanVkZ2VtZW50QXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbURlY2xhcmVkSnVkZ2VtZW50cyhkZWNsYXJlZEp1ZGdlbWVudHMsIGFzc3VtcHRpb25zID0gW10pIHtcbiAgZGVjbGFyZWRKdWRnZW1lbnRzLm1hcCgoZGVjbGFyZWRKdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gZGVjbGFyZWRKdWRnZW1lbnQuZ2V0QXNzdW1wdGlvbigpO1xuXG4gICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0QXNzdW1wdGlvbiIsImdldEp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50Tm9kZSIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImlzRXF1YWxUbyIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZXF1YWxUbyIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYWxpZEp1ZGdlbWVudCIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJ2YWxpZEp1ZGdlbWVuZXQiLCJ2YWxpZGF0ZSIsImp1ZGdlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRKdWRnZW1lbnQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInJlY29uY2lsZSIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRKdWRnZW1lbnQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9ucyIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZGVjbGFyZWRKdWRnZW1lbnRzIiwiZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnNGcm9tRGVjbGFyZWRKdWRnZW1lbnRzIiwibWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSIsImV2ZXJ5IiwibWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzIiwic29tZSIsInVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbiIsImp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnRBc3NpZ25tZW50RnJvbUp1ZGdlbWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImp1ZGdlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldEFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwibWFwIiwiZGVjbGFyZWRKdWRnZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7eUJBQ0U7eUJBQ0k7d0JBQ007TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLENBQUU7UUFDL0QsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxhQUFhO1FBQ1gsTUFBTUQsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDSSxXQUFXRixjQUFjQyxVQUFVO1FBRXpDLE9BQU9DO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFO1FBQ25CLE1BQU1KLGdCQUFnQkksVUFBVUwsT0FBTyxJQUNqQ00sdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNOLGdCQUMvQ08sVUFBVUYsc0JBQXVCLEdBQUc7UUFFMUMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUI7UUFBRSxPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDYyxjQUFjO0lBQUk7SUFFdkRDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNlLGVBQWU7SUFBSTtJQUV6REMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixLQUFLLENBQUNnQixtQkFBbUI7SUFBSTtJQUVqRUMsMkJBQTJCO1FBQUUsT0FBTyxJQUFJLENBQUNoQixVQUFVLENBQUNnQix3QkFBd0I7SUFBSTtJQUVoRkwsbUJBQW1CTixhQUFhLEVBQUU7UUFDaEMsTUFBTVIsT0FBT1EsZUFDUFksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3JCLE9BQzdCYSx1QkFBdUJPLGFBQWEsR0FBRztRQUU3QyxPQUFPUDtJQUNUO0lBRUFTLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ29CLHFCQUFxQixDQUFDQztJQUFtQjtJQUVyR0Msd0JBQXdCQyxnQkFBZ0IsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDdkIsS0FBSyxDQUFDc0IsdUJBQXVCLENBQUNDO0lBQW1CO0lBRXpHQyxtQkFBbUI1QixPQUFPLEVBQUU7UUFDMUIsTUFBTVUsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDTSxZQUFZZCxRQUFRNkIsNEJBQTRCLENBQUNuQixnQkFDakRvQixrQkFBa0JoQixXQUFZLEdBQUc7UUFFdkMsT0FBT2dCO0lBQ1Q7SUFFQUMsU0FBUy9CLE9BQU8sRUFBRTtRQUNoQixJQUFJYyxZQUFZO1FBRWhCLE1BQU1rQixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRSxNQUFNRyxpQkFBaUIsSUFBSSxDQUFDUCxrQkFBa0IsQ0FBQzVCO1FBRS9DLElBQUltQyxtQkFBbUIsTUFBTTtZQUMzQnJCLFlBQVlxQixnQkFBZ0IsR0FBRztZQUUvQm5DLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVKLGdCQUFnQiw2QkFBNkIsQ0FBQztRQUN6RSxPQUFPO1lBQ0wsSUFBSUssWUFBWTtZQUVoQkMsSUFBQUEsa0JBQVMsRUFBQyxDQUFDdEM7Z0JBQ1QsTUFBTXVDLGlCQUFpQixJQUFJLENBQUNDLGFBQWEsQ0FBQ3hDO2dCQUUxQyxJQUFJdUMsZ0JBQWdCO29CQUNsQixNQUFNRSxzQkFBc0IsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQzFDO29CQUVwRCxJQUFJeUMscUJBQXFCO3dCQUN2QixNQUFNRSxTQUFTM0MsUUFBUTRDLFFBQVE7d0JBRS9CLElBQUlDLHNCQUFzQixPQUN0QkMsdUJBQXVCO3dCQUUzQixJQUFJSCxRQUFROzRCQUNWRSxzQkFBc0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQy9DO3dCQUNoRCxPQUFPOzRCQUNMOEMsdUJBQXVCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUNoRDt3QkFDbEQ7d0JBRUEsSUFBSTZDLHVCQUF1QkMsc0JBQXNCOzRCQUMvQ1QsWUFBWTt3QkFDZDtvQkFDRjtnQkFDRjtZQUNGLEdBQUdyQztZQUVILElBQUlxQyxXQUFXO2dCQUNidkIsWUFBWSxJQUFJLEVBQUUsR0FBRztnQkFFckIsSUFBSSxDQUFDbUMsTUFBTSxDQUFDakQ7Z0JBRVpBLFFBQVFrRCxZQUFZLENBQUNwQztnQkFFckJkLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosZ0JBQWdCLFlBQVksQ0FBQztZQUNsRTtRQUNGO1FBRUEsT0FBT2xCO0lBQ1Q7SUFFQTBCLGNBQWN4QyxPQUFPLEVBQUU7UUFDckIsSUFBSXVDLGlCQUFpQjtRQUVyQixNQUFNUCxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHNCQUFzQixDQUFDO1FBRXhFLE1BQU01QixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDMkIsUUFBUSxDQUFDL0I7UUFFbEMsSUFBSUksVUFBVSxNQUFNO1lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUVibUMsaUJBQWlCO1FBQ25CO1FBRUEsSUFBSUEsZ0JBQWdCO1lBQ2xCdkMsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRixnQkFBZ0Isb0JBQW9CLENBQUM7UUFDMUU7UUFFQSxPQUFPTztJQUNUO0lBRUFHLG1CQUFtQjFDLE9BQU8sRUFBRTtRQUMxQixJQUFJeUMsc0JBQXNCO1FBRTFCLE1BQU1ULGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDakMsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsMkJBQTJCLENBQUM7UUFFN0UsTUFBTTNCLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUMwQixRQUFRLENBQUMvQjtRQUU1QyxJQUFJSyxlQUFlLE1BQU07WUFDdkIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBRWxCb0Msc0JBQXNCO1FBQ3hCO1FBRUEsSUFBSUEscUJBQXFCO1lBQ3ZCekMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixnQkFBZ0IseUJBQXlCLENBQUM7UUFDL0U7UUFFQSxPQUFPUztJQUNUO0lBRUFNLG1CQUFtQi9DLE9BQU8sRUFBRTtRQUMxQixJQUFJNkM7UUFFSixNQUFNYixrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5Q2pDLFFBQVFrQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLHFCQUFxQixDQUFDO1FBRXZFYSxzQkFBc0I7UUFFdEIsSUFBSUEscUJBQXFCO1lBQ3ZCN0MsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixnQkFBZ0IsbUJBQW1CLENBQUM7UUFDekU7UUFFQSxPQUFPYTtJQUNUO0lBRUFHLG9CQUFvQmhELE9BQU8sRUFBRTtRQUMzQixJQUFJOEMsdUJBQXVCO1FBRTNCLE1BQU1kLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDakMsUUFBUWtDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0Isc0JBQXNCLENBQUM7UUFFeEUsTUFBTVAsbUJBQW1CLElBQUksQ0FBQ0wsbUJBQW1CLElBQzNDK0Isd0JBQXdCLElBQUksQ0FBQzlCLHdCQUF3QixJQUNyRCtCLHVCQUF1QkQsc0JBQXNCRSx1QkFBdUIsSUFDcEVDLHFCQUFxQnRELFFBQVF1RCx3Q0FBd0MsQ0FBQzlCO1FBRTVFLElBQUkrQjtRQUVKQSxjQUFjLElBQUksQ0FBQ3RDLGNBQWM7UUFFakNzQyxjQUFjQyxrQ0FBa0NILG9CQUFvQkU7UUFFcEVsQixJQUFBQSxrQkFBUyxFQUFDLENBQUN0QztZQUNULE1BQU0wRCw0QkFBNEJOLHFCQUFxQk8sS0FBSyxDQUFDLENBQUNDO2dCQUM1RCxNQUFNQyw2QkFBNkJMLFlBQVlNLElBQUksQ0FBQyxDQUFDekQ7b0JBQ25ELE1BQU13RCw2QkFBNkJ4RCxXQUFXMEQsd0JBQXdCLENBQUNILHFCQUFxQjVEO29CQUU1RixJQUFJNkQsNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlBLDRCQUE0QjtvQkFDOUIsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSUgsMkJBQTJCO2dCQUM3QlosdUJBQXVCO1lBQ3pCO1FBQ0YsR0FBRzlDO1FBRUgsSUFBSThDLHNCQUFzQjtZQUN4QjlDLFFBQVFvQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosZ0JBQWdCLG9CQUFvQixDQUFDO1FBQzFFO1FBRUEsT0FBT2M7SUFDVDtJQUVBRyxPQUFPakQsT0FBTyxFQUFFO1FBQ2QsTUFBTTJDLFNBQVMzQyxRQUFRNEMsUUFBUTtRQUUvQixJQUFJLENBQUNELFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTTdCLFlBQVksSUFBSSxFQUNoQmtELHNCQUFzQkMsSUFBQUEsd0NBQWdDLEVBQUNuRCxXQUFXZDtRQUV4RUEsUUFBUWtFLGFBQWEsQ0FBQ0Y7SUFDeEI7SUFFQSxPQUFPRyxPQUFPLFlBQVk7SUFFMUJDLFNBQVM7UUFDUCxNQUFNbkUsU0FBUyxJQUFJLENBQUNnQyxTQUFTLElBQ3ZCOUIsWUFBWSxJQUFJLENBQUNrRSxZQUFZLElBQzdCQyxPQUFPO1lBQ0xyRTtZQUNBRTtRQUNGO1FBRU4sT0FBT21FO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUV0RSxPQUFPLEVBQUU7UUFDN0IsT0FBT3dFLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3hFO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBR21FLE1BQ3hCNUQsZ0JBQWdCK0QsSUFBQUEsaUNBQW9CLEVBQUN4RSxRQUFRRCxVQUM3Q0UsT0FBT1EsZUFDUE4sUUFBUXNFLHVCQUF1QmhFLGVBQWVWLFVBQzlDSyxhQUFhc0UsNEJBQTRCakUsZUFBZVY7WUFFOURBLFVBQVU7WUFFVixNQUFNYyxZQUFZLElBQUloQixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQyxPQUFPQztZQUV6RSxPQUFPUztRQUNULEdBQUdkO0lBQ0w7SUFFQSxPQUFPNEUsY0FBY0MsU0FBUyxFQUFFN0UsT0FBTyxFQUFFO1FBQ3ZDLE1BQU04RSxnQkFBZ0JELFVBQVVwRSxPQUFPLElBQ2pDSyxZQUFZaUUsSUFBQUEsbUNBQTBCLEVBQUNELGVBQWU5RTtRQUU1RCxPQUFPYztJQUNUO0FBQ0Y7QUFFQSxTQUFTNEQsdUJBQXVCaEUsYUFBYSxFQUFFVixPQUFPO0lBQ3BELE1BQU1nRixZQUFZdEUsY0FBY3VFLFlBQVksSUFDdEM3RSxRQUFRSixRQUFRa0Ysb0JBQW9CLENBQUNGO0lBRTNDLE9BQU81RTtBQUNUO0FBRUEsU0FBU3VFLDRCQUE0QmpFLGFBQWEsRUFBRVYsT0FBTztJQUN6RCxNQUFNbUYsaUJBQWlCekUsY0FBYzBFLGlCQUFpQixJQUNoRC9FLGFBQWFMLFFBQVFxRiw4QkFBOEIsQ0FBQ0Y7SUFFMUQsT0FBTzlFO0FBQ1Q7QUFFQSxTQUFTb0Qsa0NBQWtDSCxrQkFBa0IsRUFBRUUsY0FBYyxFQUFFO0lBQzdFRixtQkFBbUJnQyxHQUFHLENBQUMsQ0FBQ0M7UUFDdEIsTUFBTWxGLGFBQWFrRixrQkFBa0JoRixhQUFhO1FBRWxEaUQsWUFBWWdDLElBQUksQ0FBQ25GO0lBQ25CO0lBRUEsT0FBT21EO0FBQ1QifQ==