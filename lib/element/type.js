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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tSlNPTixcbiAgICAgICAgIHByZWZpeE5hbWVGcm9tSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNGcm9tSlNPTixcbiAgICAgICAgIHByb3Zpc2lvbmFsRnJvbUpTT04sXG4gICAgICAgICBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLFxuICAgICAgICAgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04sXG4gICAgICAgICBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgaXNFc3RhYmxpc2hlZChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gKHRoaXMucHJlZml4TmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRQcmVmaXhlZE5hbWUoKSB7XG4gICAgbGV0IHByZWZpeGVkTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBwcmVmaXhlZE5hbWUgPSBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJlZml4ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IGJhc2VUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBjb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb1R5cGVOYW1lID0gbmFtZVR5cGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1R5cGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsLCBpbmNsdWRlU3VwZXJ0eXBlcyA9IHRydWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Byb3Zpc2lvbmFsO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgY29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBuYW1lTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gbm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmIChuYW1lTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICAgIHByZWZpeGVkTmFtZU5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhlZE5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkTmFtZU5vbWluYWxUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgcHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChwcmVmaXhlZFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICBpZiAocHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKGFicmlkZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgaWYgKCFhYnJpZGdlZCkge1xuICAgICAgY29uc3QgcHJlZml4TmFtZUpTT04gPSBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTih0aGlzLnByZWZpeE5hbWUpLFxuICAgICAgICAgICAgc3VwZXJUeXBlc0pTT04gPSBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTih0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgICAgcHJvdmlzaW5vYWxKU09NID0gcHJvdmlzaW9uYWxUb1Byb3Zpc2lvbmFsSlNPTih0aGlzLnByb3Zpc2lvbmFsKSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lSlNPTiwgIC8vL1xuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0pTT04sICAvLy9cbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW5vYWxKU09NOyAgLy8vXG5cbiAgICAgIE9iamVjdC5hc3NpZ24oanNvbiwge1xuICAgICAgICBwcmVmaXhOYW1lLFxuICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBwcm92aXNpb25hbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgdHlwZU5vZGUgPSBpbnN0YW50aWF0ZVR5cGUoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSB0eXBlTm9kZSwgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcmVmaXhOYW1lID0gcHJlZml4TmFtZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInB1c2giLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiVHlwZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJwcmVmaXhOYW1lIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsImdldE5hbWUiLCJnZXRQcmVmaXhOYW1lIiwiZ2V0U3VwZXJUeXBlcyIsImdldFR5cGVOb2RlIiwiZ2V0Tm9kZSIsInR5cGVOb2RlIiwiZ2V0UHJvcGVydGllcyIsImluY2x1ZGVTdXBlclR5cGVzIiwiZm9yRWFjaCIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJpc1Byb3Zpc2lvbmFsIiwic29tZSIsInN1cGVyVHlwZVByb3Zpc2lvbmFsIiwic2V0TmFtZSIsInNldFByZWZpeE5hbWUiLCJzZXRTdXBlclR5cGVzIiwic2V0UHJvcGVydGllcyIsInNldFByb3Zpc2lvbmFsIiwiaXNFc3RhYmxpc2hlZCIsImVzdGFibGlzaGVkIiwiaXNQcmVmaXhlZCIsInByZWZpeGVkIiwiZ2V0UHJlZml4ZWROYW1lIiwicHJlZml4ZWROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNCYXNpYyIsImJhc2ljIiwic3VwZXJUeXBlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0U3VwZXJUeXBlIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiaXNSZWZpbmVkIiwicmVmaW5lZCIsInN1cGVyVHlwZU5hbWUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwic3VwZXJUeXBlU3ViVHlwZU9mVHlwZSIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YiLCJlcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YiLCJjb21wYXJlVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVUeXBlTmFtZSIsImNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVQcm92aXNpb25hbCIsImluY2x1ZGVTdXBlcnR5cGVzIiwiY29tcGFyZXNUb1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxBIiwicHJvdmlzaW9uYWxCIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJuYW1lTm9taW5hbFR5cGVOYW1lIiwicHJlZml4ZWROYW1lTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lIiwidG9KU09OIiwiYWJyaWRnZWQiLCJnZXRTdHJpbmciLCJnZXRCcmVha1BvaW50IiwianNvbiIsInByZWZpeE5hbWVKU09OIiwicHJlZml4bmFtZVRvUHJldml4TmFtZUpTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInByb3Zpc2lub2FsSlNPTSIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUeXBlIiwibmFtZUZyb21UeXBlTm9kZSIsInByZWZpeE5hbWVGcm9tSlNPTiIsInN1cGVyVHlwZXNGcm9tSlNPTiIsInByb3BlcnRpZXNGcm9tSlNPTiIsInByb3Zpc2lvbmFsRnJvbUpTT04iLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBQTs7O2dDQW5Cd0I7MkJBQ087MEJBRVI7eUJBQ0s7NkJBQ0k7eUJBQ0M7c0JBQ0c7c0JBUVM7QUFFN0MsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUV0QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDbkcsS0FBSyxDQUFDUixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDTCxJQUFJO0lBQ2xCO0lBRUFNLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDTCxVQUFVO0lBQ3hCO0lBRUFNLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDTCxVQUFVO0lBQ3hCO0lBRUFNLGNBQWM7UUFDWixNQUFNVixPQUFPLElBQUksQ0FBQ1csT0FBTyxJQUNuQkMsV0FBV1osTUFBTyxHQUFHO1FBRTNCLE9BQU9ZO0lBQ1Q7SUFFQUMsY0FBY0Msb0JBQW9CLElBQUksRUFBRTtRQUN0QyxNQUFNVCxhQUFh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