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
const _breakPoint = require("../utilities/breakPoint");
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
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
                const { string } = json, referenceNode = (0, _instantiate.instantiateReference)(string, context), node = referenceNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), metavariable = (0, _element.metavariableFromReferenceNode)(referenceNode, context), topLevelMetaAssertion = (0, _element.topLevelMetaAssertionFromReferenceNode)(referenceNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVJlZmVyZW5jZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHJlY29uY2lsZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSwgbWV0YXZhcmlhYmxlRnJvbVJlZmVyZW5jZU5vZGUsIHRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBtZXRhdmFyaWFibGUsIHRvcExldmVsTWV0YUFzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgICB0aGlzLnRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhyZWZlcmVuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSByZWZlcmVuY2VOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB0byB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi5jb21wYXJlZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHRvIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzO1xuICB9XG5cbiAgZmluZFZhbGlkUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2VOb2RlID0gdGhpcy5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICAgIHZhbGlkUmVmZXJlbmNlID0gcmVmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRSZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRSZWZlcmVuY2UgPSB0aGlzLmZpbmRWYWxpZFJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFJlZmVyZW5jZSkge1xuICAgICAgcmVmZXJlbmNlID0gdmFsaWRSZWZlcmVuY2U7ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhVHlwZU5hbWUgPSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKHJlZmVyZW5jZU1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgICAgbWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGVyZSBpcyBubyBsYWJlbCBmb3IgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhyZWZlcmVuY2VNZXRhVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9SZWZlcmVuY2VNZXRhVHlwZSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlU3RyaW5nID0gcmVmZXJlbmNlTWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSdzICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlIHNob3VsZCBiZSB0aGUgJyR7cmVmZXJlbmNlTWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyBtZXRhdmFyaWFibGUuLi4nYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gbGFiZWwuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgbGFiZWxVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdGhpcy5tZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29udGV4dCA9IGxhYmVsLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VDb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHJlZmVyZW5jZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGxhYmVsQ29udGV4dDsgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy50b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25Gcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbWV0YXZhcmlhYmxlLCB0b3BMZXZlbE1ldGFBc3NlcnRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VTdHJpbmcocmVmZXJlbmNlU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZTtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gcmVmZXJlbmNlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibWV0YXZhcmlhYmxlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VOb2RlTWF0Y2hlcyIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzIiwiZ2V0Q29udGV4dCIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGFiZWwiLCJnZXRMYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJmaW5kVmFsaWRSZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwidmFsaWRSZWZlcmVuY2UiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsImRlYnVnIiwic3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZ2V0TWV0YVR5cGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvUmVmZXJlbmNlTWV0YVR5cGUiLCJpc01ldGFUeXBlRXF1YWxUbyIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlTWV0YVR5cGVTdHJpbmciLCJjb21taXQiLCJhZGRSZWZlcmVuY2UiLCJsYWJlbFN0cmluZyIsImdlbmVyYWxDb250ZXh0IiwicmVjb25jaWxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVVbmlmaWVzIiwibGFiZWxDb250ZXh0IiwicmVmZXJlbmNlQ29udGV4dCIsImpvaW4iLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVSZWZlcmVuY2UiLCJicmVha1BvaW50RnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tUmVmZXJlbmNlTm9kZSIsInRvcExldmVsTWV0YUFzc2VydGlvbkZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVJlZmVyZW5jZVN0cmluZyIsImFibGF0ZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7NkJBQ2M7K0JBQ0k7NEJBQ3NCO3lCQUN1Qjt5QkFDNEI7TUFFbEgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsQ0FBRTtRQUNsRixLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtJQUMvQjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7SUFDMUI7SUFFQUcsMkJBQTJCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDRixxQkFBcUI7SUFDbkM7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxnQkFBZ0JSLE1BQU0sR0FBRztRQUUvQixPQUFPUTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixZQUFZLENBQUNLLE9BQU87UUFFbEQsT0FBT0c7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUU7UUFDbkIsTUFBTUosZ0JBQWdCSSxVQUFVTCxPQUFPLElBQ2pDTSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ04sZ0JBQy9DTyxVQUFVRixzQkFBdUIs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