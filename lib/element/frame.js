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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEZyYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIHZhbGlkRnJhbWUgPSBmcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRGcmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy4uLmApO1xuXG4gICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb21wYWFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkRnJhbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmcmFtZSA9IHZhbGlkRnJhbWU7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdE1ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgbXVzdCBiZSBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uc3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uc3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBhc3N1bXB0aW9uLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICghc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy4uLmApO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KSwgIC8vL1xuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhmcmFtZU1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGluc3RhbnRpYXRlRnJhbWUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoRnJhbWVOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkRnJhbWUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZGVidWciLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9TdWJzdGl0dXRpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwiYXNzdW1wdGlvbnN0cmluZyIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJwdXNoIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7eUJBQ0s7NkJBQ0s7K0JBQ0k7eUJBQ0s7d0JBQ087TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksQ0FBRTtRQUM1RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7SUFDekI7SUFFQUcsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO0lBQzFCO0lBRUFHLGVBQWU7UUFDYixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsWUFBWVAsTUFBTSxHQUFHO1FBRTNCLE9BQU9PO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1ELFlBQVksSUFBSSxDQUFDRixZQUFZLElBQzdCSSxtQkFBbUJGLFVBQVVDLG1CQUFtQjtRQUV0RCxPQUFPQztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNSCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3Qk0sbUJBQW1CSixVQUFVRyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxlQUFlTCxTQUFTLEVBQUU7UUFDeEIsTUFBTVAsT0FBT08sV0FDUE0sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsT0FDN0JlLG1CQUFtQkYsYUFBYSxHQUFHO1FBRXpDLE9B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