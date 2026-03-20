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
            (0, _context.descend)((context)=>{
                const stated = true; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMsIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb1N0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9TdHJpbmd9JyBtZXRhLWxldmVsIHN1YnN0aXR1dGlvLi4uYCk7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24gPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVNZXRhTGV2ZWxTdWJzdGl0dXRpb24obWV0YUxldmVsU3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9TdHJpbmd9JyBtZXRhLUxldmVsLXN1YnN0aXR1dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZ30nIG1ldGEtbGV2ZWwgc3Vic3RpdHV0aW8uLi5gKTtcblxuICAgIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gbWV0YUxldmVsU3Vic3RpdHV0aW9ucy5ldmVyeSgobWV0YUxldmVsU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbihtZXRhTGV2ZWxTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHttZXRhTGV2ZWxTdWJzdGl0dXRpb25zU3RyaW5nfScgbWV0YUxldmVsU3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRNZXRhdmFyaWFibGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBmcmFtZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7ICAvLy9cblxuICAgICAgICBpZiAoYXNzdW1wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG5cbiAgICAgICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICghc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy4uLmApO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8oZnJhbWVNZXRhVHlwZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0Tm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaEZyYW1lTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsImZpbmRWYWxpZEZyYW1lIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZGVidWciLCJjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmciLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zU3RyaW5nRnJvbU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJldmVyeSIsImNvbXBhYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdE1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb25zVmFsaWRhdGUiLCJ2YWxpZGF0ZUFzc3VtcHRpb25zIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsImFzc3VtcHRpb25zdHJpbmciLCJyZWNvbmNpbGUiLCJkZXNjZW5kIiwicHVzaCIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRnJhbWUiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwibWFwIiwiYXNzdW1wdGlv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