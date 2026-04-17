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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHByb3BlcnR5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gdGhpcy5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBjb250ZXh0LmZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHZhbGlkUHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gICAgICBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJwcm9wZXJ0eSIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbiIsImZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInZhbGlkUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb3BlcnR5IiwiYWRkUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwibmFtZSIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3lCQUNLOzZCQUNnQjt5QkFDSztNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMsdUJBQU87SUFDMUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBRTtRQUM3RCxLQUFLLENBQUNMLFNBQVNDLFFB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