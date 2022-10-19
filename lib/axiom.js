"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Axiom;
    }
});
var _string = require("./utilities/string");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Axiom = /*#__PURE__*/ function() {
    function Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode) {
        _classCallCheck(this, Axiom);
        this.labels = labels;
        this.statementNode = statementNode;
        this.suppositionStatementNode = suppositionStatementNode;
        this.consequentStatementNode = consequentStatementNode;
    }
    _createClass(Axiom, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getSuppositionStatementNode",
            value: function getSuppositionStatementNode() {
                return this.suppositionStatementNode;
            }
        },
        {
            key: "getConsequentStatementNode",
            value: function getConsequentStatementNode() {
                return this.consequentStatementNode;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = (0, _string.labelsAsString)(this.labels);
                return string;
            }
        }
    ], [
        {
            key: "fromStatementNodeAndLabels",
            value: function fromStatementNodeAndLabels(statementNode, labels) {
                var suppositionStatementNode = null, consequentStatementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        },
        {
            key: "fromSuppositionStatementNodeConsequentStatementNodeAndLabels",
            value: function fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels) {
                var statementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);
                return axiom;
            }
        }
    ]);
    return Axiom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGFiZWxzQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF4aW9tIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdGF0ZW1lbnROb2RlLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudFN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbGFiZWxzQXNTdHJpbmcodGhpcy5sYWJlbHMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdXBwb3NpdGlvblN0YXRlbWVudE5vZGVDb25zZXF1ZW50U3RhdGVtZW50Tm9kZUFuZExhYmVscyhzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlLCBsYWJlbHMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSwgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwic3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiZ2V0TGFiZWxzIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsImdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYWJlbHNBc1N0cmluZyIsImZyb21TdGF0ZW1lbnROb2RlQW5kTGFiZWxzIiwiYXhpb20iLCJmcm9tU3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlQ29uc2VxdWVudFN0YXRlbWVudE5vZGVBbmRMYWJlbHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NCQUZVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyx3QkFBd0IsRUFBRUMsdUJBQXVCOzhCQURqRUo7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdBO1FBQ2hDLElBQUksQ0FBQ0MsdUJBQXVCLEdBQUdBOztpQkFMZEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QjtnQkFDNUIsT0FBTyxJQUFJLENBQUNKLHdCQUF3QjtZQUN0Qzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDSix1QkFBdUI7WUFDckM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTQyxJQUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQ1YsTUFBTTtnQkFFekMsT0FBT1M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJWLGFBQWEsRUFBRUQsTUFBTSxFQUFFO2dCQUN2RCxJQUFNRSwyQkFBMkIsSUFBSSxFQUMvQkMsMEJBQTBCLElBQUksRUFDOUJTLFFBQVEsSUFqQ0diLE1BaUNPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkRBQTZEWCx3QkFBd0IsRUFBRUMsdUJBQXVCLEVBQUVILE1BQU0sRUFBRTtnQkFDN0gsSUFBTUMsZ0JBQWdCLElBQUksRUFDcEJXLFFBQVEsSUF4Q0diLE1Bd0NPQyxRQUFRQyxlQUFlQywwQkFBMEJDO2dCQUV6RSxPQUFPUztZQUNUOzs7V0EzQ21CYiJ9