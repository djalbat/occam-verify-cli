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
const _default = (0, _elements.define)(class PropertyRelation extends _occamlanguages.Element {
    constructor(context, string, node, term, property){
        super(context, string, node);
        this.term = term;
        this.property = property;
    }
    getTerm() {
        return this.term;
    }
    getProperty() {
        return this.property;
    }
    getPropertyRelationNode() {
        const node = this.getNode(), propertyRelationNode = node; ///
        return propertyRelationNode;
    }
    verify(context) {
        let verifies = false;
        const propertyRelationString = this.getString(); ///
        context.trace(`Verifying the '${propertyRelationString}' property relation...`);
        const termValidates = this.validateTerm(context);
        if (termValidates) {
            const propertyVerifies = this.verifyProperty(context);
            verifies = propertyVerifies;
        }
        if (verifies) {
            context.debug(`...verified the '${propertyRelationString}' property relation.`);
        }
        return verifies;
    }
    validateTerm(context) {
        let termValidates = false;
        const termString = this.term.getString();
        context.trace(`Validating the '${termString}' term...`);
        const term = this.term.validate(context, (term)=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${termString}' term.`);
        }
        return termValidates;
    }
    verifyProperty(context) {
        let propertyVerifies;
        const propertyString = this.property.getString();
        context.trace(`Verifying the '${propertyString}' property...`);
        const termType = this.term.getType(), propertyName = this.property.getName(), termTypeProperties = termType.getProperties(), variableTypeProperty = termTypeProperties.find((termTypeProperty)=>{
            const termTypePropertyComparesToPropertyName = termTypeProperty.comparePropertyName(propertyName);
            if (termTypePropertyComparesToPropertyName) {
                return true;
            }
        }) || null;
        if (variableTypeProperty === null) {
            const variableString = this.term.getString(), variableTypeString = termType.getString();
            context.debug(`The '${propertyName}' property is not a property of the '${variableString}' variable's '${variableTypeString}' type.`);
        } else {
            propertyVerifies = true;
        }
        if (propertyVerifies) {
            context.debug(`...verified the '${propertyString}' property.`);
        }
        return propertyVerifies;
    }
    static name = "PropertyRelation";
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static fromJSON(json, context) {
        const propertyRelation = (0, _context.instantiate)((context)=>{
            const { string } = json, propertyRelationNode = (0, _instantiate.instantiatePropertyRelation)(string, context), node = propertyRelationNode, term = termFromPropertyRelationNode(propertyRelationNode, context), property = (0, _element.propertyFromPropertyRelationNode)(propertyRelationNode, context);
            context = null;
            const propertyRelation = new PropertyRelation(context, string, node, term, property);
            return propertyRelation;
        }, context);
        return propertyRelation;
    }
});
function termFromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(), term = context.findTermByTermNode(termNode);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdGVybVR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVByb3BlcnR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZVN0cmluZyA9IHRlcm1UeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5UmVsYXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwicHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5VmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsInZhbGlkYXRlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJ0ZXJtVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidmFyaWFibGVUeXBlUHJvcGVydHkiLCJmaW5kIiwidGVybVR5cGVQcm9wZXJ0eSIsInRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVUeXBlU3RyaW5nIiwibmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInByb3BlcnR5UmVsYXRpb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDZ0I7eUJBQ0s7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHVCQUFPO0lBQzFELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQ2pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyx1QkFBdUJQLE1BQU8sR0FBRztRQUV2QyxPQUFPTztJQUNUO0lBRUFDLE9BQU9WLE9B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