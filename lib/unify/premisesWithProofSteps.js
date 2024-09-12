"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyPremisesWithProofSteps;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _premiseWithProofStep = /*#__PURE__*/ _interop_require_default(require("../unify/premiseWithProofStep"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyPremisesWithProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB) {
    premisesA = (0, _array.reverse)(premisesA); ///
    proofStepsB = (0, _array.reverse)(proofStepsB); ///
    var premisesUnified = (0, _array.correlate)(premisesA, proofStepsB, function(premiseA, proofStepB) {
        var localContextA = _local.default.fromFileContext(fileContextA), premiseUnified = (0, _premiseWithProofStep.default)(premiseA, proofStepB, substitutions, localContextA, localContextB);
        if (premiseUnified) {
            return true;
        }
    });
    return premisesUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9wcmVtaXNlc1dpdGhQcm9vZlN0ZXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlV2l0aFByb29mU3RlcCBmcm9tIFwiLi4vdW5pZnkvcHJlbWlzZVdpdGhQcm9vZlN0ZXBcIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMocHJlbWlzZXNBLCBwcm9vZlN0ZXBzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIHByZW1pc2VzQSA9IHJldmVyc2UocHJlbWlzZXNBKTsgLy8vXG5cbiAgcHJvb2ZTdGVwc0IgPSByZXZlcnNlKHByb29mU3RlcHNCKTsgLy8vXG5cbiAgY29uc3QgcHJlbWlzZXNVbmlmaWVkID0gY29ycmVsYXRlKHByZW1pc2VzQSwgcHJvb2ZTdGVwc0IsIChwcmVtaXNlQSwgcHJvb2ZTdGVwQikgPT4ge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgcHJlbWlzZVVuaWZpZWQgPSB1bmlmeVByZW1pc2VXaXRoUHJvb2ZTdGVwKHByZW1pc2VBLCBwcm9vZlN0ZXBCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChwcmVtaXNlVW5pZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyIsInByZW1pc2VzQSIsInByb29mU3RlcHNCIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJyZXZlcnNlIiwicHJlbWlzZXNVbmlmaWVkIiwiY29ycmVsYXRlIiwicHJlbWlzZUEiLCJwcm9vZlN0ZXBCIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInByZW1pc2VVbmlmaWVkIiwidW5pZnlQcmVtaXNlV2l0aFByb29mU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozs0REFMQzsyRUFDYTtxQkFFSDs7Ozs7O0FBRXBCLFNBQVNBLDRCQUE0QkMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhO0lBQ3BISixZQUFZSyxJQUFBQSxjQUFPLEVBQUNMLFlBQVksR0FBRztJQUVuQ0MsY0FBY0ksSUFBQUEsY0FBTyxFQUFDSixjQUFjLEdBQUc7SUFFdkMsSUFBTUssa0JBQWtCQyxJQUFBQSxnQkFBUyxFQUFDUCxXQUFXQyxhQUFhLFNBQUNPLFVBQVVDO1FBQ25FLElBQU1DLGdCQUFnQkMsY0FBWSxDQUFDQyxlQUFlLENBQUNULGVBQzdDVSxpQkFBaUJDLElBQUFBLDZCQUF5QixFQUFDTixVQUFVQyxZQUFZUCxlQUFlUSxlQUFlTjtRQUVyRyxJQUFJUyxnQkFBZ0I7WUFDbEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUIn0=