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
const _json = require("../utilities/json");
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
    findPrimitive(substitutions) {
        let primitive = null;
        const parameter = this, substitution = substitutions.find((substitution)=>{
            const substitutionComparesToParamter = substitution.compareParameter(parameter);
            if (substitutionComparesToParamter) {
                return true;
            }
        }) || null;
        if (substitution !== null) {
            primitive = substitution.getPrimitive();
        }
        return primitive;
    }
    toJSON() {
        const nameJSON = (0, _json.nameToNameJSON)(this.name), identifierJSON = (0, _json.identifierToIdentifierJSON)(this.identifier), name = nameJSON, identifier = identifierJSON, string = this.getString(), json = {
            string,
            name,
            identifier
        };
        return json;
    }
    static name = "Parameter";
    static fromJSON(json, context) {
        const parameter = (0, _context.literally)((context)=>{
            const { string } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, name = (0, _json.nameFromJSON)(json, context), identifier = (0, _json.identifierFromJSON)(json, context), parameter = new Parameter(context, string, node, name, identifier);
            return parameter;
        }, context);
        return parameter;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUGFyYW1ldGVyIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tSlNPTiwgbmFtZVRvTmFtZUpTT04sIGlkZW50aWZpZXJGcm9tSlNPTiwgaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxuXG4gIGZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbXRlciA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcik7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW10ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByaW1pdGl2ZSA9IHN1YnN0aXR1dGlvbi5nZXRQcmltaXRpdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWVKU09OID0gbmFtZVRvTmFtZUpTT04odGhpcy5uYW1lKSxcbiAgICAgICAgICBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKHRoaXMuaWRlbnRpZmllciksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGlkZW50aWZpZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IGluc3RhbnRpYXRlUGFyYW1ldGVyKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiaWRlbnRpZmllciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UGFyYW1ldGVyTm9kZSIsImdldE5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiZmluZFByaW1pdGl2ZSIsInN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVBhcmFtZXRlciIsImdldFByaW1pdGl2ZSIsInRvSlNPTiIsIm5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJpZGVudGlmaWVySlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVQYXJhbWV0ZXIiLCJuYW1lRnJvbUpTT04iLCJpZGVudGlmaWVyRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDRzs2QkFDVztzQkFDd0Q7TUFFN0YsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUU7UUFFN0IsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxtQkFBbUI7UUFDakIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsY0FBY0MsYUFBYSxFQUFFO1FBQzNCLElBQUlDLFlBQVk7UUFFaEIsTUFBTUMsWUFBWSxJQUFJLEVBQ2hCQyxlQUFlSCxjQUFjSSxJQUFJLENBQUMsQ0FBQ0Q7WUFDakMsTUFBTUUsaUNBQWlDRixhQUFhRyxnQkFBZ0IsQ0FBQ0o7WUFFckUsSUFBSUcsZ0NBQWdDO2dCQUNsQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosSUFBSUYsaUJBQWlCLE1BQU07WUFDekJGLFlBQVlFLGFBQWFJLFlBQVk7UUFDdkM7UUFFQSxPQUFPTjtJQUNUO0lBRUFPLFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2xCLElBQUksR0FDbkNtQixpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ25CLFVBQVUsR0FDM0RELE9BQU9pQixVQUNQaEIsYUFBYWtCLGdCQUNickIsU0FBUyxJQUFJLENBQUN1QixTQUFTLElBQ3ZCQyxPQUFPO1lBQ0x4QjtZQUNBRTtZQUNBQztRQUNGO1FBRU4sT0FBT3FCO0lBQ1Q7SUFFQSxPQUFPdEIsT0FBTyxZQUFZO0lBRTFCLE9BQU91QixTQUFTRCxJQUFJLEVBQUV6QixPQUFPLEVBQUU7UUFDN0IsTUFBTWEsWUFBWWMsSUFBQUEsa0JBQVMsRUFBQyxDQUFDM0I7WUFDM0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR3dCLE1BQ2JoQixnQkFBZ0JtQixJQUFBQSxpQ0FBb0IsRUFBQzNCLFFBQVFELFVBQzdDRSxPQUFPTyxlQUNQTixPQUFPMEIsSUFBQUEsa0JBQVksRUFBQ0osTUFBTXpCLFVBQzFCSSxhQUFhMEIsSUFBQUEsd0JBQWtCLEVBQUNMLE1BQU16QixVQUN0Q2EsWUFBWSxJQUFJZixVQUFVRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztZQUU3RCxPQUFPUztRQUNULEdBQUdiO1FBRUgsT0FBT2E7SUFDVDtBQUNGIn0=