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
            const context = this.getContext();
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
        }
        if (validates) {
            reference = this; ///
            context.addReference(reference);
            context.debug(`...validated the '${referenceString}' reference.`);
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
    unifyLabel(label) {
        let labelUnifies = false;
        let context;
        const labelString = label.getString(), labelContext = label.getContext(), referenceString = this.getString(); ///
        context = labelContext; ///
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        const specificContext = labelContext; ///
        context = this.getContext();
        const generalContext = context; ///
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
        const label = topLevelMetaAssertion.getLabel(), labelContext = label.getContext(), referenceString = this.getString(), temporaryContext = context, topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const specificContext = labelContext; ///
        context = this.getContext();
        const generalContext = context; ///
        context = temporaryContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, generalContext, specificContext);
            if (metavariableUnifies) {
                this.topLevelMetaAssertion = topLevelMetaAssertion;
                specificContext.commit(context);
                topLevelMetaAssertionUUnifies = true;
            }
        }, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGF0dGVtcHQsIHNlcmlhbGlzZSwgcmVjb25jaWxlLCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSByZWZlcmVuY2VOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi5jb21wYXJlZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gdGhpcy5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRSZWZlcmVuY2UgPSB0aGlzLmZpbmRWYWxpZFJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFJlZmVyZW5jZSkge1xuICAgICAgcmVmZXJlbmNlID0gdmFsaWRSZWZlcmVuY2U7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShyZWZlcmVuY2VNZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICAgIG1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlcmUgaXMgbm8gbGFiZWwgZm9yIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8ocmVmZXJlbmNlTWV0YVR5cGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZVN0cmluZyA9IHJlZmVyZW5jZU1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUncyAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZSBzaG91bGQgYmUgdGhlICcke3JlZmVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgcmVmZXJlbmNlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFiZWxDb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dCA9IGxhYmVsQ29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGxhYmVsQ29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIGxhYmVsVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMubWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdGVtcG9yYXJ5Q29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBsYWJlbENvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuXG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VTdHJpbmcocmVmZXJlbmNlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJmaW5kVmFsaWRSZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImRlYnVnIiwiYXR0ZW1wdCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlTWV0YVR5cGVTdHJpbmciLCJjb21taXQiLCJhZGRSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVjb25jaWxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsInRvSlNPTiIsInNlcmlhbGlzZSIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7NkJBQ2M7K0JBQ0k7eUJBQ0U7eUJBQzZCO01BR3hFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLHFCQUFxQixDQUFFO1FBQ3RFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MscUJBQXFCLEdBQUdBO0lBQy9CO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRywyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUNGLHFCQUFxQjtJQUNuQztJQUVBRyxtQkFBbUI7UUFDakIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNSLFlBQVksQ0FBQ1MsT0FBTztRQUVsRCxPQUFPRDtJQUNUO0lBRUFFLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDWCxZQUFZLENBQUNLLE9BQU87UUFFbEQsT0FBT007SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTVAsZ0JBQWdCTyxVQUFVUixPQUFPLElBQ2pDUyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1QsZ0JBQy9DVSxVQUFVRixzQkFBdUIsR0FBRztRQUUxQyxPQUFPRTtJQUNUO0lBRUFELG1CQUFtQlQsYUFBYSxFQUFFO1FBQ2hDLE1BQU1QLE9BQU9PLGVBQ1BXLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNuQixPQUM3QmUsdUJBQXVCRyxhQUFhLEdBQUc7UUFFN0MsT0FBT0g7SUFDVDtJQUVBSyxzQkFBc0JSLGdCQUFnQixFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNYLFlBQVksQ0FBQ21CLHFCQUFxQixDQUFDUjtJQUFtQjtJQUU1R1MsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsSUFBSUMscUJBQXFCO1FBRXpCLE1BQU1DLGdCQUFnQkYsVUFBVVosT0FBTztRQUV2QyxJQUFJYyxrQkFBa0IsTUFBTTtZQUMxQixNQUFNZixtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUI7WUFFakQsSUFBSWdCLGtCQUFrQmYsa0JBQWtCO2dCQUN0Q2MscUJBQXFCO1lBQ3ZCO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFFLG9CQUFvQnhCLFlBQVksRUFBRTtRQUNoQyxJQUFJeUIseUJBQXlCO1FBRTdCLElBQUlqQjtRQUVKQSxtQkFBbUIsSUFBSSxDQUFDUixZQUFZLENBQUNTLE9BQU87UUFFNUMsTUFBTWlCLG9CQUFvQmxCLGlCQUFpQixHQUFHOztRQUU5Q0EsbUJBQW1CUixhQUFhUyxPQUFPO1FBRXZDLE1BQU1rQixvQkFBb0JuQixrQkFBa0IsR0FBRztRQUUvQyxJQUFJa0Isc0JBQXNCQyxtQkFBbUI7WUFDM0NGLHlCQUF5QjtRQUMzQjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUcsd0JBQXdCcEIsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsWUFBWSxDQUFDNEIsdUJBQXVCLENBQUNwQjtJQUFtQjtJQUVoSHFCLDZCQUE2QjVCLHFCQUFxQixFQUFFO1FBQ2xELElBQUk2QixnQ0FBZ0M7UUFFcEMsTUFBTWpDLFVBQVUsSUFBSSxDQUFDa0MsVUFBVSxJQUN6QkMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUNoQ0MsOEJBQThCakMsc0JBQXNCZ0MsU0FBUztRQUVuRXBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVELDRCQUE0QixtQ0FBbUMsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoSSxNQUFNSSxRQUFRbkMsc0JBQXNCb0MsUUFBUSxJQUN0Q0MsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0g7UUFFckMsSUFBSUUsY0FBYztZQUNoQlIsZ0NBQWdDO1FBQ2xDO1FBRUEsSUFBSUEsK0JBQStCO1lBQ2pDakMsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRCw0QkFBNEIsbUNBQW1DLEVBQUVGLGdCQUFnQixZQUFZLENBQUM7UUFDbEk7UUFFQSxPQUFPRjtJQUNUO0lBRUFVLG1CQUFtQjNDLE9BQU8sRUFBRTtRQUMxQixNQUFNUyxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNTLFlBQVloQixRQUFRNEMsNEJBQTRCLENBQUNuQyxnQkFDakRvQyxpQkFBaUI3QixXQUFZLEdBQUc7UUFFdEMsT0FBTzZCO0lBQ1Q7SUFFQUMsU0FBUzlDLE9BQU8sRUFBRTtRQUNoQixJQUFJZ0IsWUFBWTtRQUVoQixNQUFNbUIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NwQyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILGdCQUFnQixjQUFjLENBQUM7UUFFaEUsSUFBSVksWUFBWTtRQUVoQixNQUFNRixpQkFBaUIsSUFBSSxDQUFDRixrQkFBa0IsQ0FBQzNDO1FBRS9DLElBQUk2QyxnQkFBZ0I7WUFDbEI3QixZQUFZNkIsZ0JBQWlCLEdBQUc7WUFFaEM3QyxRQUFRZ0QsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFYixnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLE1BQU1uQyxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7WUFFL0JlLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2pEO2dCQUNQLE1BQU1rRCx3QkFBd0IsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ25EO2dCQUV4RCxJQUFJa0QsdUJBQXVCO29CQUN6QixNQUFNRSx3QkFBd0JDLHVDQUF3QixFQUNoREMsb0JBQW9CdEQsUUFBUXVELDBCQUEwQixDQUFDSCx3QkFDdkRJLFdBQVcsSUFBSSxDQUFDckQsWUFBWSxDQUFDc0QsV0FBVztvQkFFOUMsSUFBSUQsYUFBYSxNQUFNO3dCQUNyQixNQUFNeEMsWUFBWSxJQUFJLEVBQ2hCMEMsZUFBZTFELFFBQVEyRCx5QkFBeUIsQ0FBQzNDO3dCQUV2RCxJQUFJMEMsY0FBYzs0QkFDaEJYLFlBQVk7d0JBQ2QsT0FBTzs0QkFDTC9DLFFBQVFnRCxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRWIsZ0JBQWdCLFlBQVksQ0FBQzt3QkFDM0U7b0JBQ0YsT0FBTzt3QkFDTCxNQUFNeUIsK0NBQStDLElBQUksQ0FBQ3pELFlBQVksQ0FBQzBELGlCQUFpQixDQUFDUDt3QkFFekYsSUFBSU0sOENBQThDOzRCQUNoRGIsWUFBWTt3QkFDZCxPQUFPOzRCQUNMLE1BQU1lLGlCQUFpQk4sU0FBU3BCLFNBQVMsSUFDbkMyQixxQkFBcUIsSUFBSSxDQUFDNUQsWUFBWSxDQUFDaUMsU0FBUyxJQUNoRDRCLDBCQUEwQlYsa0JBQWtCbEIsU0FBUzs0QkFFM0RwQyxRQUFRZ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFYixnQkFBZ0IsZUFBZSxFQUFFNEIsbUJBQW1CLGtCQUFrQixFQUFFRCxlQUFlLDJCQUEyQixFQUFFRSx3QkFBd0IsWUFBWSxDQUFDO3dCQUNqTDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJakIsV0FBVztvQkFDYi9DLFFBQVFpRSxNQUFNLENBQUMsSUFBSTtnQkFDckI7WUFDRixHQUFHakU7UUFDTDtRQUVBLElBQUkrQyxXQUFXO1lBQ2IvQixZQUFZLElBQUksRUFBRyxHQUFHO1lBRXRCaEIsUUFBUWtFLFlBQVksQ0FBQ2xEO1lBRXJCaEIsUUFBUWdELEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFYixnQkFBZ0IsWUFBWSxDQUFDO1FBQ2xFO1FBRUEsT0FBT25CO0lBQ1Q7SUFFQW1DLHFCQUFxQm5ELE9BQU8sRUFBRTtRQUM1QixJQUFJa0Qsd0JBQXdCO1FBRTVCLE1BQU1mLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaEMyQixxQkFBcUIsSUFBSSxDQUFDNUQsWUFBWSxDQUFDaUMsU0FBUztRQUV0RHBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUgsZ0JBQWdCLGVBQWUsRUFBRTRCLG1CQUFtQixrQkFBa0IsQ0FBQztRQUV4RyxNQUFNNUQsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQzJDLFFBQVEsQ0FBQzlDO1FBRWhELElBQUlHLGlCQUFpQixNQUFNO1lBQ3pCLElBQUksQ0FBQ0EsWUFBWSxHQUFHQTtZQUVwQitDLHdCQUF3QjtRQUMxQjtRQUVBLElBQUlBLHVCQUF1QjtZQUN6QmxELFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWIsZ0JBQWdCLGVBQWUsRUFBRTRCLG1CQUFtQixnQkFBZ0IsQ0FBQztRQUMxRztRQUVBLE9BQU9iO0lBQ1Q7SUFFQVIsV0FBV0gsS0FBSyxFQUFFO1FBQ2hCLElBQUlFLGVBQWU7UUFFbkIsSUFBSXpDO1FBRUosTUFBTW1FLGNBQWM1QixNQUFNSCxTQUFTLElBQzdCZ0MsZUFBZTdCLE1BQU1MLFVBQVUsSUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDcEMsVUFBVW9FLGNBQWMsR0FBRztRQUUzQnBFLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2QixZQUFZLGtCQUFrQixFQUFFaEMsZ0JBQWdCLGNBQWMsQ0FBQztRQUU5RixNQUFNa0Msa0JBQWtCRCxjQUFlLEdBQUc7UUFFMUNwRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFekIsTUFBTW9DLGlCQUFpQnRFLFNBQVMsR0FBRztRQUVuQ3VFLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ0Y7WUFDVCxNQUFNbEUsZUFBZW9DLE1BQU1sQyxlQUFlLElBQ3BDbUUsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUN0RSxjQUFjbUUsZ0JBQWdCRDtZQUVqRixJQUFJRyxxQkFBcUI7Z0JBQ3ZCL0IsZUFBZTtZQUNqQjtRQUNGLEdBQUc0QjtRQUVILElBQUk1QixjQUFjO1lBQ2hCekMsUUFBUWdELEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFbUIsWUFBWSxrQkFBa0IsRUFBRWhDLGdCQUFnQixZQUFZLENBQUM7UUFDaEc7UUFFQSxPQUFPTTtJQUNUO0lBRUFnQyxrQkFBa0J0RSxZQUFZLEVBQUVtRSxjQUFjLEVBQUVELGVBQWUsRUFBRTtRQUMvRCxJQUFJRyxzQkFBc0I7UUFFMUIsTUFBTXhFLFVBQVVxRSxpQkFDVmxDLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaEMyQixxQkFBcUI1RCxhQUFhaUMsU0FBUztRQUVqRHBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUV5QixtQkFBbUIseUJBQXlCLEVBQUU1QixnQkFBZ0IsY0FBYyxDQUFDO1FBRTVHLE1BQU11QyxtQ0FBbUMsSUFBSSxDQUFDdkUsWUFBWSxDQUFDd0UsOEJBQThCLENBQUN4RSxjQUFjbUUsZ0JBQWdCRDtRQUV4SCxJQUFJSyxrQ0FBa0M7WUFDcENGLHNCQUFzQjtRQUN4QjtRQUVBLElBQUlBLHFCQUFxQjtZQUN2QnhFLFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWUsbUJBQW1CLHlCQUF5QixFQUFFNUIsZ0JBQWdCLFlBQVksQ0FBQztRQUM5RztRQUVBLE9BQU9xQztJQUNUO0lBRUFJLDJCQUEyQnhFLHFCQUFxQixFQUFFSixPQUFPLEVBQUU7UUFDekQsSUFBSTZFLGdDQUFnQztRQUVwQyxNQUFNdEMsUUFBUW5DLHNCQUFzQm9DLFFBQVEsSUFDdEM0QixlQUFlN0IsTUFBTUwsVUFBVSxJQUMvQkMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUNoQzBDLG1CQUFtQjlFLFNBQ25CcUMsOEJBQThCakMsc0JBQXNCZ0MsU0FBUztRQUVuRXBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVELDRCQUE0QixxQ0FBcUMsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVqSSxNQUFNa0Msa0JBQWtCRCxjQUFjLEdBQUc7UUFFekNwRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFekIsTUFBTW9DLGlCQUFpQnRFLFNBQVMsR0FBRztRQUVuQ0EsVUFBVThFLGtCQUFrQixHQUFHO1FBRS9CUCxJQUFBQSxrQkFBUyxFQUFDLENBQUNGO1lBQ1QsTUFBTWxFLGVBQWVvQyxNQUFNbEMsZUFBZSxJQUNwQ21FLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDdEUsY0FBY21FLGdCQUFnQkQ7WUFFakYsSUFBSUcscUJBQXFCO2dCQUN2QixJQUFJLENBQUNwRSxxQkFBcUIsR0FBR0E7Z0JBRTdCaUUsZ0JBQWdCSixNQUFNLENBQUNqRTtnQkFFdkI2RSxnQ0FBZ0M7WUFDbEM7UUFDRixHQUFHUjtRQUVILElBQUlRLCtCQUErQjtZQUNqQzdFLFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRVgsNEJBQTRCLHFDQUFxQyxFQUFFRixnQkFBZ0IsWUFBWSxDQUFDO1FBQ25JO1FBRUEsT0FBTzBDO0lBQ1Q7SUFFQUUsU0FBUztRQUNQLE1BQU0vRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFL0IsT0FBTzhDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2hGO1lBQ2hCLE1BQU1DLFNBQVMsSUFBSSxDQUFDbUMsU0FBUyxJQUN2QjZDLE9BQU87Z0JBQ0xqRjtnQkFDQUM7WUFDRjtZQUVOLE9BQU9nRjtRQUNULEdBQUdqRjtJQUNMO0lBRUEsT0FBT2tGLE9BQU8sWUFBWTtJQUUxQixPQUFPQyxTQUFTRixJQUFJLEVBQUVqRixPQUFPLEVBQUU7UUFDN0IsSUFBSWdCO1FBRUpvRSxJQUFBQSxvQkFBVyxFQUFDLENBQUNILE1BQU1qRjtZQUNqQnFGLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3JGO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdnRixNQUNieEUsZ0JBQWdCNkUsSUFBQUEsaUNBQW9CLEVBQUNyRixRQUFRRCxVQUM3Q0UsT0FBT08sZUFDUE4sZUFBZW9GLElBQUFBLHNDQUE2QixFQUFDOUUsZUFBZVQsVUFDNURJLHdCQUF3Qm9GLElBQUFBLCtDQUFzQyxFQUFDL0UsZUFBZVQ7Z0JBRXBGZ0IsWUFBWSxJQUFJbEIsVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsY0FBY0M7WUFDakUsR0FBR0o7UUFDTCxHQUFHaUYsTUFBTWpGO1FBRVQsT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPeUUsb0JBQW9CdEQsZUFBZSxFQUFFbkMsT0FBTyxFQUFFO1FBQ25ELElBQUlnQjtRQUVKcUUsSUFBQUEsb0JBQVcsRUFBQyxDQUFDckY7WUFDWCxNQUFNQyxTQUFTa0MsaUJBQ1QxQixnQkFBZ0I2RSxJQUFBQSxpQ0FBb0IsRUFBQ3JGLFFBQVFEO1lBRW5EZ0IsWUFBWTBFLElBQUFBLG1DQUEwQixFQUFDakYsZUFBZVQ7UUFDeEQsR0FBR0E7UUFFSCxPQUFPZ0I7SUFDVDtBQUNGIn0=