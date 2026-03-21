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
    compareMetaLevelSubstitution(metaLevelSubstitution, context) {
        let comparesToMetaLevelSubstitution;
        const frameString = this.getString(), metaLevelSubstitutionString = metaLevelSubstitution.getString();
        context.trace(`Comparing the '${frameString}' frame to the '${metaLevelSubstitutionString}' meta-level substitution...`);
        const metavariableNode = this.metavariable.getNode(), judgements = context.findJudgementsByMetavariableNode(metavariableNode), assumptions = assumptionsFromJudgements(judgements);
        comparesToMetaLevelSubstitution = assumptions.some((assumption)=>{
            const assumptionComparesToSubstitution = assumption.compareMetaLevelSubstitution(metaLevelSubstitution, context);
            if (assumptionComparesToSubstitution) {
                return true;
            }
        });
        if (comparesToMetaLevelSubstitution) {
            context.debug(`...compared the '${frameString}' frame to the '${metaLevelSubstitutionString}' meta-level substitution.`);
        }
        return comparesToMetaLevelSubstitution;
    }
    compareMetaLevelSubstitutions(metaLevelSubstitutions, context) {
        let comparesToMetaLevelSubstitutions;
        const frameString = this.getString(), metaLevelSubstitutionsString = (0, _string.metaLevelSubstitutionsStringFromMetaLevelSubstitutions)(metaLevelSubstitutions);
        context.trace(`Comparing the '${frameString}' frame to the '${metaLevelSubstitutionsString}' meta-level substitution...`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWUgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMsIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGZyYW1lTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gZnJhbWVOb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbihtZXRhTGV2ZWxTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbjtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvblN0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgY29tcGFyZXNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbiA9IGFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyhtZXRhTGV2ZWxTdWJzdGl0dXRpb25zKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZ30nIG1ldGEtbGV2ZWwgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb21wYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMuZXZlcnkoKG1ldGFMZXZlbFN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcGFhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24gPSB0aGlzLmNvbXBhcmVNZXRhTGV2ZWxTdWJzdGl0dXRpb24obWV0YUxldmVsU3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbXBhYXJlc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZ30nIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZmluZFZhbGlkRnJhbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgdmFsaWRGcmFtZSA9IGZyYW1lOyAvLy9cblxuICAgIHJldHVybiB2YWxpZEZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkRnJhbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmcmFtZSA9IHZhbGlkRnJhbWU7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25zdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uLnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zLi4uYCk7XG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zID0gW107XG5cbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8oZnJhbWVNZXRhVHlwZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21KdWRnZW1lbnRzKGp1ZGdlbWVudHMpIHtcbiAgY29uc3QgYXNzdW1wdGlvbnMgPSBqdWRnZW1lbnRzLm1hcCgoanVkZ2VtZW50KSA9PiB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGp1ZGdlbWVudC5nZXRBc3N1bXB0aW9uKCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJlcXVhbFRvIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwianVkZ2VtZW50cyIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiYXNzdW1wdGlvbnNGcm9tSnVkZ2VtZW50cyIsInNvbWUiLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImNvbXBhcmVNZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwibWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uc1N0cmluZyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNTdHJpbmdGcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRGcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsInZhbGlkYXRlIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJhc3N1bXB0aW9uc3RyaW5nIiwicmVjb25jaWxlIiwiZGVzY2VuZCIsInB1c2giLCJhc3N1bXB0aW9uc1N0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwianVkZ2VtZW50IiwiZ2V0QXNzdW1wdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNVOytCQUNJO3lCQUNLO3lCQUNNO3dCQUN5RDtNQUV6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