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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24gfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5UmVsYXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID0gcHJvcGVydHlWZXJpZmllcztcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcztcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5wcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1UeXBlUHJvcGVydGllcyA9IHRlcm1UeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9IHRlcm1UeXBlUHJvcGVydGllcy5maW5kKCh0ZXJtVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHRlcm1UeXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodGVybVR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGVTdHJpbmcgPSB0ZXJtVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5UmVsYXRpb25cIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eVJlbGF0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHkpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlSZWxhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJwcm9wZXJ0eSIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5IiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInByb3BlcnR5U3RyaW5nIiwidGVybVR5cGUiLCJnZXRUeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsInRlcm1UeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0ZXJtVHlwZVByb3BlcnR5IiwidGVybVR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVR5cGVTdHJpbmciLCJuYW1lIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwicHJvcGVydHlSZWxhdGlvbiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDRzs2QkFDa0I7eUJBQ0s7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHVCQUFPO0lBQzFELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQ2pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyx1QkFBdUJQLE1BQU8sR0FBRztRQUV2QyxPQUFPTztJQUNUO0lBRUFDLE9BQU9WLE9BQU8sRUFB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