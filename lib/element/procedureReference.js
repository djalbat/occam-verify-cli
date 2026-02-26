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
const _default = (0, _elements.define)(class ProcedureReference extends _occamlanguages.Element {
    constructor(context, string, node, name){
        super(context, string, node);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getProcedureReferenceNode() {
        const node = this.getNode(), procedureReferenceNode = node; ///
        return procedureReferenceNode;
    }
    getProcedureName() {
        const procedureName = this.name; ///
        return procedureName;
    }
    toJSON() {
        const name = this.name, json = {
            name
        };
        return json;
    }
    static name = "ProcedureReference";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZVJlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmVSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlUmVmZXJlbmNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVSZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlTmFtZSgpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVOYW1lID0gdGhpcy5uYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvY2VkdXJlUmVmZXJlbmNlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsImdldE5hbWUiLCJnZXRQcm9jZWR1cmVSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInByb2NlZHVyZVJlZmVyZW5jZU5vZGUiLCJnZXRQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyx1QkFBTztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDdkMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUN2QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsNEJBQTRCO1FBQzFCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyx5QkFBeUJMLE1BQU8sR0FBRztRQUV6QyxPQUFPSztJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDTixJQUFJLEVBQUcsR0FBRztRQUVyQyxPQUFPTTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNUCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQlEsT0FBTztZQUNMUjtRQUNGO1FBRU4sT0FBT1E7SUFDVDtJQUVBLE9BQU9SLE9BQU8scUJBQXFCO0lBRW5DLE9BQU9TLFNBQVNELElBQUksRUFBRVgsT0FBTyxFQUFFO1FBQzdCLFFBQVE7SUFDVjtBQUNGIn0=