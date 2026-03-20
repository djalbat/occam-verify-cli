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
    matchFrameNode(frameNode) {
        const node = frameNode, nodeMatches = this.matchNode(node), frameNodeMatches = nodeMatches; ///
        return frameNodeMatches;
    }
    findValidFrame(context) {
        const frameNode = this.getFrameNode(), frame = context.findFrameByFrameNode(frameNode), validFrame = frame; ///
        return validFrame;
    }
    isEqualTo(frame) {
        const frameNode = frame.getNode(), frameNodeMatches = this.matchFrameNode(frameNode), equalTo = frameNodeMatches; ///
        return equalTo;
    }
    isSingular() {
        const frameNode = this.getFrameNode(), singular = frameNode.isSingular();
        return singular;
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
    compareMetaLevelSubstitution(metaLevelSubstitution, context) {
        let comparesToMetaLevelSubstitution = false;
        const frameString = this.getString(), metaLevelSubstitutioString = metaLevelSubstitution.getString();
        context.trace(`Comparing the '${frameString}' frame to the '${metaLevelSubstitutioString}' meta-level substitutio...`);
        if (!comparesToMetaLevelSubstitution) {
            comparesToMetaLevelSubstitution = this.assumptions.some((assumption)=>{
                const assumptionComparesToSubstitution = assumption.compareMetaLevelSubstitution(metaLevelSubstitution, context);
                if (assumptionComparesToSubstitution) {
                    return true;
                }
            });
        }
        if (comparesToMetaLevelSubstitution) {
            context.debug(`...compared the the '${frameString}' frame to the '${metaLevelSubstitutioString}' meta-Level-substituution.`);
        }
        return comparesToMetaLevelSubstitution;
    }
    compareMetaLevelSubstitutions(metaLevelSubstitutions, context) {
        let comparesToMetaLevelSubstitutions;
        const frameString = this.getString(), metaLevelSubstitutionsString = (0, _string.metaLevelSubstitutionsStringFromMetaLevelSubstitutions)(metaLevelSubstitutions);
        context.trace(`Comparing the '${frameString}' frame to the '${metaLevelSubstitutionsString}' meta-level substitutio...`);
        comparesToMetaLevelSubstitutions = metaLevelSubstitutions.every((metaLevelSubstitution)=>{
            const compaaresToMetaLevelSubstitution = this.compareMetaLevelSubstitution(metaLevelSubstitution, context);
            if (compaaresToMetaLevelSubstitution) {
                return true;
            }
        });
        if (comparesToMetaLevelSubstitutions) {
            context.debug(`...compared the '${frameString}' frame to the '${metaLevelSubstitutionsString}' metaLevelSubstitutions.`);
        }
        return comparesToMetaLevelSubstitutions;
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
    validate(stated, context) {
        let frame = null;
        const frameString = this.getString(); ///
        context.trace(`Validating the '${frameString}' frame...`);
        const validFrame = this.findValidFrame(context), valid = validFrame !== null;
        if (valid) {
            frame = validFrame; ///
            context.debug(`...the '${frameString}' frame is already valid.`);
        } else {
            let validates = false;
            const metavariableValidates = this.validatMetavariable(stated, context);
            if (metavariableValidates) {
                const assumptionsValidate = this.validateAssumptions(stated, context);
                if (assumptionsValidate) {
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
            (0, _context.descend)((stated, context)=>{
                assumption = assumption.validate(stated, context); ///
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
    validateAssumptions(stated, context) {
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
    validatMetavariable(stated, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMsIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb1N0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9TdHJpbmd9JyBtZXRhLWxldmVsIHN1YnN0aXR1dGlvLi4uYCk7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24gPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVNZXRhTGV2ZWxTdWJzdGl0dXRpb24obWV0YUxldmVsU3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9TdHJpbmd9JyBtZXRhLUxldmVsLXN1YnN0aXR1dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZ30nIG1ldGEtbGV2ZWwgc3Vic3RpdHV0aW8uLi5gKTtcblxuICAgIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gbWV0YUxldmVsU3Vic3RpdHV0aW9ucy5ldmVyeSgobWV0YUxldmVsU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbihtZXRhTGV2ZWxTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHttZXRhTGV2ZWxTdWJzdGl0dXRpb25zU3RyaW5nfScgbWV0YUxldmVsU3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRNZXRhdmFyaWFibGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBmcmFtZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGRlc2NlbmQoKHN0YXRlZCwgY29udGV4dCkgPT4ge1xuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoIXNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuLi5gKTtcblxuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSBbXTtcblxuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdE1ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCksXG4gICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKGZyYW1lTWV0YVR5cGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gaW5zdGFudGlhdGVGcmFtZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hGcmFtZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJmaW5kVmFsaWRGcmFtZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJ2YWxpZEZyYW1lIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImlzU2luZ3VsYXIiLCJzaW5ndWxhciIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVNZXRhTGV2ZWxTdWJzdGl0dXRpb24iLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb1N0cmluZyIsInRyYWNlIiwic29tZSIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zU3RyaW5nIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZ0Zyb21NZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiZXZlcnkiLCJjb21wYWFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZCIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJhc3N1bXB0aW9uc3RyaW5nIiwicmVjb25jaWxlIiwiZGVzY2VuZCIsInB1c2giLCJhc3N1bXB0aW9uc1N0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7NkJBQ1U7K0JBQ0k7eUJBQ0s7eUJBQ007d0JBQ3lEO01BRXpHLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7UUFDNUQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRyxlQUFlO1FBQ2IsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLFlBQVlQLE1BQU0sR0FBRztRQUUzQixPQUFPTztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNRCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QkksbUJBQW1CRixVQUFVQyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsTUFBTUgsWUFBWSxJQUFJLENBQUNGLFlBQVksSUFDN0JNLG1CQUFtQkosVUFBVUcsbUJBQW1CO1FBRXRELE9BQU9DO0lBQ1Q7SUFFQUMsZUFBZUwsU0FBUyxFQUFFO1FBQ3hCLE1BQU1QLE9BQU9PLFdBQ1BNLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLE9BQzdCZSxtQkFBbUJGLGFBQWEsR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRUFDLGVBQWVsQixPQUFPLEVBQUU7UUFDdEIsTUFBTVMsWUFBWSxJQUFJLENBQUNGLFlBQVksSUFDN0JZLFFBQVFuQixRQUFRb0Isb0JBQW9CLENBQUNYLFlBQ3JDWSxhQUFhRixPQUFPLEdBQUc7UUFFN0IsT0FBT0U7SUFDVDtJQUVBQyxVQUFVSCxLQUFLLEVBQUU7UUFDZixNQUFNVixZQUFZVSxNQUFNWCxPQUFPLElBQ3pCUyxtQkFBbUIsSUFBSSxDQUFDSCxjQUFjLENBQUNMLFlBQ3ZDYyxVQUFVTixrQkFBbUIsR0FBRztRQUV0QyxPQUFPTTtJQUNUO0lBRUFDLGFBQWE7UUFDWCxNQUFNZixZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QmtCLFdBQVdoQixVQUFVZSxVQUFVO1FBRXJDLE9BQU9DO0lBQ1Q7SUFFQUMsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsSUFBSUMscUJBQXFCO1FBRXpCLE1BQU1ILFdBQVcsSUFBSSxDQUFDRCxVQUFVO1FBRWhDLElBQUlDLFVBQVU7WUFDWixNQUFNSSxnQkFBZ0JGLFVBQVVHLE9BQU87WUFFdkMsSUFBSUQsa0JBQWtCLE1BQU07Z0JBQzFCLE1BQU1oQixtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUI7Z0JBRWpELElBQUlpQixrQkFBa0JoQixrQkFBa0I7b0JBQ3RDZSxxQkFBcUI7Z0JBQ3ZCO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUcsNkJBQTZCQyxxQkFBcUIsRUFBRWhDLE9BQU8sRUFBRTtRQUMzRCxJQUFJaUMsa0NBQWtDO1FBRXRDLE1BQU1DLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCQyw2QkFBNkJKLHNCQUFzQkcsU0FBUztRQUVsRW5DLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVILFlBQVksZ0JBQWdCLEVBQUVFLDJCQUEyQiwyQkFBMkIsQ0FBQztRQUVySCxJQUFJLENBQUNILGlDQUFpQztZQUNwQ0Esa0NBQWtDLElBQUksQ0FBQzlCLFdBQVcsQ0FBQ21DLElBQUksQ0FBQyxDQUFDQztnQkFDdkQsTUFBTUMsbUNBQW1DRCxXQUFXUiw0QkFBNEIsQ0FBQ0MsdUJBQXVCaEM7Z0JBRXhHLElBQUl3QyxrQ0FBa0M7b0JBQ3BDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsSUFBSVAsaUNBQWlDO1lBQ25DakMsUUFBUXlDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixFQUFFUCxZQUFZLGdCQUFnQixFQUFFRSwyQkFBMkIsMkJBQTJCLENBQUM7UUFDN0g7UUFFQSxPQUFPSDtJQUNUO0lBRUFTLDhCQUE4QkMsc0JBQXNCLEVBQUUzQyxPQUFPLEVBQUU7UUFDN0QsSUFBSTRDO1FBRUosTUFBTVYsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUJVLCtCQUErQkMsSUFBQUEsOERBQXNELEVBQUNIO1FBRTVGM0MsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsWUFBWSxnQkFBZ0IsRUFBRVcsNkJBQTZCLDJCQUEyQixDQUFDO1FBRXZIRCxtQ0FBbUNELHVCQUF1QkksS0FBSyxDQUFDLENBQUNmO1lBQy9ELE1BQU1nQixtQ0FBbUMsSUFBSSxDQUFDakIsNEJBQTRCLENBQUNDLHVCQUF1QmhDO1lBRWxHLElBQUlnRCxrQ0FBa0M7Z0JBQ3BDLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSUosa0NBQWtDO1lBQ3BDNUMsUUFBUXlDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFUCxZQUFZLGdCQUFnQixFQUFFVyw2QkFBNkIseUJBQXlCLENBQUM7UUFDekg7UUFFQSxPQUFPRDtJQUNUO0lBRUFLLHdCQUF3QnBDLGdCQUFnQixFQUFFO1FBQ3hDLElBQUlxQyw2QkFBNkI7UUFFakMsTUFBTXpCLFdBQVcsSUFBSSxDQUFDRCxVQUFVO1FBRWhDLElBQUlDLFVBQVU7WUFDWixNQUFNMEIsb0JBQW9CdEMsaUJBQWlCLEdBQUc7O1lBRTlDQSxtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUI7WUFFM0MsTUFBTXdDLG9CQUFvQnZDLGtCQUFrQixHQUFHO1lBRS9DcUMsNkJBQThCQyxzQkFBc0JDO1FBQ3REO1FBRUEsT0FBT0Y7SUFDVDtJQUVBRyxTQUFTQyxNQUFNLEVBQUV0RCxPQUFPLEVBQUU7UUFDeEIsSUFBSW1CLFFBQVE7UUFFWixNQUFNZSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMUNuQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILFlBQVksVUFBVSxDQUFDO1FBRXhELE1BQU1iLGFBQWEsSUFBSSxDQUFDSCxjQUFjLENBQUNsQixVQUNqQ3VELFFBQVNsQyxlQUFlO1FBRTlCLElBQUlrQyxPQUFPO1lBQ1RwQyxRQUFRRSxZQUFZLEdBQUc7WUFFdkJyQixRQUFReUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFUCxZQUFZLHlCQUF5QixDQUFDO1FBQ2pFLE9BQU87WUFDTCxJQUFJc0IsWUFBWTtZQUVoQixNQUFNQyx3QkFBd0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ0osUUFBUXREO1lBRS9ELElBQUl5RCx1QkFBdUI7Z0JBQ3pCLE1BQU1FLHNCQUFzQixJQUFJLENBQUNDLG1CQUFtQixDQUFDTixRQUFRdEQ7Z0JBRTdELElBQUkyRCxxQkFBcUI7b0JBQ3ZCLElBQUlFLHNCQUFzQixPQUN0QkMsdUJBQXVCO29CQUUzQixJQUFJUixRQUFRO3dCQUNWTyxzQkFBc0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQy9EO29CQUNoRCxPQUFPO3dCQUNMOEQsdUJBQXVCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUNoRTtvQkFDbEQ7b0JBRUEsSUFBSTZELHVCQUF1QkMsc0JBQXNCO3dCQUMvQ04sWUFBWTtvQkFDZDtnQkFDRjtZQUNGO1lBRUEsSUFBSUEsV0FBVztnQkFDYnJDLFFBQVEsSUFBSSxFQUFFLEdBQUc7Z0JBRWpCbkIsUUFBUWlFLFFBQVEsQ0FBQzlDO2dCQUVqQm5CLFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsWUFBWSxRQUFRLENBQUM7WUFDMUQ7UUFDRjtRQUVBLE9BQU9mO0lBQ1Q7SUFFQTRDLG1CQUFtQi9ELE9BQU8sRUFBRTtRQUMxQixJQUFJNkQsc0JBQXNCO1FBRTFCLE1BQU0zQixjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMUNuQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILFlBQVksaUJBQWlCLENBQUM7UUFFL0QsTUFBTVQsV0FBVyxJQUFJLENBQUNELFVBQVU7UUFFaEMsSUFBSUMsVUFBVTtZQUNab0Msc0JBQXNCO1FBQ3hCLE9BQU87WUFDTDdELFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVQLFlBQVksZ0NBQWdDLENBQUM7UUFDckU7UUFFQSxJQUFJMkIscUJBQXFCO1lBQ3ZCN0QsUUFBUXlDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUCxZQUFZLGVBQWUsQ0FBQztRQUNqRTtRQUVBLE9BQU8yQjtJQUNUO0lBRUFHLG9CQUFvQmhFLE9BQU8sRUFBRTtRQUMzQixJQUFJOEQ7UUFFSixNQUFNNUIsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFDbkMsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsWUFBWSxrQkFBa0IsQ0FBQztRQUUvRDRCLHVCQUF1QjtRQUV2QixJQUFJQSxzQkFBc0I7WUFDeEI5RCxRQUFReUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVQLFlBQVksZ0JBQWdCLENBQUM7UUFDakU7UUFFQSxPQUFPNEI7SUFDVDtJQUVBSSxtQkFBbUIzQixVQUFVLEVBQUVwQyxXQUFXLEVBQUVILE9BQU8sRUFBRTtRQUNuRCxJQUFJbUUsc0JBQXNCO1FBRTFCLE1BQU1qQyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUM1QmlDLG1CQUFtQjdCLFdBQVdKLFNBQVM7UUFFN0NuQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILFlBQVksV0FBVyxFQUFFa0MsaUJBQWlCLGFBQWEsQ0FBQztRQUV6RkMsSUFBQUEsa0JBQVMsRUFBQyxDQUFDckU7WUFDVHNFLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2hCLFFBQVF0RDtnQkFDZnVDLGFBQWFBLFdBQVdjLFFBQVEsQ0FBQ0MsUUFBUXRELFVBQVcsR0FBRztnQkFFdkQsSUFBSXVDLGVBQWUsTUFBTTtvQkFDdkJwQyxZQUFZb0UsSUFBSSxDQUFDaEM7b0JBRWpCNEIsc0JBQXNCO2dCQUN4QjtZQUNGLEdBQUduRTtRQUNMLEdBQUdBO1FBRUgsSUFBSW1FLHFCQUFxQjtZQUN2Qm5FLFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsWUFBWSxXQUFXLEVBQUVrQyxpQkFBaUIsYUFBYSxDQUFDO1FBQzdGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUCxvQkFBb0JOLE1BQU0sRUFBRXRELE9BQU8sRUFBRTtRQUNuQyxJQUFJMkQ7UUFFSixNQUFNbEMsV0FBVyxJQUFJLENBQUNELFVBQVU7UUFFaEMsSUFBSSxDQUFDQyxVQUFVO1lBQ2IsTUFBTVMsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUJxQyxvQkFBb0JDLElBQUFBLHdDQUFnQyxFQUFDLElBQUksQ0FBQ3RFLFdBQVc7WUFFM0VILFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUgsWUFBWSxXQUFXLEVBQUVzQyxrQkFBa0IsZ0JBQWdCLENBQUM7WUFFN0YsTUFBTXJFLGNBQWMsRUFBRTtZQUV0QndELHNCQUFzQixJQUFJLENBQUN4RCxXQUFXLENBQUM0QyxLQUFLLENBQUMsQ0FBQ1I7Z0JBQzVDLE1BQU00QixzQkFBc0IsSUFBSSxDQUFDRCxrQkFBa0IsQ0FBQzNCLFlBQVlwQyxhQUFhSDtnQkFFN0UsSUFBSW1FLHFCQUFxQjtvQkFDdkIsT0FBTztnQkFDVDtZQUNGO1lBRUEsSUFBSVIscUJBQXFCO2dCQUN2QixJQUFJLENBQUN4RCxXQUFXLEdBQUdBO2dCQUVuQkgsUUFBUXlDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUCxZQUFZLFdBQVcsRUFBRXNDLGtCQUFrQixjQUFjLENBQUM7WUFDL0Y7UUFDRixPQUFPO1lBQ0xiLHNCQUFzQjtRQUN4QjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUQsb0JBQW9CSixNQUFNLEVBQUV0RCxPQUFPLEVBQUU7UUFDbkMsSUFBSXlELHdCQUF3QjtRQUU1QixNQUFNaEMsV0FBVyxJQUFJLENBQUNELFVBQVU7UUFFaEMsSUFBSUMsVUFBVTtZQUNaLE1BQU1TLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCdUMscUJBQXFCLElBQUksQ0FBQ3RFLFlBQVksQ0FBQytCLFNBQVM7WUFFdERuQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILFlBQVksV0FBVyxFQUFFd0MsbUJBQW1CLGlCQUFpQixDQUFDO1lBRS9GLE1BQU10RSxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDaUQsUUFBUSxDQUFDckQsVUFDMUMyRSxlQUFlQyxtQ0FBb0IsRUFDbkNDLGdCQUFnQjdFLFFBQVE4RSwwQkFBMEIsQ0FBQ0gsZUFDbkRJLDJDQUEyQzNFLGFBQWE0RSxpQkFBaUIsQ0FBQ0g7WUFFaEYsSUFBSUUsMENBQTBDO2dCQUM1Q3RCLHdCQUF3QjtZQUMxQjtRQUNGLE9BQU87WUFDTEEsd0JBQXdCO1FBQzFCO1FBRUEsT0FBT0E7SUFDVDtJQUVBd0IsU0FBUztRQUNQLE1BQU1oRixTQUFTLElBQUksQ0FBQ2tDLFNBQVMsSUFDdkIrQyxPQUFPO1lBQ0xqRjtRQUNGO1FBRU4sT0FBT2lGO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFFBQVE7SUFFdEIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFbEYsT0FBTyxFQUFFO1FBQzdCLE9BQU9xRixJQUFBQSxvQkFBVyxFQUFDLENBQUNyRjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHaUYsTUFDYnpFLFlBQVk2RSxJQUFBQSw2QkFBZ0IsRUFBQ3JGLFFBQVFELFVBQ3JDRSxPQUFPTyxXQUNQTixjQUFjb0YseUJBQXlCOUUsV0FBV1QsVUFDbERJLGVBQWVvRixJQUFBQSxrQ0FBeUIsRUFBQy9FLFdBQVdUO1lBRTFEQSxVQUFVO1lBRVYsTUFBTW1CLFFBQVEsSUFBSXJCLE1BQU1FLFNBQVNDLFFBQVFDLE1BQU1DLGFBQWFDO1lBRTVELE9BQU9lO1FBQ1QsR0FBR25CO0lBQ0w7QUFDRjtBQUVBLFNBQVN1Rix5QkFBeUI5RSxTQUFTLEVBQUVULE9BQU87SUFDbEQsTUFBTXlGLGtCQUFrQmhGLFVBQVVpRixrQkFBa0IsSUFDOUN2RixjQUFjc0YsZ0JBQWdCRSxHQUFHLENBQUMsQ0FBQ0M7UUFDakMsTUFBTXJELGFBQWF2QyxRQUFRNkYsOEJBQThCLENBQUNEO1FBRTFELE9BQU9yRDtJQUNUO0lBRU4sT0FBT3BDO0FBQ1QifQ==