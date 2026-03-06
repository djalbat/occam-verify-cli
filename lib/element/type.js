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
const _element = require("../utilities/element");
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
        const superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), provisinoalJSOM = (0, _json.provisionalToProvisionalJSON)(this.provisional), superTypes = superTypesJSON, properties = propertiesJSON, provisional = provisinoalJSOM, string = this.getString(), json = {
            string,
            superTypes,
            properties,
            provisional
        };
        return json;
    }
    static name = "Type";
    static fromJSON(json, context) {
        const type = (0, _context.literally)((context)=>{
            const { string } = json, typeNode = (0, _instantiate.instantiateType)(string, context), node = typeNode, name = (0, _element.nameFromTypeNode)(typeNode, context), prefixName = (0, _element.prefixNameFromTypeNode)(typeNode, context), superTypes = (0, _json.superTypesFromJSON)(json, context), properties = (0, _json.propertiesFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVOb2RlLCBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzdXBlclR5cGVzRnJvbUpTT04sIHByb3Zpc2lvbmFsRnJvbUpTT04sIHByb3BlcnRpZXNGcm9tSlNPTiwgcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiwgc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04sIHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShzdXBlclR5cGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnN1cGVyVHlwZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc3VwZXJUeXBlKTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lVHlwZU5hbWUgPSAobmFtZSA9PT0gdHlwZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9UeXBlTmFtZSA9IG5hbWVUeXBlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCwgaW5jbHVkZVN1cGVydHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQSA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKTtcblxuICAgIGNvbnN0IHByb3Zpc2lvbmFsQiA9IHByb3Zpc2lvbmFsOyAvLy9cblxuICAgIGNvbXBhcmVzVG9Qcm92aXNpb25hbCA9IChwcm92aXNpb25hbEEgPT09IHByb3Zpc2lvbmFsQik7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb3Zpc2lvbmFsO1xuICB9XG5cbiAgY29tcGFyZVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgIHByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUgPSAocHJlZml4ZWRUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcblxuICAgICAgaWYgKHByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGlmICghY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lTmFtZSA9IChub21pbmFsVHlwZU5hbWUgPT09IG5hbWUpO1xuXG4gICAgICBpZiAobm9taW5hbFR5cGVOYW1lTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICAgIGlmIChwcmVmaXhlZCkge1xuICAgICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUgPSAobm9taW5hbFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICAgIGlmIChub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgcHJvdmlzaW5vYWxKU09NID0gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTih0aGlzLnByb3Zpc2lvbmFsKSxcbiAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lub2FsSlNPTSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24pO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInB1c2giLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFR5cGVOb2RlIiwiZ2V0Tm9kZSIsInR5cGVOb2RlIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwic2V0TmFtZSIsInNldFByZWZpeE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwicmVwbGFjZVN1cGVyVHlwZSIsImluZGV4Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImlzUHJlZml4ZWQiLCJwcmVmaXhlZCIsImdldFByZWZpeGVkTmFtZSIsInByZWZpeGVkTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImlzQmFzaWMiLCJiYXNpYyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cGVyVHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzdXBlclR5cGVOYW1lIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwiY29tcGFyZVR5cGVOYW1lIiwidHlwZU5hbWUiLCJuYW1lVHlwZU5hbWUiLCJjb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsImNvbXBhcmVzVG9Qcm92aXNpb25hbCIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lTmFtZSIsIm5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSIsInRvSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvdmlzaW5vYWxKU09NIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsImdldFN0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlVHlwZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIiwic3VwZXJUeXBlc0Zyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7MkJBQ087MEJBRVI7eUJBQ0c7NkJBQ007c0JBQ0k7eUJBQ3FCO3NCQUN5RztBQUVsSyxNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRXRDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDeEYsS0FBSyxDQUFDUCxTQUFT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