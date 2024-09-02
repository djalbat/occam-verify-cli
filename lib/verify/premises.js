"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyPremises;
    }
});
var _premise = /*#__PURE__*/ _interop_require_default(require("../verify/premise"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyPremises(premiseNodes, premises, localContext) {
    var premisesVerified;
    premisesVerified = premiseNodes.every(function(premiseNode) {
        var premiseVerified = (0, _premise.default)(premiseNode, premises, localContext);
        if (premiseVerified) {
            return true;
        }
    });
    return premisesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQcmVtaXNlcyhwcmVtaXNlTm9kZXMsIHByZW1pc2VzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VzVmVyaWZpZWQ7XG5cbiAgcHJlbWlzZXNWZXJpZmllZCA9IHByZW1pc2VOb2Rlcy5ldmVyeSgocHJlbWlzZU5vZGUpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSB2ZXJpZnlQcmVtaXNlKHByZW1pc2VOb2RlLCBwcmVtaXNlcywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5UHJlbWlzZXMiLCJwcmVtaXNlTm9kZXMiLCJwcmVtaXNlcyIsImxvY2FsQ29udGV4dCIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozs4REFGRTs7Ozs7O0FBRVgsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFlBQVk7SUFDekUsSUFBSUM7SUFFSkEsbUJBQW1CSCxhQUFhSSxLQUFLLENBQUMsU0FBQ0M7UUFDckMsSUFBTUMsa0JBQWtCQyxJQUFBQSxnQkFBYSxFQUFDRixhQUFhSixVQUFVQztRQUU3RCxJQUFJSSxpQkFBaUI7WUFDbkIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNUIn0=