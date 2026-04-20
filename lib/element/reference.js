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
const _breakPoint = require("../utilities/breakPoint");
const _context = require("../utilities/context");
const _element = require("../utilities/element");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, metavariable, topLevelMetaAssertion){
        super(context, string, node, breakPoint);
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
    getMetaType() {
        return this.metavariable.getMetaType();
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
            validates = true;
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
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static name = "Reference";
    static fromJSON(json, context) {
        let reference;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context);
                reference = new Reference(context, string, node, breakPoint, metavariable, topLevelMetaAssertion);
            }, context);
        }, json, context);
        return reference;
    }
    static fromReferenceString(referenceString, context) {
        let reference;
        (0, _context.posit)((context)=>{
            (0, _context.ablate)((context)=>{
                (0, _context.instantiate)((context)=>{
                    const string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context);
                    reference = (0, _element.referenceFromReferenceNode)(referenceNode, context);
                }, context);
            }, context);
        }, context);
        return reference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgam9pbiwgcG9zaXQsIGFibGF0ZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCByZWNvbmNpbGUsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUsIG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4uY29tcGFyZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHRoaXMuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJlbmNlID0gdGhpcy5maW5kVmFsaWRSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcmVuY2UpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJlbmNlOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShyZWZlcmVuY2VNZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIG1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gbGFiZWwgZm9yIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8ocmVmZXJlbmNlTWV0YVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZVN0cmluZyA9IHJlZmVyZW5jZU1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZmVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIGxhYmVsVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMubWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSByZWZlcmVuY2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBsYWJlbENvbnRleHQ7IC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgICAgY29uc3QganNvbiA9IHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBicmVha1BvaW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2U7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG1ldGF2YXJpYWJsZSwgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlU3RyaW5nKHJlZmVyZW5jZVN0cmluZywgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2U7XG5cbiAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJtZXRhdmFyaWFibGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGFUeXBlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyIsImdldENvbnRleHQiLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsImxhYmVsIiwiZ2V0TGFiZWwiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwiZmluZFZhbGlkUmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInZhbGlkUmVmZXJlbmNlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInNwZWNpZmljQ29udGV4dCIsImF0dGVtcHQiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGFUeXBlTmFtZSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsInJlZmVyZW5jZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2VNZXRhVHlwZVN0cmluZyIsImNvbW1pdCIsImFkZFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMiLCJsYWJlbENvbnRleHQiLCJyZWZlcmVuY2VDb250ZXh0Iiwiam9pbiIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uRnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tUmVmZXJlbmNlU3RyaW5nIiwicG9zaXQiLCJhYmxhdGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNjOytCQUNJOzRCQUNzQjt5QkFDOEI7eUJBQ3FCO01BRWxILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMscUJBQXFCLENBQUU7UUFDbEYsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0E7SUFDL0I7SUFFQUMsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO0lBQzFCO0lBRUFHLDJCQUEyQjtRQUN6QixPQUFPLElBQUksQ0FBQ0YscUJBQXFCO0lBQ25DO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxzQkFBc0I7UUFDcEIsTUFBTUMs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