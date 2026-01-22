"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JointContext;
    }
});
var _context = require("../utilities/context");
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
var JointContext = /*#__PURE__*/ function() {
    function JointContext(context, specificContext, proofAssertionContext) {
        _class_call_check(this, JointContext);
        this.context = context;
        this.specificContext = specificContext;
        this.proofAssertionContext = proofAssertionContext;
        return (0, _context.chainContext)(this);
    }
    _create_class(JointContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getSpecificContext",
            value: function getSpecificContext() {
                return this.specificContext;
            }
        },
        {
            key: "getProofAssertionContext",
            value: function getProofAssertionContext() {
                return this.proofAssertionContext;
            }
        },
        {
            key: "addSubsittution",
            value: function addSubsittution(substitution) {
                this;
                this.specificContext.addSubsittution(substitution);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(specificContext, proofAssertionContext) {
                var context = specificContext, jointContext = new JointContext(context, specificContext, proofAssertionContext);
                return jointContext;
            }
        }
    ]);
    return JointContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2pvaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFpbkNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9pbnRDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBwcm9vZkFzc2VydGlvbkNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0O1xuICAgIHRoaXMucHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0O1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFNwZWNpZmljQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQ7XG4gIH1cblxuICBnZXRQcm9vZkFzc2VydGlvbkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2ZBc3NlcnRpb25Db250ZXh0O1xuICB9XG5cbiAgYWRkU3Vic2l0dHV0aW9uKHN1YnN0aXR1dGlvbikgeyB0aGlzO3RoaXMuc3BlY2lmaWNDb250ZXh0LmFkZFN1YnNpdHR1dGlvbihzdWJzdGl0dXRpb24pOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKHNwZWNpZmljQ29udGV4dCwgcHJvb2ZBc3NlcnRpb25Db250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGpvaW50Q29udGV4dCA9IG5ldyBKb2ludENvbnRleHQoY29udGV4dCwgc3BlY2lmaWNDb250ZXh0LCBwcm9vZkFzc2VydGlvbkNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGpvaW50Q29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkpvaW50Q29udGV4dCIsImNvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJjaGFpbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZ2V0UHJvb2ZBc3NlcnRpb25Db250ZXh0IiwiYWRkU3Vic2l0dHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiZnJvbU5vdGhpbmciLCJqb2ludENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsT0FBTyxFQUFFQyxlQUFlLEVBQUVDLHFCQUFxQjtnQ0FEeENIO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtRQUU3QixPQUFPQyxJQUFBQSxxQkFBWSxFQUFDLElBQUk7O2tCQU5QSjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0oscUJBQXFCO1lBQ25DOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWTtnQkFBSSxJQUFJO2dCQUFDLElBQUksQ0FBQ1AsZUFBZSxDQUFDTSxlQUFlLENBQUNDO1lBQWU7Ozs7WUFFbEZDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlSLGVBQWUsRUFBRUMscUJBQXFCO2dCQUN2RCxJQUFNRixVQUFVQyxpQkFDVlMsZUFBZSxJQXpCSlgsYUF5QnFCQyxTQUFTQyxpQkFBaUJDO2dCQUVoRSxPQUFPUTtZQUNUOzs7V0E1Qm1CWCJ9