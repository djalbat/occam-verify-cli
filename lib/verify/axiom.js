"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAxiom;
    }
});
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequentNodeQuery = (0, _query.nodeQuery)("/axiom/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/axiom/supposition");
function verifyAxiom(axiomNode, fileContext) {
    var axiomVerified = false;
    var labelNodes = labelNodesQuery(axiomNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext);
    fileContext.trace("Verifying the '".concat(labelsString, "' axiom..."), axiomNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(axiomNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(axiomNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, axiom = _axiom.default.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);
                fileContext.addAxiom(axiom);
                axiomVerified = true;
            }
        }
    }
    if (axiomVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' axiom."), axiomNode);
    }
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW50IGZyb20gXCIuLi92ZXJpZnkvY29uc2VxdWVudFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9ucyBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uc1wiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb20vY29uc2VxdWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbnNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2F4aW9tL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlBeGlvbShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBheGlvbVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBheGlvbS4uLmAsIGF4aW9tTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbk5vZGVzLCBzdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgIGF4aW9tVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChheGlvbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBheGlvbS5gLCBheGlvbU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGF4aW9tVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5QXhpb20iLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsImF4aW9tTm9kZSIsImZpbGVDb250ZXh0IiwiYXhpb21WZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwiYXhpb20iLCJBeGlvbSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0IiwiYWRkQXhpb20iLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7Ozs0REFiTjs0REFDTzs2REFDQTtpRUFDSTttRUFDRTtxQkFFVDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUMsdUJBQ2hDQyx3QkFBd0JILElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0YsWUFBWU0sU0FBUyxFQUFFQyxXQUFXO0lBQ3hELElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxhQUFhUixnQkFBZ0JLLFlBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFbERBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLGVBQWFKO0lBRTlELElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CZixzQkFBc0JDLFlBQ3pDZSx1QkFBdUJDLElBQUFBLHFCQUFrQixFQUFDRixrQkFBa0JELGNBQWNQO1FBRWhGLElBQUlTLHNCQUFzQjtZQUN4QixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnJCLG9CQUFvQkcsWUFDckNtQixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFYO1lBRXpFLElBQUlhLG9CQUFvQjtnQkFDdEIsSUFBTUUsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNMLGNBQ3hCTSxhQUFhRixpQkFDYkcsUUFBUUMsY0FBSyxDQUFDQywrQ0FBK0MsQ0FBQ2hCLFFBQVFHLGNBQWNVLFlBQVlqQjtnQkFFdEdMLFlBQVkwQixRQUFRLENBQUNIO2dCQUVyQnRCLGdCQUFnQjtZQUNsQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxlQUFlO1FBQ2pCRCxZQUFZMkIsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWJ4QixjQUFhLGFBQVdKO0lBQ2hFO0lBRUEsT0FBT0U7QUFDVCJ9