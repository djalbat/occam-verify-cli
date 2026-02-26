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
const _default = (0, _elements.define)(class PropertyRelation extends _occamlanguages.Element {
    constructor(context, string, node, property, term){
        super(context, string, node);
        this.property = property;
        this.term = term;
    }
    getProperty() {
        return this.property;
    }
    getTerm() {
        return this.term;
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb3BlcnR5LCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLnByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtVHlwZVByb3BlcnRpZXMgPSB0ZXJtVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydHkgPSB0ZXJtVHlwZVByb3BlcnRpZXMuZmluZCgodGVybVR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybVR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSB0ZXJtVHlwZVByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlUHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdGVybVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5VmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicHJvcGVydHkiLCJ0ZXJtIiwiZ2V0UHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHkiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJwcm9wZXJ0eU5hbWUiLCJnZXROYW1lIiwidGVybVR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInZhcmlhYmxlVHlwZVByb3BlcnR5IiwiZmluZCIsInRlcm1UeXBlUHJvcGVydHkiLCJ0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlVHlwZVN0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3Qjsw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