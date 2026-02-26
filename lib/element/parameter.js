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
        const name = this.name, json = {
            name
        };
        return json;
    }
    static name = "Parameter";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBpZGVudGlmaWVyKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBpZGVudGlmaWVyKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlck5vZGU7XG4gIH1cblxuICBmaW5kUHJpbWl0aXZlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvUGFyYW10ZXIgPSBzdWJzdGl0dXRpb24uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1BhcmFtdGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcmltaXRpdmUgPSBzdWJzdGl0dXRpb24uZ2V0UHJpbWl0aXZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUGFyYW1ldGVyIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImlkZW50aWZpZXIiLCJnZXROYW1lIiwiZ2V0SWRlbnRpZmllciIsImdldFBhcmFtZXRlck5vZGUiLCJnZXROb2RlIiwicGFyYW1ldGVyTm9kZSIsImZpbmRQcmltaXRpdmUiLCJzdWJzdGl0dXRpb25zIiwicHJpbWl0aXZlIiwicGFyYW1ldGVyIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9QYXJhbXRlciIsImNvbXBhcmVQYXJhbWV0ZXIiLCJnZXRQcmltaXRpdmUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDbkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNRTtRQUU3QixJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLG1CQUFtQjtRQUNqQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsZ0JBQWdCUCxNQUFNLEdBQUc7UUFFL0IsT0FBT087SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUU7UUFDM0IsSUFBSUMsWUFBWTtRQUVoQixNQUFNQyxZQUFZLElBQUksRUFDaEJDLGVBQWVILGNBQWNJLElBQUksQ0FBQyxDQUFDRDtZQUNqQyxNQUFNRSxpQ0FBaUNGLGFBQWFHLGdCQUFnQixDQUFDSjtZQUVyRSxJQUFJRyxnQ0FBZ0M7Z0JBQ2xDLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixJQUFJRixpQkFBaUIsTUFBTTtZQUN6QkYsWUFBWUUsYUFBYUksWUFBWTtRQUN2QztRQUVBLE9BQU9OO0lBQ1Q7SUFFQU8sU0FBUztRQUNQLE1BQU1oQixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQmlCLE9BQU87WUFDTGpCO1FBQ0Y7UUFFTixPQUFPaUI7SUFDVDtJQUVBLE9BQU9qQixPQUFPLFlBQVk7SUFFMUIsT0FBT2tCLFNBQVNELElBQUksRUFBRXBCLE9BQU8sRUFBRTtRQUM3QixRQUFRO0lBQ1Y7QUFDRiJ9