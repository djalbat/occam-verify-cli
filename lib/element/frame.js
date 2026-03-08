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
    constructor(context, string, node, reference, assumptions){
        super(context, string, node);
        this.reference = reference;
        this.assumptions = assumptions;
    }
    getAssumptions() {
        return this.assumptions;
    }
    getReference() {
        return this.reference;
    }
    getFrameNode() {
        const node = this.getNode(), frameNode = node; ///
        return frameNode;
    }
    getMetavariableName() {
        const frameNode = this.getFrameNode(), referenceName = frameNode.getMetavariableName();
        return referenceName;
    }
    getMetavariableNode() {
        const frameNode = this.getFrameNode(), referenceNode = frameNode.getMetavariableNode();
        return referenceNode;
    }
    getMetavariable() {
        let metavariable = null;
        const singular = this.isSingular();
        if (singular) {
            metavariable = this.reference.getMetavariable();
        }
        return metavariable;
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
            const referenceValidates = this.validateReference(stated, context), assumptionsValidate = this.validateAssumptions(stated, context);
            if (referenceValidates && assumptionsValidate) {
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
    validateReference(stated, context) {
        let referenceValidates = false;
        const singular = this.isSingular();
        if (singular) {
            const frameString = this.getString(), referenceString = this.reference.getString();
            context.trace(`Validating the '${frameString}' frame's '${referenceString}' reference...`);
            const metavariable = this.getMetavariable(), metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), validatesGivenMetaType = metavariable.validateGivenMetaType(frameMetaType, context);
            if (validatesGivenMetaType) {
                referenceValidates = true;
            }
            if (referenceValidates) {
                context.debug(`...validated the '${frameString}' frame's '${referenceString}' reference.`);
            }
        } else {
            referenceValidates = true;
        }
        return referenceValidates;
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
            const { string } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, reference = (0, _element.referenceFromFrameNode)(frameNode, context), assumptions = assumptionsFromFrameNode(frameNode, context);
            context = null;
            const frame = new Frame(context, string, node, reference, assumptions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVGcmFtZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyByZWZlcmVuY2VGcm9tRnJhbWVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBGcmFtZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgYXNzdW1wdGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTmFtZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZUEgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZUIgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCID0gZnJhbWVOb2RlQS5tYXRjaChmcmFtZU5vZGVCKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuLi5gKTtcblxuICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5ldmVyeSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMgJiYgYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUoZnJhbWVNZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uc3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uc3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBhc3N1bXB0aW9uLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICghc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy4uLmApO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWUgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gaW5zdGFudGlhdGVGcmFtZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIGFzc3VtcHRpb25zKTtcblxuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVmZXJlbmNlIiwiYXNzdW1wdGlvbnMiLCJnZXRBc3N1bXB0aW9ucyIsImdldFJlZmVyZW5jZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicmVmZXJlbmNlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGVBIiwiZnJhbWVOb2RlQiIsImZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCIiwibWF0Y2giLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkRnJhbWUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeSIsImNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJhc3N1bXB0aW9uc3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsInB1c2giLCJtZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRnJhbWUiLCJyZWZlcmVuY2VGcm9tRnJhbWVOb2RlIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwiYXNzdW1wdGlvbk5vZGVzIiwiZ2V0QXNzdW1wdGlvbk5vZGVzIiwibWFwIiwiYXNzdW1wdGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt5QkFDRzs2QkFDTzsrQkFDSTt5QkFDRTt3QkFDVTtNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxDQUFFO1FBQ3pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0QsV0FBVztJQUN6QjtJQUVBRSxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNILFNBQVM7SUFDdkI7SUFFQUksZUFBZTtRQUNiLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxZQUFZUCxNQUFNLEdBQUc7UUFFM0IsT0FBT087SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIs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