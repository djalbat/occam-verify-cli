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
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "MetaType";
    static fromJSON(json, context) {
        const { string } = json, metaTypeName = string, metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    static fromName(name, context) {
        const string = name, node = null, metaType = new MetaType(context, string, node, name);
        return metaType;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGFUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhVHlwZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YVR5cGVOb2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKG1ldGFUeXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSBtZXRhVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGFUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YVR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVR5cGUgPSBuZXcgTWV0YVR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YVR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldE1ldGFUeXBlTm9kZSIsImdldE5vZGUiLCJtZXRhVHlwZU5vZGUiLCJpc0VxdWFsVG8iLCJtZXRhVHlwZSIsImVxdWFsVG8iLCJjb21wYXJlTWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiY29tcGFyZXNUb01ldGFUeXBlTmFtZSIsInRvSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3ZDLEtBQUssQ0FBQ0gsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO0lBQ2xCO0lBRUFFLGtCQUFrQjtRQUNoQixNQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsZUFBZUwsTUFBTyxHQUFHO1FBRS9CLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVUMsUUFBUSxFQUFFO1FBQ2xCLE1BQU1DLFVBQVcsSUFBSSxLQUFLRDtRQUUxQixPQUFPQztJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFO1FBQ2hDLE1BQU1DLHlCQUEwQkQsaUJBQWlCLElBQUksQ0FBQ1QsSUFBSTtRQUUxRCxPQUFPVTtJQUNUO0lBRUFDLFNBQVM7UUFDUCxNQUFNYixTQUFTLElBQUksQ0FBQ2MsU0FBUyxJQUN2QkMsT0FBTztZQUNMZjtRQUNGO1FBRU4sT0FBT2U7SUFDVDtJQUVBLE9BQU9iLE9BQU8sV0FBVztJQUV6QixPQUFPYyxTQUFTRCxJQUFJLEVBQUVoQixPQUFPLEVBQUU7UUFDN0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR2UsTUFDYkosZUFBZVgsUUFDZlEsV0FBV1QsUUFBUWtCLDBCQUEwQixDQUFDTjtRQUVwRCxPQUFPSDtJQUNUO0lBRUEsT0FBT1UsU0FBU2hCLElBQUksRUFBRUgsT0FBTyxFQUFFO1FBQzdCLE1BQU1DLFNBQVNFLE1BQ1RELE9BQU8sTUFDUE8sV0FBVyxJQUFJWCxTQUFTRSxTQUFTQyxRQUFRQyxNQUFNQztRQUVyRCxPQUFPTTtJQUNUO0FBQ0YifQ==