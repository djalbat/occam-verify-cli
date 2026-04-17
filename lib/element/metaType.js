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
const _default = (0, _elements.define)(class MetaType extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name){
        super(context, string, node, lineIndex);
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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        const { string } = json, metaTypeName = string, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    static fromName(name, context) {
        const string = name, node = null, lineIndex = null, metaType = new MetaType(context, string, node, lineIndex, name);
        return metaType;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGFUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YVR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlTm9kZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhtZXRhVHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gbWV0YVR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhVHlwZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGFUeXBlTm9kZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJjb21wYXJlc1RvTWV0YVR5cGVOYW1lIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwiZ2V0QnJlYWtQb2ludCIsImpzb24iLCJmcm9tSlNPTiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDbEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsa0JBQWtCO1FBQ2hCLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxlQUFlTixNQUFPLEdBQUc7UUFFL0IsT0FBT007SUFDVDtJQUVBQyxVQUFVQyxRQUFRLEVBQUU7UUFDbEIsTUFBTUMsVUFBVyxJQUFJLEtBQUtEO1FBRTFCLE9BQU9DO0lBQ1Q7SUFFQUMsb0JBQW9CQyxZQUFZLEVBQUU7UUFDaEMsTUFBTUMseUJBQTBCRCxpQkFBaUIsSUFBSSxDQUFDVCxJQUFJO1FBRTFELE9BQU9VO0lBQ1Q7SUFFQSxPQUFPVixPQUFPLFdBQVc7SUFFekJXLFNBQVM7UUFDUCxNQUFNZCxTQUFTLElBQUksQ0FBQ2UsU0FBUyxJQUN2QmIsWUFBWSxJQUFJLENBQUNjLGFBQWEsSUFDOUJDLE9BQU87WUFDTGpCO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPZTtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFbEIsT0FBTyxFQUFFO1FBQzdCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdpQixNQUNiTCxlQUFlWixRQUNmUyxXQUFXVixRQUFRb0IsMEJBQTBCLENBQUNQO1FBRXBELE9BQU9IO0lBQ1Q7SUFFQSxPQUFPVyxTQUFTakIsSUFBSSxFQUFFSixPQUFPLEVBQUU7UUFDN0IsTUFBTUMsU0FBU0csTUFDVEYsT0FBTyxNQUNQQyxZQUFZLE1BQ1pPLFdBQVcsSUFBSVosU0FBU0UsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFaEUsT0FBT007SUFDVDtBQUNGIn0=