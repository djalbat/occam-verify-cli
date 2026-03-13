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
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Property extends _occamlanguages.Element {
    constructor(context, string, node, name, nominalTypeName){
        super(context, string, node);
        this.name = name;
        this.nominalTypeName = nominalTypeName;
    }
    getName() {
        return this.name;
    }
    getNominalTypeName() {
        return this.nominalTypeName;
    }
    getPropertyNode() {
        const node = this.getNode(), properetyNode = node; ///
        return properetyNode;
    }
    comparePropertyName(propertyName) {
        const comparesToPropertyName = this.name === propertyName;
        return comparesToPropertyName;
    }
    compareNominalTypeName(nominalTypeName) {
        const comparesToNominalTypeName = this.nominalTypeName === nominalTypeName;
        return comparesToNominalTypeName;
    }
    toJSON() {
        const nominalTypeNameJSON = (0, _json.nominalTypeNameToNominalTypeNameJSON)(this.nominalTypeName), nominalTypeName = nominalTypeNameJSON, string = this.getString(), json = {
            string,
            nominalTypeName
        };
        return json;
    }
    static name = "Property";
    static fromJSON(json, context) {
        const property = (0, _context.instantiate)((context)=>{
            const { string } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, name = (0, _element.nameFromPropertyNode)(propertyNode, context), nominalTypeName = (0, _json.nominalTypeNameFromJSON)(json);
            context = null;
            const property = new Property(context, string, node, name, nominalTypeName);
            return property;
        }, context);
        return property;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBub21pbmFsVHlwZU5hbWVGcm9tSlNPTiwgbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBjb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSAodGhpcy5ub21pbmFsVHlwZU5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVKU09OID0gbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OKHRoaXMubm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0TmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImdldFByb3BlcnR5Tm9kZSIsImdldE5vZGUiLCJwcm9wZXJldHlOb2RlIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsInRvSlNPTiIsIm5vbWluYWxUeXBlTmFtZUpTT04iLCJub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04iLCJnZXRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJwcm9wZXJ0eSIsImluc3RhbnRpYXRlIiwicHJvcGVydHlOb2RlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDSzs2QkFDUTt5QkFDQztzQkFDeUM7TUFFOUUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZUFBZSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsa0JBQWtCO1FBQ2hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQixJQUFJLENBQUNULElBQUksS0FBS1E7UUFFOUMsT0FBT0M7SUFDVDtJQUVBQyx1QkFBdUJULGVBQWUsRUFBRTtRQUN0QyxNQUFNVSw0QkFBNkIsSUFBSSxDQUFDVixlQUFlLEtBQUtBO1FBRTVELE9BQU9VO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1DLHNCQUFzQkMsSUFBQUEsMENBQW9DLEVBQUMsSUFBSSxDQUFDYixlQUFlLEdBQy9FQSxrQkFBa0JZLHFCQUNsQmYsU0FBUyxJQUFJLENBQUNpQixTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xsQjtZQUNBRztRQUNGO1FBRU4sT0FBT2U7SUFDVDtJQUVBLE9BQU9oQixPQUFPLFdBQVc7SUFFekIsT0FBT2lCLFNBQVNELElBQUksRUFBRW5CLE9BQU8sRUFBRTtRQUM3QixNQUFNcUIsV0FBV0MsSUFBQUEsb0JBQVcsRUFBQyxDQUFDdEI7WUFDNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR2tCLE1BQ2JJLGVBQWVDLElBQUFBLGdDQUFtQixFQUFDdkIsUUFBUUQsVUFDM0NFLE9BQU9xQixjQUNQcEIsT0FBT3NCLElBQUFBLDZCQUFvQixFQUFDRixjQUFjdkIsVUFDMUNJLGtCQUFrQnNCLElBQUFBLDZCQUF1QixFQUFDUDtZQUVoRG5CLFVBQVU7WUFFVixNQUFNcUIsV0FBVyxJQUFJdkIsU0FBU0UsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7WUFFM0QsT0FBT2lCO1FBQ1QsR0FBR3JCO1FBRUgsT0FBT3FCO0lBQ1Q7QUFDRiJ9