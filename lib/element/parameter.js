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
const _default = (0, _elements.define)(class Parameter extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name, identifier){
        super(context, string, node, breakPoint);
        this.name = name;
        this.identifier = identifier;
    }
    getName() {
        return this.name;
    }
    getIdentifier() {
        return this.identifier;
    }
    getParameterNode() {
        const node = this.getNode(), parameterNode = node; ///
        return parameterNode;
    }
    findPrimitive(substitutions, context) {
        let primitive = null;
        const parameter = this, substitution = substitutions.find((substitution)=>{
            const substitutionComparesToParameter = substitution.compareParameter(parameter);
            if (substitutionComparesToParameter) {
                return true;
            }
        }) || null;
        if (substitution !== null) {
            primitive = substitution.getPrimitive(context);
        }
        return primitive;
    }
    static name = "Parameter";
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
            const { string } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), name = (0, _element.nameFromParaneterNode)(parameterNode, context), identifier = (0, _element.identifierFromParameterNode)(parameterNode, context);
            context = null;
            const parameter = new Parameter(context, string, node, breakPoint, name, identifier);
            return parameter;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21QYXJhbmV0ZXJOb2RlLCBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxuXG4gIGZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgcHJpbWl0aXZlID0gc3Vic3RpdHV0aW9uLmdldFByaW1pdGl2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHBhcmFtZXRlck5vZGUgPSBpbnN0YW50aWF0ZVBhcmFtZXRlcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUGFyYW1ldGVyIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5hbWUiLCJpZGVudGlmaWVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJnZXRQYXJhbWV0ZXJOb2RlIiwiZ2V0Tm9kZSIsInBhcmFtZXRlck5vZGUiLCJmaW5kUHJpbWl0aXZlIiwic3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZSIsInBhcmFtZXRlciIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVBhcmFtZXRlciIsImdldFByaW1pdGl2ZSIsInRvSlNPTiIsImdldFN0cmluZyIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVBhcmFtZXRlciIsImJyZWFrUG9pbnRGcm9tSlNPTiIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsImlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLOzZCQUNTO3lCQUM4Qjs0QkFDSjtNQUUvRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUMvRCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxnQkFBZ0JSLE1BQU0sR0FBRztRQUUvQixPQUFPUTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRVosT0FBTyxFQUFFO1FBQ3BDLElBQUlhLFlBQVk7UUFFaEIsTUFBTUMsWUFBWSxJQUFJLEVBQ2hCQyxlQUFlSCxjQUFjSSxJQUFJLENBQUMsQ0FBQ0Q7WUFDakMsTUFBTUUsa0NBQWtDRixhQUFhRyxnQkFBZ0IsQ0FBQ0o7WUFFdEUsSUFBSUcsaUNBQWlDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosSUFBSUYsaUJBQWlCLE1BQU07WUFDekJGLFlBQVlFLGFBQWFJLFlBQVksQ0FBQ25CO1FBQ3hDO1FBRUEsT0FBT2E7SUFDVDtJQUVBLE9BQU9ULE9BQU8sWUFBWTtJQUUxQmdCLFNBQVM7UUFDUCxNQUFNbkIsU0FBUyxJQUFJLENBQUNvQixTQUFTO1FBRTdCLElBQUlsQjtRQUVKQSxhQUFhLElBQUksQ0FBQ21CLGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQ3JCO1FBRWxEQSxhQUFhb0IsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUUsT0FBTztZQUNYeEI7WUFDQUU7UUFDRjtRQUVBLE9BQU9zQjtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFekIsT0FBTyxFQUFFO1FBQzdCLE9BQU8yQixJQUFBQSxvQkFBVyxFQUFDLENBQUMzQjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHd0IsTUFDYmYsZ0JBQWdCa0IsSUFBQUEsaUNBQW9CLEVBQUMzQixRQUFRRCxVQUM3Q0UsT0FBT1EsZUFDUFAsYUFBYTBCLElBQUFBLDhCQUFrQixFQUFDSixPQUNoQ3JCLE9BQU8wQixJQUFBQSw4QkFBcUIsRUFBQ3BCLGVBQWVWLFVBQzVDSyxhQUFhMEIsSUFBQUEsb0NBQTJCLEVBQUNyQixlQUFlVjtZQUU5REEsVUFBVTtZQUVWLE1BQU1jLFlBQVksSUFBSWhCLFVBQVVFLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLE1BQU1DO1lBRXpFLE9BQU9TO1FBQ1QsR0FBR2Q7SUFDTDtBQUNGIn0=