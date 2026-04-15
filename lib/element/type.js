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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tSlNPTixcbiAgICAgICAgIHByZWZpeE5hbWVGcm9tSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNGcm9tSlNPTixcbiAgICAgICAgIHByb3Zpc2lvbmFsRnJvbUpTT04sXG4gICAgICAgICBwcmVmaXhuYW1lVG9QcmV2aXhOYW1lSlNPTixcbiAgICAgICAgIHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OLFxuICAgICAgICAgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04sXG4gICAgICAgICBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByZWZpeE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZml4TmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlcztcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnRpZXMoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xuXG4gICAgcHVzaChwcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVTdXBlclR5cGVzKSB7XG4gICAgICB0aGlzLnN1cGVyVHlwZXMuZm9yRWFjaCgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVByb3BlcnRpZXMgPSBzdXBlclR5cGUuZ2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIHB1c2gocHJvcGVydGllcywgc3VwZXJUeXBlUHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVyVHlwZXMgPSB0cnVlKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gdGhpcy5wcm92aXNpb25hbDtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA9IHRoaXMuc3VwZXJUeXBlcy5zb21lKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm92aXNpb25hbCA9IHN1cGVyVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldFByZWZpeE5hbWUocHJlZml4TmFtZSkge1xuICAgIHRoaXMucHJlZml4TmFtZSA9IHByZWZpeE5hbWU7XG4gIH1cblxuICBzZXRTdXBlclR5cGVzKHN1cGVyVHlwZXMpIHtcbiAgICB0aGlzLnN1cGVyVHlwZXMgPSBzdXBlclR5cGVzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKSB7XG4gICAgdGhpcy5wcm92aXNpb25hbCA9IHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgaXNFc3RhYmxpc2hlZChpbmNsdWRlU3VwZXJUeXBlcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJUeXBlcyksXG4gICAgICAgICAgZXN0YWJsaXNoZWQgPSAhcHJvdmlzaW9uYWw7XG5cbiAgICByZXR1cm4gZXN0YWJsaXNoZWQ7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gKHRoaXMucHJlZml4TmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRQcmVmaXhlZE5hbWUoKSB7XG4gICAgbGV0IHByZWZpeGVkTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBwcmVmaXhlZE5hbWUgPSBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJlZml4ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IGJhc2VUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBjb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb1R5cGVOYW1lID0gbmFtZVR5cGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1R5cGVOYW1lO1xuICB9XG5cbiAgY29tcGFyZVByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsLCBpbmNsdWRlU3VwZXJ0eXBlcyA9IHRydWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Byb3Zpc2lvbmFsO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxBID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpO1xuXG4gICAgY29uc3QgcHJvdmlzaW9uYWxCID0gcHJvdmlzaW9uYWw7IC8vL1xuXG4gICAgY29tcGFyZXNUb1Byb3Zpc2lvbmFsID0gKHByb3Zpc2lvbmFsQSA9PT0gcHJvdmlzaW9uYWxCKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBuYW1lTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gbm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmIChuYW1lTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJlZml4ZWQgPSB0aGlzLmlzUHJlZml4ZWQoKTtcblxuICAgICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICAgIHByZWZpeGVkTmFtZU5vbWluYWxUeXBlTmFtZSA9IChwcmVmaXhlZE5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkTmFtZU5vbWluYWxUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZE5hbWUgPSB0aGlzLmdldFByZWZpeGVkTmFtZSgpLFxuICAgICAgICAgICAgcHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSA9IChwcmVmaXhlZFR5cGVOYW1lID09PSBwcmVmaXhlZE5hbWUpO1xuXG4gICAgICBpZiAocHJlZml4ZWRUeXBlTmFtZVByZWZpeGVkTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lO1xuICB9XG5cbiAgdG9KU09OKGFicmlkZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICBpZiAoIWFicmlkZ2VkKSB7XG4gICAgICBjb25zdCBwcmVmaXhOYW1lSlNPTiA9IHByZWZpeG5hbWVUb1ByZXZpeE5hbWVKU09OKHRoaXMucHJlZml4TmFtZSksXG4gICAgICAgICAgICBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzSlNPTiA9IHByb3BlcnRpZXNUb1Byb3BlcnRpZXNKU09OKHRoaXMucHJvcGVydGllcyksXG4gICAgICAgICAgICBwcm92aXNpbm9hbEpTT00gPSBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OKHRoaXMucHJvdmlzaW9uYWwpLFxuICAgICAgICAgICAgcHJlZml4TmFtZSA9IHByZWZpeE5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0pTT04sICAvLy9cbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzSlNPTiwgIC8vL1xuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpbm9hbEpTT007ICAvLy9cblxuICAgICAgT2JqZWN0LmFzc2lnbihqc29uLCB7XG4gICAgICAgIHByZWZpeE5hbWUsXG4gICAgICAgIHN1cGVyVHlwZXMsXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBzdXBlclR5cGVzID0gc3VwZXJUeXBlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWxGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlID0gbmV3IFR5cGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBudWxsLFxuICAgICAgICAgIHN1cGVyVHlwZXMgPSBbXSxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gW10sXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IG5ldyBUeXBlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCBwcmVmaXhOYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicHVzaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJUeXBlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsInByZWZpeE5hbWUiLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwiZ2V0TmFtZSIsImdldFByZWZpeE5hbWUiLCJnZXRTdXBlclR5cGVzIiwiZ2V0VHlwZU5vZGUiLCJnZXROb2RlIiwidHlwZU5vZGUiLCJnZXRQcm9wZXJ0aWVzIiwiaW5jbHVkZVN1cGVyVHlwZXMiLCJmb3JFYWNoIiwic3VwZXJUeXBlIiwic3VwZXJUeXBlUHJvcGVydGllcyIsImlzUHJvdmlzaW9uYWwiLCJzb21lIiwic3VwZXJUeXBlUHJvdmlzaW9uYWwiLCJzZXROYW1lIiwic2V0UHJlZml4TmFtZSIsInNldFN1cGVyVHlwZXMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0UHJvdmlzaW9uYWwiLCJpc0VzdGFibGlzaGVkIiwiZXN0YWJsaXNoZWQiLCJpc1ByZWZpeGVkIiwicHJlZml4ZWQiLCJnZXRQcmVmaXhlZE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZiIsImVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZiIsImNvbXBhcmVUeXBlTmFtZSIsInR5cGVOYW1lIiwibmFtZVR5cGVOYW1lIiwiY29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJjb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbEEiLCJwcm92aXNpb25hbEIiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsIm5hbWVOb21pbmFsVHlwZU5hbWUiLCJwcmVmaXhlZE5hbWVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJ0b0pTT04iLCJhYnJpZGdlZCIsImdldFN0cmluZyIsImdldExpbmVJbmRleCIsImpzb24iLCJwcmVmaXhOYW1lSlNPTiIsInByZWZpeG5hbWVUb1ByZXZpeE5hbWVKU09OIiwic3VwZXJUeXBlc0pTT04iLCJzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiIsInByb3BlcnRpZXNKU09OIiwicHJvcGVydGllc1RvUHJvcGVydGllc0pTT04iLCJwcm92aXNpbm9hbEpTT00iLCJwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OIiwiT2JqZWN0IiwiYXNzaWduIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJwcmVmaXhOYW1lRnJvbUpTT04iLCJzdXBlclR5cGVzRnJvbUpTT04iLCJwcm9wZXJ0aWVzRnJvbUpTT04iLCJwcm92aXNpb25hbEZyb21KU09OIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7OztnQ0FuQndCOzJCQUNPOzBCQUVSO3lCQUNLOzZCQUNJO3lCQUNDO3NCQUNHO3NCQVFTO0FBRTdDLE1BQU0sRUFBRUEsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7TUFFdEMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQ25HLEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0wsSUFBSTtJQUNsQjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0wsVUFBVTtJQUN4QjtJQUVBTSxjQUFjO1FBQ1osTUFBTVYsT0FBTyxJQUFJLENBQUNXLE9BQU8sSUFDbkJDLFdBQVdaLE1BQU8sR0FBRztRQUUzQixPQUFPWTtJQUNUO0lBRUFDLGNBQWNDLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsTUFBTVQsYUFBYSxFQUFFO1FBRXJCYixLQUFLYSxZQUFZLElBQUksQ0FBQ0EsVUFBVTtRQUVoQyxJQUFJUyxtQkFBbUI7WUFDckIsSUFBSSxDQUFDVixVQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDQztnQkFDdkIsTUFBTUMsc0JBQXNCRCxVQUFVSCxhQUFhO2dCQUVuRHJCLEtBQUthLFlBQVlZO1lBQ25CO1FBQ0Y7UUFFQSxPQUFPWjtJQUNUO0lBRUFhLGNBQWNKLG9CQUFvQixJQUFJLEVBQUU7UUFDdEMsSUFBSVIsY0FBYyxJQUFJLENBQUNBLFdBQVc7UUFFbEMsSUFBSVEsbUJBQW1CO1lBQ3JCLElBQUksQ0FBQ1IsYUFBYTtnQkFDaEJBLGNBQWMsSUFBSSxDQUFDRixVQUFVLENBQUNlLElBQUksQ0FBQyxDQUFDSDtvQkFDbEMsTUFBTUksdUJBQXVCSixVQUFVRSxhQUFhO29CQUVwRCxJQUFJRSxzQkFBc0I7d0JBQ3hCLE9BQU87b0JBQ1Q7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsT0FBT2Q7SUFDVDtJQUVBZSxRQUFRbkIsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBO0lBQ2Q7SUFFQW9CLGNBQWNuQixVQUFVLEVBQUU7UUFDeEIsSUFBSSxDQUFDQSxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFvQixjQUFjbkIsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtJQUNwQjtJQUVBb0IsY0FBY25CLFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7SUFDcEI7SUFFQW9CLGVBQWVuQixXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO0lBQ3JCO0lBRUFvQixjQUFjWixvQkFBb0IsSUFBSSxFQUFFO1FBQ3RDLE1BQU1SLGNBQWMsSUFBSSxDQUFDWSxhQUFhLENBQUNKLG9CQUNqQ2EsY0FBYyxDQUFDckI7UUFFckIsT0FBT3FCO0lBQ1Q7SUFFQUMsYUFBYTtRQUNYLE1BQU1DLFdBQVksSUFBSSxDQUFDMUIsVUFBVSxLQUFLO1FBRXRDLE9BQU8wQjtJQUNUO0lBRUFDLGtCQUFrQjtRQUNoQixJQUFJQyxlQUFlO1FBRW5CLE1BQU1GLFdBQVcsSUFBSSxDQUFDRCxVQUFVO1FBRWhDLElBQUlDLFVBQVU7WUFDWkUsZUFBZSxHQUFHLElBQUksQ0FBQzVCLFVBQVUsR0FBRyxJQUFJLENBQUNELElBQUksRUFBRTtRQUNqRDtRQUVBLE9BQU82QjtJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNSCxXQUFXLElBQUksQ0FBQ0QsVUFBVSxJQUMxQkssa0JBQWtCSixXQUNDLEdBQUcsSUFBSSxDQUFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQ0QsSUFBSSxFQUFFLEdBQzdCLElBQUksQ0FBQ0EsSUFBSTtRQUVyQyxPQUFPK0I7SUFDVDtJQUVBQyxVQUFVO1FBQ1IsSUFBSUMsUUFBUTtRQUVaLE1BQU1DLG1CQUFtQixJQUFJLENBQUNoQyxVQUFVLENBQUNpQyxNQUFNO1FBRS9DLElBQUlELHFCQUFxQixHQUFHO1lBQzFCLE1BQU1FLGlCQUFpQjdDLE1BQU0sSUFBSSxDQUFDVyxVQUFVLEdBQ3RDWSxZQUFZc0IsZ0JBQ1pDLFdBQVdDLElBQUFBLHlCQUFtQjtZQUVwQyxJQUFJeEIsY0FBY3VCLFVBQVU7Z0JBQzFCSixRQUFRO1lBQ1Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQU0sWUFBWTtRQUNWLElBQUlDLFVBQVU7UUFFZCxNQUFNTixtQkFBbUIsSUFBSSxDQUFDaEMsVUFBVSxDQUFDaUMsTUFBTTtRQUUvQyxJQUFJRCxxQkFBcUIsR0FBRztZQUMxQixNQUFNRSxpQkFBaUI3QyxNQUFNLElBQUksQ0FBQ1csVUFBVSxHQUN0Q1ksWUFBWXNCLGdCQUNaSyxnQkFBZ0IzQixVQUFVVCxPQUFPO1lBRXZDLElBQUlvQyxrQkFBa0IsSUFBSSxDQUFDekMsSUFBSSxFQUFFO2dCQUMvQndDLFVBQVU7WUFDWjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBRSxVQUFVQyxJQUFJLEVBQUU7UUFDZCxNQUFNQyxVQUFXLElBQUksS0FBS0Q7UUFFMUIsT0FBT0M7SUFDVDtJQUVBQyxZQUFZRixJQUFJLEVBQUU7UUFDaEIsSUFBSUc7UUFFSixNQUFNVCxXQUFXQyxJQUFBQSx5QkFBbUI7UUFFcEMsSUFBSSxJQUFJLEtBQUtELFVBQVU7WUFDckJTLFlBQVk7UUFDZCxPQUFPO1lBQ0xBLFlBQVksSUFBSSxDQUFDNUMsVUFBVSxDQUFDZSxJQUFJLENBQUMsQ0FBQ0g7Z0JBQ2hDLElBQUlBLGNBQWM2QixNQUFNO29CQUN0QixPQUFPO2dCQUNUO2dCQUVBLE1BQU1JLHlCQUF5QmpDLFVBQVUrQixXQUFXLENBQUNGO2dCQUVyRCxJQUFJSSx3QkFBd0I7b0JBQzFCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBRSxjQUFjTCxJQUFJLEVBQUU7UUFDbEIsTUFBTUcsWUFBWUgsS0FBS0UsV0FBVyxDQUFDLElBQUksR0FDakNJLGNBQWNILFdBQVksR0FBRztRQUVuQyxPQUFPRztJQUNUO0lBRUFDLHFCQUFxQlAsSUFBSSxFQUFFO1FBQ3pCLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QlEscUJBQXNCUCxXQUFXRTtRQUV2QyxPQUFPSztJQUNUO0lBRUFDLHVCQUF1QlQsSUFBSSxFQUFFO1FBQzNCLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCTSxjQUFjLElBQUksQ0FBQ0QsYUFBYSxDQUFDTCxPQUNqQ1UsdUJBQXdCVCxXQUFXSztRQUV6QyxPQUFPSTtJQUNUO0lBRUFDLDhCQUE4QlgsSUFBSSxFQUFFO1FBQ2xDLE1BQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3Qk0sY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0wsT0FDakNZLDhCQUErQlgsV0FBV0UsYUFBYUc7UUFFN0QsT0FBT007SUFDVDtJQUVBQyxnQkFBZ0JDLFFBQVEsRUFBRTtRQUN4QixNQUFNQyxlQUFnQixJQUFJLENBQUMxRCxJQUFJLEtBQUt5RCxVQUM5QkUscUJBQXFCRCxjQUFlLEdBQUc7UUFFN0MsT0FBT0M7SUFDVDtJQUVBQyxtQkFBbUJ4RCxXQUFXLEVBQUV5RCxvQkFBb0IsSUFBSSxFQUFFO1FBQ3hELElBQUlDO1FBRUosTUFBTUMsZUFBZTNELGFBQWEsR0FBRztRQUVyQ0EsY0FBYyxJQUFJLENBQUNZLGFBQWEsQ0FBQzZDO1FBRWpDLE1BQU1HLGVBQWU1RCxhQUFhLEdBQUc7UUFFckMwRCx3QkFBeUJDLGlCQUFpQkM7UUFFMUMsT0FBT0Y7SUFDVDtJQUVBRyx1QkFBdUJsQyxlQUFlLEVBQUU7UUFDdEMsSUFBSW1DLDRCQUE0QjtRQUVoQyxNQUFNQyxzQkFBdUIsSUFBSSxDQUFDbkUsSUFBSSxLQUFLK0I7UUFFM0MsSUFBSW9DLHFCQUFxQjtZQUN2QkQsNEJBQTRCO1FBQzlCLE9BQU87WUFDTCxNQUFNdkMsV0FBVyxJQUFJLENBQUNELFVBQVU7WUFFaEMsSUFBSUMsVUFBVTtnQkFDWixNQUFNRSxlQUFlLElBQUksQ0FBQ0QsZUFBZSxJQUNuQ3dDLDhCQUErQnZDLGlCQUFpQkU7Z0JBRXRELElBQUlxQyw2QkFBNkI7b0JBQy9CRiw0QkFBNEI7Z0JBQzlCO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQUcsd0JBQXdCQyxnQkFBZ0IsRUFBRTtRQUN4QyxJQUFJQyw2QkFBNkI7UUFFakMsTUFBTTVDLFdBQVcsSUFBSSxDQUFDRCxVQUFVO1FBRWhDLElBQUlDLFVBQVU7WUFDWixNQUFNRSxlQUFlLElBQUksQ0FBQ0QsZUFBZSxJQUNuQzRDLCtCQUFnQ0YscUJBQXFCekM7WUFFM0QsSUFBSTJDLDhCQUE4QjtnQkFDaENELDZCQUE2QjtZQUMvQjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBRSxPQUFPQyxXQUFXLEtBQUssRUFBRTtRQUN2QixNQUFNN0UsU0FBUyxJQUFJLENBQUM4RSxTQUFTLElBQ3ZCNUUsWUFBWSxJQUFJLENBQUM2RSxZQUFZLElBQzdCQyxPQUFPO1lBQ0xoRjtZQUNBRTtRQUNGO1FBRU4sSUFBSSxDQUFDMkUsVUFBVTtZQUNiLE1BQU1JLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDOUUsVUFBVSxHQUMzRCtFLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDL0UsVUFBVSxHQUMzRGdGLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDaEYsVUFBVSxHQUMzRGlGLGtCQUFrQkMsSUFBQUEsa0NBQTRCLEVBQUMsSUFBSSxDQUFDakYsV0FBVyxHQUMvREgsYUFBYTZFLGdCQUNiNUUsYUFBYThFLGdCQUNiN0UsYUFBYStFLGdCQUNiOUUsY0FBY2dGLGlCQUFrQixHQUFHO1lBRXpDRSxPQUFPQyxNQUFNLENBQUNWLE1BQU07Z0JBQ2xCNUU7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7WUFDRjtRQUNGO1FBRUEsT0FBT3lFO0lBQ1Q7SUFFQSxPQUFPN0UsT0FBTyxPQUFPO0lBRXJCLE9BQU93RixTQUFTWCxJQUFJLEVBQUVqRixPQUFPLEVBQUU7UUFDN0IsT0FBTzZGLElBQUFBLG9CQUFXLEVBQUMsQ0FBQzdGO1lBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFRSxTQUFTLEVBQUUsR0FBRzhFLE1BQ3hCbkUsV0FBV2dGLElBQUFBLDRCQUFlLEVBQUM3RixRQUFRRCxVQUNuQ0UsT0FBT1ksVUFDUFYsT0FBTzJGLElBQUFBLHlCQUFnQixFQUFDakYsVUFBVWQsVUFDbENLLGFBQWEyRixJQUFBQSx3QkFBa0IsRUFBQ2YsTUFBTWpGLFVBQ3RDTSxhQUFhMkYsSUFBQUEsd0JBQWtCLEVBQUNoQixNQUFNakYsVUFDdENPLGFBQWEyRixJQUFBQSx3QkFBa0IsRUFBQ2pCLE1BQU1qRixVQUN0Q1EsY0FBYzJGLElBQUFBLHlCQUFtQixFQUFDbEI7WUFFeENqRixVQUFVLE1BQU0sR0FBRztZQUVuQixNQUFNK0MsT0FBTyxJQUFJakQsS0FBS0UsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0MsTUFBTUMsWUFBWUMsWUFBWUMsWUFBWUM7WUFFbEcsT0FBT3VDO1FBQ1QsR0FBRy9DO0lBQ0w7SUFFQSxPQUFPb0csU0FBU2hHLElBQUksRUFBRUosT0FBTyxFQUFFO1FBQzdCLE1BQU1DLFNBQVNHLE1BQ1RGLE9BQU8sTUFDUEMsWUFBWSxNQUNaRSxhQUFhLE1BQ2JDLGFBQWEsRUFBRSxFQUNmQyxhQUFhLEVBQUUsRUFDZkMsY0FBYztRQUVwQlIsVUFBVTtRQUVWLE1BQU0rQyxPQUFPLElBQUlqRCxLQUFLRSxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQyxNQUFNQyxZQUFZQyxZQUFZQyxZQUFZQztRQUVsRyxPQUFPdUM7SUFDVDtBQUNGIn0=