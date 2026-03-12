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
const _element = require("../utilities/element");
const _json = require("../utilities/json");
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
                context.commit(this);
                validates = true;
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
    static name = "Label";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        const label = (0, _context.literally)((context)=>{
            const { string } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context), node = labelNode, label = new Label(context, string, node, metavariable);
            return label;
        }, context);
        return label;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgbWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGlmICghbGFiZWxQcmVzZW50KSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuXG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbGFiZWwgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTGFiZWwiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRMYWJlbE5vZGUiLCJnZXROb2RlIiwibGFiZWxOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hMYWJlbE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImxhYmVsTm9kZU1hdGNoZXMiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsImNvbW1pdCIsIm1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwibGFiZWwiLCJsaXRl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