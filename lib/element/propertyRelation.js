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
    constructor(context, string, node, lineIndex, term, property){
        super(context, string, node, lineIndex);
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
    isEqualTo(propertyRelation) {
        const propertyRelationNode = propertyRelation.getNode(), propertyRelationNodeMatches = this.matchPropertyRelationNode(propertyRelationNode), equalTo = propertyRelationNodeMatches; ///
        return equalTo;
    }
    matchPropertyRelationNode(propertyRelationNode) {
        const node = propertyRelationNode, nodeMatches = this.matchNode(node), propertyRelationNodeMatches = nodeMatches; ///
        return propertyRelationNodeMatches;
    }
    findValidPropertyRelation(context) {
        const propertyRelationNode = this.getPropertyRelationNode(), propertyRelation = context.findPropertyRelationByPropertyRelationNode(propertyRelationNode), validPropertyRelation = propertyRelation; ///
        return validPropertyRelation;
    }
    validate(context) {
        let propertyRelation = null;
        const propertyRelationString = this.getString(); ///
        context.trace(`Validating the '${propertyRelationString}' property relation...`);
        const validPropertyRelation = this.findValidPropertyRelation(context);
        if (validPropertyRelation) {
            propertyRelation = validPropertyRelation; ///
            context.debug(`...the '${propertyRelationString}' property relation is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(context);
            if (termValidates) {
                const propertyVerifies = this.verifyProperty(context);
                validates = propertyVerifies;
            }
            if (validates) {
                const propertyRelation = this; ///
                this.assign(context);
                context.addPropertyRelation(propertyRelation);
                context.debug(`...validated the '${propertyRelationString}' property relation.`);
            }
        }
        return propertyRelation;
    }
    validateTerm(context) {
        let termValidates = false;
        const propertyRelationString = this.getString(); ///
        context.trace(`Validating the '${propertyRelationString}' property relation's term...`);
        const term = this.term.validate(context, (term)=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${propertyRelationString}' property relation's term.`);
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
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, propertyRelationNode = (0, _instantiate.instantiatePropertyRelation)(string, context), node = propertyRelationNode, term = termFromPropertyRelationNode(propertyRelationNode, context), property = (0, _element.propertyFromPropertyRelationNode)(propertyRelationNode, context);
            context = null;
            const propertyRelation = new PropertyRelation(context, string, node, lineIndex, term, property);
            return propertyRelation;
        }, context);
    }
});
function termFromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(), term = context.findTermByTermNode(termNode);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMuZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIHByb3BlcnR5UmVsYXRpb24gPSB2YWxpZFByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZFByb3BlcnR5UmVsYXRpb24ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdGVybVR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVByb3BlcnR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZVN0cmluZyA9IHRlcm1UeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsInByb3BlcnR5IiwiZ2V0VGVybSIsImdldFByb3BlcnR5IiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2YWxpZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5VmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsImFzc2lnbiIsImFkZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInByb3BlcnR5U3RyaW5nIiwidGVybVR5cGUiLCJnZXRUeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsInRlcm1UeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0ZXJtVHlwZVByb3BlcnR5IiwidGVybVR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVR5cGVTdHJpbmciLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ2dCO3lCQUNLO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyx1QkFBTztJQUMxRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQzVELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx1QkFBdUJSLE1BQU8sR0FBRztRQUV2QyxPQUFPUTtJQUNUO0lBRUFDLFVBQVVDLGdCQUFnQixFQUFFO1FBQzFCLE1BQU1GLHVCQUF1QkUsaUJBQWlCSCxPQUFPLElBQy9DSSw4QkFBOEIsSUFBSSxDQUFDQyx5QkFBeUIsQ0FB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