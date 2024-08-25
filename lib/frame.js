"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Frame;
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
var Frame = /*#__PURE__*/ function() {
    function Frame(node, declarations) {
        _class_call_check(this, Frame);
        this.node = node;
        this.declarations = declarations;
    }
    _create_class(Frame, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "addDeclarations",
            value: function addDeclarations(declarations) {
                push(this.declarations, declarations);
            }
        },
        {
            key: "fromFrameNodeAndDeclarations",
            value: function fromFrameNodeAndDeclarations(frameNode, declarations) {
                var node = frameNode, frame = new Frame(node, declarations);
                return frame;
            }
        }
    ]);
    return Frame;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFkZERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBwdXNoKHRoaXMuZGVjbGFyYXRpb25zLCBkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgZnJvbUZyYW1lTm9kZUFuZERlY2xhcmF0aW9ucyhmcmFtZU5vZGUsIGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IG5vZGUgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lID0gbmV3IEZyYW1lKG5vZGUsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0iXSwibmFtZXMiOlsiRnJhbWUiLCJub2RlIiwiZGVjbGFyYXRpb25zIiwiZ2V0Tm9kZSIsImdldERlY2xhcmF0aW9ucyIsImFkZERlY2xhcmF0aW9ucyIsInB1c2giLCJmcm9tRnJhbWVOb2RlQW5kRGVjbGFyYXRpb25zIiwiZnJhbWVOb2RlIiwiZnJhbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQUQsQUFBTDthQUFNQSxNQUNQQyxJQUFJLEVBQUVDLFlBQVk7Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSEhGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsWUFBWTtnQkFDMUJJLEtBQUssSUFBSSxDQUFDSixZQUFZLEVBQUVBO1lBQzFCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QkMsU0FBUyxFQUFFTixZQUFZO2dCQUNsRCxJQUFNRCxPQUFPTyxXQUNQQyxRQUFRLElBcEJHVCxNQW9CT0MsTUFBTUM7Z0JBRTlCLE9BQU9PO1lBQ1Q7OztXQXZCbUJUIn0=