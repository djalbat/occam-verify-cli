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
    compareTypePrefixName(typePrefixName) {
        const comparesToTypePrefixName = this.name === typePrefixName;
        return comparesToTypePrefixName;
    }
    static name = "TypePrefix";
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgdHlwZVByZWZpeE5vZGUgPSBpbnN0YW50aWF0ZVR5cGVQcmVmaXgoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXgiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Tm9kZSIsInR5cGVQcmVmaXhOb2RlIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZVByZWZpeCIsIm5hbWVGcm9tVHlwZVByZWZpeE5vZGUiLCJ0eXBlUHJlZml4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ1U7eUJBQ0M7TUFFdkMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxDQUFFO1FBQ2xELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsaUJBQWlCTixNQUFPLEdBQUc7UUFFakMsT0FBT007SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRTtRQUNwQyxNQUFNQywyQkFBNEIsSUFBSSxDQUFDUCxJQUFJLEtBQUtNO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQSxPQUFPUCxPQUFPLGFBQWE7SUFFM0JRLFNBQVM7UUFDUCxNQUFNWCxTQUFTLElBQUksQ0FBQ1ksU0FBUyxJQUN2QlYsWUFBWSxJQUFJLENBQUNXLFlBQVksSUFDN0JDLE9BQU87WUFDTGQ7WUFDQUU7UUFDRjtRQUVOLE9BQU9ZO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVmLE9BQU8sRUFBRTtRQUM3QixPQUFPaUIsSUFBQUEsb0JBQVcsRUFBQyxDQUFDakI7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHWSxNQUN4QlAsaUJBQWlCVSxJQUFBQSxrQ0FBcUIsRUFBQ2pCLFFBQVFELFVBQy9DRSxPQUFPTSxnQkFDUEosT0FBT2UsSUFBQUEsK0JBQXNCLEVBQUNYLGdCQUFnQlI7WUFFcERBLFVBQVUsTUFBTSxHQUFHO1lBRW5CLE1BQU1vQixhQUFhLElBQUl0QixXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztZQUVwRSxPQUFPZ0I7UUFDVCxHQUFHcEI7SUFDTDtBQUNGIn0=