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
const _context = require("../utilities/context");
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
                context.commit(this);
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${labelString}' label.`);
        }
        return validates;
    }
    validateMetavariable(context) {
        let metavariableValidates = false;
        const labelString = this.getString(), metavariableString = this.metavariable.getString();
        context.trace(`Validating the '${labelString}' label's '${metavariableString}' metavariable...`);
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
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), json = {
                context,
                string
            };
            return json;
        }, context);
    }
    static name = "Label";
    static fromJSON(json, context) {
        let label;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), node = labelNode, metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context);
                label = new Label(context, string, node, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhYmxhdGUsIGF0dGVtcHQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7IH1cblxuICBtYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHRoaXMuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICBpZiAoIWxhYmVsUHJlc2VudCkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZSgpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTGFiZWxcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbDtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbFN0cmluZyhsYWJlbFN0cmluZywgY29udGV4dCkge1xuICAgIGxldCBsYWJlbDtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gbGFiZWxTdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRMYWJlbE5vZGUiLCJnZXROb2RlIiwibGFiZWxOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTGFiZWxOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJsYWJlbE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9SZWZlcmVuY2UiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJjb21taXQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGFiZWwiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVMYWJlbCIsIm1ldGF2YXJpYWJsZUZyb21M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