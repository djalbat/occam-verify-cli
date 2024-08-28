"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameAssertionAssignment;
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
var FrameAssertionAssignment = /*#__PURE__*/ function() {
    function FrameAssertionAssignment(frameAssertion) {
        _class_call_check(this, FrameAssertionAssignment);
        this.frameAssertion = frameAssertion;
    }
    _create_class(FrameAssertionAssignment, [
        {
            key: "getFrameAssertion",
            value: function getFrameAssertion() {
                return this.frameAssertion;
            }
        },
        {
            key: "assign",
            value: function assign(localMetaContext) {
                var frameAssertionAdded = localMetaContext.addFrameAssertion(this.frameAssertion), frameAssertionNode = this.frameAssertion.getNode(), frameAssertionString = localMetaContext.nodeAsString(frameAssertionNode), frameAssertionAssigned = frameAssertionAdded; ///
                frameAssertionAssigned ? localMetaContext.trace("Assigned the '".concat(frameAssertionString, "' frame assertion."), frameAssertionNode) : localMetaContext.debug("Unable to assign the '".concat(frameAssertionString, "' frame assertion."), frameAssertionNode);
                return frameAssertionAssigned;
            }
        }
    ], [
        {
            key: "fromFrameAssertion",
            value: function fromFrameAssertion(frameAssertion) {
                var frameAssertionAssignment = new FrameAssertionAssignment(frameAssertion);
                return frameAssertionAssignment;
            }
        }
    ]);
    return FrameAssertionAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2ZyYW1lQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUFzc2VydGlvbkFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihmcmFtZUFzc2VydGlvbikge1xuICAgIHRoaXMuZnJhbWVBc3NlcnRpb24gPSBmcmFtZUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBmcmFtZUFzc2VydGlvbkFkZGVkID0gbG9jYWxNZXRhQ29udGV4dC5hZGRGcmFtZUFzc2VydGlvbih0aGlzLmZyYW1lQXNzZXJ0aW9uKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbk5vZGUgPSB0aGlzLmZyYW1lQXNzZXJ0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvblN0cmluZyA9IGxvY2FsTWV0YUNvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25Bc3NpZ25lZCA9IGZyYW1lQXNzZXJ0aW9uQWRkZWQ7IC8vL1xuXG4gICAgZnJhbWVBc3NlcnRpb25Bc3NpZ25lZCA/XG4gICAgICBsb2NhbE1ldGFDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7ZnJhbWVBc3NlcnRpb25TdHJpbmd9JyBmcmFtZSBhc3NlcnRpb24uYCwgZnJhbWVBc3NlcnRpb25Ob2RlKSA6XG4gICAgICAgIGxvY2FsTWV0YUNvbnRleHQuZGVidWcoYFVuYWJsZSB0byBhc3NpZ24gdGhlICcke2ZyYW1lQXNzZXJ0aW9uU3RyaW5nfScgZnJhbWUgYXNzZXJ0aW9uLmAsIGZyYW1lQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25Bc3NpZ25lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRnJhbWVBc3NlcnRpb24oZnJhbWVBc3NlcnRpb24pIHtcbiAgICBjb25zdCBmcmFtZUFzc2VydGlvbkFzc2lnbm1lbnQgPSBuZXcgRnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50KGZyYW1lQXNzZXJ0aW9uKTtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvbkFzc2lnbm1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUFzc2VydGlvbkFzc2lnbm1lbnQiLCJmcmFtZUFzc2VydGlvbiIsImdldEZyYW1lQXNzZXJ0aW9uIiwiYXNzaWduIiwibG9jYWxNZXRhQ29udGV4dCIsImZyYW1lQXNzZXJ0aW9uQWRkZWQiLCJhZGRGcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsImZyYW1lQXNzZXJ0aW9uQXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUZyYW1lQXNzZXJ0aW9uIiwiZnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHlDQUFELEFBQUw7YUFBTUEseUJBQ1BDLGNBQWM7Z0NBRFBEO1FBRWpCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7a0JBRkxEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxjQUFjO1lBQzVCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGdCQUFnQjtnQkFDckIsSUFBTUMsc0JBQXNCRCxpQkFBaUJFLGlCQUFpQixDQUFDLElBQUksQ0FBQ0wsY0FBYyxHQUM1RU0scUJBQXFCLElBQUksQ0FBQ04sY0FBYyxDQUFDTyxPQUFPLElBQ2hEQyx1QkFBdUJMLGlCQUFpQk0sWUFBWSxDQUFDSCxxQkFDckRJLHlCQUF5Qk4scUJBQXFCLEdBQUc7Z0JBRXZETSx5QkFDRVAsaUJBQWlCUSxLQUFLLENBQUMsQUFBQyxpQkFBcUMsT0FBckJILHNCQUFxQix1QkFBcUJGLHNCQUNoRkgsaUJBQWlCUyxLQUFLLENBQUMsQUFBQyx5QkFBNkMsT0FBckJKLHNCQUFxQix1QkFBcUJGO2dCQUU5RixPQUFPSTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQmIsY0FBYztnQkFDdEMsSUFBTWMsMkJBQTJCLElBdkJoQmYseUJBdUI2Q0M7Z0JBRTlELE9BQU9jO1lBQ1Q7OztXQTFCbUJmIn0=