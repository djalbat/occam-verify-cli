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
            const validatesForward = validateForwards(property, context);
            if (validatesForward) {
                validates = true;
                context.debug(`...the '${propertyString}' property is already valid.`);
            } else {
                property = null;
            }
        } else {
            {
                const property = this, validatesForward = validateForwards(property, context);
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
        property = this.validate(context, (property, context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IG5hbWVGcm9tUHJvcGVydHlOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUsIHR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJldHlOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVyZXR5Tm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHkuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHByb3BlcnR5Tm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICB2ZXJpZnkocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IG5hZW1WZXJpZmllcyA9IHRoaXMudmVyaWZ5TmFtZShwcm9wZXJ0aWVzLCBjb250ZXh0KTtcblxuICAgIGlmIChuYWVtVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU5hbWUocHJvcGVydGllcywgY29udGV4dCkge1xuICAgIGxldCBuYWVtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuLi5gKTtcblxuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY291bnQgPSBwcm9wZXJ0aWVzLnJlZHVjZSgoY291bnQsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlDb21wYXJlc1RvUHJvcGVydHlOYW1lID0gcHJvcGVydHkuY29tcGFyZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgbmFlbVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgYXBwZWFycyBtb3JlIHRoYW4gb25jZS5gKTtcbiAgICB9XG5cbiAgICBpZiAobmFlbVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSdzIG5hbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hZW1WZXJpZmllcztcbiAgfVxuXG4gIGZpbmRWYWxpZFByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSB0aGlzLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gY29udGV4dC5maW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHZhbGlkUHJvcGVydHkgPSBwcm9wZXJ0eTsgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRQcm9wZXJ0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIHZhbGlkYXRlRm9yd2FyZHMpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFByb3BlcnR5ID0gdGhpcy5maW5kVmFsaWRQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eSA9IHZhbGlkUHJvcGVydHk7IC8vL1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkID0gdmFsaWRhdGVGb3J3YXJkcyhwcm9wZXJ0eSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNGb3J3YXJkKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZCA9IHZhbGlkYXRlRm9yd2FyZHMocHJvcGVydHksIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNGb3J3YXJkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHByb3BlcnR5ID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkUHJvcGVydHkocHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5O1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5IGdpdmVuIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuVHlwZSA9IGZhbHNlO1xuXG4gICAgcHJvcGVydHkgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQsIChwcm9wZXJ0eSwgY29udGV4dCkgPT4ge1xuICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgICB0eXBlUHJvcGVydHkgPSB0eXBlUHJvcGVydGllcy5maW5kKCh0eXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZVByb3BlcnR5Q29tcGFyZXNUb1Byb3BlcnR5TmFtZSA9IHR5cGVQcm9wZXJ0eS5jb21wYXJlUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHR5cGVQcm9wZXJ0eSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZVByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5ICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNHaXZlblR5cGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eSBnaXZlbiB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lLCB0eXBlKTtcblxuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJuYW1lIiwidHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0UHJvcGVydHlOb2RlIiwiZ2V0Tm9kZSIsInByb3BlcmV0eU5vZGUiLCJzZXROYW1lIiwic2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5IiwicHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOb2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsImNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJ2ZXJpZnkiLCJwcm9wZXJ0aWVzIiwidmVyaWZpZXMiLCJwcm9wZXJ0eVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFlbVZlcmlmaWVzIiwidmVyaWZ5TmFtZSIsImRlYnVnIiwiY291bnQiLCJyZWR1Y2UiLCJwcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJmaW5kVmFsaWRQcm9wZXJ0eSIsImZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlIiwidmFsaWRQcm9wZXJ0eSIsInZhbGlkYXRlIiwidmFsaWRhdGVGb3J3YXJkcyIsInZhbGlkYXRlcyIsInZhbGlkYXRlc0ZvcndhcmQiLCJhZGRQcm9wZXJ0eSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwidHlwZVN0cmluZyIsInZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidHlwZVByb3BlcnR5IiwiZmluZCIsInR5cGVQcm9wZXJ0eUNvbXBhcmVzVG9Qcm9wZXJ0eU5hbWUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHkiLCJicmVha1BvaW50RnJvbUpTT04iLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsInR5cGVGcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEO3lCQUNLOzZCQUNRO3lCQUNDO3NCQUNROzRCQUNrQjtNQUUvRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN6RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsa0JBQWtCO1FBQ2hCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxnQkFBZ0JSLE1BQU0sR0FBRztRQUUvQixPQUFPUTtJQUNUO0lBRUFDLFFBQVFQ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