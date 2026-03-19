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
const _context = require("../utilities/context");
const _metaTypeNames = require("../metaTypeNames");
const _element = require("../utilities/element");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, metavariable){
        super(context, string, node);
        this.metavariable = metavariable;
    }
    getMetavariable() {
        return this.metavariable;
    }
    getReferenceNode() {
        const node = this.getNode(), referenceNode = node; ///
        return referenceNode;
    }
    getMetavariableName() {
        const metavariableName = this.metavariable.getName();
        return metavariableName;
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
        const parameterName = parameter.getName();
        if (parameterName !== null) {
            const metavariableName = this.getMetavariableName();
            if (parameterName === metavariableName) {
                comparesToParamter = true;
            }
        }
        return comparesToParamter;
    }
    compareMetavariable(metavariable) {
        let comparesToMetavariable = false;
        let metavariableName;
        metavariableName = this.metavariable.getName();
        const metavariableNameA = metavariableName ///
        ;
        metavariableName = metavariable.getName();
        const metavariableNameB = metavariableName; ///
        if (metavariableNameA === metavariableNameB) {
            comparesToMetavariable = true;
        }
        return comparesToMetavariable;
    }
    compareMetavariableName(metavariableName) {
        return this.metavariable.compareMetavariableName(metavariableName);
    }
    compareTopLevelMetaAssertion(topLevelMetaAssertion) {
        let topLevelMetaAssertionCompares = false;
        const context = this.getContext(), referenceString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Comparing the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference...`);
        const label = topLevelMetaAssertion.getLabel(), labelUnifies = this.unifyLabel(label);
        if (labelUnifies) {
            topLevelMetaAssertionCompares = true;
        }
        if (topLevelMetaAssertionCompares) {
            context.trace(`...compared the '${topLevelMetaAssertionString}' top level meta-assertion to the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionCompares;
    }
    findValidRefernece(context) {
        const metavariableNode = this.getMetavariableNode(), reference = context.findReferenceByMetavariableNode(metavariableNode), validReference = reference; ///
        return validReference;
    }
    validate(context) {
        let reference = null;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference...`);
        const validRefernece = this.findValidRefernece(context);
        if (validRefernece !== null) {
            reference = validRefernece; ///
            context.debug(`...the '${referenceString}' reference is already valid.`);
        } else {
            let validates = false;
            const metavariableValidates = this.validateMetavariable(context);
            if (metavariableValidates) {
                const referenceMetaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = context.findMetaTypeByMetaTypeName(referenceMetaTypeName), metaType = this.metavariable.getMetaType();
                if (metaType === null) {
                    const reference = this, labelPresent = context.isLabelPresentByReference(reference);
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
                        const metaTypeString = metaType.getString(), metavariableString = this.metavariable.getString(), reerenceMetaTypeString = referenceMetaType.getString();
                        context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${reerenceMetaTypeString}' meta-type.`);
                    }
                }
            }
            if (validates) {
                reference = this; ///
                context.addReference(reference);
                context.debug(`...validated the '${referenceString}' reference.`);
            }
        }
        return reference;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const referenceString = this.getString(), metavariableString = this.metavariable.getString();
        context = this.getContext();
        context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable...'`);
        const metavariable = this.metavariable.validate(context);
        if (metavariable !== null) {
            this.metavariable = metavariable;
            metavariableValidates = true;
        }
        if (metavariableValidates) {
            context.debug(`...validated the '${referenceString}' reference's '${metavariableString}' metavariable.'`);
        }
        return metavariableValidates;
    }
    unifyLabel(label) {
        let labelUnifies = false;
        const context = label.getContext(), labelString = label.getString(), referenceString = this.getString(); ///
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        (0, _context.reconcile)((context)=>{
            const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, context);
            if (metavariableUnifies) {
                labelUnifies = true;
            }
        }, context);
        if (labelUnifies) {
            context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
        }
        return labelUnifies;
    }
    unifyMetavariable(metavariable, context) {
        let metavariableUnifies = false;
        const referenceString = this.getString(), metavariableString = metavariable.getString();
        context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const metavariableUnifiesIntrinsically = this.metavariable.unifyMetavariableIntrinsically(metavariable, generalContext, specificContext);
        if (metavariableUnifiesIntrinsically) {
            metavariableUnifies = true;
        }
        if (metavariableUnifies) {
            context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
        }
        return metavariableUnifies;
    }
    toJSON() {
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Reference";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), reference = new Reference(context, string, node, metavariable);
            return reference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiwgZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQikge1xuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4uY29tcGFyZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVybmVjZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJuZWNlID0gdGhpcy5maW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcm5lY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJuZWNlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUocmVmZXJlbmNlTWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gbGFiZWwgZm9yIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8ocmVmZXJlbmNlTWV0YVR5cGUpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICByZWVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICBsYWJlbFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy5tZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJmaW5kVmFsaWRSZWZlcm5lY2UiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsInZhbGlkUmVmZXJuZWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGFUeXBlTmFtZSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsInJlZmVyZW5jZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJtZXRhVHlwZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZXJlbmNlTWV0YVR5cGVTdHJpbmciLCJhZGRSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsInJlY29uY2lsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ0b0pTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZl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