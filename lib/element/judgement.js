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
        const node = judgementNode, nodeMatches = this.matchNode(node), judgementNodeMatches = nodeMatches; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVKdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQgfSBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEp1ZGdlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGZyYW1lLCBhc3N1bXB0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9uO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGU7XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudE5vZGUgPSB0aGlzLmdldEp1ZGdlbWVudE5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGp1ZGdlbWVudE5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZnJhbWUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnROb2RlID0gdGhpcy5nZXRKdWRnZW1lbnROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbGlkSnVkZ2VtZW5ldCA9IGp1ZGdlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkSnVkZ2VtZW5ldDtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBqdWRnZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEp1ZGdlbWVudCA9IHRoaXMuZmluZFZhbGlkSnVkZ2VtZW50KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkSnVkZ2VtZW50ICE9PSBudWxsKSB7XG4gICAgICBqdWRnZW1lbnQgPSB2YWxpZEp1ZGdlbWVudDsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBqdWRnZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpXG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCdzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5hc3N1bXB0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50J3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmFzc3VtcHRpb24udmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb24gPSBhc3N1bXB0aW9uO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBzdGF0ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIHN0YXRlZCBqdWRnZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGRlcml2ZWQganVkZ2VtZW50Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmFzc3VtcHRpb24uZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHRoaXMuZnJhbWUuY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVDb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBkZXJpdmVkIGp1ZGdlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQoanVkZ2VtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0ganVkZ2VtZW50QXNzaWdubWVudDsgLy8vXG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkp1ZGdlbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSBpbnN0YW50aWF0ZUp1ZGdlbWVudChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGp1ZGdlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgZnJhbWUsIGFzc3VtcHRpb24pO1xuXG4gICAgICByZXR1cm4ganVkZ2VtZW50O1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZyYW1lRnJvbUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBmcmFtZU5vZGUgPSBqdWRnZW1lbnROb2RlLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25Gcm9tSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0ganVkZ2VtZW50Tm9kZS5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gIHJldHVybiBhc3N1bXB0aW9uO1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkp1ZGdlbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImZyYW1lIiwiYXNzdW1wdGlvbiIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRKdWRnZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJnZXRNZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwiZmluZFZhbGlkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsInZhbGlkSnVkZ2VtZW5ldCIsInZhbGlkYXRlIiwic3RhdGVkIiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEp1ZGdlbWVudCIsImRlYnVnIiwidmFsaWRhdGVzIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsInZhbGlkYXRlQXNzdW1wdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRKdWRnZW1lbnQiLCJmcmFtZVN0cmluZyIsImFzc3VtcHRpb25TdHJpbmciLCJtZXRhdmFyaWFibGUiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VGcm9tTWV0YXZhcmlhYmxlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwic3Vic3RpdHV0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJmcmFtZUNvbXBhcmVzVG9TdWJzdGl0dXRpb25zIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJhc3NpZ24iLCJqdWRnZW1lbnRBc3NpZ25tZW50IiwianVkZ2VtZW50QXNzaWdubWVudEZyb21KdWRnZW1lbnQiLCJhc3NpZ25tZW50IiwiYWRkQXNzaWdubWVudCIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZUp1ZGdlbWVudCIsImZyYW1lRnJvbUp1ZGdlbWVudE5vZGUiLCJhc3N1bXB0aW9uRnJvbUp1ZGdlbWVudE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRGcmFtZU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJSZWZlcmVuY2UiLCJlbGVtZW50cyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCO2tFQUVIO3lCQUdLOzZCQUNXO3dCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxDQUFFO1FBQ3BELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxtQkFBbUI7UUFDakIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FB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