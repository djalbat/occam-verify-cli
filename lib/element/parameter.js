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
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBuYW1lVG9OYW1lSlNPTiwgaWRlbnRpZmllclRvSWRlbnRpZmllckpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGlkZW50aWZpZXIpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTm9kZTtcbiAgfVxuXG4gIGZpbmRQcmltaXRpdmUoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbXRlciA9IHN1YnN0aXR1dGlvbi5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcik7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW10ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByaW1pdGl2ZSA9IHN1YnN0aXR1dGlvbi5nZXRQcmltaXRpdmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWVKU09OID0gbmFtZVRvTmFtZUpTT04odGhpcy5uYW1lKSxcbiAgICAgICAgICBpZGVudGlmaWVySlNPTiA9IGlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OKHRoaXMuaWRlbnRpZmllciksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgaWRlbnRpZmllciA9IGlkZW50aWZpZXJKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGlkZW50aWZpZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiaWRlbnRpZmllciIsImdldE5hbWUiLCJnZXRJZGVudGlmaWVyIiwiZ2V0UGFyYW1ldGVyTm9kZSIsImdldE5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwiZmluZFByaW1pdGl2ZSIsInN1YnN0aXR1dGlvbnMiLCJwcmltaXRpdmUiLCJwYXJhbWV0ZXIiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyIiwiY29tcGFyZVBhcmFtZXRlciIsImdldFByaW1pdGl2ZSIsInRvSlNPTiIsIm5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJpZGVudGlmaWVySlNPTiIsImlkZW50aWZpZXJUb0lkZW50aWZpZXJKU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnQ0FMd0I7MEJBRUQ7c0JBQ29DO01BRTNELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1FO1FBRTdCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcsbUJBQW1CO1FBQ2pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRTtRQUMzQixJQUFJQyxZQUFZO1FBRWhCLE1BQU1DLFlBQVksSUFBSSxFQUNoQkMsZUFBZUgsY0FBY0ksSUFBSSxDQUFDLENBQUNEO1lBQ2pDLE1BQU1FLGlDQUFpQ0YsYUFBYUcsZ0JBQWdCLENBQUNKO1lBRXJFLElBQUlHLGdDQUFnQztnQkFDbEMsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLElBQUlGLGlCQUFpQixNQUFNO1lBQ3pCRixZQUFZRSxhQUFhSSxZQUFZO1FBQ3ZDO1FBRUEsT0FBT047SUFDVDtJQUVBTyxTQUFTO1FBQ1AsTUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNsQixJQUFJLEdBQ25DbUIsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUNuQixVQUFVLEdBQzNERCxPQUFPaUIsVUFDUGhCLGFBQWFrQixnQkFDYnJCLFNBQVMsSUFBSSxDQUFDdUIsU0FBUyxJQUN2QkMsT0FBTztZQUNMeEI7WUFDQUU7WUFDQUM7UUFDRjtRQUVOLE9BQU9xQjtJQUNUO0lBRUEsT0FBT3RCLE9BQU8sWUFBWTtJQUUxQixPQUFPdUIsU0FBU0QsSUFBSSxFQUFFekIsT0FBTyxFQUFFO1FBQzdCLFFBQVE7SUFDVjtBQUNGIn0=