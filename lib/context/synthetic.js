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
var _occamfurtle = require("occam-furtle");
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
var chainContext = _occamfurtle.contextUtilities.chainContext;
var SyntheticContext = /*#__PURE__*/ function() {
    function SyntheticContext(context, generalContext, specificContext) {
        _class_call_check(this, SyntheticContext);
        this.context = context;
        this.generalContext = generalContext;
        this.specificContext = specificContext;
        return chainContext(this);
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
                return this.specificContext.findTermByTermNode(termNode);
            }
        },
        {
            key: "findFrameByFrameNode",
            value: function findFrameByFrameNode(frameNode) {
                return this.specificContext.findFrameByFrameNode(frameNode);
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                return this.specificContext.findTypeByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                return this.specificContext.isTypePresentByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                return this.generalContext.findVariableByVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.generalContext.findMetavariableByMetavariableName(metavariableName);
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                this.generalContext.isVariablePresentByVariableIdentifier(variableIdentifier);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                this.generalContext.isMetavariablePresentByMetavariableName(metavariableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gICAgdGhpcy5zcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0R2VuZXJhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRTcGVjaWZpY0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpOyB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHRoaXMuZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgdGhpcy5nZW5lcmFsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzeW50aGV0aWNDb250ZXh0ID0gbmV3IFN5bnRoZXRpY0NvbnRleHQoY29udGV4dCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3ludGhldGljQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN5bnRoZXRpY0NvbnRleHQiLCJjaGFpbkNvbnRleHQiLCJjb250ZXh0VXRpbGl0aWVzIiwiY29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIiwic3ludGhldGljQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsZUFBaUJDLDZCQUFnQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2FBQU1BLGlCQUNQRyxPQUFPLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQ0FEakNMO1FBRWpCLElBQUksQ0FBQ0csT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFFdkIsT0FBT0osYUFBYSxJQUFJOztrQkFOUEQ7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGNBQWM7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGVBQWU7WUFDN0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDTCxlQUFlLENBQUNJLGtCQUFrQixDQUFDQztZQUFXOzs7WUFFekZDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUNQLGVBQWUsQ0FBQ00sb0JBQW9CLENBQUNDO1lBQVk7OztZQUUvRkMsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsZUFBZTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsZUFBZSxDQUFDUSx5QkFBeUIsQ0FBQ0M7WUFBa0I7OztZQUVySEMsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkQsZUFBZTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsZUFBZSxDQUFDVSw4QkFBOEIsQ0FBQ0Q7WUFBa0I7OztZQUUvSEUsS0FBQUE7bUJBQUFBLFNBQUFBLGlDQUFpQ0Msa0JBQWtCO2dCQUFJLE9BQU8sSUFBSSxDQUFDYixjQUFjLENBQUNZLGdDQUFnQyxDQUFDQztZQUFxQjs7O1lBRXhJQyxLQUFBQTttQkFBQUEsU0FBQUEsbUNBQW1DQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNmLGNBQWMsQ0FBQ2Msa0NBQWtDLENBQUNDO1lBQW1COzs7WUFFeElDLEtBQUFBO21CQUFBQSxTQUFBQSxzQ0FBc0NILGtCQUFrQjtnQkFBSSxJQUFJLENBQUNiLGNBQWMsQ0FBQ2dCLHFDQUFxQyxDQUFDSDtZQUFxQjs7O1lBRTNJSSxLQUFBQTttQkFBQUEsU0FBQUEsd0NBQXdDRixnQkFBZ0I7Z0JBQUksSUFBSSxDQUFDZixjQUFjLENBQUNpQix1Q0FBdUMsQ0FBQ0Y7WUFBbUI7Ozs7WUFFcElHLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlsQixjQUFjLEVBQUVDLGVBQWU7Z0JBQ2hELElBQU1GLFVBQVVFLGlCQUNWa0IsbUJBQW1CLElBdkNSdkIsaUJBdUM2QkcsU0FBU0MsZ0JBQWdCQztnQkFFdkUsT0FBT2tCO1lBQ1Q7OztXQTFDbUJ2QiJ9