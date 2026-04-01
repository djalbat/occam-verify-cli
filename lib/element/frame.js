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
        const frameString = this.getString(); ///
        context.trace(`Validating the '${frameString}' frame's assumption.`);
        assumption = assumption.validate(context); ///
        if (assumption !== null) {
            assumptions.push(assumption);
            assumptionValidates = true;
        }
        if (assumptionValidates) {
            context.debug(`...validated the '${frameString}' frame's assumption.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZEZyYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIHZhbGlkRnJhbWUgPSBmcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRGcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgbXVzdCBiZSBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBhc3N1bXB0aW9uLmApO1xuXG4gICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnNMZW5ndGggPSB0aGlzLmFzc3VtcHRpb25zLmxlbmd0aDtcblxuICAgIGlmIChhc3N1bXB0aW9uc0xlbmd0aCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIGFzc3VtcHRpb25zLi4uYCk7XG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zID0gW107XG5cbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBhc3N1bXB0aW9ucy5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0TWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhmcmFtZU1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gaW5zdGFudGlhdGVGcmFtZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhc3N1bXB0aW9uc0Zyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFzc3VtcHRpb25Ob2RlcyA9IGZyYW1lTm9kZS5nZXRBc3N1bXB0aW9uTm9kZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uTm9kZXMubWFwKChhc3N1bXB0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25zO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZ2V0TmFtZSIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImZpbmRWYWxpZEZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJ2YWxpZEZyYW1lIiwidmFsaWRhdGUiLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWQiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRNZXRhdmFyaWFibGUiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwidmFsaWRhdGVBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJwdXNoIiwiYXNzdW1wdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJldmVyeSIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvRnJhbWVNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZSIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLOzZCQUNLOytCQUNJO3lCQUNLO01BRTFDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVB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