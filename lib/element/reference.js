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
    getName() {
        return this.metavariable.getName();
    }
    getMetavariableName() {
        const metavariableName = this.metavariable.getName();
        return metavariableName;
    }
    getMetavariableNode() {
        const metavariableNode = this.metavariable.getNode();
        return metavariableNode;
    }
    matchReferenceNode(referenceNode) {
        const node = referenceNode, nodeMatches = this.matchNode(node), referenceNodeMatches = nodeMatches; ///
        return referenceNodeMatches;
    }
    findValidRefernece(context) {
        const metavariableNode = this.getMetavariableNode(), reference = context.findReferenceByMetavariableNode(metavariableNode), validReference = reference; ///
        return validReference;
    }
    isEqualTo(reference) {
        const referenceNode = reference.getNode(), referenceNodeMatches = this.matchReferenceNode(referenceNode), equalTo = referenceNodeMatches; ///
        return equalTo;
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
    compareTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionCompares = false;
        const reference = this, referenceString = reference.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
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
    unifyLabel(label, context) {
        let labelUnifies = false;
        const labelString = label.getString(), referenceString = this.getString(); ///
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        const generalContext = context; ///
        context = label.getContext();
        const specificContext = context; ///
        context = generalContext; ///
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
        const context = generalContext, referenceString = this.getString(), metavariableString = metavariable.getString();
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
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Reference";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context);
            context = null;
            const reference = new Reference(context, string, node, metavariable);
            return reference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVybmVjZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHJlZmVyZW5jZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQikge1xuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4uY29tcGFyZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVybmVjZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJuZWNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVybmVjZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICBpZiAobWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGxhYmVsIGZvciB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKHJlZmVyZW5jZU1ldGFUeXBlKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgcmVlcmVuY2VNZXRhVHlwZVN0cmluZyA9IHJlZmVyZW5jZU1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUgc2hvdWxkIGJlIHRoZSAnJHtyZWVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLidgKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMubWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkUmVmZXJuZWNlIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkUmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsImxhYmVsIiwiZ2V0TGFiZWwiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwidmFsaWRhdGUiLCJ2YWxpZFJlZmVybmVjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWVyZW5jZU1ldGFUeXBlU3RyaW5nIiwiYWRkUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJnZW5lcmFsQ29udGV4dCIsImdldENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDs2QkFDYzt5QkFDRTsrQkFDRTt5QkFDSztNQUU5QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxDQUFFO1FBQy9DLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtJQUMxQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGdCQUFnQkwsTUFBTSxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNLLE9BQU87SUFBSTtJQUVoREMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJ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