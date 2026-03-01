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
const _json = require("../utilities/json");
const _instantiate = require("../process/instantiate");
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
        const nameJSON = (0, _json.nameToNameJSON)(this.name), name = nameJSON, string = this.getString(), json = {
            string,
            name
        };
        return json;
    }
    static name = "ProcedureReference";
    static fromJSON(json, context) {
        const procedureReference = (0, _context.literally)((context)=>{
            const { string } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, name = (0, _json.nameFromJSON)(json, context), procedureReference = new ProcedureReference(context, string, node, name);
            return procedureReference;
        }, context);
        return procedureReference;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IG5hbWVGcm9tSlNPTiwgbmFtZVRvTmFtZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb2NlZHVyZVJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBuYW1lVG9OYW1lSlNPTih0aGlzLm5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2UgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZSA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJ0b0pTT04iLCJuYW1lSlNPTiIsIm5hbWVUb05hbWVKU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwicHJvY2VkdXJlUmVmZXJlbmNlIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2UiLCJuYW1lRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDRztzQkFDbUI7NkJBQ0M7TUFFOUMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLHVCQUFPO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSw0QkFBNEI7UUFDMUIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLHlCQUF5QkwsTUFBTyxHQUFHO1FBRXpDLE9BQU9LO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNOLElBQUksRUFBRyxHQUFHO1FBRXJDLE9BQU9NO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDVCxJQUFJLEdBQ25DQSxPQUFPUSxVQUNQVixTQUFTLElBQUksQ0FBQ1ksU0FBUyxJQUN2QkMsT0FBTztZQUNMYjtZQUNBRTtRQUNGO1FBRU4sT0FBT1c7SUFDVDtJQUVBLE9BQU9YLE9BQU8scUJBQXFCO0lBRW5DLE9BQU9ZLFNBQVNELElBQUksRUFBRWQsT0FBTyxFQUFFO1FBQzdCLE1BQU1nQixxQkFBcUJDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2pCO1lBQ3BDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdhLE1BQ2JQLHlCQUF5QlcsSUFBQUEsMENBQTZCLEVBQUNqQixRQUFRRCxVQUMvREUsT0FBT0ssd0JBQ1BKLE9BQU9nQixJQUFBQSxrQkFBWSxFQUFDTCxNQUFNZCxVQUMxQmdCLHFCQUFxQixJQUFJbEIsbUJBQW1CRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RSxPQUFPYTtRQUNULEdBQUdoQjtRQUVILE9BQU9nQjtJQUNUO0FBQ0YifQ==