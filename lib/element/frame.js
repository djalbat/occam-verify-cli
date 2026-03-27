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
        assumption = assumption.validate(context); ///
        if (assumption !== null) {
            assumptions.push(assumption);
            assumptionValidates = true;
        }
        if (assumptionValidates) {
            context.debug(`...validated the '${frameString}' frame's '${assumptionstring}' assumption.`);
        }
        return assumptionValidates;
    }
    validateAssumptions(context) {
        let assumptionsValidate;
        const assumptionsLength = this.assumptions.length;
        if (assumptionsLength) {
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
        let metavariableValidates = true; ///
        if (this.metavariable !== null) {
            metavariableValidates = false;
            const frameString = this.getString(), metavariableString = this.metavariable.getString();
            context.trace(`Validating the '${frameString}' frame's '${metavariableString}' metavariable...`);
            const metavariable = this.metavariable.validate(context), metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metavariableMetaTypeEqualToFrameMetaType = metavariable.isMetaTypeEqualTo(frameMetaType);
            if (metavariableMetaTypeEqualToFrameMetaType) {
                metavariableValidates = true;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZnJhbWVOb2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gZnJhbWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGZyYW1lTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gZnJhbWVOb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgZmluZFZhbGlkRnJhbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgdmFsaWRGcmFtZSA9IGZyYW1lOyAvLy9cblxuICAgIHJldHVybiB2YWxpZEZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkRnJhbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmcmFtZSA9IHZhbGlkRnJhbWU7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25zdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25zdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuXG4gICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25zTGVuZ3RoID0gdGhpcy5hc3N1bXB0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy4uLmApO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucy5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCksXG4gICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKGZyYW1lTWV0YVR5cGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gaW5zdGFudGlhdGVGcmFtZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc3N1bXB0aW9uTm9kZXMgPSBmcmFtZU5vZGUuZ2V0QXNzdW1wdGlvbk5vZGVzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbk5vZGVzLm1hcCgoYXNzdW1wdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhc3N1bXB0aW9ucztcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImdldE5hbWUiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJmaW5kVmFsaWRGcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsInZhbGlkYXRlIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0TWV0YXZhcmlhYmxlIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsInZhbGlkYXRlQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwiYXNzdW1wdGlvbnN0cmluZyIsInB1c2giLCJhc3N1bXB0aW9uc0xlbmd0aCIsImxlbmd0aCIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJldmVyeSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZSIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEO3lCQUNLOzZCQUNLOytCQUNJO3lCQUNLO3dCQUNPO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZLENBQUU7UUFDNUQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO0lBQ3pCO0lBRUFHLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRyxlQUFlO1FBQ2IsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLFlBQVlQLE1BQU0sR0FBRztRQUUzQixPQUFPTztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNRCxZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QkksbUJBQW1CRixVQUFVQyxtQkFBbUI7UUFFdEQsT0FBT0M7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsSUFBSUMsbUJBQW1CO1FBRXZCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxVQUFVO1FBRWhDLElBQUlELFVBQVU7WUFDWkQsbUJBQW1CLElBQUksQ0FBQ1QsWUFBWSxDQUFDWSxPQUFPO1FBQzlDO1FBRUEsT0FBT0g7SUFDVDtJQUVBSSxVQUFVQyxLQUFLLEVBQUU7UUFDZixNQUFNVCxZQUFZUyxNQUFNVixPQUFPLElBQ3pCVyxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNYLFlBQ3ZDWSxVQUFVRixrQkFBbUIsR0FBRztRQUV0QyxPQUFPRTtJQUNUO0lBRUFOLGFBQWE7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