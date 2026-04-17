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
            const { string } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), name = (0, _element.nameFromProcedureReferenceNode)(procedureReferenceNode, context);
            context = null;
            const procedureReference = new ProcedureReference(context, string, node, breakPoint, name);
            return procedureReference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVOYW1lKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLm5hbWU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVOYW1lO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVJlZmVyZW5jZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHByb2NlZHVyZVJlZmVyZW5jZU5vZGUgPSBpbnN0YW50aWF0ZVByb2NlZHVyZVJlZmVyZW5jZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gICAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibmFtZSIsImdldE5hbWUiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInRvSlNPTiIsImdldFN0cmluZyIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb2NlZHVyZVJlZmVyZW5jZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLOzZCQUNrQjt5QkFDQzs0QkFDZ0I7TUFFL0QsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLHVCQUFPO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLDRCQUE0QjtRQUMxQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMseUJBQXlCTixNQUFPLEdBQUc7UUFFekMsT0FBT007SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ04sSUFBSSxFQUFHLEdBQUc7UUFFckMsT0FBT007SUFDVDtJQUVBLE9BQU9OLE9BQU8scUJBQXFCO0lBRW5DTyxTQUFTO1FBQ1AsTUFBTVYsU0FBUyxJQUFJLENBQUNXLFNBQVM7UUFFN0IsSUFBSVQ7UUFFSkEsYUFBYSxJQUFJLENBQUNVLGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQ1o7UUFFbERBLGFBQWFXLGdCQUFpQixHQUFHO1FBRWpDLE1BQU1FLE9BQU87WUFDWGY7WUFDQUU7UUFDRjtRQUVBLE9BQU9hO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVoQixPQUFPLEVBQUU7UUFDN0IsT0FBT2tCLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2xCO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdlLE1BQ2JSLHlCQUF5QlcsSUFBQUEsMENBQTZCLEVBQUNsQixRQUFRRCxVQUMvREUsT0FBT00sd0JBQ1BMLGFBQWFpQixJQUFBQSw4QkFBa0IsRUFBQ0osT0FDaENaLE9BQU9pQixJQUFBQSx1Q0FBOEIsRUFBQ2Isd0JBQXdCUjtZQUVwRUEsVUFBVTtZQUVWLE1BQU1zQixxQkFBcUIsSUFBSXhCLG1CQUFtQkUsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7WUFFckYsT0FBT2tCO1FBQ1QsR0FBR3RCO0lBQ0w7QUFDRiJ9