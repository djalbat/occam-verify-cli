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
const _breakPoint = require("../utilities/breakPoint");
const _json = require("../utilities/json");
const { push, first } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Type extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name, prefixName, superTypes, properties, provisional){
        super(context, string, node, breakPoint);
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
    isEstablished(includeSuperTypes = true) {
        const provisional = this.isProvisional(includeSuperTypes), established = !provisional;
        return established;
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
    isEqualToOrSubTypeOf(type) {
        const equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), equalToOrSubTypeOf = equalTo || subTypeOf;
        return equalToOrSubTypeOf;
    }
    isEqualToOrSuperTypeOf(type) {
        const equalTo = this.isEqualTo(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSuperTypeOf = equalTo || superTypeOf;
        return equalToOrSuperTypeOf;
    }
    isEqualToSubTypeOrSuperTypeOf(type) {
        const equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), equalToSubTypeOrSuperTypeOf = equalTo || subTypeOf || superTypeOf;
        return equalToSubTypeOrSuperTypeOf;
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
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
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
            const { string } = json, typeNode = (0, _instantiate.instantiateType)(string, context), node = typeNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), name = (0, _element.nameFromTypeNode)(typeNode, context), prefixName = (0, _json.prefixNameFromJSON)(json, context), superTypes = (0, _json.superTypesFromJSON)(json, context), properties = (0, _json.propertiesFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json);
            context = null; ///
            const type = new Type(context, string, node, breakPoint, name, prefixName, superTypes, properties, provisional);
            return type;
        }, context);
    }
    static fromName(name, context) {
        const string = name, node = null, breakPoint = null, prefixName = null, superTypes = [], properties = [], provisional = false;
        context = null;
        const type = new Type(context, string, node, breakPoint, name, prefixName, superTypes, properties, provisional);
        return type;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tSlNPTixcbiAgICAgICAgIHByZWZpeE5hbWVGcm9tSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNGcm9tSlNPTixcbiAgICAgICAgIHByb3Zpc2lvbmFsRnJvbUpTT04sXG4gICAgICAgICBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLFxuICAgICAgICAgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04sXG4gICAgICAgICBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJlZml4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGVzO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XG5cbiAgICBwdXNoKHByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIHRoaXMuc3VwZXJUeXBlcy5mb3JFYWNoKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgcHVzaChwcm9wZXJ0aWVzLCBzdXBlclR5cGVQcm9wZXJ0aWVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSB0aGlzLnByb3Zpc2lvbmFsO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3Zpc2lvbmFsID0gc3VwZXJUeXBlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICAgIGlmIChzdXBlclR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKSB7XG4gICAgdGhpcy5wcmVmaXhOYW1lID0gcHJlZml4TmFtZTtcbiAgfVxuXG4gIHNldFN1cGVyVHlwZXMoc3VwZXJUeXBlcykge1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0UHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpIHtcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBpc0VzdGFibGlzaGVkKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3Zpc2lvbmFsID0gdGhpcy5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzKSxcbiAgICAgICAgICBlc3RhYmxpc2hlZCA9ICFwcm92aXNpb25hbDtcblxuICAgIHJldHVybiBlc3RhYmxpc2hlZDtcbiAgfVxuXG4gIGlzUHJlZml4ZWQoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSAodGhpcy5wcmVmaXhOYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcmVmaXhlZDtcbiAgfVxuXG4gIGdldFByZWZpeGVkTmFtZSgpIHtcbiAgICBsZXQgcHJlZml4ZWROYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIHByZWZpeGVkTmFtZSA9IGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcmVmaXhlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMucHJlZml4TmFtZX0ke3RoaXMubmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGlzQmFzaWMoKSB7XG4gICAgbGV0IGJhc2ljID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBlclR5cGVzTGVuZ3RoID0gdGhpcy5zdXBlclR5cGVzLmxlbmd0aDtcblxuICAgIGlmIChzdXBlclR5cGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFN1cGVyVHlwZSA9IGZpcnN0KHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaXJzdFN1cGVyVHlwZSwgLy8vXG4gICAgICAgICAgICBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICAgICAgYmFzaWMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYXNpYztcbiAgfVxuXG4gIGlzUmVmaW5lZCgpIHtcbiAgICBsZXQgcmVmaW5lZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGVOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgcmVmaW5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmluZWQ7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICBpZiAodGhpcyA9PT0gYmFzZVR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJUeXBlT2YgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7IC8vL1xuICAgICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdXBlclR5cGVTdWJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvVHlwZU5hbWUgPSBuYW1lVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwsIGluY2x1ZGVTdXBlcnR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBjb21wYXJlc1RvUHJvdmlzaW9uYWwgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5hbWVOb21pbmFsVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgaWYgKG5hbWVOb21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJlZml4ZWROYW1lTm9taW5hbFR5cGVOYW1lID0gKHByZWZpeGVkTmFtZSA9PT0gbm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAocHJlZml4ZWROYW1lTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICBwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKHByZWZpeGVkVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgIGlmIChwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWU7XG4gIH1cblxuICB0b0pTT04oYWJyaWRnZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIGlmICghYWJyaWRnZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeE5hbWVKU09OID0gcHJlZml4bmFtZVRvUHJldml4TmFtZUpTT04odGhpcy5wcmVmaXhOYW1lKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXNKU09OID0gc3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04odGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNKU09OID0gcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04odGhpcy5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICAgIHByb3Zpc2lub2FsSlNPTSA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUpTT04sICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lub2FsSlNPTTsgIC8vL1xuXG4gICAgICBPYmplY3QuYXNzaWduKGpzb24sIHtcbiAgICAgICAgcHJlZml4TmFtZSxcbiAgICAgICAgc3VwZXJUeXBlcyxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgcHJvdmlzaW9uYWxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInB1c2giLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXROYW1lIiwiZ2V0UHJlZml4TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRUeXBlTm9kZSIsImdldE5vZGUiLCJ0eXBlTm9kZSIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsImlzRXN0YWJsaXNoZWQiLCJlc3RhYmxpc2hlZCIsImlzUHJlZml4ZWQiLCJwcmVmaXhlZCIsImdldFByZWZpeGVkTmFtZSIsInByZWZpeGVkTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImlzQmFzaWMiLCJiYXNpYyIsInN1cGVyVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFN1cGVyVHlwZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsImlzUmVmaW5lZCIsInJlZmluZWQiLCJzdXBlclR5cGVOYW1lIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsInN1cGVyVHlwZVN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImlzRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mIiwiZXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mIiwiY29tcGFyZVR5cGVOYW1lIiwidHlwZU5hbWUiLCJuYW1lVHlwZU5hbWUiLCJjb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsImNvbXBhcmVzVG9Qcm92aXNpb25hbCIsInByb3Zpc2lvbmFsQSIsInByb3Zpc2lvbmFsQiIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwibmFtZU5vbWluYWxUeXBlTmFtZSIsInByZWZpeGVkTmFtZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSIsInRvSlNPTiIsImFicmlkZ2VkIiwiZ2V0U3RyaW5nIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwicHJlZml4TmFtZUpTT04iLCJwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTiIsInN1cGVyVHlwZXNKU09OIiwic3VwZXJUeXBlc1RvU3VwZXJUeXBlc0pTT04iLCJwcm9wZXJ0aWVzSlNPTiIsInByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OIiwicHJvdmlzaW5vYWxKU09NIiwicHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTiIsIk9iamVjdCIsImFzc2lnbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVR5cGUiLCJicmVha1BvaW50RnJvbUpTT04iLCJuYW1lRnJvbVR5cGVOb2RlIiwicHJlZml4TmFtZUZyb21KU09OIiwic3VwZXJUeXBlc0Zyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7Z0NBcEJ3QjsyQkFDTzswQkFFUjt5QkFDSzs2QkFDSTt5QkFDQztzQkFDRzs0QkFDMkI7c0JBUWxCO0FBRTdDLE1BQU0sRUFBRUEsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFdEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ3BHLEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFB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