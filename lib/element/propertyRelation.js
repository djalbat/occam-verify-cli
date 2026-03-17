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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, propertyRelationNode = (0, _instantiate.instantiatePropertyRelation)(string, context), node = propertyRelationNode, term = termFromPropertyRelationNode(propertyRelationNode, context), property = (0, _element.propertyFromPropertyRelationNode)(propertyRelationNode, context);
            context = null;
            const propertyRelation = new PropertyRelation(context, string, node, term, property);
            return propertyRelation;
        }, context);
    }
});
function termFromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(), term = context.findTermByTermNode(termNode);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdGVybVR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVByb3BlcnR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZVN0cmluZyA9IHRlcm1UeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInByb3BlcnR5IiwiZ2V0VGVybSIsImdldFByb3BlcnR5IiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVZlcmlmaWVzIiwidmVyaWZ5UHJvcGVydHkiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ2YWxpZGF0ZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJwcm9wZXJ0eU5hbWUiLCJnZXROYW1lIiwidGVybVR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInZhcmlhYmxlVHlwZVByb3BlcnR5IiwiZmluZCIsInRlcm1UeXBlUHJvcGVydHkiLCJ0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlVHlwZVN0cmluZyIsIm5hbWUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ2dCO3lCQUNLO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyx1QkFBTztJQUMxRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUNqRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLDBCQUEwQjtRQUN4QixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsdUJBQXVCUCxNQUFPLEdBQUc7UUFFdkMsT0FBT087SUFDVDtJQUVBQyxPQUFPVixPQUFPLEVBQUU7UUFDZCxJQUFJVyxXQUFXO1FBRWYsTUFBTUMseUJBQXlCLElBQUksQ0FB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