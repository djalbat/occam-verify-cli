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
            value: function assign(localContext) {
                var frameAssertionAdded = localContext.addFrameAssertion(this.frameAssertion), frameAssertionNode = this.frameAssertion.getNode(), frameAssertionString = localContext.nodeAsString(frameAssertionNode), frameAssertionAssigned = frameAssertionAdded; ///
                frameAssertionAssigned ? localContext.trace("Assigned the '".concat(frameAssertionString, "' frame assertion."), frameAssertionNode) : localContext.debug("Unable to assign the '".concat(frameAssertionString, "' frame assertion."), frameAssertionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2ZyYW1lQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZUFzc2VydGlvbkFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihmcmFtZUFzc2VydGlvbikge1xuICAgIHRoaXMuZnJhbWVBc3NlcnRpb24gPSBmcmFtZUFzc2VydGlvbjtcbiAgfVxuXG4gIGdldEZyYW1lQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXNzaWduKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lQXNzZXJ0aW9uQWRkZWQgPSBsb2NhbENvbnRleHQuYWRkRnJhbWVBc3NlcnRpb24odGhpcy5mcmFtZUFzc2VydGlvbiksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25Ob2RlID0gdGhpcy5mcmFtZUFzc2VydGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKGZyYW1lQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25Bc3NpZ25lZCA9IGZyYW1lQXNzZXJ0aW9uQWRkZWQ7IC8vL1xuXG4gICAgZnJhbWVBc3NlcnRpb25Bc3NpZ25lZCA/XG4gICAgICBsb2NhbENvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHtmcmFtZUFzc2VydGlvblN0cmluZ30nIGZyYW1lIGFzc2VydGlvbi5gLCBmcmFtZUFzc2VydGlvbk5vZGUpIDpcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtmcmFtZUFzc2VydGlvblN0cmluZ30nIGZyYW1lIGFzc2VydGlvbi5gLCBmcmFtZUFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lQXNzZXJ0aW9uQXNzaWduZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQXNzZXJ0aW9uKGZyYW1lQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgZnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50ID0gbmV3IEZyYW1lQXNzZXJ0aW9uQXNzaWdubWVudChmcmFtZUFzc2VydGlvbik7XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50IiwiZnJhbWVBc3NlcnRpb24iLCJnZXRGcmFtZUFzc2VydGlvbiIsImFzc2lnbiIsImxvY2FsQ29udGV4dCIsImZyYW1lQXNzZXJ0aW9uQWRkZWQiLCJhZGRGcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJmcmFtZUFzc2VydGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyIsImZyYW1lQXNzZXJ0aW9uQXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUZyYW1lQXNzZXJ0aW9uIiwiZnJhbWVBc3NlcnRpb25Bc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHlDQUFELEFBQUw7YUFBTUEseUJBQ1BDLGNBQWM7Z0NBRFBEO1FBRWpCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7a0JBRkxEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxjQUFjO1lBQzVCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQU1DLHNCQUFzQkQsYUFBYUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDTCxjQUFjLEdBQ3hFTSxxQkFBcUIsSUFBSSxDQUFDTixjQUFjLENBQUNPLE9BQU8sSUFDaERDLHVCQUF1QkwsYUFBYU0sWUFBWSxDQUFDSCxxQkFDakRJLHlCQUF5Qk4scUJBQXFCLEdBQUc7Z0JBRXZETSx5QkFDRVAsYUFBYVEsS0FBSyxDQUFDLEFBQUMsaUJBQXFDLE9BQXJCSCxzQkFBcUIsdUJBQXFCRixzQkFDNUVILGFBQWFTLEtBQUssQ0FBQyxBQUFDLHlCQUE2QyxPQUFyQkosc0JBQXFCLHVCQUFxQkY7Z0JBRTFGLE9BQU9JO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CYixjQUFjO2dCQUN0QyxJQUFNYywyQkFBMkIsSUF2QmhCZix5QkF1QjZDQztnQkFFOUQsT0FBT2M7WUFDVDs7O1dBMUJtQmYifQ==