"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Theorem;
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
var Theorem = /*#__PURE__*/ function() {
    function Theorem(labels, statementNode, suppositionStatementNodes, consequentStatementNode) {
        _classCallCheck(this, Theorem);
        this.labels = labels;
        this.statementNode = statementNode;
        this.suppositionStatementNodes = suppositionStatementNodes;
        this.consequentStatementNode = consequentStatementNode;
    }
    _createClass(Theorem, [
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
                }), kind = _kinds.THEOREM_KIND, labels = labelsJSON, statement = statementString, consequent = consequentStatementString, suppositions = suppositionStatementStrings, json = {
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
                var theorem;
                if (statement !== null) {
                    var statementJSON = statement, statementNode = (0, _node.statementNodeFromStatementJSON)(statementJSON, releaseContext), suppositionStatementNodes = null, consequentStatementNode = null;
                    theorem = new Theorem(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                } else {
                    var statementNode1 = null, suppositionStatementsJSON = suppositions, suppositionStatementNodes1 = suppositionStatementsJSON.map(function(suppositionStatementJSON) {
                        var suppositionStatementNode = (0, _node.statementNodeFromStatementJSON)(suppositionStatementJSON, releaseContext);
                        return suppositionStatementNode;
                    }), consequentStatementJSON = consequent, consequentStatementNode1 = (0, _node.statementNodeFromStatementJSON)(consequentStatementJSON, releaseContext);
                    theorem = new Theorem(labels, statementNode1, suppositionStatementNodes1, consequentStatementNode1);
                }
                return theorem;
            }
        },
        {
            key: "fromLabelsAndStatementNode",
            value: function fromLabelsAndStatementNode(labels, statementNode) {
                var suppositionStatementNodes = [], consequentStatementNode = null, theorem = new Theorem(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                return theorem;
            }
        },
        {
            key: "fromLabelsSuppositionStatementNodesAndConsequentStatementNode",
            value: function fromLabelsSuppositionStatementNodesAndConsequentStatementNode(labels, suppositionStatementNodes, consequentStatementNode) {
                var statementNode = null, theorem = new Theorem(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
                return theorem;
            }
        }
    ]);
    return Theorem;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aGVvcmVtLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcblxuaW1wb3J0IHsgVEhFT1JFTV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlb3JlbSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICAgIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXM7XG4gICAgdGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5jb25zZXF1ZW50U3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmdzID0gdGhpcy5zdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzLm1hcCgoc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdXBwb3NpdGlvblN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnRTdHJpbmc7XG4gICAgICAgICAgfSksXG4gICAgICAgICAga2luZCA9IFRIRU9SRU1fS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRTdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5ncywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGF0ZW1lbnQsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICAgIGxldCB0aGVvcmVtO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50SlNPTihzdGF0ZW1lbnRKU09OLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzID0gbnVsbCxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlID0gbnVsbDtcblxuICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50c0pTT04gPSBzdXBwb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBzdXBwb3NpdGlvblN0YXRlbWVudHNKU09OLm1hcCgoc3VwcG9zaXRpb25TdGF0ZW1lbnRKU09OKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50SlNPTihzdXBwb3NpdGlvblN0YXRlbWVudEpTT04sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50SlNPTiA9IGNvbnNlcXVlbnQsIC8vL1xuICAgICAgICAgICAgY29uc2VxdWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudEpTT04oY29uc2VxdWVudFN0YXRlbWVudEpTT04sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNBbmRTdGF0ZW1lbnROb2RlKGxhYmVscywgc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMgPSBbXSxcbiAgICAgICAgICBjb25zZXF1ZW50U3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXNBbmRDb25zZXF1ZW50U3RhdGVtZW50Tm9kZShsYWJlbHMsIHN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZXMsIGNvbnNlcXVlbnRTdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgdGhlb3JlbSA9IG5ldyBUaGVvcmVtKGxhYmVscywgc3RhdGVtZW50Tm9kZSwgc3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcywgY29uc2VxdWVudFN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGhlb3JlbSIsImxhYmVscyIsInN0YXRlbWVudE5vZGUiLCJzdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzIiwiY29uc2VxdWVudFN0YXRlbWVudE5vZGUiLCJnZXRMYWJlbHMiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3VwcG9zaXRpb25TdGF0ZW1lbnROb2RlcyIsImdldENvbnNlcXVlbnRTdGF0ZW1lbnROb2RlIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc2VxdWVudFN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5ncyIsInN1cHBvc2l0aW9uU3RhdGVtZW50Tm9kZSIsInN1cHBvc2l0aW9uU3RhdGVtZW50U3RyaW5nIiwia2luZCIsIlRIRU9SRU1fS0lORCIsInN0YXRlbWVudCIsImNvbnNlcXVlbnQiLCJzdXBwb3NpdGlvbnMiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsIkxhYmVsIiwidGhlb3JlbSIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudEpTT04iLCJzdXBwb3NpdGlvblN0YXRlbWVudHNKU09OIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRKU09OIiwiY29uc2VxdWVudFN0YXRlbWVudEpTT04iLCJmcm9tTGFiZWxzQW5kU3RhdGVtZW50Tm9kZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvblN0YXRlbWVudE5vZGVzQW5kQ29uc2VxdWVudFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzBEQVBIO3FCQUVXO3NCQUNBO29CQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyx5QkFBeUIsRUFBRUMsdUJBQXVCOzhCQURsRUo7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MseUJBQXlCLEdBQUdBO1FBQ2pDLElBQUksQ0FBQ0MsdUJBQXVCLEdBQUdBOztpQkFMZEo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFP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