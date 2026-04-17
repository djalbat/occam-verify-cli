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
const _breakPoint = require("../utilities/breakPoint");
const _element = require("../utilities/element");
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
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), node = labelNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context);
                label = new Label(context, string, node, breakPoint, metavariable);
            }, context);
        }, json, context);
        return label;
    }
    static fromLabelString(labelString, context) {
        let label;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const string = labelString, labelNode = (0, _instantiate.instantiateLabel)(string, context);
                label = (0, _element.labelFromLabelNode)(labelNode, context);
            }, context);
        }, context);
        return label;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tTGFiZWxOb2RlLCBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhYmxhdGUsIGF0dGVtcHQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7IH1cblxuICBtYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHRoaXMuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICBpZiAoIWxhYmVsUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZSgpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGFiZWxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbDtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbWV0YXZhcmlhYmxlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbFN0cmluZyhsYWJlbFN0cmluZywgY29udGV4dCkge1xuICAgIGxldCBsYWJlbDtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gbGFiZWxTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0Tm9kZSIsImxhYmVsTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaExhYmVsTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibGFiZWxOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvUmVmZXJlbmNlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwibGFiZWxTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiYXR0ZW1wdCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwiY29tbWl0IiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGFiZWwiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVMYWJlbCIsImJyZWFrUG9pbnRGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJmcm9tTGFiZWxTdHJpbmciLCJhYmxhdGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDs2QkFDVTs0QkFDOEI7eUJBQ0Q7eUJBQ087TUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksQ0FBRTtRQUMzRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtJQUN0QjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNELFlBQVk7SUFDMUI7SUFFQUUsZUFBZTtRQUNiLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxZQUFZTixNQUFNLEdBQUc7UUFFM0IsT0FBT007SUFDVDtJQUVBQyxzQkFBc0I7UUFBRSxPQUFPLElBQUksQ0FBQ0wsWUFBWSxDQUFDRyxPQUFPO0lBQUk7SUFFNURHLGVBQWVGLFNBQVMsRUFBRTtRQUN4QixNQUFNTixPQUFPTSxXQUNQRyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixPQUM3QlcsbUJBQW1CRixhQUFhLEdBQUc7UUFFekMsT0FB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