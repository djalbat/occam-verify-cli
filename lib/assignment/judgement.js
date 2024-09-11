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
            value: function assign(localContext) {
                var judgementAdded = localContext.addJudgement(this.judgement), judgementNode = this.judgement.getNode(), judgementString = localContext.nodeAsString(judgementNode), judgementAssigned = judgementAdded; ///
                judgementAssigned ? localContext.trace("Assigned the '".concat(judgementString, "' judgement."), judgementNode) : localContext.debug("Unable to assign the '".concat(judgementString, "' judgement."), judgementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVkZ2VtZW50QXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKGp1ZGdlbWVudCkge1xuICAgIHRoaXMuanVkZ2VtZW50ID0ganVkZ2VtZW50O1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudDtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBZGRlZCA9IGxvY2FsQ29udGV4dC5hZGRKdWRnZW1lbnQodGhpcy5qdWRnZW1lbnQpLFxuICAgICAgICAgIGp1ZGdlbWVudE5vZGUgPSB0aGlzLmp1ZGdlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRBc3NpZ25lZCA9IGp1ZGdlbWVudEFkZGVkOyAvLy9cblxuICAgIGp1ZGdlbWVudEFzc2lnbmVkID9cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgQXNzaWduZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gLCBqdWRnZW1lbnROb2RlKSA6XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmAsIGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50QXNzaWdubWVudCA9IG5ldyBKdWRnZW1lbnRBc3NpZ25tZW50KGp1ZGdlbWVudCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnQiLCJnZXRKdWRnZW1lbnQiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJqdWRnZW1lbnRBZGRlZCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudE5vZGUiLCJnZXROb2RlIiwianVkZ2VtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwianVkZ2VtZW50QXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsb0NBQU47YUFBTUEsb0JBQ1BDLFNBQVM7Z0NBREZEO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBRkFEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQU1DLGlCQUFpQkQsYUFBYUUsWUFBWSxDQUFDLElBQUksQ0FBQ0wsU0FBUyxHQUN6RE0sZ0JBQWdCLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxPQUFPLElBQ3RDQyxrQkFBa0JMLGFBQWFNLFlBQVksQ0FBQ0gsZ0JBQzVDSSxvQkFBb0JOLGdCQUFnQixHQUFHO2dCQUU3Q00sb0JBQ0VQLGFBQWFRLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkgsaUJBQWdCLGlCQUFlRixpQkFDakVILGFBQWFTLEtBQUssQ0FBQyxBQUFDLHlCQUF3QyxPQUFoQkosaUJBQWdCLGlCQUFlRjtnQkFFL0UsT0FBT0k7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjYixTQUFTO2dCQUM1QixJQUFNYyxzQkFBc0IsSUF2QlhmLG9CQXVCbUNDO2dCQUVwRCxPQUFPYztZQUNUOzs7V0ExQm1CZiJ9