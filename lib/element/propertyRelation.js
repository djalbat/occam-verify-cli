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
    getType() {
        return this.property.getType();
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
                const propertyValidates = this.validateProperty(context);
                validates = propertyValidates;
            }
            if (validates) {
                propertyRelation = this; ///
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
    validateProperty(context) {
        let propertyValidates = false;
        const propertyRelationString = this.getString(); ///
        context.trace(`Validating the '${propertyRelationString}' property relation's property...`);
        const type = this.term.getType(), property = this.property.validateGivenType(type, context);
        if (property !== null) {
            this.property = property;
            propertyValidates = true;
        }
        if (propertyValidates) {
            context.trace(`...validated the '${propertyRelationString}' property relation's property.`);
        }
        return propertyValidates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMuZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIHByb3BlcnR5UmVsYXRpb24gPSB2YWxpZFByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gICAgICBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHkpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5UmVsYXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwicHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldFR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2YWxpZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5VmFsaWRhdGVzIiwidmFsaWRhdGVQcm9wZXJ0eSIsImFkZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsIm5hbWUiLCJ0b0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDZ0I7eUJBQ0s7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHVCQUFPO0lBQzFELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDNUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRywwQkFBMEI7UUFD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