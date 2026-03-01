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
const _default = (0, _elements.define)(class MetaType extends _occamlanguages.Element {
    constructor(context, string, node, name){
        super(context, string, node);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getMetaTypeNode() {
        const node = this.getNode(), metaTypeNode = node; ///
        return metaTypeNode;
    }
    isEqualTo(metaType) {
        const equalTo = this === metaType;
        return equalTo;
    }
    compareMetaTypeName(metaTypeName) {
        const comparesToMetaTypeName = metaTypeName === this.name;
        return comparesToMetaTypeName;
    }
    toJSON() {
        const nameJSON = (0, _json.nameToNameJSON)(this.name), string = this.getString(), name = nameJSON, json = {
            string,
            name
        };
        return json;
    }
    static name = "MetaType";
    static fromJSON(json, context) {
        const { name } = json, metaTypeName = name, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    static fromName(name, context) {
        const string = name, node = null, metaType = new MetaType(context, string, node, name);
        return metaType;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5hbWVUb05hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBuYW1lVG9OYW1lSlNPTih0aGlzLm5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YVR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlTm9kZSIsImdldE5vZGUiLCJtZXRhVHlwZU5vZGUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJjb21wYXJlTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiY29tcGFyZXNUb01ldGFUeXBlTmFtZSIsInRvSlNPTiIsIm5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJnZXRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztnQ0FMd0I7MEJBRUQ7c0JBQ1E7TUFFL0IsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxrQkFBa0I7UUFDaEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGVBQWVMLE1BQU8sR0FBRztRQUUvQixPQUFPSztJQUNUO0lBRUFDLFVBQVVDLFFBQVEsRUFBRTtRQUNsQixNQUFNQyxVQUFXLElBQUksS0FBS0Q7UUFFMUIsT0FBT0M7SUFDVDtJQUVBQyxvQkFBb0JDLFlBQVksRUFBRTtRQUNoQyxNQUFNQyx5QkFBMEJELGlCQUFpQixJQUFJLENBQUNULElBQUk7UUFFMUQsT0FBT1U7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNiLElBQUksR0FDbkNGLFNBQVMsSUFBSSxDQUFDZ0IsU0FBUyxJQUN2QmQsT0FBT1ksVUFDUEcsT0FBTztZQUNMakI7WUFDQUU7UUFDRjtRQUVOLE9BQU9lO0lBQ1Q7SUFFQSxPQUFPZixPQUFPLFdBQVc7SUFFekIsT0FBT2dCLFNBQVNELElBQUksRUFBRWxCLE9BQU8sRUFBRTtRQUM3QixNQUFNLEVBQUVHLElBQUksRUFBRSxHQUFHZSxNQUNYTixlQUFlVCxNQUNmTSxXQUFXVCxRQUFRb0IsMEJBQTBCLENBQUNSO1FBRXBELE9BQU9IO0lBQ1Q7SUFFQSxPQUFPWSxTQUFTbEIsSUFBSSxFQUFFSCxPQUFPLEVBQUU7UUFDN0IsTUFBTUMsU0FBU0UsTUFDVEQsT0FBTyxNQUNQTyxXQUFXLElBQUlYLFNBQVNFLFNBQVNDLFFBQVFDLE1BQU1DO1FBRXJELE9BQU9NO0lBQ1Q7QUFDRiJ9