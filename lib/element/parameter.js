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
            const { string, breakPoint } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, name = (0, _element.nameFromParaneterNode)(parameterNode, context), identifier = (0, _element.identifierFromParameterNode)(parameterNode, context);
            context = null;
            const parameter = new Parameter(context, string, node, breakPoint, name, identifier);
            return parameter;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21QYXJhbmV0ZXJOb2RlLCBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxuXG4gIGZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgcHJpbWl0aXZlID0gc3Vic3RpdHV0aW9uLmdldFByaW1pdGl2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IGluc3RhbnRpYXRlUGFyYW1ldGVyKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJuYW1lIiwiaWRlbnRpZmllciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UGFyYW1ldGVyTm9kZSIsImdldE5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiZmluZFByaW1pdGl2ZSIsInN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVQYXJhbWV0ZXIiLCJnZXRQcmltaXRpdmUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUGFyYW1ldGVyIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwiaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ1M7eUJBQzhCO01BRW5FLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQy9ELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxtQkFBbUI7UUFDakIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGdCQUFnQlIsTUFBTSxHQUFHO1FBRS9CLE9BQU9RO0lBQ1Q7SUFFQUMsY0FBY0MsYUFBYSxFQUFFWixPQUFPLEVBQUU7UUFDcEMsSUFBSWEsWUFBWTtRQUVoQixNQUFNQyxZQUFZLElBQUksRUFDaEJDLGVBQWVILGNBQWNJLElBQUksQ0FBQyxDQUFDRDtZQUNqQyxNQUFNRSxrQ0FBa0NGLGFBQWFHLGdCQUFnQixDQUFDSjtZQUV0RSxJQUFJRyxpQ0FBaUM7Z0JBQ25DLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixJQUFJRixpQkFBaUIsTUFBTTtZQUN6QkYsWUFBWUUsYUFBYUksWUFBWSxDQUFDbkI7UUFDeEM7UUFFQSxPQUFPYTtJQUNUO0lBRUEsT0FBT1QsT0FBTyxZQUFZO0lBRTFCZ0IsU0FBUztRQUNQLE1BQU1uQixTQUFTLElBQUksQ0FBQ29CLFNBQVM7UUFFN0IsSUFBSWxCO1FBRUpBLGFBQWEsSUFBSSxDQUFDbUIsYUFBYTtRQUUvQixNQUFNQyxpQkFBaUJwQixXQUFXaUIsTUFBTTtRQUV4Q2pCLGFBQWFvQixnQkFBaUIsR0FBRztRQUVqQyxNQUFNQyxPQUFPO1lBQ1h2QjtZQUNBRTtRQUNGO1FBRUEsT0FBT3FCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUV4QixPQUFPLEVBQUU7UUFDN0IsT0FBTzBCLElBQUFBLG9CQUFXLEVBQUMsQ0FBQzFCO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxVQUFVLEVBQUUsR0FBR3FCLE1BQ3pCZCxnQkFBZ0JpQixJQUFBQSxpQ0FBb0IsRUFBQzFCLFFBQVFELFVBQzdDRSxPQUFPUSxlQUNQTixPQUFPd0IsSUFBQUEsOEJBQXFCLEVBQUNsQixlQUFlVixVQUM1Q0ssYUFBYXdCLElBQUFBLG9DQUEyQixFQUFDbkIsZUFBZVY7WUFFOURBLFVBQVU7WUFFVixNQUFNYyxZQUFZLElBQUloQixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQyxNQUFNQztZQUV6RSxPQUFPUztRQUNULEdBQUdkO0lBQ0w7QUFDRiJ9