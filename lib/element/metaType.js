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
        const breakPointJSON = breakPoint.toJSON();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGFUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YVR5cGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhVHlwZVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGFUeXBlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0TWV0YVR5cGVOb2RlIiwiZ2V0Tm9kZSIsIm1ldGFUeXBlTm9kZSIsImlzRXF1YWxUbyIsIm1ldGFUeXBlIiwiZXF1YWxUbyIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJjb21wYXJlc1RvTWV0YVR5cGVOYW1lIiwidG9KU09OIiwiZ2V0U3RyaW5nIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksQ0FBRTtRQUNuRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxrQkFBa0I7UUFDaEIsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGVBQWVOLE1BQU8sR0FBRztRQUUvQixPQUFPTTtJQUNUO0lBRUFDLFVBQVVDLFFBQVEsRUFBRTtRQUNsQixNQUFNQyxVQUFXLElBQUksS0FBS0Q7UUFFMUIsT0FBT0M7SUFDVDtJQUVBQyxvQkFBb0JDLFlBQVksRUFBRTtRQUNoQyxNQUFNQyx5QkFBMEJELGlCQUFpQixJQUFJLENBQUNULElBQUk7UUFFMUQsT0FBT1U7SUFDVDtJQUVBLE9BQU9WLE9BQU8sV0FBVztJQUV6QlcsU0FBUztRQUNQLE1BQU1kLFNBQVMsSUFBSSxDQUFDZSxTQUFTO1FBRTdCLElBQUliO1FBRUpBLGFBQWEsSUFBSSxDQUFDYyxhQUFhO1FBRS9CLE1BQU1DLGlCQUFpQmYsV0FBV1ksTUFBTTtRQUV4Q1osYUFBYWUsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUMsT0FBTztZQUNYbEI7WUFDQUU7UUFDRjtRQUVBLE9BQU9nQjtJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFbkIsT0FBTyxFQUFFO1FBQzdCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdrQixNQUNiTixlQUFlWixRQUNmUyxXQUFXVixRQUFRcUIsMEJBQTBCLENBQUNSO1FBRXBELE9BQU9IO0lBQ1Q7SUFFQSxPQUFPWSxTQUFTbEIsSUFBSSxFQUFFSixPQUFPLEVBQUU7UUFDN0IsTUFBTUMsU0FBU0csTUFDVEYsT0FBTyxNQUNQQyxhQUFhLE1BQ2JPLFdBQVcsSUFBSVosU0FBU0UsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFakUsT0FBT007SUFDVDtBQUNGIn0=