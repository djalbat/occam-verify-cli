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
var _string = require("./utilities/string");
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
    function Combinator(statementNode, string) {
        _class_call_check(this, Combinator);
        this.statementNode = statementNode;
        this.string = string;
    }
    _create_class(Combinator, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        }
    ], [
        {
            key: "fromStatementNodeAndTokens",
            value: function fromStatementNodeAndTokens(statementNode, tokens) {
                var string = stringFromStatementNodeAndTokens(statementNode, tokens), combinator = new Combinator(statementNode, string);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();
function stringFromStatementNodeAndTokens(statementNode, tokens) {
    var statementString = (0, _string.nodeAsString)(statementNode, tokens), string = statementString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlLCBzdHJpbmcpIHtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE5vZGVBbmRUb2tlbnMoc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJzdHJpbmciLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJ0b2tlbnMiLCJzdHJpbmdGcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NCQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsYUFBYSxFQUFFQyxNQUFNO2dDQURkRjtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCSixhQUFhLEVBQUVLLE1BQU07Z0JBQ3JELElBQU1KLFNBQVNLLGlDQUFpQ04sZUFBZUssU0FDekRFLGFBQWEsSUFoQkZSLFdBZ0JpQkMsZUFBZUM7Z0JBRWpELE9BQU9NO1lBQ1Q7OztXQW5CbUJSOztBQXNCckIsU0FBU08saUNBQWlDTixhQUFhLEVBQUVLLE1BQU07SUFDN0QsSUFBTUcsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDVCxlQUFlSyxTQUM5Q0osU0FBU08saUJBQWlCLEdBQUc7SUFFbkMsT0FBT1A7QUFDVCJ9