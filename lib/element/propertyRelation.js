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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5UmVsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlSZWxhdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMuZmluZFZhbGlkUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHByb3BlcnR5UmVsYXRpb24gPSB2YWxpZFByb3BlcnR5UmVsYXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgICAgdmFsaWRhdGVzID0gcHJvcGVydHlWYWxpZGF0ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvcGVydHlSZWxhdGlvbihwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydHkudmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcblxuICAgICAgcHJvcGVydHlWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsInByb3BlcnR5IiwiZ2V0VGVybSIsImdldFByb3BlcnR5IiwiZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJnZXRUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRQcm9wZXJ0eVJlbGF0aW9uIiwiZmluZFByb3BlcnR5UmVsYXRpb25CeVByb3BlcnR5UmVsYXRpb25Ob2RlIiwidmFsaWRQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGUiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVZhbGlkYXRlcyIsInZhbGlkYXRlUHJvcGVydHkiLCJhZGRQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7eUJBQ0s7NkJBQ2dCO3lCQUNLO01BRWpELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyx1QkFBTztJQUMxRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFFO1FBQzVELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO0lBQ2xCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxj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