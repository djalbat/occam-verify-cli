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
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "TypePrefix";
    static fromJSON(json, context) {
        const typePrefix = (0, _context.literally)((context)=>{
            const { string } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, name);
            return typePrefix;
        }, context);
        return typePrefix;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVR5cGVQcmVmaXggfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbmFtZUZyb21UeXBlUHJlZml4Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZVByZWZpeCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlUHJlZml4Tm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgdHlwZVByZWZpeE5vZGUgPSBpbnN0YW50aWF0ZVR5cGVQcmVmaXgoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4Tm9kZSwgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlUHJlZml4Tm9kZSh0eXBlUHJlZml4Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgdHlwZVByZWZpeCA9IG5ldyBUeXBlUHJlZml4KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgICAgIHJldHVybiB0eXBlUHJlZml4O1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXgiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFR5cGVQcmVmaXhOb2RlIiwiZ2V0Tm9kZSIsInR5cGVQcmVmaXhOb2RlIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJ0b0pTT04iLCJnZXRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJ0eXBlUHJlZml4IiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVUeXBlUHJlZml4IiwibmFtZUZyb21UeXBlUHJlZml4Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNHOzZCQUNZO3lCQUNDO01BRXZDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDdkMsS0FBSyxDQUFDSCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxpQkFBaUJMLE1BQU8sR0FBRztRQUVqQyxPQUFPSztJQUNUO0lBRUFDLHNCQUFzQkMsY0FBYyxFQUFFO1FBQ3BDLE1BQU1DLDJCQUE0QixJQUFJLENBQUNQLElBQUksS0FBS007UUFFaEQsT0FBT0M7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTVYsU0FBUyxJQUFJLENBQUNXLFNBQVMsSUFDdkJDLE9BQU87WUFDTFo7UUFDRjtRQUVOLE9BQU9ZO0lBQ1Q7SUFFQSxPQUFPVixPQUFPLGFBQWE7SUFFM0IsT0FBT1csU0FBU0QsSUFBSSxFQUFFYixPQUFPLEVBQUU7UUFDN0IsTUFBTWUsYUFBYUMsSUFBQUEsa0JBQVMsRUFBQyxDQUFDaEI7WUFDNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1ksTUFDYk4saUJBQWlCVSxJQUFBQSxrQ0FBcUIsRUFBQ2hCLFFBQVFELFVBQy9DRSxPQUFPSyxnQkFDUEosT0FBT2UsSUFBQUEsK0JBQXNCLEVBQUNYLGdCQUFnQlA7WUFFcERBLFVBQVUsTUFBTSxHQUFHO1lBRW5CLE1BQU1lLGFBQWEsSUFBSWpCLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DO1lBRXpELE9BQU9ZO1FBQ1QsR0FBR2Y7UUFFSCxPQUFPZTtJQUNUO0FBQ0YifQ==