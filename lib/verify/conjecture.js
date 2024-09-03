"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyConjecture;
    }
});
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _proof = /*#__PURE__*/ _interop_require_default(require("../verify/proof"));
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture/label!"), consequentNodeQuery = (0, _query.nodeQuery)("/conjecture/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/conjecture/supposition");
function verifyConjecture(conjectureNode, fileContext) {
    var conjectureVerified = false;
    var labelNodes = labelNodesQuery(conjectureNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext); ///
    fileContext.trace("Verifying the '".concat(labelsString, "' conjecture..."), conjectureNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(conjectureNode), suppositionsVerified = (0, _suppositions.default)(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(conjectureNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(conjectureNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent; ///
                if (proofNode !== null) {
                    (0, _proof.default)(proofNode, consequent, localContext);
                }
                var conjecture = _conjecture.default.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);
                fileContext.addConjecture(conjecture);
                conjectureVerified = true;
            }
        }
    }
    if (conjectureVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' conjecture."), conjectureNode);
    }
    return conjectureVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmUvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL2xhYmVsIVwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZS9jb25zZXF1ZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29uamVjdHVyZS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29uamVjdHVyZShjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTsgIC8vL1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIGNvbmplY3R1cmUuLi5gLCBjb25qZWN0dXJlTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9uTm9kZXMsIHN1cHBvc2l0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudHMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudDsgLy8vXG5cbiAgICAgICAgaWYgKHByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG5cbiAgICAgICAgY29uamVjdHVyZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoY29uamVjdHVyZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBjb25qZWN0dXJlLmAsIGNvbmplY3R1cmVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29uamVjdHVyZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbnNOb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZSIsImZpbGVDb250ZXh0IiwiY29uamVjdHVyZVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiY29uc2VxdWVudHMiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbnQiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbnQiLCJmaXJzdCIsImNvbnNlcXVlbnQiLCJ2ZXJpZnlQcm9vZiIsImNvbmplY3R1cmUiLCJDb25qZWN0dXJlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRBbmRMb2NhbENvbnRleHQiLCJhZGRDb25qZWN0dXJlIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7O2lFQWZEOzREQUNDOzZEQUNDOzREQUNBO2lFQUNJO21FQUNFO3FCQUVUO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDaENJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTSixpQkFBaUJPLGNBQWMsRUFBRUMsV0FBVztJQUNsRSxJQUFJQyxxQkFBcUI7SUFFekIsSUFBTUMsYUFBYVAsZ0JBQWdCSSxpQkFDN0JJLGVBQWVILFlBQVlJLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDUCxjQUFlLEdBQUc7SUFFcEVBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLG9CQUFrQko7SUFFbkUsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsaUJBQ3pDZSx1QkFBdUJDLElBQUFBLHFCQUFrQixFQUFDRixrQkFBa0JELGNBQWNQO1FBRWhGLElBQUlTLHNCQUFzQjtZQUN4QixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnBCLG9CQUFvQkUsaUJBQ3JDbUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhWDtZQUV6RSxJQUFJYSxvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVkzQixlQUFlTSxpQkFDM0JzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRCxjQUFjLE1BQU07b0JBQ3RCSSxJQUFBQSxjQUFXLEVBQUNKLFdBQVdHLFlBQVlsQjtnQkFDckM7Z0JBRUEsSUFBTW9CLGFBQWFDLG1CQUFVLENBQUNDLCtDQUErQyxDQUFDbEIsUUFBUUcsY0FBY1csWUFBWWxCO2dCQUVoSEwsWUFBWTRCLGFBQWEsQ0FBQ0g7Z0JBRTFCeEIscUJBQXFCO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLG9CQUFvQjtRQUN0QkQsWUFBWTZCLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiMUIsY0FBYSxrQkFBZ0JKO0lBQ3JFO0lBRUEsT0FBT0U7QUFDVCJ9