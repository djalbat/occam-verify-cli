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
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3N5bnRoZXRpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBjaGFpbkNvbnRleHQgfSA9IGNvbnRleHRVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bnRoZXRpY0NvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7XG4gICAgdGhpcy5zcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0R2VuZXJhbENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRTcGVjaWZpY0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpOyB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7IHJldHVybiB0aGlzLnNwZWNpZmljQ29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuc3BlY2lmaWNDb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHJldHVybiB0aGlzLmdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHRoaXMuZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgdGhpcy5nZW5lcmFsQ29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlQ29udGV4dCgpOyB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3ludGhldGljQ29udGV4dCA9IG5ldyBTeW50aGV0aWNDb250ZXh0KGNvbnRleHQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN5bnRoZXRpY0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTeW50aGV0aWNDb250ZXh0IiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRGaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJmcm9tTm90aGluZyIsInN5bnRoZXRpY0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNLEFBQUVDLGVBQWlCQyw2QkFBZ0IsQ0FBakNEO0FBRU8sSUFBQSxBQUFNRCxpQ0FBTjthQUFNQSxpQkFDUEcsT0FBTyxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRGpDTDtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBRXZCLE9BQU9KLGFBQWEsSUFBSTs7a0JBTlBEOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxjQUFjO1lBQzVCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ0wsZUFBZSxDQUFDSSxrQkFBa0IsQ0FBQ0M7WUFBVzs7O1lBRXpGQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxTQUFTO2dCQUFJLE9BQU8sSUFBSSxDQUFDUCxlQUFlLENBQUNNLG9CQUFvQixDQUFDQztZQUFZOzs7WUFFL0ZDLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLGVBQWU7Z0JBQUksT0FBTyxJQUFJLENBQUNULGVBQWUsQ0FBQ1EseUJBQXlCLENBQUNDO1lBQWtCOzs7WUFFckhDLEtBQUFBO21CQUFBQSxTQUFBQSwrQkFBK0JELGVBQWU7Z0JBQUksT0FBTyxJQUFJLENBQUNULGVBQWUsQ0FBQ1UsOEJBQThCLENBQUNEO1lBQWtCOzs7WUFFL0hFLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNDLGtCQUFrQjtnQkFBSSxPQUFPLElBQUksQ0FBQ2IsY0FBYyxDQUFDWSxnQ0FBZ0MsQ0FBQ0M7WUFBcUI7OztZQUV4SUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0MsZ0JBQWdCO2dCQUFJLE9BQU8sSUFBSSxDQUFDZixjQUFjLENBQUNjLGtDQUFrQyxDQUFDQztZQUFtQjs7O1lBRXhJQyxLQUFBQTttQkFBQUEsU0FBQUEsc0NBQXNDSCxrQkFBa0I7Z0JBQUksSUFBSSxDQUFDYixjQUFjLENBQUNnQixxQ0FBcUMsQ0FBQ0g7WUFBcUI7OztZQUUzSUksS0FBQUE7bUJBQUFBLFNBQUFBLHdDQUF3Q0YsZ0JBQWdCO2dCQUFJLElBQUksQ0FBQ2YsY0FBYyxDQUFDaUIsdUNBQXVDLENBQUNGO1lBQW1COzs7WUFFM0lHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBbUIsT0FBTyxJQUFJLENBQUNuQixPQUFPLENBQUNtQixjQUFjO1lBQUk7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFFBQVEsSUFBSSxDQUFDckIsT0FBTyxDQUFDb0IsUUFBUTtnQkFFakNDO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWXJCLGNBQWMsRUFBRUMsZUFBZTtnQkFDaEQsSUFBTUYsVUFBVUUsaUJBQ1ZxQixtQkFBbUIsSUFqRFIxQixpQkFpRDZCRyxTQUFTQyxnQkFBZ0JDO2dCQUV2RSxPQUFPcUI7WUFDVDs7O1dBcERtQjFCIn0=