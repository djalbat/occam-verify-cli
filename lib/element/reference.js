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
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, metavariable, topLevelMetaAssertion){
        super(context, string, node);
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
    validate() {
        let referennce = null;
        const context = this.getContext(), referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference...`);
        let validates;
        (0, _context.attempt)((context)=>{
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
                        const metaTypeString = metaType.getString(), metavariableString = this.metavariable.getString(), referenceMetaTypeString = referenceMetaType.getString();
                        context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${referenceMetaTypeString}' meta-type.`);
                    }
                }
            }
            if (validates) {
                context.commit(this);
            }
        }, context);
        if (validates) {
            referennce = this; ///
            context.debug(`...validated the '${referenceString}' reference.`);
        }
        return referennce;
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
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUUnifies = false;
        const label = topLevelMetaAssertion.getLabel(), referenceString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const specificContext = context; ///
        context = label.getContext();
        (0, _context.reconcile)((context)=>{
            const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, context);
            if (metavariableUnifies) {
                this.topLevelMetaAssertion = topLevelMetaAssertion;
                context.commit(specificContext);
                topLevelMetaAssertionUUnifies = true;
            }
        }, context);
        context = specificContext; ///
        if (topLevelMetaAssertionUUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionUUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), json = {
                context,
                string
            };
            return json;
        }, context);
    }
    static name = "Reference";
    static fromJSON(json, context) {
        let reference;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context);
                reference = new Reference(context, string, node, metavariable, topLevelMetaAssertion);
            }, context);
        }, json, context);
        return reference;
    }
    static fromReferenceString(referenceString, context) {
        let reference;
        (0, _context.instantiate)((context)=>{
            const string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context);
            reference = (0, _element.referenceFromReferenceNode)(referenceNode, context);
        }, context);
        return reference;
    }
});
let counter = 0;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGF0dGVtcHQsIHNlcmlhbGlzZSwgcmVjb25jaWxlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSByZWZlcmVuY2VOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi5jb21wYXJlZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgbGV0IHJlZmVyZW5uY2UgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShyZWZlcmVuY2VNZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBsYWJlbCBmb3IgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhyZWZlcmVuY2VNZXRhVHlwZSk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZmVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgcmVmZXJlbm5jZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5uY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIGxhYmVsVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0aGlzLm1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG5cbiAgICAgICAgY29udGV4dC5jb21taXQoc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VTdHJpbmcocmVmZXJlbmNlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5sZXQgY291bnRlciA9IDA7Il0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJ2YWxpZGF0ZSIsInJlZmVyZW5uY2UiLCJ2YWxpZGF0ZXMiLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJtZXRhVHlwZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nIiwiY29tbWl0IiwibGFiZWxTdHJpbmciLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyIsInRvSlNPTiIsInNlcmlhbGlzZSIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwiY291bnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNjOytCQUNJO3lCQUNFO3lCQUM2QjtNQUd4RSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsQ0FBRTtRQUN0RSxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtJQUMvQjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7SUFDMUI7SUFFQUcsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDRixxQkFBcUI7SUFDbkM7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixZQUFZ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