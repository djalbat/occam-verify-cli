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
var _metavariable = require("../metavariable");
var _name = require("../utilities/name");
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), typeNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/type");
function verifyMetavariable(metavariableNode, localContext) {
    var metavariableVerified = false;
    var metavariableString = localContext.nodeAsString(metavariableNode);
    localContext.trace("Verifying the '".concat(metavariableString, "' metavariable..."), metavariableNode);
    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
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
                var termUnifiedWithTermType = (0, _metavariable.unifyTermWithTermType)(termNode, termType, localContext);
                metavariableVerified = termUnifiedWithTermType; ///
            }
        }
    }
    if (metavariableVerified) {
        localContext.debug("...verified the '".concat(metavariableString, "' metavariable."), metavariableNode);
    }
    return metavariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bmlmeVRlcm1XaXRoVGVybVR5cGUgfSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXZhcmlhYmxlL2FyZ3VtZW50L3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhdmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgaWYgKG1ldGF2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlIG1ldGF2YXJpYWJsZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gLCBtZXRhdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgd2FzIGZvdW5kIHdoZW4gYSB0ZXJtIHNob3VsZCBiZSBwcmVzZW50LmAsIHR5cGVOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0VGVybVR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgodGVybVR5cGUgPT09IG51bGwpICYmICh0ZXJtTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgodGVybVR5cGUgPT09IG51bGwpICYmICh0ZXJtTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdhcyBmb3VuZCB3aGVuIG5vbmUgaXMgZXhwZWN0ZWQuYCwgdGVybU5vZGUpO1xuICAgICAgfSBlbHNlIGlmICgodGVybVR5cGUgIT09IG51bGwpICYmICh0ZXJtTm9kZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgTm8gdGVybSB3YXMgZm91bmQgd2hlbiB0aGUgbWV0YXZhcmlhYmxlJ3MgdGVybSB0eXBlIGlzICcke3Rlcm1UeXBlTmFtZX0nLmAsIHRlcm1Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlID0gdW5pZnlUZXJtV2l0aFRlcm1UeXBlKHRlcm1Ob2RlLCB0ZXJtVHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlOyAvLy9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXZhcmlhYmxlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlIiwibG9jYWxDb250ZXh0IiwibWV0YXZhcmlhYmxlVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJ0eXBlTm9kZSIsInR5cGVTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFRlcm1UeXBlIiwidGVybU5vZGUiLCJ0ZXJtU3RyaW5nIiwidGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsInRlcm1VbmlmaWVkV2l0aFRlcm1UeXBlIiwidW5pZnlUZXJtV2l0aFRlcm1UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7O3FCQVBFOzRCQUNZO29CQUNlO0FBRXJELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixTQUFTRixtQkFBbUJJLGdCQUFnQixFQUFFQyxZQUFZO0lBQ3ZFLElBQUlDLHVCQUF1QjtJQUUzQixJQUFNQyxxQkFBcUJGLGFBQWFHLFlBQVksQ0FBQ0o7SUFFckRDLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFvQyxPQUFuQkYsb0JBQW1CLHNCQUFvQkg7SUFFNUUsSUFBTU0sbUJBQW1CQyxJQUFBQSwwQ0FBb0MsRUFBQ1AsbUJBQ3hEUSxlQUFlUCxhQUFhUSxrQ0FBa0MsQ0FBQ0g7SUFFckUsSUFBSUUsaUJBQWlCLE1BQU07UUFDekJQLGFBQWFTLEtBQUssQ0FBQyxBQUFDLHFCQUF1QyxPQUFuQlAsb0JBQW1CLHNCQUFvQkg7SUFDakYsT0FBTztRQUNMLElBQU1XLFdBQVdaLGNBQWNDO1FBRS9CLElBQUlXLGFBQWEsTUFBTTtZQUNyQixJQUFNQyxhQUFhWCxhQUFhRyxZQUFZLENBQUNPO1lBRTdDVixhQUFhUyxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYRSxZQUFXLG9EQUFrREQ7UUFDMUYsT0FBTztZQUNMLElBQU1FLFdBQVdMLGFBQWFNLFdBQVcsSUFDbkNDLFdBQVdsQixjQUFjRztZQUUvQixJQUFJLE9BQU87WUFDVCxHQUFHO1lBQ0wsT0FBTyxJQUFJLEFBQUNhLGFBQWEsUUFBVUUsYUFBYSxNQUFPO2dCQUNyRGIsdUJBQXVCO1lBQ3pCLE9BQU8sSUFBSSxBQUFDVyxhQUFhLFFBQVVFLGFBQWEsTUFBTztnQkFDckQsSUFBTUMsYUFBYWYsYUFBYUcsWUFBWSxDQUFDVztnQkFFN0NkLGFBQWFTLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhNLFlBQVcsNENBQTBDRDtZQUNsRixPQUFPLElBQUksQUFBQ0YsYUFBYSxRQUFVRSxhQUFhLE1BQU87Z0JBQ3JELElBQU1FLGVBQWVKLFNBQVNLLE9BQU87Z0JBRXJDakIsYUFBYVMsS0FBSyxDQUFDLEFBQUMsMkRBQXVFLE9BQWJPLGNBQWEsT0FBS0Y7WUFDbEcsT0FBTztnQkFDTCxJQUFNSSwwQkFBMEJDLElBQUFBLG1DQUFxQixFQUFDTCxVQUFVRixVQUFVWjtnQkFFMUVDLHVCQUF1QmlCLHlCQUF5QixHQUFHO1lBQ3JEO1FBQ0Y7SUFDRjtJQUVBLElBQUlqQixzQkFBc0I7UUFDeEJELGFBQWFTLEtBQUssQ0FBQyxBQUFDLG9CQUFzQyxPQUFuQlAsb0JBQW1CLG9CQUFrQkg7SUFDOUU7SUFFQSxPQUFPRTtBQUNUIn0=