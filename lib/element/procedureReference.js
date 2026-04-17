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
    constructor(context, string, node, lineIndex, name){
        super(context, string, node, lineIndex);
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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, procedureReferenceNode = (0, _instantiate.instantiateProcedureReference)(string, context), node = procedureReferenceNode, name = (0, _element.nameFromProcedureReferenceNode)(procedureReferenceNode, context);
            context = null;
            const procedureReference = new ProcedureReference(context, string, node, lineIndex, name);
            return procedureReference;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5uYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVSZWZlcmVuY2VcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlID0gaW5zdGFudGlhdGVQcm9jZWR1cmVSZWZlcmVuY2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9jZWR1cmVSZWZlcmVuY2VOb2RlKHByb2NlZHVyZVJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvY2VkdXJlUmVmZXJlbmNlID0gbmV3IFByb2NlZHVyZVJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSk7XG5cbiAgICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2U7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb2NlZHVyZVJlZmVyZW5jZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJwcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb2NlZHVyZVJlZmVyZW5jZSIsIm5hbWVGcm9tUHJvY2VkdXJlUmVmZXJlbmNlTm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNrQjt5QkFDQztNQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsdUJBQU87SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDbEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsNEJBQTRCO1FBQzFCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyx5QkFBeUJOLE1BQU8sR0FBRztRQUV6QyxPQUFPTTtJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDTixJQUFJLEVBQUcsR0FBRztRQUVyQyxPQUFPTTtJQUNUO0lBRUEsT0FBT04sT0FBTyxxQkFBcUI7SUFFbkNPLFNBQVM7UUFDUCxNQUFNVixTQUFTLElBQUksQ0FBQ1csU0FBUyxJQUN2QlQsWUFBWSxJQUFJLENBQUNVLGFBQWEsSUFDOUJDLE9BQU87WUFDTGI7WUFDQUU7UUFDRjtRQUVOLE9BQU9XO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVkLE9BQU8sRUFBRTtRQUM3QixPQUFPZ0IsSUFBQUEsb0JBQVcsRUFBQyxDQUFDaEI7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHVyxNQUN4Qk4seUJBQXlCUyxJQUFBQSwwQ0FBNkIsRUFBQ2hCLFFBQVFELFVBQy9ERSxPQUFPTSx3QkFDUEosT0FBT2MsSUFBQUEsdUNBQThCLEVBQUNWLHdCQUF3QlI7WUFFcEVBLFVBQVU7WUFFVixNQUFNbUIscUJBQXFCLElBQUlyQixtQkFBbUJFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1lBRXBGLE9BQU9lO1FBQ1QsR0FBR25CO0lBQ0w7QUFDRiJ9