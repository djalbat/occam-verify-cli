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
    async verify() {
        let verifies = false;
        const context = this.getContext(), errorString = this.getString(); ///
        context.warning(`The '${errorString}' error cannot be verified.`);
        return verifies;
    }
    static name = "Error";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEVycm9yTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVycm9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC53YXJuaW5nKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVycm9yIiwiRWxlbWVudCIsImdldEVycm9yTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZXJyb3JOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImVycm9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwid2FybmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUEsTUFBTUMsU0FBUztRQUNiLElBQUlDLFdBQVc7UUFFZixNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFDSCxRQUFRSSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUVGLFlBQVksMkJBQTJCLENBQUM7UUFFaEUsT0FBT0g7SUFDVDtJQUVBLE9BQU9NLE9BQU8sUUFBUTtBQUN4QiJ9