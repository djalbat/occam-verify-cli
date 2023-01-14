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
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../step/metaproof"));
var _qualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/metastatement/qualified"));
var _unqualified = /*#__PURE__*/ _interopRequireDefault(require("../verify/metastatement/unqualified"));
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var childNodesQuery = (0, _query.nodesQuery)("/metaDerivation|metaSubDerivation/*"), metastatementNodeQuery = (0, _query.nodeQuery)("/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
function verifyMetaDerivation(metaDerivationNode, metaproofContext) {
    var metaDerivationVerified;
    metaproofContext.begin(metaDerivationNode);
    var childNodes = childNodesQuery(metaDerivationNode);
    metaDerivationVerified = childNodes.every(function(childNode) {
        var childVerified = verifyChild(childNode, metaproofContext);
        if (childVerified) {
            return true;
        }
    });
    metaDerivationVerified ? metaproofContext.complete(metaDerivationNode) : metaproofContext.halt(metaDerivationNode);
    return metaDerivationVerified;
}
function verifyChild(childNode, metaproofContext) {
    var childVerified;
    var childNodeRuleName = childNode.getRuleName();
    switch(childNodeRuleName){
        case _ruleNames.QUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var qualifiedMetastatementNode = childNode, qualifiedMetastatementVerified = (0, _qualified.default)(qualifiedMetastatementNode, metaproofContext);
                if (qualifiedMetastatementVerified) {
                    var metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode), metaproofStep = _metaproof.default.fromMetastatementNode(metastatementNode);
                    metaproofContext.addMetaproofStep(metaproofStep);
                    childVerified = qualifiedMetastatementVerified; ///
                }
                break;
            }
        case _ruleNames.UNQUALIFIED_METASTATEMENT_RULE_NAME:
            {
                var unqualifiedMetastatementNode = childNode, unqualifiedMetastatementVerified = (0, _unqualified.default)(unqualifiedMetastatementNode, metaproofContext);
                if (unqualifiedMetastatementVerified) {
                    var metastatementNode1 = metastatementNodeQuery(unqualifiedMetastatementNode), metaproofStep1 = _metaproof.default.fromMetastatementNode(metastatementNode1);
                    metaproofContext.addMetaproofStep(metaproofStep1);
                    childVerified = true;
                }
                break;
            }
    }
    return childVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YURlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhcHJvb2ZTdGVwIGZyb20gXCIuLi9zdGVwL21ldGFwcm9vZlwiO1xuaW1wb3J0IHZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgZnJvbSBcIi4uL3ZlcmlmeS9tZXRhc3RhdGVtZW50L3F1YWxpZmllZFwiO1xuaW1wb3J0IHZlcmlmeVVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCBmcm9tIFwiLi4vdmVyaWZ5L21ldGFzdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FLCBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgY2hpbGROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhRGVyaXZhdGlvbnxtZXRhU3ViRGVyaXZhdGlvbi8qXCIpLFxuICAgICAgbWV0YXN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5TWV0YURlcml2YXRpb24obWV0YURlcml2YXRpb25Ob2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBtZXRhRGVyaXZhdGlvblZlcmlmaWVkO1xuXG4gIG1ldGFwcm9vZkNvbnRleHQuYmVnaW4obWV0YURlcml2YXRpb25Ob2RlKTtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc1F1ZXJ5KG1ldGFEZXJpdmF0aW9uTm9kZSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkVmVyaWZpZWQgPSB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKGNoaWxkVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgbWV0YURlcml2YXRpb25WZXJpZmllZCA/XG4gICAgbWV0YXByb29mQ29udGV4dC5jb21wbGV0ZShtZXRhRGVyaXZhdGlvbk5vZGUpIDpcbiAgICAgIG1ldGFwcm9vZkNvbnRleHQuaGFsdChtZXRhRGVyaXZhdGlvbk5vZGUpO1xuXG4gIHJldHVybiBtZXRhRGVyaXZhdGlvblZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlDaGlsZChjaGlsZE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGNoaWxkVmVyaWZpZWQ7XG5cbiAgY29uc3QgY2hpbGROb2RlUnVsZU5hbWUgPSBjaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBzd2l0Y2ggKGNoaWxkTm9kZVJ1bGVOYW1lKSB7XG4gICAgY2FzZSBRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IHtcbiAgICAgIGNvbnN0IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBxdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlRdWFsaWZpZWRNZXRhc3RhdGVtZW50KHF1YWxpZmllZE1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKHF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkTWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBtZXRhcHJvb2ZTdGVwID0gTWV0YXByb29mU3RlcC5mcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIG1ldGFwcm9vZkNvbnRleHQuYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKTtcblxuICAgICAgICBjaGlsZFZlcmlmaWVkID0gcXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkOyAvLy9cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBVTlFVQUxJRklFRF9NRVRBU1RBVEVNRU5UX1JVTEVfTkFNRToge1xuICAgICAgY29uc3QgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSA9IGNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICh1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIG1ldGFwcm9vZlN0ZXAgPSBNZXRhcHJvb2ZTdGVwLmZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbWV0YXByb29mQ29udGV4dC5hZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApO1xuXG4gICAgICAgIGNoaWxkVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhRGVyaXZhdGlvbiIsImNoaWxkTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YURlcml2YXRpb25Ob2RlIiwibWV0YXByb29mQ29udGV4dCIsIm1ldGFEZXJpdmF0aW9uVmVyaWZpZWQiLCJiZWdpbiIsImNoaWxkTm9kZXMiLCJldmVyeSIsImNoaWxkTm9kZSIsImNoaWxkVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZCIsImNvbXBsZXRlIiwiaGFsdCIsImNoaWxkTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJRVUFMSUZJRURfTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJxdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZE1ldGFzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVF1YWxpZmllZE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZlN0ZXAiLCJNZXRhcHJvb2ZTdGVwIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIlVOUVVBTElGSUVEX01FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwidW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Tm9kZSIsInVucXVhbGlmaWVkTWV0YXN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5VW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OzhEQVZFOzhEQUNlO2dFQUNFO3FCQUVMO3lCQUNpRDs7Ozs7O0FBRXZGLElBQU1DLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyx3Q0FDN0JDLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixTQUFTSixxQkFBcUJLLGtCQUFrQixFQUFFQyxnQkFBZ0IsRUFBRTtJQUNqRixJQUFJQztJQUVKRCxpQkFBaUJFLEtBQUssQ0FBQ0g7SUFFdkIsSUFBTUksYUFBYVIsZ0JBQWdCSTtJQUVuQ0UseUJBQXlCRSxXQUFXQyxLQUFLLENBQUMsU0FBQ0MsV0FBYztRQUN2RCxJQUFNQyxnQkFBZ0JDLFlBQVlGLFdBQVdMO1FBRTdDLElBQUlNLGVBQWU7WUFDakIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUFMLHlCQUNFRCxpQkFBaUJRLFFBQVEsQ0FBQ1Qsc0JBQ3hCQyxpQkFBaUJTLElBQUksQ0FBQ1YsbUJBQW1CO0lBRTdDLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTTSxZQUFZRixTQUFTLEVBQUVMLGdCQUFnQixFQUFFO0lBQ2hELElBQUlNO0lBRUosSUFBTUksb0JBQW9CTCxVQUFVTSxXQUFXO0lBRS9DLE9BQVFEO1FBQ04sS0FBS0UsNENBQWlDO1lBQUU7Z0JBQ3RDLElBQU1DLDZCQUE2QlIsV0FDN0JTLGlDQUFpQ0MsSUFBQUEsa0JBQTRCLEVBQUNGLDRCQUE0QmI7Z0JBRWhHLElBQUljLGdDQUFnQztvQkFDbEMsSUFBTUUsb0JBQW9CbkIsdUJBQXVCZ0IsNkJBQzNDSSxnQkFBZ0JDLGtCQUFhLENBQUNDLHFCQUFxQixDQUFDSDtvQkFFMURoQixpQkFBaUJvQixnQkFBZ0IsQ0FBQ0g7b0JBRWxDWCxnQkFBZ0JRLGdDQUFnQyxHQUFHO2dCQUNyRCxDQUFDO2dCQUVELEtBQU07WUFDUjtRQUVBLEtBQUtPLDhDQUFtQztZQUFFO2dCQUN4QyxJQUFNQywrQkFBK0JqQixXQUMvQmtCLG1DQUFtQ0MsSUFBQUEsb0JBQThCLEVBQUNGLDhCQUE4QnRCO2dCQUV0RyxJQUFJdUIsa0NBQWtDO29CQUNwQyxJQUFNUCxxQkFBb0JuQix1QkFBdUJ5QiwrQkFDM0NMLGlCQUFnQkMsa0JBQWEsQ0FBQ0MscUJBQXFCLENBQUNIO29CQUUxRGhCLGlCQUFpQm9CLGdCQUFnQixDQUFDSDtvQkFFbENYLGdCQUFnQixJQUFJO2dCQUN0QixDQUFDO2dCQUVELEtBQU07WUFDUjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9