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
                var judgementAdded = localContext.addJudgement(this.judgement), judgementString = this.judgement.getString(), judgementAssigned = judgementAdded; ///
                judgementAssigned ? localContext.trace("Assigned the '".concat(judgementString, "' judgement.")) : localContext.debug("Unable to assign the '".concat(judgementString, "' judgement."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVkZ2VtZW50QXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKGp1ZGdlbWVudCkge1xuICAgIHRoaXMuanVkZ2VtZW50ID0ganVkZ2VtZW50O1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudDtcbiAgfVxuXG4gIGFzc2lnbihsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBZGRlZCA9IGxvY2FsQ29udGV4dC5hZGRKdWRnZW1lbnQodGhpcy5qdWRnZW1lbnQpLFxuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IHRoaXMuanVkZ2VtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGp1ZGdlbWVudEFzc2lnbmVkID0ganVkZ2VtZW50QWRkZWQ7IC8vL1xuXG4gICAganVkZ2VtZW50QXNzaWduZWQgP1xuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApIDpcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gYXNzaWduIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQuYCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QXNzaWduZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBc3NpZ25tZW50ID0gbmV3IEp1ZGdlbWVudEFzc2lnbm1lbnQoanVkZ2VtZW50KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRBc3NpZ25tZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50QXNzaWdubWVudCIsImp1ZGdlbWVudCIsImdldEp1ZGdlbWVudCIsImFzc2lnbiIsImxvY2FsQ29udGV4dCIsImp1ZGdlbWVudEFkZGVkIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwianVkZ2VtZW50QXNzaWduZWQiLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUp1ZGdlbWVudCIsImp1ZGdlbWVudEFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsb0NBQU47YUFBTUEsb0JBQ1BDLFNBQVM7Z0NBREZEO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBRkFEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQU1DLGlCQUFpQkQsYUFBYUUsWUFBWSxDQUFDLElBQUksQ0FBQ0wsU0FBUyxHQUN6RE0sa0JBQWtCLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxTQUFTLElBQzFDQyxvQkFBb0JKLGdCQUFnQixHQUFHO2dCQUU3Q0ksb0JBQ0VMLGFBQWFNLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkgsaUJBQWdCLG1CQUNsREgsYUFBYU8sS0FBSyxDQUFDLEFBQUMseUJBQXdDLE9BQWhCSixpQkFBZ0I7Z0JBRWhFLE9BQU9FO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY1gsU0FBUztnQkFDNUIsSUFBTVksc0JBQXNCLElBdEJYYixvQkFzQm1DQztnQkFFcEQsT0FBT1k7WUFDVDs7O1dBekJtQmIifQ==