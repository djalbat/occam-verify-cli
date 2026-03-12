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
                this.setContext(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRMYWJlbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgbWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIGlmICghbGFiZWxQcmVzZW50KSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCdzICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcblxuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuJ2ApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRKU09OOyAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGxhYmVsID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGxhYmVsTm9kZSA9IGluc3RhbnRpYXRlTGFiZWwoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxhYmVsIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0Tm9kZSIsImxhYmVsTm9kZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTGFiZWxOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJsYWJlbE5vZGVNYXRjaGVzIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9SZWZlcmVuY2UiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0IiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJzZXRDb250ZXh0IiwibWV0YXZhcmlhYmxlU3RyaW5nIiwidG9KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJsYWJlbCIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlTGFiZWwiLCJtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7NkJBQ1U7eUJBQ0U7eUJBQ087c0JBQ3VDO01BRWpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWSxDQUFFO1FBQy9DLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtJQUMxQjtJQUVBRSxlQUFlO1FBQ2IsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLFlBQVlMLE1BQU0sR0FBRztRQUUzQixPQUFPSztJQUNUO0lBRUFDLHNCQUFzQjtRQUFFLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNNLE9BQU87SUFBSTtJQUU1REMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFlBQVksQ0FBQ0csT0FBTztJQUFJO0lBRTVESyxlQUFlSixTQUFTLEVBQUU7UUFDeEIsTUFBTUwsT0FBT0ssV0FDUEssY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsT0FDN0JZLG1CQUFtQkYsYUFBYSxHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFQUMsb0JBQW9CWixZQUFZLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ0EsWUFBWSxDQUFDYSxPQUFPLENBQUNiO0lBQWU7SUFFcEZjLHdCQUF3QkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ2YsWUFBWSxDQUFDYyx1QkFBdUIsQ0FBQ0M7SUFBbUI7SUFFaEhDLGlCQUFpQkMsU0FBUyxFQUFFO1FBQzFCLE1BQU1qQixlQUFlaUIsVUFBVWhCLGVBQWUsSUFDeENpQixxQ0FBcUMsSUFBSSxDQUFDTixtQkFBbUIsQ0FB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