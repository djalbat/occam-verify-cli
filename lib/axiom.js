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
var _label = /*#__PURE__*/ _interopRequireDefault(require("./label"));
var _kinds = require("./kinds");
var _string = require("./utilities/string");
var _node = require("./utilities/node");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Axiom = /*#__PURE__*/ function() {
    function Axiom(labels, statementNode, suppositionStatementNodes, consequentStatementNode) {
        _classCallCheck(this, Axiom);
        this.labels = labels;
        this.statementNode = statementNode;
        this.suppositionStatementNodes = suppositionStatementNodes;
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
            key: "getSuppositionStatementNodes",
            value: function getSuppositionStatementNodes() {
                return this.suppositionStatementNodes;
            }
        },
        {
            key: "getConsequentStatementNode",
            value: function getConsequentStatementNode() {
                return this.consequentStatementNode;
            }
        },
        {
            key: "matchLabelName",
            value: function matchLabelName(labelName) {
                var matchesLabelName = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return matchesLabelName;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), statementString = (0, _string.nodeAsString)(this.statementNode), consequentStatementString = (0, _string.nodeAsString)(this.consequentStatementNode), suppositionStatementStrings = this.suppositionStatementNodes.map(function(suppositionStatementNode) {
                    var suppositionStatementString = (0, _string.nodeAsString)(suppositionStatementNode);
                    return suppositionStatementString;
                }), kind = _kinds.AXIOM_KIND, labels = labelsJSON, statement = statementString, consequent = consequentStatementString, suppositions = suppositionStatementStrings, json = {
                    kind: kind,
                    labels: labels,
                    statement: statement,
                    consequent: consequent,
                    suppositions: suppositions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, releaseContext);
                    return label;
                });
                var statement = json.statement, suppositions = json.suppositions, consequent = json.consequent;
                var axiom;
                if (statement !== null) {
                    var statementJSON = statement, statementNode = (0, _node.statementNodeFromStatementJSON)(statementJSON, releaseContext), suppositionStatementNodes = null, consequentStatementNode = null;
                    axiom = new Axiom(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                } else {
                    var statementNode1 = null, suppositionStatementsJSON = suppositions, suppositionStatementNodes1 = suppositionStatementsJSON.map(function(suppositionStatementJSON) {
                        var suppositionStatementNode = (0, _node.statementNodeFromStatementJSON)(suppositionStatementJSON, releaseContext);
                        return suppositionStatementNode;
                    }), consequentStatementJSON = consequent, consequentStatementNode1 = (0, _node.statementNodeFromStatementJSON)(consequentStatementJSON, releaseContext);
                    axiom = new Axiom(labels, statementNode1, suppositionStatementNodes1, consequentStatementNode1);
                }
                return axiom;
            }
        },
        {
            key: "fromLabelsAndStatementNode",
            value: function fromLabelsAndStatementNode(labels, statementNode) {
                var suppositionStatementNodes = [], consequentStatementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                return axiom;
            }
        },
        {
            key: "fromLabelsSuppositionStatementNodesAndConsequentStatementNode",
            value: function fromLabelsSuppositionStatementNodesAndConsequentStatementNode(labels, suppositionStatementNodes, consequentStatementNode) {
                var statementNode = null, axiom = new Axiom(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                return axiom;
            }
        }
    ]);
    return Axiom;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9heGlvbS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5cbmltcG9ydCB7IEFYSU9NX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudEpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGlvbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXM7XG4gICAgdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmdzID0gdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLm1hcCgoc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmc7XG4gICAgICAgICAgfSksXG4gICAgICAgICAga2luZCA9IEFYSU9NX0tJTkQsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nLCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZ3MsIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdGVtZW50LCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQgfSA9IGpzb247XG5cbiAgICBsZXQgYXhpb207XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRKU09OKHN0YXRlbWVudEpTT04sIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBudWxsLFxuICAgICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsO1xuXG4gICAgICBheGlvbSA9IG5ldyBBeGlvbShsYWJlbHMsIHN0YXRlbWVudE5vZGUsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudHNKU09OID0gc3VwcG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gc3VwcG9zaXRpb25TdGF0ZW1lbnRzSlNPTi5tYXAoKHN1cHBvc2l0aW9uU3RhdGVtZW50SlNPTikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudEpTT04oc3VwcG9zaXRpb25TdGF0ZW1lbnRKU09OLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudEpTT04gPSBjb25zZXF1ZW50LCAvLy9cbiAgICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRKU09OKGNvbnNlcXVlbnRTdGF0ZW1lbnRKU09OLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzQW5kU3RhdGVtZW50Tm9kZShsYWJlbHMsIHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gW10sXG4gICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzQW5kQ29uc2VxdWVudFN0YXRlbWVudE5vZGUobGFiZWxzLCBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLCBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGF4aW9tID0gbmV3IEF4aW9tKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkF4aW9tIiwibGFiZWxzIiwic3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMiLCJjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSIsImdldExhYmVscyIsImdldFN0YXRlbWVudE5vZGUiLCJnZXRTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzIiwiZ2V0Q29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJjb25zZXF1ZW50U3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmdzIiwic3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmciLCJraW5kIiwiQVhJT01fS0lORCIsInN0YXRlbWVudCIsImNvbnNlcXVlbnQiLCJzdXBwb3NpdGlvbnMiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwiYXhpb20iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRKU09OIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzSlNPTiIsInN1cHBvc2l0aW9uU3RhdGVtZW50SlNPTiIsImNvbnNlcXVlbnRTdGF0ZW1lbnRKU09OIiwiZnJvbUxhYmVsc0FuZFN0YXRlbWVudE5vZGUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25TdGF0ZW1lbnROb2Rlc0FuZENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzswREFQSDtxQkFFUztzQkFDRTtvQkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMseUJBQXlCLEVBQUVDLHVCQUF1Qjs4QkFEbEVKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTtRQUNqQyxJQUFJLENBQUNDLHVCQUF1QixHQUFHQTs7aUJBTGRKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTtt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