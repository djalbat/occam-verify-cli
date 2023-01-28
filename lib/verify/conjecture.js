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
var _conjecture = /*#__PURE__*/ _interopRequireDefault(require("../conjecture"));
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
var proofNodeQuery = (0, _query.nodeQuery)("/conjecture/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/conjecture/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/conjecture/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/conjecture/supposition");
function verifyConjecture(conjectureNode, fileContext) {
    var conjectureVerified = false;
    var labelNodes = labelNodesQuery(conjectureNode), labelsString = fileContext.nodesAsString(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    fileContext.debug(conjectureNode, "Verifying the '".concat(labelsString, "' conjecture..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(conjectureNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequences = [], consequenceNode = consequenceNodeQuery(conjectureNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var proofNode = proofNodeQuery(conjectureNode), firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence; ///
                (0, _proof.default)(proofNode, consequence, proofContext);
                var conjecture = _conjecture.default.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);
                fileContext.addConjecture(conjecture);
                conjectureVerified = true;
            }
        }
    }
    if (conjectureVerified) {
        fileContext.info(conjectureNode, "Verified the '".concat(labelsString, "' conjecture."));
    }
    return conjectureVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvY29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5U3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCB2ZXJpZnlDb25zZXF1ZW5jZSBmcm9tIFwiLi9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uamVjdHVyZS9wcm9vZiFcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2NvbmplY3R1cmUvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlL2NvbnNlcXVlbmNlIVwiKSxcbiAgICAgIHN1cHBvc2l0aW9uc05vZGVRdWVyeSA9IG5vZGVzUXVlcnkoXCIvY29uamVjdHVyZS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5Q29uamVjdHVyZShjb25qZWN0dXJlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGNvbmplY3R1cmVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkoY29uamVjdHVyZU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC5kZWJ1Zyhjb25qZWN0dXJlTm9kZSwgYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgY29uamVjdHVyZS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHN1cHBvc2l0aW9uTm9kZXMuZXZlcnkoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uTm9kZSwgc3VwcG9zaXRpb25zLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVuY2VzID0gW10sXG4gICAgICAgICAgICBjb25zZXF1ZW5jZU5vZGUgPSBjb25zZXF1ZW5jZU5vZGVRdWVyeShjb25qZWN0dXJlTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW5jZVZlcmlmaWVkID0gdmVyaWZ5Q29uc2VxdWVuY2UoY29uc2VxdWVuY2VOb2RlLCBjb25zZXF1ZW5jZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChjb25zZXF1ZW5jZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KGNvbmplY3R1cmVOb2RlKSxcbiAgICAgICAgICAgICAgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZTsgLy8vXG5cbiAgICAgICAgdmVyaWZ5UHJvb2YocHJvb2ZOb2RlLCBjb25zZXF1ZW5jZSwgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kQ29uc2VxdWVuY2UobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbmNlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuXG4gICAgICAgIGNvbmplY3R1cmVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmplY3R1cmVWZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmluZm8oY29uamVjdHVyZU5vZGUsIGBWZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgY29uamVjdHVyZS5gKTtcbiAgfVxuXG4gIHJldHVybiBjb25qZWN0dXJlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5Q29uamVjdHVyZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbmNlTm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGUiLCJmaWxlQ29udGV4dCIsImNvbmplY3R1cmVWZXJpZmllZCIsImxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwicHJvb2ZDb250ZXh0IiwiUHJvb2ZDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZGVidWciLCJsYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25Ob2RlIiwic3VwcG9zaXRpb25WZXJpZmllZCIsInZlcmlmeVN1cHBvc2l0aW9uIiwiY29uc2VxdWVuY2VzIiwiY29uc2VxdWVuY2VOb2RlIiwiY29uc2VxdWVuY2VWZXJpZmllZCIsInZlcmlmeUNvbnNlcXVlbmNlIiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW5jZSIsImZpcnN0IiwiY29uc2VxdWVuY2UiLCJ2ZXJpZnlQcm9vZiIsImNvbmplY3R1cmUiLCJDb25qZWN0dXJlIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlIiwiYWRkQ29uamVjdHVyZSIsImluZm8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXdCQTs7OytEQWZEOzBEQUNDOzJEQUNDOzJEQUNBO2dFQUNLO2dFQUNBO3FCQUVSO3FCQUNnQjs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxzQkFDN0JDLHVCQUF1QkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDakNJLHdCQUF3QkYsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTSixpQkFBaUJPLGNBQWMsRUFBRUMsV0FBVyxFQUFFO0lBQ3BFLElBQUlDLHFCQUFxQixLQUFLO0lBRTlCLElBQU1DLGFBQWFQLGdCQUFnQkksaUJBQzdCSSxlQUFlSCxZQUFZSSxhQUFhLENBQUNGLGFBQ3pDRyxlQUFlQyxlQUFZLENBQUNDLGVBQWUsQ0FBQ1A7SUFFbERBLFlBQVlRLEtBQUssQ0FBQ1QsZ0JBQWdCLEFBQUMsa0JBQThCLE9BQWJJLGNBQWE7SUFFakUsSUFBTU0sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVCxZQUFZTyxRQUFRVDtJQUV4RCxJQUFJVSxnQkFBZ0I7UUFDbEIsSUFBTUUsZUFBZSxFQUFFLEVBQ2pCQyxtQkFBbUJmLHNCQUFzQkMsaUJBQ3pDZSx1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCdkIscUJBQXFCRSxpQkFDdkNzQixzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJELGNBQWNkO1lBRTdFLElBQUlnQixxQkFBcUI7Z0JBQ3ZCLElBQU1FLFlBQVk5QixlQUFlTSxpQkFDM0J5QixtQkFBbUJDLElBQUFBLFlBQUssRUFBQ04sZUFDekJPLGNBQWNGLGtCQUFrQixHQUFHO2dCQUV6Q0csSUFBQUEsY0FBVyxFQUFDSixXQUFXRyxhQUFhckI7Z0JBRXBDLElBQU11QixhQUFhQyxtQkFBVSxDQUFDQyxvQ0FBb0MsQ0FBQ3JCLFFBQVFHLGNBQWNjO2dCQUV6RjFCLFlBQVkrQixhQUFhLENBQUNIO2dCQUUxQjNCLHFCQUFxQixJQUFJO1lBQzNCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLG9CQUFvQjtRQUN0QkQsWUFBWWdDLElBQUksQ0FBQ2pDLGdCQUFnQixBQUFDLGlCQUE2QixPQUFiSSxjQUFhO0lBQ2pFLENBQUM7SUFFRCxPQUFPRjtBQUNUIn0=