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
const _breakPoint = require("../utilities/breakPoint");
const _validation = require("../utilities/validation");
const _default = (0, _elements.define)(class Property extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, name, type){
        super(context, string, node, breakPoint);
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
            {
                const property = this, validatesForward = validateForwards(property);
                if (validatesForward) {
                    validates = true;
                }
            }
            if (validates) {
                property = this; ///
                context.addProperty(property);
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
            const propertyName = property.getName(), typeProperties = type.getProperties(), typeProperty = typeProperties.find((typeProperty)=>{
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
        const typeJSON = (0, _json.typeToTypeJSON)(this.type), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const type = typeJSON, json = {
            string,
            breakPoint,
            type
        };
        return json;
    }
    static name = "Property";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, propertyNode = (0, _instantiate.instantiateProperty)(string, context), node = propertyNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), name = (0, _element.nameFromPropertyNode)(propertyNode, context), type = (0, _json.typeFromJSON)(json, context);
            context = null;
            const property = new Property(context, string, node, breakPoint, name, type);
            return property;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQge3ZhbGlkYXRlVGVybXN9IGZyb20gXCIuLi91dGlsaXRpZXMvdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lLCB0eXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVyZXR5Tm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcmV0eU5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5LmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBwcm9wZXJ0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wZXJ0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBwcm9wZXJ0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvUHJvcGVydHlOYW1lID0gKHRoaXMubmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvcGVydHlOYW1lO1xuICB9XG5cbiAgdmVyaWZ5KHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCBuYWVtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCk7XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlOYW1lKHByb3BlcnRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFlbVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGNvdW50ID0gcHJvcGVydGllcy5yZWR1Y2UoKGNvdW50LCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAocHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIG5hZW1WZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGFwcGVhcnMgbW9yZSB0aGFuIG9uY2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKG5hZW1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkncyBuYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYWVtVmVyaWZpZXM7XG4gIH1cblxuICBmaW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gdGhpcy5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICB2YWxpZFByb3BlcnR5ID0gcHJvcGVydHk7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUHJvcGVydHk7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCB2YWxpZGF0ZUZvcndhcmRzKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRQcm9wZXJ0eSA9IHRoaXMuZmluZFZhbGlkUHJvcGVydHkoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSB2YWxpZFByb3BlcnR5OyAvLy9cblxuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMocHJvcGVydHkpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHByb3BlcnR5KTtcblxuICAgICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBwcm9wZXJ0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFByb3BlcnR5KHByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHByb3BlcnR5ID0gdGhpcy52YWxpZGF0ZShjb250ZXh0LCAocHJvcGVydHkpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgICAgdHlwZVByb3BlcnR5ID0gdHlwZVByb3BlcnRpZXMuZmluZCgodHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSB0eXBlUHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmICh0eXBlUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVQcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzR2l2ZW5UeXBlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgZ2l2ZW4gdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSwgdHlwZSk7XG5cbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibmFtZSIsInR5cGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldFByb3BlcnR5Tm9kZSIsImdldE5vZGUiLCJwcm9wZXJldHlOb2RlIiwic2V0TmFtZSIsInNldFR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5Tm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImNvbXBhcmVQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJjb21wYXJlc1RvUHJvcGVydHlOYW1lIiwidmVyaWZ5IiwicHJvcGVydGllcyIsInZlcmlmaWVzIiwicHJvcGVydHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5hZW1WZXJpZmllcyIsInZlcmlmeU5hbWUiLCJkZWJ1ZyIsImNvdW50IiwicmVkdWNlIiwicHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwiZmluZFZhbGlkUHJvcGVydHkiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZSIsInZhbGlkUHJvcGVydHkiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlRm9yd2FyZHMiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZXNGb3J3YXJkIiwiYWRkUHJvcGVydHkiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsInR5cGVTdHJpbmciLCJ2YWxpZGF0ZXNHaXZlblR5cGUiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0eXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5IiwiYnJlYWtQb2ludEZyb21KU09OIiwibmFtZUZyb21Qcm9wZXJ0eU5vZGUiLCJ0eXBlRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dDQVZ3QjswQkFFRDt5QkFDSzs2QkFDUTt5QkFDQztzQkFDUTs0QkFDa0I7NEJBQ25DO01BRTVCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxrQkFBa0I7UUFDaEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGdCQUFnQlIs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