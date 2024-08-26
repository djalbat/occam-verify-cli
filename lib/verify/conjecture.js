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
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture/label!"), consequentNodeQuery = (0, _query.nodeQuery)("/conjecture/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/conjecture/supposition");
function verifyConjecture(conjectureNode, fileContext) {
    var conjectureVerified = false;
    var labelNodes = labelNodesQuery(conjectureNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = _local.default.fromFileContext(fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmUvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb25qZWN0dXJlL2xhYmVsIVwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZS9jb25zZXF1ZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29uamVjdHVyZS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29uamVjdHVyZShjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBjb25qZWN0dXJlLi4uYCwgY29uamVjdHVyZU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbk5vZGVzLCBzdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgICAgY29uc2VxdWVudFZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVudChjb25zZXF1ZW50Tm9kZSwgY29uc2VxdWVudHMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbnNlcXVlbnQgPSBmaXJzdChjb25zZXF1ZW50cyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSBmaXJzdENvbnNlcXVlbnQ7IC8vL1xuXG4gICAgICAgIGlmIChwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudEFuZExvY2FsQ29udGV4dChsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICBmaWxlQ29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuXG4gICAgICAgIGNvbmplY3R1cmVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmplY3R1cmVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgY29uamVjdHVyZS5gLCBjb25qZWN0dXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29uamVjdHVyZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUNvbmplY3R1cmUiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGUiLCJmaWxlQ29udGV4dCIsImNvbmplY3R1cmVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwidmVyaWZ5UHJvb2YiLCJjb25qZWN0dXJlIiwiQ29uamVjdHVyZSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0IiwiYWRkQ29uamVjdHVyZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OztpRUFmRDs0REFDQzs0REFDQzs2REFDQTtpRUFDSTttRUFDRTtxQkFFVDtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsdUJBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsNEJBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osaUJBQWlCTyxjQUFjLEVBQUVDLFdBQVc7SUFDbEUsSUFBSUMscUJBQXFCO0lBRXpCLElBQU1DLGFBQWFQLGdCQUFnQkksaUJBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFbERBLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhLG9CQUFrQko7SUFFbkUsSUFBTVUsU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsaUJBQ3pDZSx1QkFBdUJDLElBQUFBLHFCQUFrQixFQUFDRixrQkFBa0JELGNBQWNQO1FBRWhGLElBQUlTLHNCQUFzQjtZQUN4QixJQUFNRSxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnBCLG9CQUFvQkUsaUJBQ3JDbUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhWDtZQUV6RSxJQUFJYSxvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVkzQixlQUFlTSxpQkFDM0JzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUFpQixHQUFHO2dCQUV2QyxJQUFJRCxjQUFjLE1BQU07b0JBQ3RCSSxJQUFBQSxjQUFXLEVBQUNKLFdBQVdHLFlBQVlsQjtnQkFDckM7Z0JBRUEsSUFBTW9CLGFBQWFDLG1CQUFVLENBQUNDLCtDQUErQyxDQUFDbEIsUUFBUUcsY0FBY1csWUFBWWxCO2dCQUVoSEwsWUFBWTRCLGFBQWEsQ0FBQ0g7Z0JBRTFCeEIscUJBQXFCO1lBQ3ZCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLG9CQUFvQjtRQUN0QkQsWUFBWTZCLEtBQUssQ0FBQyxBQUFDLG9CQUFnQyxPQUFiMUIsY0FBYSxrQkFBZ0JKO0lBQ3JFO0lBRUEsT0FBT0U7QUFDVCJ9