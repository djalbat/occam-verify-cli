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
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMuZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHByb3BlcnR5UmVsYXRpb24gPSB2YWxpZFByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gcHJvcGVydHlWYWxpZGF0ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvcGVydHlSZWxhdGlvbihwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydHkudmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcblxuICAgICAgcHJvcGVydHlWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eVJlbGF0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtLCBwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGVybUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlSZWxhdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJwcm9wZXJ0eSIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbiIsImZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInZhbGlkUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb3BlcnR5IiwiYWRkUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwibmFtZSIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDZ0I7eUJBQ0s7TUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHVCQUFPO0lBQzFELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLENBQUU7UUFDNUQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7SUFDbEI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRywwQkFBMEI7UUFDeEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHVCQUF1QlIsTUFBTyxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsVUFBVTtRQUFFLE9BQU8sSUFBSSxDQUFDTixRQUFRLENBQUNNLE9BQU87SUFBSTtJQUU1Q0MsVUFBVUMsZ0JBQWdCLEVBQUU7UUFDMUIsTUFBTUgsdUJBQXVCRyxpQkFBaUJKLE9BQU8sSUFDL0NLLDhCQUE4QixJQUFJLENBQUNDLHlCQUF5QixDQUFDTCx1QkFDN0RNLFVBQVVGLDZCQUE4QixHQUFHO1FBRWpELE9BQU9FO0lBQ1Q7SUFFQUQsMEJBQTBCTCxvQkFBb0IsRUFBRTtRQUM5QyxNQUFNUixPQUFPUSxzQkFDUE8sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2hCLE9BQzdCWSw4QkFBOEJHLGFBQWEsR0FBRztRQUVwRCxPQUFPSDtJQUNUO0lBRUFLLDBCQUEwQm5CLE9BQU8sRUFBRTtRQUNqQyxNQUFNVSx1QkFBdUIsSUFBSSxDQUFDRix1QkFBdUIsSUFDbkRLLG1CQUFtQmIsUUFBUW9CLDBDQUEwQyxDQUFDVix1QkFDdEVXLHdCQUF3QlIsa0JBQWtCLEdBQUc7UUFFbkQsT0FBT1E7SUFDVDtJQUVBQyxTQUFTdEIsT0FBTyxFQUFFO1FBQ2hCLElBQUlhLG1CQUFtQjtRQUV2QixNQUFNVSx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUVwRHhCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHNCQUFzQixDQUFDO1FBRS9FLElBQUlHLFlBQVk7UUFFaEIsTUFBTUwsd0JBQXdCLElBQUksQ0FBQ0YseUJBQXlCLENBQUNuQjtRQUU3RCxJQUFJcUIsdUJBQXVCO1lBQ3pCSyxZQUFZO1lBRVpiLG1CQUFtQlEsdUJBQXVCLEdBQUc7WUFFN0NyQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFSix1QkFBdUIscUNBQXFDLENBQUM7UUFDeEYsT0FBTztZQUNMLE1BQU1LLGdCQUFnQixJQUFJLENBQUNDLFlBQVksQ0FBQzdCO1lBRXhDLElBQUk0QixlQUFlO2dCQUNqQixNQUFNRSxvQkFBb0IsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQy9CO2dCQUVoRDBCLFlBQVlJO1lBQ2Q7WUFFQSxJQUFJSixXQUFXO2dCQUNiYixtQkFBbUIsSUFBSSxFQUFFLEdBQUc7Z0JBRTVCYixRQUFRZ0MsbUJBQW1CLENBQUNuQjtZQUM5QjtRQUNGO1FBRUEsSUFBSWEsV0FBVztZQUNiMUIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSix1QkFBdUIsb0JBQW9CLENBQUM7UUFDakY7UUFFQSxPQUFPVjtJQUNUO0lBRUFnQixhQUFhN0IsT0FBTyxFQUFFO1FBQ3BCLElBQUk0QixnQkFBZ0I7UUFFcEIsTUFBTUwseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcER4QixRQUFReUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1Qiw2QkFBNkIsQ0FBQztRQUV0RixNQUFNbkIsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ3RCLFNBQVMsQ0FBQ0k7WUFDeEMsTUFBTTZCLG9CQUFvQjtZQUUxQixPQUFPQTtRQUNUO1FBRUEsSUFBSTdCLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWndCLGdCQUFnQjtRQUNsQjtRQUVBLElBQUlBLGVBQWU7WUFDakI1QixRQUFRMkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVKLHVCQUF1QiwyQkFBMkIsQ0FBQztRQUN4RjtRQUVBLE9BQU9LO0lBQ1Q7SUFFQUcsaUJBQWlCL0IsT0FBTyxFQUFFO1FBQ3hCLElBQUk4QixvQkFBb0I7UUFFeEIsTUFBTVAseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcER4QixRQUFReUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1QixpQ0FBaUMsQ0FBQztRQUUxRixNQUFNVyxPQUFPLElBQUksQ0FBQzlCLElBQUksQ0FBQ08sT0FBTyxJQUN4Qk4sV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQzhCLGlCQUFpQixDQUFDRCxNQUFNbEM7UUFFdkQsSUFBSUssYUFBYSxNQUFNO1lBQ3JCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtZQUVoQnlCLG9CQUFvQjtRQUN0QjtRQUVBLElBQUlBLG1CQUFtQjtZQUNyQjlCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsdUJBQXVCLCtCQUErQixDQUFDO1FBQzVGO1FBRUEsT0FBT087SUFDVDtJQUVBLE9BQU9NLE9BQU8sbUJBQW1CO0lBRWpDQyxTQUFTO1FBQ1AsTUFBTXBDLFNBQVMsSUFBSSxDQUFDdUIsU0FBUyxJQUN2QnJCLFlBQVksSUFBSSxDQUFDbUMsYUFBYSxJQUM5QkMsT0FBTztZQUNMdEM7WUFDQUU7UUFDRjtRQUVOLE9BQU9vQztJQUNUO0lBRUEsT0FBT0MsU0FBU0QsSUFBSSxFQUFFdkMsT0FBTyxFQUFFO1FBQzdCLE9BQU95QyxJQUFBQSxvQkFBVyxFQUFDLENBQUN6QztZQUNsQixNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdvQyxNQUN4QjdCLHVCQUF1QmdDLElBQUFBLHdDQUEyQixFQUFDekMsUUFBUUQsVUFDM0RFLE9BQU9RLHNCQUNQTixPQUFPdUMsNkJBQTZCakMsc0JBQXNCVixVQUMxREssV0FBV3VDLElBQUFBLHlDQUFnQyxFQUFDbEMsc0JBQXNCVjtZQUV4RUEsVUFBVTtZQUVWLE1BQU1hLG1CQUFtQixJQUFJZixpQkFBaUJFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDLE1BQU1DO1lBRXRGLE9BQU9RO1FBQ1QsR0FBR2I7SUFDTDtBQUNGO0FBRUEsU0FBUzJDLDZCQUE2QmpDLG9CQUFvQixFQUFFVixPQUFPO0lBQ2pFLE1BQU02QyxXQUFXbkMscUJBQXFCb0MsV0FBVyxJQUMzQzFDLE9BQU9KLFFBQVErQyxrQkFBa0IsQ0FBQ0Y7SUFFeEMsT0FBT3pDO0FBQ1QifQ==