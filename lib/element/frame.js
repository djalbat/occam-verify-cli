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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUZyYW1lIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGZyYW1lTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGZpbmRWYWxpZEZyYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIHZhbGlkRnJhbWUgPSBmcmFtZTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRGcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBhc3N1bXB0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuXG4gICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChhc3N1bXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyBhc3N1bXB0aW9ucy4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSBbXTtcblxuICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgYXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvblZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIGFzc3VtcHRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdE1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMubWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8oZnJhbWVNZXRhVHlwZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9GcmFtZU1ldGFUeXBlKSB7XG4gICAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICBpZiAodGhpcy5tZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cyA9IGNvbnRleHQuZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50c0xlbmd0aCA9IGRlY2xhcmVkSnVkZ2VtZW50cy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWNsYXJlZEp1ZGdlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cy5mb3JFYWNoKChkZWNsYXJlZEp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBkZWNsYXJlZEp1ZGdlbWVudC5nZXRBc3N1bXB0aW9uKCk7XG5cbiAgICAgICAgICB0aGlzLmFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRvZXMgbm90IG1hdGNoIGFueSBkZWNsYXJlZCBqdWRnZW1lbnRzLi4uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBmcmFtZU5vZGUgPSBpbnN0YW50aWF0ZUZyYW1lKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNzdW1wdGlvbk5vZGVzID0gZnJhbWVOb2RlLmdldEFzc3VtcHRpb25Ob2RlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25Ob2Rlcy5tYXAoKGFzc3VtcHRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXNzdW1wdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0RnJhbWVOb2RlIiwiZ2V0Tm9kZSIsImZyYW1lTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJnZXROYW1lIiwiaXNFcXVhbFRvIiwiZnJhbWUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZmluZFZhbGlkRnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJ2YWxpZGF0ZSIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZCIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdE1ldGF2YXJpYWJsZSIsImFzc3VtcHRpb25zVmFsaWRhdGUiLCJ2YWxpZGF0ZUFzc3VtcHRpb25zIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkRnJhbWUiLCJ2YWxpZGF0ZUFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvblZhbGlkYXRlcyIsImFzc3VtcHRpb25TdHJpbmciLCJwdXNoIiwiZXZlcnkiLCJtZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb0ZyYW1lTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsImRlY2xhcmVkSnVkZ2VtZW50cyIsImZpbmREZWNsYXJlZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZWNsYXJlZEp1ZGdlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZGVjbGFyZWRKdWRnZW1lbnQiLCJnZXRBc3N1bXB0aW9uIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVGcmFtZSIsImFzc3VtcHRpb25zRnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZUZyb21GcmFtZU5vZGUiLCJhc3N1bXB0aW9uTm9kZXMiLCJnZXRBc3N1bXB0aW9uTm9kZXMiLCJtYXAiLCJhc3N1bXB0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLOzZCQUNLOytCQUNJO3lCQUNLO01BRTFDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87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