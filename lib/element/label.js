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
const _element = require("../utilities/element");
const _default = (0, _elements.define)(class Label extends _occamlanguages.Element {
    constructor(context, string, node, metavariable){
        super(context, string, node);
        this.metavariable = metavariable;
    }
    getMetavariable() {
        return this.metavariable;
    }
    getLabelNode() {
        const node = this.getNode(), labelNode = node; ///
        return labelNode;
    }
    getMetavariableName() {
        return this.metavariable.getName();
    }
    getMetavariableNode() {
        return this.metavariable.getNode();
    }
    compareMetavariable(metavariable) {
        return this.metavariable.compare(metavariable);
    }
    compareMetavariableName(metavariableName) {
        return this.metavariable.compareMetavariableName(metavariableName);
    }
    compareReference(reference) {
        const metavariable = reference.getMetavariable(), metavariableComparesToMetavariable = this.compareMetavariable(metavariable), comparesToReference = metavariableComparesToMetavariable; ///
        return comparesToReference;
    }
    verify() {
        let verifies = false;
        const context = this.getContext(), labelString = this.getString(); ///
        context.trace(`Verifying the '${labelString}' label...`);
        const metavariableVerifies = this.verifyMetavariable();
        if (metavariableVerifies) {
            const metavariableName = this.getMetavariableName(), labelPresent = context.isLabelPresentByMetavariableName(metavariableName);
            if (!labelPresent) {
                verifies = true;
            } else {
                context.debug(`The '${labelString}' label is already present.`);
            }
        }
        if (verifies) {
            context.debug(`...verified the '${labelString}' label.`);
        }
        return verifies;
    }
    verifyMetavariable() {
        let verifies = false;
        const context = this.getContext(), labelString = this.getString(), metavariableString = this.metavariable.getString();
        context.trace(`Verifying the '${labelString}' label's '${metavariableString}' metavariable...`);
        const metavariableName = this.getMetavariableName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
        if (!metavariablePresent) {
            verifies = true;
        } else {
            context.debug(`The '${metavariableString}' metavariable is already present.`);
        }
        if (verifies) {
            context.debug(`...verified the '${labelString}' label's '${metavariableString}' metavariable.`);
        }
        return verifies;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Label";
    static fromJSON(json, context) {
        const label = (0, _context.literally)((context)=>{
            const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context), node = labelNode, label = new Label(context, string, node, metavariable);
            return label;
        }, context);
        return label;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVMYWJlbCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGUoKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFsYWJlbFByZXNlbnQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBsYWJlbE5vZGUgPSBpbnN0YW50aWF0ZUxhYmVsKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMYWJlbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldExhYmVsTm9kZSIsImdldE5vZGUiLCJsYWJlbE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxhYmVsIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVMYWJlbCIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDRzs2QkFDTzt5QkFDUztNQUUxQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVksQ0FBRTtRQUMvQyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtJQUN0QjtJQUVBQyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNELFlBQVk7SUFDMUI7SUFFQUUsZUFBZTtRQUNiLE1BQU1ILE9B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