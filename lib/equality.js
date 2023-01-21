"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _query = require("./utilities/query");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/term[1]");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode, rightTermNode) {
        _classCallCheck(this, Equality);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _createClass(Equality, [
        {
            key: "getLdftTermNode",
            value: function getLdftTermNode() {
                return this.leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                return this.rightTermNode;
            }
        },
        {
            key: "assert",
            value: function assert(proofContext) {
                debugger;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZGZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgYXNzZXJ0KHByb29mQ29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExkZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJhc3NlcnQiLCJwcm9vZkNvbnRleHQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUJBTEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWSxFQUFFO2dCQUNuQixRQUFRO1lBQ1Y7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUU7Z0JBQ3RDLElBQU1QLGVBQWVILGtCQUFrQlUsZ0JBQ2pDTixnQkFBZ0JGLG1CQUFtQlEsZ0JBQ25DQyxXQUFXLElBckJBWixTQXFCYUksY0FBY0M7Z0JBRTVDLE9BQU9PO1lBQ1Q7OztXQXhCbUJaIn0=