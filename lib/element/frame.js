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
const _metaTypeNames = require("../metaTypeNames");
const _string = require("../utilities/string");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Frame extends _occamlanguages.Element {
    constructor(context, string, node, assumptions, metavairable){
        super(context, string, node);
        this.assumptions = assumptions;
        this.metavariable = metavairable;
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
    validateAssumptions(stated, context) {
        let assumptionsValidate;
        const singular = this.isSingular();
        if (!singular) {
            const frameString = this.getString(), assumptionsString = (0, _string.assumptionsStringFromAssumptions)(this.assumptions);
            context.trace(`Validating the '${assumptionsString}' assumptions of the '${frameString}' frame...`);
            stated = true; ///
            const assumptions = [];
            assumptionsValidate = this.assumptions.every((assumption)=>{
                const assumptionValidates = assumption.validate(stated, context);
                if (assumptionValidates) {
                    assumptions.push(assumption);
                    return true;
                }
            });
            if (assumptionsValidate) {
                this.assumptions = assumptions;
                context.debug(`...validated the '${assumptionsString}' assumptions of the '${frameString}' frame.`);
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
            const validates = this.validate(stated, context);
            validatesGivenMetaType = validates; ///
        }
        if (validatesGivenMetaType) {
            context.debug(`...validated the '${frameString}' frame given the '${metaTypeString}' meta-type.`);
        }
        return validatesGivenMetaType;
    }
    toJSON() {
        const metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), assumptionsJSON = (0, _json.assumptionsToAssumptionsJSON)(this.assumptions), metavariable = metavariableJSON, assumptions = assumptionsJSON, string = this.getString(), json = {
            string,
            assumptions,
            metavariable
        };
        return json;
    }
    static name = "Frame";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZUEgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZUIgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCID0gZnJhbWVOb2RlQS5tYXRjaChmcmFtZU5vZGVCKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuLi5gKTtcblxuICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5ldmVyeSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGV2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlICYmIG1ldGF2YXJpYWJsZXZhbGlkYXRlcykge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMgb2YgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZyYWlibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudCh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUoZnJhbWVNZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdmFsaWRhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKHRoaXMuYXNzdW1wdGlvbnMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhaXJhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlQSIsImZyYW1lTm9kZUIiLCJmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQiIsIm1hdGNoIiwiZnJhbWVOb2RlTWF0Y2hlcyIsImZpbmRWYWxpZEZyYW1lIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeSIsImNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkIiwidmFsaWRhdGVzIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGV2YWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwicHVzaCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsIm1ldGF2cmFpYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDsrQkFDYzt3QkFDWTtzQkFDNEI7TUFFN0UsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksQ0FBRTtRQUM1RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNFLFlBQVksR0FBR0Q7SUFDdEI7SUFFQUUsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQUksa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO0lBQzFCO0lBRUFHLGVBQWU7UUFDYixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsWUFBWVIsTUFBTSxHQUFHO1FBRTNCLE9BQU9RO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1ELFlBQVksSUFBSSxDQUFDRixZQUFZLElBQzdCSSxtQkFBbUJGLFVBQVVDLG1CQUFtQjtRQUV0RCxPQUFPQztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNSCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3Qk0sbUJBQW1CSixVQUFVRyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxlQUFlTCxTQUFTLEVBQUU7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