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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _metaTypeNames = require("../metaTypeNames");
const _element = require("../utilities/element");
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
    getMetavariableName() {
        const frameNode = this.getFrameNode(), metavariableName = frameNode.getMetavariableName();
        return metavariableName;
    }
    getMetavariableNode() {
        const frameNode = this.getFrameNode(), metavariableNode = frameNode.getMetavariableNode();
        return metavariableNode;
    }
    matchFrameNode(frameNode) {
        const frameNodeA = frameNode; ///
        frameNode = this.getFrameNode();
        const frameNodeB = frameNode, frameNodeAAMatchesFrameBNodeB = frameNodeA.match(frameNodeB), frameNodeMatches = frameNodeAAMatchesFrameBNodeB; ///
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
    compareSubstitution(substitution, context) {
        let comparesToSubstitution = false;
        const frameString = this.getString(), substitutionString = substitution.getString();
        context.trace(`Comparing the '${frameString}' frame to the '${substitutionString}' substitution...`);
        if (!comparesToSubstitution) {
            comparesToSubstitution = this.assumptions.some((assumption)=>{
                const assumptionComparesToSubstitution = assumption.compareSubstitution(substitution, context);
                if (assumptionComparesToSubstitution) {
                    return true;
                }
            });
        }
        if (comparesToSubstitution) {
            context.debug(`...compared the the '${frameString}' frame to the '${substitutionString}' substitutions.`);
        }
        return comparesToSubstitution;
    }
    compareSubstitutions(substitutions, context) {
        let comparesToSubstitutions;
        const frameString = this.getString(), substitutionsString = substitutions.asString();
        context.trace(`Comparing the '${frameString}' frame to the '${substitutionsString}' substitutions...`);
        comparesToSubstitutions = substitutions.every((substitution)=>{
            const compaaresToSubstitution = this.compareSubstitution(substitution, context);
            if (compaaresToSubstitution) {
                return true;
            }
        });
        if (comparesToSubstitutions) {
            context.debug(`...compared the '${frameString}' frame to the '${substitutionsString}' substitutions.`);
        }
        return comparesToSubstitutions;
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
            const assumptionsValidate = this.validateAssumptions(stated, context), metavariablevalidates = this.validateMetavariable(stated, context);
            if (assumptionsValidate && metavariablevalidates) {
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
    validateAssumption(assumption, context) {
        let assumptionValidates;
        const frameString = this.getString(), assumptionstring = assumption.getString();
        context.trace(`Validating the '${frameString}' frame's '${assumptionstring}' assumption.`);
        const stated = true; ///
        assumptionValidates = assumption.validate(stated, context);
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
                const assumptionValidates = this.validateAssumption(assumption, context);
                if (assumptionValidates) {
                    assumptions.push(assumption);
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
    validateMetavariable(stated, context) {
        let metavariableValidates = false;
        const singular = this.isSingular();
        if (singular) {
            const frameString = this.getString(), metavraibleString = this.metavariable.getString();
            context.trace(`Validating the '${frameString}' frame's '${metavraibleString}' metavariable...`);
            const metavariablePresent = context.isMetavariablePresent(this.metavariable);
            if (metavariablePresent) {
                const metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metavariableValidateGivenMetaType = this.metavariable.validateGivenMetaType(frameMetaType, context);
                if (metavariableValidateGivenMetaType) {
                    metavariableValidates = true;
                }
            } else {
                context.debug(`The '${frameString}' frame's '${metavraibleString}' metavariable is not present.`);
            }
            if (metavariableValidates) {
                context.debug(`...validated the '${frameString}' frame's '${metavraibleString}' metavariable.`);
            }
        } else {
            metavariableValidates = true;
        }
        return metavariableValidates;
    }
    validateGivenMetaType(metaType, stated, context) {
        let validatesGivenMetaType = false;
        const frameString = this.getString(), metaTypeString = metaType.getString();
        context.trace(`Validating the '${frameString}' frame given the '${metaTypeString}' meta-type...`);
        const metaTypeName = metaType.getName();
        if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
            const frame = this.validate(stated, context);
            if (frame !== null) {
                validatesGivenMetaType = true;
            }
        }
        if (validatesGivenMetaType) {
            context.debug(`...validated the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
        }
        return validatesGivenMetaType;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Frame";
    static fromJSON(json, context) {
        const frame = (0, _context.literally)((context)=>{
            const { string } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = (0, _element.metavariableFromFrameNode)(frameNode, context);
            context = null;
            const frame = new Frame(context, string, node, assumptions, metavariable);
            return frame;
        }, context);
        return frame;
    }
});
function assumptionsFromFrameNode(frameNode, context) {
    const assumptionNodes = frameNode.getAssumptionNodes(), assumptions = assumptionNodes.map((assumptionNode)=>{
        const assumption = context.findAssumptionByAssumptionNode(assumptionNode);
        return assumption;
    });
    return assumptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlQSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlQiA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUIgPSBmcmFtZU5vZGVBLm1hdGNoKGZyYW1lTm9kZUIpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEZyYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIHZhbGlkRnJhbWUgPSBmcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRGcmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy4uLmApO1xuXG4gICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb21wYWFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkRnJhbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmcmFtZSA9IHZhbGlkRnJhbWU7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUgJiYgbWV0YXZhcmlhYmxldmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBmcmFtZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcztcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoIXNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuLi5gKTtcblxuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSBbXTtcblxuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2cmFpYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGVHaXZlbk1ldGFUeXBlKGZyYW1lTWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWUgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gaW5zdGFudGlhdGVGcmFtZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlQSIsImZyYW1lTm9kZUIiLCJmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQiIsIm1hdGNoIiwiZnJhbWVOb2RlTWF0Y2hlcyIsImZpbmRWYWxpZEZyYW1lIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeSIsImNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkIiwidmFsaWRhdGVzIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGV2YWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJhc3N1bXB0aW9uc3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsInB1c2giLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJtZXRhdnJhaWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRnJhbWUiLCJhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwibWFwIiwiYXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt5QkFDRzs2QkFDTzsrQkFDSTt5QkFDSzt3QkFDTztNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxDQUFFO1FBQzVELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtJQUN0QjtJQUVBQyxp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