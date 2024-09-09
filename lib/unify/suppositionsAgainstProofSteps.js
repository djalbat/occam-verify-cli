"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifySuppositionsAgainstProofSteps;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _suppositionAgainstProofStep = /*#__PURE__*/ _interop_require_default(require("./suppositionAgainstProofStep"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifySuppositionsAgainstProofSteps(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB) {
    suppositionsA = (0, _array.reverse)(suppositionsA); ///
    proofStepsB = (0, _array.reverse)(proofStepsB); ///
    var suppositionsUnified = (0, _array.correlate)(suppositionsA, proofStepsB, function(suppositionA, proofStepB) {
        var localContextA = _local.default.fromFileContext(fileContextA), suppositionUnified = (0, _suppositionAgainstProofStep.default)(suppositionA, proofStepB, substitutions, localContextA, localContextB);
        if (suppositionUnified) {
            return true;
        }
    });
    return suppositionsUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IHVuaWZ5U3VwcG9zaXRpb25BZ2FpbnN0UHJvb2ZTdGVwIGZyb20gXCIuL3N1cHBvc2l0aW9uQWdhaW5zdFByb29mU3RlcFwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5U3VwcG9zaXRpb25zQWdhaW5zdFByb29mU3RlcHMoc3VwcG9zaXRpb25zQSwgcHJvb2ZTdGVwc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBzdXBwb3NpdGlvbnNBID0gcmV2ZXJzZShzdXBwb3NpdGlvbnNBKTsgLy8vXG5cbiAgcHJvb2ZTdGVwc0IgPSByZXZlcnNlKHByb29mU3RlcHNCKTsgLy8vXG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zVW5pZmllZCA9IGNvcnJlbGF0ZShzdXBwb3NpdGlvbnNBLCBwcm9vZlN0ZXBzQiwgKHN1cHBvc2l0aW9uQSwgcHJvb2ZTdGVwQikgPT4ge1xuICAgIGNvbnN0IGxvY2FsQ29udGV4dEEgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0QSksXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVkID0gdW5pZnlTdXBwb3NpdGlvbkFnYWluc3RQcm9vZlN0ZXAoc3VwcG9zaXRpb25BLCBwcm9vZlN0ZXBCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidW5pZnlTdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwcyIsInN1cHBvc2l0aW9uc0EiLCJwcm9vZlN0ZXBzQiIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwicmV2ZXJzZSIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJjb3JyZWxhdGUiLCJzdXBwb3NpdGlvbkEiLCJwcm9vZlN0ZXBCIiwibG9jYWxDb250ZXh0QSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllZCIsInVuaWZ5U3VwcG9zaXRpb25BZ2FpbnN0UHJvb2ZTdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7OzREQUxDO2tGQUNvQjtxQkFFVjs7Ozs7O0FBRXBCLFNBQVNBLG1DQUFtQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhO0lBQy9ISixnQkFBZ0JLLElBQUFBLGNBQU8sRUFBQ0wsZ0JBQWdCLEdBQUc7SUFFM0NDLGNBQWNJLElBQUFBLGNBQU8sRUFBQ0osY0FBYyxHQUFHO0lBRXZDLElBQU1LLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQ1AsZUFBZUMsYUFBYSxTQUFDTyxjQUFjQztRQUMvRSxJQUFNQyxnQkFBZ0JDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDVCxlQUM3Q1UscUJBQXFCQyxJQUFBQSxvQ0FBZ0MsRUFBQ04sY0FBY0MsWUFBWVAsZUFBZVEsZUFBZU47UUFFcEgsSUFBSVMsb0JBQW9CO1lBQ3RCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT1A7QUFDVCJ9