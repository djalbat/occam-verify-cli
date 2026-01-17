"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "withinFragment", {
    enumerable: true,
    get: function() {
        return withinFragment;
    }
});
var _fragment = /*#__PURE__*/ _interop_require_default(require("../context/fragment"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function withinFragment(innerFunction, context) {
    var fragmentContext = _fragment.default.fromNothing(context);
    context = fragmentContext; ///
    return innerFunction(context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZnJhZ21lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGcmFnbWVudENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvZnJhZ21lbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbkZyYWdtZW50KGlubmVyRnVuY3Rpb24sIGNvbnRleHQpIHtcbiAgY29uc3QgZnJhZ21lbnRDb250ZXh0ID0gRnJhZ21lbnRDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBmcmFnbWVudENvbnRleHQ7ICAvLy9cblxuICByZXR1cm4gaW5uZXJGdW5jdGlvbihjb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJ3aXRoaW5GcmFnbWVudCIsImlubmVyRnVuY3Rpb24iLCJjb250ZXh0IiwiZnJhZ21lbnRDb250ZXh0IiwiRnJhZ21lbnRDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7OytEQUZZOzs7Ozs7QUFFckIsU0FBU0EsZUFBZUMsYUFBYSxFQUFFQyxPQUFPO0lBQ25ELElBQU1DLGtCQUFrQkMsaUJBQWUsQ0FBQ0MsV0FBVyxDQUFDSDtJQUVwREEsVUFBVUMsaUJBQWtCLEdBQUc7SUFFL0IsT0FBT0YsY0FBY0M7QUFDdkIifQ==