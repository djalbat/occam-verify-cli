"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequent;
    }
});
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Consequent = /*#__PURE__*/ function() {
    function Consequent(statementNode) {
        _class_call_check(this, Consequent);
        this.statementNode = statementNode;
    }
    _create_class(Consequent, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var nodeA = this.statementNode, nodeB = statementNodeB, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    statementUnified = unified; ///
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequent = new Consequent(statementNode);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgICAgdW5pZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnNlcXVlbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwibm9kZUEiLCJub2RlQiIsInVuaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxhQUFhO2dDQURORDtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUN4RSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQUksSUFBSSxDQUFDUCxhQUFhLEtBQUssTUFBTTtvQkFDL0IsSUFBTVEsUUFBUSxJQUFJLENBQUNSLGFBQWEsRUFDMUJTLFFBQVFOLGdCQUNSTyxVQUFVQyxrQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDSixPQUFPQyxPQUFPTCxlQUFlQyxlQUFlQztvQkFFbkZDLG1CQUFtQkcsU0FBUyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmIsYUFBYTtnQkFDcEMsSUFBTWMsYUFBYSxJQXhCRmYsV0F3QmlCQztnQkFFbEMsT0FBT2M7WUFDVDs7O1dBM0JtQmYifQ==