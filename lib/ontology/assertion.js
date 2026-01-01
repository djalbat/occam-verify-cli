"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Assertion = /*#__PURE__*/ function() {
    function Assertion(string, node) {
        _class_call_check(this, Assertion);
        this.string = string;
        this.node = node;
    }
    _create_class(Assertion, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "matchAssertionNode",
            value: function matchAssertionNode(assertionNode) {
                return this.node.match(assertionNode);
            }
        }
    ]);
    return Assertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgbWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChhc3NlcnRpb25Ob2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLE1BQU0sRUFBRUMsSUFBSTtnQ0FETEY7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhO2dCQUFJLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUNLLEtBQUssQ0FBQ0Q7WUFBZ0I7OztXQWR4RE4ifQ==