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
    constructor(context, string, node, name, identifier){
        super(context, string, node, identifier);
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
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Parameter";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, name = (0, _element.nameFromParaneterNode)(parameterNode, context), identifier = (0, _element.identifierFromParameterNode)(parameterNode, context);
            context = null;
            const parameter = new Parameter(context, string, node, name, identifier);
            return parameter;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21QYXJhbmV0ZXJOb2RlLCBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxuXG4gIGZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgcHJpbWl0aXZlID0gc3Vic3RpdHV0aW9uLmdldFByaW1pdGl2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gaW5zdGFudGlhdGVQYXJhbWV0ZXIoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKTtcblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUGFyYW1ldGVyIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImlkZW50aWZpZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsImdldFBhcmFtZXRlck5vZGUiLCJnZXROb2RlIiwicGFyYW1ldGVyTm9kZSIsImZpbmRQcmltaXRpdmUiLCJzdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlIiwicGFyYW1ldGVyIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlUGFyYW1ldGVyIiwiZ2V0UHJpbWl0aXZlIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVBhcmFtZXRlciIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsImlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNTO3lCQUM4QjtNQUVuRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNRTtRQUU3QixJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsZ0JBQWdCUCxNQUFNLEdBQUc7UUFFL0IsT0FBT087SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUVYLE9BQU8sRUFBRTtRQUNwQyxJQUFJWSxZQUFZO1FBRWhCLE1BQU1DLFlBQVksSUFBSSxFQUNoQkMsZUFBZUgsY0FBY0ksSUFBSSxDQUFDLENBQUNEO1lBQ2pDLE1BQU1FLGtDQUFrQ0YsYUFBYUcsZ0JBQWdCLENBQUNKO1lBRXRFLElBQUlHLGlDQUFpQztnQkFDbkMsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLElBQUlGLGlCQUFpQixNQUFNO1lBQ3pCRixZQUFZRSxhQUFhSSxZQUFZLENBQUNsQjtRQUN4QztRQUVBLE9BQU9ZO0lBQ1Q7SUFFQU8sU0FBUztRQUNQLE1BQU1sQixTQUFTLElBQUksQ0FBQ21CLFNBQVMsSUFDdkJDLE9BQU87WUFDTHBCO1FBQ0Y7UUFFTixPQUFPb0I7SUFDVDtJQUVBLE9BQU9sQixPQUFPLFlBQVk7SUFFMUIsT0FBT21CLFNBQVNELElBQUksRUFBRXJCLE9BQU8sRUFBRTtRQUM3QixPQUFPdUIsSUFBQUEsb0JBQVcsRUFBQyxDQUFDdkI7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR29CLE1BQ2JaLGdCQUFnQmUsSUFBQUEsaUNBQW9CLEVBQUN2QixRQUFRRCxVQUM3Q0UsT0FBT08sZUFDUE4sT0FBT3NCLElBQUFBLDhCQUFxQixFQUFDaEIsZUFBZVQsVUFDNUNJLGFBQWFzQixJQUFBQSxvQ0FBMkIsRUFBQ2pCLGVBQWVUO1lBRTlEQSxVQUFVO1lBRVYsTUFBTWEsWUFBWSxJQUFJZixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztZQUU3RCxPQUFPUztRQUNULEdBQUdiO0lBQ0w7QUFDRiJ9