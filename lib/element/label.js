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
    constructor(context, string, node, lineIndex, metavariable){
        super(context, string, node, lineIndex);
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
            const string = this.getString(), lineIndex = this.getLineIndex(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Label";
    static fromJSON(json, context) {
        let label;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, labelNode = (0, _instantiate.instantiateLabel)(string, context), node = labelNode, metavariable = (0, _element.metavariableFromLabelNode)(labelNode, context);
                label = new Label(context, string, node, lineIndex, metavariable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlTGFiZWwgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhYmxhdGUsIGF0dGVtcHQsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TGFiZWxOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBsYWJlbE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0Tm9kZSgpOyB9XG5cbiAgbWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLmdldExhYmVsTm9kZSgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgaWYgKCFsYWJlbFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoKTtcblxuICAgICAgaWYgKHZhbGlkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwncyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG5cbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsJ3MgbWV0YXZhcmlhYmxlLidgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWw7XG5cbiAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgbGFiZWxOb2RlID0gaW5zdGFudGlhdGVMYWJlbChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBtZXRhdmFyaWFibGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsU3RyaW5nKGxhYmVsU3RyaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpbmcgPSBsYWJlbFN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBsYWJlbE5vZGUgPSBpbnN0YW50aWF0ZUxhYmVsKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJMYWJlbCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldExhYmVsTm9kZSIsImdldE5vZGUiLCJsYWJlbE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hMYWJlbE5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImxhYmVsTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsImNvbW1pdCIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsYWJlbCIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUxhYmVsIiwibWV0YXZhcmlhYmxlRnJvbUxhYmVsTm9kZSIsImZyb21MYWJlbFN0cmluZyIsImFibGF0ZSIsImxhYmVsRnJvbUxhYmVsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEOzZCQUNVO3lCQUNFO3lCQUVrQztNQUVyRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxDQUFFO1FBQzFELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO0lBQ3RCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0QsWUFBWTtJQUMxQjtJQUVBRSxlQUFlO1FBQ2IsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLFlBQVlOLE1BQU0sR0FBRztRQUUzQixPQUFPTTtJQUNUO0lBRUFDLHNCQUFzQjtRQUFFLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNHLE9BQU87SUFBSTtJQUU1REcsZUFBZUYsU0FBUyxFQUFFO1FBQ3hCLE1BQU1OLE9BQU9NLFdBQ1BHLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNWLE9BQzdCVyxtQkFBbUJGLGFBQWEsR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRUFDLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ1gsWUFBWSxDQUFDVSxxQkFBcUIsQ0FBQ0M7SUFBbUI7SUFFNUdDLGlCQUFpQkMsU0FBUyxFQUFFO1FBQzFCLE1BQU1iLGVBQWVhLFVBQVVaLGVBQWUsSUFDeENhLHFDQUFxQyxJQUFJLENBQUNDLG1CQUFtQixDQUFDZixlQUM5RGdCLHNCQUFzQkYsb0NBQW9DLEdBQUc7UUFFbkUsT0FBT0U7SUFDVDtJQUVBRCxvQkFBb0JmLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDQSxZQUFZLENBQUNlLG1CQUFtQixDQUFD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