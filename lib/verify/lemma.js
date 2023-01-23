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
    fileContext.begin(lemmaNode);
    var labelNodes = labelNodesQuery(lemmaNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    labelsString === _constants.EMPTY_STRING ? fileContext.debug("Verifying a lemma...") : fileContext.debug("Verifying the '".concat(labelsString, "' lemma..."));
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
        labelsString === _constants.EMPTY_STRING ? fileContext.info("Verified the lemma.") : fileContext.info("Verified the '".concat(labelsString, "' lemma."));
    }
    lemmaVerified ? fileContext.complete(lemmaNode) : fileContext.complete(lemmaNode);
    return lemmaVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxlbW1hVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihsZW1tYU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCkgOlxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uc05vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVuY2UgPSBmaXJzdChjb25zZXF1ZW5jZXMpLFxuICAgICAgICAgICAgICBjb25zZXF1ZW5jZSA9IGZpcnN0Q29uc2VxdWVuY2UsIC8vL1xuICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdmVyaWZ5UHJvb2YocHJvb2ZOb2RlLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG5cbiAgICAgICAgICBsZW1tYVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChsZW1tYVZlcmlmaWVkKSB7XG4gICAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgbGVtbWEuYCkgOlxuICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuYCk7XG4gIH1cblxuICBsZW1tYVZlcmlmaWVkID9cbiAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShsZW1tYU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKGxlbW1hTm9kZSk7XG5cbiAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGVtbWEiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsImxlbW1hTm9kZSIsImZpbGVDb250ZXh0IiwibGVtbWFWZXJpZmllZCIsImJlZ2luIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJFTVBUWV9TVFJJTkciLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW5jZXMiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVuY2UiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbmNlIiwiZmlyc3QiLCJjb25zZXF1ZW5jZSIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsImxlbW1hIiwiTGVtbWEiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJhZGRMZW1tYSIsImluZm8iLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7MERBaEJOOzBEQUNNOzJEQUNDOzJEQUNBO2dFQUNLO2dFQUNBO3FCQUVSO3lCQUNPO3FCQUNTOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlCQUM3QkMsdUJBQXVCSCxJQUFBQSxnQkFBUyxFQUFDLHdCQUNqQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLFlBQVlPLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQzFELElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNIO0lBRWxCLElBQU1JLGFBQWFSLGdCQUFnQkksWUFDN0JLLGVBQWVKLFlBQVlLLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVDLGVBQVksQ0FBQ0MsZUFBZSxDQUFDUjtJQUVqREksaUJBQWlCSyx1QkFBWSxHQUM1QlQsWUFBWVUsS0FBSyxDQUFFLDBCQUNqQlYsWUFBWVUsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJOLGNBQWEsY0FBWTtJQUVqRSxJQUFNTyxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNWLFlBQVlRLFFBQVFYO0lBRXhELElBQUlZLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmpCLHNCQUFzQkMsWUFDekNpQix1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNSO1lBRTdFLElBQUlhLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCekIscUJBQXFCRSxZQUN2Q3dCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Y7WUFFN0UsSUFBSWlCLHFCQUFxQjtnQkFDdkIsSUFBTUUsWUFBWWhDLGVBQWVNLFlBQzNCMkIsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNOLGVBQ3pCTyxjQUFjRixrQkFDZEcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLGFBQWF0QjtnQkFFMUQsSUFBSXVCLGVBQWU7b0JBQ2pCLElBQU1FLFFBQVFDLGNBQUssQ0FBQ0Msb0NBQW9DLENBQUN0QixRQUFRRyxjQUFjYztvQkFFL0U1QixZQUFZa0MsUUFBUSxDQUFDSDtvQkFFckI5QixnQkFBZ0IsSUFBSTtnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGVBQWU7UUFDaEJHLGlCQUFpQkssdUJBQVksR0FDNUJULFlBQVltQyxJQUFJLENBQUUseUJBQ2hCbkMsWUFBWW1DLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiL0IsY0FBYSxZQUFVO0lBQy9ELENBQUM7SUFFREgsZ0JBQ0VELFlBQVlvQyxRQUFRLENBQUNyQyxhQUNuQkMsWUFBWW9DLFFBQVEsQ0FBQ3JDLFVBQVU7SUFFbkMsT0FBT0U7QUFDVCJ9