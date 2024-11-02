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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _unification = require("./utilities/unification");
var _query = require("./utilities/query");
var _subproof = require("./utilities/subproof");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var match = _necessary.arrayUtilities.match;
var subproofNodeQuery = (0, _query.nodeQuery)("/proofStep/subproof"), suppositionNodesQuery = (0, _query.nodesQuery)("/subproof/supposition"), subDerivationNodeQuery = (0, _query.nodeQuery)("/subproof/subDerivation");
var Subproof = /*#__PURE__*/ function() {
    function Subproof(string, suppositions, subDerivation) {
        _class_call_check(this, Subproof);
        this.string = string;
        this.suppositions = suppositions;
        this.subDerivation = subDerivation;
    }
    _create_class(Subproof, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                return this.subDerivation.getLastProofStep();
            }
        },
        {
            key: "getStatements",
            value: function getStatements() {
                var lastProofStep = this.getLastProofStep(), suppositionStatements = this.suppositions.map(function(supposition) {
                    var suppositionStatement = supposition.getStatement();
                    return suppositionStatement;
                }), lastProofStepStatement = lastProofStep.getStatement(), statements = _to_consumable_array(suppositionStatements).concat([
                    lastProofStepStatement
                ]);
                return statements;
            }
        },
        {
            key: "unifySubproofAssertion",
            value: function unifySubproofAssertion(subproofAssertion, substitutions, generalContext, specificContext) {
                var subproofAssertionUnified;
                var subproofString = this.string, subproofAssertionString = subproofAssertion.getString();
                specificContext.trace("Unifying the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof..."));
                var subproofStatements = this.getStatements(), subproofAssertionStatements = subproofAssertion.getStatements();
                subproofAssertionUnified = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnified = (0, _unification.unifyStatement)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                if (subproofAssertionUnified) {
                    specificContext.trace("...unified the '".concat(subproofAssertionString, "' subproof assertion with the '").concat(subproofString, "' subproof."));
                }
                return subproofAssertionUnified;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, context) {
                var subproofVerified = false;
                var localContext = _local.default.fromContext(context); ///
                context = localContext; ///
                var suppositionsVerified = this.suppositions.every(function(supposition) {
                    var suppositionVerified = supposition.verify(context);
                    if (suppositionVerified) {
                        return true;
                    }
                });
                if (suppositionsVerified) {
                    var subDerivationVerified = this.subDerivation.verify(substitutions, context);
                    if (subDerivationVerified) {
                        subproofVerified = true;
                    }
                }
                return subproofVerified;
            }
        }
    ], [
        {
            key: "fromProofStepNode",
            value: function fromProofStepNode(proofStepNode, fileContext) {
                var subproof = null;
                var subproofNode = subproofNodeQuery(proofStepNode);
                if (subproofNode !== null) {
                    var Supposition = _shim.default.Supposition, SubDerivation = _shim.default.SubDerivation, subproofString = (0, _subproof.subproofStringFromSubproofNode)(subproofNode, fileContext), suppositionNodes = suppositionNodesQuery(subproofNode), subDerivationNode = subDerivationNodeQuery(subproofNode), string = subproofString, suppositions = suppositionNodes.map(function(suppositionNode) {
                        var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                        return supposition;
                    }), subDerivation = SubDerivation.fromSubDerivationNode(subDerivationNode, fileContext);
                    subproof = new Subproof(string, suppositions, subDerivation);
                }
                return subproof;
            }
        }
    ]);
    return Subproof;
}();
Object.assign(_shim.default, {
    Subproof: Subproof
});
var _default = Subproof;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3VicHJvb2ZcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHN1YnByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb29mU3RlcC9zdWJwcm9vZlwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc3VicHJvb2Yvc3VwcG9zaXRpb25cIiksXG4gICAgICBzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnByb29mL3N1YkRlcml2YXRpb25cIik7XG5cbmNsYXNzIFN1YnByb29mIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdXBwb3NpdGlvbnMsIHN1YkRlcml2YXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLnN1YkRlcml2YXRpb24gPSBzdWJEZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRTdWJEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YkRlcml2YXRpb247XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkgeyByZXR1cm4gdGhpcy5zdWJEZXJpdmF0aW9uLmdldExhc3RQcm9vZlN0ZXAoKTsgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IHRoaXMuZ2V0TGFzdFByb29mU3RlcCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsYXN0UHJvb2ZTdGVwU3RhdGVtZW50ID0gbGFzdFByb29mU3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICAgICAgbGFzdFByb29mU3RlcFN0YXRlbWVudFxuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gc3VicHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50cygpO1xuXG4gICAgc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkID0gbWF0Y2goc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzLCBzdWJwcm9vZlN0YXRlbWVudHMsIChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgc3VicHJvb2ZTdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdWJwcm9vZlN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2YuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dChjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1YkRlcml2YXRpb25WZXJpZmllZCA9IHRoaXMuc3ViRGVyaXZhdGlvbi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJEZXJpdmF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgc3VicHJvb2ZWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcE5vZGUocHJvb2ZTdGVwTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2YgPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gc3VicHJvb2ZOb2RlUXVlcnkocHJvb2ZTdGVwTm9kZSk7XG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1cHBvc2l0aW9uLCBTdWJEZXJpdmF0aW9uIH0gPSBzaGltLFxuICAgICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZlN0cmluZ0Zyb21TdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KHN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBzdWJEZXJpdmF0aW9uTm9kZSA9IHN1YkRlcml2YXRpb25Ob2RlUXVlcnkoc3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN1YnByb29mU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1YkRlcml2YXRpb24gPSBTdWJEZXJpdmF0aW9uLmZyb21TdWJEZXJpdmF0aW9uTm9kZShzdWJEZXJpdmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBzdWJwcm9vZiA9IG5ldyBTdWJwcm9vZihzdHJpbmcsIHN1cHBvc2l0aW9ucywgc3ViRGVyaXZhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBTdWJwcm9vZlxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnByb29mO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJzdWJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJzdWJEZXJpdmF0aW9uTm9kZVF1ZXJ5IiwiU3VicHJvb2YiLCJzdHJpbmciLCJzdXBwb3NpdGlvbnMiLCJzdWJEZXJpdmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsIm5vZGUiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uIiwiZ2V0TGFzdFByb29mU3RlcCIsImdldFN0YXRlbWVudHMiLCJsYXN0UHJvb2ZTdGVwIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZlN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRzIiwidW5pZnlTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VicHJvb2ZBc3NlcnRpb25VbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJzdWJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwic3VicHJvb2ZTdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzIiwic3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdWJwcm9vZlN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInZlcmlmeSIsImNvbnRleHQiLCJzdWJwcm9vZlZlcmlmaWVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllZCIsInN1YkRlcml2YXRpb25WZXJpZmllZCIsImZyb21Qcm9vZlN0ZXBOb2RlIiwicHJvb2ZTdGVwTm9kZSIsImZpbGVDb250ZXh0Iiwic3VicHJvb2YiLCJzdWJwcm9vZk5vZGUiLCJTdXBwb3NpdGlvbiIsInNoaW0iLCJTdWJEZXJpdmF0aW9uIiwic3VicHJvb2ZTdHJpbmdGcm9tU3VicHJvb2ZOb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1YkRlcml2YXRpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21TdWJEZXJpdmF0aW9uTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNklBOzs7ZUFBQTs7O3lCQTNJK0I7MkRBRWQ7NERBQ1E7MkJBRU07cUJBQ087d0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUM5QkMsd0JBQXdCQyxJQUFBQSxpQkFBVSxFQUFDLDBCQUNuQ0MseUJBQXlCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXpDLElBQUEsQUFBTUkseUJBQU47YUFBTUEsU0FDUUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDNDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUpuQkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsSUFBSTtZQUNsQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsWUFBWTtZQUMxQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxT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