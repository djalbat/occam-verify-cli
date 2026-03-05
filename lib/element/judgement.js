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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _assign = require("../process/assign");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = (0, _elements.define)(class Judgement extends _occamlanguages.Element {
    constructor(context, string, node, frame, assumption){
        super(context, string, node);
        this.frame = frame;
        this.assumption = assumption;
    }
    getFrame() {
        return this.frame;
    }
    getDeclaration() {
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
    compareMetavariableName(metavariableName) {
        return this.frame.compareMetavariableName(metavariableName);
    }
    matchJudgementNode(judgementNode) {
        const judgementNodeA = judgementNode; ///
        judgementNode = this.getJudgementNode();
        const judgementNodeB = judgementNode, judgementNodeAAMatchesJudgementBNodeB = judgementNodeA.match(judgementNodeB), judgementNodeMatches = judgementNodeAAMatchesJudgementBNodeB; ///
        return judgementNodeMatches;
    }
    findValidJudgement(context) {
        const judgementNode = this.getJudgementNode(), judgement = context.findJudgementByJudgementNode(judgementNode), validJudgemenet = judgement; ///
        return validJudgemenet;
    }
    validate(stated, context) {
        let judgement = null;
        const judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement...`);
        const validJudgement = this.findValidJudgement(context);
        if (validJudgement !== null) {
            judgement = validJudgement; ///
            context.debug(`...the '${judgementString}' judgement is already valid.`);
        } else {
            let validates = false;
            const frameValidates = this.validateFrame(stated, context);
            if (frameValidates) {
                const assumptionValidates = this.validateAssumption(stated, context);
                if (assumptionValidates) {
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
                context.addJudgement(judgement);
                context.debug(`...validated the '${judgementString}' judgement.`);
            }
        }
        return judgement;
    }
    validateFrame(stated, context) {
        let frameValidates = false;
        const frameString = this.frame.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${frameString}' frame...`);
        const frame = this.frame.validate(stated, context);
        if (frame !== null) {
            this.frame = frame;
            frameValidates = true;
        }
        if (frameValidates) {
            context.trace(`...validated the '${judgementString}' judgement's '${frameString}' frame.`);
        }
        return frameValidates;
    }
    validateAssumption(stated, context) {
        let assumptionValidates = false;
        const assumptionString = this.assumption.getString(), judgementString = this.getString(); ///
        context.trace(`Validating the '${judgementString}' judgement's '${assumptionString}' assumption...`);
        const assumption = this.assumption.validate(stated, context);
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
        const metavariable = this.assumption.getMetavariable(), reference = referenceFromMetavariable(metavariable, context), topLevelMetaAssertion = context.findTopLevelMetaAssertionByReference(reference), substitutions = topLevelMetaAssertion.getSubstitutions(), frameComparesToSubstitutions = this.frame.compareSubstitutions(substitutions, context);
        if (frameComparesToSubstitutions) {
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...validated the '${judgementString}' derived judgement.`);
        }
        return validatesWhenDerived;
    }
    assign(stated, context) {
        if (!stated) {
            return;
        }
        const judgement = this, judgementAssignment = (0, _assign.judgementAssignmentFromJudgement)(judgement, context), assignment = judgementAssignment; ///
        context.addAssignment(assignment);
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Judgement";
    static fromJSON(json, context) {
        const judgement = (0, _context.literally)((context)=>{
            const { string } = json, judgementNode = (0, _instantiate.instantiateJudgement)(string, context), node = judgementNode, frame = frameFromJudgementNode(judgementNode, context), assumption = assumptionFromJudgementNode(judgementNode, context);
            context = null;
            const judgement = new Judgement(context, string, node, frame, assumption);
            return judgement;
        }, context);
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
function referenceFromMetavariable(metavariable, context) {
    const { Reference } = _elements.default, metavariableNode = metavariable.getNode(), reference = Reference.fromMetavariableNode(metavariableNode, context);
    return reference;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVKdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGVBID0ganVkZ2VtZW50Tm9kZTsgLy8vXG5cbiAgICBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnROb2RlQiA9IGp1ZGdlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudE5vZGVBQU1hdGNoZXNKdWRnZW1lbnRCTm9kZUIgPSBqdWRnZW1lbnROb2RlQS5tYXRjaChqdWRnZW1lbnROb2RlQiksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnROb2RlQUFNYXRjaGVzSnVkZ2VtZW50Qk5vZGVCOyAvLy9cblxuICAgIHJldHVybiBqdWRnZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50Tm9kZSA9IHRoaXMuZ2V0SnVkZ2VtZW50Tm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICB2YWxpZEp1ZGdlbWVuZXQgPSBqdWRnZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEp1ZGdlbWVuZXQ7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQganVkZ2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRKdWRnZW1lbnQgPSB0aGlzLmZpbmRWYWxpZEp1ZGdlbWVudChjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEp1ZGdlbWVudCAhPT0gbnVsbCkge1xuICAgICAganVkZ2VtZW50ID0gdmFsaWRKdWRnZW1lbnQ7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAganVkZ2VtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KVxuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuYXNzdW1wdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9uLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hc3N1bXB0aW9uID0gYXNzdW1wdGlvbjtcblxuICAgICAgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgc3RhdGVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5hc3N1bXB0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIGZyYW1lQ29tcGFyZXNUb1N1YnN0aXR1dGlvbnMgPSB0aGlzLmZyYW1lLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lQ29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScgZGVyaXZlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnRGcm9tSnVkZ2VtZW50KGp1ZGdlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IGp1ZGdlbWVudEFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJKdWRnZW1lbnRcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBqdWRnZW1lbnROb2RlID0gaW5zdGFudGlhdGVKdWRnZW1lbnQoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBqdWRnZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKTtcblxuICAgICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmcmFtZUZyb21KdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhbWVOb2RlID0ganVkZ2VtZW50Tm9kZS5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGp1ZGdlbWVudE5vZGUuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICByZXR1cm4gYXNzdW1wdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJKdWRnZW1lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJmcmFtZSIsImFzc3VtcHRpb24iLCJnZXRGcmFtZSIsImdldERlY2xhcmF0aW9uIiwiZ2V0SnVkZ2VtZW50Tm9kZSIsImdldE5vZGUiLCJqdWRnZW1lbnROb2RlIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiZ2V0TWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZUEiLCJqdWRnZW1lbnROb2RlQiIsImp1ZGdlbWVudE5vZGVBQU1hdGNoZXNKdWRnZW1lbnRCTm9kZUIiLCJtYXRjaCIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwic3RhdGVkIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwidmFsaWRhdGVzIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRKdWRnZW1lbnQiLCJmcmFtZVN0cmluZyIsImFzc3VtcHRpb25TdHJpbmciLCJtZXRhdmFyaWFibGUiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJmcmFtZUNvbXBhcmVzVG9TdWJzdGl0dXRpb25zIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJhc3NpZ24iLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJlbGVtZW50cyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCO2tFQUVIO3lCQUdLOzZCQUNXO3dCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxtQkFBbUI7UUFDakIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsYUFBYTtRQUNYLE1BQU1ELGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ0ksV0FBV0YsY0FBY0MsVUFBVTtRQUV6QyxPQUFPQztJQUNUO0lBRUFDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNTLGVBQWU7SUFBSTtJQUV6REMsd0JBQXdCQyxnQkFBZ0IsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNVLHVCQUF1QixDQUFDQztJQUFtQjtJQUV6R0MsbUJBQW1CTixhQUFhLEVBQUU7UUFDaEMsTUFBTU8saUJBQWlCUCxlQUFlLEdBQUc7UUFFekNBLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQjtRQUVyQyxNQUFNVSxpQkFBaUJSLGVBQ2pCUyx3Q0FBd0NGLGVBQWVHLEtBQUssQ0FBQ0YsaUJBQzdERyx1QkFBdUJGLHVDQUF1QyxHQUFHO1FBRXZFLE9BQU9FO0lBQ1Q7SUFFQUMsbUJBQW1CckIsT0FBTyxFQUFFO1FBQzFCLE1BQU1TLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQixJQUNyQ2UsWUFBWXRCLFFBQVF1Qiw0QkFBNEIsQ0FBQ2QsZ0JBQ2pEZSxrQkFBa0JGLFdBQVksR0FBRztRQUV2QyxPQUFPRTtJQUNUO0lBRUFDLFNBQVNDLE1BQU0sRUFBRTFCLE9BQU8sRUFBRTtRQUN4QixJQUFJc0IsWUFBWTtRQUVoQixNQUFNSyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUU5QzVCLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoRSxNQUFNRyxpQkFBaUIsSUFBSSxDQUFDVCxrQkFBa0IsQ0FBQ3JCO1FBRS9DLElBQUk4QixtQkFBbUIsTUFBTTtZQUMzQlIsWUFBWVEsZ0JBQWdCLEdBQUc7WUFFL0I5QixRQUFRK0IsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFSixnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLElBQUlLLFlBQVk7WUFFaEIsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ0MsYUFBYSxDQUFDUixRQUFRMUI7WUFFbEQsSUFBSWlDLGdCQUFnQjtnQkFDbEIsTUFBTUUsc0JBQXNCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNWLFFBQVExQjtnQkFFNUQsSUFBSW1DLHFCQUFxQjtvQkFDdkIsSUFBSUUsc0JBQXNCLE9BQ3RCQyx1QkFBdUI7b0JBRTNCLElBQUlaLFFBQVE7d0JBQ1ZXLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDdkM7b0JBQ2hELE9BQU87d0JBQ0xzQyx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ3hDO29CQUNsRDtvQkFFQSxJQUFJcUMsdUJBQXVCQyxzQkFBc0I7d0JBQy9DTixZQUFZO29CQUNkO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJQSxXQUFXO2dCQUNiVixZQUFZLElBQUksRUFBRSxHQUFHO2dCQUVyQnRCLFFBQVF5QyxZQUFZLENBQUNuQjtnQkFFckJ0QixRQUFRK0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLGdCQUFnQixZQUFZLENBQUM7WUFDbEU7UUFDRjtRQUVBLE9BQU9MO0lBQ1Q7SUFFQVksY0FBY1IsTUFBTSxFQUFFMUIsT0FBTyxFQUFFO1FBQzdCLElBQUlpQyxpQkFBaUI7UUFFckIsTUFBTVMsY0FBYyxJQUFJLENBQUN2QyxLQUFLLENBQUN5QixTQUFTLElBQ2xDRCxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3QzVCLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGVBQWUsRUFBRWUsWUFBWSxVQUFVLENBQUM7UUFFekYsTUFBTXZDLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNzQixRQUFRLENBQUNDLFFBQVExQjtRQUUxQyxJQUFJRyxVQUFVLE1BQU07WUFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBRWI4QixpQkFBaUI7UUFDbkI7UUFFQSxJQUFJQSxnQkFBZ0I7WUFDbEJqQyxRQUFRNkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVGLGdCQUFnQixlQUFlLEVBQUVlLFlBQVksUUFBUSxDQUFDO1FBQzNGO1FBRUEsT0FBT1Q7SUFDVDtJQUVBRyxtQkFBbUJWLE1BQU0sRUFBRTFCLE9BQU8sRUFBRTtRQUNsQyxJQUFJbUMsc0JBQXNCO1FBRTFCLE1BQU1RLG1CQUFtQixJQUFJLENBQUN2QyxVQUFVLENBQUN3QixTQUFTLElBQzVDRCxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUU3QzVCLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGVBQWUsRUFBRWdCLGlCQUFpQixlQUFlLENBQUM7UUFFbkcsTUFBTXZDLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNxQixRQUFRLENBQUNDLFFBQVExQjtRQUVwRCxJQUFJSSxlQUFlLE1BQU07WUFDdkIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO1lBRWxCK0Isc0JBQXNCO1FBQ3hCO1FBRUEsSUFBSUEscUJBQXFCO1lBQ3ZCbkMsUUFBUStCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSixnQkFBZ0IsZUFBZSxFQUFFZ0IsaUJBQWlCLGFBQWEsQ0FBQztRQUNyRztRQUVBLE9BQU9SO0lBQ1Q7SUFFQUksbUJBQW1CdkMsT0FBTyxFQUFFO1FBQzFCLElBQUlxQztRQUVKLE1BQU1WLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDNUIsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IscUJBQXFCLENBQUM7UUFFdkVVLHNCQUFzQjtRQUV0QixJQUFJQSxxQkFBcUI7WUFDdkJyQyxRQUFRK0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLGdCQUFnQixtQkFBbUIsQ0FBQztRQUN6RTtRQUVBLE9BQU9VO0lBQ1Q7SUFFQUcsb0JBQW9CeEMsT0FBTyxFQUFFO1FBQzNCLElBQUlzQyx1QkFBdUI7UUFFM0IsTUFBTVgsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUM1QixRQUFRNkIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGdCQUFnQixzQkFBc0IsQ0FBQztRQUV4RSxNQUFNaUIsZUFBZSxJQUFJLENBQUN4QyxVQUFVLENBQUNRLGVBQWUsSUFDOUNpQyxZQUFZQywwQkFBMEJGLGNBQWM1QyxVQUNwRCtDLHdCQUF3Qi9DLFFBQVFnRCxvQ0FBb0MsQ0FBQ0gsWUFDckVJLGdCQUFnQkYsc0JBQXNCRyxnQkFBZ0IsSUFDdERDLCtCQUErQixJQUFJLENBQUNoRCxLQUFLLENBQUNpRCxvQkFBb0IsQ0FBQ0gsZUFBZWpEO1FBRXBGLElBQUltRCw4QkFBOEI7WUFDaENiLHVCQUF1QjtRQUN6QjtRQUVBLElBQUlBLHNCQUFzQjtZQUN4QnRDLFFBQVErQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosZ0JBQWdCLG9CQUFvQixDQUFDO1FBQzFFO1FBRUEsT0FBT1c7SUFDVDtJQUVBZSxPQUFPM0IsTUFBTSxFQUFFMUIsT0FBTyxFQUFFO1FBQ3RCLElBQUksQ0FBQzBCLFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTUosWUFBWSxJQUFJLEVBQ2hCZ0Msc0JBQXNCQyxJQUFBQSx3Q0FBZ0MsRUFBQ2pDLFdBQVd0QixVQUNsRXdELGFBQWFGLHFCQUFxQixHQUFHO1FBRTNDdEQsUUFBUXlELGFBQWEsQ0FBQ0Q7SUFDeEI7SUFFQUUsU0FBUztRQUNQLE1BQU16RCxTQUFTLElBQUksQ0FBQzJCLFNBQVMsSUFDdkIrQixPQUFPO1lBQ0wxRDtRQUNGO1FBRU4sT0FBTzBEO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFlBQVk7SUFFMUIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFM0QsT0FBTyxFQUFFO1FBQzdCLE1BQU1zQixZQUFZd0MsSUFBQUEsa0JBQVMsRUFBQyxDQUFDOUQ7WUFDM0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRzBELE1BQ2JsRCxnQkFBZ0JzRCxJQUFBQSxpQ0FBb0IsRUFBQzlELFFBQVFELFVBQzdDRSxPQUFPTyxlQUNQTixRQUFRNkQsdUJBQXVCdkQsZUFBZVQsVUFDOUNJLGFBQWE2RCw0QkFBNEJ4RCxlQUFlVDtZQUU5REEsVUFBVTtZQUVWLE1BQU1zQixZQUFZLElBQUl4QixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxPQUFPQztZQUU5RCxPQUFPa0I7UUFDVCxHQUFHdEI7UUFFSCxPQUFPc0I7SUFDVDtBQUNGO0FBRUEsU0FBUzBDLHVCQUF1QnZELGFBQWEsRUFBRVQsT0FBTztJQUNwRCxNQUFNa0UsWUFBWXpELGNBQWMwRCxZQUFZLElBQ3RDaEUsUUFBUUgsUUFBUW9FLG9CQUFvQixDQUFDRjtJQUUzQyxPQUFPL0Q7QUFDVDtBQUVBLFNBQVM4RCw0QkFBNEJ4RCxhQUFhLEVBQUVULE9BQU87SUFDekQsTUFBTXFFLGlCQUFpQjVELGNBQWM2RCxpQkFBaUIsSUFDaERsRSxhQUFhSixRQUFRdUUsOEJBQThCLENBQUNGO0lBRTFELE9BQU9qRTtBQUNUO0FBRUEsU0FBUzBDLDBCQUEwQkYsWUFBWSxFQUFFNUMsT0FBTztJQUN0RCxNQUFNLEVBQUV3RSxTQUFTLEVBQUUsR0FBR0MsaUJBQVEsRUFDeEJDLG1CQUFtQjlCLGFBQWFwQyxPQUFPLElBQ3ZDcUMsWUFBWTJCLFVBQVVHLG9CQUFvQixDQUFDRCxrQkFBa0IxRTtJQUVuRSxPQUFPNkM7QUFDVCJ9