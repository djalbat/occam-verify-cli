"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
var _assignments = require("../utilities/assignments");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _SubDerivation;
var last = _necessary.arrayUtilities.last;
var proofStepNodesQuery = (0, _query.nodesQuery)("/subDerivation/proofStep|lastProofStep");
var _default = (0, _dom.domAssigned)((_SubDerivation = /*#__PURE__*/ function() {
    function SubDerivation(proofSteps) {
        _class_call_check(this, SubDerivation);
        this.proofSteps = proofSteps;
    }
    _create_class(SubDerivation, [
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                return this.proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = last(this.proofSteps);
                return lastProofStep;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var _this = this;
                var verified;
                verified = this.proofSteps.every(function(proofStep) {
                    var proofStepVerified = _this.verifyProofStep(proofStep, substitutions, context);
                    if (proofStepVerified) {
                        return true;
                    }
                });
                return verified;
            }
        },
        {
            key: "verifyProofStep",
            value: function verifyProofStep(proofStep, substitutions, context) {
                var proofStepVerified;
                var assignments = [];
                proofStepVerified = proofStep.verify(substitutions, assignments, context);
                if (proofStepVerified) {
                    context.addProofStep(proofStep);
                    var proofStepUnified = proofStep.unify(substitutions, context);
                    proofStepVerified = proofStepUnified; ///
                    if (proofStepVerified) {
                        (0, _assignments.assignAssignments)(assignments, context);
                    }
                }
                return proofStepVerified;
            }
        }
    ], [
        {
            key: "fromSubDerivationNode",
            value: function fromSubDerivationNode(subDerivationNode, fileContext) {
                var ProofStep = _dom.default.ProofStep, proofStepNodes = proofStepNodesQuery(subDerivationNode), proofSteps = proofStepNodes.map(function(proofStepNode) {
                    var proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);
                    return proofStep;
                }), subDerivation = new SubDerivation(proofSteps);
                return subDerivation;
            }
        }
    ]);
    return SubDerivation;
}(), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3ViRGVyaXZhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBhc3NpZ25Bc3NpZ25tZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXNzaWdubWVudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZTdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3ViRGVyaXZhdGlvbi9wcm9vZlN0ZXB8bGFzdFByb29mU3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU3ViRGVyaXZhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb29mU3RlcHMpIHtcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBjb25zdCBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIHZlcmlmaWVkID0gdGhpcy5wcm9vZlN0ZXBzLmV2ZXJ5KChwcm9vZlN0ZXApID0+IHsgLy8vXG4gICAgICBjb25zdCBwcm9vZlN0ZXBWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdO1xuXG4gICAgcHJvb2ZTdGVwVmVyaWZpZWQgPSBwcm9vZlN0ZXAudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlN0ZXBWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5hZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKTtcblxuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHByb29mU3RlcC51bmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgcHJvb2ZTdGVwVmVyaWZpZWQgPSBwcm9vZlN0ZXBVbmlmaWVkOyAvLy9cblxuICAgICAgaWYgKHByb29mU3RlcFZlcmlmaWVkKSB7XG4gICAgICAgIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3ViRGVyaXZhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3ViRGVyaXZhdGlvbk5vZGUoc3ViRGVyaXZhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBQcm9vZlN0ZXAgfSA9IGRvbSxcbiAgICAgICAgICBwcm9vZlN0ZXBOb2RlcyA9IHByb29mU3RlcE5vZGVzUXVlcnkoc3ViRGVyaXZhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBwcm9vZlN0ZXBOb2Rlcy5tYXAoKHByb29mU3RlcE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mU3RlcCA9IFByb29mU3RlcC5mcm9tUHJvb2ZTdGVwTm9kZShwcm9vZlN0ZXBOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9vZlN0ZXA7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3ViRGVyaXZhdGlvbiA9IG5ldyBTdWJEZXJpdmF0aW9uKHByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIHN1YkRlcml2YXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInByb29mU3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTdWJEZXJpdmF0aW9uIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInZlcmlmeSIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJldmVyeSIsInByb29mU3RlcCIsInByb29mU3RlcFZlcmlmaWVkIiwidmVyaWZ5UHJvb2ZTdGVwIiwiYXNzaWdubWVudHMiLCJhZGRQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnkiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsInN1YkRlcml2YXRpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJQcm9vZlN0ZXAiLCJkb20iLCJwcm9vZlN0ZXBOb2RlcyIsIm1hcCIsInByb29mU3RlcE5vZGUiLCJmcm9tUHJvb2ZTdGVwTm9kZSIsInN1YkRlcml2YXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7Ozt5QkFaK0I7MkRBRWY7cUJBRVc7MkJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQU1FLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQztJQUV2QyxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsVUFBVTtnQ0FEU0Q7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCVCxLQUFLLElBQUksQ0FBQ00sVUFBVTtnQkFFMUMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLE9BQU87O2dCQUMzQixJQUFJQztnQkFFSkEsV0FBVyxJQUFJLENBQUNQLFVBQVUsQ0FBQ1EsS0FBSyxDQUFDLFNBQUNDO29CQUNoQyxJQUFNQyxvQkFBb0IsTUFBS0MsZUFBZSxDQUFDRixXQUFXSixlQUFlQztvQkFFekUsSUFBSUksbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCRixTQUFTLEVBQUVKLGFBQWEsRUFBRUMsT0FBTztnQkFDL0MsSUFBSUk7Z0JBRUosSUFBTUUsY0FBYyxFQUFFO2dCQUV0QkYsb0JBQW9CRCxVQUFVTCxNQUFNLENBQUNDLGVBQWVPLGFBQWFOO2dCQUVqRSxJQUFJSSxtQkFBbUI7b0JBQ3JCSixRQUFRTyxZQUFZLENBQUNKO29CQUVyQixJQUFNSyxtQkFBbUJMLFVBQVVNLEtBQUssQ0FBQ1YsZUFBZUM7b0JBRXhESSxvQkFBb0JJLGtCQUFrQixHQUFHO29CQUV6QyxJQUFJSixtQkFBbUI7d0JBQ3JCTSxJQUFBQSw4QkFBaUIsRUFBQ0osYUFBYU47b0JBQ2pDO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7Ozs7WUFJT08sS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUMsV0FBVztnQkFDekQsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxpQkFBaUIxQixvQkFBb0JzQixvQkFDckNsQixhQUFhc0IsZUFBZUMsR0FBRyxDQUFDLFNBQUNDO29CQUMvQixJQUFNZixZQUFZVyxVQUFVSyxpQkFBaUIsQ0FBQ0QsZUFBZUw7b0JBRTdELE9BQU9WO2dCQUNULElBQ0FpQixnQkFBZ0IsSUFBSTNCLGNBQWNDO2dCQUV4QyxPQUFPMEI7WUFDVDs7OztLQWJBLGlDQUFPQyxRQUFPIn0=