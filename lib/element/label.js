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
        const labelNodeA = labelNode; ///
        labelNode = this.getLabelNode();
        const labelNodeB = labelNode, labelNodeAMatchesLabelNodeB = labelNodeA.match(labelNodeB), labelNodeMatches = labelNodeAMatchesLabelNodeB; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldExhYmVsTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7IH1cblxuICBtYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGVBID0gbGFiZWxOb2RlOyAvLy9cblxuICAgIGxhYmVsTm9kZSA9IHRoaXMuZ2V0TGFiZWxOb2RlKCk7XG5cbiAgICBjb25zdCBsYWJlbE5vZGVCID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBsYWJlbE5vZGVBTWF0Y2hlc0xhYmVsTm9kZUIgPSBsYWJlbE5vZGVBLm1hdGNoKGxhYmVsTm9kZUIpLFxuICAgICAgICAgIGxhYmVsTm9kZU1hdGNoZXMgPSBsYWJlbE5vZGVBTWF0Y2hlc0xhYmVsTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoKTtcblxuICAgIGlmICh2YWxpZGF0ZXMgIT09IG51bGwpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cblxuICAgIGlmICghbGFiZWxQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLidgKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBsYWJlbE5vZGUgPSBpbnN0YW50aWF0ZUxhYmVsKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxhYmVsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0Tm9kZSIsImxhYmVsTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTGFiZWxOb2RlIiwibGFiZWxOb2RlQSIsImxhYmVsTm9kZUIiLCJsYWJlbE5vZGVBTWF0Y2hlc0xhYmVsTm9kZUIiLCJtYXRjaCIsImxhYmVsTm9kZU1hdGNoZXMiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInNldENvbnRleHQiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxhYmVsIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVMYWJlbCIsIm1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUiLCJlcGhlbWVy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