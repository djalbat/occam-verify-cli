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
        const nominalTypeNameJSON = (0, _json.nameToNameJSON)(this.nominalTypeName), nameJSON = (0, _json.nameToNameJSON)(this.name), nominalTypeName = nominalTypeNameJSON, name = nameJSON, string = this.getString(), json = {
            string,
            name,
            nominalTypeName
        };
        return json;
    }
    static name = "Property";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7bmFtZVRvTmFtZUpTT059IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcmV0eU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJldHlOb2RlO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lSlNPTiA9IG5hbWVUb05hbWVKU09OKHRoaXMubm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBuYW1lSlNPTiA9IG5hbWVUb05hbWVKU09OKHRoaXMubmFtZSksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXROb2RlIiwicHJvcGVyZXR5Tm9kZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJjb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJ0b0pTT04iLCJub21pbmFsVHlwZU5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJuYW1lSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3NCQUNNO01BRTdCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGVBQWUsQ0FBRTtRQUN4RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLGtCQUFrQjtRQUNoQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsZ0JBQWdCUCxNQUFNLEdBQUc7UUFFL0IsT0FBT087SUFDVDtJQUVBQyxvQkFBb0JDLFlBQVksRUFBRTtRQUNoQyxNQUFNQyx5QkFBMEIsSUFBSSxDQUFDVCxJQUFJLEtBQUtRO1FBRTlDLE9BQU9DO0lBQ1Q7SUFFQUMsdUJBQXVCVCxlQUFlLEVBQUU7UUFDdEMsTUFBTVUsNEJBQTZCLElBQUksQ0FBQ1YsZUFBZSxLQUFLQTtRQUU1RCxPQUFPVTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDYixlQUFlLEdBQ3pEYyxXQUFXRCxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2QsSUFBSSxHQUNuQ0Msa0JBQWtCWSxxQkFDbEJiLE9BQU9lLFVBQ1BqQixTQUFTLElBQUksQ0FBQ2tCLFNBQVMsSUFDdkJDLE9BQU87WUFDTG5CO1lBQ0FFO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPZ0I7SUFDVDtJQUVBLE9BQU9qQixPQUFPLFdBQVc7SUFFekIsT0FBT2tCLFNBQVNELElBQUksRUFBRXBCLE9BQU8sRUFBRTtRQUM3QixRQUFRO0lBQ1Y7QUFDRiJ9