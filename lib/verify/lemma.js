"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyLemma;
    }
});
var _lemma = /*#__PURE__*/ _interop_require_default(require("../lemma"));
var _proof = /*#__PURE__*/ _interop_require_default(require("../verify/proof"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/lemma/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/lemma//labels/label"), consequentNodeQuery = (0, _query.nodeQuery)("/lemma/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/lemma/supposition");
function verifyLemma(lemmaNode, fileContext) {
    var lemmaVerified = false;
    var labelNodes = labelNodesQuery(lemmaNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext);
    labelsString === _constants.EMPTY_STRING ? fileContext.trace("Verifying a lemma...", lemmaNode) : fileContext.trace("Verifying the '".concat(labelsString, "' lemma..."), lemmaNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(lemmaNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(lemmaNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(lemmaNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, proofVerified = (0, _proof.default)(proofNode, consequent, localContext);
                if (proofVerified) {
                    var lemma = _lemma.default.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);
                    fileContext.addLemma(lemma);
                    lemmaVerified = true;
                }
            }
        }
    }
    if (lemmaVerified) {
        labelsString === _constants.EMPTY_STRING ? fileContext.debug("...verified the lemma.", lemmaNode) : fileContext.debug("...verified the '".concat(labelsString, "' lemma."), lemmaNode);
    }
    return lemmaVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL3Byb29mIVwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvY29uc2VxdWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbnNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMZW1tYShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsZW1tYVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAobGFiZWxzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gLCBsZW1tYU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIGxlbW1hLi4uYCwgbGVtbWFOb2RlKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uTm9kZXMsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudHMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgICAgY29uc2VxdWVudFZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVudChjb25zZXF1ZW50Tm9kZSwgY29uc2VxdWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW50ID0gZmlyc3QoY29uc2VxdWVudHMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gZmlyc3RDb25zZXF1ZW50LCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG5cbiAgICAgICAgICBsZW1tYVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChsZW1tYVZlcmlmaWVkKSB7XG4gICAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIGxlbW1hLmAsIGxlbW1hTm9kZSkgOlxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGxlbW1hLmAsIGxlbW1hTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMZW1tYSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJsZW1tYU5vZGUiLCJmaWxlQ29udGV4dCIsImxlbW1hVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIkVNUFRZX1NUUklORyIsInRyYWNlIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50cyIsImNvbnNlcXVlbnROb2RlIiwiY29uc2VxdWVudFZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVudCIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVudCIsImZpcnN0IiwiY29uc2VxdWVudCIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsImxlbW1hIiwiTGVtbWEiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dCIsImFkZExlbW1hIiwiZGVidWciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7Ozs0REFoQk47NERBQ007NERBQ0M7NkRBQ0E7aUVBQ0k7bUVBQ0U7cUJBRVQ7eUJBQ087cUJBQ1M7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMseUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsdUJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osWUFBWU8sU0FBUyxFQUFFQyxXQUFXO0lBQ3hELElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxhQUFhUCxnQkFBZ0JJLFlBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFakRHLGlCQUFpQkssdUJBQVksR0FDNUJSLFlBQVlTLEtBQUssQ0FBRSx3QkFBdUJWLGFBQ3hDQyxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYk4sY0FBYSxlQUFhSjtJQUVsRSxJQUFNVyxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNWLFlBQVlRLFFBQVFWO0lBRXhELElBQUlXLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmhCLHNCQUFzQkMsWUFDekNnQix1QkFBdUJDLElBQUFBLHFCQUFrQixFQUFDRixrQkFBa0JELGNBQWNSO1FBRWhGLElBQUlVLHNCQUFzQjtZQUN4QixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnJCLG9CQUFvQkUsWUFDckNvQixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFaO1lBRXpFLElBQUljLG9CQUFvQjtnQkFDdEIsSUFBTUUsWUFBWTVCLGVBQWVNLFlBQzNCdUIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFDYkcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLFlBQVluQjtnQkFFekQsSUFBSW9CLGVBQWU7b0JBQ2pCLElBQU1FLFFBQVFDLGNBQUssQ0FBQ0MsK0NBQStDLENBQUNuQixRQUFRRyxjQUFjVyxZQUFZbkI7b0JBRXRHTCxZQUFZOEIsUUFBUSxDQUFDSDtvQkFFckIxQixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNoQkUsaUJBQWlCSyx1QkFBWSxHQUM1QlIsWUFBWStCLEtBQUssQ0FBRSwwQkFBeUJoQyxhQUMxQ0MsWUFBWStCLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiNUIsY0FBYSxhQUFXSjtJQUNwRTtJQUVBLE9BQU9FO0FBQ1QifQ==