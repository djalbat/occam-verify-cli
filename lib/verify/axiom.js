"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyAxiom;
    }
});
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../axiom"));
var _proof = /*#__PURE__*/ _interopRequireDefault(require("../context/proof"));
var _labels = /*#__PURE__*/ _interopRequireDefault(require("../verify/labels"));
var _supposition = /*#__PURE__*/ _interopRequireDefault(require("../verify/supposition"));
var _consequence = /*#__PURE__*/ _interopRequireDefault(require("../verify/consequence"));
var _array = require("../utilities/array");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var labelNodesQuery = (0, _query.nodesQuery)("/axiom/label"), consequenceNodeQuery = (0, _query.nodeQuery)("/axiom/consequence!"), suppositionsNodeQuery = (0, _query.nodesQuery)("/axiom/supposition");
function verifyAxiom(axiomNode, fileContext) {
    var axiomVerified = false;
    fileContext.begin(axiomNode);
    var labelNodes = labelNodesQuery(axiomNode), labelsString = (0, _string.nodesAsString)(labelNodes), proofContext = _proof.default.fromFileContext(fileContext);
    fileContext.debug("Verifying the '".concat(labelsString, "' axiom..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var suppositions = [], suppositionNodes = suppositionsNodeQuery(axiomNode), suppositionsVerified = suppositionNodes.every(function(suppositionNode) {
            var suppositionVerified = (0, _supposition.default)(suppositionNode, suppositions, proofContext);
            if (suppositionVerified) {
                return true;
            }
        });
        if (suppositionsVerified) {
            var consequences = [], consequenceNode = consequenceNodeQuery(axiomNode), consequenceVerified = (0, _consequence.default)(consequenceNode, consequences, proofContext);
            if (consequenceVerified) {
                var firstConsequence = (0, _array.first)(consequences), consequence = firstConsequence, axiom = _axiom.default.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);
                fileContext.addAxiom(axiom);
                axiomVerified = true;
            }
        }
    }
    if (axiomVerified) {
        fileContext.info("Verified the '".concat(labelsString, "' axiom."));
    }
    axiomVerified ? fileContext.complete(axiomNode) : fileContext.complete(axiomNode);
    return axiomVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBQcm9vZkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcHJvb2ZcIjtcbmltcG9ydCB2ZXJpZnlMYWJlbHMgZnJvbSBcIi4uL3ZlcmlmeS9sYWJlbHNcIjtcbmltcG9ydCB2ZXJpZnlTdXBwb3NpdGlvbiBmcm9tIFwiLi4vdmVyaWZ5L3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVuY2UgZnJvbSBcIi4uL3ZlcmlmeS9jb25zZXF1ZW5jZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2F4aW9tL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb20vY29uc2VxdWVuY2UhXCIpLFxuICAgICAgc3VwcG9zaXRpb25zTm9kZVF1ZXJ5ID0gbm9kZXNRdWVyeShcIi9heGlvbS9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5QXhpb20oYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgYXhpb21WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGZpbGVDb250ZXh0LmJlZ2luKGF4aW9tTm9kZSk7XG5cbiAgY29uc3QgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShheGlvbU5vZGUpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBub2Rlc0FzU3RyaW5nKGxhYmVsTm9kZXMpLFxuICAgICAgICBwcm9vZkNvbnRleHQgPSBQcm9vZkNvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gIGNvbnN0IGxhYmVscyA9IFtdLFxuICAgICAgICBsYWJlbHNWZXJpZmllZCA9IHZlcmlmeUxhYmVscyhsYWJlbE5vZGVzLCBsYWJlbHMsIGZpbGVDb250ZXh0KTtcblxuICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25zTm9kZVF1ZXJ5KGF4aW9tTm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSBzdXBwb3NpdGlvbk5vZGVzLmV2ZXJ5KChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbk5vZGUsIHN1cHBvc2l0aW9ucywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbmNlcyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVuY2VOb2RlID0gY29uc2VxdWVuY2VOb2RlUXVlcnkoYXhpb21Ob2RlKSxcbiAgICAgICAgICAgIGNvbnNlcXVlbmNlVmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW5jZShjb25zZXF1ZW5jZU5vZGUsIGNvbnNlcXVlbmNlcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbmNlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb25zZXF1ZW5jZSA9IGZpcnN0KGNvbnNlcXVlbmNlcyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbmNlID0gZmlyc3RDb25zZXF1ZW5jZSwgLy8vXG4gICAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZENvbnNlcXVlbmNlKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW5jZSk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICAgIGF4aW9tVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChheGlvbVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGF4aW9tLmApO1xuICB9XG5cbiAgYXhpb21WZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUoYXhpb21Ob2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShheGlvbU5vZGUpO1xuXG4gIHJldHVybiBheGlvbVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUF4aW9tIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlIiwiZmlsZUNvbnRleHQiLCJheGlvbVZlcmlmaWVkIiwiYmVnaW4iLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uTm9kZSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImNvbnNlcXVlbmNlcyIsImNvbnNlcXVlbmNlTm9kZSIsImNvbnNlcXVlbmNlVmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW5jZSIsImZpcnN0Q29uc2VxdWVuY2UiLCJmaXJzdCIsImNvbnNlcXVlbmNlIiwiYXhpb20iLCJBeGlvbSIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmRDb25zZXF1ZW5jZSIsImFkZEF4aW9tIiwiaW5mbyIsImNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUF3QkE7OzswREFkTjswREFDTzsyREFDQTtnRUFDSztnRUFDQTtxQkFFUjtzQkFDUTtxQkFDUTs7Ozs7O0FBRXRDLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxpQkFDN0JDLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDakNDLHdCQUF3QkgsSUFBQUEsaUJBQVUsRUFBQztBQUUxQixTQUFTRixZQUFZTSxTQUFTLEVBQUVDLFdBQVcsRUFBRTtJQUMxRCxJQUFJQyxnQkFBZ0IsS0FBSztJQUV6QkQsWUFBWUUsS0FBSyxDQUFDSDtJQUVsQixJQUFNSSxhQUFhVCxnQkFBZ0JLLFlBQzdCSyxlQUFlQyxJQUFBQSxxQkFBYSxFQUFDRixhQUM3QkcsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNSO0lBRWxEQSxZQUFZUyxLQUFLLENBQUMsQUFBQyxrQkFBOEIsT0FBYkwsY0FBYTtJQUVqRCxJQUFNTSxTQUFTLEVBQUUsRUFDWEMsaUJBQWlCQyxJQUFBQSxlQUFZLEVBQUNULFlBQVlPLFFBQVFWO0lBRXhELElBQUlXLGdCQUFnQjtRQUNsQixJQUFNRSxlQUFlLEVBQUUsRUFDakJDLG1CQUFtQmhCLHNCQUFzQkMsWUFDekNnQix1QkFBdUJELGlCQUFpQkUsS0FBSyxDQUFDLFNBQUNDLGlCQUFvQjtZQUNqRSxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFpQixFQUFDRixpQkFBaUJKLGNBQWNQO1lBRTdFLElBQUlZLHFCQUFxQjtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO1FBRU4sSUFBSUgsc0JBQXNCO1lBQ3hCLElBQU1LLGVBQWUsRUFBRSxFQUNqQkMsa0JBQWtCekIscUJBQXFCRyxZQUN2Q3VCLHNCQUFzQkMsSUFBQUEsb0JBQWlCLEVBQUNGLGlCQUFpQkQsY0FBY2Q7WUFFN0UsSUFBSWdCLHFCQUFxQjtnQkFDdkIsSUFBTUUsbUJBQW1CQyxJQUFBQSxZQUFLLEVBQUNMLGVBQ3pCTSxjQUFjRixrQkFDZEcsUUFBUUMsY0FBSyxDQUFDQyxvQ0FBb0MsQ0FBQ25CLFFBQVFHLGNBQWNhO2dCQUUvRTFCLFlBQVk4QixRQUFRLENBQUNIO2dCQUVyQjFCLGdCQUFnQixJQUFJO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUlBLGVBQWU7UUFDakJELFlBQVkrQixJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYjNCLGNBQWE7SUFDakQsQ0FBQztJQUVESCxnQkFDRUQsWUFBWWdDLFFBQVEsQ0FBQ2pDLGFBQ25CQyxZQUFZZ0MsUUFBUSxDQUFDakMsVUFBVTtJQUVuQyxPQUFPRTtBQUNUIn0=