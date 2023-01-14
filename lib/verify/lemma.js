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
var _antecedent = /*#__PURE__*/ _interopRequireDefault(require("./antecedent"));
var _consequent = /*#__PURE__*/ _interopRequireDefault(require("./consequent"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _string = require("../utilities/string");
var _query = require("../utilities/query");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var proofNodeQuery = (0, _query.nodeQuery)("/lemma/proof!"), labelNodesQuery = (0, _query.nodesQuery)("/lemma/label"), consequentNodeQuery = (0, _query.nodeQuery)("/lemma/consequent!"), antecedentsNodeQuery = (0, _query.nodesQuery)("/lemma/antecedent");
function verifyLemma(lemmaNode, fileContext) {
    var lemmaVerified = false;
    fileContext.begin(lemmaNode);
    var labelNodes = labelNodesQuery(lemmaNode), labelsString = (0, _string.nodesAsString)(labelNodes), proofContext = _proof1.default.fromFileContext(fileContext);
    labelsString === _constants.EMPTY_STRING ? fileContext.debug("Verifying a lemma...") : fileContext.debug("Verifying the '".concat(labelsString, "' lemma..."));
    var labels = [], labelsVerified = (0, _labels.default)(labelNodes, labels, fileContext);
    if (labelsVerified) {
        var antecedents = [], antecedentNodes = antecedentsNodeQuery(lemmaNode), antecedentsVerified = antecedentNodes.every(function(antecedentNode) {
            var antecedentVerified = (0, _antecedent.default)(antecedentNode, antecedents, proofContext);
            if (antecedentVerified) {
                return true;
            }
        });
        if (antecedentsVerified) {
            var consequents = [], consequentNode = consequentNodeQuery(lemmaNode), consequentVerified = (0, _consequent.default)(consequentNode, consequents, proofContext);
            if (consequentVerified) {
                var proofNode = proofNodeQuery(lemmaNode), firstConsequent = (0, _array.first)(consequents), consequent = firstConsequent, proofVerified = (0, _proof.default)(proofNode, consequent, proofContext);
                if (proofVerified) {
                    var lemma = _lemma.default.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCB2ZXJpZnlQcm9vZiBmcm9tIFwiLi4vdmVyaWZ5L3Byb29mXCI7XG5pbXBvcnQgUHJvb2ZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb29mXCI7XG5pbXBvcnQgdmVyaWZ5TGFiZWxzIGZyb20gXCIuLi92ZXJpZnkvbGFiZWxzXCI7XG5pbXBvcnQgdmVyaWZ5QW50ZWNlZGVudCBmcm9tIFwiLi9hbnRlY2VkZW50XCI7XG5pbXBvcnQgdmVyaWZ5Q29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL3Byb29mIVwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbGVtbWEvbGFiZWxcIiksXG4gICAgICBjb25zZXF1ZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hL2NvbnNlcXVlbnQhXCIpLFxuICAgICAgYW50ZWNlZGVudHNOb2RlUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2xlbW1hL2FudGVjZWRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUxlbW1hKGxlbW1hTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxlbW1hVmVyaWZpZWQgPSBmYWxzZTtcblxuICBmaWxlQ29udGV4dC5iZWdpbihsZW1tYU5vZGUpO1xuXG4gIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobGVtbWFOb2RlKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbm9kZXNBc1N0cmluZyhsYWJlbE5vZGVzKSxcbiAgICAgICAgcHJvb2ZDb250ZXh0ID0gUHJvb2ZDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgKGxhYmVsc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyBhIGxlbW1hLi4uYCkgOlxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgbGVtbWEuLi5gKTtcblxuICBjb25zdCBsYWJlbHMgPSBbXSxcbiAgICAgICAgbGFiZWxzVmVyaWZpZWQgPSB2ZXJpZnlMYWJlbHMobGFiZWxOb2RlcywgbGFiZWxzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgY29uc3QgYW50ZWNlZGVudHMgPSBbXSxcbiAgICAgICAgICBhbnRlY2VkZW50Tm9kZXMgPSBhbnRlY2VkZW50c05vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgIGFudGVjZWRlbnRzVmVyaWZpZWQgPSBhbnRlY2VkZW50Tm9kZXMuZXZlcnkoKGFudGVjZWRlbnROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbnRlY2VkZW50VmVyaWZpZWQgPSB2ZXJpZnlBbnRlY2VkZW50KGFudGVjZWRlbnROb2RlLCBhbnRlY2VkZW50cywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGFudGVjZWRlbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChhbnRlY2VkZW50c1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50cyA9IFtdLFxuICAgICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KGxlbW1hTm9kZSksXG4gICAgICAgICAgICBjb25zZXF1ZW50VmVyaWZpZWQgPSB2ZXJpZnlDb25zZXF1ZW50KGNvbnNlcXVlbnROb2RlLCBjb25zZXF1ZW50cywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShsZW1tYU5vZGUpLFxuICAgICAgICAgICAgICBmaXJzdENvbnNlcXVlbnQgPSBmaXJzdChjb25zZXF1ZW50cyksXG4gICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSBmaXJzdENvbnNlcXVlbnQsIC8vL1xuICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdmVyaWZ5UHJvb2YocHJvb2ZOb2RlLCBjb25zZXF1ZW50LCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgbGVtbWEgPSBMZW1tYS5mcm9tTGFiZWxzQW50ZWNlZGVudHNBbmRDb25zZXF1ZW50KGxhYmVscywgYW50ZWNlZGVudHMsIGNvbnNlcXVlbnQpO1xuXG4gICAgICAgICAgZmlsZUNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuXG4gICAgICAgICAgbGVtbWFWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobGVtbWFWZXJpZmllZCkge1xuICAgIChsYWJlbHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlIGxlbW1hLmApIDpcbiAgICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIGxlbW1hLmApO1xuICB9XG5cbiAgbGVtbWFWZXJpZmllZCA/XG4gICAgZmlsZUNvbnRleHQuY29tcGxldGUobGVtbWFOb2RlKSA6XG4gICAgICBmaWxlQ29udGV4dC5jb21wbGV0ZShsZW1tYU5vZGUpO1xuXG4gIHJldHVybiBsZW1tYVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUxlbW1hIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsImFudGVjZWRlbnRzTm9kZVF1ZXJ5IiwibGVtbWFOb2RlIiwiZmlsZUNvbnRleHQiLCJsZW1tYVZlcmlmaWVkIiwiYmVnaW4iLCJsYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsInByb29mQ29udGV4dCIsIlByb29mQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIkVNUFRZX1NUUklORyIsImRlYnVnIiwibGFiZWxzIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJhbnRlY2VkZW50cyIsImFudGVjZWRlbnROb2RlcyIsImFudGVjZWRlbnRzVmVyaWZpZWQiLCJldmVyeSIsImFudGVjZWRlbnROb2RlIiwiYW50ZWNlZGVudFZlcmlmaWVkIiwidmVyaWZ5QW50ZWNlZGVudCIsImNvbnNlcXVlbnRzIiwiY29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJ2ZXJpZnlDb25zZXF1ZW50IiwicHJvb2ZOb2RlIiwiZmlyc3RDb25zZXF1ZW50IiwiZmlyc3QiLCJjb25zZXF1ZW50IiwicHJvb2ZWZXJpZmllZCIsInZlcmlmeVByb29mIiwibGVtbWEiLCJMZW1tYSIsImZyb21MYWJlbHNBbnRlY2VkZW50c0FuZENvbnNlcXVlbnQiLCJhZGRMZW1tYSIsImluZm8iLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBd0JBOzs7MERBakJOOzBEQUNNOzJEQUNDOzJEQUNBOytEQUNJOytEQUNBO3FCQUVQO3lCQUNPO3NCQUNDO3FCQUNROzs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGlCQUM3QkMsc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDLHVCQUNoQ0ksdUJBQXVCRixJQUFBQSxpQkFBVSxFQUFDO0FBRXpCLFNBQVNKLFlBQVlPLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQzFELElBQUlDLGdCQUFnQixLQUFLO0lBRXpCRCxZQUFZRSxLQUFLLENBQUNIO0lBRWxCLElBQU1JLGFBQWFSLGdCQUFnQkksWUFDN0JLLGVBQWVDLElBQUFBLHFCQUFhLEVBQUNGLGFBQzdCRyxlQUFlQyxlQUFZLENBQUNDLGVBQWUsQ0FBQ1I7SUFFakRJLGlCQUFpQkssdUJBQVksR0FDNUJULFlBQVlVLEtBQUssQ0FBRSwwQkFDakJWLFlBQVlVLEtBQUssQ0FBQyxBQUFDLGtCQUE4QixPQUFiTixjQUFhLGNBQVk7SUFFakUsSUFBTU8sU0FBUyxFQUFFLEVBQ1hDLGlCQUFpQkMsSUFBQUEsZUFBWSxFQUFDVixZQUFZUSxRQUFRWDtJQUV4RCxJQUFJWSxnQkFBZ0I7UUFDbEIsSUFBTUUsY0FBYyxFQUFFLEVBQ2hCQyxrQkFBa0JqQixxQkFBcUJDLFlBQ3ZDaUIsc0JBQXNCRCxnQkFBZ0JFLEtBQUssQ0FBQyxTQUFDQyxnQkFBbUI7WUFDOUQsSUFBTUMscUJBQXFCQyxJQUFBQSxtQkFBZ0IsRUFBQ0YsZ0JBQWdCSixhQUFhUjtZQUV6RSxJQUFJYSxvQkFBb0I7Z0JBQ3RCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtRQUVOLElBQUlILHFCQUFxQjtZQUN2QixJQUFNSyxjQUFjLEVBQUUsRUFDaEJDLGlCQUFpQnpCLG9CQUFvQkUsWUFDckN3QixxQkFBcUJDLElBQUFBLG1CQUFnQixFQUFDRixnQkFBZ0JELGFBQWFmO1lBRXpFLElBQUlpQixvQkFBb0I7Z0JBQ3RCLElBQU1FLFlBQVloQyxlQUFlTSxZQUMzQjJCLGtCQUFrQkMsSUFBQUEsWUFBSyxFQUFDTixjQUN4Qk8sYUFBYUYsaUJBQ2JHLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDTCxXQUFXRyxZQUFZdEI7Z0JBRXpELElBQUl1QixlQUFlO29CQUNqQixJQUFNRSxRQUFRQyxjQUFLLENBQUNDLGtDQUFrQyxDQUFDdEIsUUFBUUcsYUFBYWM7b0JBRTVFNUIsWUFBWWtDLFFBQVEsQ0FBQ0g7b0JBRXJCOUIsZ0JBQWdCLElBQUk7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJQSxlQUFlO1FBQ2hCRyxpQkFBaUJLLHVCQUFZLEdBQzVCVCxZQUFZbUMsSUFBSSxDQUFFLHlCQUNoQm5DLFlBQVltQyxJQUFJLENBQUMsQUFBQyxpQkFBNkIsT0FBYi9CLGNBQWEsWUFBVTtJQUMvRCxDQUFDO0lBRURILGdCQUNFRCxZQUFZb0MsUUFBUSxDQUFDckMsYUFDbkJDLFlBQVlvQyxRQUFRLENBQUNyQyxVQUFVO0lBRW5DLE9BQU9FO0FBQ1QifQ==