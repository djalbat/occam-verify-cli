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
const _metaTypeNames = require("../metaTypeNames");
const _unify = require("../process/unify");
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
        const metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, string = this.getString(), json = {
            string,
            metavariable
        };
        return json;
    }
    static name = "Reference";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUEgPSBhc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgIGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5vZGVCID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiA9IGFzc2VydGlvbk5vZGVBLm1hdGNoKGFzc2VydGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVybmVjZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHJlZmVyZW5jZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVybmVjZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJuZWNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVybmVjZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGlmICghdmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uLidgKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBhIG1ldGF2YXJhaWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlQSIsImFzc2VydGlvbk5vZGVCIiwiYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImZpbmRWYWxpZFJlZmVybmVjZSIsInJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZFJlZmVyZW5jZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkYXRlIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZFJlZmVybmVjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiYWRkUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiYXR0ZW1wdCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwic3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0M7K0JBQ2lCO3VCQUNNO3NCQUNBO01BRS9DLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxZQUFZLENBQUU7UUFDL0MsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRCxZQUFZO0lBQzFCO0lBRUFFLG1CQUFtQjtRQUNqQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsZ0JBQWdCTCxNQUFNLEdBQUc7UUFFL0IsT0FBT0s7SUFDVDtJQUdBQyxVQUFVO1FBQUUsT0FBTyxJQUFJLENBQUNMLFlBQVksQ0FBQ0ssT0FBTztJQUFJO0lBRWhEQyxzQkFBc0I7UUFDcEIsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ1AsWUFBWSxDQUFDSyxPQUFPO1FBRWxELE9BQU9FO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNULFlBQVksQ0FBQ0csT0FBTztRQUVsRCxPQUFPTTtJQUNUO0lBRUFDLG1CQUFtQkMsYUFBYSxFQUFFO1FBQ2hDLE1BQU1DLGlCQUFpQkQsZUFBZSxHQUFHO1FBRXpDQSxnQkFBZ0IsSUFBSSxDQUFDVCxnQkFBZ0I7UUFFckMsTUFBTVcsaUJBQWlCRixlQUNqQkcsd0NBQXdDRixlQUFlRyxLQUFLLENBQUNGLGlCQUM3REcsVUFBVUYsdUNBQXVDLEdBQUc7UUFFMUQsT0FBT0U7SUFDVDtJQUVBQyxtQkFBbUJwQixP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