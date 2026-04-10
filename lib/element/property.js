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
            if (property !== this) {
                const propertyComparesToPropertyName = property.comparePropertyName(propertyName);
                if (propertyComparesToPropertyName) {
                    count++;
                }
            }
            return count;
        }, 0);
        if (count === 0) {
            naemVerifies = true;
        } else {
            context.debug(`The '${propertyString}' property appears more than once.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBub21pbmFsVHlwZU5hbWVGcm9tSlNPTiwgbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcmV0eU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJldHlOb2RlO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICB2ZXJpZnkocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IG5hZW1WZXJpZmllcyA9IHRoaXMudmVyaWZ5TmFtZShwcm9wZXJ0aWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChuYWVtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlOb21pbmFsVHlwZU5hbWUoY29udGV4dCk7XG5cbiAgICAgIGlmIChub21pbmFsVHlwZU5hbWVWZXJpZmllcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIG5hZW1WZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKG5hZW1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYWVtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOb21pbmFsVHlwZU5hbWUoY29udGV4dCkge1xuICAgIGxldCBub21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBub21pbmFsIHR5cGUgbmFtZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0aGlzLnR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZSh0aGlzLm5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgIG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSh0aGlzLm5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICBub21pbmFsVHlwZU5hbWVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vbWluYWxUeXBlTmFtZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllcyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5vbWluYWwgdHlwZSBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBub21pbmFsVHlwZU5hbWVWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVKU09OID0gbm9taW5hbFR5cGVOYW1lVG9Ob21pbmFsVHlwZU5hbWVKU09OKHRoaXMubm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICBub21pbmFsVHlwZU5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0Tm9kZSIsInByb3BlcmV0eU5vZGUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJjb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwidmVyaWZ5IiwicHJvcGVydGllcyIsInZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5hZW1WZXJpZmllcyIsInZlcmlmeU5hbWUiLCJub21pbmFsVHlwZU5hbWVWZXJpZmllcyIsInZlcmlmeU5vbWluYWxUeXBlTmFtZSIsImRlYnVnIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwidHlwZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidG9KU09OIiwibm9taW5hbFR5cGVOYW1lSlNPTiIsIm5vbWluYWxUeXBlTmFtZVRvTm9taW5hbFR5cGVOYW1lSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwicHJvcGVydHlOb2RlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibm9taW5hbFR5cGVOYW1lRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDSzs2QkFDUTt5QkFDQztzQkFDeUM7TUFFOUUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xE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