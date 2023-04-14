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
var _proof1 = /*#__PURE__*/ _interop_require_default(require("../context/proof"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _consequence = /*#__PURE__*/ _interop_require_default(require("./consequence"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
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
                    var lemma = _lemma.default.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxlbW1hVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIHByb29mQ29udGV4dCA9IFByb29mQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgYSBsZW1tYS4uLmAsIGxlbW1hTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuLi5gLCBsZW1tYU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbmNlcyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VOb2RlID0gY29uc2VxdWVuY2VOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVuY2VBbmRQcm9vZkNvbnRleHQobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAgICAgbGVtbWFWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobGVtbWFWZXJpZmllZCkge1xuICAgIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlIGxlbW1hLmAsIGxlbW1hTm9kZSkgOlxuICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuYCwgbGVtbWFOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBsZW1tYVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxlbW1hIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVuY2VOb2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJsZW1tYU5vZGUiLCJmaWxlQ29udGV4dCIsImxlbW1hVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIkVNUFRZX1NUUklORyIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbmNlcyIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW5jZSIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVuY2UiLCJmaXJzdCIsImNvbnNlcXVlbmNlIiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwibGVtbWEiLCJMZW1tYSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW5jZUFuZFByb29mQ29udGV4dCIsImFkZExlbW1hIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7NERBaEJOOzREQUNNOzZEQUNDOzZEQUNBO2tFQUNLO2tFQUNBO3FCQUVSO3lCQUNPO3FCQUNTOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlCQUM3QkMsdUJBQXVCSCxJQUFBQSxnQkFBUyxFQUFDLHdCQUNqQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLFlBQVlPLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQzFELElBQUlDLGdCQUFnQixLQUFLO0lBRXpCLElBQU1DLGFBQWFQLGdCQUFnQkksWUFDN0JJLGVBQWVILFlBQVlJLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVDLGVBQVksQ0FBQ0MsZUFBZSxDQUFDUDtJQUVqREcsaUJBQWlCSyx1QkFBWSxHQUM1QlIsWUFBWVMsS0FBSyxDQUFFLHdCQUF1QlYsYUFDeENDLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTixjQUFhLGVBQWFKLFVBQVU7SUFFNUUsSUFBTVcsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVixZQUFZUSxRQUFRVjtJQUV4RCxJQUFJVyxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJoQixzQkFBc0JDLFlBQ3pDZ0IsdUJBQXVCRCxpQkFBaUJFLEtBQUssQ0FBQyxTQUFDQyxpQkFBb0I7WUFDakUsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCSixjQUFjUjtZQUU3RSxJQUFJYSxxQkFBcUI7Z0JBQ3ZCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlILHNCQUFzQjtZQUN4QixJQUFNSyxlQUFlLEVBQUUsRUFDakJDLGtCQUFrQnhCLHFCQUFxQkUsWUFDdkN1QixzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJELGNBQWNmO1lBRTdFLElBQUlpQixxQkFBcUI7Z0JBQ3ZCLElBQU1FLFlBQVkvQixlQUFlTSxZQUMzQjBCLG1CQUFtQkMsSUFBQUEsWUFBSyxFQUFDTixlQUN6Qk8sY0FBY0Ysa0JBQ2RHLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxhQUFhdEI7Z0JBRTFELElBQUl1QixlQUFlO29CQUNqQixJQUFNRSxRQUFRQyxjQUFLLENBQUNDLGdEQUFnRCxDQUFDdEIsUUFBUUcsY0FBY2MsYUFBYXRCO29CQUV4R0wsWUFBWWlDLFFBQVEsQ0FBQ0g7b0JBRXJCN0IsZ0JBQWdCLElBQUk7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxlQUFlO1FBQ2hCRSxpQkFBaUJLLHVCQUFZLEdBQzVCUixZQUFZa0MsSUFBSSxDQUFFLHVCQUFzQm5DLGFBQ3RDQyxZQUFZa0MsSUFBSSxDQUFDLEFBQUMsaUJBQTZCLE9BQWIvQixjQUFhLGFBQVdKLFVBQVU7SUFDMUUsQ0FBQztJQUVELE9BQU9FO0FBQ1QifQ==