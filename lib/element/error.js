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
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Error";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEVycm9yTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC53YXJuaW5nKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVycm9yIiwiRWxlbWVudCIsImdldEVycm9yTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiZXJyb3JOb2RlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJnZXRTdHJpbmciLCJ3YXJuaW5nIiwidG9KU09OIiwic3RyaW5nIiwibGluZUluZGV4IiwiZ2V0TGluZUluZGV4IiwianNvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dDQUp3QjswQkFFRDtNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLHVCQUFPO0lBQy9DQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUEsTUFBTUMsT0FBT0MsT0FBTyxFQUFFO1FBQ3BCLElBQUlDLFdBQVc7UUFFZixNQUFNQyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMUNILFFBQVFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRUYsWUFBWSwyQkFBMkIsQ0FBQztRQUVoRSxPQUFPRDtJQUNUO0lBRUFJLFNBQVM7UUFDUCxNQUFNQyxTQUFTLElBQUksQ0FBQ0gsU0FBUyxJQUN2QkksWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLE9BQU87WUFDTEg7WUFDQUM7UUFDRjtRQUVOLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLFFBQVE7QUFDeEIifQ==