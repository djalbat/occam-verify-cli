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
const _element = require("../utilities/element");
const _type = require("../utilities/type");
const _json = require("../utilities/json");
const { push, first } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Type extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name, prefixName, superTypes, properties, provisional){
        super(context, string, node, lineIndex);
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
        const nameTypeName = this.name === typeName, comparesToTypeName = nameTypeName; ///
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
    compareNominalTypeName(nominalTypeName) {
        let comparesToNominalTypeName = false;
        if (!comparesToNominalTypeName) {
            const nominalTypeNameName = this.name === nominalTypeName;
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
    toJSON(abridged = false) {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        if (!abridged) {
            const prefixNameJSON = (0, _json.prefixnameToPrevixNameJSON)(this.prefixName), superTypesJSON = (0, _json.superTypesToSuperTypesJSON)(this.superTypes), propertiesJSON = (0, _json.propertiesToPropertiesJSON)(this.properties), provisinoalJSOM = (0, _json.provisionalToProvisionalJSON)(this.provisional), prefixName = prefixNameJSON, superTypes = superTypesJSON, properties = propertiesJSON, provisional = provisinoalJSOM; ///
            Object.assign(json, {
                prefixName,
                superTypes,
                properties,
                provisional
            });
        }
        return json;
    }
    static name = "Type";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, typeNode = (0, _instantiate.instantiateType)(string, context), node = typeNode, name = (0, _element.nameFromTypeNode)(typeNode, context), prefixName = (0, _json.prefixNameFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), properties = (0, _json.propertiesFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json);
            context = null; ///
            const type = new Type(context, string, node, lineIndex, name, prefixName, superTypes, properties, provisional);
            return type;
        }, context);
    }
    static fromName(name, context) {
        const string = name, node = null, lineIndex = null, prefixName = null, superTypes = [], properties = [], provisional = false;
        context = null;
        const type = new Type(context, string, node, lineIndex, name, prefixName, superTypes, properties, provisional);
        return type;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tSlNPTixcbiAgICAgICAgIHByZWZpeE5hbWVGcm9tSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNGcm9tSlNPTixcbiAgICAgICAgIHByb3Zpc2lvbmFsRnJvbUpTT04sXG4gICAgICAgICBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLFxuICAgICAgICAgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04sXG4gICAgICAgICBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShzdXBlclR5cGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnN1cGVyVHlwZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc3VwZXJUeXBlKTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvVHlwZU5hbWUgPSBuYW1lVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwsIGluY2x1ZGVTdXBlcnR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBjb21wYXJlc1RvUHJvdmlzaW9uYWwgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGlmICghY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChub21pbmFsVHlwZU5hbWVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChub21pbmFsVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgICAgaWYgKG5vbWluYWxUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgcHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChwcmVmaXhlZFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICBpZiAocHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKGFicmlkZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICBpZiAoIWFicmlkZ2VkKSB7XG4gICAgICBjb25zdCBwcmVmaXhOYW1lSlNPTiA9IHByZWZpeG5hbWVUb1ByZXZpeE5hbWVKU09OKHRoaXMucHJlZml4TmFtZSksXG4gICAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgICBwcm92aXNpbm9hbEpTT00gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpbm9hbEpTT007ICAvLy9cblxuICAgICAgT2JqZWN0LmFzc2lnbihqc29uLCB7XG4gICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicHVzaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUeXBlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0TmFtZSIsImdldFByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0VHlwZU5vZGUiLCJnZXROb2RlIiwidHlwZU5vZGUiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJmb3JFYWNoIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlUHJvcGVydGllcyIsImlzUHJvdmlzaW9uYWwiLCJzb21lIiwic3VwZXJUeXBlUHJvdmlzaW9uYWwiLCJzZXROYW1lIiwic2V0UHJlZml4TmFtZSIsInNldFN1cGVyVHlwZXMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJyZXBsYWNlU3VwZXJUeXBlIiwiaW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJjb21wYXJlVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVUeXBlTmFtZSIsImNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVQcm92aXNpb25hbCIsImluY2x1ZGVTdXBlcnR5cGVzIiwiY29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWVOYW1lIiwibm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lIiwidG9KU09OIiwiYWJyaWRnZWQiLCJnZXRTdHJpbmciLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwicHJlZml4TmFtZUpTT04iLCJwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvdmlzaW5vYWxKU09NIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsIk9iamVjdCIsImFzc2lnbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGUiLCJuYW1lRnJvbVR5cGVOb2RlIiwicHJlZml4TmFtZUZyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkE7OztlQUFBOzs7Z0NBbkJ3QjsyQkFDTzswQkFFUjt5QkFDSzs2QkFDSTt5QkFDQztzQkFDRztzQkFRUztBQUU3QyxNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRXRDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsQ0FBRTtRQUNuRyxLQUFLLENBQUNSLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNMLElBQUk7SUFDbEI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sY0FBYztRQUNaLE1BQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyxXQUFXWixNQUFPLEdBQUc7UUFFM0IsT0FBT1k7SUFDVDtJQUVBQyxjQUFjQyxvQkFBb0IsSUFBSSxF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