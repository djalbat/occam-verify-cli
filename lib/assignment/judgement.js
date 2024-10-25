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
            value: function assign(context) {
                var judgementAdded = context.addJudgement(this.judgement), judgementString = this.judgement.getString(), judgementAssigned = judgementAdded; ///
                judgementAssigned ? context.trace("Assigned the '".concat(judgementString, "' judgement.")) : context.debug("Unable to assign the '".concat(judgementString, "' judgement."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NpZ25tZW50L2p1ZGdlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVkZ2VtZW50QXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKGp1ZGdlbWVudCkge1xuICAgIHRoaXMuanVkZ2VtZW50ID0ganVkZ2VtZW50O1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3QganVkZ2VtZW50QWRkZWQgPSBjb250ZXh0LmFkZEp1ZGdlbWVudCh0aGlzLmp1ZGdlbWVudCksXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0gdGhpcy5qdWRnZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganVkZ2VtZW50QXNzaWduZWQgPSBqdWRnZW1lbnRBZGRlZDsgLy8vXG5cbiAgICBqdWRnZW1lbnRBc3NpZ25lZCA/XG4gICAgICBjb250ZXh0LnRyYWNlKGBBc3NpZ25lZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApIDpcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIGFzc2lnbiB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFzc2lnbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QganVkZ2VtZW50QXNzaWdubWVudCA9IG5ldyBKdWRnZW1lbnRBc3NpZ25tZW50KGp1ZGdlbWVudCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QXNzaWdubWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudEFzc2lnbm1lbnQiLCJqdWRnZW1lbnQiLCJnZXRKdWRnZW1lbnQiLCJhc3NpZ24iLCJjb250ZXh0IiwianVkZ2VtZW50QWRkZWQiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJqdWRnZW1lbnRBc3NpZ25lZCIsInRyYWNlIiwiZGVidWciLCJmcm9tSnVkZ2VtZW50IiwianVkZ2VtZW50QXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxvQ0FBTjthQUFNQSxvQkFDUEMsU0FBUztnQ0FERkQ7UUFFakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFGQUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFNQyxpQkFBaUJELFFBQVFFLFlBQVksQ0FBQyxJQUFJLENBQUNMLFNBQVMsR0FDcERNLGtCQUFrQixJQUFJLENBQUNOLFNBQVMsQ0FBQ08sU0FBUyxJQUMxQ0Msb0JBQW9CSixnQkFBZ0IsR0FBRztnQkFFN0NJLG9CQUNFTCxRQUFRTSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJILGlCQUFnQixtQkFDN0NILFFBQVFPLEtBQUssQ0FBQyxBQUFDLHlCQUF3QyxPQUFoQkosaUJBQWdCO2dCQUUzRCxPQUFPRTtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNYLFNBQVM7Z0JBQzVCLElBQU1ZLHNCQUFzQixJQXRCWGIsb0JBc0JtQ0M7Z0JBRXBELE9BQU9ZO1lBQ1Q7OztXQXpCbUJiIn0=