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
            const metavariableValidates = this.validateMetavariable(context);
            if (metavariableValidates) {
                if (!validates) {
                    const reference = this, labelPresent = context.isLabelPresentByReference(reference);
                    if (labelPresent) {
                        validates = true;
                    }
                }
                if (!validates) {
                    const reference = this, metavariablePresent = context.isMetavariablePresentByReference(reference);
                    if (metavariablePresent) {
                        validates = true;
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
        let metavariableValidates;
        const referenceString = this.getString(), metavariableString = this.metavariable.getString();
        context.trace(`Validating the '${referenceString}' reference's '${metavariableString}' metavariable...'`);
        metavariableValidates = this.metavariable.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hSZWZlcmVuY2VOb2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25Ob2RlQSA9IGFzc2VydGlvbk5vZGU7IC8vL1xuXG4gICAgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUIgPSBhc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCID0gYXNzZXJ0aW9uTm9kZUEubWF0Y2goYXNzZXJ0aW9uTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSBhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUmVmZXJuZWNlID0gdGhpcy5maW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRSZWZlcm5lY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZSA9IHZhbGlkUmVmZXJuZWNlOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgaWYgKGxhYmVsUHJlc2VudCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICByZWZlcmVuY2UgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gbGFiZWxVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVBIiwiYXNzZXJ0aW9uTm9kZUIiLCJhc3NlcnRpb25Ob2RlQUFNYXRjaGVzUmVmZXJlbmNlQk5vZGVCIiwibWF0Y2giLCJlcXVhbFRvIiwiZmluZFZhbGlkUmVmZXJuZWNlIiwicmVmZXJlbmNlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkUmVmZXJlbmNlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRhdGUiLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkUmVmZXJuZWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJhZGRSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJsYWJlbFN0cmluZyIsImxhYmVsTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRMYWJlbCIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVu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