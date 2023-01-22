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
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/theorem/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/theorem/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/theorem/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/theorem/supposition");
function verifyTheorem(theoremNode, fileContext) {
    var theoremVerified = false;
    fileContext.begin(theoremNode);
    var labelNodes = labelNodesQuery(theoremNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' theorem..."));
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
        fileContext.info("Verified the '".concat(labelsString, "' theorem."));
    }
    theoremVerified ? fileContext.complete(theoremNode) : fileContext.complete(theoremNode);
    return theoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL3Byb29mIVwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdGhlb3JlbS9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW0vY29uc2VxdWVuY2UhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi90aGVvcmVtL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUaGVvcmVtKHRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGhlb3JlbVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgZmlsZUNvbnRleHQuYmVnaW4odGhlb3JlbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyB0aGVvcmVtLi4uYCk7XG5cbiAgY29uc3QgbGFiZWxzID0gW10sXG4gICAgICAgIGxhYmVsc1ZlcmlmaWVkID0gdmVyaWZ5TGFiZWxzKGxhYmVsTm9kZXMsIGxhYmVscywgZmlsZUNvbnRleHQpO1xuXG4gIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbnNOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gc3VwcG9zaXRpb25Ob2Rlcy5ldmVyeSgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb25Ob2RlLCBzdXBwb3NpdGlvbnMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW5jZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlTm9kZSA9IGNvbnNlcXVlbmNlTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkodGhlb3JlbU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbnNlcXVlbmNlID0gZmlyc3QoY29uc2VxdWVuY2VzKSxcbiAgICAgICAgICAgICAgY29uc2VxdWVuY2UgPSBmaXJzdENvbnNlcXVlbmNlLCAvLy9cbiAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHZlcmlmeVByb29mKHByb29mTm9kZSwgY29uc2VxdWVuY2UsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7XG5cbiAgICAgICAgICB0aGVvcmVtVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoZW9yZW1WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oYFZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyB0aGVvcmVtLmApO1xuICB9XG5cbiAgdGhlb3JlbVZlcmlmaWVkID9cbiAgICBmaWxlQ29udGV4dC5jb21wbGV0ZSh0aGVvcmVtTm9kZSkgOlxuICAgICAgZmlsZUNvbnRleHQuY29tcGxldGUodGhlb3JlbU5vZGUpO1xuXG4gIHJldHVybiB0aGVvcmVtVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGhlb3JlbSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbmNlTm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwidGhlb3JlbU5vZGUiLCJmaWxlQ29udGV4dCIsInRoZW9yZW1WZXJpZmllZCIsImJlZ2luIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJwcm9vZkNvbnRleHQiLCJQcm9vZkNvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJkZWJ1ZyIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbk5vZGUiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJjb25zZXF1ZW5jZXMiLCJjb25zZXF1ZW5jZU5vZGUiLCJjb25zZXF1ZW5jZVZlcmlmaWVkIiwidmVyaWZ5Q29uc2VxdWVuY2UiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbmNlIiwiZmlyc3QiLCJjb25zZXF1ZW5jZSIsInByb29mVmVyaWZpZWQiLCJ2ZXJpZnlQcm9vZiIsInRoZW9yZW0iLCJUaGVvcmVtIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwiYWRkVGhlb3JlbSIsImluZm8iLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBd0JBOzs7NERBaEJKOzBEQUNJOzJEQUNDOzJEQUNBO2dFQUNLO2dFQUNBO3FCQUVSO3NCQUNRO3FCQUNROzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG1CQUM3QkMsdUJBQXVCSCxJQUFBQSxnQkFBUyxFQUFDLDBCQUNqQ0ksd0JBQXdCRixJQUFBQSxpQkFBVSxFQUFDO0FBRTFCLFNBQVNKLGNBQWNPLFdBQVcsRUFBRUMsV0FBVyxFQUFFO0lBQzlELElBQUlDLGtCQUFrQixLQUFLO0lBRTNCRCxZQUFZRSxLQUFLLENBQUNIO0lBRWxCLElBQU1JLGFBQWFSLGdCQUFnQkksY0FDN0JLLGVBQWVKLFlBQVlLLGFBQWEsQ0FBQ0YsYUFDekNHLGVBQWVDLGVBQVksQ0FBQ0MsZUFBZSxDQUFDUjtJQUVsREEsWUFBWVMsS0FBSyxDQUFDLEFBQUMsa0JBQThCLE9BQWJMLGNBQWE7SUFFakQsSUFBTU0sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVjtJQUV4RCxJQUFJVyxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJoQixzQkFBc0JDLGNBQ3pDZ0IsdUJBQXVCRCxpQkFBaUJFLEtBQUssQ0FBQyxTQUFDQyxpQkFBb0I7WUFDakUsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCSixjQUFjUDtZQUU3RSxJQUFJWSxxQkFBcUI7Z0JBQ3ZCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlILHNCQUFzQjtZQUN4QixJQUFNSyxlQUFlLEVBQUUsRUFDakJDLGtCQUFrQnhCLHFCQUFxQkUsY0FDdkN1QixzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJELGNBQWNkO1lBRTdFLElBQUlnQixxQkFBcUI7Z0JBQ3ZCLElBQU1FLFlBQVkvQixlQUFlTSxjQUMzQjBCLG1CQUFtQkMsSUFBQUEsWUFBSyxFQUFDTixlQUN6Qk8sY0FBY0Ysa0JBQ2RHLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxhQUFhckI7Z0JBRTFELElBQUlzQixlQUFlO29CQUNqQixJQUFNRSxVQUFVQyxnQkFBTyxDQUFDQyxvQ0FBb0MsQ0FBQ3RCLFFBQVFHLGNBQWNjO29CQUVuRjNCLFlBQVlpQyxVQUFVLENBQUNIO29CQUV2QjdCLGtCQUFrQixJQUFJO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSUEsaUJBQWlCO1FBQ25CRCxZQUFZa0MsSUFBSSxDQUFDLEFBQUMsaUJBQTZCLE9BQWI5QixjQUFhO0lBQ2pELENBQUM7SUFFREgsa0JBQ0VELFlBQVltQyxRQUFRLENBQUNwQyxlQUNuQkMsWUFBWW1DLFFBQVEsQ0FBQ3BDLFlBQVk7SUFFckMsT0FBT0U7QUFDVCJ9