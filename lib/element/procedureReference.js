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
    constructor(context, string, node, breakPoint, name){
        super(context, string, node, breakPoint);
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
    static name = "ProcedureReference";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, name = (0, _element.nameFromProcedureReferenceNode)(procedureReferenceNode, context);
            context = null;
            const procedureReference = new ProcedureReference(context, string, node, breakPoint, name);
            return procedureReference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVOYW1lKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLm5hbWU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVOYW1lO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVJlZmVyZW5jZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IGluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZShwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb2NlZHVyZVJlZmVyZW5jZSA9IG5ldyBQcm9jZWR1cmVSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvY2VkdXJlUmVmZXJlbmNlIiwibmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ2tCO3lCQUNDO01BRS9DLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyx1QkFBTztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSw0QkFBNEI7UUFDMUIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLHlCQUF5Qk4sTUFBTyxHQUFHO1FBRXpDLE9BQU9NO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNOLElBQUksRUFBRyxHQUFHO1FBRXJDLE9BQU9NO0lBQ1Q7SUFFQSxPQUFPTixPQUFPLHFCQUFxQjtJQUVuQ08sU0FBUztRQUNQLE1BQU1WLFNBQVMsSUFBSSxDQUFDVyxTQUFTO1FBRTdCLElBQUlUO1FBRUpBLGFBQWEsSUFBSSxDQUFDVSxhQUFhO1FBRS9CLE1BQU1DLGlCQUFpQlgsV0FBV1EsTUFBTTtRQUV4Q1IsYUFBYVcsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUMsT0FBTztZQUNYZDtZQUNBRTtRQUNGO1FBRUEsT0FBT1k7SUFDVDtJQUVBLE9BQU9DLFNBQVNELElBQUksRUFBRWYsT0FBTyxFQUFFO1FBQzdCLE9BQU9pQixJQUFBQSxvQkFBVyxFQUFDLENBQUNqQjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRUUsVUFBVSxFQUFFLEdBQUdZLE1BQ3pCUCx5QkFBeUJVLElBQUFBLDBDQUE2QixFQUFDakIsUUFBUUQsVUFDL0RFLE9BQU9NLHdCQUNQSixPQUFPZSxJQUFBQSx1Q0FBOEIsRUFBQ1gsd0JBQXdCUjtZQUVwRUEsVUFBVTtZQUVWLE1BQU1vQixxQkFBcUIsSUFBSXRCLG1CQUFtQkUsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7WUFFckYsT0FBT2dCO1FBQ1QsR0FBR3BCO0lBQ0w7QUFDRiJ9