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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, name = (0, _element.nameFromPropertyNode)(propertyNode, context), nominalTypeName = (0, _json.nominalTypeNameFromJSON)(json);
            context = null;
            const property = new Property(context, string, node, name, nominalTypeName);
            return property;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBub21pbmFsVHlwZU5hbWVGcm9tSlNPTiwgbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBjb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSAodGhpcy5ub21pbmFsVHlwZU5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVKU09OID0gbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OKHRoaXMubm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0Tm9kZSIsInByb3BlcmV0eU5vZGUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwidG9KU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwicHJvcGVydHlOb2RlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLOzZCQUNRO3lCQUNDO3NCQUN5QztNQUU5RSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxlQUFlLENBQUU7UUFDeEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRyxrQkFBa0I7UUFDaEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGdCQUFnQlAsTUFBTSxHQUFHO1FBRS9CLE9BQU9PO0lBQ1Q7SUFFQUMsb0JBQW9CQyxZQUFZLEVBQUU7UUFDaEMsTUFBTUMseUJBQTBCLElBQUksQ0FBQ1QsSUFBSSxLQUFLUTtRQUU5QyxPQUFPQztJQUNUO0lBRUFDLHVCQUF1QlQsZUFBZSxFQUFFO1FBQ3RDLE1BQU1VLDRCQUE2QixJQUFJLENBQUNWLGVBQWUsS0FBS0E7UUFFNUQsT0FBT1U7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTUMsc0JBQXNCQyxJQUFBQSwwQ0FBb0MsRUFBQyxJQUFJLENBQUNiLGVBQWUsR0FDL0VBLGtCQUFrQlkscUJBQ2xCZixTQUFTLElBQUksQ0FBQ2lCLFNBQVMsSUFDdkJDLE9BQU87WUFDTGxCO1lBQ0FHO1FBQ0Y7UUFFTixPQUFPZTtJQUNUO0lBRUEsT0FBT2hCLE9BQU8sV0FBVztJQUV6QixPQUFPaUIsU0FBU0QsSUFBSSxFQUFFbkIsT0FBTyxFQUFFO1FBQzdCLE9BQU9xQixJQUFBQSxvQkFBVyxFQUFDLENBQUNyQjtZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHa0IsTUFDYkcsZUFBZUMsSUFBQUEsZ0NBQW1CLEVBQUN0QixRQUFRRCxVQUMzQ0UsT0FBT29CLGNBQ1BuQixPQUFPcUIsSUFBQUEsNkJBQW9CLEVBQUNGLGNBQWN0QixVQUMxQ0ksa0JBQWtCcUIsSUFBQUEsNkJBQXVCLEVBQUNOO1lBRWhEbkIsVUFBVTtZQUVWLE1BQU0wQixXQUFXLElBQUk1QixTQUFTRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQztZQUUzRCxPQUFPc0I7UUFDVCxHQUFHMUI7SUFDTDtBQUNGIn0=