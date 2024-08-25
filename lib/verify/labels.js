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
        var labelsMetavariableNodes = labelsMetavariableNodesQuery(labelsNode), metavariableNodes = labelsMetavariableNodes; ///
        labelsVerified = metavariableNodes.every(function(metavariableNode) {
            var labelVerified = (0, _label.default)(metavariableNode, labels, fileContext);
            if (labelVerified) {
                return true;
            }
        });
    }
    return labelsVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGFiZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdmVyaWZ5TGFiZWwgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbHNNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sYWJlbHMvbWV0YXZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMYWJlbHMobGFiZWxzTm9kZSwgbGFiZWxzLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGFiZWxzVmVyaWZpZWQ7XG5cbiAgaWYgKGxhYmVsc05vZGUgPT09IG51bGwpIHtcbiAgICBsYWJlbHNWZXJpZmllZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGFiZWxzTWV0YXZhcmlhYmxlTm9kZXMgPSBsYWJlbHNNZXRhdmFyaWFibGVOb2Rlc1F1ZXJ5KGxhYmVsc05vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVzID0gbGFiZWxzTWV0YXZhcmlhYmxlTm9kZXM7ICAvLy9cblxuICAgIGxhYmVsc1ZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZXMuZXZlcnkoKG1ldGF2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbChtZXRhdmFyaWFibGVOb2RlLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGFiZWxzIiwibGFiZWxzTWV0YXZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJsYWJlbHNOb2RlIiwibGFiZWxzIiwiZmlsZUNvbnRleHQiLCJsYWJlbHNWZXJpZmllZCIsImxhYmVsc01ldGF2YXJpYWJsZU5vZGVzIiwibWV0YXZhcmlhYmxlTm9kZXMiLCJldmVyeSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFZlcmlmaWVkIiwidmVyaWZ5TGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7NERBTkE7cUJBRUc7Ozs7OztBQUUzQixJQUFNQywrQkFBK0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFakMsU0FBU0YsYUFBYUcsVUFBVSxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7SUFDbEUsSUFBSUM7SUFFSixJQUFJSCxlQUFlLE1BQU07UUFDdkJHLGlCQUFpQjtJQUNuQixPQUFPO1FBQ0wsSUFBTUMsMEJBQTBCTiw2QkFBNkJFLGFBQ3ZESyxvQkFBb0JELHlCQUEwQixHQUFHO1FBRXZERCxpQkFBaUJFLGtCQUFrQkMsS0FBSyxDQUFDLFNBQUNDO1lBQ3hDLElBQU1DLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDRixrQkFBa0JOLFFBQVFDO1lBRTVELElBQUlNLGVBQWU7Z0JBQ2pCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUIn0=