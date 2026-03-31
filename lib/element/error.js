"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _default = (0, _elements.define)(class Error extends _occamlanguages.Element {
    getErrorNode() {
        const node = this.getNode(), errorNode = node; ///
        return errorNode;
    }
    async verify(context) {
        let verifies = false;
        const errorString = this.getString(); ///
        context.warning(`The '${errorString}' error cannot be verified.`);
        return verifies;
    }
    static name = "Error";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEVycm9yTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC53YXJuaW5nKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVycm9yIiwiRWxlbWVudCIsImdldEVycm9yTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZXJyb3JOb2RlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJnZXRTdHJpbmciLCJ3YXJuaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0NBSndCOzBCQUVEO01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0NDLGVBQWU7UUFDYixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsWUFBWUYsTUFBTSxHQUFHO1FBRTNCLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPQyxPQUFPLEVBQUU7UUFDcEIsSUFBSUMsV0FBVztRQUVmLE1BQU1DLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxQ0gsUUFBUUksT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFRixZQUFZLDJCQUEyQixDQUFDO1FBRWhFLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPSSxPQUFPLFFBQVE7QUFDeEIifQ==