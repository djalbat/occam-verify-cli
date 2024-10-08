"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetatheorem;
    }
});
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../metatheorem"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/metatheorem/label"), proofNodeQuery = (0, _query.nodeQuery)("/metatheorem/proof!"), consequentNodeQuery = (0, _query.nodeQuery)("/metatheorem/consequent!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/metatheorem/supposition");
function verifyMetatheorem(metatheoremNode, fileContext) {
    var metatheoremVerified = false;
    var labelNodes = labelNodesQuery(metatheoremNode), labelsString = fileContext.nodesAsString(labelNodes);
    fileContext.trace("Verifying the '".concat(labelsString, "' metatheorem..."), metatheoremNode);
    var labels = [], labelsVerified = verifyLabels(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var localContext = _local.default.fromFileContext(fileContext), suppositions = [], suppositionNodes = suppositionsNodeQuery(metatheoremNode), suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);
        if (suppositionsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(metatheoremNode), consequentVerified = verifyConsequent(consequentNode, consequents, localContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(metatheoremNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, substitutions = _substitutions.default.fromNothing(), statementNode = consequent.getStatementNode(), proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);
                if (proofVerified) {
                    var metatheorem = _metatheorem.default.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);
                    fileContext.addMetatheorem(metatheorem);
                    metatheoremVerified = true;
                }
            }
        }
    }
    if (metatheoremVerified) {
        fileContext.debug("...verified the '".concat(labelsString, "' metatheorem."), metatheoremNode);
    }
    return metatheoremVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXRoZW9yZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgTWV0YXRoZW9yZW0gZnJvbSBcIi4uL21ldGF0aGVvcmVtXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuLy8gaW1wb3J0IHZlcmlmeUNvbnNlcXVlbnQgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW50XCI7XG4vLyBpbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb25zIGZyb20gXCIuLi92ZXJpZnkvc3VwcG9zaXRpb25zXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGF0aGVvcmVtL2xhYmVsXCIpLFxuICAgICAgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW0vcHJvb2YhXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbS9jb25zZXF1ZW50IVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YXRoZW9yZW0vc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IG1ldGF0aGVvcmVtVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVzQXNTdHJpbmcobGFiZWxOb2Rlcyk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbWV0YXRoZW9yZW0uLi5gLCBtZXRhdGhlb3JlbU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25Ob2Rlcywgc3VwcG9zaXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG1ldGF0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShtZXRhdGhlb3JlbU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbnNlcXVlbnQgPSBmaXJzdChjb25zZXF1ZW50cyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSBmaXJzdENvbnNlcXVlbnQsIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gY29uc2VxdWVudC5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSk7XG5cbiAgICAgICAgICBtZXRhdGhlb3JlbVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRhdGhlb3JlbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBtZXRhdGhlb3JlbS5gLCBtZXRhdGhlb3JlbU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF0aGVvcmVtVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXRoZW9yZW0iLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlIiwiZmlsZUNvbnRleHQiLCJtZXRhdGhlb3JlbVZlcmlmaWVkIiwibGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJ0cmFjZSIsImxhYmVscyIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiY29uc2VxdWVudHMiLCJjb25zZXF1ZW50Tm9kZSIsImNvbnNlcXVlbnRWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbnQiLCJwcm9vZk5vZGUiLCJmaXJzdENvbnNlcXVlbnQiLCJmaXJzdCIsImNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5UHJvb2YiLCJtZXRhdGhlb3JlbSIsIk1ldGF0aGVvcmVtIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJhZGRNZXRhdGhlb3JlbSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUF3QkE7OztrRUFkQTs0REFDQztvRUFDQztxQkFJSjtxQkFDZ0I7Ozs7OztBQUV0QyxJQUFNQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsdUJBQzdCQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzNCQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUMsNkJBQ2hDRSx3QkFBd0JKLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsU0FBU0Ysa0JBQWtCTyxlQUFlLEVBQUVDLFdBQVc7SUFDcEUsSUFBSUMsc0JBQXNCO0lBRTFCLElBQU1DLGFBQWFULGdCQUFnQk0sa0JBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGO0lBRS9DRixZQUFZSyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkYsY0FBYSxxQkFBbUJKO0lBRXBFLElBQU1PLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLGFBQWFOLFlBQVlJLFFBQVFOO0lBRXhELElBQUlPLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1gsY0FDNUNZLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CZixzQkFBc0JDLGtCQUN6Q2UsdUJBQXVCQyxtQkFBbUJGLGtCQUFrQkQsY0FBY0g7UUFFaEYsSUFBSUssc0JBQXNCO1lBQ3hCLElBQU1FLGNBQWMsRUFBRSxFQUNoQkMsaUJBQWlCcEIsb0JBQW9CRSxrQkFDckNtQixxQkFBcUJDLGlCQUFpQkYsZ0JBQWdCRCxhQUFhUDtZQUV6RSxJQUFJUyxvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVl6QixlQUFlSSxrQkFDM0JzQixrQkFBa0JDLElBQUFBLFlBQUssRUFBQ04sY0FDeEJPLGFBQWFGLGlCQUNiRyxnQkFBZ0JDLHNCQUFhLENBQUNDLFdBQVcsSUFDekNDLGdCQUFnQkosV0FBV0ssZ0JBQWdCLElBQzNDQyxnQkFBZ0JDLFlBQVlWLFdBQVdPLGVBQWVILGVBQWVmO2dCQUUzRSxJQUFJb0IsZUFBZTtvQkFDakIsSUFBTUUsY0FBY0Msb0JBQVcsQ0FBQ0MsMkRBQTJELENBQUMzQixRQUFRTSxjQUFjVyxZQUFZQyxlQUFleEI7b0JBRTdJQSxZQUFZa0MsY0FBYyxDQUFDSDtvQkFFM0I5QixzQkFBc0I7Z0JBQ3hCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsSUFBSUEscUJBQXFCO1FBQ3ZCRCxZQUFZbUMsS0FBSyxDQUFDLEFBQUMsb0JBQWdDLE9BQWJoQyxjQUFhLG1CQUFpQko7SUFDdEU7SUFFQSxPQUFPRTtBQUNUIn0=