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
            var termType = metavariable.getTermType(), termNode = termNodeQuery(metavariableNode), typeString1 = localContext.nodeAsString(typeNode), termString = localContext.nodeAsString(termNode);
            if (false) {
            ///
            } else if (termType === null && termNode === null) {
                metavariableVerified = true;
            } else if (termType === null && termNode !== null) {
                localContext.debug("The '".concat(termString, "' term was found when none is expected."), termNode);
            } else if (termType !== null && termNode === null) {
                localContext.debug("No term was found when the metavariable's term type is '".concat(typeString1, "'."), termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUgfSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZS9hcmd1bWVudC90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IG5hbWUgPSBuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlOYW1lKG5hbWUpO1xuXG4gIGlmIChtZXRhdmFyaWFibGUgPT09IG51bGwpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSBtZXRhdmFyaWFibGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIHdhcyBmb3VuZCB3aGVuIGEgdGVybSBzaG91bGQgYmUgcHJlc2VudC5gLCB0eXBlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gbWV0YXZhcmlhYmxlLmdldFRlcm1UeXBlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSksXG4gICAgICAgICAgICB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKHRlcm1UeXBlID09PSBudWxsKSAmJiAodGVybU5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHRlcm1UeXBlID09PSBudWxsKSAmJiAodGVybU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdhcyBmb3VuZCB3aGVuIG5vbmUgaXMgZXhwZWN0ZWQuYCwgdGVybU5vZGUpO1xuICAgICAgfSBlbHNlIGlmICgodGVybVR5cGUgIT09IG51bGwpICYmICh0ZXJtTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBObyB0ZXJtIHdhcyBmb3VuZCB3aGVuIHRoZSBtZXRhdmFyaWFibGUncyB0ZXJtIHR5cGUgaXMgJyR7dHlwZVN0cmluZ30nLmAsIHRlcm1Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RUZXJtVHlwZSA9IHZlcmlmeVRlcm1BZ2FpbnN0VGVybVR5cGUodGVybU5vZGUsIHRlcm1UeXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwibG9jYWxDb250ZXh0IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm5hbWUiLCJuYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlOYW1lIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidGVybU5vZGUiLCJ0ZXJtU3RyaW5nIiwidGVybVZlcmlmaWVkQWdhaW5zdFRlcm1UeXBlIiwidmVyaWZ5VGVybUFnYWluc3RUZXJtVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUF3QkE7OztxQkFQRTtvQkFDZTs0QkFDQztBQUUxQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0YsbUJBQW1CSSxnQkFBZ0IsRUFBRUMsWUFBWTtJQUN2RSxJQUFJQyx1QkFBdUI7SUFFM0IsSUFBTUMscUJBQXFCRixhQUFhRyxZQUFZLENBQUNKO0lBRXJEQyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJGLG9CQUFtQixzQkFBb0JIO0lBRTVFLElBQU1NLE9BQU9DLElBQUFBLDhCQUF3QixFQUFDUCxtQkFDaENRLGVBQWVQLGFBQWFRLHNCQUFzQixDQUFDSDtJQUV6RCxJQUFJRSxpQkFBaUIsTUFBTTtRQUN6QlAsYUFBYVMsS0FBSyxDQUFDLEFBQUMscUJBQXVDLE9BQW5CUCxvQkFBbUIsc0JBQW9CSDtJQUNqRixPQUFPO1FBQ0wsSUFBTVcsV0FBV1osY0FBY0M7UUFFL0IsSUFBSVcsYUFBYSxNQUFNO1lBQ3JCLElBQU1DLGFBQWFYLGFBQWFHLFlBQVksQ0FBQ087WUFFN0NWLGFBQWFTLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhFLFlBQVcsb0RBQWtERDtRQUMxRixPQUFPO1lBQ0wsSUFBTUUsV0FBV0wsYUFBYU0sV0FBVyxJQUNuQ0MsV0FBV2xCLGNBQWNHLG1CQUN6QlksY0FBYVgsYUFBYUcsWUFBWSxDQUFDTyxXQUN2Q0ssYUFBYWYsYUFBYUcsWUFBWSxDQUFDVztZQUU3QyxJQUFJLE9BQU87WUFDVCxHQUFHO1lBQ0wsT0FBTyxJQUFJLEFBQUNGLGFBQWEsUUFBVUUsYUFBYSxNQUFPO2dCQUNyRGIsdUJBQXVCO1lBQ3pCLE9BQU8sSUFBSSxBQUFDVyxhQUFhLFFBQVVFLGFBQWEsTUFBTztnQkFDckRkLGFBQWFTLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhNLFlBQVcsNENBQTBDRDtZQUNsRixPQUFPLElBQUksQUFBQ0YsYUFBYSxRQUFVRSxhQUFhLE1BQU87Z0JBQ3JEZCxhQUFhUyxLQUFLLENBQUMsQUFBQywyREFBcUUsT0FBWEUsYUFBVyxPQUFLRztZQUNoRyxPQUFPO2dCQUNMLElBQU1FLDhCQUE4QkMsSUFBQUEsdUNBQXlCLEVBQUNILFVBQVVGLFVBQVVaO2dCQUVsRkMsdUJBQXVCZSw2QkFBNkIsR0FBRztZQUN6RDtRQUNGO0lBQ0Y7SUFFQSxJQUFJZixzQkFBc0I7UUFDeEJELGFBQWFTLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQlAsb0JBQW1CLG9CQUFrQkg7SUFDOUU7SUFFQSxPQUFPRTtBQUNUIn0=