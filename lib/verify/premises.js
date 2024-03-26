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
function verifyPremises(premiseNodes, premises, localMetaContext) {
    var premisesVerified;
    premisesVerified = premiseNodes.every(function(premiseNode) {
        var premiseVerified = (0, _premise.default)(premiseNode, premises, localMetaContext);
        if (premiseVerified) {
            return true;
        }
    });
    return premisesVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcHJlbWlzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlQcmVtaXNlIGZyb20gXCIuLi92ZXJpZnkvcHJlbWlzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlQcmVtaXNlcyhwcmVtaXNlTm9kZXMsIHByZW1pc2VzLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGxldCBwcmVtaXNlc1ZlcmlmaWVkO1xuXG4gIHByZW1pc2VzVmVyaWZpZWQgPSBwcmVtaXNlTm9kZXMuZXZlcnkoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gdmVyaWZ5UHJlbWlzZShwcmVtaXNlTm9kZSwgcHJlbWlzZXMsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQcmVtaXNlcyIsInByZW1pc2VOb2RlcyIsInByZW1pc2VzIiwibG9jYWxNZXRhQ29udGV4dCIsInByZW1pc2VzVmVyaWZpZWQiLCJldmVyeSIsInByZW1pc2VOb2RlIiwicHJlbWlzZVZlcmlmaWVkIiwidmVyaWZ5UHJlbWlzZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzhEQUZFOzs7Ozs7QUFFWCxTQUFTQSxlQUFlQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsZ0JBQWdCO0lBQzdFLElBQUlDO0lBRUpBLG1CQUFtQkgsYUFBYUksS0FBSyxDQUFDLFNBQUNDO1FBQ3JDLElBQU1DLGtCQUFrQkMsSUFBQUEsZ0JBQWEsRUFBQ0YsYUFBYUosVUFBVUM7UUFFN0QsSUFBSUksaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9