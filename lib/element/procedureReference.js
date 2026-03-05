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
const _default = (0, _elements.define)(class ProcedureReference extends _occamlanguages.Element {
    constructor(context, string, node, name){
        super(context, string, node);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getProcedureReferenceNode() {
        const node = this.getNode(), procedureReferenceNode = node; ///
        return procedureReferenceNode;
    }
    getProcedureName() {
        const procedureName = this.name; ///
        return procedureName;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "ProcedureReference";
    static fromJSON(json, context) {
        const procedureReference = (0, _context.literally)((context)=>{
            const { string } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, name = (0, _element.nameFromProcedureReferenceNode)(procedureReferenceNode, context);
            context = null;
            const procedureReference = new ProcedureReference(context, string, node, name);
            return procedureReference;
        }, context);
        return procedureReference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvY2VkdXJlUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5uYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2UgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZSA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJwcm9jZWR1cmVSZWZlcmVuY2UiLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVByb2NlZHVyZVJlZmVyZW5jZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNHOzZCQUNvQjt5QkFDQztNQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsdUJBQU87SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLDRCQUE0QjtRQUMxQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMseUJBQXlCTCxNQUFPLEdBQUc7UUFFekMsT0FBT0s7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ04sSUFBSSxFQUFHLEdBQUc7UUFFckMsT0FBT007SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTVQsU0FBUyxJQUFJLENBQUNVLFNBQVMsSUFDdkJDLE9BQU87WUFDTFg7UUFDRjtRQUVOLE9BQU9XO0lBQ1Q7SUFFQSxPQUFPVCxPQUFPLHFCQUFxQjtJQUVuQyxPQUFPVSxTQUFTRCxJQUFJLEVBQUVaLE9BQU8sRUFBRTtRQUM3QixNQUFNYyxxQkFBcUJDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2Y7WUFDcEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1csTUFDYkwseUJBQXlCUyxJQUFBQSwwQ0FBNkIsRUFBQ2YsUUFBUUQsVUFDL0RFLE9BQU9LLHdCQUNQSixPQUFPYyxJQUFBQSx1Q0FBOEIsRUFBQ1Ysd0JBQXdCUDtZQUVwRUEsVUFBVTtZQUVWLE1BQU1jLHFCQUFxQixJQUFJaEIsbUJBQW1CRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RSxPQUFPVztRQUNULEdBQUdkO1FBRUgsT0FBT2M7SUFDVDtBQUNGIn0=