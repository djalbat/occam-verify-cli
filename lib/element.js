"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
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
var Element = /*#__PURE__*/ function() {
    function Element(context, string, node) {
        _class_call_check(this, Element);
        this.context = context;
        this.string = string;
        this.node = node;
    }
    _create_class(Element, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
            key: "setContext",
            value: function setContext(context) {
                this.context = context;
            }
        },
        {
            key: "setString",
            value: function setString(string) {
                this.string = string;
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.node = node;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                return this.node.match(node);
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(element) {
                var elementNode = element.getNode(), matches = this.node.match(elementNode), equalTo = matches; ///
                return equalTo;
            }
        }
    ]);
    return Element;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldENvbnRleHQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChub2RlKTsgfVxuXG4gIGlzRXF1YWxUbyhlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudE5vZGUgPSBlbGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKGVsZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsInNldENvbnRleHQiLCJzZXRTdHJpbmciLCJzZXROb2RlIiwibWF0Y2hOb2RlIiwibWF0Y2giLCJpc0VxdWFsVG8iLCJlbGVtZW50IiwiZWxlbWVudE5vZGUiLCJtYXRjaGVzIiwiZXF1YWxUbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEZEg7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFKS0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV04sT0FBTztnQkFDaEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO1lBQ2pCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFOLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVAsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDUSxLQUFLLENBQUNSO1lBQU87OztZQUVoRFMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUMsY0FBY0QsUUFBUVAsT0FBTyxJQUM3QlMsVUFBVSxJQUFJLENBQUNaLElBQUksQ0FBQ1EsS0FBSyxDQUFDRyxjQUMxQkUsVUFBVUQsU0FBVSxHQUFHO2dCQUU3QixPQUFPQztZQUNUOzs7V0F2Q21CaEIifQ==