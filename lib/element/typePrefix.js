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
const _default = (0, _elements.define)(class TypePrefix extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name){
        super(context, string, node, breakPoint);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getTypePrefixNode() {
        const node = this.getNode(), typePrefixNode = node; ///
        return typePrefixNode;
    }
    getPrefixName() {
        const prefixName = this.name; ///
        return prefixName;
    }
    compareTypePrefixName(typePrefixName) {
        const comparesToTypePrefixName = this.name === typePrefixName;
        return comparesToTypePrefixName;
    }
    verify(context) {
        let verifies = false;
        const typePrefixString = this.getString(); ///
        context.trace(`Verifying the '${typePrefixString}' type prefix...`);
        const typePrefix = context.getTypePrefix();
        if (typePrefix === null) {
            const typePrefixName = this.name, typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            if (!typePrefixPresent) {
                const nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (!typePresent) {
                    verifies = true;
                } else {
                    context.debug(`The '${typePrefixString}' type is already present.`);
                }
            } else {
                context.debug(`The '${typePrefixString}' type prefix is already present.`);
            }
        } else {
            context.trace(`The package already has a '${typePrefixString}' type prefix.`);
        }
        if (verifies) {
            context.debug(`...verified the '${typePrefixString}' type prefix.`);
        }
        return verifies;
    }
    static name = "TypePrefix";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, typePrefixNode = (0, _instantiate.instantiateTypePrefix)(string, context), node = typePrefixNode, name = (0, _element.nameFromTypePrefixNode)(typePrefixNode, context);
            context = null; ///
            const typePrefix = new TypePrefix(context, string, node, breakPoint, name);
            return typePrefix;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVHlwZVByZWZpeCB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOb2RlO1xuICB9XG5cbiAgZ2V0UHJlZml4TmFtZSgpIHtcbiAgICBjb25zdCBwcmVmaXhOYW1lID0gdGhpcy5uYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gcHJlZml4TmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVQcmVmaXhOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICB0eXBlUHJlZml4Tm9kZSA9IGluc3RhbnRpYXRlVHlwZVByZWZpeChzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVQcmVmaXhOb2RlLCAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVR5cGVQcmVmaXhOb2RlKHR5cGVQcmVmaXhOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4ID0gbmV3IFR5cGVQcmVmaXgoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKTtcblxuICAgICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXgiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibmFtZSIsImdldE5hbWUiLCJnZXRUeXBlUHJlZml4Tm9kZSIsImdldE5vZGUiLCJ0eXBlUHJlZml4Tm9kZSIsImdldFByZWZpeE5hbWUiLCJwcmVmaXhOYW1lIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJjb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZGVidWciLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVHlwZVByZWZpeCIsIm5hbWVGcm9tVHlwZVByZWZpeE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDVTt5QkFDQztNQUV2QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFt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