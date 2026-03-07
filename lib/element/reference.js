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
        context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable...'`);
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
        const generalMetavariable = this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
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
        const label = topLevelMetaAssertion.getLabel(), labelUnifies = this.unifyLabel(label, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlQSA9IGFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUIgPSBhc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCID0gYXNzZXJ0aW9uTm9kZUEubWF0Y2goYXNzZXJ0aW9uTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJuZWNlID0gdGhpcy5maW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcm5lY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJuZWNlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgaWYgKCF2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUudmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc01ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBhIG1ldGF2YXJhaWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyYWlibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBsYWJlbE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gcmVmZXJlbmNlO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZUEiLCJhc3NlcnRpb25Ob2RlQiIsImFzc2VydGlvbk5vZGVBQU1hdGNoZXNSZWZlcmVuY2VCTm9kZUIiLCJtYXRjaCIsImVxdWFsVG8iLCJmaW5kVmFsaWRSZWZlcm5lY2UiLCJyZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZGF0ZSIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRSZWZlcm5lY2UiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImFkZFJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsInJlZmVyZW5jZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVBc01ldGF2YXJpYWJsZSIsInZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt5QkFDRzs2QkFDVzsrQkFDSTt5QkFDSzt1QkFDQztNQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxDQUFFO1FBQy9DLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtJQUMxQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGdCQUFnQkwsTUFBTSxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNLLE9BQU87SUFBSTtJQUVoREMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ0ssT0FBTztRQUVsRCxPQUFPRTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDVCxZQUFZLENBQUNHLE9BQU87UUFFbEQsT0FBT007SUFDVDtJQUVBQyxtQkFBbUJDLGFBQWEsRUFBRTtRQUNoQyxNQUFNQyxpQkFBaUJELGVBQWUsR0FBRztRQUV6Q0EsZ0JBQWdCLElBQUksQ0FBQ1QsZ0JBQWdCO1FBRXJDLE1B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