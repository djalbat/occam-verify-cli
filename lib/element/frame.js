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
    constructor(context, string, node, lineIndex, assumptions, metavariable){
        super(context, string, node, lineIndex);
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
        const assumptionsLength = this.assumptions.length;
        if (assumptionsLength) {
            const frameString = this.getString(); ///
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
        } else {
            assumptionsValidate = true;
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
                metavariableValidates = true;
            }
            if (metavariableValidates) {
                context.debug(`...validated the '${frameString}' frame's metavariable.`);
            }
        }
        return metavariableValidates;
    }
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Frame";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, frameNode = (0, _instantiate.instantiateFrame)(string, context), node = frameNode, assumptions = assumptionsFromFrameNode(frameNode, context), metavariable = (0, _element.metavariableFromFrameNode)(frameNode, context);
            context = null;
            const frame = new Frame(context, string, node, lineIndex, assumptions, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZEZyYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIHZhbGlkRnJhbWUgPSBmcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRGcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgbXVzdCBiZSBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcblxuICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uLnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoYXNzdW1wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uc0xlbmd0aCA9IHRoaXMuYXNzdW1wdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgYXNzdW1wdGlvbnMuLi5gKTtcblxuICAgICAgY29uc3QgYXNzdW1wdGlvbnMgPSBbXTtcblxuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9uKGFzc3VtcHRpb24sIGFzc3VtcHRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIGFzc3VtcHRpb25zLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlOyAvLy9cblxuICAgIGlmICh0aGlzLm1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCksXG4gICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKGZyYW1lTWV0YVR5cGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0Tm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZmluZFZhbGlkRnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJ2YWxpZGF0ZSIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZCIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdE1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb25zVmFsaWRhdGUiLCJ2YWxpZGF0ZUFzc3VtcHRpb25zIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsImFzc3VtcHRpb25TdHJpbmciLCJwdXNoIiwiYXNzdW1wdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJldmVyeSIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZSIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFB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