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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IGluc3RhbnRpYXRlVHlwZVByZWZpeChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUpO1xuXG4gICAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXROb2RlIiwidHlwZVByZWZpeE5vZGUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJkZWJ1ZyIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUeXBlUHJlZml4IiwibmFtZUZyb21UeXBlUHJlZml4Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNVO3lCQUNDO01BRXZDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBRTtRQUNsRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGlCQUFpQk4sTUFBTyxHQUFHO1FBRWpDLE9BQU9NO0lBQ1Q7SUFFQUMsc0JBQXNCQyxjQUFjLEVBQUU7UUFDcEMsTUFBTUMsMkJBQTRCLElBQUksQ0FBQ1AsSUFBSSxLQUFLTTtRQUVoRCxPQUFPQztJQUNUO0lBRUFDLE9BQU9aLE9BQU8sRUFBRTtRQUNkLElBQUlhLFdBQVc7UUFFZixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ2YsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsaUJBQWlCLGdCQUFnQixDQUFDO1FBRWxFLE1BQU1HLGFBQWFqQixRQUFRa0IsYUFBYTtRQUV4QyxJQUFJRCxlQUFlLE1BQU07WUFDdkIsTUFBTVAsaUJBQWlCLElBQUksQ0FBQ04sSUFBSSxFQUMxQmUsb0JBQW9CbkIsUUFBUW9CLG1DQUFtQyxDQUFDVjtZQUV0RSxJQUFJLENBQUNTLG1CQUFtQjtnQkFDdEIsTUFBTUUsa0JBQWtCWCxnQkFDbEJZLGNBQWN0QixRQUFRdUIsOEJBQThCLENBQUNGO2dCQUUzRCxJQUFJLENBQUNDLGFBQWE7b0JBQ2hCVCxXQUFXO2dCQUNiLE9BQU87b0JBQ0xiLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVWLGlCQUFpQiwwQkFBMEIsQ0FBQztnQkFDcEU7WUFDRixPQUFPO2dCQUNMZCxRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVixpQkFBaUIsaUNBQWlDLENBQUM7WUFDM0U7UUFDRixPQUFPO1lBQ0xkLFFBQVFnQixLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUYsaUJBQWlCLGNBQWMsQ0FBQztRQUM5RTtRQUVBLElBQUlELFVBQVU7WUFDWmIsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVixpQkFBaUIsY0FBYyxDQUFDO1FBQ3BFO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9ULE9BQU8sYUFBYTtJQUUzQnFCLFNBQVM7UUFDUCxNQUFNeEIsU0FBUyxJQUFJLENBQUNjLFNBQVMsSUFDdkJaLFlBQVksSUFBSSxDQUFDdUIsWUFBWSxJQUM3QkMsT0FBTztZQUNMMUI7WUFDQUU7UUFDRjtRQUVOLE9BQU93QjtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFM0IsT0FBTyxFQUFFO1FBQzdCLE9BQU82QixJQUFBQSxvQkFBVyxFQUFDLENBQUM3QjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUd3QixNQUN4Qm5CLGlCQUFpQnNCLElBQUFBLGtDQUFxQixFQUFDN0IsUUFBUUQsVUFDL0NFLE9BQU9NLGdCQUNQSixPQUFPMkIsSUFBQUEsK0JBQXNCLEVBQUN2QixnQkFBZ0JSO1lBRXBEQSxVQUFVLE1BQU0sR0FBRztZQUVuQixNQUFNaUIsYUFBYSxJQUFJbkIsV0FBV0UsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7WUFFcEUsT0FBT2E7UUFDVCxHQUFHakI7SUFDTDtBQUNGIn0=