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
var proofNodeQuery = (0, _query.nodeQuery)("/lemma/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/lemma/label"), consequentNodeQuery = (0, _query.nodeQuery)("/lemma/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/lemma/supposition");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL3Byb29mIVwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGVtbWEobGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGVtbWFWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCwgbGVtbWFOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS4uLmAsIGxlbW1hTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbk5vZGVzLCBzdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBsZW1tYSA9IExlbW1hLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAgICAgbGVtbWFWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobGVtbWFWZXJpZmllZCkge1xuICAgIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBsZW1tYS5gLCBsZW1tYU5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS5gLCBsZW1tYU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGVtbWEiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwibGVtbWFOb2RlIiwiZmlsZUNvbnRleHQiLCJsZW1tYVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiY29uc2VxdWVudHMiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbnQiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbnQiLCJmaXJzdCIsImNvbnNlcXVlbnQiLCJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5UHJvb2YiLCJsZW1tYSIsIkxlbW1hIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQiLCJhZGRMZW1tYSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUF3QkE7Ozs0REFoQk47NERBQ007NERBQ0M7NkRBQ0E7aUVBQ0k7bUVBQ0U7cUJBRVQ7eUJBQ087cUJBQ1M7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsdUJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osWUFBWU8sU0FBUyxFQUFFQyxXQUFXO0lBQ3hELElBQUlDLGdCQUFnQjtJQUVwQixJQUFNQyxhQUFhUCxnQkFBZ0JJLFlBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFakRHLGlCQUFpQkssdUJBQVksR0FDNUJSLFlBQVlTLEtBQUssQ0FBRSx3QkFBdUJWLGFBQ3hDQyxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYk4sY0FBYSxlQUFhSjtJQUVsRSxJQUFNVyxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNWLFlBQVlRLFFBQVFWO0lBRXhELElBQUlXLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmhCLHNCQUFzQkMsWUFDekNnQix1QkFBdUJDLElBQUFBLHFCQUFrQixFQUFDRixrQkFBa0JELGNBQWNSO1FBRWhGLElBQUlVLHNCQUFzQjtZQUN4QixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnJCLG9CQUFvQkUsWUFDckNvQixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFaO1lBRXpFLElBQUljLG9CQUFvQjtnQkFDdEIsSUFBTUUsWUFBWTVCLGVBQWVNLFlBQzNCdUIsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNOLGNBQ3hCTyxhQUFhRixpQkFDYkcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLFlBQVluQjtnQkFFekQsSUFBSW9CLGVBQWU7b0JBQ2pCLElBQU1FLFFBQVFDLGNBQUssQ0FBQ0MsK0NBQStDLENBQUNuQixRQUFRRyxjQUFjVyxZQUFZbkI7b0JBRXRHTCxZQUFZOEIsUUFBUSxDQUFDSDtvQkFFckIxQixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEsZUFBZTtRQUNoQkUsaUJBQWlCSyx1QkFBWSxHQUM1QlIsWUFBWStCLEtBQUssQ0FBRSwwQkFBeUJoQyxhQUMxQ0MsWUFBWStCLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiNUIsY0FBYSxhQUFXSjtJQUNwRTtJQUVBLE9BQU9FO0FBQ1QifQ==