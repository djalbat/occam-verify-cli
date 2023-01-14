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
var _string = require("../utilities/string");
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
    var labelNodes = labelNodesQuery(lemmaNode), labelsString = (0, _string.nodesAsString)(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sZW1tYS9wcm9vZiFcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWEvY29uc2VxdWVuY2UhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9sZW1tYS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TGVtbWEobGVtbWFOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgbGVtbWFWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKGxlbW1hTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAobGFiZWxzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIGEgbGVtbWEuLi5gKSA6XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbmNlcyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VOb2RlID0gY29uc2VxdWVuY2VOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZExlbW1hKGxlbW1hKTtcblxuICAgICAgICAgIGxlbW1hVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxlbW1hVmVyaWZpZWQpIHtcbiAgICAobGFiZWxzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSBsZW1tYS5gKSA6XG4gICAgICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBsZW1tYS5gKTtcbiAgfVxuXG4gIGxlbW1hVmVyaWZpZWQgP1xuICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKGxlbW1hTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuY29tcGxldGUobGVtbWFOb2RlKTtcblxuICByZXR1cm4gbGVtbWFWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlMZW1tYSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbmNlTm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwibGVtbWFOb2RlIiwiZmlsZUNvbnRleHQiLCJsZW1tYVZlcmlmaWVkIiwiYmVnaW4iLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIkVNUFRZX1NUUklORyIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbmNlcyIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW5jZSIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVuY2UiLCJmaXJzdCIsImNvbnNlcXVlbmNlIiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwibGVtbWEiLCJMZW1tYSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsImFkZExlbW1hIiwiaW5mbyIsImNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUF3QkE7OzswREFqQk47MERBQ007MkRBQ0M7MkRBQ0E7Z0VBQ0s7Z0VBQ0E7cUJBRVI7eUJBQ087c0JBQ0M7cUJBQ1E7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsa0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsaUJBQzdCQyx1QkFBdUJILElBQUFBLGdCQUFTLEVBQUMsd0JBQ2pDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0osWUFBWU8sU0FBUyxFQUFFQyxXQUFXLEVBQUU7SUFDMUQsSUFBSUMsZ0JBQWdCLEtBQUs7SUFFekJELFlBQVlFLEtBQUssQ0FBQ0g7SUFFbEIsSUFBTUksYUFBYVIsZ0JBQWdCSSxZQUM3QkssZUFBZUMsSUFBQUEscUJBQWEsRUFBQ0YsYUFDN0JHLGVBQWVDLGVBQVksQ0FBQ0MsZUFBZSxDQUFDUjtJQUVqREksaUJBQWlCSyx1QkFBWSxHQUM1QlQsWUFBWVUsS0FBSyxDQUFFLDBCQUNqQlYsWUFBWVUsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJOLGNBQWEsY0FBWTtJQUVqRSxJQUFNTyxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNWLFlBQVlRLFFBQVFYO0lBRXhELElBQUlZLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmpCLHNCQUFzQkMsWUFDekNpQix1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNSO1lBRTdFLElBQUlhLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCekIscUJBQXFCRSxZQUN2Q3dCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Y7WUFFN0UsSUFBSWlCLHFCQUFxQjtnQkFDdkIsSUFBTUUsWUFBWWhDLGVBQWVNLFlBQzNCMkIsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNOLGVBQ3pCTyxjQUFjRixrQkFDZEcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLGFBQWF0QjtnQkFFMUQsSUFBSXVCLGVBQWU7b0JBQ2pCLElBQU1FLFFBQVFDLGNBQUssQ0FBQ0Msb0NBQW9DLENBQUN0QixRQUFRRyxjQUFjYztvQkFFL0U1QixZQUFZa0MsUUFBUSxDQUFDSDtvQkFFckI5QixnQkFBZ0IsSUFBSTtnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGVBQWU7UUFDaEJHLGlCQUFpQkssdUJBQVksR0FDNUJULFlBQVltQyxJQUFJLENBQUUseUJBQ2hCbkMsWUFBWW1DLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiL0IsY0FBYSxZQUFVO0lBQy9ELENBQUM7SUFFREgsZ0JBQ0VELFlBQVlvQyxRQUFRLENBQUNyQyxhQUNuQkMsWUFBWW9DLFFBQVEsQ0FBQ3JDLFVBQVU7SUFFbkMsT0FBT0U7QUFDVCJ9