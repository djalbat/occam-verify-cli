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
var _dom = /*#__PURE__*/ _interop_require_default(require("../../dom"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsVariable(term, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var Variable = _dom.default.Variable, context = localContext, termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNode(variableNode, context);
    if (variable !== null) {
        var termString = term.getString();
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."));
        var variableVerified = variable.verify(localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType();
            term.setType(type);
            verifiedAhead = verifyAhead();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."));
        }
    }
    return termVerifiedAsVariable;
}
var verifyMixins = [
    verifyTermAsVariable
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuY29uc3QgdmVyaWZ5TWl4aW5zID0gW1xuICB2ZXJpZnlUZXJtQXNWYXJpYWJsZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5TWl4aW5zO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwiVmFyaWFibGUiLCJkb20iLCJjb250ZXh0IiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsInZlcmlmeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0RBOzs7ZUFBQTs7OzBEQTlDZ0I7cUJBRVU7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0MscUJBQXFCQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUMzRCxJQUFJQyx5QkFBeUI7SUFFN0IsSUFBTSxBQUFFQyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxVQUFVTCxjQUNWTSxXQUFXUCxLQUFLUSxPQUFPLElBQ3ZCQyxlQUFlWixrQkFBa0JVLFdBQ2pDRyxXQUFXTixTQUFTTyxnQkFBZ0IsQ0FBQ0YsY0FBY0g7SUFFekQsSUFBSUksYUFBYSxNQUFNO1FBQ3JCLElBQU1FLGFBQWFaLEtBQUthLFNBQVM7UUFFakNaLGFBQWFhLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXO1FBRWhELElBQU1HLG1CQUFtQkwsU0FBU00sTUFBTSxDQUFDZjtRQUV6QyxJQUFJYyxrQkFBa0I7WUFDcEIsSUFBSUU7WUFFSixJQUFNQyxPQUFPUixTQUFTUyxPQUFPO1lBRTdCbkIsS0FBS29CLE9BQU8sQ0FBQ0Y7WUFFYkQsZ0JBQWdCZjtZQUVoQkMseUJBQXlCYyxlQUFlLEdBQUc7UUFDN0M7UUFFQSxJQUFJZCx3QkFBd0I7WUFDMUJGLGFBQWFvQixLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFQsWUFBVztRQUNwRDtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVBLElBQU1tQixlQUFlO0lBQ25CdkI7Q0FDRDtJQUVELFdBQWV1QiJ9