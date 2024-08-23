"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyLabels;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("../verify/label"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelsMetavariableNodesQuery = (0, _query.nodesQuery)("/labels/metavariable");
function verifyLabels(labelsNode, labels, fileContext) {
    var labelsVerified;
    if (labelsNode === null) {
        labelsVerified = true;
    } else {
        var labelsMetavariableNodes = labelsMetavariableNodesQuery(labelsNode);
        labelsVerified = labelsMetavariableNodes.every(function(labelsMetavariableNode) {
            var labelVerified = (0, _label.default)(labelsMetavariableNode, labels, fileContext);
            if (labelVerified) {
                return true;
            }
        });
    }
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5TGFiZWwgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbHNNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sYWJlbHMvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxzTm9kZSwgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxzVmVyaWZpZWQ7XG5cbiAgaWYgKGxhYmVsc05vZGUgPT09IG51bGwpIHtcbiAgICBsYWJlbHNWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWxzTWV0YXZhcmlhYmxlTm9kZXMgPSBsYWJlbHNNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGxhYmVsc05vZGUpO1xuXG4gICAgbGFiZWxzVmVyaWZpZWQgPSBsYWJlbHNNZXRhdmFyaWFibGVOb2Rlcy5ldmVyeSgobGFiZWxzTWV0YXZhcmlhYmxlTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllZCA9IHZlcmlmeUxhYmVsKGxhYmVsc01ldGF2YXJpYWJsZU5vZGUsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbHNWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImxhYmVsc05vZGUiLCJsYWJlbHMiLCJmaWxlQ29udGV4dCIsImxhYmVsc1ZlcmlmaWVkIiwibGFiZWxzTWV0YXZhcmlhYmxlTm9kZXMiLCJldmVyeSIsImxhYmVsc01ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFZlcmlmaWVkIiwidmVyaWZ5TGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7NERBTkE7cUJBRUc7Ozs7OztBQUUzQixJQUFNQywrQkFBK0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFakMsU0FBU0YsYUFBYUcsVUFBVSxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7SUFDbEUsSUFBSUM7SUFFSixJQUFJSCxlQUFlLE1BQU07UUFDdkJHLGlCQUFpQjtJQUNuQixPQUFPO1FBQ0wsSUFBTUMsMEJBQTBCTiw2QkFBNkJFO1FBRTdERyxpQkFBaUJDLHdCQUF3QkMsS0FBSyxDQUFDLFNBQUNDO1lBQzlDLElBQU1DLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRix3QkFBd0JMLFFBQVFDO1lBRWxFLElBQUlLLGVBQWU7Z0JBQ2pCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=