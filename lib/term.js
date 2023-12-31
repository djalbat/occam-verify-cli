"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Term;
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
var Term = /*#__PURE__*/ function() {
    function Term(node, type) {
        _class_call_check(this, Term);
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        }
    ], [
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var node = termNode, term = new Term(node, type);
                return term;
            }
        }
    ]);
    return Term;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0obm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm0iLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJ0ZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsSUFBSTtnQ0FESEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSTtnQkFDUixJQUFNTCxPQUFPSyxLQUFLSCxPQUFPLElBQ25CSSxVQUFVLElBQUksQ0FBQ04sSUFBSSxDQUFDSSxLQUFLLENBQUNKO2dCQUVoQyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsUUFBUSxFQUFFUCxJQUFJO2dCQUN2QyxJQUFNRCxPQUFPUSxVQUNQSCxPQUFPLElBdkJJTixLQXVCS0MsTUFBTUM7Z0JBRTVCLE9BQU9JO1lBQ1Q7OztXQTFCbUJOIn0=