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
    constructor(context, string, node, name){
        super(context, string, node);
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
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "TypePrefix";
    static fromJSON(json, context) {
        const typePrefix = (0, _context.instantiate)((context)=>{
            const { string } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, name);
            return typePrefix;
        }, context);
        return typePrefix;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOb2RlO1xuICB9XG5cbiAgY29tcGFyZVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZVByZWZpeE5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeFwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7Y29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IGluc3RhbnRpYXRlVHlwZVByZWZpeChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0VHlwZVByZWZpeE5vZGUiLCJnZXROb2RlIiwidHlwZVByZWZpeE5vZGUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsInRvSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsInR5cGVQcmVmaXgiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZVByZWZpeCIsIm5hbWVGcm9tVHlwZVByZWZpeE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDVTt5QkFDQztNQUV2QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRTtRQUNwQyxNQUFNQywyQkFBNEIsSUFBSSxDQUFDUCxJQUFJLEtBQUtNO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1WLFNBQVMsSUFBSSxDQUFDVyxTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xaO1FBQ0Y7UUFFTixPQUFPWTtJQUNUO0lBRUEsT0FBT1YsT0FBTyxhQUFhO0lBRTNCLE9BQU9XLFNBQVNELElBQUksRUFBRWIsT0FBTyxFQUFFO1FBQzdCLE1BQU1lLGFBQWFDLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2hCO1lBQWEsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1ksTUFDeEROLGlCQUFpQlUsSUFBQUEsa0NBQXFCLEVBQUNoQixRQUFRRCxVQUMvQ0UsT0FBT0ssZ0JBQ1BKLE9BQU9lLElBQUFBLCtCQUFzQixFQUFDWCxnQkFBZ0JQO1lBRXBEQSxVQUFVLE1BQU0sR0FBRztZQUVuQixNQUFNZSxhQUFhLElBQUlqQixXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RCxPQUFPWTtRQUNULEdBQUdmO1FBRUgsT0FBT2U7SUFDVDtBQUNGIn0=