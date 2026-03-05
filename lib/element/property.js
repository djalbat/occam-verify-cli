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
        const property = (0, _context.literally)((context)=>{
            const { string } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, name = (0, _element.nameFromPropertyNode)(propertyNode, context), nominalTypeName = (0, _json.nominalTypeNameFromJSON)(json);
            context = null;
            const property = new Property(context, string, node, name, nominalTypeName);
            return property;
        }, context);
        return property;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVByb3BlcnR5Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgbm9taW5hbFR5cGVOYW1lRnJvbUpTT04sIG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcmV0eU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJldHlOb2RlO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTih0aGlzLm5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0Tm9kZSIsInByb3BlcmV0eU5vZGUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwidG9KU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsInByb3BlcnR5IiwibGl0ZXJhbGx5IiwicHJvcGVydHlOb2RlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDRzs2QkFDVTt5QkFDQztzQkFDeUM7TUFFOUUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZUFBZSxDQUFFO1FBQ3hELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsa0JBQWtCO1FBQ2hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxnQkFBZ0JQLE1BQU0sR0FBRztRQUUvQixPQUFPTztJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQixJQUFJLENBQUNULElBQUksS0FBS1E7UUFFOUMsT0FBT0M7SUFDVDtJQUVBQyx1QkFBdUJULGVBQWUsRUFBRTtRQUN0QyxNQUFNVSw0QkFBNkIsSUFBSSxDQUFDVixlQUFlLEtBQUtBO1FBRTVELE9BQU9VO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU1DLHNCQUFzQkMsSUFBQUEsMENBQW9DLEVBQUMsSUFBSSxDQUFDYixlQUFlLEdBQy9FQSxrQkFBa0JZLHFCQUNsQmYsU0FBUyxJQUFJLENBQUNpQixTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xsQjtZQUNBRztRQUNGO1FBRU4sT0FBT2U7SUFDVDtJQUVBLE9BQU9oQixPQUFPLFdBQVc7SUFFekIsT0FBT2lCLFNBQVNELElBQUksRUFBRW5CLE9BQU8sRUFBRTtRQUM3QixNQUFNcUIsV0FBV0MsSUFBQUEsa0JBQVMsRUFBQyxDQUFDdEI7WUFDMUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR2tCLE1BQ2JJLGVBQWVDLElBQUFBLGdDQUFtQixFQUFDdkIsUUFBUUQsVUFDM0NFLE9BQU9xQixjQUNQcEIsT0FBT3NCLElBQUFBLDZCQUFvQixFQUFDRixjQUFjdkIsVUFDMUNJLGtCQUFrQnNCLElBQUFBLDZCQUF1QixFQUFDUDtZQUVoRG5CLFVBQVU7WUFFVixNQUFNcUIsV0FBVyxJQUFJdkIsU0FBU0UsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7WUFFM0QsT0FBT2lCO1FBQ1QsR0FBR3JCO1FBRUgsT0FBT3FCO0lBQ1Q7QUFDRiJ9