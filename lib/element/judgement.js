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
        const assumptions = this.getAssumptions(), topLevelMetaAssertion = this.getTopLevelMetaAssertion(), metaLevelAssumptions = topLevelMetaAssertion.getMetaLevelAssumptions(), metaLevelAssumptionsUnify = metaLevelAssumptions.every((metaLevelAssumption)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUp1ZGdlbWVudCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNFcXVhbFRvKGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSBqdWRnZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGp1ZGdlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRBc3N1bXB0aW9ucygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbi5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTsgfVxuXG4gIG1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4ganVkZ2VtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5mcmFtZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmZyYW1lLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRKdWRnZW1lbnQgPSB0aGlzLmZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAganVkZ2VtZW50ID0gdmFsaWRKdWRnZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGp1ZGdlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgIGZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbiA9IGFzc3VtcHRpb247XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRNZXRhTGV2ZWxBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucy5ldmVyeSgobWV0YUxldmVsQXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSBhc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzID0gYXNzdW1wdGlvbi51bmlmeU1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAobWV0YUxldmVsQXNzdW1wdGlvbnNVbmlmeSkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoanVkZ2VtZW50QXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSnVkZ2VtZW50XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGZyYW1lTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb247XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSnVkZ2VtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZnJhbWUiLCJhc3N1bXB0aW9uIiwiZ2V0RnJhbWUiLCJnZXRBc3N1bXB0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNFcXVhbFRvIiwianVkZ2VtZW50IiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJlcXVhbFRvIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwidmFsaWRhdGVzIiwicmVjb25jaWxlIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEp1ZGdlbWVudCIsImFzc3VtcHRpb25zIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRNZXRhTGV2ZWxBc3N1bXB0aW9ucyIsIm1ldGFMZXZlbEFzc3VtcHRpb25zVW5pZnkiLCJldmVyeSIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcyIsInNvbWUiLCJ1bmlmeU1ldGFMZXZlbEFzc3VtcHRpb24iLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVKdWRnZW1lbnQiLCJmcmFtZUZyb21KdWRnZW1lbnROb2RlIiwiYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJqdWRnZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsImZyYW1lTm9kZSIsImdldEZyYW1lTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEOzZCQUNjO3lCQUNFO3lCQUNJO3dCQUNNO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxDQUFFO1FBQy9ELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFB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