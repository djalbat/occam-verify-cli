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
const _breakPoint = require("../utilities/breakPoint");
const _default = (0, _elements.define)(class TypePrefix extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name){
        super(context, string, node, breakPoint);
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
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, breakPoint, name);
            return typePrefix;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOb2RlO1xuICB9XG5cbiAgZ2V0UHJlZml4TmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gcHJlZml4TmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgdHlwZVByZWZpeE5vZGUgPSBpbnN0YW50aWF0ZVR5cGVQcmVmaXgoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gICAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Tm9kZSIsInR5cGVQcmVmaXhOb2RlIiwiZ2V0UHJlZml4TmFtZSIsInByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJkZWJ1ZyIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGVQcmVmaXgiLCJicmVha1BvaW50RnJvbUpTT04iLCJuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0s7NkJBQ1U7eUJBQ0M7NEJBQ3dCO01BRS9ELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGlCQUFpQk4sTUFBTyxHQUFHO1FBRWpDLE9BQU9NO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsYUFBYSxJQUFJLENBQUNOLElBQUksRUFBRyxHQUFHO1FBRWxDLE9BQU9NO0lBQ1Q7SUFFQUMsc0JBQXNCQyxjQUFjLEVBQUU7UUFDcEMsTUFBTUMsMkJBQTRCLElBQUksQ0FBQ1QsSUFBSSxLQUFLUTtRQUVoRCxPQUFPQztJQUNUO0lBRUFDLE9BQU9kLE9BQU8sRUFBRTtRQUNkLElBQUllLFdBQVc7UUFFZixNQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQ2pCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGlCQUFpQixnQkFBZ0IsQ0FBQztRQUVsRSxNQUFNRyxhQUFhbkIsUUFBUW9CLGFBQWE7UUFFeEMsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCLE1BQU1QLGlCQUFpQixJQUFJLENBQUNSLElBQUksRUFDMUJpQixvQkFBb0JyQixRQUFRc0IsbUNBQW1DLENBQUNWO1lBRXRFLElBQUksQ0FBQ1MsbUJBQW1CO2dCQUN0QixNQUFNRSxrQkFBa0JYLGdCQUNsQlksY0FBY3hCLFFBQVF5Qiw4QkFBOEIsQ0FBQ0Y7Z0JBRTNELElBQUksQ0FBQ0MsYUFBYTtvQkFDaEJULFdBQVc7Z0JBQ2IsT0FBTztvQkFDTGYsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRVYsaUJBQWlCLDBCQUEwQixDQUFDO2dCQUNwRTtZQUNGLE9BQU87Z0JBQ0xoQixRQUFRMEIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVixpQkFBaUIsaUNBQWlDLENBQUM7WUFDM0U7UUFDRixPQUFPO1lBQ0xoQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsMkJBQTJCLEVBQUVGLGlCQUFpQixjQUFjLENBQUM7UUFDOUU7UUFFQSxJQUFJRCxVQUFVO1lBQ1pmLFFBQVEwQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVYsaUJBQWlCLGNBQWMsQ0FBQztRQUNwRTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPWCxPQUFPLGFBQWE7SUFFM0J1QixTQUFTO1FBQ1AsTUFBTTFCLFNBQVMsSUFBSSxDQUFDZ0IsU0FBUztRQUU3QixJQUFJZDtRQUVKQSxhQUFhLElBQUksQ0FBQ3lCLGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQzNCO1FBRWxEQSxhQUFhMEIsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUUsT0FBTztZQUNYOUI7WUFDQUU7UUFDRjtRQUVBLE9BQU80QjtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFL0IsT0FBTyxFQUFFO1FBQzdCLE9BQU9pQyxJQUFBQSxvQkFBVyxFQUFDLENBQUNqQztZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHOEIsTUFDYnZCLGlCQUFpQjBCLElBQUFBLGtDQUFxQixFQUFDakMsUUFBUUQsVUFDL0NFLE9BQU9NLGdCQUNQTCxhQUFhZ0MsSUFBQUEsOEJBQWtCLEVBQUNKLE9BQ2hDM0IsT0FBT2dDLElBQUFBLCtCQUFzQixFQUFDNUIsZ0JBQWdCUjtZQUVwREEsVUFBVSxNQUFNLEdBQUc7WUFFbkIsTUFBTW1CLGFBQWEsSUFBSXJCLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDO1lBRXJFLE9BQU9lO1FBQ1QsR0FBR25CO0lBQ0w7QUFDRiJ9