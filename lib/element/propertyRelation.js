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
const _breakPoint = require("../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, propertyRelationNode = (0, _instantiate.instantiatePropertyRelation)(string, context), node = propertyRelationNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), term = termFromPropertyRelationNode(propertyRelationNode, context), property = (0, _element.propertyFromPropertyRelationNode)(propertyRelationNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHByb3BlcnR5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFByb3BlcnR5UmVsYXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gdGhpcy5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBjb250ZXh0LmZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRQcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHZhbGlkUHJvcGVydHlSZWxhdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgICB2YWxpZGF0ZXMgPSBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0eS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuXG4gICAgICBwcm9wZXJ0eVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSwgcHJvcGVydHkpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5UmVsYXRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGVybSIsInByb3BlcnR5IiwiZ2V0VGVybSIsImdldFByb3BlcnR5IiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uIiwiZmluZFByb3BlcnR5UmVsYXRpb25CeVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidmFsaWRQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGUiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVZhbGlkYXRlcyIsInZhbGlkYXRlUHJvcGVydHkiLCJhZGRQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJuYW1lIiwidG9KU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFB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