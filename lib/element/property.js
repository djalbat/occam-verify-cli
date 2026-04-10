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
    validate(context, validateForwards) {
        let property = null;
        const propertyString = this.getString(); ///
        context.trace(`Validating the '${propertyString}' property...`);
        const validProperty = this.findValidProperty(context);
        if (validProperty) {
            property = validProperty; ///
            context.debug(`...the '${propertyString}' property is already valid.`);
            const validatesForward = validateForwards(property);
            if (!validatesForward) {
                property = null;
            }
        } else {
            let validates = false;
            property = this; ///
            const validatesForward = validateForwards(property);
            if (validatesForward) {
                validates = true;
            }
            if (validates) {
                context.addProperty(property);
                context.debug(`...validated the '${propertyString}' property.`);
            }
        }
        return property;
    }
    validateGivenType(type, context) {
        let property;
        const typeString = type.getString(), propertyString = this.getString(); ///
        context.trace(`Validating the '${propertyString}' property given the '${typeString}' type...`);
        let validatesGivenType = false;
        property = this.validate(context, (property)=>{
            let validatesForwards = false;
            const propertyName = this.name, typeProperties = type.getProperties(), typeProperty = typeProperties.find((typeProperty)=>{
                const typePropertyComparesToPropertyName = typeProperty.comparePropertyName(propertyName);
                if (typePropertyComparesToPropertyName) {
                    return true;
                }
            }) || null;
            if (typeProperty !== null) {
                const type = typeProperty.getType();
                property.setType(type);
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (property !== null) {
            validatesGivenType = true;
        }
        if (validatesGivenType) {
            context.debug(`...validated the '${propertyString}' property given the '${typeString}' type.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5LmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBwcm9wZXJ0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBuYWVtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCk7XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIG5hZW1WZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKG5hZW1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYWVtVmVyaWZpZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICB2YWxpZFByb3BlcnR5ID0gcHJvcGVydHk7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHk7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFByb3BlcnR5ID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5KSB7XG4gICAgICBwcm9wZXJ0eSA9IHZhbGlkUHJvcGVydHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyhwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghdmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgcHJvcGVydHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmFkZFByb3BlcnR5KHByb3BlcnR5KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHByb3BlcnR5ID0gdGhpcy52YWxpZGF0ZShjb250ZXh0LCAocHJvcGVydHkpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHR5cGVQcm9wZXJ0eSA9IHR5cGVQcm9wZXJ0aWVzLmZpbmQoKHR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdHlwZVByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAodHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAodHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlUHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5hbWUsIHR5cGUpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibmFtZSIsInR5cGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5Tm9kZSIsImdldE5vZGUiLCJwcm9wZXJldHlOb2RlIiwic2V0TmFtZSIsInNldFR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5Tm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJjb21wYXJlc1RvUHJvcGVydHlOYW1lIiwidmVyaWZ5IiwicHJvcGVydGllcyIsInZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5hZW1WZXJpZmllcyIsInZlcmlmeU5hbWUiLCJkZWJ1ZyIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiZmluZFZhbGlkUHJvcGVydHkiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZSIsInZhbGlkUHJvcGVydHkiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwidmFsaWRhdGVzIiwiYWRkUHJvcGVydHkiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0eXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0s7NkJBQ1E7eUJBQ0M7c0JBQ1E7TUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxN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