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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGhlb3JlbS9wcm9vZiFcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3RoZW9yZW0vbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdGhlb3JlbS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGhlb3JlbSh0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRoZW9yZW1WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKHRoZW9yZW1Ob2RlKTtcblxuICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uTm9kZSwgc3VwcG9zaXRpb25zLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVuY2VzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW5jZU5vZGUgPSBjb25zZXF1ZW5jZU5vZGVRdWVyeSh0aGVvcmVtTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHRoZW9yZW1Ob2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIGNvbnNlcXVlbmNlLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuXG4gICAgICAgICAgdGhlb3JlbVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0aGVvcmVtVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5pbmZvKGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgdGhlb3JlbS5gKTtcbiAgfVxuXG4gIHRoZW9yZW1WZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUodGhlb3JlbU5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LmNvbXBsZXRlKHRoZW9yZW1Ob2RlKTtcblxuICByZXR1cm4gdGhlb3JlbVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRoZW9yZW0iLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW5jZU5vZGVRdWVyeSIsInN1cHBvc2l0aW9uc05vZGVRdWVyeSIsInRoZW9yZW1Ob2RlIiwiZmlsZUNvbnRleHQiLCJ0aGVvcmVtVmVyaWZpZWQiLCJiZWdpbiIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY29uc2VxdWVuY2VzIiwiY29uc2VxdWVuY2VOb2RlIiwiY29uc2VxdWVuY2VWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbmNlIiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW5jZSIsImZpcnN0IiwiY29uc2VxdWVuY2UiLCJwcm9vZlZlcmlmaWVkIiwidmVyaWZ5UHJvb2YiLCJ0aGVvcmVtIiwiVGhlb3JlbSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsImFkZFRoZW9yZW0iLCJpbmZvIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OzREQWZKOzBEQUNJOzJEQUNDOzJEQUNBO2dFQUNLO2dFQUNBO3FCQUVSO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxtQkFDN0JDLHVCQUF1QkgsSUFBQUEsZ0JBQVMsRUFBQywwQkFDakNJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTSixjQUFjTyxXQUFXLEVBQUVDLFdBQVcsRUFBRTtJQUM5RCxJQUFJQyxrQkFBa0IsS0FBSztJQUUzQkQsWUFBWUUsS0FBSyxDQUFDSDtJQUVsQixJQUFNSSxhQUFhUixnQkFBZ0JJLGNBQzdCSyxlQUFlSixZQUFZSyxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxlQUFZLENBQUNDLGVBQWUsQ0FBQ1I7SUFFbERBLFlBQVlTLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTCxjQUFhO0lBRWpELElBQU1NLFNBQVMsRUFBRSxFQUNYQyxpQkFBaUJDLElBQUFBLGVBQVksRUFBQ1QsWUFBWU8sUUFBUVY7SUFFeEQsSUFBSVcsZ0JBQWdCO1FBQ2xCLElBQU1FLGVBQWUsRUFBRSxFQUNqQkMsbUJBQW1CaEIsc0JBQXNCQyxjQUN6Q2dCLHVCQUF1QkQsaUJBQWlCRSxLQUFLLENBQUMsU0FBQ0MsaUJBQW9CO1lBQ2pFLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkosY0FBY1A7WUFFN0UsSUFBSVkscUJBQXFCO2dCQUN2QixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7UUFFTixJQUFJSCxzQkFBc0I7WUFDeEIsSUFBTUssZUFBZSxFQUFFLEVBQ2pCQyxrQkFBa0J4QixxQkFBcUJFLGNBQ3ZDdUIsc0JBQXNCQyxJQUFBQSxvQkFBaUIsRUFBQ0YsaUJBQWlCRCxjQUFjZDtZQUU3RSxJQUFJZ0IscUJBQXFCO2dCQUN2QixJQUFNRSxZQUFZL0IsZUFBZU0sY0FDM0IwQixtQkFBbUJDLElBQUFBLFlBQUssRUFBQ04sZUFDekJPLGNBQWNGLGtCQUNkRyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ0wsV0FBV0csYUFBYXJCO2dCQUUxRCxJQUFJc0IsZUFBZTtvQkFDakIsSUFBTUUsVUFBVUMsZ0JBQU8sQ0FBQ0Msb0NBQW9DLENBQUN0QixRQUFRRyxjQUFjYztvQkFFbkYzQixZQUFZaUMsVUFBVSxDQUFDSDtvQkFFdkI3QixrQkFBa0IsSUFBSTtnQkFDeEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGlCQUFpQjtRQUNuQkQsWUFBWWtDLElBQUksQ0FBQyxBQUFDLGlCQUE2QixPQUFiOUIsY0FBYTtJQUNqRCxDQUFDO0lBRURILGtCQUNFRCxZQUFZbUMsUUFBUSxDQUFDcEMsZUFDbkJDLFlBQVltQyxRQUFRLENBQUNwQyxZQUFZO0lBRXJDLE9BQU9FO0FBQ1QifQ==