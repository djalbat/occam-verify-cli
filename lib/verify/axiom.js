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
var _proof = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("../verify/supposition"));
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
    var labelNodes = labelNodesQuery(axiomNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' axiom..."), axiomNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(axiomNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(axiomNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, axiom = _axiom.default.fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext);
                fileContext.addAxiom(axiom);
                axiomVerified = true;
            }
        }
    }
    if (axiomVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' axiom."), axiomNode);
    }
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW50IGZyb20gXCIuLi92ZXJpZnkvY29uc2VxdWVudFwiO1xuaW1wb3J0IHZlcmlmeVN1cHBvc2l0aW9uIGZyb20gXCIuLi92ZXJpZnkvc3VwcG9zaXRpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvYXhpb20vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5QXhpb20oYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgYXhpb21WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgYXhpb20uLi5gLCBheGlvbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgIGF4aW9tVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChheGlvbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLmAsIGF4aW9tTm9kZSk7XG4gIH1cblxuICByZXR1cm4gYXhpb21WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlBeGlvbSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlIiwiZmlsZUNvbnRleHQiLCJheGlvbVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW50cyIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVudCIsImZpcnN0Q29uc2VxdWVudCIsImZpcnN0IiwiY29uc2VxdWVudCIsImF4aW9tIiwiQXhpb20iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZFByb29mQ29udGV4dCIsImFkZEF4aW9tIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUF3QkE7Ozs0REFiTjs0REFDTzs2REFDQTtpRUFDSTtrRUFDQztxQkFFUjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLG1CQUFXLGlCQUM3QkMsc0JBQXNCQyxJQUFBQSxrQkFBVSx1QkFDaENDLHdCQUF3QkgsSUFBQUEsbUJBQVc7QUFFMUIsU0FBU0YsWUFBWU0sU0FBUyxFQUFFQyxXQUFXO0lBQ3hELElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxhQUFhUixnQkFBZ0JLLFlBQzdCSSxlQUFlSCxZQUFZSSxjQUFjRixhQUN6Q0csZUFBZUMsZUFBYUMsZ0JBQWdCUDtJQUVsREEsWUFBWVEsTUFBTSxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLGVBQWFKO0lBRTlELElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGlCQUFhVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsWUFDekNlLHVCQUF1QkQsaUJBQWlCRSxNQUFNLFNBQUNDO1lBQzdDLElBQU1DLHNCQUFzQkMsSUFBQUEsc0JBQWtCRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0Y7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ4QixvQkFBb0JHLFlBQ3JDc0IscUJBQXFCQyxJQUFBQSxxQkFBaUJGLGdCQUFnQkQsYUFBYWQ7WUFFekUsSUFBSWdCLG9CQUFvQjtnQkFDdEIsSUFBTUUsa0JBQWtCQyxJQUFBQSxjQUFNTCxjQUN4Qk0sYUFBYUYsaUJBQ2JHLFFBQVFDLGVBQU1DLGdEQUFnRG5CLFFBQVFHLGNBQWNhLFlBQVlwQjtnQkFFdEdMLFlBQVk2QixTQUFTSDtnQkFFckJ6QixnQkFBZ0I7WUFDbEI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNqQkQsWUFBWThCLEtBQUssQUFBQyxpQkFBNkIsT0FBYjNCLGNBQWEsYUFBV0o7SUFDNUQ7SUFFQSxPQUFPRTtBQUNUIn0=