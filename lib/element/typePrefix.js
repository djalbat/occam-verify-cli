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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4TmFtZSA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByZWZpeE5hbWU7XG4gIH1cblxuICBjb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlUHJlZml4TmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBwYWNrYWdlIGFscmVhZHkgaGFzIGEgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmApO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgdHlwZVByZWZpeE5vZGUgPSBpbnN0YW50aWF0ZVR5cGVQcmVmaXgoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXgiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Tm9kZSIsInR5cGVQcmVmaXhOb2RlIiwiZ2V0UHJlZml4TmFtZSIsInByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJkZWJ1ZyIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUeXBlUHJlZml4IiwibmFtZUZyb21UeXBlUHJlZml4Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNVO3lCQUNDO01BRXZDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBRTtRQUNsRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGlCQUFpQk4sTUFBTyxHQUFHO1FBRWpDLE9BQU9NO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxJQUFJLENBQUNOLElBQUksRUFBRyxHQUFHO1FBRWxDLE9BQU9NO0lBQ1Q7SUFFQUMsc0JBQXNCQyxjQUFjLEVBQUU7UUFDcEMsTUFBTUMsMkJBQTRCLElBQUksQ0FBQ1QsSUFBSSxLQUFLUTtRQUVoRCxPQUFPQztJQUNUO0lBRUFDLE9BQU9kLE9BQU8sRUFBRTtRQUNkLElBQUllLFdBQVc7UUFFZixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ2pCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGlCQUFpQixnQkFBZ0IsQ0FBQztRQUVsRSxNQUFNRyxhQUFhbkIsUUFBUW9CLGFBQWE7UUFFeEMsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCLE1BQU1QLGlCQUFpQixJQUFJLENBQUNSLElBQUksRUFDMUJpQixvQkFBb0JyQixRQUFRc0IsbUNBQW1DLENBQUNWO1lBRXRFLElBQUksQ0FBQ1MsbUJBQW1CO2dCQUN0QixNQUFNRSxrQkFBa0JYLGdCQUNsQlksY0FBY3hCLFFBQVF5Qiw4QkFBOEIsQ0FBQ0Y7Z0JBRTNELElBQUksQ0FBQ0MsYUFBYTtvQkFDaEJULFdBQVc7Z0JBQ2IsT0FBTztvQkFDTGYsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVYsaUJBQWlCLDBCQUEwQixDQUFDO2dCQUNwRTtZQUNGLE9BQU87Z0JBQ0xoQixRQUFRMEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVixpQkFBaUIsaUNBQWlDLENBQUM7WUFDM0U7UUFDRixPQUFPO1lBQ0xoQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsMkJBQTJCLEVBQUVGLGlCQUFpQixjQUFjLENBQUM7UUFDOUU7UUFFQSxJQUFJRCxVQUFVO1lBQ1pmLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVYsaUJBQWlCLGNBQWMsQ0FBQztRQUNwRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPWCxPQUFPLGFBQWE7SUFFM0J1QixTQUFTO1FBQ1AsTUFBTTFCLFNBQVMsSUFBSSxDQUFDZ0IsU0FBUyxJQUN2QmQsWUFBWSxJQUFJLENBQUN5QixZQUFZLElBQzdCQyxPQUFPO1lBQ0w1QjtZQUNBRTtRQUNGO1FBRU4sT0FBTzBCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUU3QixPQUFPLEVBQUU7UUFDN0IsT0FBTytCLElBQUFBLG9CQUFXLEVBQUMsQ0FBQy9CO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBRzBCLE1BQ3hCckIsaUJBQWlCd0IsSUFBQUEsa0NBQXFCLEVBQUMvQixRQUFRRCxVQUMvQ0UsT0FBT00sZ0JBQ1BKLE9BQU82QixJQUFBQSwrQkFBc0IsRUFBQ3pCLGdCQUFnQlI7WUFFcERBLFVBQVUsTUFBTSxHQUFHO1lBRW5CLE1BQU1tQixhQUFhLElBQUlyQixXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztZQUVwRSxPQUFPZTtRQUNULEdBQUduQjtJQUNMO0FBQ0YifQ==