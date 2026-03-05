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
const _necessary = require("necessary");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _type = require("../utilities/type");
const _json = require("../utilities/json");
const _element = require("../utilities/element");
const { push, first } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Type extends _occamlanguages.Element {
    constructor(context, string, node, name, prefixName, superTypes, properties, provisional){
        super(context, string, node);
        this.name = name;
        this.prefixName = prefixName;
        this.superTypes = superTypes;
        this.properties = properties;
        this.provisional = provisional;
    }
    getName() {
        return this.name;
    }
    getPrefixName() {
        return this.prefixName;
    }
    getSuperTypes() {
        return this.superTypes;
    }
    getTypeNode() {
        const node = this.getNode(), typeNode = node; ///
        return typeNode;
    }
    getProperties(includeSuperTypes = true) {
        const properties = [];
        push(properties, this.properties);
        if (includeSuperTypes) {
            this.superTypes.forEach((superType)=>{
                const superTypeProperties = superType.getProperties();
                push(properties, superTypeProperties);
            });
        }
        return properties;
    }
    isProvisional(includeSuperTypes = true) {
        let provisional = this.provisional;
        if (includeSuperTypes) {
            if (!provisional) {
                provisional = this.superTypes.some((superType)=>{
                    const superTypeProvisional = superType.isProvisional();
                    if (superTypeProvisional) {
                        return true;
                    }
                });
            }
        }
        return provisional;
    }
    setName(name) {
        this.name = name;
    }
    setPrefixName(prefixName) {
        this.prefixName = prefixName;
    }
    setSuperTypes(superTypes) {
        this.superTypes = superTypes;
    }
    setProperties(properties) {
        this.properties = properties;
    }
    setProvisional(provisional) {
        this.provisional = provisional;
    }
    replaceSuperType(superType, index) {
        const start = index, deleteCount = 1;
        this.superTypes.splice(start, deleteCount, superType);
    }
    isPrefixed() {
        const prefixed = this.prefixName !== null;
        return prefixed;
    }
    getPrefixedName() {
        let prefixedName = null;
        const prefixed = this.isPrefixed();
        if (prefixed) {
            prefixedName = `${this.prefixName}${this.name}`;
        }
        return prefixedName;
    }
    getNominalTypeName() {
        const prefixed = this.isPrefixed(), nominalTypeName = prefixed ? `${this.prefixName}${this.name}` : this.name;
        return nominalTypeName;
    }
    isBasic() {
        let basic = false;
        const superTypesLength = this.superTypes.length;
        if (superTypesLength === 1) {
            const firstSuperType = first(this.superTypes), superType = firstSuperType, baseType = (0, _type.baseTypeFromNothing)();
            if (superType === baseType) {
                basic = true;
            }
        }
        return basic;
    }
    isRefined() {
        let refined = false;
        const superTypesLength = this.superTypes.length;
        if (superTypesLength === 1) {
            const firstSuperType = first(this.superTypes), superType = firstSuperType, superTypeName = superType.getName();
            if (superTypeName === this.name) {
                refined = true;
            }
        }
        return refined;
    }
    isEqualTo(type) {
        const equalTo = this === type;
        return equalTo;
    }
    isSubTypeOf(type) {
        let subTypeOf;
        const baseType = (0, _type.baseTypeFromNothing)();
        if (this === baseType) {
            subTypeOf = false;
        } else {
            subTypeOf = this.superTypes.some((superType)=>{
                if (superType === type) {
                    return true;
                }
                const superTypeSubTypeOfType = superType.isSubTypeOf(type);
                if (superTypeSubTypeOfType) {
                    return true;
                }
            });
        }
        return subTypeOf;
    }
    isSuperTypeOf(type) {
        const subTypeOf = type.isSubTypeOf(this), superTypeOf = subTypeOf; ///
        return superTypeOf;
    }
    isComparableTo(type) {
        const equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), comparableTo = equalTo || subTypeOf || superTypeOf;
        return comparableTo;
    }
    isEqualToOrSubTypeOf(type) {
        const equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), equalToOrSubTypeOf = equalTo || subTypeOf;
        return equalToOrSubTypeOf;
    }
    isEqualToOrSuperTypeOf(type) {
        const equalTo = this.isEqualTo(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSuperTypeOf = equalTo || superTypeOf;
        return equalToOrSuperTypeOf;
    }
    compareTypeName(typeName) {
        const name = this.getName(), nameTypeName = name === typeName, comparesToTypeName = nameTypeName; ///
        return comparesToTypeName;
    }
    compareProvisional(provisional, includeSupertypes = true) {
        let comparesToProvisional;
        const provisionalA = provisional; ///
        provisional = this.isProvisional(includeSupertypes);
        const provisionalB = provisional; ///
        comparesToProvisional = provisionalA === provisionalB;
        return comparesToProvisional;
    }
    comparePrefixedTypeName(prefixedTypeName) {
        let comparesToPrefixedTypeName = false;
        const prefixed = this.isPrefixed();
        if (prefixed) {
            const prefixedName = this.getPrefixedName(), prefixedTypeNamePrefixedName = prefixedTypeName === prefixedName;
            if (prefixedTypeNamePrefixedName) {
                comparesToPrefixedTypeName = true;
            }
        }
        return comparesToPrefixedTypeName;
    }
    compareNominalTypeName(nominalTypeName) {
        let comparesToNominalTypeName = false;
        if (!comparesToNominalTypeName) {
            const name = this.getName(), nominalTypeNameName = nominalTypeName === name;
            if (nominalTypeNameName) {
                comparesToNominalTypeName = true;
            }
        }
        if (!comparesToNominalTypeName) {
            const prefixed = this.isPrefixed();
            if (prefixed) {
                const prefixedName = this.getPrefixedName(), nominalTypeNamePrefixedName = nominalTypeName === prefixedName;
                if (nominalTypeNamePrefixedName) {
                    comparesToNominalTypeName = true;
                }
            }
        }
        return comparesToNominalTypeName;
    }
    toJSON() {
        const superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), superTypes = superTypesJSON, string = this.getString(), json = {
            string,
            superTypes
        };
        return json;
    }
    static name = "Type";
    static fromJSON(json, context) {
        const type = (0, _context.literally)((context)=>{
            const { string } = json, typeNode = (0, _instantiate.instantiateType)(string, context), node = typeNode, name = (0, _element.nameFromTypeNode)(typeNode, context), prefixName = (0, _element.prefixNameFromTypeNode)(typeNode, context), superTypes = (0, _json.superTypesFromJSON)(json, context), properties = (0, _element.propertiesFromTypeNode)(typeNode, context), provisional = (0, _element.provisionalFromTypeNode)(typeNode, context);
            context = null; ///
            const type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
            return type;
        }, context);
        return type;
    }
    static fromName(name, context) {
        const string = name, node = null, prefixName = null, superTypes = [], properties = [], provisional = false;
        context = null;
        const type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
        return type;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVOb2RlLCBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlLCBwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlLCBwcm92aXNpb25hbEZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcmVmaXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeE5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgdGhpcy5zdXBlclR5cGVzLmZvckVhY2goKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWw7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvdmlzaW9uYWwgPSBzdXBlclR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpIHtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHJlcGxhY2VTdXBlclR5cGUoc3VwZXJUeXBlLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5zdXBlclR5cGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHN1cGVyVHlwZSk7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gKHRoaXMucHJlZml4TmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRQcmVmaXhlZE5hbWUoKSB7XG4gICAgbGV0IHByZWZpeGVkTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBwcmVmaXhlZE5hbWUgPSBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJlZml4ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IGJhc2VUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBjb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZVR5cGVOYW1lID0gKG5hbWUgPT09IHR5cGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvVHlwZU5hbWUgPSBuYW1lVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwsIGluY2x1ZGVTdXBlcnR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBjb21wYXJlc1RvUHJvdmlzaW9uYWwgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICBwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKHByZWZpeGVkVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgIGlmIChwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZU5hbWUgPSAobm9taW5hbFR5cGVOYW1lID09PSBuYW1lKTtcblxuICAgICAgaWYgKG5vbWluYWxUeXBlTmFtZU5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKG5vbWluYWxUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcblxuICAgICAgICBpZiAobm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwdXNoIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXROYW1lIiwiZ2V0UHJlZml4TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRUeXBlTm9kZSIsImdldE5vZGUiLCJ0eXBlTm9kZSIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJpbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpc1ByZWZpeGVkIiwicHJlZml4ZWQiLCJnZXRQcmVmaXhlZE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImNvbXBhcmVUeXBlTmFtZSIsInR5cGVOYW1lIiwibmFtZVR5cGVOYW1lIiwiY29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJjb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbEEiLCJwcm92aXNpb25hbEIiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZU5hbWUiLCJub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwiZ2V0U3RyaW5nIiwianNvbiIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVUeXBlIiwibmFtZUZyb21UeXBlTm9kZSIsInByZWZpeE5hbWVGcm9tVHlwZU5vZGUiLCJzdXBlclR5cGVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzRnJvbVR5cGVOb2RlIiwicHJvdmlzaW9uYWxGcm9tVHlwZU5vZGUiLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCOzJCQUNPOzBCQUVSO3lCQUNHOzZCQUNNO3NCQUNJO3NCQUMyQjt5QkFDMkM7QUFFMUcsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUV0QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ3hGLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUM7UUFDdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxjQUFjO1FBQ1osTUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLFdBQVdYLE1BQU8sR0FBRztRQUUzQixPQUFPVztJQUNUO0lBRUFDLGNBQWNDLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsTUFBTVQs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