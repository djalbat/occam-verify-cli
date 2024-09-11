"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetavariable;
    }
});
var _query = require("../utilities/query");
var _name = require("../utilities/name");
var _metavariable = require("../metavariable");
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/type");
function verifyMetavariable(metavariableNode, localContext) {
    var metavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var name = (0, _name.nameFromMetavariableNode)(metavariableNode), metavariable = localContext.findMetavariableByName(name);
    if (metavariable === null) {
        localContext.debug("The metavariable '".concat(metavariableString, "' is not present."), metavariableNode);
    } else {
        var typeNode = typeNodeQuery(metavariableNode);
        if (typeNode !== null) {
            var typeString = localContext.nodeAsString(typeNode);
            localContext.debug("The '".concat(typeString, "' type was found when a term should be present."), typeNode);
        } else {
            var termType = metavariable.getTermType(), termNode = termNodeQuery(metavariableNode);
            if (false) {
            ///
            } else if (termType === null && termNode === null) {
                metavariableVerified = true;
            } else if (termType === null && termNode !== null) {
                var termString = localContext.nodeAsString(termNode);
                localContext.debug("The '".concat(termString, "' term was found when none is expected."), termNode);
            } else if (termType !== null && termNode === null) {
                var termTypeName = termType.getName();
                localContext.debug("No term was found when the metavariable's term type is '".concat(termTypeName, "'."), termNode);
            } else {
                var termVerifiedAgainstTermType = (0, _metavariable.verifyTermAgainstTermType)(termNode, termType, localContext);
                metavariableVerified = termVerifiedAgainstTermType; ///
            }
        }
    }
    if (metavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUgfSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlOYW1lKG5hbWUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgPT09IG51bGwpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSBtZXRhdmFyaWFibGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIHdhcyBmb3VuZCB3aGVuIGEgdGVybSBzaG91bGQgYmUgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gbWV0YXZhcmlhYmxlLmdldFRlcm1UeXBlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKHRlcm1UeXBlID09PSBudWxsKSAmJiAodGVybU5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHRlcm1UeXBlID09PSBudWxsKSAmJiAodGVybU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3YXMgZm91bmQgd2hlbiBub25lIGlzIGV4cGVjdGVkLmAsIHRlcm1Ob2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoKHRlcm1UeXBlICE9PSBudWxsKSAmJiAodGVybU5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYE5vIHRlcm0gd2FzIGZvdW5kIHdoZW4gdGhlIG1ldGF2YXJpYWJsZSdzIHRlcm0gdHlwZSBpcyAnJHt0ZXJtVHlwZU5hbWV9Jy5gLCB0ZXJtTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUgPSB2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlKHRlcm1Ob2RlLCB0ZXJtVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZTsgLy8vXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGF2YXJpYWJsZSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJuYW1lIiwibmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TmFtZSIsImRlYnVnIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwidGVybVR5cGUiLCJnZXRUZXJtVHlwZSIsInRlcm1Ob2RlIiwidGVybVN0cmluZyIsInRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybVR5cGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdFRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7O3FCQVBFO29CQUNlOzRCQUNDO0FBRTFDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixtQkFBbUJJLGdCQUFnQixFQUFFQyxZQUFZO0lBQ3ZFLElBQUlDLHVCQUF1QjtJQUUzQixJQUFNQyxxQkFBcUJGLGFBQWFHLFlBQVksQ0FBQ0o7SUFFckRDLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQkYsb0JBQW1CLHNCQUFvQkg7SUFFNUUsSUFBTU0sT0FBT0MsSUFBQUEsOEJBQXdCLEVBQUNQLG1CQUNoQ1EsZUFBZVAsYUFBYVEsc0JBQXNCLENBQUNIO0lBRXpELElBQUlFLGlCQUFpQixNQUFNO1FBQ3pCUCxhQUFhUyxLQUFLLENBQUMsQUFBQyxxQkFBdUMsT0FBbkJQLG9CQUFtQixzQkFBb0JIO0lBQ2pGLE9BQU87UUFDTCxJQUFNVyxXQUFXWixjQUFjQztRQUUvQixJQUFJVyxhQUFhLE1BQU07WUFDckIsSUFBTUMsYUFBYVgsYUFBYUcsWUFBWSxDQUFDTztZQUU3Q1YsYUFBYVMsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWEUsWUFBVyxvREFBa0REO1FBQzFGLE9BQU87WUFDTCxJQUFNRSxXQUFXTCxhQUFhTSxXQUFXLElBQ25DQyxXQUFXbEIsY0FBY0c7WUFFL0IsSUFBSSxPQUFPO1lBQ1QsR0FBRztZQUNMLE9BQU8sSUFBSSxBQUFDYSxhQUFhLFFBQVVFLGFBQWEsTUFBTztnQkFDckRiLHVCQUF1QjtZQUN6QixPQUFPLElBQUksQUFBQ1csYUFBYSxRQUFVRSxhQUFhLE1BQU87Z0JBQ3JELElBQU1DLGFBQWFmLGFBQWFHLFlBQVksQ0FBQ1c7Z0JBRTdDZCxhQUFhUyxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYTSxZQUFXLDRDQUEwQ0Q7WUFDbEYsT0FBTyxJQUFJLEFBQUNGLGFBQWEsUUFBVUUsYUFBYSxNQUFPO2dCQUNyRCxJQUFNRSxlQUFlSixTQUFTSyxPQUFPO2dCQUVyQ2pCLGFBQWFTLEtBQUssQ0FBQyxBQUFDLDJEQUF1RSxPQUFiTyxjQUFhLE9BQUtGO1lBQ2xHLE9BQU87Z0JBQ0wsSUFBTUksOEJBQThCQyxJQUFBQSx1Q0FBeUIsRUFBQ0wsVUFBVUYsVUFBVVo7Z0JBRWxGQyx1QkFBdUJpQiw2QkFBNkIsR0FBRztZQUN6RDtRQUNGO0lBQ0Y7SUFFQSxJQUFJakIsc0JBQXNCO1FBQ3hCRCxhQUFhUyxLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJQLG9CQUFtQixvQkFBa0JIO0lBQzlFO0lBRUEsT0FBT0U7QUFDVCJ9