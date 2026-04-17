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
const _context = require("../utilities/context");
const _element = require("../utilities/element");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, metavariable, topLevelMetaAssertion){
        super(context, string, node, breakPoint);
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
    compareTopLevelMetaAssertion(topLevelMetaAssertion) {
        let topLevelMetaAssertionCompares = false;
        const context = this.getContext(), referenceString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
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
            const specificContext = context; ///
            context = this.getContext();
            (0, _context.attempt)((context)=>{
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
                            const metaTypeString = metaType.getString(), metavariableString = this.metavariable.getString(), referenceMetaTypeString = referenceMetaType.getString();
                            context.debug(`The '${referenceString}' reference's '${metavariableString}' metavariable's '${metaTypeString}' meta-type should be the '${referenceMetaTypeString}' meta-type.`);
                        }
                    }
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
            context = specificContext; ///
            if (validates) {
                reference = this; ///
                context.addReference(reference);
            }
        }
        if (validates) {
            context.debug(`...validated the '${referenceString}' reference.`);
        }
        return reference;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const referenceString = this.getString(); ///
        context.trace(`Validating the '${referenceString}' reference's metavariable...'`);
        const metavariable = this.metavariable.validate(context);
        if (metavariable !== null) {
            this.metavariable = metavariable;
            metavariableValidates = true;
        }
        if (metavariableValidates) {
            context.debug(`...validated the '${referenceString}' reference's metavariable.'`);
        }
        return metavariableValidates;
    }
    unifyLabel(label, context) {
        let labelUnifies = false;
        const labelString = label.getString(), referenceString = this.getString(); ///
        context.trace(`Unifying the '${labelString}' label with the '${referenceString}' reference...`);
        const generalContext = context; ///
        context = label.getContext();
        const specificContext = context; ///
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
        const label = topLevelMetaAssertion.getLabel(), labelContext = label.getContext(), referenceString = this.getString(), referenceContext = this.getContext(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const generalContext = referenceContext, specificContext = labelContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const metavariable = label.getMetavariable(), metavariableUnifies = this.unifyMetavariable(metavariable, generalContext, specificContext);
                if (metavariableUnifies) {
                    this.topLevelMetaAssertion = topLevelMetaAssertion;
                    specificContext.commit(context);
                    topLevelMetaAssertionUUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (topLevelMetaAssertionUUnifies) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
        }
        return topLevelMetaAssertionUUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = breakPoint.toJSON();
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static name = "Reference";
    static fromJSON(json, context) {
        let reference;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, breakPoint } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context);
                reference = new Reference(context, string, node, breakPoint, metavariable, topLevelMetaAssertion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHJlY29uY2lsZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSwgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSByZWZlcmVuY2VOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi5jb21wYXJlZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gdGhpcy5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRSZWZlcmVuY2UgPSB0aGlzLmZpbmRWYWxpZFJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFJlZmVyZW5jZSkge1xuICAgICAgcmVmZXJlbmNlID0gdmFsaWRSZWZlcmVuY2U7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBsYWJlbCBmb3IgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhyZWZlcmVuY2VNZXRhVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlIHNob3VsZCBiZSB0aGUgJyR7cmVmZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy5tZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VDb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHJlZmVyZW5jZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGxhYmVsQ29udGV4dDsgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbik7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBqc29uLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZVN0cmluZyhyZWZlcmVuY2VTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSByZWZlcmVuY2VTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJtZXRhdmFyaWFibGUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZSIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMiLCJnZXRDb250ZXh0IiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJsYWJlbCIsImdldExhYmVsIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImZpbmRWYWxpZFJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJ2YWxpZFJlZmVyZW5jZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwiZGVidWciLCJzcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJnZXRNZXRhVHlwZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSIsImlzTWV0YVR5cGVFcXVhbFRvIiwibWV0YVR5cGVTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJyZWZlcmVuY2VNZXRhVHlwZVN0cmluZyIsImNvbW1pdCIsImFkZFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJyZWNvbmNpbGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMiLCJsYWJlbENvbnRleHQiLCJyZWZlcmVuY2VDb250ZXh0Iiwiam9pbiIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZVN0cmluZyIsImFibGF0ZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ2M7K0JBQ0k7eUJBQzZDO3lCQUM0QjtNQUVsSCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLHFCQUFxQixDQUFFO1FBQ2xGLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MscUJBQXFCLEdBQUdBO0lBQy9CO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtJQUMxQjtJQUVBRywyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUNGLHFCQUFxQjtJQUNuQztJQUVBRyxtQkFBbUI7UUFDakIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGdCQUFnQlIsTUFBTSxHQUFHO1FBRS9CLE9BQU9RO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQ3BCLE1BQU1DLG1CQUFtQixJQUFJLENBQUNSLFlBQVksQ0FBQ0ssT0FBTztRQUVsRCxPQUFPRztJQUNUO0lBRUFDLFVBQVVDLFNBQVMsRUFBRTtRQUNuQixNQUFNSixnQkFBZ0JJLFVBQVVMLE9BQU8sSUFDakNNLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDTixnQkFDL0NPLFVBQVVGLHNCQUF1QixHQUFHO1FBRTFDLE9BQU9FO0lBQ1Q7SUFFQUQsbUJBQW1CTixhQUFhLEVBQUU7UUFDaEMsTUFBTVIsT0FBT1EsZUFDUFEsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pCLE9BQzdCYSx1QkFBdUJHLGFBQWEsR0FBRztRQUU3QyxPQUFPSDtJQUNUO0lBRUFLLHNCQUFzQlIsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1IsWUFBWSxDQUFDZ0IscUJBQXFCLENBQUNSO0lBQW1CO0lBRTVHUyxpQkFBaUJDLFNBQVMsRUFBRTtRQUMxQixJQUFJQyxxQkFBcUI7UUFFekIsTUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7UUFFaEMsSUFBSUQsVUFBVTtZQUNaLE1BQU1FLGdCQUFnQkosVUFBVUssT0FBTztZQUV2QyxJQUFJRCxrQkFBa0IsTUFBTTtnQkFDMUIsTUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsbUJBQW1CO2dCQUVqRCxJQUFJSCxrQkFBa0JFLGtCQUFrQjtvQkFDdENMLHFCQUFxQjtnQkFDdkI7WUFDRjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBTyw2QkFBNkJ6QixxQkFBcUIsRUFBRTtRQUNsRCxJQUFJMEIsZ0NBQWdDO1FBRXBDLE1BQU0vQixVQUFVLElBQUksQ0FBQ2dDLFVBQVUsSUFDekJDLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFDaENDLDhCQUE4QjlCLHNCQUFzQjZCLFNBQVM7UUFFbkVsQyxRQUFRb0MsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRCw0QkFBNEIsbUNBQW1DLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFaEksTUFBTUksUUFBUWhDLHNCQUFzQmlDLFFBQVEsSUFDdENDLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNILE9BQU9yQztRQUU1QyxJQUFJdUMsY0FBYztZQUNoQlIsZ0NBQWdDO1FBQ2xDO1FBRUEsSUFBSUEsK0JBQStCO1lBQ2pDL0IsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRCw0QkFBNEIsbUNBQW1DLEVBQUVGLGdCQUFnQixZQUFZLENBQUM7UUFDbEk7UUFFQSxPQUFPRjtJQUNUO0lBRUFVLG1CQUFtQnpDLE9BQU8sRUFBRTtRQUMxQixNQUFNVSxnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNNLFlBQVlkLFFBQVEwQyw0QkFBNEIsQ0FBQ2hDLGdCQUNqRGlDLGlCQUFpQjdCLFdBQVksR0FBRztRQUV0QyxPQUFPNkI7SUFDVDtJQUVBQyxTQUFTNUMsT0FBTyxFQUFFO1FBQ2hCLElBQUljLFlBQVk7UUFFaEIsTUFBTW1CLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDbEMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxnQkFBZ0IsY0FBYyxDQUFDO1FBRWhFLElBQUlZLFlBQVk7UUFFaEIsTUFBTUYsaUJBQWlCLElBQUksQ0FBQ0Ysa0JBQWtCLENBQUN6QztRQUUvQyxJQUFJMkMsZ0JBQWdCO1lBQ2xCN0IsWUFBWTZCLGdCQUFpQixHQUFHO1lBRWhDM0MsUUFBUThDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRWIsZ0JBQWdCLDZCQUE2QixDQUFDO1FBQ3pFLE9BQU87WUFDTCxNQUFNYyxrQkFBa0IvQyxTQUFVLEdBQUc7WUFFckNBLFVBQVUsSUFBSSxDQUFDZ0MsVUFBVTtZQUV6QmdCLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2hEO2dCQUNQLE1BQU1pRCx3QkFBd0IsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ2xEO2dCQUV4RCxJQUFJaUQsdUJBQXVCO29CQUN6QixNQUFNRSx3QkFBd0JDLHVDQUF3QixFQUNoREMsb0JBQW9CckQsUUFBUXNELDBCQUEwQixDQUFDSCx3QkFDdkRJLFdBQVcsSUFBSSxDQUFDbkQsWUFBWSxDQUFDb0QsV0FBVztvQkFFOUMsSUFBSUQsYUFBYSxNQUFNO3dCQUNyQixNQUFNekMsWUFBWSxJQUFJLEVBQ2hCMkMsZUFBZXpELFFBQVEwRCx5QkFBeUIsQ0FBQzVDLFdBQVdkO3dCQUVsRSxJQUFJeUQsY0FBYzs0QkFDaEJaLFlBQVk7d0JBQ2QsT0FBTzs0QkFDTDdDLFFBQVE4QyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRWIsZ0JBQWdCLFlBQVksQ0FBQzt3QkFDM0U7b0JBQ0YsT0FBTzt3QkFDTCxNQUFNMEIsK0NBQStDLElBQUksQ0FBQ3ZELFlBQVksQ0FBQ3dELGlCQUFpQixDQUFDUDt3QkFFekYsSUFBSU0sOENBQThDOzRCQUNoRGQsWUFBWTt3QkFDZCxPQUFPOzRCQUNMLE1BQU1nQixpQkFBaUJOLFNBQVNyQixTQUFTLElBQ25DNEIscUJBQXFCLElBQUksQ0FBQzFELFlBQVksQ0FBQzhCLFNBQVMsSUFDaEQ2QiwwQkFBMEJWLGtCQUFrQm5CLFNBQVM7NEJBRTNEbEMsUUFBUThDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRWIsZ0JBQWdCLGVBQWUsRUFBRTZCLG1CQUFtQixrQkFBa0IsRUFBRUQsZUFBZSwyQkFBMkIsRUFBRUUsd0JBQXdCLFlBQVksQ0FBQzt3QkFDakw7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSWxCLFdBQVc7b0JBQ2IsSUFBSSxDQUFDbUIsTUFBTSxDQUFDaEU7Z0JBQ2Q7WUFDRixHQUFHQTtZQUVIQSxVQUFVK0MsaUJBQWtCLEdBQUc7WUFFL0IsSUFBSUYsV0FBVztnQkFDYi9CLFlBQVksSUFBSSxFQUFHLEdBQUc7Z0JBRXRCZCxRQUFRaUUsWUFBWSxDQUFDbkQ7WUFDdkI7UUFDRjtRQUVBLElBQUkrQixXQUFXO1lBQ2I3QyxRQUFROEMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUViLGdCQUFnQixZQUFZLENBQUM7UUFDbEU7UUFFQSxPQUFPbkI7SUFDVDtJQUVBb0MscUJBQXFCbEQsT0FBTyxFQUFFO1FBQzVCLElBQUlpRCx3QkFBd0I7UUFFNUIsTUFBTWhCLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDbEMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxnQkFBZ0IsOEJBQThCLENBQUM7UUFFaEYsTUFBTTdCLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUN3QyxRQUFRLENBQUM1QztRQUVoRCxJQUFJSSxpQkFBaUIsTUFBTTtZQUN6QixJQUFJLENBQUNBLFlBQVksR0FBR0E7WUFFcEI2Qyx3QkFBd0I7UUFDMUI7UUFFQSxJQUFJQSx1QkFBdUI7WUFDekJqRCxRQUFROEMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUViLGdCQUFnQiw0QkFBNEIsQ0FBQztRQUNsRjtRQUVBLE9BQU9nQjtJQUNUO0lBRUFULFdBQVdILEtBQUssRUFBRXJDLE9BQU8sRUFBRTtRQUN6QixJQUFJdUMsZUFBZTtRQUVuQixNQUFNMkIsY0FBYzdCLE1BQU1ILFNBQVMsSUFDN0JELGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTdDbEMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRThCLFlBQVksa0JBQWtCLEVBQUVqQyxnQkFBZ0IsY0FBYyxDQUFDO1FBRTlGLE1BQU1rQyxpQkFBaUJuRSxTQUFTLEdBQUc7UUFFbkNBLFVBQVVxQyxNQUFNTCxVQUFVO1FBRTFCLE1BQU1lLGtCQUFrQi9DLFNBQVUsR0FBRztRQUVyQ29FLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3JCO1lBQ1QsTUFBTTNDLGVBQWVpQyxNQUFNL0IsZUFBZSxJQUNwQytELHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDbEUsY0FBYytELGdCQUFnQnBCO1lBRWpGLElBQUlzQixxQkFBcUI7Z0JBQ3ZCOUIsZUFBZTtZQUNqQjtRQUNGLEdBQUdRO1FBRUgsSUFBSVIsY0FBYztZQUNoQnZDLFFBQVE4QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRW9CLFlBQVksa0JBQWtCLEVBQUVqQyxnQkFBZ0IsWUFBWSxDQUFDO1FBQ2hHO1FBRUEsT0FBT007SUFDVDtJQUVBK0Isa0JBQWtCbEUsWUFBWSxFQUFFK0QsY0FBYyxFQUFFcEIsZUFBZSxFQUFFO1FBQy9ELElBQUlzQixzQkFBc0I7UUFFMUIsTUFBTXJFLFVBQVUrQyxpQkFDVmQsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUNoQzRCLHFCQUFxQjFELGFBQWE4QixTQUFTO1FBRWpEbEMsUUFBUW9DLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRTBCLG1CQUFtQix5QkFBeUIsRUFBRTdCLGdCQUFnQixjQUFjLENBQUM7UUFFNUcsTUFBTXNDLG1DQUFtQyxJQUFJLENBQUNuRSxZQUFZLENBQUNvRSw4QkFBOEIsQ0FBQ3BFLGNBQWMrRCxnQkFBZ0JwQjtRQUV4SCxJQUFJd0Isa0NBQWtDO1lBQ3BDRixzQkFBc0I7UUFDeEI7UUFFQSxJQUFJQSxxQkFBcUI7WUFDdkJyRSxRQUFROEMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVnQixtQkFBbUIseUJBQXlCLEVBQUU3QixnQkFBZ0IsWUFBWSxDQUFDO1FBQzlHO1FBRUEsT0FBT29DO0lBQ1Q7SUFFQUksMkJBQTJCcEUscUJBQXFCLEVBQUVMLE9BQU8sRUFBRTtRQUN6RCxJQUFJMEUsZ0NBQWdDO1FBRXBDLE1BQU1yQyxRQUFRaEMsc0JBQXNCaUMsUUFBUSxJQUN0Q3FDLGVBQWV0QyxNQUFNTCxVQUFVLElBQy9CQyxrQkFBa0IsSUFBSSxDQUFDQyxTQUFTLElBQ2hDMEMsbUJBQW1CLElBQUksQ0FBQzVDLFVBQVUsSUFDbENHLDhCQUE4QjlCLHNCQUFzQjZCLFNBQVM7UUFFbkVsQyxRQUFRb0MsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFRCw0QkFBNEIscUNBQXFDLEVBQUVGLGdCQUFnQixjQUFjLENBQUM7UUFFakksTUFBTWtDLGlCQUFpQlMsa0JBQ2pCN0Isa0JBQWtCNEIsY0FBYyxHQUFHO1FBRXpDRSxJQUFBQSxhQUFJLEVBQUMsQ0FBQzlCO1lBQ0pxQixJQUFBQSxrQkFBUyxFQUFDLENBQUNyQjtnQkFDVCxNQUFNM0MsZUFBZWlDLE1BQU0vQixlQUFlLElBQ3BDK0Qsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNsRSxjQUFjK0QsZ0JBQWdCcEI7Z0JBRWpGLElBQUlzQixxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2hFLHFCQUFxQixHQUFHQTtvQkFFN0IwQyxnQkFBZ0JpQixNQUFNLENBQUNoRTtvQkFFdkIwRSxnQ0FBZ0M7Z0JBQ2xDO1lBQ0YsR0FBRzNCO1FBQ0wsR0FBR0EsaUJBQWlCL0M7UUFFcEIsSUFBSTBFLCtCQUErQjtZQUNqQzFFLFFBQVE4QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRVgsNEJBQTRCLHFDQUFxQyxFQUFFRixnQkFBZ0IsWUFBWSxDQUFDO1FBQ25JO1FBRUEsT0FBT3lDO0lBQ1Q7SUFFQUksU0FBUztRQUNQLE1BQU05RSxVQUFVLElBQUksQ0FBQ2dDLFVBQVU7UUFFL0IsT0FBTytDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQy9FO1lBQ2hCLE1BQU1DLFNBQVMsSUFBSSxDQUFDaUMsU0FBUztZQUU3QixJQUFJL0I7WUFFSkEsYUFBYSxJQUFJLENBQUM2RSxhQUFhO1lBRS9CLE1BQU1DLGlCQUFpQjlFLFdBQVcyRSxNQUFNO1lBRXhDM0UsYUFBYThFLGdCQUFpQixHQUFHO1lBRWpDLE1BQU1DLE9BQU87Z0JBQ1hsRjtnQkFDQUM7Z0JBQ0FFO1lBQ0Y7WUFFQSxPQUFPK0U7UUFDVCxHQUFHbEY7SUFDTDtJQUVBLE9BQU9tRixPQUFPLFlBQVk7SUFFMUIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFbEYsT0FBTyxFQUFFO1FBQzdCLElBQUljO1FBRUp1RSxJQUFBQSxvQkFBVyxFQUFDLENBQUNILE1BQU1sRjtZQUNqQnNGLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3RGO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxVQUFVLEVBQUUsR0FBRytFLE1BQ3pCeEUsZ0JBQWdCNkUsSUFBQUEsaUNBQW9CLEVBQUN0RixRQUFRRCxVQUM3Q0UsT0FBT1EsZUFDUE4sZUFBZW9GLElBQUFBLHNDQUE2QixFQUFDOUUsZUFBZVYsVUFDNURLLHdCQUF3Qm9GLElBQUFBLCtDQUFzQyxFQUFDL0UsZUFBZVY7Z0JBRXBGYyxZQUFZLElBQUloQixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQyxjQUFjQztZQUM3RSxHQUFHTDtRQUNMLEdBQUdrRixNQUFNbEY7UUFFVCxPQUFPYztJQUNUO0lBRUEsT0FBTzRFLG9CQUFvQnpELGVBQWUsRUFBRWpDLE9BQU8sRUFBRTtRQUNuRCxJQUFJYztRQUVKNkUsSUFBQUEsZUFBTSxFQUFDLENBQUMzRjtZQUNOc0YsSUFBQUEsb0JBQVcsRUFBQyxDQUFDdEY7Z0JBQ1gsTUFBTUMsU0FBU2dDLGlCQUNUdkIsZ0JBQWdCNkUsSUFBQUEsaUNBQW9CLEVBQUN0RixRQUFRRDtnQkFFbkRjLFlBQVk4RSxJQUFBQSxtQ0FBMEIsRUFBQ2xGLGVBQWVWO1lBQ3hELEdBQUdBO1FBQ0wsR0FBR0E7UUFFSCxPQUFPYztJQUNUO0FBQ0YifQ==