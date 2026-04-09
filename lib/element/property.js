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
const _elements = require("../elements");
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Property extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name, nominalTypeName){
        super(context, string, node, lineIndex);
        this.name = name;
        this.nominalTypeName = nominalTypeName;
    }
    getName() {
        return this.name;
    }
    getNominalTypeName() {
        return this.nominalTypeName;
    }
    getPropertyNode() {
        const node = this.getNode(), properetyNode = node; ///
        return properetyNode;
    }
    comparePropertyName(propertyName) {
        const comparesToPropertyName = this.name === propertyName;
        return comparesToPropertyName;
    }
    compareNominalTypeName(nominalTypeName) {
        const comparesToNominalTypeName = this.nominalTypeName === nominalTypeName;
        return comparesToNominalTypeName;
    }
    verify(properties, context) {
        let verifies = false;
        const propertyString = this.getString(); ///
        context.trace(`Verifying the '${propertyString}' property...`);
        const naemVerifies = this.verifyName(properties, context);
        if (naemVerifies) {
            const nominalTypeNameVerifies = this.verifyNominalTypeName(context);
            if (nominalTypeNameVerifies) {
                verifies = true;
            }
        }
        if (verifies) {
            context.debug(`...verified the '${propertyString}' property.`);
        }
        return verifies;
    }
    verifyName(properties, context) {
        let naemVerifies = false;
        const propertyString = this.getString();
        context.trace(`Verifying the '${propertyString}' property's name...`);
        const propertyName = this.name, count = properties.reduce((count, property)=>{
            const propertyComparesToPropertyName = property.comparePropertyName(propertyName);
            if (propertyComparesToPropertyName) {
                count++;
            }
            return count;
        }, 0);
        if (count > 1) {
            context.debug(`The '${propertyString}' property appears more than once.`);
        } else {
            const superTypes = this.type.getSuperTypes(), superType = superTypes.find((superType)=>{
                const superTypeProperties = superType.getProperties(), superTypePropertyComparesToPropertyName = superTypeProperties.some((superTypeProperty)=>{
                    const superTypePropertyComparesToPropertyName = superTypeProperty.comparePropertyName(propertyName);
                    if (superTypePropertyComparesToPropertyName) {
                        return true;
                    }
                });
                if (superTypePropertyComparesToPropertyName) {
                    return true;
                }
            }) || null;
            if (superType !== null) {
                const superTypeString = superType.getString();
                context.debug(`The '${superTypeString}' super-type has the same property.`);
            } else {
                naemVerifies = true;
            }
        }
        if (naemVerifies) {
            context.debug(`...verified the '${propertyString}' property's name.`);
        }
        return naemVerifies;
    }
    verifyNominalTypeName(context) {
        let nominalTypeNameVerifies = false;
        const propertyString = this.getString(); ///
        context.trace(`Verifying the '${propertyString}' property's nominal type name...`);
        const typeComparesToNominalTypeName = this.type.compareNominalTypeName(this.nominalTypeName);
        if (typeComparesToNominalTypeName) {
            nominalTypeNameVerifies = true;
        } else {
            const typePresent = context.isTypePresentByNominalTypeName(this.nominalTypeName);
            if (typePresent) {
                nominalTypeNameVerifies = true;
            }
        }
        if (nominalTypeNameVerifies) {
            context.debug(`...verifies the '${propertyString}' property's nominal type name.`);
        }
        return nominalTypeNameVerifies;
    }
    toJSON() {
        const nominalTypeNameJSON = (0, _json.nominalTypeNameToNominalTypeNameJSON)(this.nominalTypeName), nominalTypeName = nominalTypeNameJSON, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex,
            nominalTypeName
        };
        return json;
    }
    static name = "Property";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, name = (0, _element.nameFromPropertyNode)(propertyNode, context), nominalTypeName = (0, _json.nominalTypeNameFromJSON)(json);
            context = null;
            const property = new Property(context, string, node, lineIndex, name, nominalTypeName);
            return property;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBub21pbmFsVHlwZU5hbWVGcm9tSlNPTiwgbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcmV0eU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJldHlOb2RlO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB2ZXJpZnkocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IG5hZW1WZXJpZmllcyA9IHRoaXMudmVyaWZ5TmFtZShwcm9wZXJ0aWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChuYWVtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlOb21pbmFsVHlwZU5hbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChub21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZXMgPSB0aGlzLnR5cGUuZ2V0U3VwZXJUeXBlcygpLFxuICAgICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlcy5maW5kKChzdXBlclR5cGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwZXJUeXBlUHJvcGVydGllcyA9IHN1cGVyVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHN1cGVyVHlwZVByb3BlcnRpZXMuc29tZSgoc3VwZXJUeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSBzdXBlclR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBlclR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSBzdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N1cGVyVHlwZVN0cmluZ30nIHN1cGVyLXR5cGUgaGFzIHRoZSBzYW1lIHByb3BlcnR5LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFlbVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hZW1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5vbWluYWxUeXBlTmFtZShjb250ZXh0KSB7XG4gICAgbGV0IG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5vbWluYWwgdHlwZSBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHRoaXMudHlwZS5jb21wYXJlTm9taW5hbFR5cGVOYW1lKHRoaXMubm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgbm9taW5hbFR5cGVOYW1lVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKHRoaXMubm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgIG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9taW5hbFR5cGVOYW1lVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVzIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5J3Mgbm9taW5hbCB0eXBlIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZUpTT04gPSBub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04odGhpcy5ub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVGcm9tSlNPTihqc29uKTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXROb2RlIiwicHJvcGVyZXR5Tm9kZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJjb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJ2ZXJpZnkiLCJwcm9wZXJ0aWVzIiwidmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFlbVZlcmlmaWVzIiwidmVyaWZ5TmFtZSIsIm5vbWluYWxUeXBlTmFtZVZlcmlmaWVzIiwidmVyaWZ5Tm9taW5hbFR5cGVOYW1lIiwiZGVidWciLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5IiwicHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwic3VwZXJUeXBlcyIsInR5cGUiLCJnZXRTdXBlclR5cGVzIiwic3VwZXJUeXBlIiwiZmluZCIsInN1cGVyVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwic3VwZXJUeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwic29tZSIsInN1cGVyVHlwZVByb3BlcnR5Iiwic3VwZXJUeXBlU3RyaW5nIiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInRvSlNPTiIsIm5vbWluYWxUeXBlTmFtZUpTT04iLCJub21pbmFsVHlwZU5hbWVUb05vbWluYWxUeXBlTmFtZUpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsInByb3BlcnR5Tm9kZSIsImluc3RhbnRpYXRlUHJvcGVydHkiLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsIm5vbWluYWxUeXBlTmFtZUZyb21KU09O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