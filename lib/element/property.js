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
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Property extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, name, type){
        super(context, string, node, lineIndex);
        this.name = name;
        this.type = type;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getPropertyNode() {
        const node = this.getNode(), properetyNode = node; ///
        return properetyNode;
    }
    setName(name) {
        this.name = name;
    }
    setType(type) {
        this.type = type;
    }
    isEqualTo(property) {
        const propertyNode = property.getNode(), propertyNodeMatches = this.matchPropertyNode(propertyNode), equalTo = propertyNodeMatches; ///
        return equalTo;
    }
    matchPropertyNode(propertyNode) {
        const node = propertyNode, nodeMatches = this.matchNode(node), propertyNodeMatches = nodeMatches; ///
        return propertyNodeMatches;
    }
    comparePropertyName(propertyName) {
        const comparesToPropertyName = this.name === propertyName;
        return comparesToPropertyName;
    }
    verify(properties, context) {
        let verifies = false;
        const propertyString = this.getString(); ///
        context.trace(`Verifying the '${propertyString}' property...`);
        const naemVerifies = this.verifyName(properties, context);
        if (naemVerifies) {
            verifies = true;
        }
        if (verifies) {
            context.debug(`...verified the '${propertyString}' property.`);
        }
        return verifies;
    }
    verifyName(properties, context) {
        let naemVerifies = false;
        const propertyString = this.getString();
        context.trace(`Verifying the '${propertyString}' property's name...`);
        const propertyName = this.name, count = properties.reduce((count, property)=>{
            if (property !== this) {
                const propertyComparesToPropertyName = property.comparePropertyName(propertyName);
                if (propertyComparesToPropertyName) {
                    count++;
                }
            }
            return count;
        }, 0);
        if (count === 0) {
            naemVerifies = true;
        } else {
            context.debug(`The '${propertyString}' property appears more than once.`);
        }
        if (naemVerifies) {
            context.debug(`...verified the '${propertyString}' property's name.`);
        }
        return naemVerifies;
    }
    findValidProperty(context) {
        const propertyNode = this.getPropertyNode(), property = context.findPropertyByPropertyNode(propertyNode), validProperty = property; ///
        return validProperty;
    }
    validate(context) {
        let property = null;
        const propertyString = this.getString(); ///
        context.trace(`Validating the '${propertyString}' property...`);
        const validProperty = this.findValidProperty(context);
        if (validProperty) {
            property = validProperty; ///
            context.debug(`...the '${propertyString}' property is already valid.`);
        } else {
            let validates = false;
            debugger;
            if (validates) {
                const property = this; ///
                context.addProperty(property);
                context.debug(`...validated the '${propertyString}' property.`);
            }
        }
        return property;
    }
    toJSON() {
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(), lineIndex = this.getLineIndex(), type = typeJSON, json = {
            string,
            lineIndex,
            type
        };
        return json;
    }
    static name = "Property";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, name = (0, _element.nameFromPropertyNode)(propertyNode, context), type = (0, _json.typeFromJSON)(json, context);
            context = null;
            const property = new Property(context, string, node, lineIndex, name, type);
            return property;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5LmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBwcm9wZXJ0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBuYWVtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCk7XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIG5hZW1WZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKG5hZW1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYWVtVmVyaWZpZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICB2YWxpZFByb3BlcnR5ID0gcHJvcGVydHk7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHk7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFByb3BlcnR5ID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5KSB7XG4gICAgICBwcm9wZXJ0eSA9IHZhbGlkUHJvcGVydHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFByb3BlcnR5KHByb3BlcnR5KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lLCB0eXBlKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsIm5hbWUiLCJ0eXBlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXROb2RlIiwicHJvcGVyZXR5Tm9kZSIsInNldE5hbWUiLCJzZXRUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHkiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInZlcmlmeSIsInByb3BlcnRpZXMiLCJ2ZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJuYWVtVmVyaWZpZXMiLCJ2ZXJpZnlOYW1lIiwiZGVidWciLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImZpbmRWYWxpZFByb3BlcnR5IiwiZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUiLCJ2YWxpZFByb3BlcnR5IiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJhZGRQcm9wZXJ0eSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHkiLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5n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