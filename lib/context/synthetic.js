"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SyntheticContext;
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
var SyntheticContext = /*#__PURE__*/ function() {
    function SyntheticContext(context, generalContext, specificContext) {
        _class_call_check(this, SyntheticContext);
        this.context = context;
        this.generalContext = generalContext;
        this.specificContext = specificContext;
        return (0, _context.chainContext)(this);
    }
    _create_class(SyntheticContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getGeneralContext",
            value: function getGeneralContext() {
                return this.generalContext;
            }
        },
        {
            key: "getSpecificContext",
            value: function getSpecificContext() {
                return this.specificContext;
            }
        },
        {
            key: "findTermByTermNode",
            value: function findTermByTermNode(termNode) {
                return this.specificContext.findTermByTermNode(termNode) || this.generalContext.findTermByTermNode(termNode);
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                return this.specificContext.findFrameByFrameNode(frameNode) || this.generalContext.findFrameByFrameNode(frameNode);
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                return this.specificContext.findTypeByNominalTypeName(nominalTypeName) || this.generalContext.findTypeByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                return this.specificContext.findVariableByVariableIdentifier(variableIdentifier) || this.generalContext.findVariableByVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.specificContext.findMetavariableByMetavariableName(metavariableName) || this.generalContext.findMetavariableByMetavariableName(metavariableName);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(generalContext, specificContext) {
                var context = specificContext, syntheticContext = new SyntheticContext(context, generalContext, specificContext);
                return syntheticContext;
            }
        }
    ]);
    return SyntheticContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gICAgdGhpcy5zcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0R2VuZXJhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRTcGVjaWZpY0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHx8IHRoaXMuZ2VuZXJhbENvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTsgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkgeyByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB8fCB0aGlzLmdlbmVyYWxDb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7IH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHx8IHRoaXMuZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHx8IHRoaXMuZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5zcGVjaWZpY0NvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB8fCB0aGlzLmdlbmVyYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzeW50aGV0aWNDb250ZXh0ID0gbmV3IFN5bnRoZXRpY0NvbnRleHQoY29udGV4dCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJjb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJjaGFpbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmcm9tTm90aGluZyIsInN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsaUNBQU47YUFBTUEsaUJBQ1BDLE9BQU8sRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQURqQ0g7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUV2QixPQUFPQyxJQUFBQSxxQkFBWSxFQUFDLElBQUk7O2tCQU5QSjs7WUFTbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNOLGVBQWUsQ0FBQ0ssa0JBQWtCLENBQUNDLGFBQWEsSUFBSSxDQUFDUCxjQUFjLENBQUNNLGtCQUFrQixDQUFDQztZQUFXOzs7WUFFN0lDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNSLGVBQWUsQ0FBQ08sb0JBQW9CLENBQUNDLGNBQWMsSUFBSSxDQUFDVCxjQUFjLENBQUNRLG9CQUFvQixDQUFDQztZQUFZOzs7WUFFdEpDLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLGVBQWU7Z0JBQUksT0FBTyxJQUFJLENBQUNWLGVBQWUsQ0FBQ1MseUJBQXlCLENBQUNDLG9CQUFvQixJQUFJLENBQUNYLGNBQWMsQ0FBQ1UseUJBQXlCLENBQUNDO1lBQWtCOzs7WUFFdkxDLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNDLGtCQUFrQjtnQkFBSSxPQUFPLElBQUksQ0FBQ1osZUFBZSxDQUFDVyxnQ0FBZ0MsQ0FBQ0MsdUJBQXVCLElBQUksQ0FBQ2IsY0FBYyxDQUFDWSxnQ0FBZ0MsQ0FBQ0M7WUFBcUI7OztZQUVyTkMsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0MsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDZCxlQUFlLENBQUNhLGtDQUFrQyxDQUFDQyxxQkFBcUIsSUFBSSxDQUFDZixjQUFjLENBQUNjLGtDQUFrQyxDQUFDQztZQUFtQjs7OztZQUU5TUMsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWWhCLGNBQWMsRUFBRUMsZUFBZTtnQkFDaEQsSUFBTUYsVUFBVUUsaUJBQ1ZnQixtQkFBbUIsSUFqQ1JuQixpQkFpQzZCQyxTQUFTQyxnQkFBZ0JDO2dCQUV2RSxPQUFPZ0I7WUFDVDs7O1dBcENtQm5CIn0=