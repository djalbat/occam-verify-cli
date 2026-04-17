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
    constructor(context, string, node, breakPoint, term, property){
        super(context, string, node, breakPoint);
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
        let validates = false;
        const validPropertyRelation = this.findValidPropertyRelation(context);
        if (validPropertyRelation) {
            validates = true;
            propertyRelation = validPropertyRelation; ///
            context.debug(`...the '${propertyRelationString}' property relation is already valid.`);
        } else {
            const termValidates = this.validateTerm(context);
            if (termValidates) {
                const propertyValidates = this.validateProperty(context);
                validates = propertyValidates;
            }
            if (validates) {
                propertyRelation = this; ///
                context.addPropertyRelation(propertyRelation);
            }
        }
        if (validates) {
            context.debug(`...validated the '${propertyRelationString}' property relation.`);
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
        const string = this.getString(), breakPoint = this.getBreakPoint(), json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, propertyRelationNode = (0, _instantiate.instantiatePropertyRelation)(string, context), node = propertyRelationNode, term = termFromPropertyRelationNode(propertyRelationNode, context), property = (0, _element.propertyFromPropertyRelationNode)(propertyRelationNode, context);
            context = null;
            const propertyRelation = new PropertyRelation(context, string, node, breakPoint, term, property);
            return propertyRelation;
        }, context);
    }
});
function termFromPropertyRelationNode(propertyRelationNode, context) {
    const termNode = propertyRelationNode.getTermNode(), term = context.findTermByTermNode(termNode);
    return term;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHByb3BlcnR5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gdGhpcy5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBjb250ZXh0LmZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHZhbGlkUHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gICAgICBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCBwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlSZWxhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0ZXJtIiwicHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldFR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ2YWxpZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZSIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsImRlYnVnIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5VmFsaWRhdGVzIiwidmFsaWRhdGVQcm9wZXJ0eSIsImFkZFByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsIm5hbWUiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ2dCO3lCQUNLO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyx1QkFBTztJQUMxRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQzdELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNs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