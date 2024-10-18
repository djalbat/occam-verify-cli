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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _unqualified = /*#__PURE__*/ _interop_require_default(require("./statement/unqualified"));
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var unqualifiedStatementNodeQuery = (0, _query.nodeQuery)("/consequent/unqualifiedStatement");
var Consequent = /*#__PURE__*/ function() {
    function Consequent(fileContext, unqualifiedStatement) {
        _class_call_check(this, Consequent);
        this.fileContext = fileContext;
        this.unqualifiedStatement = unqualifiedStatement;
    }
    _create_class(Consequent, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
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
            value: function unifyStatement(statement, substitutions, localContext) {
                var statementUnified;
                var statementString = statement.getString(), consequentString = this.getString();
                var localContextB = localContext; ///
                localContext = _local.default.fromFileContext(this.fileContext);
                var localContextA = localContext; ///
                localContextB.trace("Unifying the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent..."));
                statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);
                if (statementUnified) {
                    localContextB.debug("...unified the '".concat(statementString, "' statement with the '").concat(consequentString, "' consequent."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified = false;
                var consequentString = this.getString(); ///
                localContext.trace("Verifying the '".concat(consequentString, "' consequent..."));
                var stated = true, assignments = [], unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);
                if (unqualifiedStatementVerified) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(consequentString, "' consequent."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var unqualifiedStatementJSON = (0, _json.unqualifiedStatementToUnqualifiedStatementJSON)(this.unqualifiedStatement), unqualifiedStatement = unqualifiedStatementJSON, json = {
                    unqualifiedStatement: unqualifiedStatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var unqualifiedStatement = (0, _json.unqualifiedStatementFromJSON)(json, fileContext), consequent = new Consequent(fileContext, unqualifiedStatement);
                return consequent;
            }
        },
        {
            key: "fromConsequentNode",
            value: function fromConsequentNode(consequentNode, fileContext) {
                var unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode), unqualifiedStatement = _unqualified.default.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext), consequent = new Consequent(fileContext, unqualifiedStatement);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();
Object.assign(_shim.default, {
    Consequent: Consequent
});
var _default = Consequent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBVbnF1YWxpZmllZFN0YXRlbWVudCBmcm9tIFwiLi9zdGF0ZW1lbnQvdW5xdWFsaWZpZWRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudEZyb21KU09OLCB1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc2VxdWVudC91bnF1YWxpZmllZFN0YXRlbWVudFwiKTtcblxuY2xhc3MgQ29uc2VxdWVudCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFVucXVhbGlmaWVkU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMudW5xdWFsaWZpZWRTdGF0ZW1lbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0QSA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBsb2NhbENvbnRleHRCLnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dEIuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc2VxdWVudFN0cmluZ30nIGNvbnNlcXVlbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy51bnF1YWxpZmllZFN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh1bnF1YWxpZmllZFN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zZXF1ZW50U3RyaW5nfScgY29uc2VxdWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb1VucXVhbGlmaWVkU3RhdGVtZW50SlNPTih0aGlzLnVucXVhbGlmaWVkU3RhdGVtZW50KSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudCA9IHVucXVhbGlmaWVkU3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHVucXVhbGlmaWVkU3RhdGVtZW50ID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KGZpbGVDb250ZXh0LCB1bnF1YWxpZmllZFN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlUXVlcnkoY29uc2VxdWVudE5vZGUpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50ID0gVW5xdWFsaWZpZWRTdGF0ZW1lbnQuZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoZmlsZUNvbnRleHQsIHVucXVhbGlmaWVkU3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBDb25zZXF1ZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VxdWVudDtcbiJdLCJuYW1lcyI6WyJ1bnF1YWxpZmllZFN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkNvbnNlcXVlbnQiLCJmaWxlQ29udGV4dCIsInVucXVhbGlmaWVkU3RhdGVtZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRVbnF1YWxpZmllZFN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25zZXF1ZW50U3RyaW5nIiwibG9jYWxDb250ZXh0QiIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEEiLCJ0cmFjZSIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInVucXVhbGlmaWVkU3RhdGVtZW50VmVyaWZpZWQiLCJ0b0pTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudEpTT04iLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRvVW5xdWFsaWZpZWRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRGcm9tSlNPTiIsImNvbnNlcXVlbnQiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJjb25zZXF1ZW50Tm9kZSIsInVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIlVucXVhbGlmaWVkU3RhdGVtZW50IiwiZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdHQTs7O2VBQUE7OzsyREF0R2lCOzREQUNRO2tFQUNRO3FCQUVQO29CQUNtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFNQSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEQsSUFBQSxBQUFNQywyQkFBTjthQUFNQSxXQUNRQyxXQUFXLEVBQUVDLG9CQUFvQjtnQ0FEekNGO1FBRUYsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOztrQkFIMUJGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLG9CQUFvQjtZQUNsQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsb0JBQW9CLENBQUNHLFNBQVM7WUFBSTs7O1lBRTVEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0IsQ0FBQ0ksWUFBWTtZQUFJOzs7WUFFbEVDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDbkQsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCSixVQUFVSCxTQUFTLElBQ3JDUSxtQkFBbUIsSUFBSSxDQUFDUixTQUFTO2dCQUV2QyxJQUFNUyxnQkFBZ0JKLGNBQWMsR0FBRztnQkFFdkNBLGVBQWVLLGNBQVksQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQ2YsV0FBVztnQkFFNUQsSUFBTWdCLGdCQUFnQlAsY0FBYyxHQUFHO2dCQUV2Q0ksY0FBY0ksS0FBSyxDQUFDLEFBQUMsaUJBQXdETCxPQUF4Q0QsaUJBQWdCLDBCQUF5QyxPQUFqQkMsa0JBQWlCO2dCQUU5RkYsbUJBQW1CLElBQUksQ0FBQ1Qsb0JBQW9CLENBQUNLLGNBQWMsQ0FBQ0MsV0FBV0MsZUFBZVEsZUFBZUg7Z0JBRXJHLElBQUlILGtCQUFrQjtvQkFDcEJHLGNBQWNLLEtBQUssQ0FBQyxBQUFDLG1CQUEwRE4sT0FBeENELGlCQUFnQiwwQkFBeUMsT0FBakJDLGtCQUFpQjtnQkFDbEc7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPVixZQUFZO2dCQUNqQixJQUFJVyxXQUFXO2dCQUVmLElBQU1SLG1CQUFtQixJQUFJLENBQUNSLFNBQVMsSUFBSyxHQUFHO2dCQUUvQ0ssYUFBYVEsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCTCxrQkFBaUI7Z0JBRXRELElBQU1TLFNBQVMsTUFDVEMsY0FBYyxFQUFFLEVBQ2hCQywrQkFBK0IsSUFBSSxDQUFDdEIsb0JBQW9CLENBQUNrQixNQUFNLENBQUNHLGFBQWFELFFBQVFaO2dCQUUzRixJQUFJYyw4QkFBOEI7b0JBQ2hDSCxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pYLGFBQWFTLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQk4sa0JBQWlCO2dCQUMxRDtnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQkMsSUFBQUEsb0RBQThDLEVBQUMsSUFBSSxDQUFDekIsb0JBQW9CLEdBQ25HQSx1QkFBdUJ3QiwwQkFDdkJFLE9BQU87b0JBQ0wxQixzQkFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTzBCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFM0IsV0FBVztnQkFDL0IsSUFBTUMsdUJBQXVCNEIsSUFBQUEsa0NBQTRCLEVBQUNGLE1BQU0zQixjQUMxRDhCLGFBQWEsSUEzRWpCL0IsV0EyRWdDQyxhQUFhQztnQkFFL0MsT0FBTzZCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRWhDLFdBQVc7Z0JBQ25ELElBQU1pQywyQkFBMkJwQyw4QkFBOEJtQyxpQkFDekQvQix1QkFBdUJpQyxvQkFBb0IsQ0FBQ0MsNEJBQTRCLENBQUNGLDBCQUEwQmpDLGNBQ25HOEIsYUFBYSxJQW5GakIvQixXQW1GZ0NDLGFBQWFDO2dCQUUvQyxPQUFPNkI7WUFDVDs7O1dBdEZJL0I7O0FBeUZOcUMsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJ2QyxZQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==