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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, name = (0, _element.nameFromProcedureReferenceNode)(procedureReferenceNode, context);
            context = null;
            const procedureReference = new ProcedureReference(context, string, node, name);
            return procedureReference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVJlZmVyZW5jZU5vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVOYW1lKCkge1xuICAgIGNvbnN0IHByb2NlZHVyZU5hbWUgPSB0aGlzLm5hbWU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gICAgICByZXR1cm4gcHJvY2VkdXJlUmVmZXJlbmNlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9jZWR1cmVSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXROb2RlIiwicHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldFByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb2NlZHVyZVJlZmVyZW5jZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNrQjt5QkFDQztNQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsdUJBQU87SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLDRCQUE0QjtRQUMxQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMseUJBQXlCTCxNQUFPLEdBQUc7UUFFekMsT0FBT0s7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ04sSUFBSSxFQUFHLEdBQUc7UUFFckMsT0FBT007SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTVQsU0FBUyxJQUFJLENBQUNVLFNBQVMsSUFDdkJDLE9BQU87WUFDTFg7UUFDRjtRQUVOLE9BQU9XO0lBQ1Q7SUFFQSxPQUFPVCxPQUFPLHFCQUFxQjtJQUVuQyxPQUFPVSxTQUFTRCxJQUFJLEVBQUVaLE9BQU8sRUFBRTtRQUM3QixPQUFPYyxJQUFBQSxvQkFBVyxFQUFDLENBQUNkO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdXLE1BQ2JMLHlCQUF5QlEsSUFBQUEsMENBQTZCLEVBQUNkLFFBQVFELFVBQy9ERSxPQUFPSyx3QkFDUEosT0FBT2EsSUFBQUEsdUNBQThCLEVBQUNULHdCQUF3QlA7WUFFcEVBLFVBQVU7WUFFVixNQUFNaUIscUJBQXFCLElBQUluQixtQkFBbUJFLFNBQVNDLFFBQVFDLE1BQU1DO1lBRXpFLE9BQU9jO1FBQ1QsR0FBR2pCO0lBQ0w7QUFDRiJ9