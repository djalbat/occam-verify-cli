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
    matchReferenceNode(assertionNode) {
        const assertionNodeA = assertionNode; ///
        assertionNode = this.getReferenceNode();
        const assertionNodeB = assertionNode, assertionNodeAAMatchesReferenceBNodeB = assertionNodeA.match(assertionNodeB), equalTo = assertionNodeAAMatchesReferenceBNodeB; ///
        return equalTo;
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
            context.debug(`...the '${referenceString}' reference is alrady valid.`);
        } else {
            let validates = false;
            if (!validates) {
                const metavariableValidates = this.validateMetavariable(context);
                if (metavariableValidates) {
                    validates = true;
                }
            }
            if (!validates) {
                const reference = this, labelPresent = context.isLabelPresentByReference(reference);
                if (labelPresent) {
                    validates = true;
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
        context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable....'`);
        const metaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metaType = referenceMetaType, metavariable = context.findMetavariable(this.metavariable);
        if (metavariable !== null) {
            const metavariableValidatesGivenMetaType = metavariable.validateGivenMetaType(metaType, context);
            if (metavariableValidatesGivenMetaType) {
                metavariableValidates = true;
            }
        } else {
            context.debug(`The '${metavariableString}' metavariable is not present.`);
        }
        return metavariableValidates;
    }
    validateAsMetavariable(context) {
        let validatesAsMetavariable = false;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference as a metavaraible...`);
        const metavariable = this.getMetavariable(), metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
        if (metavariablePresent) {
            validatesAsMetavariable = true;
        }
        if (validatesAsMetavariable) {
            context.debug(`...validated the '${referenceString}' reference as a metavaraible.`);
        }
        return validatesAsMetavariable;
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
        const metavariableUnifiesIntrinsically = (0, _context.attempt)((specificContext)=>{
            const generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
            return metavariableUnifiesIntrinsically;
        }, specificContext);
        if (metavariableUnifiesIntrinsically) {
            metavariableUnifies = true;
        }
        if (metavariableUnifies) {
            context.debug(`...unified the '${metavariableString}' metavariable with the '${referenceString}' reference.`);
        }
        return metavariableUnifies;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies;
        const reference = this, referenceString = reference.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const label = topLevelMetaAssertion.getLabel(), substitutions = [], labelUnifies = this.unifyLabel(label, substitutions, context);
        topLevelMetaAssertionUnifies = labelUnifies; ///
        if (topLevelMetaAssertionUnifies) {
            context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionUnifies;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Reference";
    static fromJSON(json, context) {
        const reference = (0, _context.literally)((context)=>{
            const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), reference = new Reference(context, string, node, metavariable);
            return reference;
        }, context);
        return reference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlQSA9IGFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUIgPSBhc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCID0gYXNzZXJ0aW9uTm9kZUEubWF0Y2goYXNzZXJ0aW9uTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJuZWNlID0gdGhpcy5maW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcm5lY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJuZWNlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgaWYgKCF2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgIG1ldGFUeXBlID0gcmVmZXJlbmNlTWV0YVR5cGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlQXNNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyYWlibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGF0dGVtcHQoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGxhYmVsVW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlQSIsImFzc2VydGlvbk5vZGVCIiwiYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImZpbmRWYWxpZFJlZmVybmVjZSIsInJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZFJlZmVyZW5jZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkYXRlIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZFJlZmVybmVjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiYWRkUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiYXR0ZW1wdCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwic3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7eUJBQ1k7NkJBQ0U7K0JBQ0k7eUJBQ0s7dUJBQ0M7TUFFL0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksQ0FBRTtRQUMvQyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtJQUN0QjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNELFlBQVk7SUFDMUI7SUFFQUUsbUJBQW1CO1FBQ2pCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxnQkFBZ0JMLE1BQU0sR0FBRztRQUUvQixPQUFPSztJQUNUO0lBRUFDLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQ0wsWUFBWSxDQUFDSyxPQUFPO0lBQUk7SUFFaERD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