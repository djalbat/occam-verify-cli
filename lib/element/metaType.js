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
const _breakPoint = require("../utilities/breakPoint");
const _default = (0, _elements.define)(class MetaType extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name){
        super(context, string, node, breakPoint);
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
    static name = "MetaType";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        const { string } = json, metaTypeName = string, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    static fromName(name, context) {
        const string = name, node = null, breakPoint = null, metaType = new MetaType(context, string, node, breakPoint, name);
        return metaType;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhVHlwZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YVR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibmFtZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXROb2RlIiwibWV0YVR5cGVOb2RlIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwiY29tcGFyZU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImNvbXBhcmVzVG9NZXRhVHlwZU5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O2dDQUx3QjswQkFFRDs0QkFDb0I7TUFFM0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxDQUFFO1FBQ25ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLGtCQUFrQjtRQUNoQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsZUFBZU4sTUFBTyxHQUFHO1FBRS9CLE9BQU9NO0lBQ1Q7SUFFQUMsVUFBVUMsUUFBUSxFQUFFO1FBQ2xCLE1BQU1DLFVBQVcsSUFBSSxLQUFLRDtRQUUxQixPQUFPQztJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQkQsaUJBQWlCLElBQUksQ0FBQ1QsSUFBSTtRQUUxRCxPQUFPVTtJQUNUO0lBRUEsT0FBT1YsT0FBTyxXQUFXO0lBRXpCVyxTQUFTO1FBQ1AsTUFBTWQsU0FBUyxJQUFJLENBQUNlLFNBQVM7UUFFN0IsSUFBSWI7UUFFSkEsYUFBYSxJQUFJLENBQUNjLGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQ2hCO1FBRWxEQSxhQUFhZSxnQkFBaUIsR0FBRztRQUVqQyxNQUFNRSxPQUFPO1lBQ1huQjtZQUNBRTtRQUNGO1FBRUEsT0FBT2lCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTRCxJQUFJLEVBQUVwQixPQUFPLEVBQUU7UUFDN0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR21CLE1BQ2JQLGVBQWVaLFFBQ2ZTLFdBQVdWLFFBQVFzQiwwQkFBMEIsQ0FBQ1Q7UUFFcEQsT0FBT0g7SUFDVDtJQUVBLE9BQU9hLFNBQVNuQixJQUFJLEVBQUVKLE9BQU8sRUFBRTtRQUM3QixNQUFNQyxTQUFTRyxNQUNURixPQUFPLE1BQ1BDLGFBQWEsTUFDYk8sV0FBVyxJQUFJWixTQUFTRSxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQztRQUVqRSxPQUFPTTtJQUNUO0FBQ0YifQ==