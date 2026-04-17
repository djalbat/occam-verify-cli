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
        let validates = false;
        const validProperty = this.findValidProperty(context);
        if (validProperty !== null) {
            property = validProperty; ///
            const validatesForward = validateForwards(property);
            if (validatesForward) {
                validates = true;
                context.debug(`...the '${propertyString}' property is already valid.`);
            } else {
                property = null;
            }
        } else {
            property = this; ///
            const validatesForward = validateForwards(property);
            if (validatesForward) {
                validates = true;
            } else {
                property = null;
            }
            if (validates) {
                context.addProperty(property);
                context.debug(`...validated the '${propertyString}' property.`);
            }
        }
        if (validates) {
            context.debug(`...validated the '${propertyString}' property.`);
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString(), lineIndex = this.getBreakPoint(), type = typeJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5LmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBwcm9wZXJ0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBuYWVtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCk7XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIG5hZW1WZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKG5hZW1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYWVtVmVyaWZpZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICB2YWxpZFByb3BlcnR5ID0gcHJvcGVydHk7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHk7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFByb3BlcnR5ID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHZhbGlkUHJvcGVydHk7IC8vL1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyhwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNGb3J3YXJkKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmFkZFByb3BlcnR5KHByb3BlcnR5KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5UeXBlID0gZmFsc2U7XG5cbiAgICBwcm9wZXJ0eSA9IHRoaXMudmFsaWRhdGUoY29udGV4dCwgKHByb3BlcnR5KSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICB0eXBlUHJvcGVydHkgPSB0eXBlUHJvcGVydGllcy5maW5kKCh0eXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZVByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNHaXZlblR5cGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJuYW1lIiwidHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0Tm9kZSIsInByb3BlcmV0eU5vZGUiLCJzZXROYW1lIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5IiwicHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJ2ZXJpZnkiLCJwcm9wZXJ0aWVzIiwidmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFlbVZlcmlmaWVzIiwidmVyaWZ5TmFtZSIsImRlYnVnIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJmaW5kVmFsaWRQcm9wZXJ0eSIsImZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlIiwidmFsaWRQcm9wZXJ0eSIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3J3YXJkcyIsInZhbGlkYXRlcyIsInZhbGlkYXRlc0ZvcndhcmQiLCJhZGRQcm9wZXJ0eSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHlwZVByb3BlcnR5IiwiZmluZCIsInR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwiZ2V0QnJlYWtQb2ludCIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0s7NkJBQ1E7eUJBQ0M7c0JBQ1E7TUFFN0MsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLENBQUU7UUFDeEQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLGtCQUFrQjtRQUNoQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsZ0JBQWdCUixNQUFNLEdBQUc7UUFFL0IsT0FBT1E7SUFDVDtJQUVBQyxRQUFRUCxJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBUSxRQUFRUCxJQUFJLEVBQUU7UUFDWixJQUFJLENBQUNBLElBQUksR0FBR0E7SUFDZDtJQUVBUSxVQUFVQyxRQUFRLEVBQUU7UUFDbEIsTUFBTUMsZUFBZUQsU0FBU0wsT0FBTyxJQUMvQk8sc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLGVBQzdDRyxVQUFVRixxQkFBc0IsR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRUFELGtCQUFrQkYsWUFBWSxFQUFFO1FBQzlCLE1BQU1iLE9BQU9hLGNBQ1BJLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNsQixPQUM3QmMsc0JBQXNCRyxhQUFhLEdB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