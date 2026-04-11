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
        const nameNominalTypeName = this.name === nominalTypeName;
        if (nameNominalTypeName) {
            comparesToNominalTypeName = true;
        } else {
            const prefixed = this.isPrefixed();
            if (prefixed) {
                const prefixedName = this.getPrefixedName(), prefixedNameNominalTypeName = prefixedName === nominalTypeName;
                if (prefixedNameNominalTypeName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tSlNPTixcbiAgICAgICAgIHByZWZpeE5hbWVGcm9tSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNGcm9tSlNPTixcbiAgICAgICAgIHByb3Zpc2lvbmFsRnJvbUpTT04sXG4gICAgICAgICBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLFxuICAgICAgICAgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04sXG4gICAgICAgICBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgcmVwbGFjZVN1cGVyVHlwZShzdXBlclR5cGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLnN1cGVyVHlwZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc3VwZXJUeXBlKTtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvVHlwZU5hbWUgPSBuYW1lVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwsIGluY2x1ZGVTdXBlcnR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBjb21wYXJlc1RvUHJvdmlzaW9uYWwgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5hbWVOb21pbmFsVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKG5hbWVOb21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJlZml4ZWROYW1lTm9taW5hbFR5cGVOYW1lID0gKHByZWZpeGVkTmFtZSA9PT0gbm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAocHJlZml4ZWROYW1lTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICBwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKHByZWZpeGVkVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgIGlmIChwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oYWJyaWRnZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIGlmICghYWJyaWRnZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeE5hbWVKU09OID0gcHJlZml4bmFtZVRvUHJldml4TmFtZUpTT04odGhpcy5wcmVmaXhOYW1lKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICAgIHByb3Zpc2lub2FsSlNPTSA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUpTT04sICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lub2FsSlNPTTsgIC8vL1xuXG4gICAgICBPYmplY3QuYXNzaWduKGpzb24sIHtcbiAgICAgICAgcHJlZml4TmFtZSxcbiAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHR5cGVOb2RlID0gaW5zdGFudGlhdGVUeXBlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gdHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24pO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgcHJlZml4TmFtZSA9IG51bGwsXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IFtdLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwdXNoIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXROYW1lIiwiZ2V0UHJlZml4TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRUeXBlTm9kZSIsImdldE5vZGUiLCJ0eXBlTm9kZSIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJpbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpc1ByZWZpeGVkIiwicHJlZml4ZWQiLCJnZXRQcmVmaXhlZE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImNvbXBhcmVUeXBlTmFtZSIsInR5cGVOYW1lIiwibmFtZVR5cGVOYW1lIiwiY29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJjb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbEEiLCJwcm92aXNpb25hbEIiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsIm5hbWVOb21pbmFsVHlwZU5hbWUiLCJwcmVmaXhlZE5hbWVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJ0b0pTT04iLCJhYnJpZGdlZCIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iLCJwcmVmaXhOYW1lSlNPTiIsInByZWZpeG5hbWVUb1ByZXZpeE5hbWVKU09OIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm92aXNpbm9hbEpTT00iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJwcmVmaXhOYW1lRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7OztnQ0FuQndCOzJCQUNPOzBCQUVSO3lCQUNLOzZCQUNJO3lCQUNDO3NCQUNHO3NCQVFTO0FBRTdDLE1BQU0sRUFBRUEsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFdEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ25HLEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxjQUFjO1FBQ1osTUFBTVYsT0FBTyxJQUFJLENBQUNXLE9BQU8sSUFDbkJDLFdBQVdaLE1BQU8sR0FBRztRQUUzQixPQUFPWTtJQUNUO0lBRUFDLGNBQWNDLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsTUFBTVQsYUFBYSxFQUFFO1FBRXJCYixLQUFLYSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtRQUVoQyxJQUFJUyxtQkFBbUI7WUFDckIsSUFB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