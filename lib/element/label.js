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
const _json = require("../utilities/json");
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
    matchLabelNode(labelNode) {
        const node = labelNode, nodeMatches = this.matchNode(node), labelNodeMatches = nodeMatches; ///
        return labelNodeMatches;
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
        let verifies1 = false;
        const context = this.getContext(), labelString = this.getString(); ///
        context.trace(`Verifying the '${labelString}' label...`);
        const labelNode = this.getLabelNode(), labelPresent1 = context.isLabelPresentByLabelNode(labelNode);
        const validates = this.validate();
        if (validates !== null) {
            verifies1 = true;
        }
        if (verifies1) {
            context.debug(`...verified the '${labelString}' label.`);
        }
        return validates;
    }
    validate() {
        let validates = false;
        const context = this.getContext(), labelString = this.getString(); ///
        context.trace(`Validating the '${labelString}' label...`);
        (0, _context.attempt)((context)=>{
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                this.setContext(context);
                validates = true;
            }
        }, context);
        if (!labelPresent) {
            verifies = true;
        } else {
            context.debug(`The '${labelString}' label is already present.`);
        }
        if (validates) {
            context.debug(`...validated the '${labelString}' label.`);
        }
        return validates;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const labelString = this.getString(), metavariableString = this.metavariable.getString();
        context.trace(`Validating the '${labelString}' label's '${metavariableString}' metavariable...'`);
        const metavariable = this.metavariable.validate(context);
        if (metavariable !== null) {
            this.metavariable = metavariable;
            metavariableValidates = true;
        }
        if (metavariableValidates) {
            context.debug(`...validated the '${labelString}' label's '${metavariableString}' metavariable.'`);
        }
        return metavariableValidates;
    }
    toJSON() {
        let context;
        context = this.getContext();
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Label";
    static fromJSON(json, context) {
        const label = (0, _context.literally)((context)=>{
            const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context), node = labelNode, ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const label = new Label(context, string, node, metavariable);
            return label;
        }, context);
        return label;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7IH1cblxuICBtYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5jb21wYXJlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLmdldExhYmVsTm9kZSgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHZhbGlkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuXG4gICAgaWYgKCFsYWJlbFByZXNlbnQpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGFiZWxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGxhYmVsTm9kZSA9IGluc3RhbnRpYXRlTGFiZWwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgICAgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRMYWJlbE5vZGUiLCJnZXROb2RlIiwibGFiZWxOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hMYWJlbE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImxhYmVsTm9kZU1hdGNoZXMiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInNldENvbnRleHQiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxhYmVsIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVMYWJlbCIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ1U7eUJBQ0U7c0JBQ007eUJBQ0M7TUFFMUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZ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