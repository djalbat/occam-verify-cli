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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, typeNode = (0, _instantiate.instantiateType)(string, context), node = typeNode, name = (0, _element.nameFromTypeNode)(typeNode, context), prefixName = (0, _element.prefixNameFromTypeNode)(typeNode, context), superTypes = (0, _json.superTypesFromJSON)(json, context), properties = (0, _json.propertiesFromJSON)(json, context), provisional = (0, _json.provisionalFromJSON)(json);
            context = null; ///
            const type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
            return type;
        }, context);
    }
    static fromName(name, context) {
        const string = name, node = null, prefixName = null, superTypes = [], properties = [], provisional = false;
        context = null;
        const type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);
        return type;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUeXBlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGJhc2VUeXBlRnJvbU5vdGhpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3R5cGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tVHlwZU5vZGUsIHByZWZpeE5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHN1cGVyVHlwZXNGcm9tSlNPTiwgcHJvdmlzaW9uYWxGcm9tSlNPTiwgcHJvcGVydGllc0Zyb21KU09OLCBwcm92aXNpb25hbFRvUHJvdmlzaW9uYWxKU09OLCBzdXBlclR5cGVzVG9TdXBlclR5cGVzSlNPTiwgcHJvcGVydGllc1RvUHJvcGVydGllc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgcHJlZml4TmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXM7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLnByb3Zpc2lvbmFsID0gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRQcmVmaXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeE5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZXM7XG4gIH1cblxuICBnZXRUeXBlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdHlwZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGU7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXTtcblxuICAgIHB1c2gocHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIGlmIChpbmNsdWRlU3VwZXJUeXBlcykge1xuICAgICAgdGhpcy5zdXBlclR5cGVzLmZvckVhY2goKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0aWVzID0gc3VwZXJUeXBlLmdldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBwdXNoKHByb3BlcnRpZXMsIHN1cGVyVHlwZVByb3BlcnRpZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cblxuICBpc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlclR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBwcm92aXNpb25hbCA9IHRoaXMucHJvdmlzaW9uYWw7XG5cbiAgICBpZiAoaW5jbHVkZVN1cGVyVHlwZXMpIHtcbiAgICAgIGlmICghcHJvdmlzaW9uYWwpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgPSB0aGlzLnN1cGVyVHlwZXMuc29tZSgoc3VwZXJUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvdmlzaW9uYWwgPSBzdXBlclR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyVHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRQcmVmaXhOYW1lKHByZWZpeE5hbWUpIHtcbiAgICB0aGlzLnByZWZpeE5hbWUgPSBwcmVmaXhOYW1lO1xuICB9XG5cbiAgc2V0U3VwZXJUeXBlcyhzdXBlclR5cGVzKSB7XG4gICAgdGhpcy5zdXBlclR5cGVzID0gc3VwZXJUeXBlcztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRQcm92aXNpb25hbChwcm92aXNpb25hbCkge1xuICAgIHRoaXMucHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbDtcbiAgfVxuXG4gIHJlcGxhY2VTdXBlclR5cGUoc3VwZXJUeXBlLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5zdXBlclR5cGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHN1cGVyVHlwZSk7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gKHRoaXMucHJlZml4TmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRQcmVmaXhlZE5hbWUoKSB7XG4gICAgbGV0IHByZWZpeGVkTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBwcmVmaXhlZE5hbWUgPSBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ZWROYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJlZml4ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByZWZpeE5hbWV9JHt0aGlzLm5hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTtcblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBpc0Jhc2ljKCkge1xuICAgIGxldCBiYXNpYyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlc0xlbmd0aCA9IHRoaXMuc3VwZXJUeXBlcy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwZXJUeXBlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RTdXBlclR5cGUgPSBmaXJzdCh0aGlzLnN1cGVyVHlwZXMpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gZmlyc3RTdXBlclR5cGUsIC8vL1xuICAgICAgICAgICAgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IGJhc2VUeXBlKSB7XG4gICAgICAgIGJhc2ljID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFzaWM7XG4gIH1cblxuICBpc1JlZmluZWQoKSB7XG4gICAgbGV0IHJlZmluZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cGVyVHlwZXNMZW5ndGggPSB0aGlzLnN1cGVyVHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cGVyVHlwZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0U3VwZXJUeXBlID0gZmlyc3QodGhpcy5zdXBlclR5cGVzKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpcnN0U3VwZXJUeXBlLCAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlTmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZpbmVkO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZjtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgaWYgKHRoaXMgPT09IGJhc2VUeXBlKSB7XG4gICAgICBzdWJUeXBlT2YgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGVzLnNvbWUoKHN1cGVyVHlwZSkgPT4geyAvLy9cbiAgICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSA9IHN1cGVyVHlwZS5pc1N1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBzdWJUeXBlT2YgPSB0eXBlLmlzU3ViVHlwZU9mKHRoaXMpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gc3ViVHlwZU9mOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0NvbXBhcmFibGVUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgY29tcGFyYWJsZVRvID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBjb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZVR5cGVOYW1lID0gKG5hbWUgPT09IHR5cGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvVHlwZU5hbWUgPSBuYW1lVHlwZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwsIGluY2x1ZGVTdXBlcnR5cGVzID0gdHJ1ZSkge1xuICAgIGxldCBjb21wYXJlc1RvUHJvdmlzaW9uYWw7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEEgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICBjb25zdCBwcm92aXNpb25hbEIgPSBwcm92aXNpb25hbDsgLy8vXG5cbiAgICBjb21wYXJlc1RvUHJvdmlzaW9uYWwgPSAocHJvdmlzaW9uYWxBID09PSBwcm92aXNpb25hbEIpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm92aXNpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkTmFtZSA9IHRoaXMuZ2V0UHJlZml4ZWROYW1lKCksXG4gICAgICAgICAgICBwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKHByZWZpeGVkVHlwZU5hbWUgPT09IHByZWZpeGVkTmFtZSk7XG5cbiAgICAgIGlmIChwcmVmaXhlZFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWU7XG4gIH1cblxuICBjb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gZmFsc2U7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZU5hbWUgPSAobm9taW5hbFR5cGVOYW1lID09PSBuYW1lKTtcblxuICAgICAgaWYgKG5vbWluYWxUeXBlTmFtZU5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ZWROYW1lID0gdGhpcy5nZXRQcmVmaXhlZE5hbWUoKSxcbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lID0gKG5vbWluYWxUeXBlTmFtZSA9PT0gcHJlZml4ZWROYW1lKTtcblxuICAgICAgICBpZiAobm9taW5hbFR5cGVOYW1lUHJlZml4ZWROYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdXBlclR5cGVzSlNPTiA9IHN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OKHRoaXMuc3VwZXJUeXBlcyksXG4gICAgICAgICAgcHJvcGVydGllc0pTT04gPSBwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTih0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICAgIHByb3Zpc2lub2FsSlNPTSA9IHByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04odGhpcy5wcm92aXNpb25hbCksXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IHN1cGVyVHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNKU09OLCAgLy8vXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpbm9hbEpTT00sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdXBlclR5cGVzLFxuICAgICAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlTm9kZSA9IGluc3RhbnRpYXRlVHlwZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByZWZpeE5hbWUgPSBwcmVmaXhOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN1cGVyVHlwZXMgPSBzdXBlclR5cGVzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSBwcm92aXNpb25hbEZyb21KU09OKGpzb24pO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVmaXhOYW1lID0gbnVsbCxcbiAgICAgICAgICBzdXBlclR5cGVzID0gW10sXG4gICAgICAgICAgcHJvcGVydGllcyA9IFtdLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHByZWZpeE5hbWUsIHN1cGVyVHlwZXMsIHByb3BlcnRpZXMsIHByb3Zpc2lvbmFsKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwdXNoIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlR5cGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwicHJlZml4TmFtZSIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJnZXROYW1lIiwiZ2V0UHJlZml4TmFtZSIsImdldFN1cGVyVHlwZXMiLCJnZXRUeXBlTm9kZSIsImdldE5vZGUiLCJ0eXBlTm9kZSIsImdldFByb3BlcnRpZXMiLCJpbmNsdWRlU3VwZXJUeXBlcyIsImZvckVhY2giLCJzdXBlclR5cGUiLCJzdXBlclR5cGVQcm9wZXJ0aWVzIiwiaXNQcm92aXNpb25hbCIsInNvbWUiLCJzdXBlclR5cGVQcm92aXNpb25hbCIsInNldE5hbWUiLCJzZXRQcmVmaXhOYW1lIiwic2V0U3VwZXJUeXBlcyIsInNldFByb3BlcnRpZXMiLCJzZXRQcm92aXNpb25hbCIsInJlcGxhY2VTdXBlclR5cGUiLCJpbmRleCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJpc1ByZWZpeGVkIiwicHJlZml4ZWQiLCJnZXRQcmVmaXhlZE5hbWUiLCJwcmVmaXhlZE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc0Jhc2ljIiwiYmFzaWMiLCJzdXBlclR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTdXBlclR5cGUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJpc1JlZmluZWQiLCJyZWZpbmVkIiwic3VwZXJUeXBlTmFtZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJzdXBlclR5cGVTdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImNvbXBhcmVUeXBlTmFtZSIsInR5cGVOYW1lIiwibmFtZVR5cGVOYW1lIiwiY29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVByb3Zpc2lvbmFsIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJjb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbEEiLCJwcm92aXNpb25hbEIiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZU5hbWUiLCJub21pbmFsVHlwZU5hbWVQcmVmaXhlZE5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVzSlNPTiIsInN1cGVyVHlwZXNUb1N1cGVyVHlwZXNKU09OIiwicHJvcGVydGllc0pTT04iLCJwcm9wZXJ0aWVzVG9Qcm9wZXJ0aWVzSlNPTiIsInByb3Zpc2lub2FsSlNPTSIsInByb3Zpc2lvbmFsVG9Qcm92aXNpb25hbEpTT04iLCJnZXRTdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZSIsIm5hbWVGcm9tVHlwZU5vZGUiLCJwcmVmaXhOYW1lRnJvbVR5cGVOb2RlIiwic3VwZXJUeXBlc0Zyb21KU09OIiwicHJvcGVydGllc0Zyb21KU09OIiwicHJvdmlzaW9uYWxGcm9tSlNPTiIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7MkJBQ087MEJBRVI7eUJBQ0s7NkJBQ0k7c0JBQ0k7eUJBQ3FCO3NCQUN5RztBQUVsSyxNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRXRDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLENBQUU7UUFDeEYsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQztRQUV2QixJQUFJ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