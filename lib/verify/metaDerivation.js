"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetaDerivation;
    }
});
var _metaproofStep = /*#__PURE__*/ _interop_require_default(require("../verify/metaproofStep"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metaproofStepNodesQuery = (0, _query.nodesQuery)("/metaDerivation/metaproofStep|lastMetaproofStep");
function verifyMetaDerivation(metaDerivationNode, substitutions, localContext) {
    var metaDerivationVerified;
    var metaproofStepNodes = metaproofStepNodesQuery(metaDerivationNode);
    metaDerivationVerified = metaproofStepNodes.every(function(metaproofStepNode) {
        var metaproofStepVerified = (0, _metaproofStep.default)(metaproofStepNode, substitutions, localContext);
        if (metaproofStepVerified) {
            return true;
        }
    });
    return metaDerivationVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi92ZXJpZnkvbWV0YXByb29mU3RlcFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhcHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YURlcml2YXRpb24vbWV0YXByb29mU3RlcHxsYXN0TWV0YXByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TWV0YURlcml2YXRpb24obWV0YURlcml2YXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFEZXJpdmF0aW9uVmVyaWZpZWQ7XG5cbiAgY29uc3QgbWV0YXByb29mU3RlcE5vZGVzID0gbWV0YXByb29mU3RlcE5vZGVzUXVlcnkobWV0YURlcml2YXRpb25Ob2RlKTtcblxuICBtZXRhRGVyaXZhdGlvblZlcmlmaWVkID0gbWV0YXByb29mU3RlcE5vZGVzLmV2ZXJ5KChtZXRhcHJvb2ZTdGVwTm9kZSkgPT4ge1xuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBWZXJpZmllZCA9IHZlcmlmeU1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRhRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeU1ldGFEZXJpdmF0aW9uIiwibWV0YXByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YURlcml2YXRpb25Ob2RlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsIm1ldGFEZXJpdmF0aW9uVmVyaWZpZWQiLCJtZXRhcHJvb2ZTdGVwTm9kZXMiLCJldmVyeSIsIm1ldGFwcm9vZlN0ZXBOb2RlIiwibWV0YXByb29mU3RlcFZlcmlmaWVkIiwidmVyaWZ5TWV0YXByb29mU3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7OztvRUFOUTtxQkFFTDs7Ozs7O0FBRTNCLElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQztBQUU1QixTQUFTRixxQkFBcUJHLGtCQUFrQixFQUFFQyxhQUFhLEVBQUVDLFlBQVk7SUFDMUYsSUFBSUM7SUFFSixJQUFNQyxxQkFBcUJOLHdCQUF3QkU7SUFFbkRHLHlCQUF5QkMsbUJBQW1CQyxLQUFLLENBQUMsU0FBQ0M7UUFDakQsSUFBTUMsd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ0YsbUJBQW1CTCxlQUFlQztRQUVwRixJQUFJSyx1QkFBdUI7WUFDekIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIn0=