"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Combinator;
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
var Combinator = /*#__PURE__*/ function() {
    function Combinator(statement) {
        _class_call_check(this, Combinator);
        this.statement = statement;
    }
    _create_class(Combinator, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.statement.string;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext), verified = statementVerifiedAsCombinator; ///
                return verified;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement) {
                var combinator = new Combinator(statement);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy5zdGF0ZW1lbnQuc3RyaW5nOyB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3IgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnlBc0NvbWJpbmF0b3IoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkID0gc3RhdGVtZW50VmVyaWZpZWRBc0NvbWJpbmF0b3I7IC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsInN0YXRlbWVudFZlcmlmaWVkQXNDb21iaW5hdG9yIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwidmVyaWZpZWQiLCJmcm9tU3RhdGVtZW50IiwiY29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxTQUFTO2dDQURGRDtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUZBRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDRyxNQUFNO1lBQUU7OztZQUU1Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQU1DLGdDQUFnQyxJQUFJLENBQUNOLFNBQVMsQ0FBQ08sa0JBQWtCLENBQUNGLGNBQ2xFRyxXQUFXRiwrQkFBK0IsR0FBRztnQkFFbkQsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjVCxTQUFTO2dCQUM1QixJQUFNVSxhQUFhLElBbkJGWCxXQW1CaUJDO2dCQUVsQyxPQUFPVTtZQUNUOzs7V0F0Qm1CWCJ9