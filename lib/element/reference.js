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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGFibGF0ZSwgYXR0ZW1wdCwgc2VyaWFsaXNlLCByZWNvbmNpbGUsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSByZWZlcmVuY2VOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZU5hbWU7XG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQikge1xuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsKTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLmNvbXBhcmVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXM7XG4gIH1cblxuICBmaW5kVmFsaWRSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgdmFsaWRSZWZlcmVuY2UgPSByZWZlcmVuY2U7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFJlZmVyZW5jZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVyZW5jZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJlbmNlKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVyZW5jZTsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBsYWJlbCBmb3IgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhyZWZlcmVuY2VNZXRhVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlIHNob3VsZCBiZSB0aGUgJyR7cmVmZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICByZWZlcmVuY2UgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYWJlbENvbnRleHQgPSBsYWJlbC5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gbGFiZWxDb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy5tZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGxhYmVsQ29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG5cbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbik7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZVN0cmluZyhyZWZlcmVuY2VTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwic2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyIsImdldENvbnRleHQiLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsImxhYmVsIiwiZ2V0TGFiZWwiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwiZmluZFZhbGlkUmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInZhbGlkUmVmZXJlbmNlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsImF0dGVtcHQiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGFUeXBlTmFtZSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsInJlZmVyZW5jZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImdldE1ldGFUeXBlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb1JlZmVyZW5jZU1ldGFUeXBlIiwiaXNNZXRhVHlwZUVxdWFsVG8iLCJtZXRhVHlwZVN0cmluZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nIiwiY29tbWl0IiwiYWRkUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlY29uY2lsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZSIsImZyb21SZWZlcmVuY2VTdHJpbmciLCJhYmxhdGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEOzZCQUNjOytCQUNJO3lCQUNFO3lCQUNxQztNQUdoRixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsQ0FBRTtRQUN0RSxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtJQUMvQjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7SUFDMUI7SUFFQUcsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDRixxQkFBcUI7SUFDbkM7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixZQUFZLENBQUNLLE9B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