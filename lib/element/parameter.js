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
    constructor(context, string, node, lineIndex, name, identifier){
        super(context, string, node, lineIndex);
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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, name = (0, _element.nameFromParaneterNode)(parameterNode, context), identifier = (0, _element.identifierFromParameterNode)(parameterNode, context);
            context = null;
            const parameter = new Parameter(context, string, node, lineIndex, name, identifier);
            return parameter;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21QYXJhbmV0ZXJOb2RlLCBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck5vZGU7XG4gIH1cblxuICBmaW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW1ldGVyID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByaW1pdGl2ZSA9IHN1YnN0aXR1dGlvbi5nZXRQcmltaXRpdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gaW5zdGFudGlhdGVQYXJhbWV0ZXIoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIGlkZW50aWZpZXIpO1xuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwiaWRlbnRpZmllciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UGFyYW1ldGVyTm9kZSIsImdldE5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiZmluZFByaW1pdGl2ZSIsInN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVQYXJhbWV0ZXIiLCJnZXRQcmltaXRpdmUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVBhcmFtZXRlciIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsImlkZW50aWZpZXJGcm9tUGFyYW1ldGVyTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNTO3lCQUM4QjtNQUVuRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxnQkFBZ0JSLE1BQU0sR0FBRztRQUUvQixPQUFPUTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRVosT0FBTyxFQUFFO1FBQ3BDLElBQUlhLFlBQVk7UUFFaEIsTUFBTUMsWUFBWSxJQUFJLEVBQ2hCQyxlQUFlSCxjQUFjSSxJQUFJLENBQUMsQ0FBQ0Q7WUFDakMsTUFBTUUsa0NBQWtDRixhQUFhRyxnQkFBZ0IsQ0FBQ0o7WUFFdEUsSUFBSUcsaUNBQWlDO2dCQUNuQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosSUFBSUYsaUJBQWlCLE1BQU07WUFDekJGLFlBQVlFLGFBQWFJLFlBQVksQ0FBQ25CO1FBQ3hDO1FBRUEsT0FBT2E7SUFDVDtJQUVBLE9BQU9ULE9BQU8sWUFBWTtJQUUxQmdCLFNBQVM7UUFDUCxNQUFNbkIsU0FBUyxJQUFJLENBQUNvQixTQUFTLElBQ3ZCbEIsWUFBWSxJQUFJLENBQUNtQixhQUFhLElBQzlCQyxPQUFPO1lBQ0x0QjtZQUNBRTtRQUNGO1FBRU4sT0FBT29CO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUV2QixPQUFPLEVBQUU7UUFDN0IsT0FBT3lCLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3pCO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBR29CLE1BQ3hCYixnQkFBZ0JnQixJQUFBQSxpQ0FBb0IsRUFBQ3pCLFFBQVFELFVBQzdDRSxPQUFPUSxlQUNQTixPQUFPdUIsSUFBQUEsOEJBQXFCLEVBQUNqQixlQUFlVixVQUM1Q0ssYUFBYXVCLElBQUFBLG9DQUEyQixFQUFDbEIsZUFBZVY7WUFFOURBLFVBQVU7WUFFVixNQUFNYyxZQUFZLElBQUloQixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQyxNQUFNQztZQUV4RSxPQUFPUztRQUNULEdBQUdkO0lBQ0w7QUFDRiJ9