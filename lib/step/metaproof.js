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
var _metaproof = require("../utilities/metaproof");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var metastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode) {
        _class_call_check(this, MetaproofStep);
        this.ruleSubproofNode = ruleSubproofNode;
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetaproofStep, [
        {
            key: "getRuleSubproofNode",
            value: function getRuleSubproofNode() {
                return this.ruleSubproofNode;
            }
        },
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
            key: "match",
            value: function match(metastatementNode) {
                var matches = false;
                if (!matches) {
                    var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);
                    if (ruleSubproofAssertionNode !== null) {
                        var ruleSubproofAssertionMatches = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);
                        matches = ruleSubproofAssertionMatches; ///
                    }
                }
                if (!matches) {
                    var metastatementMatches = this.matchMetastatement(metastatementNode);
                    matches = metastatementMatches; ///
                }
                return matches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches = false;
                if (this.metastatementNode !== null) {
                    var metastatementNodeA = metastatementNode, metastatementNodeB = this.metastatementNode, metastatementMatchesModuloBrackets = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA, metastatementNodeB);
                    metastatementMatches = metastatementMatchesModuloBrackets; ///
                }
                return metastatementMatches;
            }
        },
        {
            key: "matchRuleSubproofAssertion",
            value: function matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
                var ruleSubproofAssertionMatches = false;
                if (this.ruleSubproofNode !== null) {
                    var ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), firstRuleSubproofAssertionMetastatementNode = (0, _array.first)(ruleSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var metastatementNodeA = firstRuleSubproofAssertionMetastatementNode, metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatchesModuloBrackets = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA, metastatementNodeB);
                    if (metastatementMatchesModuloBrackets) {
                        var secondRuleSubproofAssertionMetastatementNode = (0, _array.second)(ruleSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var metastatementNodeA1 = secondRuleSubproofAssertionMetastatementNode, metastatementNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatchesModuloBrackets1 = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA1, metastatementNodeB1);
                        ruleSubproofAssertionMatches = metastatementMatchesModuloBrackets1; ///
                    }
                }
                return ruleSubproofAssertionMatches;
            }
        }
    ], [
        {
            key: "fromRuleSubproofNode",
            value: function fromRuleSubproofNode(ruleSubproofNode) {
                var metaSubproofNode = null, metastatementNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var ruleSubproofNode = null, metastatementNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var ruleSubproofNode = null, metaSubproofNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhcHJvb2ZcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvcnVsZVN1YnByb29mQXNzZXJ0aW9uXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhcHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3IocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YVN1YnByb29mTm9kZSA9IG1ldGFTdWJwcm9vZk5vZGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0UnVsZVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YVN1YnByb29mTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhU3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gdGhpcy5tYXRjaFJ1bGVTdWJwcm9vZkFzc2VydGlvbihydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICBtYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFJ1bGVTdWJwcm9vZkFzc2VydGlvbihydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkodGhpcy5ydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gZmlyc3RSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaE1ldGFzdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyhtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQik7XG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICAgIHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBzZWNvbmQocXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMpO1xuXG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IHNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gc2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaE1ldGFzdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyhtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQik7XG5cbiAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHM7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YXByb29mU3RlcCIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0UnVsZVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwibWF0Y2hlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24iLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMiLCJtYXRjaE1ldGFzdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJmaXJzdCIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kUnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmQiLCJzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbVJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhUHJvb2ZTdGVwIiwiZnJvbU1ldGFTdWJwcm9vZk5vZGUiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3FCQVJTO3FCQUNRO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQywwQkFBMEJDLElBQUFBLGlCQUFVLEVBQUMseUNBQ3JDQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMseUNBQzNDQyw2REFBNkRILElBQUFBLGlCQUFVLEVBQUM7QUFFL0QsSUFBQSxBQUFNRiw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BNLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsaUJBQWlCO2dDQUQ5Q1I7UUFFakIsSUFBSSxDQUFDTSxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2tCQUpSUjs7WUFPbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGlCQUFpQjtZQUMvQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixpQkFBaUI7Z0JBQ3JCLElBQUlLLFVBQVU7Z0JBRWQsSUFBSSxDQUFDQSxTQUFTO29CQUNaLElBQU1DLDRCQUE0QlgsK0JBQStCSztvQkFFakUsSUFBSU0sOEJBQThCLE1BQU07d0JBQ3RDLElBQU1DLCtCQUErQixJQUFJLENBQUNDLDBCQUEwQixDQUFDRjt3QkFFckVELFVBQVVFLDhCQUErQixHQUFHO29CQUM5QztnQkFDRjtnQkFFQSxJQUFJLENBQUNGLFNBQVM7b0JBQ1osSUFBTUksdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNWO29CQUVyREssVUFBVUksc0JBQXNCLEdBQUc7Z0JBQ3JDO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVixpQkFBaUI7Z0JBQ2xDLElBQUlTLHVCQUF1QjtnQkFFM0IsSUFBSSxJQUFJLENBQUNULGlCQUFpQixLQUFLLE1BQU07b0JBQ25DLElBQU1XLHFCQUFxQlgsbUJBQ3JCWSxxQkFBcUIsSUFBSSxDQUFDWixpQkFBaUIsRUFDM0NhLHFDQUFxQ0MsSUFBQUEsMkNBQWdDLEVBQUNILG9CQUFvQkM7b0JBRWhHSCx1QkFBdUJJLG9DQUFxQyxHQUFHO2dCQUNqRTtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkYseUJBQXlCO2dCQUNsRCxJQUFJQywrQkFBK0I7Z0JBRW5DLElBQUksSUFBSSxDQUFDVCxnQkFBZ0IsS0FBSyxNQUFNO29CQUNsQyxJQUFNaUIsMENBQTBDdEIsd0JBQXdCYSw0QkFDbEVVLDhDQUE4Q0MsSUFBQUEsWUFBSyxFQUFDRiwwQ0FDcERHLHdEQUF3RHJCLDJEQUEyRCxJQUFJLENBQUNDLGdCQUFnQixHQUN4SXFCLDREQUE0REYsSUFBQUEsWUFBSyxFQUFDQztvQkFFeEUsSUFBTVAscUJBQXFCSyw2Q0FDckJKLHFCQUFxQk8sMkRBQ3JCTixxQ0FBcUNDLElBQUFBLDJDQUFnQyxFQUFDSCxvQkFBb0JDO29CQUVoRyxJQUFJQyxvQ0FBb0M7d0JBQ3RDLElBQU1PLCtDQUErQ0MsSUFBQUEsYUFBTSxFQUFDTiwwQ0FDdERPLDZEQUE2REQsSUFBQUEsYUFBTSxFQUFDSDt3QkFFMUUsSUFBTVAsc0JBQXFCUyw4Q0FDckJSLHNCQUFxQlUsNERBQ3JCVCxzQ0FBcUNDLElBQUFBLDJDQUFnQyxFQUFDSCxxQkFBb0JDO3dCQUVoR0wsK0JBQStCTSxxQ0FBb0MsR0FBRztvQkFDeEU7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDs7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCekIsZ0JBQWdCO2dCQUMxQyxJQUFNQyxtQkFBbUIsTUFDbkJDLG9CQUFvQixNQUNwQndCLGdCQUFnQixJQXRGTGhDLGNBc0Z1Qk0sa0JBQWtCQyxrQkFBa0JDO2dCQUU1RSxPQUFPd0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQjFCLGdCQUFnQjtnQkFDMUMsSUFBTUQsbUJBQW1CLE1BQ25CRSxvQkFBb0IsTUFDcEJ3QixnQkFBZ0IsSUE5RkxoQyxjQThGdUJNLGtCQUFrQkMsa0JBQWtCQztnQkFFNUUsT0FBT3dCO1lBRVQ7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0IxQixpQkFBaUI7Z0JBQzVDLElBQU1GLG1CQUFtQixNQUNuQkMsbUJBQW1CLE1BQ25CeUIsZ0JBQWdCLElBdkdMaEMsY0F1R3VCTSxrQkFBa0JDLGtCQUFrQkM7Z0JBRTVFLE9BQU93QjtZQUNUOzs7V0ExR21CaEMifQ==