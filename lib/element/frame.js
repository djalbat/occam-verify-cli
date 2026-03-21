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
const _metaTypeNames = require("../metaTypeNames");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const _string = require("../utilities/string");
const _default = (0, _elements.define)(class Frame extends _occamlanguages.Element {
    constructor(context, string, node, assumptions, metavariable){
        super(context, string, node);
        this.assumptions = assumptions;
        this.metavariable = metavariable;
    }
    getAssumptions() {
        return this.assumptions;
    }
    getMetavariable() {
        return this.metavariable;
    }
    getFrameNode() {
        const node = this.getNode(), frameNode = node; ///
        return frameNode;
    }
    getMetavariableNode() {
        const frameNode = this.getFrameNode(), metavariableNode = frameNode.getMetavariableNode();
        return metavariableNode;
    }
    getMetavariableName() {
        const frameNode = this.getFrameNode(), metavariableName = frameNode.getMetavariableName();
        return metavariableName;
    }
    isEqualTo(frame) {
        const frameNode = frame.getNode(), frameNodeMatches = this.matchFrameNode(frameNode), equalTo = frameNodeMatches; ///
        return equalTo;
    }
    isSingular() {
        const frameNode = this.getFrameNode(), singular = frameNode.isSingular();
        return singular;
    }
    matchFrameNode(frameNode) {
        const node = frameNode, nodeMatches = this.matchNode(node), frameNodeMatches = nodeMatches; ///
        return frameNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        let metavariableNodeMatches = false;
        const singular = this.isSingular();
        if (singular) {
            metavariableNodeMatches = this.metavariable.matchMetavariableNode(metavariableNode);
        }
        return metavariableNodeMatches;
    }
    compareParameter(parameter) {
        let comparesToParamter = false;
        const singular = this.isSingular();
        if (singular) {
            const parameterName = parameter.getName();
            if (parameterName !== null) {
                const metavariableName = this.getMetavariableName();
                if (parameterName === metavariableName) {
                    comparesToParamter = true;
                }
            }
        }
        return comparesToParamter;
    }
    compareMetavariableName(metavariableName) {
        let comparesToMetavariableName = false;
        const singular = this.isSingular();
        if (singular) {
            const metavariableNameA = metavariableName ///
            ;
            metavariableName = this.getMetavariableName();
            const metavariableNameB = metavariableName; ///
            comparesToMetavariableName = metavariableNameA === metavariableNameB;
        }
        return comparesToMetavariableName;
    }
    compareAssumption(assumption, context) {
        let comparesToAssumption;
        const frameString = this.getString(), assumptionString = assumption.getString();
        context.trace(`Comparing the '${frameString}' frame to the '${assumptionString}' assumption...`);
        const metavariableNode = this.metavariable.getNode(), judgements = context.findJudgementsByMetavariableNode(metavariableNode), assumptions = assumptionsFromJudgements(judgements);
        comparesToAssumption = assumptions.some((assumption)=>{
            const assumptionComparesToSubstitution = assumption.compareAssumption(assumption, context);
            if (assumptionComparesToSubstitution) {
                return true;
            }
        });
        if (comparesToAssumption) {
            context.debug(`...compared the '${frameString}' frame to the '${assumptionString}' assumption.`);
        }
        return comparesToAssumption;
    }
    compareAssumptions(assumptions, context) {
        let comparesToAssumptions;
        const frameString = this.getString(), assumptionsString = (0, _string.assumptionsStringFromAssumptions)(assumptions);
        context.trace(`Comparing the '${frameString}' frame to the '${assumptionsString}' assumption...`);
        comparesToAssumptions = assumptions.every((assumption)=>{
            const compaaresToAssumption = this.compareAssumption(assumption, context);
            if (compaaresToAssumption) {
                return true;
            }
        });
        if (comparesToAssumptions) {
            context.debug(`...compared the '${frameString}' frame to the '${assumptionsString}' assumptions.`);
        }
        return comparesToAssumptions;
    }
    findValidFrame(context) {
        const frameNode = this.getFrameNode(), frame = context.findFrameByFrameNode(frameNode), validFrame = frame; ///
        return validFrame;
    }
    validate(context) {
        let frame = null;
        const frameString = this.getString(); ///
        context.trace(`Validating the '${frameString}' frame...`);
        const validFrame = this.findValidFrame(context), valid = validFrame !== null;
        if (valid) {
            frame = validFrame; ///
            context.debug(`...the '${frameString}' frame is already valid.`);
        } else {
            let validates = false;
            const metavariableValidates = this.validatMetavariable(context);
            if (metavariableValidates) {
                const assumptionsValidate = this.validateAssumptions(context);
                if (assumptionsValidate) {
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
                frame = this; ///
                context.addFrame(frame);
                context.debug(`...validated the '${frameString}' frame.`);
            }
        }
        return frame;
    }
    validateWhenStated(context) {
        let validatesWhenStated = false;
        const frameString = this.getString(); ///
        context.trace(`Validating the '${frameString}' stated frame...`);
        const singular = this.isSingular();
        if (singular) {
            validatesWhenStated = true;
        } else {
            context.debug(`The '${frameString}' stated frame must be singular.`);
        }
        if (validatesWhenStated) {
            context.debug(`...validated the '${frameString}' stated frame.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const frameString = this.getString(); ///
        context.trace(`Verifying the '${frameString}' derived frame...`);
        validatesWhenDerived = true;
        if (validatesWhenDerived) {
            context.debug(`...verified the '${frameString}' derived frame.`);
        }
        return validatesWhenDerived;
    }
    validateAssumption(assumption, assumptions, context) {
        let assumptionValidates = false;
        const frameString = this.getString(), assumptionstring = assumption.getString();
        context.trace(`Validating the '${frameString}' frame's '${assumptionstring}' assumption.`);
        (0, _context.reconcile)((context)=>{
            (0, _context.descend)((context)=>{
                assumption = assumption.validate(context); ///
                if (assumption !== null) {
                    assumptions.push(assumption);
                    assumptionValidates = true;
                }
            }, context);
        }, context);
        if (assumptionValidates) {
            context.debug(`...validated the '${frameString}' frame's '${assumptionstring}' assumption.`);
        }
        return assumptionValidates;
    }
    validateAssumptions(context) {
        let assumptionsValidate;
        const singular = this.isSingular();
        if (!singular) {
            const frameString = this.getString(), assumptionsString = (0, _string.assumptionsStringFromAssumptions)(this.assumptions);
            context.trace(`Validating the '${frameString}' frame's '${assumptionsString}' assumptions...`);
            const assumptions = [];
            assumptionsValidate = this.assumptions.every((assumption)=>{
                const assumptionValidates = this.validateAssumption(assumption, assumptions, context);
                if (assumptionValidates) {
                    return true;
                }
            });
            if (assumptionsValidate) {
                this.assumptions = assumptions;
                context.debug(`...validated the '${frameString}' frame's '${assumptionsString}' assumptions.`);
            }
        } else {
            assumptionsValidate = true;
        }
        return assumptionsValidate;
    }
    validatMetavariable(context) {
        let metavariableValidates = false;
        const singular = this.isSingular();
        if (singular) {
            const frameString = this.getString(), metavariableString = this.metavariable.getString();
            context.trace(`Validating the '${frameString}' frame's '${metavariableString}' metavariable...`);
            const metavariable = this.metavariable.validate(context), metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metavariableMetaTypeEqualToFrameMetaType = metavariable.isMetaTypeEqualTo(frameMetaType);
            if (metavariableMetaTypeEqualToFrameMetaType) {
                metavariableValidates = true;
            }
        } else {
            metavariableValidates = true;
        }
        return metavariableValidates;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Frame";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = (0, _element.metavariableFromFrameNode)(frameNode, context);
            context = null;
            const frame = new Frame(context, string, node, assumptions, metavariable);
            return frame;
        }, context);
    }
});
function assumptionsFromFrameNode(frameNode, context) {
    const assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map((assumptionNode)=>{
        const assumption = context.findAssumptionByAssumptionNode(assumptionNode);
        return assumption;
    });
    return assumptions;
}
function assumptionsFromJudgements(judgements) {
    const assumptions = judgements.map((judgement)=>{
        const assumption = judgement.getAssumption();
        return assumption;
    });
    return assumptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb0Fzc3VtcHRpb247XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgY29tcGFyZXNUb0Fzc3VtcHRpb24gPSBhc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGFzc3VtcHRpb24uY29tcGFyZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvQXNzdW1wdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvQXNzdW1wdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvQXNzdW1wdGlvbnM7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKGFzc3VtcHRpb25zKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb21wYXJlc1RvQXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcGFhcmVzVG9Bc3N1bXB0aW9uID0gdGhpcy5jb21wYXJlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbXBhYXJlc1RvQXNzdW1wdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvQXNzdW1wdGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvQXNzdW1wdGlvbnM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRGcmFtZSA9IHRoaXMuZmluZFZhbGlkRnJhbWUoY29udGV4dCksXG4gICAgICAgICAgdmFsaWQgPSAodmFsaWRGcmFtZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGZyYW1lID0gdmFsaWRGcmFtZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0TWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBmcmFtZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAoYXNzdW1wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG5cbiAgICAgICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoIXNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuLi5gKTtcblxuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSBbXTtcblxuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhmcmFtZU1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGluc3RhbnRpYXRlRnJhbWUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICBjb25zdCBhc3N1bXB0aW9ucyA9IGp1ZGdlbWVudHMubWFwKChqdWRnZW1lbnQpID0+IHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0ganVkZ2VtZW50LmdldEFzc3VtcHRpb24oKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0Tm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImVxdWFsVG8iLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJjb21wYXJlQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJjb21wYXJlc1RvQXNzdW1wdGlvbiIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwiYXNzdW1wdGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50cyIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyIsInNvbWUiLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZUFzc3VtcHRpb25zIiwiY29tcGFyZXNUb0Fzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9Bc3N1bXB0aW9uIiwiZmluZFZhbGlkRnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJ2YWxpZGF0ZSIsInZhbGlkIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdE1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb25zVmFsaWRhdGUiLCJ2YWxpZGF0ZUFzc3VtcHRpb25zIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwiYXNzdW1wdGlvbnN0cmluZyIsInJlY29uY2lsZSIsImRlc2NlbmQiLCJwdXNoIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwianVkZ2VtZW50IiwiZ2V0QXNzdW1wdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNVOytCQUNJO3lCQUNLO3lCQUNNO3dCQUNDO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7UUFDNUQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRyxlQUFlO1FBQ2IsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLFlBQVlQLE1BQU0sR0FBRztRQUUzQixPQUFPTztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNRCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QkksbUJBQW1CRixVQUFVQyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsTUFBTUgsWUFBWSxJQUFJLENBQUNGLFlBQVksSUFDN0JNLG1CQUFtQkosVUFBVUcsbUJBQW1CO1FBRXRELE9BQU9DO0lBQ1Q7SUFFQUMsVUFBVUMsS0FBSyxFQUFFO1FBQ2YsTUFBTU4sWUFBWU0sTUFBTVAsT0FBTyxJQUN6QlEsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFD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