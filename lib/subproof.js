"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Subproof;
    }
});
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _subDerivation = /*#__PURE__*/ _interop_require_default(require("./subDerivation"));
var _query = require("./utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
var Subproof = /*#__PURE__*/ function() {
    function Subproof(suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        this.suppositions = suppositions;
        this.subDerivation = subDerivation;
    }
    _create_class(Subproof, [
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getSubDerivation",
            value: function getSubDerivation() {
                return this.subDerivation;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, localContext) {
                var subproofVerified = false;
                localContext = _local.default.fromLocalContext(localContext); ///
                var suppositionsVerified = this.suppositions.every(function(supposition) {
                    var suppositionVerified = supposition.verify(localContext);
                    if (suppositionVerified) {
                        return true;
                    }
                });
                if (suppositionsVerified) {
                    var subDerivationVerified = this.subDerivation.verify(substitutions, localContext);
                    if (subDerivationVerified) {
                        subproofVerified = true;
                    }
                }
                return subproofVerified;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode, fileContext) {
                var subproof = null;
                if (subproofNode !== null) {
                    var suppositionNodes = suppositionNodesQuery(subproofNode), subDerivationNode = subDerivationNodeQuery(subproofNode), suppositions = suppositionNodes.map(function(suppositionNode) {
                        var supposition = _supposition.default.fromSuppositionNode(suppositionNode, fileContext);
                        return supposition;
                    }), subDerivation = _subDerivation.default.fromSubDerivationNode(subDerivationNode, fileContext);
                    subproof = new Subproof(suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1cHBvc2l0aW9uIGZyb20gXCIuL3N1cHBvc2l0aW9uXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJEZXJpdmF0aW9uIGZyb20gXCIuL3N1YkRlcml2YXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb25cIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKSB7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5zdWJEZXJpdmF0aW9uID0gc3ViRGVyaXZhdGlvbjtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBzdWJEZXJpdmF0aW9uVmVyaWZpZWQgPSB0aGlzLnN1YkRlcml2YXRpb24udmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mID0gbnVsbDtcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gc3ViRGVyaXZhdGlvbk5vZGVRdWVyeShzdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWJEZXJpdmF0aW9uID0gU3ViRGVyaXZhdGlvbi5mcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgc3VicHJvb2YgPSBuZXcgU3VicHJvb2Yoc3VwcG9zaXRpb25zLCBzdWJEZXJpdmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2Y7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJwcm9vZiIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25zIiwic3ViRGVyaXZhdGlvbiIsImdldFN1cHBvc2l0aW9ucyIsImdldFN1YkRlcml2YXRpb24iLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0Iiwic3VicHJvb2ZWZXJpZmllZCIsIkxvY2FsQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwic3ViRGVyaXZhdGlvblZlcmlmaWVkIiwiZnJvbVN1YnByb29mTm9kZSIsInN1YnByb29mTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2YiLCJzdXBwb3NpdGlvbk5vZGVzIiwic3ViRGVyaXZhdGlvbk5vZGUiLCJtYXAiLCJzdXBwb3NpdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJTdWJEZXJpdmF0aW9uIiwiZnJvbVN1YkRlcml2YXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztrRUFURzs0REFDQztvRUFDQztxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyx3QkFBd0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ25DQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsSUFBQSxBQUFNSix5QkFBTjthQUFNQSxTQUNQSyxZQUFZLEVBQUVDLGFBQWE7Z0NBRHBCTjtRQUVqQixJQUFJLENBQUNLLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISk47O1lBTW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFQyxZQUFZO2dCQUNoQyxJQUFJQyxtQkFBbUI7Z0JBRXZCRCxlQUFlRSxjQUFZLENBQUNDLGdCQUFnQixDQUFDSCxlQUFnQixHQUFHO2dCQUVoRSxJQUFNSSx1QkFBdUIsSUFBSSxDQUFDVixZQUFZLENBQUNXLEtBQUssQ0FBQyxTQUFDQztvQkFDcEQsSUFBTUMsc0JBQXNCRCxZQUFZUixNQUFNLENBQUNFO29CQUUvQyxJQUFJTyxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUgsc0JBQXNCO29CQUN4QixJQUFNSSx3QkFBd0IsSUFBSSxDQUFDYixhQUFhLENBQUNHLE1BQU0sQ0FBQ0MsZUFBZUM7b0JBRXZFLElBQUlRLHVCQUF1Qjt3QkFDekJQLG1CQUFtQjtvQkFDckI7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUMsV0FBVztnQkFDL0MsSUFBSUMsV0FBVztnQkFFZixJQUFJRixpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUcsbUJBQW1CdkIsc0JBQXNCb0IsZUFDekNJLG9CQUFvQnRCLHVCQUF1QmtCLGVBQzNDaEIsZUFBZW1CLGlCQUFpQkUsR0FBRyxDQUFDLFNBQUNDO3dCQUNuQyxJQUFNVixjQUFjVyxvQkFBVyxDQUFDQyxtQkFBbUIsQ0FBQ0YsaUJBQWlCTDt3QkFFckUsT0FBT0w7b0JBQ1QsSUFDQVgsZ0JBQWdCd0Isc0JBQWEsQ0FBQ0MscUJBQXFCLENBQUNOLG1CQUFtQkg7b0JBRTdFQyxXQUFXLElBbkRJdkIsU0FtRFNLLGNBQWNDO2dCQUN4QztnQkFFQSxPQUFPaUI7WUFDVDs7O1dBdkRtQnZCIn0=