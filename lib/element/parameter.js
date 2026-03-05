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
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Parameter";
    static fromJSON(json, context) {
        const parameter = (0, _context.literally)((context)=>{
            const { string } = json, parameterNode = (0, _instantiate.instantiateParameter)(string, context), node = parameterNode, name = (0, _element.nameFromParaneterNode)(parameterNode, context), identifier = (0, _element.identifierFromParameterNode)(parameterNode, context);
            context = null;
            const parameter = new Parameter(context, string, node, name, identifier);
            return parameter;
        }, context);
        return parameter;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUGFyYW1ldGVyIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUGFyYW5ldGVyTm9kZSwgaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBpZGVudGlmaWVyKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck5vZGU7XG4gIH1cblxuICBmaW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW10ZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcmltaXRpdmUgPSBzdWJzdGl0dXRpb24uZ2V0UHJpbWl0aXZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IGluc3RhbnRpYXRlUGFyYW1ldGVyKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiaWRlbnRpZmllciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UGFyYW1ldGVyTm9kZSIsImdldE5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiZmluZFByaW1pdGl2ZSIsInN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVBhcmFtZXRlciIsImdldFByaW1pdGl2ZSIsInRvSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUGFyYW1ldGVyIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwiaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0c7NkJBQ1c7eUJBQzhCO01BRW5FLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1FO1FBRTdCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRTtRQUMzQixJQUFJQyxZQUFZO1FBRWhCLE1BQU1DLFlBQVksSUFBSSxFQUNoQkMsZUFBZUgsY0FBY0ksSUFBSSxDQUFDLENBQUNEO1lBQ2pDLE1BQU1FLGlDQUFpQ0YsYUFBYUcsZ0JBQWdCLENBQUNKO1lBRXJFLElBQUlHLGdDQUFnQztnQkFDbEMsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLElBQUlGLGlCQUFpQixNQUFNO1lBQ3pCRixZQUFZRSxhQUFhSSxZQUFZO1FBQ3ZDO1FBRUEsT0FBT047SUFDVDtJQUVBTyxTQUFTO1FBQ1AsTUFBTWxCLFNBQVMsSUFBSSxDQUFDbUIsU0FBUyxJQUN2QkMsT0FBTztZQUNMcEI7UUFDRjtRQUVOLE9BQU9vQjtJQUNUO0lBRUEsT0FBT2xCLE9BQU8sWUFBWTtJQUUxQixPQUFPbUIsU0FBU0QsSUFBSSxFQUFFckIsT0FBTyxFQUFFO1FBQzdCLE1BQU1hLFlBQVlVLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3ZCO1lBQzNCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdvQixNQUNiWixnQkFBZ0JlLElBQUFBLGlDQUFvQixFQUFDdkIsUUFBUUQsVUFDN0NFLE9BQU9PLGVBQ1BOLE9BQU9zQixJQUFBQSw4QkFBcUIsRUFBQ2hCLGVBQWVULFVBQzVDSSxhQUFhc0IsSUFBQUEsb0NBQTJCLEVBQUNqQixlQUFlVDtZQUU5REEsVUFBVTtZQUVWLE1BQU1hLFlBQVksSUFBSWYsVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7WUFFN0QsT0FBT1M7UUFDVCxHQUFHYjtRQUVILE9BQU9hO0lBQ1Q7QUFDRiJ9