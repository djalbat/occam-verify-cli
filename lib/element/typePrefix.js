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
const _default = (0, _elements.define)(class TypePrefix extends _occamlanguages.Element {
    constructor(context, string, node, name){
        super(context, string, node);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypePrefixNode() {
        const node = this.getNode(), typePrefixNode = node; ///
        return typePrefixNode;
    }
    compareTypePrefixName(typePrefixName) {
        const comparesToTypePrefixName = this.name === typePrefixName;
        return comparesToTypePrefixName;
    }
    toJSON() {
        const nameJSON = (0, _json.nameToNameJSON)(this.name), name = nameJSON, string = this.getString(), json = {
            string,
            name
        };
        return json;
    }
    static name = "TypePrefix";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHtuYW1lVG9OYW1lSlNPTn0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOb2RlO1xuICB9XG5cbiAgY29tcGFyZVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZVByZWZpeE5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lSlNPTiA9IG5hbWVUb05hbWVKU09OKHRoaXMubmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImdldE5hbWUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4Tm9kZSIsImNvbXBhcmVUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiY29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lIiwidG9KU09OIiwibmFtZUpTT04iLCJuYW1lVG9OYW1lSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0NBTHdCOzBCQUVEO3NCQUNNO01BRTdCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDdkMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxpQkFBaUJMLE1BQU8sR0FBRztRQUVqQyxPQUFPSztJQUNUO0lBRUFDLHNCQUFzQkMsY0FBYyxFQUFFO1FBQ3BDLE1BQU1DLDJCQUE0QixJQUFJLENBQUNQLElBQUksS0FBS007UUFFaEQsT0FBT0M7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNWLElBQUksR0FDbkNBLE9BQU9TLFVBQ1BYLFNBQVMsSUFBSSxDQUFDYSxTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xkO1lBQ0FFO1FBQ0Y7UUFFTixPQUFPWTtJQUNUO0lBRUEsT0FBT1osT0FBTyxhQUFhO0lBRTNCLE9BQU9hLFNBQVNELElBQUksRUFBRWYsT0FBTyxFQUFFO1FBQzdCLFFBQVE7SUFDVjtBQUNGIn0=