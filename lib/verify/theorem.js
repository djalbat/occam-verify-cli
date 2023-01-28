"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTheorem;
    }
});
var _theorem = /*#__PURE__*/ _interopRequireDefault(require("../theorem"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../verify/proof"));
var _proof1 = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("./supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("./consequence"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/theorem/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/theorem/supposition");
function verifyTheorem(theoremNode, fileContext) {
    var theoremVerified = false;
    var labelNodes = labelNodesQuery(theoremNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' theorem..."), theoremNode);
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(theoremNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequences = [], consequenceNode = consequenceNodeQuery(theoremNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var proofNode = proofNodeQuery(theoremNode), firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, proofVerified = (0, _proof.default)(proofNode, consequence, proofContext);
                if (proofVerified) {
                    var theorem = _theorem.default.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);
                    fileContext.addTheorem(theorem);
                    theoremVerified = true;
                }
            }
        }
    }
    if (theoremVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' theorem."), theoremNode);
    }
    return theoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbS9wcm9vZiFcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdGhlb3JlbS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGhlb3JlbSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW1WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyB0aGVvcmVtLi4uYCwgdGhlb3JlbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uTm9kZSwgc3VwcG9zaXRpb25zLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVuY2VzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW5jZU5vZGUgPSBjb25zZXF1ZW5jZU5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuXG4gICAgICAgICAgdGhlb3JlbVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGVvcmVtVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS5gLCB0aGVvcmVtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRoZW9yZW0iLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsInRoZW9yZW1Ob2RlIiwiZmlsZUNvbnRleHQiLCJ0aGVvcmVtVmVyaWZpZWQiLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbmNlcyIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW5jZSIsInByb29mTm9kZSIsImZpcnN0Q29uc2VxdWVuY2UiLCJmaXJzdCIsImNvbnNlcXVlbmNlIiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwidGhlb3JlbSIsIlRoZW9yZW0iLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UiLCJhZGRUaGVvcmVtIiwiaW5mbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBd0JBOzs7NERBZko7MERBQ0k7MkRBQ0M7MkRBQ0E7Z0VBQ0s7Z0VBQ0E7cUJBRVI7cUJBQ2dCOzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG1CQUM3QkMsdUJBQXVCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUNqQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLGNBQWNPLFdBQVcsRUFBRUMsV0FBVyxFQUFFO0lBQzlELElBQUlDLGtCQUFrQixLQUFLO0lBRTNCLElBQU1DLGFBQWFQLGdCQUFnQkksY0FDN0JJLGVBQWVILFlBQVlJLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVDLGVBQVksQ0FBQ0MsZUFBZSxDQUFDUDtJQUVsREEsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWEsaUJBQWVKO0lBRWhFLElBQU1VLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVQ7SUFFeEQsSUFBSVUsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CZixzQkFBc0JDLGNBQ3pDZSx1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCdkIscUJBQXFCRSxjQUN2Q3NCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Q7WUFFN0UsSUFBSWdCLHFCQUFxQjtnQkFDdkIsSUFBTUUsWUFBWTlCLGVBQWVNLGNBQzNCeUIsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNOLGVBQ3pCTyxjQUFjRixrQkFDZEcsZ0JBQWdCQyxJQUFBQSxjQUFXLEVBQUNMLFdBQVdHLGFBQWFyQjtnQkFFMUQsSUFBSXNCLGVBQWU7b0JBQ2pCLElBQU1FLFVBQVVDLGdCQUFPLENBQUNDLG9DQUFvQyxDQUFDdEIsUUFBUUcsY0FBY2M7b0JBRW5GMUIsWUFBWWdDLFVBQVUsQ0FBQ0g7b0JBRXZCNUIsa0JBQWtCLElBQUk7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxpQkFBaUI7UUFDbkJELFlBQVlpQyxJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjlCLGNBQWEsZUFBYUo7SUFDOUQsQ0FBQztJQUVELE9BQU9FO0FBQ1QifQ==