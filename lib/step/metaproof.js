"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaproofStep;
    }
});
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _metaAssertion = require("../utilities/metaAssertion");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var metastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(metaSubproofNode, metastatementNode) {
        _classCallCheck(this, MetaproofStep);
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _createClass(MetaproofStep, [
        {
            key: "getMetaSubproofNode",
            value: function getMetaSubproofNode() {
                return this.metaSubproofNode;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches;
                var metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(metastatementNode);
                if (metaSubproofAssertionNode !== null) {
                    var metaSubproofAssertionMatches = this.matchMetaSubproofAssertion(metaSubproofAssertionNode);
                    metastatementMatches = metaSubproofAssertionMatches; ///
                } else {
                    var metastatementsMatch = this.matchMetastatements(metastatementNode);
                    metastatementMatches = metastatementsMatch; //
                }
                return metastatementMatches;
            }
        },
        {
            key: "matchMetastatements",
            value: function matchMetastatements(metastatementNode) {
                var metastatementsMatch = false;
                if (this.metastatementNode !== null) {
                    var topmostMetastatementNode = metastatementNode, topmostMetaAssertionMetastatementNode = this.metastatementNode, topmostMetaAssertionMetastatementNodeMatches = (0, _metaAssertion.matchTopmostMetaAssertionMetastatementNode)(topmostMetaAssertionMetastatementNode, topmostMetastatementNode), metastatementNodeMatches = topmostMetaAssertionMetastatementNodeMatches; ///
                    return metastatementNodeMatches;
                }
                return metastatementsMatch;
            }
        },
        {
            key: "matchMetaSubproofAssertion",
            value: function matchMetaSubproofAssertion(metaSubproofAssertionNode) {
                var metaSubproofAssertionMatches = false;
                if (this.metaSubproofNode !== null) {
                    var metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode), firstMetaSubproofAssertionMetastatementNode = (0, _array.first)(metaSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.metaSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var topmostMetastatementNode = firstMetaSubproofAssertionMetastatementNode, topmostMetaAssertionMetastatementNode = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, topmostMetaAssertionMetastatementNodeMatches = (0, _metaAssertion.matchTopmostMetaAssertionMetastatementNode)(topmostMetaAssertionMetastatementNode, topmostMetastatementNode);
                    if (topmostMetaAssertionMetastatementNodeMatches) {
                        var secondMetaSubproofAssertionMetastatementNode = (0, _array.second)(metaSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var topmostMetastatementNode1 = secondMetaSubproofAssertionMetastatementNode, topmostMetaAssertionMetastatementNode1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, topmostMetaAssertionMetastatementNodeMatches1 = (0, _metaAssertion.matchTopmostMetaAssertionMetastatementNode)(topmostMetaAssertionMetastatementNode1, topmostMetastatementNode1);
                        metaSubproofAssertionMatches = topmostMetaAssertionMetastatementNodeMatches1; ///
                    }
                }
                return metaSubproofAssertionMatches;
            }
        }
    ], [
        {
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var metastatementNode = null, metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var metaSubproofNode = null, metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuaW1wb3J0IHsgbWF0Y2hUb3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGFTdWJwcm9vZkFzc2VydGlvblwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhU3VicHJvb2ZOb2RlID0gbWV0YVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhU3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVN1YnByb29mQXNzZXJ0aW9uKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudHNNYXRjaCA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50cyhtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YXN0YXRlbWVudHNNYXRjaDsgLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnRzKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0b3Btb3N0TWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtYXRjaFRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUodG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgdG9wbW9zdE1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRzTWF0Y2g7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZkFzc2VydGlvbihtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RNZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkodGhpcy5tZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgY29uc3QgdG9wbW9zdE1ldGFzdGF0ZW1lbnROb2RlID0gZmlyc3RNZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgdG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICB0b3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1hdGNoVG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSh0b3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCB0b3Btb3N0TWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAodG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kTWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBzZWNvbmQobWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgICAgY29uc3QgdG9wbW9zdE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kTWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICB0b3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWF0Y2hUb3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlKHRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIHRvcG1vc3RNZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAobWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXByb29mU3RlcCIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZBc3NlcnRpb24iLCJtZXRhc3RhdGVtZW50c01hdGNoIiwibWF0Y2hNZXRhc3RhdGVtZW50cyIsInRvcG1vc3RNZXRhc3RhdGVtZW50Tm9kZSIsInRvcG1vc3RNZXRhQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJ0b3Btb3N0TWV0YUFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoVG9wbW9zdE1ldGFBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0TWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJmaXJzdCIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kTWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmQiLCJzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhUHJvb2ZTdGVwIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztxQkFUUztxQkFDUTs2QkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyx5Q0FDckNDLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQyx5Q0FDM0NDLDZEQUE2REgsSUFBQUEsaUJBQVUsRUFBQztBQUUvRCxJQUFBLEFBQU1GLDhCQUFOO2FBQU1BLGNBQ1BNLGdCQUFnQixFQUFFQyxpQkFBaUI7OEJBRDVCUDtRQUVqQixJQUFJLENBQUNNLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7aUJBSFJQOztZQU1uQlEsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUI7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CSCxpQkFBaUIsRUFBRTtnQkFDcEMsSUFBSUk7Z0JBRUosSUFBTUMsNEJBQTRCVCwrQkFBK0JJO2dCQUVqRSxJQUFJSyw4QkFBOEIsSUFBSSxFQUFFO29CQUN0QyxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQ0Y7b0JBRXJFRCx1QkFBdUJFLDhCQUErQixHQUFHO2dCQUMzRCxPQUFPO29CQUNMLElBQU1FLHNCQUFzQixJQUFJLENBQUNDLG1CQUFtQixDQUFDVDtvQkFFckRJLHVCQUF1QkkscUJBQXFCLEVBQUU7Z0JBQ2hELENBQUM7Z0JBRUQsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JULGlCQUFpQixFQUFFO2dCQUNyQyxJQUFJUSxzQkFBc0IsS0FBSztnQkFFL0IsSUFBSSxJQUFJLENBQUNSLGlCQUFpQixLQUFLLElBQUksRUFBRTtvQkFDbkMsSUFBTVUsMkJBQTJCVixtQkFDM0JXLHdDQUF3QyxJQUFJLENBQUNYLGlCQUFpQixFQUM5RFksK0NBQStDQyxJQUFBQSx5REFBMEMsRUFBQ0YsdUNBQXVDRCwyQkFDaklJLDJCQUEyQkYsOENBQStDLEdBQUc7b0JBRW5GLE9BQU9FO2dCQUNULENBQUM7Z0JBRUQsT0FBT047WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJGLHlCQUF5QixFQUFFO2dCQUNwRCxJQUFJQywrQkFBK0IsS0FBSztnQkFFeEMsSUFBSSxJQUFJLENBQUNQLGdCQUFnQixLQUFLLElBQUksRUFBRTtvQkFDbEMsSUFBTWdCLDBDQUEwQ3JCLHdCQUF3QlcsNEJBQ2xFVyw4Q0FBOENDLElBQUFBLFlBQUssRUFBQ0YsMENBQ3BERyx3REFBd0RwQiwyREFBMkQsSUFBSSxDQUFDQyxnQkFBZ0IsR0FDeElvQiw0REFBNERGLElBQUFBLFlBQUssRUFBQ0M7b0JBRXhFLElBQU1SLDJCQUEyQk0sNkNBQzNCTCx3Q0FBd0NRLDJEQUN4Q1AsK0NBQStDQyxJQUFBQSx5REFBMEMsRUFBQ0YsdUNBQXVDRDtvQkFFdkksSUFBSUUsOENBQThDO3dCQUNoRCxJQUFNUSwrQ0FBK0NDLElBQUFBLGFBQU0sRUFBQ04sMENBQ3RETyw2REFBNkRELElBQUFBLGFBQU0sRUFBQ0g7d0JBRTFFLElBQU1SLDRCQUEyQlUsOENBQzNCVCx5Q0FBd0NXLDREQUN4Q1YsZ0RBQStDQyxJQUFBQSx5REFBMEMsRUFBQ0Ysd0NBQXVDRDt3QkFFdklKLCtCQUErQk0sK0NBQThDLEdBQUc7b0JBQ2xGLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPTjtZQUNUOzs7O1lBRU9pQixLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJ4QixnQkFBZ0IsRUFBRTtnQkFDNUMsSUFBTUMsb0JBQW9CLElBQUksRUFDeEJ3QixnQkFBZ0IsSUE3RUwvQixjQTZFdUJNLGtCQUFrQkM7Z0JBRTFELE9BQU93QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCekIsaUJBQWlCLEVBQUU7Z0JBQzlDLElBQU1ELG1CQUFtQixJQUFJLEVBQ3ZCeUIsZ0JBQWdCLElBcEZML0IsY0FvRnVCTSxrQkFBa0JDO2dCQUUxRCxPQUFPd0I7WUFDVDs7O1dBdkZtQi9CIn0=