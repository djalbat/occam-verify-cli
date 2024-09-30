"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Conclusion;
    }
});
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./unifier/metaLevel"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/conclusion/unqualifiedStatement");
var Conclusion = /*#__PURE__*/ function() {
    function Conclusion(unqualifiedStatement) {
        _class_call_check(this, Conclusion);
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Conclusion, [
        {
            key: "getUnqualifiedStatement",
            value: function getUnqualifiedStatement() {
                return this.unqualifiedStatement;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.unqualifiedStatement.getString();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.unqualifiedStatement.getStatement();
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
                var statementUnified = false;
                if (this.statementNode !== null) {
                    var nodeA = this.statementNode, nodeB = statementNodeB, unified = _metaLevel.default.unify(nodeA, nodeB, substitutions, localContextA, localContextB);
                    statementUnified = unified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var conclusionString = this.getString(); ///
                localContext.trace("Verifying the '".concat(conclusionString, "' conclusion..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                if (unqualifiedStatementVerified) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(conclusionString, "' conclusion."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromConclusionNode",
            value: function fromConclusionNode(conclusionNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), conclusion = new Conclusion(unqualifiedStatement);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWV0YUxldmVsVW5pZmllciBmcm9tIFwiLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IFVucXVhbGlmaWVkU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudC91bnF1YWxpZmllZFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uY2x1c2lvbi91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKHVucXVhbGlmaWVkU3RhdGVtZW50KSB7XG4gICAgdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VW5xdWFsaWZpZWRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50LmdldFN0cmluZygpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdGF0ZW1lbnQoKTsgfVxuXG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLnN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gc3RhdGVtZW50Tm9kZUIsICAvLy9cbiAgICAgICAgICAgIHVuaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB1bmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSA9IHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbmNsdXNpb25Ob2RlKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IFVucXVhbGlmaWVkU3RhdGVtZW50LmZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uY2x1c2lvbiIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5xdWFsaWZpZWRTdGF0ZW1lbnQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJ1bmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJjb25jbHVzaW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJkZWJ1ZyIsImZyb21Db25jbHVzaW9uTm9kZSIsImNvbmNsdXNpb25Ob2RlIiwiZmlsZUNvbnRleHQiLCJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJVbnF1YWxpZmllZFN0YXRlbWVudCIsImZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJjb25jbHVzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztnRUFQUTtrRUFDSTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFakMsSUFBQSxBQUFNRiwyQkFBTjthQUFNQSxXQUNQRyxvQkFBb0I7Z0NBRGJIO1FBRWpCLElBQUksQ0FBQ0csb0JBQW9CLEdBQUdBOztrQkFGWEg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELG9CQUFvQjtZQUNsQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0Ysb0JBQW9CLENBQUNFLFNBQVM7WUFBSTs7O1lBRTVEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDSCxvQkFBb0IsQ0FBQ0csWUFBWTtZQUFJOzs7WUFHbEVDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUN4RSxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQUksSUFBSSxDQUFDQyxhQUFhLEtBQUssTUFBTTtvQkFDL0IsSUFBTUMsUUFBUSxJQUFJLENBQUNELGFBQWEsRUFDMUJFLFFBQVFQLGdCQUNSUSxVQUFVQyxrQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDSixPQUFPQyxPQUFPTixlQUFlQyxlQUFlQztvQkFFbkZDLG1CQUFtQkksU0FBUyxHQUFHO2dCQUNqQztnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFlBQVk7Z0JBQ2pCLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ2pCLFNBQVMsSUFBSyxHQUFHO2dCQUUvQ2UsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRCxrQkFBaUI7Z0JBRXRELElBQU1FLFNBQVMsTUFDVEMsY0FBYyxFQUFFLEVBQ2hCQywrQkFBK0IsSUFBSSxDQUFDdkIsb0JBQW9CLENBQUNnQixNQUFNLENBQUNNLGFBQWFELFFBQVFKO2dCQUUzRixJQUFJTSw4QkFBOEI7b0JBQ2hDTCxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pELGFBQWFPLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQkwsa0JBQWlCO2dCQUMxRDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFQyxXQUFXO2dCQUNuRCxJQUFNQywyQkFBMkI5Qiw4QkFBOEI0QixpQkFDekQxQix1QkFBdUI2QixvQkFBb0IsQ0FBQ0MsNEJBQTRCLENBQUNGLDBCQUEwQkQsY0FDbkdJLGFBQWEsSUFyREZsQyxXQXFEaUJHO2dCQUVsQyxPQUFPK0I7WUFDVDs7O1dBeERtQmxDIn0=