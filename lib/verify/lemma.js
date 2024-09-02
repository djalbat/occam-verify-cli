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
var _labels = /*#__PURE__*/ _interop_require_default(require("../verify/labels"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("../verify/consequent"));
var _suppositions = /*#__PURE__*/ _interop_require_default(require("../verify/suppositions"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../context/local/intrinsicLevel"));
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
    var intrinsicLevelLocalContext = _intrinsicLevel.default.fromFileContext(fileContext), labelNodes = labelNodesQuery(lemmaNode), labelsString = fileContext.nodesAsString(labelNodes), localContext = intrinsicLevelLocalContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi4vdmVyaWZ5L2NvbnNlcXVlbnRcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbnMgZnJvbSBcIi4uL3ZlcmlmeS9zdXBwb3NpdGlvbnNcIjtcbmltcG9ydCBJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbC9pbnRyaW5zaWNMZXZlbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvcHJvb2YhXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvY29uc2VxdWVudCFcIiksXG4gICAgICBzdXBwb3NpdGlvbnNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlMZW1tYShsZW1tYU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBsZW1tYVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQgPSBJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2RlcyksXG4gICAgICAgIGxvY2FsQ29udGV4dCA9IGludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCwgbGVtbWFOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS4uLmAsIGxlbW1hTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbk5vZGVzLCBzdXBwb3NpdGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbnRWZXJpZmllZCA9IHZlcmlmeUNvbnNlcXVlbnQoY29uc2VxdWVudE5vZGUsIGNvbnNlcXVlbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgICAgIGZpcnN0Q29uc2VxdWVudCA9IGZpcnN0KGNvbnNlcXVlbnRzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVudCA9IGZpcnN0Q29uc2VxdWVudCwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbnQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBsZW1tYSA9IExlbW1hLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAgICAgbGVtbWFWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobGVtbWFWZXJpZmllZCkge1xuICAgIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBsZW1tYS5gLCBsZW1tYU5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS5gLCBsZW1tYU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGxlbW1hVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TGVtbWEiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwibGVtbWFOb2RlIiwiZmlsZUNvbnRleHQiLCJsZW1tYVZlcmlmaWVkIiwiaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQiLCJJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibG9jYWxDb250ZXh0IiwiRU1QVFlfU1RSSU5HIiwidHJhY2UiLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwibGVtbWEiLCJMZW1tYSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50QW5kTG9jYWxDb250ZXh0IiwiYWRkTGVtbWEiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7NERBaEJOOzREQUNNOzZEQUNDO2lFQUNJO21FQUNFO3FFQUNRO3FCQUVqQjt5QkFDTztxQkFDUzs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxpQkFDN0JDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDaENJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTSixZQUFZTyxTQUFTLEVBQUVDLFdBQVc7SUFDeEQsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQU1DLDZCQUE2QkMsdUJBQTBCLENBQUNDLGVBQWUsQ0FBQ0osY0FDeEVLLGFBQWFWLGdCQUFnQkksWUFDN0JPLGVBQWVOLFlBQVlPLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVOLDRCQUE2QixHQUFHO0lBRXBESSxpQkFBaUJHLHVCQUFZLEdBQzVCVCxZQUFZVSxLQUFLLENBQUUsd0JBQXVCWCxhQUN4Q0MsWUFBWVUsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJKLGNBQWEsZUFBYVA7SUFFbEUsSUFBTVksU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDUixZQUFZTSxRQUFRWDtJQUV4RCxJQUFJWSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJqQixzQkFBc0JDLFlBQ3pDaUIsdUJBQXVCQyxJQUFBQSxxQkFBa0IsRUFBQ0Ysa0JBQWtCRCxjQUFjTjtRQUVoRixJQUFJUSxzQkFBc0I7WUFDeEIsSUFBTUUsY0FBYyxFQUFFLEVBQ2hCQyxpQkFBaUJ0QixvQkFBb0JFLFlBQ3JDcUIscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCRCxhQUFhVjtZQUV6RSxJQUFJWSxvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVk3QixlQUFlTSxZQUMzQndCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQ2JHLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxZQUFZakI7Z0JBRXpELElBQUlrQixlQUFlO29CQUNqQixJQUFNRSxRQUFRQyxjQUFLLENBQUNDLCtDQUErQyxDQUFDbkIsUUFBUUcsY0FBY1csWUFBWWpCO29CQUV0R1IsWUFBWStCLFFBQVEsQ0FBQ0g7b0JBRXJCM0IsZ0JBQWdCO2dCQUNsQjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGVBQWU7UUFDaEJLLGlCQUFpQkcsdUJBQVksR0FDNUJULFlBQVlnQyxLQUFLLENBQUUsMEJBQXlCakMsYUFDMUNDLFlBQVlnQyxLQUFLLENBQUMsQUFBQyxvQkFBZ0MsT0FBYjFCLGNBQWEsYUFBV1A7SUFDcEU7SUFFQSxPQUFPRTtBQUNUIn0=