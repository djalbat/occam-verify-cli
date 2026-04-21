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
const _element = require("../utilities/element");
const _breakPoint = require("../utilities/breakPoint");
const _context = require("../utilities/context");
const _default = (0, _elements.define)(class Label extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, metavariable){
        super(context, string, node, breakPoint);
        this.metavariable = metavariable;
    }
    getMetavariable() {
        return this.metavariable;
    }
    getLabelNode() {
        const node = this.getNode(), labelNode = node; ///
        return labelNode;
    }
    getMetavariableNode() {
        return this.metavariable.getNode();
    }
    matchLabelNode(labelNode) {
        const node = labelNode, nodeMatches = this.matchNode(node), labelNodeMatches = nodeMatches; ///
        return labelNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        return this.metavariable.matchMetavariableNode(metavariableNode);
    }
    compareReference(reference) {
        const metavariable = reference.getMetavariable(), metavariableComparesToMetavariable = this.compareMetavariable(metavariable), comparesToReference = metavariableComparesToMetavariable; ///
        return comparesToReference;
    }
    compareMetavariable(metavariable) {
        return this.metavariable.compareMetavariable(metavariable);
    }
    verify() {
        let verifies = false;
        const context = this.getContext(), labelString = this.getString(); ///
        context.trace(`Verifying the '${labelString}' label...`);
        const labelNode = this.getLabelNode(), labelPresent = context.isLabelPresentByLabelNode(labelNode);
        if (!labelPresent) {
            const validates = this.validate();
            if (validates !== null) {
                verifies = true;
            }
        } else {
            context.debug(`The '${labelString}' label is already present.`);
        }
        if (verifies) {
            context.debug(`...verified the '${labelString}' label.`);
        }
        return verifies;
    }
    validate() {
        let validates = false;
        const context = this.getContext(), labelString = this.getString(); ///
        context.trace(`Validating the '${labelString}' label...`);
        (0, _context.attempt)((context)=>{
            const metavariableValidates = this.validateMetavariable(context);
            if (metavariableValidates) {
                validates = true;
            }
            if (validates) {
                this.commit(context);
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${labelString}' label.`);
        }
        return validates;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const labelString = this.getString(); ///
        context.trace(`Validating the '${labelString}' label's metavariable...`);
        const metavariable = this.metavariable.validate(context);
        if (metavariable !== null) {
            this.metavariable = metavariable;
            metavariableValidates = true;
        }
        if (metavariableValidates) {
            context.debug(`...validated the '${labelString}' label's metavariable.'`);
        }
        return metavariableValidates;
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
    static name = "Label";
    static fromJSON(json, context) {
        let label;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), node = labelNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context);
                label = new Label(context, string, node, breakPoint, metavariable);
            }, json, context);
        }, context);
        return label;
    }
    static fromLabelString(labelString, context) {
        let label;
        (0, _context.posit)((context)=>{
            (0, _context.ablate)((context)=>{
                (0, _context.instantiate)((context)=>{
                    const string = labelString, labelNode = (0, _instantiate.instantiateLabel)(string, context);
                    label = (0, _element.labelFromLabelNode)(labelNode, context);
                }, context);
            }, context);
        }, context);
        return label;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tTGFiZWxOb2RlLCBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBwb3NpdCwgYWJsYXRlLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTGFiZWwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBtZXRhdmFyaWFibGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBsYWJlbE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgbWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLmdldExhYmVsTm9kZSgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgaWYgKCFsYWJlbFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsJ3MgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWw7XG5cbiAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGxhYmVsTm9kZSA9IGluc3RhbnRpYXRlTGFiZWwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG1ldGF2YXJpYWJsZSk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxTdHJpbmcobGFiZWxTdHJpbmcsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWw7XG5cbiAgICBwb3NpdCgoY29udGV4dCkgPT4ge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gbGFiZWxTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgICBsYWJlbE5vZGUgPSBpbnN0YW50aWF0ZUxhYmVsKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMYWJlbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRMYWJlbE5vZGUiLCJnZXROb2RlIiwibGFiZWxOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTGFiZWxOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJsYWJlbE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9SZWZlcmVuY2UiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJjb21taXQiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsYWJlbCIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZUxhYmVsIiwiYnJlYWtQb2ludEZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsImZyb21MYWJlbFN0cmluZyIsInBvc2l0IiwiYWJsYXRlIiwibGFiZWxGcm9tTGFiZWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ1U7eUJBQzZCOzRCQUNDO3lCQUNhO01BRTVFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxZQUFZLENBQUU7UUFDM0QsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFlBQVksR0FBR0E7SUFDdEI7SUFFQUMsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDRCxZQUFZO0lBQzFCO0lBRUFFLGVBQWU7UUFDYixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsWUFBWU4sTUFBTSxHQUFHO1FBRTNCLE9BQU9NO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNMLFlBQVksQ0FBQ0csT0FBTztJQUFJO0lBRTVERyxlQUFlRixTQUFTLEVBQUU7UUFDeEIsTUFBTU4sT0FBT00sV0FDUEcsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsT0FDN0JXLG1CQUFtQkYsYUFBYSxHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQUMsc0JBQXNCQyxnQkFBZ0IsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxZQUFZLENBQUNVLHFCQUFxQixDQUFDQztJQUFtQjtJQUU1R0MsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsTUFBTWIsZUFBZWEsVUFBVVosZUFBZSxJQUN4Q2EscUNBQXFDLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNmLGVBQzlEZ0Isc0JBQXNCRixvQ0FBb0MsR0FBRztRQUVuRSxPQUFPRTtJQUNUO0lBRUFELG9CQUFvQmYsWUFBWSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNBLFlBQVksQ0FBQ2UsbUJBQW1CLENBQUNmO0lBQWU7SUFFaEdpQixTQUFTO1FBQ1AsSUFBSUMsV0FBVztRQUVmLE1BQU10QixVQUFVLElBQUksQ0FBQ3VCLFVBQVUsSUFDekJDLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6Q3pCLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLFlBQVksVUFBVSxDQUFDO1FBRXZELE1BQU1oQixZQUFZLElBQUksQ0FBQ0YsWUFBWSxJQUM3QnFCLGVBQWUzQixRQUFRNEIseUJBQXlCLENBQUNwQjtRQUV2RCxJQUFJLENBQUNtQixjQUFjO1lBQ2pCLE1BQU1FLFlBQVksSUFBSSxDQUFDQyxRQUFRO1lBRS9CLElBQUlELGNBQWMsTUFBTTtnQkFDdEJQLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTHRCLFFBQVErQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVQLFlBQVksMkJBQTJCLENBQUM7UUFDaEU7UUFFQSxJQUFJRixVQUFVO1lBQ1p0QixRQUFRK0IsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVQLFlBQVksUUFBUSxDQUFDO1FBQ3pEO1FBRUEsT0FBT0Y7SUFDVDtJQUVBUSxXQUFXO1FBQ1QsSUFBSUQsWUFBWTtRQUVoQixNQUFNN0IsVUFBVSxJQUFJLENBQUN1QixVQUFVLElBQ3pCQyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFekN6QixRQUFRMEIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLFlBQVksVUFBVSxDQUFDO1FBRXhEUSxJQUFBQSxnQkFBTyxFQUFDLENBQUNoQztZQUNQLE1BQU1pQyx3QkFBd0IsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ2xDO1lBRXhELElBQUlpQyx1QkFBdUI7Z0JBQ3pCSixZQUFZO1lBQ2Q7WUFFQSxJQUFJQSxXQUFXO2dCQUNiLElBQUksQ0FBQ00sTUFBTSxDQUFDbkM7WUFDZDtRQUNGLEdBQUdBO1FBRUgsSUFBSTZCLFdBQVc7WUFDYjdCLFFBQVErQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsWUFBWSxRQUFRLENBQUM7UUFDMUQ7UUFFQSxPQUFPSztJQUNUO0lBRUFLLHFCQUFxQmxDLE9BQU8sRUFBRTtRQUM1QixJQUFJaUMsd0JBQXdCO1FBRTVCLE1BQU1ULGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6Q3pCLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsWUFBWSx5QkFBeUIsQ0FBQztRQUV2RSxNQUFNcEIsZUFBZSxJQUFJLENBQUNBLFlBQVksQ0FBQzBCLFFBQVEsQ0FBQzlCO1FBRWhELElBQUlJLGlCQUFpQixNQUFNO1lBQ3pCLElBQUksQ0FBQ0EsWUFBWSxHQUFHQTtZQUVwQjZCLHdCQUF3QjtRQUMxQjtRQUVBLElBQUlBLHVCQUF1QjtZQUN6QmpDLFFBQVErQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsWUFBWSx3QkFBd0IsQ0FBQztRQUMxRTtRQUVBLE9BQU9TO0lBQ1Q7SUFFQUcsU0FBUztRQUNQLE1BQU1wQyxVQUFVLElBQUksQ0FBQ3VCLFVBQVU7UUFFL0IsT0FBT2MsSUFBQUEsa0JBQVMsRUFBQyxDQUFDckM7WUFDaEIsTUFBTUMsU0FBUyxJQUFJLENBQUN3QixTQUFTO1lBRTdCLElBQUl0QjtZQUVKQSxhQUFhLElBQUksQ0FBQ21DLGFBQWE7WUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQ3JDO1lBRWxEQSxhQUFhb0MsZ0JBQWlCLEdBQUc7WUFFakMsTUFBTUUsT0FBTztnQkFDWHpDO2dCQUNBQztnQkFDQUU7WUFDRjtZQUVBLE9BQU9zQztRQUNULEdBQUd6QztJQUNMO0lBRUEsT0FBTzBDLE9BQU8sUUFBUTtJQUV0QixPQUFPQyxTQUFTRixJQUFJLEVBQUV6QyxPQUFPLEVBQUU7UUFDN0IsSUFBSTRDO1FBRUpDLElBQUFBLG9CQUFXLEVBQUMsQ0FBQzdDO1lBQ1g4QyxJQUFBQSxvQkFBVyxFQUFDLENBQUNMLE1BQU16QztnQkFDakIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR3dDLE1BQ2JqQyxZQUFZdUMsSUFBQUEsNkJBQWdCLEVBQUM5QyxRQUFRRCxVQUNyQ0UsT0FBT00sV0FDUEwsYUFBYTZDLElBQUFBLDhCQUFrQixFQUFDUCxPQUNoQ3JDLGVBQWU2QyxJQUFBQSxrQ0FBeUIsRUFBQ3pDLFdBQVdSO2dCQUUxRDRDLFFBQVEsSUFBSTlDLE1BQU1FLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDO1lBQ3ZELEdBQUdxQyxNQUFNekM7UUFDWCxHQUFHQTtRQUVILE9BQU80QztJQUNUO0lBRUEsT0FBT00sZ0JBQWdCMUIsV0FBVyxFQUFFeEIsT0FBTyxFQUFFO1FBQzNDLElBQUk0QztRQUVKTyxJQUFBQSxjQUFLLEVBQUMsQ0FBQ25EO1lBQ0xvRCxJQUFBQSxlQUFNLEVBQUMsQ0FBQ3BEO2dCQUNONkMsSUFBQUEsb0JBQVcsRUFBQyxDQUFDN0M7b0JBQ1gsTUFBTUMsU0FBU3VCLGFBQ1RoQixZQUFZdUMsSUFBQUEsNkJBQWdCLEVBQUM5QyxRQUFRRDtvQkFFM0M0QyxRQUFRUyxJQUFBQSwyQkFBa0IsRUFBQzdDLFdBQVdSO2dCQUN4QyxHQUFHQTtZQUNMLEdBQUdBO1FBQ0wsR0FBR0E7UUFFSCxPQUFPNEM7SUFDVDtBQUNGIn0=