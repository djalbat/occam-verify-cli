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
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21QYXJhbmV0ZXJOb2RlLCBpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgaWRlbnRpZmllcikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck5vZGU7XG4gIH1cblxuICBmaW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW1ldGVyID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByaW1pdGl2ZSA9IHN1YnN0aXR1dGlvbi5nZXRQcmltaXRpdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHBhcmFtZXRlck5vZGUgPSBpbnN0YW50aWF0ZVBhcmFtZXRlcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gaWRlbnRpZmllckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgaWRlbnRpZmllcik7XG5cbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJpZGVudGlmaWVyIiwiZ2V0TmFtZSIsImdldElkZW50aWZpZXIiLCJnZXRQYXJhbWV0ZXJOb2RlIiwiZ2V0Tm9kZSIsInBhcmFtZXRlck5vZGUiLCJmaW5kUHJpbWl0aXZlIiwic3Vic3RpdHV0aW9ucyIsInByaW1pdGl2ZSIsInBhcmFtZXRlciIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVBhcmFtZXRlciIsImdldFByaW1pdGl2ZSIsInRvSlNPTiIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQYXJhbWV0ZXIiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJpZGVudGlmaWVyRnJvbVBhcmFtZXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDUzt5QkFDOEI7TUFFbkUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDOUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUVaLE9BQU8sRUFBRTtRQUNwQyxJQUFJYSxZQUFZO1FBRWhCLE1BQU1DLFlBQVksSUFBSSxFQUNoQkMsZUFBZUgsY0FBY0ksSUFBSSxDQUFDLENBQUNEO1lBQ2pDLE1BQU1FLGtDQUFrQ0YsYUFBYUcsZ0JBQWdCLENBQUNKO1lBRXRFLElBQUlHLGlDQUFpQztnQkFDbkMsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLElBQUlGLGlCQUFpQixNQUFNO1lBQ3pCRixZQUFZRSxhQUFhSSxZQUFZLENBQUNuQjtRQUN4QztRQUVBLE9BQU9hO0lBQ1Q7SUFFQSxPQUFPVCxPQUFPLFlBQVk7SUFFMUJnQixTQUFTO1FBQ1AsTUFBTW5CLFNBQVMsSUFBSSxDQUFDb0IsU0FBUyxJQUN2QmxCLFlBQVksSUFBSSxDQUFDbUIsWUFBWSxJQUM3QkMsT0FBTztZQUNMdEI7WUFDQUU7UUFDRjtRQUVOLE9BQU9vQjtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFdkIsT0FBTyxFQUFFO1FBQzdCLE9BQU95QixJQUFBQSxvQkFBVyxFQUFDLENBQUN6QjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdvQixNQUN4QmIsZ0JBQWdCZ0IsSUFBQUEsaUNBQW9CLEVBQUN6QixRQUFRRCxVQUM3Q0UsT0FBT1EsZUFDUE4sT0FBT3VCLElBQUFBLDhCQUFxQixFQUFDakIsZUFBZVYsVUFDNUNLLGFBQWF1QixJQUFBQSxvQ0FBMkIsRUFBQ2xCLGVBQWVWO1lBRTlEQSxVQUFVO1lBRVYsTUFBTWMsWUFBWSxJQUFJaEIsVUFBVUUsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0MsTUFBTUM7WUFFeEUsT0FBT1M7UUFDVCxHQUFHZDtJQUNMO0FBQ0YifQ==