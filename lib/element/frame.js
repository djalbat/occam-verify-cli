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
const _breakPoint = require("../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
            const { string } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = (0, _element.metavariableFromFrameNode)(frameNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGZyYW1lTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gZnJhbWVOb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgZmluZFZhbGlkRnJhbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgdmFsaWRGcmFtZSA9IGZyYW1lOyAvLy9cblxuICAgIHJldHVybiB2YWxpZEZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGZyYW1lID0gdmFsaWRGcmFtZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG5cbiAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbi52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKGFzc3VtcHRpb24gIT09IG51bGwpIHtcbiAgICAgIGFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG5cbiAgICAgIGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIGFzc3VtcHRpb25zLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgYXNzdW1wdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhmcmFtZU1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUpIHtcbiAgICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIGlmICh0aGlzLm1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5maW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzTGVuZ3RoID0gZGVjbGFyZWRKdWRnZW1lbnRzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlY2xhcmVkSnVkZ2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzLmZvckVhY2goKGRlY2xhcmVkSnVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGRlY2xhcmVkSnVkZ2VtZW50LmdldEFzc3VtcHRpb24oKTtcblxuICAgICAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZG9lcyBub3QgbWF0Y2ggYW55IGRlY2xhcmVkIGp1ZGdlbWVudHMuLi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0Tm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZmluZFZhbGlkRnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJ2YWxpZGF0ZSIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJhc3N1bXB0aW9uU3RyaW5nIiwicHVzaCIsImV2ZXJ5IiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJkZWNsYXJlZEp1ZGdlbWVudHMiLCJmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyZWRKdWRnZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZm9yRWFjaCIsImRlY2xhcmVkSnVkZ2VtZW50IiwiZ2V0QXNzdW1wdGlvbiIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEO3lCQUNLOzZCQUNLOytCQUNJO3lCQUNLOzRCQUNxQjtNQUUvRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7UUFDeEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRyxlQUFlO1FBQ2IsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLFlBQVlSLE1BQU0sR0FBRztRQUUzQixPQUFPUTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNRCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QkksbUJBQW1CRixVQUFVQyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsSUFBSUMsbUJBQW1CO1FBRXZCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxVQUFVO1FBRWhDLElBQUlELFVBQVU7WUFDWkQsbUJBQW1CLElBQUksQ0FBQ1QsWUFBWSxDQUFD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