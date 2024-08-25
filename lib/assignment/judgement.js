"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JudgementAssignment;
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
var JudgementAssignment = /*#__PURE__*/ function() {
    function JudgementAssignment(judgement) {
        _class_call_check(this, JudgementAssignment);
        this.judgement = judgement;
    }
    _create_class(JudgementAssignment, [
        {
            key: "getJudgement",
            value: function getJudgement() {
                return this.judgement;
            }
        },
        {
            key: "assign",
            value: function assign(localMetaContext) {
                var judgementAdded = localMetaContext.addJudgement(this.judgement), judgementNode = this.judgement.getNode(), judgementString = localMetaContext.nodeAsString(judgementNode), judgementAssigned = judgementAdded; ///
                judgementAssigned ? localMetaContext.trace("Assigned the '".concat(judgementString, "' judgement."), judgementNode) : localMetaContext.debug("Unable to assign the '".concat(judgementString, "' judgement."), judgementNode);
                return judgementAssigned;
            }
        }
    ], [
        {
            key: "fromJudgement",
            value: function fromJudgement(judgement) {
                var judgementAssignment = new JudgementAssignment(judgement);
                return judgementAssignment;
            }
        }
    ]);
    return JudgementAssignment;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVkZ2VtZW50QXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKGp1ZGdlbWVudCkge1xuICAgIHRoaXMuanVkZ2VtZW50ID0ganVkZ2VtZW50O1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudDtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50QWRkZWQgPSBsb2NhbE1ldGFDb250ZXh0LmFkZEp1ZGdlbWVudCh0aGlzLmp1ZGdlbWVudCksXG4gICAgICAgICAganVkZ2VtZW50Tm9kZSA9IHRoaXMuanVkZ2VtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25lZCA9IGp1ZGdlbWVudEFkZGVkOyAvLy9cblxuICAgIGp1ZGdlbWVudEFzc2lnbmVkID9cbiAgICAgIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYEFzc2lnbmVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSkgOlxuICAgICAgICBsb2NhbE1ldGFDb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCwganVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QXNzaWduZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBc3NpZ25tZW50ID0gbmV3IEp1ZGdlbWVudEFzc2lnbm1lbnQoanVkZ2VtZW50KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRBc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50QXNzaWdubWVudCIsImp1ZGdlbWVudCIsImdldEp1ZGdlbWVudCIsImFzc2lnbiIsImxvY2FsTWV0YUNvbnRleHQiLCJqdWRnZW1lbnRBZGRlZCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianVkZ2VtZW50QXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsb0NBQUQsQUFBTDthQUFNQSxvQkFDUEMsU0FBUztnQ0FERkQ7UUFFakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFGQUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsZ0JBQWdCO2dCQUNyQixJQUFNQyxpQkFBaUJELGlCQUFpQkUsWUFBWSxDQUFDLElBQUksQ0FBQ0wsU0FBUyxHQUM3RE0sZ0JBQWdCLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxPQUFPLElBQ3RDQyxrQkFBa0JMLGlCQUFpQk0sWUFBWSxDQUFDSCxnQkFDaERJLG9CQUFvQk4sZ0JBQWdCLEdBQUc7Z0JBRTdDTSxvQkFDRVAsaUJBQWlCUSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJILGlCQUFnQixpQkFBZUYsaUJBQ3JFSCxpQkFBaUJTLEtBQUssQ0FBQyxBQUFDLHlCQUF3QyxPQUFoQkosaUJBQWdCLGlCQUFlRjtnQkFFbkYsT0FBT0k7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjYixTQUFTO2dCQUM1QixJQUFNYyxzQkFBc0IsSUF2QlhmLG9CQXVCbUNDO2dCQUVwRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9