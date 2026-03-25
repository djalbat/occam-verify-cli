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
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const string = referenceString, referenceNode = (0, _instantiate.instantiateReference)(string, context);
                reference = (0, _element.referenceFromReferenceNode)(referenceNode, context);
            }, context);
        }, context);
        return reference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGFibGF0ZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCByZWNvbmNpbGUsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHJlZmVyZW5jZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsKTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLmNvbXBhcmVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXM7XG4gIH1cblxuICBmaW5kVmFsaWRSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgdmFsaWRSZWZlcmVuY2UgPSByZWZlcmVuY2U7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFJlZmVyZW5jZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVyZW5jZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJlbmNlKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVyZW5jZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBsYWJlbCBmb3IgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhyZWZlcmVuY2VNZXRhVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlIHNob3VsZCBiZSB0aGUgJyR7cmVmZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICByZWZlcmVuY2UgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYWJlbENvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gbGFiZWxDb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy5tZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGxhYmVsQ29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbik7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZVN0cmluZyhyZWZlcmVuY2VTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJmaW5kVmFsaWRSZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImRlYnVnIiwiYXR0ZW1wdCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlTWV0YVR5cGVTdHJpbmciLCJjb21taXQiLCJhZGRSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImxhYmVsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVjb25jaWxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzIiwidGVtcG9yYXJ5Q29udGV4dCIsInRvSlNPTiIsInNlcmlhbGlzZSIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZVN0cmluZyIsImFibGF0ZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7NkJBQ2M7K0JBQ0k7eUJBQ0U7eUJBQ3FDO01BR2hGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLHFCQUFxQixDQUFFO1FBQ3RFLEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MscUJBQXFCLEdBQUdBO0lBQy9CO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRywyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUNGLHFCQUFxQjtJQUNuQztJQUVBRyxtQkFBbUI7UUFDakIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNSLFlBQVksQ0FBQ1MsT0FBTztRQUVsRCxPQUFPRDtJQUNUO0lBRUFFLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDWCxZQUFZLENBQUNLLE9BQU87UUFFbEQsT0FBT007SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTVAsZ0JBQWdCTyxVQUFVUixPQUFPLElBQ2pDUyx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1QsZ0JBQy9DVSxVQUFVRixzQkFBdUIsR0FBRztRQUUxQyxPQUFPRTtJQUNUO0lBRUFELG1CQUFtQlQsYUFBYSxFQUFFO1FBQ2hDLE1BQU1QLE9BQU9PLGVBQ1BXLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNuQixPQUM3QmUsdUJBQXVCRyxhQUFhLEdBQUc7UUFFN0MsT0FBT0g7SUFDVDtJQUVBSyxzQkFBc0JSLGdCQUFnQixFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNYLFlBQVksQ0FBQ21CLHFCQUFxQixDQUFDUjtJQUFtQjtJQUU1R1MsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsSUFBSUMscUJBQXFCO1FBRXpCLE1BQU1DLGdCQUFnQkYsVUFBVVosT0FBTztRQUV2QyxJQUFJYyxrQkFBa0IsTUFBTTtZQUMxQixNQUFNZixtQkFBbUIsSUFBSSxDQUFDRCxtQkFBbUI7WUFFakQsSUFBSWdCLGtCQUFrQmYsa0JBQWtCO2dCQUN0Q2MscUJBQXFCO1lBQ3ZCO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFFLG9CQUFvQnhCLFlBQVksRUFBRTtRQUNoQyxJQUFJeUIseUJBQXlCO1FBRTdCLElBQUlqQjtRQUVKQSxtQkFBbUIsSUFBSSxDQUFDUixZQUFZLENBQUNTLE9BQU87UUFFNUMsTUFBTWlCLG9CQUFvQmxCLGlCQUFpQixHQUFHOztRQUU5Q0EsbUJBQW1CUixhQUFhUyxPQUFPO1FBRXZDLE1BQU1rQixvQkFBb0JuQixrQkFBa0IsR0FBRztRQUUvQyxJQUFJa0Isc0JBQXNCQyxtQkFBbUI7WUFDM0NGLHlCQUF5QjtRQUMzQjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUcsd0JBQXdCcEIsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsWUFBWSxDQUFDNEIsdUJBQXVCLENBQUNwQjtJQUFtQjtJQUVoSHFCLDZCQUE2QjVCLHFCQUFxQixFQUFFO1FBQ2xELElBQUk2QixnQ0FBZ0M7UUFFcEMsTUFBTWpDLFVBQVUsSUFBSSxDQUFDa0MsVUFBVSxJQUN6QkMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUNoQ0MsOEJBQThCakMsc0JBQXNCZ0MsU0FBUztRQUVuRXBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVELDRCQUE0QixtQ0FBbUMsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVoSSxNQUFNSSxRQUFRbkMsc0JBQXNCb0MsUUFBUSxJQUN0Q0MsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0g7UUFFckMsSUFBSUUsY0FBYztZQUNoQlIsZ0NBQWdDO1FBQ2xDO1FBRUEsSUFBSUEsK0JBQStCO1lBQ2pDakMsUUFBUXNDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRCw0QkFBNEIsbUNBQW1DLEVBQUVGLGdCQUFnQixZQUFZLENBQUM7UUFDbEk7UUFFQSxPQUFPRjtJQUNUO0lBRUFVLG1CQUFtQjNDLE9BQU8sRUFBRTtRQUMxQixNQUFNUyxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNTLFlBQVloQixRQUFRNEMsNEJBQTRCLENBQUNuQyxnQkFDakRvQyxpQkFBaUI3QixXQUFZLEdBQUc7UUFFdEMsT0FBTzZCO0lBQ1Q7SUFFQUMsU0FBUzlDLE9BQU8sRUFBRTtRQUNoQixJQUFJZ0IsWUFBWTtRQUVoQixNQUFNbUIsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFN0NwQyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILGdCQUFnQixjQUFjLENBQUM7UUFFaEUsSUFBSVksWUFBWTtRQUVoQixNQUFNRixpQkFBaUIsSUFBSSxDQUFDRixrQkFBa0IsQ0FBQzNDO1FBRS9DLElBQUk2QyxnQkFBZ0I7WUFDbEI3QixZQUFZNkIsZ0JBQWlCLEdBQUc7WUFFaEM3QyxRQUFRZ0QsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFYixnQkFBZ0IsNkJBQTZCLENBQUM7UUFDekUsT0FBTztZQUNMLE1BQU1uQyxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7WUFFL0JlLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2pEO2dCQUNQLE1BQU1rRCx3QkFBd0IsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ25EO2dCQUV4RCxJQUFJa0QsdUJBQXVCO29CQUN6QixNQUFNRSx3QkFBd0JDLHVDQUF3QixFQUNoREMsb0JBQW9CdEQsUUFBUXVELDBCQUEwQixDQUFDSCx3QkFDdkRJLFdBQVcsSUFBSSxDQUFDckQsWUFBWSxDQUFDc0QsV0FBVztvQkFFOUMsSUFBSUQsYUFBYSxNQUFNO3dCQUNyQixNQUFNeEMsWUFBWSxJQUFJLEVBQ2hCMEMsZUFBZTFELFFBQVEyRCx5QkFBeUIsQ0FBQzNDO3dCQUV2RCxJQUFJMEMsY0FBYzs0QkFDaEJYLFlBQVk7d0JBQ2QsT0FBTzs0QkFDTC9DLFFBQVFnRCxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRWIsZ0JBQWdCLFlBQVksQ0FBQzt3QkFDM0U7b0JBQ0YsT0FBTzt3QkFDTCxNQUFNeUIsK0NBQStDLElBQUksQ0FBQ3pELFlBQVksQ0FBQzBELGlCQUFpQixDQUFDUDt3QkFFekYsSUFBSU0sOENBQThDOzRCQUNoRGIsWUFBWTt3QkFDZCxPQUFPOzRCQUNMLE1BQU1lLGlCQUFpQk4sU0FBU3BCLFNBQVMsSUFDbkMyQixxQkFBcUIsSUFBSSxDQUFDNUQsWUFBWSxDQUFDaUMsU0FBUyxJQUNoRDRCLDBCQUEwQlYsa0JBQWtCbEIsU0FBUzs0QkFFM0RwQyxRQUFRZ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFYixnQkFBZ0IsZUFBZSxFQUFFNEIsbUJBQW1CLGtCQUFrQixFQUFFRCxlQUFlLDJCQUEyQixFQUFFRSx3QkFBd0IsWUFBWSxDQUFDO3dCQUNqTDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJakIsV0FBVztvQkFDYi9DLFFBQVFpRSxNQUFNLENBQUMsSUFBSTtnQkFDckI7WUFDRixHQUFHakU7UUFDTDtRQUVBLElBQUkrQyxXQUFXO1lBQ2IvQixZQUFZLElBQUksRUFBRyxHQUFHO1lBRXRCaEIsUUFBUWtFLFlBQVksQ0FBQ2xEO1lBRXJCaEIsUUFBUWdELEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFYixnQkFBZ0IsWUFBWSxDQUFDO1FBQ2xFO1FBRUEsT0FBT25CO0lBQ1Q7SUFFQW1DLHFCQUFxQm5ELE9BQU8sRUFBRTtRQUM1QixJQUFJa0Qsd0JBQXdCO1FBRTVCLE1BQU1mLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaEMyQixxQkFBcUIsSUFBSSxDQUFDNUQsWUFBWSxDQUFDaUMsU0FBUztRQUV0RHBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUgsZ0JBQWdCLGVBQWUsRUFBRTRCLG1CQUFtQixrQkFBa0IsQ0FBQztRQUV4RyxNQUFNNUQsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQzJDLFFBQVEsQ0FBQzlDO1FBRWhELElBQUlHLGlCQUFpQixNQUFNO1lBQ3pCLElBQUksQ0FBQ0EsWUFBWSxHQUFHQTtZQUVwQitDLHdCQUF3QjtRQUMxQjtRQUVBLElBQUlBLHVCQUF1QjtZQUN6QmxELFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWIsZ0JBQWdCLGVBQWUsRUFBRTRCLG1CQUFtQixnQkFBZ0IsQ0FBQztRQUMxRztRQUVBLE9BQU9iO0lBQ1Q7SUFFQVIsV0FBV0gsS0FBSyxFQUFFO1FBQ2hCLElBQUlFLGVBQWU7UUFFbkIsSUFBSXpDO1FBRUosTUFBTW1FLGNBQWM1QixNQUFNSCxTQUFTLElBQzdCZ0MsZUFBZTdCLE1BQU1MLFVBQVUsSUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDcEMsVUFBVW9FLGNBQWMsR0FBRztRQUUzQnBFLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU2QixZQUFZLGtCQUFrQixFQUFFaEMsZ0JBQWdCLGNBQWMsQ0FBQztRQUU5RixNQUFNa0Msa0JBQWtCRCxjQUFlLEdBQUc7UUFFMUNwRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFekIsTUFBTW9DLGlCQUFpQnRFLFNBQVMsR0FBRztRQUVuQ3VFLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ0Y7WUFDVCxNQUFNbEUsZUFBZW9DLE1BQU1sQyxlQUFlLElBQ3BDbUUsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUN0RSxjQUFjbUUsZ0JBQWdCRDtZQUVqRixJQUFJRyxxQkFBcUI7Z0JBQ3ZCL0IsZUFBZTtZQUNqQjtRQUNGLEdBQUc0QjtRQUVILElBQUk1QixjQUFjO1lBQ2hCekMsUUFBUWdELEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFbUIsWUFBWSxrQkFBa0IsRUFBRWhDLGdCQUFnQixZQUFZLENBQUM7UUFDaEc7UUFFQSxPQUFPTTtJQUNUO0lBRUFnQyxrQkFBa0J0RSxZQUFZLEVBQUVtRSxjQUFjLEVBQUVELGVBQWUsRUFBRTtRQUMvRCxJQUFJRyxzQkFBc0I7UUFFMUIsTUFBTXhFLFVBQVVxRSxpQkFDVmxDLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaEMyQixxQkFBcUI1RCxhQUFhaUMsU0FBUztRQUVqRHBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUV5QixtQkFBbUIseUJBQXlCLEVBQUU1QixnQkFBZ0IsY0FBYyxDQUFDO1FBRTVHLE1BQU11QyxtQ0FBbUMsSUFBSSxDQUFDdkUsWUFBWSxDQUFDd0UsOEJBQThCLENBQUN4RSxjQUFjbUUsZ0JBQWdCRDtRQUV4SCxJQUFJSyxrQ0FBa0M7WUFDcENGLHNCQUFzQjtRQUN4QjtRQUVBLElBQUlBLHFCQUFxQjtZQUN2QnhFLFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWUsbUJBQW1CLHlCQUF5QixFQUFFNUIsZ0JBQWdCLFlBQVksQ0FBQztRQUM5RztRQUVBLE9BQU9xQztJQUNUO0lBRUFJLDJCQUEyQnhFLHFCQUFxQixFQUFFSixPQUFPLEVBQUU7UUFDekQsSUFBSTZFLGdDQUFnQztRQUVwQyxNQUFNdEMsUUFBUW5DLHNCQUFzQm9DLFFBQVEsSUFDdEM0QixlQUFlN0IsTUFBTUwsVUFBVSxJQUMvQkMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUNoQzBDLG1CQUFtQjlFLFNBQ25CcUMsOEJBQThCakMsc0JBQXNCZ0MsU0FBUztRQUVuRXBDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVELDRCQUE0QixxQ0FBcUMsRUFBRUYsZ0JBQWdCLGNBQWMsQ0FBQztRQUVqSSxNQUFNa0Msa0JBQWtCRCxjQUFjLEdBQUc7UUFFekNwRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFekIsTUFBTW9DLGlCQUFpQnRFLFNBQVMsR0FBRztRQUVuQ0EsVUFBVThFLGtCQUFrQixHQUFHO1FBRS9CUCxJQUFBQSxrQkFBUyxFQUFDLENBQUNGO1lBQ1QsTUFBTWxFLGVBQWVvQyxNQUFNbEMsZUFBZSxJQUNwQ21FLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDdEUsY0FBY21FLGdCQUFnQkQ7WUFFakYsSUFBSUcscUJBQXFCO2dCQUN2QixJQUFJLENBQUNwRSxxQkFBcUIsR0FBR0E7Z0JBRTdCaUUsZ0JBQWdCSixNQUFNLENBQUNqRTtnQkFFdkI2RSxnQ0FBZ0M7WUFDbEM7UUFDRixHQUFHUjtRQUVILElBQUlRLCtCQUErQjtZQUNqQzdFLFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRVgsNEJBQTRCLHFDQUFxQyxFQUFFRixnQkFBZ0IsWUFBWSxDQUFDO1FBQ25JO1FBRUEsT0FBTzBDO0lBQ1Q7SUFFQUUsU0FBUztRQUNQLE1BQU0vRSxVQUFVLElBQUksQ0FBQ2tDLFVBQVU7UUFFL0IsT0FBTzhDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2hGO1lBQ2hCLE1BQU1DLFNBQVMsSUFBSSxDQUFDbUMsU0FBUyxJQUN2QjZDLE9BQU87Z0JBQ0xqRjtnQkFDQUM7WUFDRjtZQUVOLE9BQU9nRjtRQUNULEdBQUdqRjtJQUNMO0lBRUEsT0FBT2tGLE9BQU8sWUFBWTtJQUUxQixPQUFPQyxTQUFTRixJQUFJLEVBQUVqRixPQUFPLEVBQUU7UUFDN0IsSUFBSWdCO1FBRUpvRSxJQUFBQSxvQkFBVyxFQUFDLENBQUNILE1BQU1qRjtZQUNqQnFGLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3JGO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdnRixNQUNieEUsZ0JBQWdCNkUsSUFBQUEsaUNBQW9CLEVBQUNyRixRQUFRRCxVQUM3Q0UsT0FBT08sZUFDUE4sZUFBZW9GLElBQUFBLHNDQUE2QixFQUFDOUUsZUFBZVQsVUFDNURJLHdCQUF3Qm9GLElBQUFBLCtDQUFzQyxFQUFDL0UsZUFBZVQ7Z0JBRXBGZ0IsWUFBWSxJQUFJbEIsVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsY0FBY0M7WUFDakUsR0FBR0o7UUFDTCxHQUFHaUYsTUFBTWpGO1FBRVQsT0FBT2dCO0lBQ1Q7SUFFQSxPQUFPeUUsb0JBQW9CdEQsZUFBZSxFQUFFbkMsT0FBTyxFQUFFO1FBQ25ELElBQUlnQjtRQUVKMEUsSUFBQUEsZUFBTSxFQUFDLENBQUMxRjtZQUNOcUYsSUFBQUEsb0JBQVcsRUFBQyxDQUFDckY7Z0JBQ1gsTUFBTUMsU0FBU2tDLGlCQUNUMUIsZ0JBQWdCNkUsSUFBQUEsaUNBQW9CLEVBQUNyRixRQUFRRDtnQkFFbkRnQixZQUFZMkUsSUFBQUEsbUNBQTBCLEVBQUNsRixlQUFlVDtZQUN4RCxHQUFHQTtRQUNMLEdBQUdBO1FBRUgsT0FBT2dCO0lBQ1Q7QUFDRiJ9