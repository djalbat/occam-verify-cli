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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5hbWVUb05hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZUpTT04gPSBuYW1lVG9OYW1lSlNPTih0aGlzLm5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhVHlwZSA9IG5ldyBNZXRhVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGFUeXBlTm9kZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJjb21wYXJlc1RvTWV0YVR5cGVOYW1lIiwidG9KU09OIiwibmFtZUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDtzQkFDUTtNQUUvQixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLGtCQUFrQjtRQUNoQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsZUFBZUwsTUFBTyxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVUMsUUFBUSxFQUFFO1FBQ2xCLE1BQU1DLFVBQVcsSUFBSSxLQUFLRDtRQUUxQixPQUFPQztJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQkQsaUJBQWlCLElBQUksQ0FBQ1QsSUFBSTtRQUUxRCxPQUFPVTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2IsSUFBSSxHQUNuQ0YsU0FBUyxJQUFJLENBQUNnQixTQUFTLElBQ3ZCZCxPQUFPWSxVQUNQRyxPQUFPO1lBQ0xqQjtZQUNBRTtRQUNGO1FBRU4sT0FBT2U7SUFDVDtJQUVBLE9BQU9mLE9BQU8sV0FBVztJQUV6QixPQUFPZ0IsU0FBU0QsSUFBSSxFQUFFbEIsT0FBTyxFQUFFO1FBQzdCLE1BQU0sRUFBRUcsSUFBSSxFQUFFLEdBQUdlLE1BQ1hOLGVBQWVULE1BQ2ZNLFdBQVdULFFBQVFvQiwwQkFBMEIsQ0FBQ1I7UUFFcEQsT0FBT0g7SUFDVDtJQUVBLE9BQU9ZLFNBQVNsQixJQUFJLEVBQUVILE9BQU8sRUFBRTtRQUM3QixNQUFNQyxTQUFTRSxNQUNURCxPQUFPLE1BQ1BPLFdBQVcsSUFBSVgsU0FBU0UsU0FBU0MsUUFBUUMsTUFBTUM7UUFFckQsT0FBT007SUFDVDtBQUNGIn0=