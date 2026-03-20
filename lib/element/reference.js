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
const _json = require("../utilities/json");
const _element = require("../utilities/element");
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
    findValidRefernece(context) {
        const metavariableNode = this.getMetavariableNode(), reference = context.findReferenceByMetavariableNode(metavariableNode), validReference = reference; ///
        return validReference;
    }
    validate(context) {
        let reference = null;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference...`);
        const validReference = this.findValidRefernece(context);
        if (validReference !== null) {
            reference = validReference; ///
            context.debug(`...the '${referenceString}' reference is already valid.`);
        } else {
            let validates = false;
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
        context = this.getContext();
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
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Reference";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        return (0, _context.instantiate)((context)=>{
            const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context), reference = new Reference(context, string, node, metavariable, topLevelMetaAssertion);
            return reference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHJlZmVyZW5jZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsKTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLmNvbXBhcmVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gdG8gdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXM7XG4gIH1cblxuICBmaW5kVmFsaWRSZWZlcm5lY2UoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWRSZWZlcmVuY2UgPSByZWZlcmVuY2U7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFJlZmVyZW5jZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVyZW5jZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVyZW5jZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICBpZiAobWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZXJlIGlzIG5vIGxhYmVsIGZvciB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKHJlZmVyZW5jZU1ldGFUeXBlKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgcmVlcmVuY2VNZXRhVHlwZVN0cmluZyA9IHJlZmVyZW5jZU1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlJ3MgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUgc2hvdWxkIGJlIHRoZSAnJHtyZWVyZW5jZU1ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLidgKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsKSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRoaXMubWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcblxuICAgICAgICBjb250ZXh0LmNvbW1pdChzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRKU09OOyAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbik7XG5cbiAgICAgIHJldHVybiByZWZlcmVuY2U7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicmVmZXJlbmNlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJmaW5kVmFsaWRSZWZlcm5lY2UiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWVyZW5jZU1ldGFUeXBlU3RyaW5nIiwiYWRkUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VVW5pZmllcyIsImNvbW1pdCIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uRnJvbVJlZmVyZW5jZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDs2QkFDYzt5QkFDRTsrQkFDRTtzQkFDd0M7eUJBQ0s7TUFFdEYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlB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