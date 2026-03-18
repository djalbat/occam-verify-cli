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
const _unify = require("../process/unify");
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
    matchMetavariableNode(metavariableNode) {
        return this.metavariable.matchMetavariableNode(metavariableNode);
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
        let labelUnifies;
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const reference = this, labelString = label.getString(), referenceString = reference.getString();
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        const labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
        labelUnifies = metavariableUnifiesIntrinsically; ///
        if (labelUnifies) {
            context.debug(`...unified the '${labelString}' label with the '${referenceString}' reference.`);
        }
        return labelUnifies;
    }
    unifyMetavariable(metavariable, context) {
        let metavariableUnifies = false;
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const referenceString = this.getString(), metavariableString = metavariable.getString();
        context.trace(`Unifying the '${metavariableString}' metavariable with the '${referenceString}' reference...`);
        const generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
        if (metavariableUnifiesIntrinsically) {
            metavariableUnifies = true;
        }
        if (metavariableUnifies) {
            context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
        }
        return metavariableUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJuZWNlID0gdGhpcy5maW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcm5lY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJuZWNlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUocmVmZXJlbmNlTWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gbGFiZWwgZm9yIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8ocmVmZXJlbmNlTWV0YVR5cGUpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICByZWVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIGNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4uY29tcGFyZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkUmVmZXJuZWNlIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkUmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZGF0ZSIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRSZWZlcm5lY2UiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVlcmVuY2VNZXRhVHlwZVN0cmluZyIsImFkZFJlZmVyZW5jZSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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