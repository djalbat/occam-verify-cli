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
const _type = require("../utilities/type");
const _json = require("../utilities/json");
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
        const nameJSON = (0, _json.nameToNameJSON)(this.name), prefixNameJSON = (0, _json.nameToNameJSON)(this.prefixName), propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), provisionalJSON = (0, _json.provisionalToProvisionalJSON)(this.provisional), name = nameJSON, prefixName = prefixNameJSON, properties = propertiesJSON, superTypes = superTypesJSON, provisional = provisionalJSON, string = this.getString(), json = {
            string,
            name,
            prefixName,
            properties,
            superTypes,
            provisional
        };
        return json;
    }
    static name = "Type";
    static fromJSON(json, context) {
        debugger;
    }
    static fromName(name, context) {
        const string = name, node = null, prefixName = null, superTypes = [], properties = [], provisional = false, type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
        return type;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBuYW1lVG9OYW1lSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShzdXBlclR5cGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnN1cGVyVHlwZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc3VwZXJUeXBlKTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lVHlwZU5hbWUgPSAobmFtZSA9PT0gdHlwZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9UeXBlTmFtZSA9IG5hbWVUeXBlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCwgaW5jbHVkZVN1cGVydHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQSA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIGNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb3Zpc2lvbmFsO1xuICB9XG5cbiAgY29tcGFyZVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgIHByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUgPSAocHJlZml4ZWRUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcblxuICAgICAgaWYgKHByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGlmICghY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lTmFtZSA9IChub21pbmFsVHlwZU5hbWUgPT09IG5hbWUpO1xuXG4gICAgICBpZiAobm9taW5hbFR5cGVOYW1lTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUgPSAobm9taW5hbFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICAgIGlmIChub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWVKU09OID0gbmFtZVRvTmFtZUpTT04odGhpcy5uYW1lKSxcbiAgICAgICAgICBwcmVmaXhOYW1lSlNPTiA9IG5hbWVUb05hbWVKU09OKHRoaXMucHJlZml4TmFtZSksXG4gICAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm92aXNpb25hbEpTT04gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2UsXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInB1c2giLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFR5cGVOb2RlIiwiZ2V0Tm9kZSIsInR5cGVOb2RlIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwic2V0TmFtZSIsInNldFByZWZpeE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwicmVwbGFjZVN1cGVyVHlwZSIsImluZGV4Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImlzUHJlZml4ZWQiLCJwcmVmaXhlZCIsImdldFByZWZpeGVkTmFtZSIsInByZWZpeGVkTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImlzQmFzaWMiLCJiYXNpYyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cGVyVHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzdXBlclR5cGVOYW1lIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwiY29tcGFyZVR5cGVOYW1lIiwidHlwZU5hbWUiLCJuYW1lVHlwZU5hbWUiLCJjb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsImNvbXBhcmVzVG9Qcm92aXNpb25hbCIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lTmFtZSIsIm5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSIsInRvSlNPTiIsIm5hbWVKU09OIiwibmFtZVRvTmFtZUpTT04iLCJwcmVmaXhOYW1lSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwicHJvdmlzaW9uYWxKU09OIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MkJBQ087MEJBRVI7c0JBQ2E7c0JBQ2lGO0FBRXJILE1BQU0sRUFBRUEsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFdEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVD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