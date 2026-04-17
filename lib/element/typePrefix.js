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
const _default = (0, _elements.define)(class TypePrefix extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name){
        super(context, string, node, lineIndex);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypePrefixNode() {
        const node = this.getNode(), typePrefixNode = node; ///
        return typePrefixNode;
    }
    getPrefixName() {
        const prefixName = this.name; ///
        return prefixName;
    }
    compareTypePrefixName(typePrefixName) {
        const comparesToTypePrefixName = this.name === typePrefixName;
        return comparesToTypePrefixName;
    }
    verify(context) {
        let verifies = false;
        const typePrefixString = this.getString(); ///
        context.trace(`Verifying the '${typePrefixString}' type prefix...`);
        const typePrefix = context.getTypePrefix();
        if (typePrefix === null) {
            const typePrefixName = this.name, typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            if (!typePrefixPresent) {
                const nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (!typePresent) {
                    verifies = true;
                } else {
                    context.debug(`The '${typePrefixString}' type is already present.`);
                }
            } else {
                context.debug(`The '${typePrefixString}' type prefix is already present.`);
            }
        } else {
            context.trace(`The package already has a '${typePrefixString}' type prefix.`);
        }
        if (verifies) {
            context.debug(`...verified the '${typePrefixString}' type prefix.`);
        }
        return verifies;
    }
    static name = "TypePrefix";
    toJSON() {
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, lineIndex, name);
            return typePrefix;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByZWZpeE5hbWU7XG4gIH1cblxuICBjb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlUHJlZml4TmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBwYWNrYWdlIGFscmVhZHkgaGFzIGEgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gaW5zdGFudGlhdGVUeXBlUHJlZml4KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSk7XG5cbiAgICAgIHJldHVybiB0eXBlUHJlZml4O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsImdldE5hbWUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4Tm9kZSIsImdldFByZWZpeE5hbWUiLCJwcmVmaXhOYW1lIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZGVidWciLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGVQcmVmaXgiLCJuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ1U7eUJBQ0M7TUFFdkMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxDQUFFO1FBQ2xELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsaUJBQWlCTixNQUFPLEdBQUc7UUFFakMsT0FBT007SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxhQUFhLElBQUksQ0FBQ04sSUFBSSxFQUFHLEdBQUc7UUFFbEMsT0FBT007SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRTtRQUNwQyxNQUFNQywyQkFBNEIsSUFBSSxDQUFDVCxJQUFJLEtBQUtRO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQUMsT0FBT2QsT0FBTyxFQUFFO1FBQ2QsSUFBSWUsV0FBVztRQUVmLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsaUJBQWlCLGdCQUFnQixDQUFDO1FBRWxFLE1BQU1HLGFBQWFuQixRQUFRb0IsYUFBYTtRQUV4QyxJQUFJRCxlQUFlLE1BQU07WUFDdkIsTUFBTVAsaUJBQWlCLElBQUksQ0FBQ1IsSUFBSSxFQUMxQmlCLG9CQUFvQnJCLFFBQVFzQixtQ0FBbUMsQ0FBQ1Y7WUFFdEUsSUFBSSxDQUFDUyxtQkFBbUI7Z0JBQ3RCLE1BQU1FLGtCQUFrQlgsZ0JBQ2xCWSxjQUFjeEIsUUFBUXlCLDhCQUE4QixDQUFDRjtnQkFFM0QsSUFBSSxDQUFDQyxhQUFhO29CQUNoQlQsV0FBVztnQkFDYixPQUFPO29CQUNMZixRQUFRMEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVixpQkFBaUIsMEJBQTBCLENBQUM7Z0JBQ3BFO1lBQ0YsT0FBTztnQkFDTGhCLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVWLGlCQUFpQixpQ0FBaUMsQ0FBQztZQUMzRTtRQUNGLE9BQU87WUFDTGhCLFFBQVFrQixLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUYsaUJBQWlCLGNBQWMsQ0FBQztRQUM5RTtRQUVBLElBQUlELFVBQVU7WUFDWmYsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVixpQkFBaUIsY0FBYyxDQUFDO1FBQ3BFO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9YLE9BQU8sYUFBYTtJQUUzQnVCLFNBQVM7UUFDUCxNQUFNMUIsU0FBUyxJQUFJLENBQUNnQixTQUFTLElBQ3ZCZCxZQUFZLElBQUksQ0FBQ3lCLGFBQWEsSUFDOUJDLE9BQU87WUFDTDVCO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPMEI7SUFDVDtJQUVBLE9BQU9DLFNBQVNELElBQUksRUFBRTdCLE9BQU8sRUFBRTtRQUM3QixPQUFPK0IsSUFBQUEsb0JBQVcsRUFBQyxDQUFDL0I7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHMEIsTUFDeEJyQixpQkFBaUJ3QixJQUFBQSxrQ0FBcUIsRUFBQy9CLFFBQVFELFVBQy9DRSxPQUFPTSxnQkFDUEosT0FBTzZCLElBQUFBLCtCQUFzQixFQUFDekIsZ0JBQWdCUjtZQUVwREEsVUFBVSxNQUFNLEdBQUc7WUFFbkIsTUFBTW1CLGFBQWEsSUFBSXJCLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1lBRXBFLE9BQU9lO1FBQ1QsR0FBR25CO0lBQ0w7QUFDRiJ9