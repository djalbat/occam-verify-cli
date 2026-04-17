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
const _instantiate = require("../process/instantiate");
const _metaTypeNames = require("../metaTypeNames");
const _context = require("../utilities/context");
const _element = require("../utilities/element");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, metavariable, topLevelMetaAssertion){
        super(context, string, node, lineIndex);
        this.metavariable = metavariable;
        this.topLevelMetaAssertion = topLevelMetaAssertion;
    }
    getMetavariable() {
        return this.metavariable;
    }
    getTopLevelMetaAssertion() {
        return this.topLevelMetaAssertion;
    }
    getReferenceNode() {
        const node = this.getNode(), referenceNode = node; ///
        return referenceNode;
    }
    getMetavariableNode() {
        const metavariableNode = this.metavariable.getNode();
        return metavariableNode;
    }
    isEqualTo(reference) {
        const referenceNode = reference.getNode(), referenceNodeMatches = this.matchReferenceNode(referenceNode), equalTo = referenceNodeMatches; ///
        return equalTo;
    }
    matchReferenceNode(referenceNode) {
        const node = referenceNode, nodeMatches = this.matchNode(node), referenceNodeMatches = nodeMatches; ///
        return referenceNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        return this.metavariable.matchMetavariableNode(metavariableNode);
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
    compareTopLevelMetaAssertion(topLevelMetaAssertion) {
        let topLevelMetaAssertionCompares = false;
        const context = this.getContext(), referenceString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Comparing the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference...`);
        const label = topLevelMetaAssertion.getLabel(), labelUnifies = this.unifyLabel(label, context);
        if (labelUnifies) {
            topLevelMetaAssertionCompares = true;
        }
        if (topLevelMetaAssertionCompares) {
            context.trace(`...compared the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionCompares;
    }
    findValidReference(context) {
        const referenceNode = this.getReferenceNode(), reference = context.findReferenceByReferenceNode(referenceNode), validReference = reference; ///
        return validReference;
    }
    validate(context) {
        let reference = null;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference...`);
        let validates = false;
        const validReference = this.findValidReference(context);
        if (validReference) {
            reference = validReference; ///
            context.debug(`...the '${referenceString}' reference is already valid.`);
        } else {
            const specificContext = context; ///
            context = this.getContext();
            (0, _context.attempt)((context)=>{
                const metavariableValidates = this.validateMetavariable(context);
                if (metavariableValidates) {
                    const referenceMetaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = context.findMetaTypeByMetaTypeName(referenceMetaTypeName), metaType = this.metavariable.getMetaType();
                    if (metaType === null) {
                        const reference = this, labelPresent = context.isLabelPresentByReference(reference, context);
                        if (labelPresent) {
                            validates = true;
                        } else {
                            context.debug(`There is no label for the '${referenceString}' reference.`);
                        }
                    } else {
                        const metavariableMetaTypeEqualToReferenceMetaType = this.metavariable.isMetaTypeEqualTo(referenceMetaType);
                        if (metavariableMetaTypeEqualToReferenceMetaType) {
                            validates = true;
                        } else {
                            const metaTypeString = metaType.getString(), metavariableString = this.metavariable.getString(), referenceMetaTypeString = referenceMetaType.getString();
                            context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${referenceMetaTypeString}' meta-type.`);
                        }
                    }
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
            context = specificContext; ///
            if (validates) {
                reference = this; ///
                context.addReference(reference);
            }
        }
        if (validates) {
            context.debug(`...validated the '${referenceString}' reference.`);
        }
        return reference;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference's metavariable...'`);
        const metavariable = this.metavariable.validate(context);
        if (metavariable !== null) {
            this.metavariable = metavariable;
            metavariableValidates = true;
        }
        if (metavariableValidates) {
            context.debug(`...validated the '${referenceString}' reference's metavariable.'`);
        }
        return metavariableValidates;
    }
    unifyLabel(label, context) {
        let labelUnifies = false;
        const labelString = label.getString(), referenceString = this.getString(); ///
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        const generalContext = context; ///
        context = label.getContext();
        const specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, generalContext, specificContext);
            if (metavariableUnifies) {
                labelUnifies = true;
            }
        }, specificContext);
        if (labelUnifies) {
            context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
        }
        return labelUnifies;
    }
    unifyMetavariable(metavariable, generalContext, specificContext) {
        let metavariableUnifies = false;
        const context = specificContext, referenceString = this.getString(), metavariableString = metavariable.getString();
        context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);
        const metavariableUnifiesIntrinsically = this.metavariable.unifyMetavariableIntrinsically(metavariable, generalContext, specificContext);
        if (metavariableUnifiesIntrinsically) {
            metavariableUnifies = true;
        }
        if (metavariableUnifies) {
            context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
        }
        return metavariableUnifies;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUUnifies = false;
        const label = topLevelMetaAssertion.getLabel(), labelContext = label.getContext(), referenceString = this.getString(), referenceContext = this.getContext(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const generalContext = referenceContext, specificContext = labelContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, generalContext, specificContext);
                if (metavariableUnifies) {
                    this.topLevelMetaAssertion = topLevelMetaAssertion;
                    specificContext.commit(context);
                    topLevelMetaAssertionUUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (topLevelMetaAssertionUUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionUUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Reference";
    static fromJSON(json, context) {
        let reference;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context);
                reference = new Reference(context, string, node, lineIndex, metavariable, topLevelMetaAssertion);
            }, context);
        }, json, context);
        return reference;
    }
    static fromReferenceString(referenceString, context) {
        let reference;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context);
                reference = (0, _element.referenceFromReferenceNode)(referenceNode, context);
            }, context);
        }, context);
        return reference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHJlY29uY2lsZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSwgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG1ldGF2YXJpYWJsZSwgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4uY29tcGFyZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJlbmNlID0gdGhpcy5maW5kVmFsaWRSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcmVuY2UpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJlbmNlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShyZWZlcmVuY2VNZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIG1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gbGFiZWwgZm9yIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8ocmVmZXJlbmNlTWV0YVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZVN0cmluZyA9IHJlZmVyZW5jZU1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZmVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIGxhYmVsVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMubWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSByZWZlcmVuY2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBsYWJlbENvbnRleHQ7IC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRCcmVha1BvaW50KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VTdHJpbmcocmVmZXJlbmNlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJtZXRhdmFyaWFibGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZSIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMiLCJnZXRDb250ZXh0IiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsYWJlbCIsImdldExhYmVsIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImZpbmRWYWxpZFJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJ2YWxpZFJlZmVyZW5jZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiZGVidWciLCJzcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2VNZXRhVHlwZVN0cmluZyIsImNvbW1pdCIsImFkZFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMiLCJsYWJlbENvbnRleHQiLCJyZWZlcmVuY2VDb250ZXh0Iiwiam9pbiIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZSIsImZyb21SZWZlcmVuY2VTdHJpbmciLCJhYmxhdGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEOzZCQUNjOytCQUNJO3lCQUM2Qzt5QkFDNEI7TUFFbEgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFB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