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
var _lemma = /*#__PURE__*/ _interopRequireDefault(require("../lemma"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../verify/proof"));
var _proof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("./supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("./consequence"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/lemma/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/lemma/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/lemma/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/lemma/supposition");
function verifyLemma(lemmaNode, fileContext) {
    var lemmaVerified = false;
    var labelNodes = labelNodesQuery(lemmaNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    labelsString === _constants.EMPTY_STRING ? fileContext.debug("Verifying a lemma...", lemmaNode) : fileContext.debug("Verifying the '".concat(labelsString, "' lemma..."), lemmaNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(lemmaNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequences = [], consequenceNode = consequenceNodeQuery(lemmaNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var proofNode = proofNodeQuery(lemmaNode), firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, proofVerified = (0, _proof.default)(proofNode, consequence, proofContext);
                if (proofVerified) {
                    var lemma = _lemma.default.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);
                    fileContext.addLemma(lemma);
                    lemmaVerified = true;
                }
            }
        }
    }
    if (lemmaVerified) {
        labelsString === _constants.EMPTY_STRING ? fileContext.info("Verified the lemma.", lemmaNode) : fileContext.info("Verified the '".concat(labelsString, "' lemma."), lemmaNode);
    }
    return lemmaVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxlbW1hVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmAsIGxlbW1hTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuLi5gLCBsZW1tYU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbmNlcyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VOb2RlID0gY29uc2VxdWVuY2VOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgICAgIGxlbW1hVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlbW1hVmVyaWZpZWQpIHtcbiAgICAobGFiZWxzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSBsZW1tYS5gLCBsZW1tYU5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGxlbW1hLmAsIGxlbW1hTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMZW1tYSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbmNlTm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwibGVtbWFOb2RlIiwiZmlsZUNvbnRleHQiLCJsZW1tYVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW5jZXMiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVuY2UiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbmNlIiwiZmlyc3QiLCJjb25zZXF1ZW5jZSIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsImxlbW1hIiwiTGVtbWEiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJhZGRMZW1tYSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXdCQTs7OzBEQWhCTjswREFDTTsyREFDQzsyREFDQTtnRUFDSztnRUFDQTtxQkFFUjt5QkFDTztxQkFDUzs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxpQkFDN0JDLHVCQUF1QkgsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDakNJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTSixZQUFZTyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUMxRCxJQUFJQyxnQkFBZ0IsS0FBSztJQUV6QixJQUFNQyxhQUFhUCxnQkFBZ0JJLFlBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxlQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFakRHLGlCQUFpQkssdUJBQVksR0FDNUJSLFlBQVlTLEtBQUssQ0FBRSx3QkFBdUJWLGFBQ3hDQyxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYk4sY0FBYSxlQUFhSixVQUFVO0lBRTVFLElBQU1XLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1YsWUFBWVEsUUFBUVY7SUFFeEQsSUFBSVcsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CaEIsc0JBQXNCQyxZQUN6Q2dCLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0MsaUJBQW9CO1lBQ2pFLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkosY0FBY1I7WUFFN0UsSUFBSWEscUJBQXFCO2dCQUN2QixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssZUFBZSxFQUFFLEVBQ2pCQyxrQkFBa0J4QixxQkFBcUJFLFlBQ3ZDdUIsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCRCxjQUFjZjtZQUU3RSxJQUFJaUIscUJBQXFCO2dCQUN2QixJQUFNRSxZQUFZL0IsZUFBZU0sWUFDM0IwQixtQkFBbUJDLElBQUFBLFlBQUssRUFBQ04sZUFDekJPLGNBQWNGLGtCQUNkRyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0wsV0FBV0csYUFBYXRCO2dCQUUxRCxJQUFJdUIsZUFBZTtvQkFDakIsSUFBTUUsUUFBUUMsY0FBSyxDQUFDQyxvQ0FBb0MsQ0FBQ3RCLFFBQVFHLGNBQWNjO29CQUUvRTNCLFlBQVlpQyxRQUFRLENBQUNIO29CQUVyQjdCLGdCQUFnQixJQUFJO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsZUFBZTtRQUNoQkUsaUJBQWlCSyx1QkFBWSxHQUM1QlIsWUFBWWtDLElBQUksQ0FBRSx1QkFBc0JuQyxhQUN0Q0MsWUFBWWtDLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiL0IsY0FBYSxhQUFXSixVQUFVO0lBQzFFLENBQUM7SUFFRCxPQUFPRTtBQUNUIn0=