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
        const typePrefix = (0, _context.literally)((context)=>{
            const { string } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, name);
            return typePrefix;
        }, context);
        return typePrefix;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVR5cGVQcmVmaXggfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21UeXBlUHJlZml4Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZVByZWZpeCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gaW5zdGFudGlhdGVUeXBlUHJlZml4KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdHlwZVByZWZpeE5vZGUsIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZVByZWZpeE5vZGUodHlwZVByZWZpeE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGVQcmVmaXggPSBuZXcgVHlwZVByZWZpeChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gICAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImdldE5hbWUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4Tm9kZSIsImNvbXBhcmVUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwidHlwZVByZWZpeCIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlVHlwZVByZWZpeCIsIm5hbWVGcm9tVHlwZVByZWZpeE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDRzs2QkFDWTt5QkFDQztNQUV2QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLG9CQUFvQjtRQUNsQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7UUFFakMsT0FBT0s7SUFDVDtJQUVBQyxzQkFBc0JDLGNBQWMsRUFBRTtRQUNwQyxNQUFNQywyQkFBNEIsSUFBSSxDQUFDUCxJQUFJLEtBQUtNO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1WLFNBQVMsSUFBSSxDQUFDVyxTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xaO1FBQ0Y7UUFFTixPQUFPWTtJQUNUO0lBRUEsT0FBT1YsT0FBTyxhQUFhO0lBRTNCLE9BQU9XLFNBQVNELElBQUksRUFBRWIsT0FBTyxFQUFFO1FBQzdCLE1BQU1lLGFBQWFDLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2hCO1lBQWEsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1ksTUFDdEROLGlCQUFpQlUsSUFBQUEsa0NBQXFCLEVBQUNoQixRQUFRRCxVQUMvQ0UsT0FBT0ssZ0JBQ1BKLE9BQU9lLElBQUFBLCtCQUFzQixFQUFDWCxnQkFBZ0JQO1lBRXBEQSxVQUFVLE1BQU0sR0FBRztZQUVuQixNQUFNZSxhQUFhLElBQUlqQixXQUFXRSxTQUFTQyxRQUFRQyxNQUFNQztZQUV6RCxPQUFPWTtRQUNULEdBQUdmO1FBRUgsT0FBT2U7SUFDVDtBQUNGIn0=