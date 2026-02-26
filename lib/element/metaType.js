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
        const name = this.name, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGFUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YVR5cGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGFUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YVR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBuYW1lLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFUeXBlID0gbmV3IE1ldGFUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGFUeXBlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImdldE5hbWUiLCJnZXRNZXRhVHlwZU5vZGUiLCJnZXROb2RlIiwibWV0YVR5cGVOb2RlIiwiaXNFcXVhbFRvIiwibWV0YVR5cGUiLCJlcXVhbFRvIiwiY29tcGFyZU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImNvbXBhcmVzVG9NZXRhVHlwZU5hbWUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxrQkFBa0I7UUFDaEIsTUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGVBQWVMLE1BQU8sR0FBRztRQUUvQixPQUFPSztJQUNUO0lBRUFDLFVBQVVDLFFBQVEsRUFBRTtRQUNsQixNQUFNQyxVQUFXLElBQUksS0FBS0Q7UUFFMUIsT0FBT0M7SUFDVDtJQUVBQyxvQkFBb0JDLFlBQVksRUFBRTtRQUNoQyxNQUFNQyx5QkFBMEJELGlCQUFpQixJQUFJLENBQUNULElBQUk7UUFFMUQsT0FBT1U7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTVgsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJZLE9BQU87WUFDTFo7UUFDRjtRQUVOLE9BQU9ZO0lBQ1Q7SUFFQSxPQUFPWixPQUFPLFdBQVc7SUFFekIsT0FBT2EsU0FBU0QsSUFBSSxFQUFFZixPQUFPLEVBQUU7UUFDN0IsTUFBTSxFQUFFRyxJQUFJLEVBQUUsR0FBR1ksTUFDWEgsZUFBZVQsTUFDZk0sV0FBV1QsUUFBUWlCLDBCQUEwQixDQUFDTDtRQUVwRCxPQUFPSDtJQUNUO0lBRUEsT0FBT1MsU0FBU2YsSUFBSSxFQUFFSCxPQUFPLEVBQUU7UUFDN0IsTUFBTUMsU0FBU0UsTUFDVEQsT0FBTyxNQUNQTyxXQUFXLElBQUlYLFNBQVNFLFNBQVNDLFFBQVFDLE1BQU1DO1FBRXJELE9BQU9NO0lBQ1Q7QUFDRiJ9