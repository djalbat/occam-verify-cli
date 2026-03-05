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
        const term = this.term.validate(context, ()=>{
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
        const propertyRelation = (0, _context.literally)((context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5UmVsYXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcHJvcGVydHlWZXJpZmllcztcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdGVybVR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVByb3BlcnR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZVN0cmluZyA9IHRlcm1UeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInByb3BlcnR5IiwiZ2V0VGVybSIsImdldFByb3BlcnR5IiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHkiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJwcm9wZXJ0eU5hbWUiLCJnZXROYW1lIiwidGVybVR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInZhcmlhYmxlVHlwZVByb3BlcnR5IiwiZmluZCIsInRlcm1UeXBlUHJvcGVydHkiLCJ0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlVHlwZVN0cmluZyIsIm5hbWUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJwcm9wZXJ0eVJlbGF0aW9uIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNHOzZCQUNrQjt5QkFDSztNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMsdUJBQU87SUFDMUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDakQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRywwQkFBMEI7UUFDeEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLHVCQUF1QlAsTUFBTyxHQUFHO1FBRXZDLE9BQU9PO0lBQ1Q7SUFFQUMsT0FBT1YsT0FBTyxFQUFFO1FB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