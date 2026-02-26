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
const _string = require("../utilities/string");
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
        const propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), provisional = this.provisional, properties = propertiesJSON, superTypes = superTypesJSON, name = this.name, prefixName = this.prefixName, json = {
            name,
            prefixName,
            superTypes,
            properties,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyB0eXBlU3RyaW5nRnJvbVR5cGVOYW1lVHlwZVByZWZpeE5hbWVBbmRTdXBlclR5cGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJlZml4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKSB7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICByZXBsYWNlU3VwZXJUeXBlKHN1cGVyVHlwZSwgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuc3VwZXJUeXBlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBzdXBlclR5cGUpO1xuICB9XG5cbiAgaXNQcmVmaXhlZCgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9ICh0aGlzLnByZWZpeE5hbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByZWZpeGVkO1xuICB9XG5cbiAgZ2V0UHJlZml4ZWROYW1lKCkge1xuICAgIGxldCBwcmVmaXhlZE5hbWUgPSBudWxsO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgcHJlZml4ZWROYW1lID0gYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeGVkTmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHByZWZpeGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5wcmVmaXhOYW1lfSR7dGhpcy5uYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgaXNCYXNpYygpIHtcbiAgICBsZXQgYmFzaWMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBiYXNlVHlwZSkge1xuICAgICAgICBiYXNpYyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2ljO1xuICB9XG5cbiAgaXNSZWZpbmVkKCkge1xuICAgIGxldCByZWZpbmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZU5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICByZWZpbmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmaW5lZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIGlmICh0aGlzID09PSBiYXNlVHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlR5cGVPZiA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHsgLy8vXG4gICAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUgPSBzdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVN1YlR5cGVPZlR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3Qgc3ViVHlwZU9mID0gdHlwZS5pc1N1YlR5cGVPZih0aGlzKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHN1YlR5cGVPZjsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVUeXBlTmFtZSA9IChuYW1lID09PSB0eXBlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb1R5cGVOYW1lID0gbmFtZVR5cGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1R5cGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsLCBpbmNsdWRlU3VwZXJ0eXBlcyA9IHRydWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Byb3Zpc2lvbmFsO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgY29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG4gIH1cblxuICBjb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgcHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChwcmVmaXhlZFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICBpZiAocHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWVOYW1lID0gKG5vbWluYWxUeXBlTmFtZSA9PT0gbmFtZSk7XG5cbiAgICAgIGlmIChub21pbmFsVHlwZU5hbWVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChub21pbmFsVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgICAgaWYgKG5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gdGhpcy5wcmVmaXhOYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcHJlZml4TmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicHVzaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUeXBlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0TmFtZSIsImdldFByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0VHlwZU5vZGUiLCJnZXROb2RlIiwidHlwZU5vZGUiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJmb3JFYWNoIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlUHJvcGVydGllcyIsImlzUHJvdmlzaW9uYWwiLCJzb21lIiwic3VwZXJUeXBlUHJvdmlzaW9uYWwiLCJzZXROYW1lIiwic2V0UHJlZml4TmFtZSIsInNldFN1cGVyVHlwZXMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJyZXBsYWNlU3VwZXJUeXBlIiwiaW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJjb21wYXJlVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVUeXBlTmFtZSIsImNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVQcm92aXNpb25hbCIsImluY2x1ZGVTdXBlcnR5cGVzIiwiY29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWVOYW1lIiwibm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lIiwidG9KU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0NBVndCOzJCQUNPOzBCQUVSO3NCQUNhO3dCQUM4QjtzQkFDNkM7QUFFL0csTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUV0QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ3hGLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUM7UUFDdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxjQUFjO1FBQ1osTUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLFdBQVdYLE1BQU8sR0FBRztRQUUzQixPQUFPVztJQUNUO0lBRUFDLGNBQWNDLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsTUFBTVQsYUFBYSxFQUFFO1FBRXJCWixLQUFLWSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtRQUVoQyxJQUFJUyxtQkFBbUI7WUFDckIsSUFBSSxDQUFDVixVQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDQztnQkFDdkIsTUFBTUMsc0JBQXNCRCxVQUFVSCxhQUFhO2dCQUVuRHBCLEtBQUtZLFlBQVlZO1lBQ25CO1FBQ0Y7UUFFQSxPQUFPWjtJQUNUO0lBRUFhLGNBQWNKLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsSUFBSVIsY0FBYyxJQUFJLENBQUNBLFdBQVc7UUFFbEMsSUFBSVEsbUJBQW1CO1lBQ3JCLElBQUksQ0FBQ1IsYUFBYTtnQkFDaEJBLGNBQWMsSUFBSSxDQUFDRixVQUFVLENBQUNlLElBQUksQ0FBQyxDQUFDSDtvQkFDbEMsTUFBTUksdUJBQXVCSixVQUFVRSxhQUFhO29CQUVwRCxJQUFJRSxzQkFBc0I7d0JBQ3hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsT0FBT2Q7SUFDVDtJQUVBZSxRQUFRbkIsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQW9CLGNBQWNuQixVQUFVLEVBQUU7UUFDeEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFvQixjQUFjbkIsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtJQUNwQjtJQUVBb0IsY0FBY25CLFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQW9CLGVBQWVuQixXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFvQixpQkFBaUJWLFNBQVMsRUFBRVcsS0FBSyxFQUFFO1FBQ2pDLE1BQU1DLFFBQVFELE9BQ1JFLGNBQWM7UUFFcEIsSUFBSSxDQUFDekIsVUFBVSxDQUFDMEIsTUFBTSxDQUFDRixPQUFPQyxhQUFhYjtJQUM3QztJQUVBZSxhQUFhO1FBQ1gsTUFBTUMsV0FBWSxJQUFJLENBQUM3QixVQUFVLEtBQUs7UUFFdEMsT0FBTzZCO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQ2hCLElBQUlDLGVBQWU7UUFFbkIsTUFBTUYsV0FBVyxJQUFJLENBQUNELFVBQVU7UUFFaEMsSUFBSUMsVUFBVTtZQUNaRSxlQUFlLEdBQUcsSUFBSSxDQUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQ0QsSUFBSSxFQUFFO1FBQ2pEO1FBRUEsT0FBT2dDO0lBQ1Q7SUFFQUMscUJBQXFCO1FBQ25CLE1BQU1ILFdBQVcsSUFBSSxDQUFDRCxVQUFVLElBQzFCSyxrQkFBa0JKLFdBQ0MsR0FBRyxJQUFJLENBQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDRCxJQUFJLEVBQUUsR0FDN0IsSUFBSSxDQUFDQSxJQUFJO1FBRXJDLE9BQU9rQztJQUNUO0lBRUFDLFVBQVU7UUFDUixJQUFJQyxRQUFRO1FBRVosTUFBTUMsbUJBQW1CLElBQUksQ0FBQ25DLFVBQVUsQ0FBQ29DLE1BQU07UUFFL0MsSUFBSUQscUJBQXFCLEdBQUc7WUFDMUIsTUFBTUUsaUJBQWlCL0MsTUFBTSxJQUFJLENBQUNVLFVBQVUsR0FDdENZLFlBQVl5QixnQkFDWkMsV0FBV0MsSUFBQUEseUJBQW1CO1lBRXBDLElBQUkzQixjQUFjMEIsVUFBVTtnQkFDMUJKLFFBQVE7WUFDVjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBTSxZQUFZO1FBQ1YsSUFBSUMsVUFBVTtRQUVkLE1BQU1OLG1CQUFtQixJQUFJLENBQUNuQyxVQUFVLENBQUNvQyxNQUFNO1FBRS9DLElBQUlELHFCQUFxQixHQUFHO1lBQzFCLE1BQU1FLGlCQUFpQi9DLE1BQU0sSUFBSSxDQUFDVSxVQUFVLEdBQ3RDWSxZQUFZeUIsZ0JBQ1pLLGdCQUFnQjlCLFVBQVVULE9BQU87WUFFdkMsSUFBSXVDLGtCQUFrQixJQUFJLENBQUM1QyxJQUFJLEVBQUU7Z0JBQy9CMkMsVUFBVTtZQUNaO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFFLFVBQVVDLElBQUksRUFBRTtRQUNkLE1BQU1DLFVBQVcsSUFBSSxLQUFLRDtRQUUxQixPQUFPQztJQUNUO0lBRUFDLFlBQVlGLElBQUksRUFBRTtRQUNoQixJQUFJRztRQUVKLE1BQU1ULFdBQVdDLElBQUFBLHlCQUFtQjtRQUVwQyxJQUFJLElBQUksS0FBS0QsVUFBVTtZQUNyQlMsWUFBWTtRQUNkLE9BQU87WUFDTEEsWUFBWSxJQUFJLENBQUMvQyxVQUFVLENBQUNlLElBQUksQ0FBQyxDQUFDSDtnQkFDaEMsSUFBSUEsY0FBY2dDLE1BQU07b0JBQ3RCLE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTUkseUJBQXlCcEMsVUFBVWtDLFdBQVcsQ0FBQ0Y7Z0JBRXJELElBQUlJLHdCQUF3QjtvQkFDMUIsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFFLGNBQWNMLElBQUksRUFBRTtRQUNsQixNQUFNRyxZQUFZSCxLQUFLRSxXQUFXLENBQUMsSUFBSSxHQUNqQ0ksY0FBY0gsV0FBWSxHQUFHO1FBRW5DLE9BQU9HO0lBQ1Q7SUFFQUMsZUFBZVAsSUFBSSxFQUFFO1FBQ25CLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3Qk0sY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0wsT0FDakNRLGVBQWdCUCxXQUFXRSxhQUFhRztRQUU5QyxPQUFPRTtJQUNUO0lBRUFDLHFCQUFxQlQsSUFBSSxFQUFFO1FBQ3pCLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QlUscUJBQXNCVCxXQUFXRTtRQUV2QyxPQUFPTztJQUNUO0lBRUFDLHVCQUF1QlgsSUFBSSxFQUFFO1FBQzNCLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCTSxjQUFjLElBQUksQ0FBQ0QsYUFBYSxDQUFDTCxPQUNqQ1ksdUJBQXdCWCxXQUFXSztRQUV6QyxPQUFPTTtJQUNUO0lBRUFDLGdCQUFnQkMsUUFBUSxFQUFFO1FBQ3hCLE1BQU01RCxPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQndELGVBQWdCN0QsU0FBUzRELFVBQ3pCRSxxQkFBcUJELGNBQWUsR0FBRztRQUU3QyxPQUFPQztJQUNUO0lBRUFDLG1CQUFtQjNELFdBQVcsRUFBRTRELG9CQUFvQixJQUFJLEVBQUU7UUFDeEQsSUFBSUM7UUFFSixNQUFNQyxlQUFlOUQsYUFBYSxHQUFHO1FBRXJDQSxjQUFjLElBQUksQ0FBQ1ksYUFBYSxDQUFDZ0Q7UUFFakMsTUFBTUcsZUFBZS9ELGFBQWEsR0FBRztRQUVyQzZELHdCQUF5QkMsaUJBQWlCQztRQUUxQyxPQUFPRjtJQUNUO0lBRUFHLHdCQUF3QkMsZ0JBQWdCLEVBQUU7UUFDeEMsSUFBSUMsNkJBQTZCO1FBRWpDLE1BQU14QyxXQUFXLElBQUksQ0FBQ0QsVUFBVTtRQUVoQyxJQUFJQyxVQUFVO1lBQ1osTUFBTUUsZUFBZSxJQUFJLENBQUNELGVBQWUsSUFDbkN3QywrQkFBZ0NGLHFCQUFxQnJDO1lBRTNELElBQUl1Qyw4QkFBOEI7Z0JBQ2hDRCw2QkFBNkI7WUFDL0I7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUUsdUJBQXVCdEMsZUFBZSxFQUFFO1FBQ3RDLElBQUl1Qyw0QkFBNEI7UUFFaEMsSUFBSSxDQUFDQSwyQkFBMkI7WUFDOUIsTUFBTXpFLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CcUUsc0JBQXVCeEMsb0JBQW9CbEM7WUFFakQsSUFBSTBFLHFCQUFxQjtnQkFDdkJELDRCQUE0QjtZQUM5QjtRQUNGO1FBRUEsSUFBSSxDQUFDQSwyQkFBMkI7WUFDOUIsTUFBTTNDLFdBQVcsSUFBSSxDQUFDRCxVQUFVO1lBRWhDLElBQUlDLFVBQVU7Z0JBQ1osTUFBTUUsZUFBZSxJQUFJLENBQUNELGVBQWUsSUFDbkM0Qyw4QkFBK0J6QyxvQkFBb0JGO2dCQUV6RCxJQUFJMkMsNkJBQTZCO29CQUMvQkYsNEJBQTRCO2dCQUM5QjtZQUNGO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFHLFNBQVM7UUFDUCxNQUFNQyxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQzNFLFVBQVUsR0FDM0Q0RSxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQzlFLFVBQVUsR0FDM0RFLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCRCxhQUFhMEUsZ0JBQ2IzRSxhQUFhNkUsZ0JBQ2IvRSxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsYUFBYSxJQUFJLENBQUNBLFVBQVUsRUFDNUJnRixPQUFPO1lBQ0xqRjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRU4sT0FBTzZFO0lBQ1Q7SUFFQSxPQUFPakYsT0FBTyxPQUFPO0lBRXJCLE9BQU9rRixTQUFTRCxJQUFJLEVBQUVwRixPQUFPLEVBQUU7UUFDN0IsUUFBUTtJQUNWO0lBRUEsT0FBT3NGLFNBQVNuRixJQUFJLEVBQUVILE9BQU8sRUFBRTtRQUM3QixNQUFNQyxTQUFTRSxNQUNURCxPQUFPLE1BQ1BFLGFBQWEsTUFDYkMsYUFBYSxFQUFFLEVBQ2ZDLGFBQWEsRUFBRSxFQUNmQyxjQUFjLE9BQ2QwQyxPQUFPLElBQUluRCxLQUFLRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztRQUV2RixPQUFPMEM7SUFDVDtBQUNGIn0=