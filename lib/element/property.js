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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJldHlOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVyZXR5Tm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHkuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICB2ZXJpZnkocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IG5hZW1WZXJpZmllcyA9IHRoaXMudmVyaWZ5TmFtZShwcm9wZXJ0aWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChuYWVtVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCBuYWVtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgbmFlbVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gKTtcbiAgICB9XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hZW1WZXJpZmllcztcbiAgfVxuXG4gIGZpbmRWYWxpZFByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSB0aGlzLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gY29udGV4dC5maW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHkgPSBwcm9wZXJ0eTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkUHJvcGVydHkgPSB0aGlzLmZpbmRWYWxpZFByb3BlcnR5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5ID0gdmFsaWRQcm9wZXJ0eTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmQgPSB2YWxpZGF0ZUZvcndhcmRzKHByb3BlcnR5KTtcblxuICAgICAgaWYgKHZhbGlkYXRlc0ZvcndhcmQpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHkgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMocHJvcGVydHkpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzRm9yd2FyZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkUHJvcGVydHkocHJvcGVydHkpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXNHaXZlblR5cGUgPSBmYWxzZTtcblxuICAgIHByb3BlcnR5ID0gdGhpcy52YWxpZGF0ZShjb250ZXh0LCAocHJvcGVydHkpID0+IHtcbiAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICAgIHR5cGVQcm9wZXJ0eSA9IHR5cGVQcm9wZXJ0aWVzLmZpbmQoKHR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlUHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gdHlwZVByb3BlcnR5LmNvbXBhcmVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgICBpZiAodHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAodHlwZVByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlUHJvcGVydHkuZ2V0VHlwZSgpO1xuXG4gICAgICAgIHByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgfSk7XG5cbiAgICBpZiAocHJvcGVydHkgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc0dpdmVuVHlwZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIHR5cGUpO1xuXG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsIm5hbWUiLCJ0eXBlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJnZXRQcm9wZXJ0eU5vZGUiLCJnZXROb2RlIiwicHJvcGVyZXR5Tm9kZSIsInNldE5hbWUiLCJzZXRUeXBlIiwiaXNFcXVhbFRvIiwicHJvcGVydHkiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGVNYXRjaGVzIiwibWF0Y2hQcm9wZXJ0eU5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJjb21wYXJlUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwiY29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInZlcmlmeSIsInByb3BlcnRpZXMiLCJ2ZXJpZmllcyIsInByb3BlcnR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJuYWVtVmVyaWZpZXMiLCJ2ZXJpZnlOYW1lIiwiZGVidWciLCJjb3VudCIsInJlZHVjZSIsInByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsImZpbmRWYWxpZFByb3BlcnR5IiwiZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUiLCJ2YWxpZFByb3BlcnR5IiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUZvcndhcmRzIiwidmFsaWRhdGVzIiwidmFsaWRhdGVzRm9yd2FyZCIsImFkZFByb3BlcnR5IiwidmFsaWRhdGVHaXZlblR5cGUiLCJ0eXBlU3RyaW5nIiwidmFsaWRhdGVzR2l2ZW5UeXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0eXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ0eXBlUHJvcGVydHkiLCJmaW5kIiwidHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwidHlwZUZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7eUJBQ0s7NkJBQ1E7eUJBQ0M7c0JBQ1E7NEJBQ2tCO01BRS9ELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQ3pELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO0lBQ2Q7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ2xCO0lBRUFHLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxrQkFBa0I7UUFDaEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGdCQUFnQlIsTUFBTSxHQUFHO1FBRS9CLE9B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