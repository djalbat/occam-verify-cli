"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Statement;
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
var Statement = /*#__PURE__*/ function() {
    function Statement(string, node) {
        _class_call_check(this, Statement);
        this.string = string;
        this.node = node;
    }
    _create_class(Statement, [
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
            key: "verifyAsCombinator",
            value: function verifyAsCombinator(fileContext) {
                debugger;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(fileContext) {
                var string = this.string, json = {
                    string: string
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                debugger;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, fileContext) {
                var node = statementNode, string = fileContext.nodeAsString(node), statement = new Statement(string, node);
                return statement;
            }
        }
    ]);
    return Statement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdmVyaWZ5QXNDb21iaW5hdG9yKGZpbGVDb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHRvSlNPTihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50ID0gbmV3IFN0YXRlbWVudChzdHJpbmcsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsInN0cmluZyIsIm5vZGUiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwidmVyaWZ5QXNDb21iaW5hdG9yIiwiZmlsZUNvbnRleHQiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsTUFBTSxFQUFFQyxJQUFJO2dDQURMRjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFdBQVc7Z0JBQzVCLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPRCxXQUFXO2dCQUNoQixJQUFNTCxTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQk8sT0FBTztvQkFDTFAsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVGLFdBQVc7Z0JBQy9CLFFBQVE7WUFDVjs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFTCxXQUFXO2dCQUNqRCxJQUFNSixPQUFPUyxlQUNQVixTQUFTSyxZQUFZTSxZQUFZLENBQUNWLE9BQ2xDVyxZQUFZLElBbENEYixVQWtDZUMsUUFBUUM7Z0JBRXhDLE9BQU9XO1lBQ1Q7OztXQXJDbUJiIn0=