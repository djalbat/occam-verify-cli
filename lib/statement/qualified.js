"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QualifiedStatement;
    }
});
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
var _reference = /*#__PURE__*/ _interop_require_default(require("../reference"));
var _unify = /*#__PURE__*/ _interop_require_default(require("../mixins/statement/qualified/unify"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _string = require("../utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var statementNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/statement"), referenceNodeQuery = (0, _query.nodeQuery)("/qualifiedStatement/reference");
var QualifiedStatement = /*#__PURE__*/ function() {
    function QualifiedStatement(string, statement, reference) {
        _class_call_check(this, QualifiedStatement);
        this.string = string;
        this.statement = statement;
        this.reference = reference;
    }
    _create_class(QualifiedStatement, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.reference.getMetavariableNode();
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, localContext) {
                var verified;
                var qualifiedStatementString = (0, _string.trim)(this.string); ///
                localContext.trace("Verifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                var stated = true, assignments = [], statementVerified = this.statement.verify(assignments, stated, localContext);
                if (statementVerified) {
                    var unified = this.unify(substitutions, localContext);
                    if (unified) {
                        var assignmentsAssigned = (0, _assignments.assignAssignments)(assignments, localContext);
                        verified = assignmentsAssigned; ///
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(qualifiedStatementString, "' qualified statement."));
                }
                return verified;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, localContext) {
                var unified;
                var qualifiedStatement = this, qualifiedStatementString = (0, _string.trim)(this.string); ///
                localContext.trace("Unifying the '".concat(qualifiedStatementString, "' qualified statement..."));
                unified = _unify.default.some(function(unifyMixin) {
                    var unified = unifyMixin(qualifiedStatement, substitutions, localContext);
                    return unified;
                });
                if (unified) {
                    localContext.debug("...unified the '".concat(qualifiedStatementString, "' qualified statement."));
                }
                return unified;
            }
        }
    ], [
        {
            key: "fromQualifiedStatementNode",
            value: function fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
                var qualifiedStatement = null;
                if (qualifiedStatementNode !== null) {
                    var statementNode = statementNodeQuery(qualifiedStatementNode), referenceNode = referenceNodeQuery(qualifiedStatementNode), localContext = _local.default.fromFileContext(fileContext), statement = statementNode !== null ? _statement.default.fromStatementNode(statementNode, localContext) : null, reference = _reference.default.fromReferenceNode(referenceNode, fileContext), node = qualifiedStatementNode, string = fileContext.nodeAsString(node);
                    qualifiedStatement = new QualifiedStatement(string, statement, reference);
                }
                return qualifiedStatement;
            }
        }
    ]);
    return QualifiedStatement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZW1lbnQvcXVhbGlmaWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3RhdGVtZW50IGZyb20gXCIuLi9zdGF0ZW1lbnRcIjtcbmltcG9ydCBSZWZlcmVuY2UgZnJvbSBcIi4uL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHVuaWZ5TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc3RhdGVtZW50L3F1YWxpZmllZC91bmlmeVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGFzc2lnbkFzc2lnbm1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NpZ25tZW50c1wiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcXVhbGlmaWVkU3RhdGVtZW50L3N0YXRlbWVudFwiKSxcbiAgICAgIHJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9xdWFsaWZpZWRTdGF0ZW1lbnQvcmVmZXJlbmNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFsaWZpZWRTdGF0ZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0YXRlbWVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRyaW0odGhpcy5zdHJpbmcpOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgY29uc3QgdW5pZmllZCA9IHRoaXMudW5pZnkoc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gYXNzaWdubWVudHNBc3NpZ25lZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmd9JyBxdWFsaWZpZWQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3QgcXVhbGlmaWVkU3RhdGVtZW50ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHF1YWxpZmllZFN0YXRlbWVudFN0cmluZyA9IHRyaW0odGhpcy5zdHJpbmcpOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3F1YWxpZmllZFN0YXRlbWVudFN0cmluZ30nIHF1YWxpZmllZCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHVuaWZpZWQgPSB1bmlmeU1peGlucy5zb21lKCh1bmlmeU1peGluKSA9PiB7XG4gICAgICBjb25zdCB1bmlmaWVkID0gdW5pZnlNaXhpbihxdWFsaWZpZWRTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiB1bmlmaWVkO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cXVhbGlmaWVkU3RhdGVtZW50U3RyaW5nfScgcXVhbGlmaWVkIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBxdWFsaWZpZWRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHF1YWxpZmllZFN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlTm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcXVhbGlmaWVkU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICAgIHF1YWxpZmllZFN0YXRlbWVudCA9IG5ldyBRdWFsaWZpZWRTdGF0ZW1lbnQoc3RyaW5nLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1YWxpZmllZFN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlF1YWxpZmllZFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZmVyZW5jZU5vZGVRdWVyeSIsInN0cmluZyIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJxdWFsaWZpZWRTdGF0ZW1lbnRTdHJpbmciLCJ0cmltIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIiwidW5pZmllZCIsInVuaWZ5IiwiYXNzaWdubWVudHNBc3NpZ25lZCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiZGVidWciLCJxdWFsaWZpZWRTdGF0ZW1lbnQiLCJ1bmlmeU1peGlucyIsInNvbWUiLCJ1bmlmeU1peGluIiwiZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJxdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwicmVmZXJlbmNlTm9kZSIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIlN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiUmVmZXJlbmNlIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztnRUFaQztnRUFDQTs0REFDRTs0REFDQztzQkFFSjtxQkFDSzsyQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRixtQ0FBTjthQUFNQSxtQkFDUEksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRHJCTjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXdCLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLG1CQUFtQjtZQUFJOzs7WUFFckVDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQ2hDLElBQUlDO2dCQUVKLElBQU1DLDJCQUEyQkMsSUFBQUEsWUFBSSxFQUFDLElBQUksQ0FBQ1osTUFBTSxHQUFHLEdBQUc7Z0JBRXZEUyxhQUFhSSxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJGLDBCQUF5QjtnQkFFOUQsSUFBTUcsU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQixJQUFJLENBQUNmLFNBQVMsQ0FBQ00sTUFBTSxDQUFDUSxhQUFhRCxRQUFRTDtnQkFFckUsSUFBSU8sbUJBQW1CO29CQUNyQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsS0FBSyxDQUFDVixlQUFlQztvQkFFMUMsSUFBSVEsU0FBUzt3QkFDWCxJQUFNRSxzQkFBc0JDLElBQUFBLDhCQUFpQixFQUFDTCxhQUFhTjt3QkFFM0RDLFdBQVdTLHFCQUFxQixHQUFHO29CQUNyQztnQkFDRjtnQkFFQSxJQUFJVCxVQUFVO29CQUNaRCxhQUFhWSxLQUFLLENBQUMsQUFBQyxvQkFBNEMsT0FBekJWLDBCQUF5QjtnQkFDbEU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNVixhQUFhLEVBQUVDLFlBQVk7Z0JBQy9CLElBQUlRO2dCQUVKLElBQU1LLHFCQUFxQixJQUFJLEVBQ3pCWCwyQkFBMkJDLElBQUFBLFlBQUksRUFBQyxJQUFJLENBQUNaLE1BQU0sR0FBRyxHQUFHO2dCQUV2RFMsYUFBYUksS0FBSyxDQUFDLEFBQUMsaUJBQXlDLE9BQXpCRiwwQkFBeUI7Z0JBRTdETSxVQUFVTSxjQUFXLENBQUNDLElBQUksQ0FBQyxTQUFDQztvQkFDMUIsSUFBTVIsVUFBVVEsV0FBV0gsb0JBQW9CZCxlQUFlQztvQkFFOUQsT0FBT1E7Z0JBQ1Q7Z0JBRUEsSUFBSUEsU0FBUztvQkFDWFIsYUFBYVksS0FBSyxDQUFDLEFBQUMsbUJBQTJDLE9BQXpCViwwQkFBeUI7Z0JBQ2pFO2dCQUVBLE9BQU9NO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxzQkFBc0IsRUFBRUMsV0FBVztnQkFDbkUsSUFBSU4scUJBQXFCO2dCQUV6QixJQUFJSywyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTUUsZ0JBQWdCaEMsbUJBQW1COEIseUJBQ25DRyxnQkFBZ0IvQixtQkFBbUI0Qix5QkFDbkNsQixlQUFlc0IsY0FBWSxDQUFDQyxlQUFlLENBQUNKLGNBQzVDM0IsWUFBWSxBQUFDNEIsa0JBQWtCLE9BQ2pCSSxrQkFBUyxDQUFDQyxpQkFBaUIsQ0FBQ0wsZUFBZXBCLGdCQUN6QyxNQUNoQlAsWUFBWWlDLGtCQUFTLENBQUNDLGlCQUFpQixDQUFDTixlQUFlRixjQUN2RFMsT0FBT1Ysd0JBQ1AzQixTQUFTNEIsWUFBWVUsWUFBWSxDQUFDRDtvQkFFdENmLHFCQUFxQixJQXBGUjFCLG1CQW9GK0JJLFFBQVFDLFdBQVdDO2dCQUNuRTtnQkFFQSxPQUFPb0I7WUFDVDs7O1dBeEZtQjFCIn0=