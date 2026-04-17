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
const _default = (0, _elements.define)(class Frame extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, assumptions, metavariable){
        super(context, string, node, breakPoint);
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
        let metavariableName = null;
        const singular = this.isSingular();
        if (singular) {
            metavariableName = this.metavariable.getName();
        }
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
    findValidFrame(context) {
        const frameNode = this.getFrameNode(), frame = context.findFrameByFrameNode(frameNode), validFrame = frame; ///
        return validFrame;
    }
    validate(context) {
        let frame = null;
        const frameString = this.getString(); ///
        context.trace(`Validating the '${frameString}' frame...`);
        let validates = false;
        const validFrame = this.findValidFrame(context);
        if (validFrame !== null) {
            validates = true;
            frame = validFrame; ///
            context.debug(`...the '${frameString}' frame is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${frameString}' frame.`);
        }
        return frame;
    }
    validateAssumption(assumption, assumptions, context) {
        let assumptionValidates = false;
        const frameString = this.getString(), assumptionString = assumption.getString();
        context.trace(`Validating the '${frameString}' frame's '${assumptionString}' assumption.`);
        assumption = assumption.validate(context); ///
        if (assumption !== null) {
            assumptions.push(assumption);
            assumptionValidates = true;
        }
        if (assumptionValidates) {
            context.debug(`...validated the '${frameString}' frame's '${assumptionString}' assumption.`);
        }
        return assumptionValidates;
    }
    validateAssumptions(context) {
        let assumptionsValidate;
        const frameString = this.getString();
        context.trace(`Validating the '${frameString}' frame's assumptions...`);
        const assumptions = [];
        assumptionsValidate = this.assumptions.every((assumption)=>{
            const assumptionValidates = this.validateAssumption(assumption, assumptions, context);
            if (assumptionValidates) {
                return true;
            }
        });
        if (assumptionsValidate) {
            this.assumptions = assumptions;
            context.debug(`...validated the '${frameString}' frame's assumptions.`);
        }
        return assumptionsValidate;
    }
    validatMetavariable(context) {
        let metavariableValidates = true; ///
        if (this.metavariable !== null) {
            metavariableValidates = false;
            const frameString = this.getString(); ///
            context.trace(`Validating the '${frameString}' frame's metavariable...`);
            const metavariable = this.metavariable.validate(context), metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metavariableMetaTypeEqualToFrameMetaType = metavariable.isMetaTypeEqualTo(frameMetaType);
            if (metavariableMetaTypeEqualToFrameMetaType) {
                this.metavariable = metavariable; ///
                metavariableValidates = true;
            }
            if (metavariableValidates) {
                context.debug(`...validated the '${frameString}' frame's metavariable.`);
            }
        }
        return metavariableValidates;
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
        let validatesWhenDerived = false;
        const frameString = this.getString(); ///
        context.trace(`Verifying the '${frameString}' derived frame...`);
        if (this.metavariable !== null) {
            const metavariableNode = this.getMetavariableNode(), declaredJudgements = context.findDeclaredJudgementsByMetavariableNode(metavariableNode), declaredJudgementsLength = declaredJudgements.length;
            if (declaredJudgementsLength > 0) {
                declaredJudgements.forEach((declaredJudgement)=>{
                    const assumption = declaredJudgement.getAssumption();
                    this.assumptions.push(assumption);
                });
                validatesWhenDerived = true;
            } else {
                const metavariableString = this.metavariable.getString();
                context.trace(`The '${frameString}' frame's '${metavariableString}' metavariable does not match any declared judgements...`);
            }
        } else {
            validatesWhenDerived = true;
        }
        if (validatesWhenDerived) {
            context.debug(`...verified the '${frameString}' derived frame.`);
        }
        return validatesWhenDerived;
    }
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static name = "Frame";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = (0, _element.metavariableFromFrameNode)(frameNode, context);
            context = null;
            const frame = new Frame(context, string, node, breakPoint, assumptions, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGZyYW1lTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gZnJhbWVOb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgZmluZFZhbGlkRnJhbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgdmFsaWRGcmFtZSA9IGZyYW1lOyAvLy9cblxuICAgIHJldHVybiB2YWxpZEZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGZyYW1lID0gdmFsaWRGcmFtZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIGFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIGFzc3VtcHRpb25zLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgYXNzdW1wdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhmcmFtZU1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIGlmICh0aGlzLm1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5maW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzTGVuZ3RoID0gZGVjbGFyZWRKdWRnZW1lbnRzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlY2xhcmVkSnVkZ2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzLmZvckVhY2goKGRlY2xhcmVkSnVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGRlY2xhcmVkSnVkZ2VtZW50LmdldEFzc3VtcHRpb24oKTtcblxuICAgICAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZG9lcyBub3QgbWF0Y2ggYW55IGRlY2xhcmVkIGp1ZGdlbWVudHMuLi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50LnRvSlNPTigpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICAgIGZyYW1lTm9kZSA9IGluc3RhbnRpYXRlRnJhbWUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImZpbmRWYWxpZEZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJ2YWxpZEZyYW1lIiwidmFsaWRhdGUiLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwiYXNzdW1wdGlvblN0cmluZyIsInB1c2giLCJldmVyeSIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwiZGVjbGFyZWRKdWRnZW1lbnRzIiwiZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmVkSnVkZ2VtZW50c0xlbmd0aCIsImxlbmd0aCIsImZvckVhY2giLCJkZWNsYXJlZEp1ZGdlbWVudCIsImdldEFzc3VtcHRpb24iLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUZyYW1lIiwiYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZSIsImFzc3VtcHRpb25Ob2RlcyIsImdldEFzc3VtcHRpb25Ob2RlcyIsIm1hcCIsImFzc3VtcHRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25C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